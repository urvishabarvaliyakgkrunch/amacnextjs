<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform" xmlns:sitemap="http://www.sitemaps.org/schemas/sitemap/0.9">
<xsl:output method="html" version="1.0" encoding="UTF-8" indent="yes"/>
<xsl:template match="/">
<html lang="en">
<head>
  <title>XML Sitemap - amac.ie</title>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <style>
    * { box-sizing: border-box; }
    body { margin: 0; font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Arial, sans-serif; color: #22282B; background: #f6f5ef; }
    .banner { background: #36741b; color: #fff; padding: 18px 24px; font-size: 14px; line-height: 1.6; }
    .banner a { color: #fff; text-decoration: underline; }
    .wrap { max-width: 1000px; margin: 0 auto; padding: 30px 24px 60px; }
    .intro { color: #4b5349; font-size: 14px; margin-bottom: 18px; }
    table { width: 100%; border-collapse: collapse; background: #fff; border-radius: 10px; overflow: hidden; box-shadow: 0 4px 16px rgba(20,30,10,.06); }
    thead th { background: #1b1d1a; color: #fff; text-align: left; font-size: 12px; text-transform: uppercase; letter-spacing: .06em; padding: 12px 16px; }
    tbody td { padding: 12px 16px; border-top: 1px solid #e7e6df; font-size: 13.5px; }
    tbody tr:hover { background: #f6f5ef; }
    a.loc { color: #36741b; font-weight: 700; text-decoration: none; word-break: break-all; }
    a.loc:hover { text-decoration: underline; }
    .count { font-size: 13px; color: #6e7a73; margin-bottom: 14px; }
  </style>
</head>
<body>
  <div class="banner">
    This XML Sitemap is generated for search engines like Google to crawl and recrawl pages on this website.
  </div>
  <div class="wrap">
    <p class="count">
      This XML Sitemap contains <xsl:value-of select="count(sitemap:urlset/sitemap:url)"/> URLs.
    </p>
    <table>
      <thead>
        <tr>
          <th>URL</th>
          <th>Priority</th>
          <th>Last Modified</th>
        </tr>
      </thead>
      <tbody>
        <xsl:for-each select="sitemap:urlset/sitemap:url">
          <tr>
            <td><a class="loc" href="{sitemap:loc}"><xsl:value-of select="sitemap:loc"/></a></td>
            <td><xsl:value-of select="sitemap:priority"/></td>
            <td><xsl:value-of select="sitemap:lastmod"/></td>
          </tr>
        </xsl:for-each>
      </tbody>
    </table>
  </div>
</body>
</html>
</xsl:template>
</xsl:stylesheet>
