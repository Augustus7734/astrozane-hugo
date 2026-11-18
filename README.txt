astrozane.com home page: install notes
======================================

MERGE these folders into your Hugo site. Do not replace your existing
content/, layouts/, assets/ or static/ folders with them.

  content/_index.md                    Home page copy. Hero, cards and FAQ live in the
                                       front matter; the long sections are Markdown.
  layouts/index.html                   Home page template (replaces the theme's post feed).
  layouts/partials/home/jsonld.html    Structured data: Person, star party business,
                                       TelescopicWatch, DarkSky Southern Arizona, FAQ.
  layouts/partials/head/meta.html      Copy of the Poison theme file with one change: the
                                       home page <title> and meta description come from
                                       seo_title / description in content/_index.md.
  assets/js/katex.js                   Stops prices being typeset as math (see below).
  static/robots.txt                    Allows search and AI assistants, lists the sitemap.
  static/llms.txt                      Optional plain-text summary for AI crawlers.
  static/images/avatar-placeholder.*   Placeholder sidebar avatar (PNG and SVG). To use it, set
                                       brand_image = "/images/avatar-placeholder.png" in your
                                       site config. The sidebar tagline is the description
                                       param in the same file.

Before you deploy
-----------------
1. If your site already has layouts/index.html or layouts/partials/head/meta.html,
   keep a copy of yours first. These files replace them.
2. If an older Person / LocalBusiness JSON-LD block is still output on the home page,
   remove it. jsonld.html covers both.
3. Header photo: put the image in static/images/, then uncomment hero.image and
   hero.image_alt in content/_index.md. For the social share image, put a 1200x630
   copy in assets/images/ and uncomment "image:" near the top of the same file.
4. Run "hugo server" and check the home page and one star party page.

The price bug this fixes
------------------------
The Poison theme renders anything between two single dollar signs as an equation.
On the live Tucson star party page, "about $80 a person; for a party of ten, about
$40" currently displays as a run-together math formula. assets/js/katex.js turns
that behaviour off site-wide. Math written between double dollar signs still works.

Cloudflare
----------
Your live robots.txt is Cloudflare's comment-only policy text with no rules and no
sitemap. static/robots.txt replaces it. Also check the AI crawler settings for
astrozane.com in the Cloudflare dashboard and make sure AI search and assistant
crawlers are not blocked; if they are, nothing on the page can be cited by chatbots.

Keeping it current
------------------
Update "lastmod", the booking window, prices and the Discord member count in
content/_index.md when they change. The FAQ markup is generated from the same list
as the visible FAQ, so editing one updates both.
