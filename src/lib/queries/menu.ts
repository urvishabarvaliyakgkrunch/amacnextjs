// src/lib/queries/menu.ts
import { gql } from "@/lib/graphql";
import { NAV_LINKS, type NavLink } from "@/components/layout/nav-links";

export const MENU_TAG = "menu";
// 1 week — menu rarely changes; /api/revalidate can clear the "menu" tag sooner
const ONE_WEEK = 604800;

const GET_HEADER_MENU = `
  query GetHeaderMenu {
    menu(id: "Header Menu", idType: NAME) {
      menuItems(first: 100) { nodes { id parentId label uri path } }
    }
  }
`;

type MenuItem = { id: string; parentId: string | null; label: string; uri: string | null; path: string | null };
type MenuData = { menu: { menuItems: { nodes: MenuItem[] } } | null };

// WP may return absolute URLs; the app only needs the path part
function toPath(item: MenuItem) {
  const raw = item.path ?? item.uri ?? "/";
  try {
    const path = new URL(raw, "https://amac.ie").pathname.replace(/\/+$/, "");
    return path || "/";
  } catch {
    return raw;
  }
}

// Flat WP list -> two-level tree, which is all the nav UI supports
function buildTree(items: MenuItem[]): NavLink[] {
  const top = items.filter((i) => !i.parentId);
  return top.map((parent) => {
    const children = items
      .filter((i) => i.parentId === parent.id)
      .map((c) => ({ label: c.label, href: toPath(c) }));
    return { label: parent.label, href: toPath(parent), ...(children.length ? { children } : {}) };
  });
}

export async function getHeaderMenu(): Promise<NavLink[]> {
  try {
    const data = await gql<MenuData>(GET_HEADER_MENU, {}, { revalidate: ONE_WEEK, tags: [MENU_TAG] });
    const nodes = data.menu?.menuItems.nodes ?? [];
    return nodes.length ? buildTree(nodes) : NAV_LINKS;
  } catch {
    // GraphQL down or menu missing: keep the site usable with the built-in menu
    return NAV_LINKS;
  }
}
