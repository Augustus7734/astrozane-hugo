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
  content/projects/24-inch-f4/         New project page for the 24-inch f/4, as a folder: index.md plus
                                       an empty images/ folder. URL is /projects/24-inch-f4/. When you
                                       have photos, drop them in images/ and uncomment the line at the
                                       bottom of index.md.
  static/astronomy/telescopes/images/  Three new photos for the Current Telescopes page (30-inch, MK127,
                                       SeeStar S50 Pro), resized with location data removed. If your
                                       existing telescope photos live somewhere else, move these three
                                       next to mk25.JPEG instead.
  REPLACE-MANUALLY/telescopes.md       Not for merging. Paste this over the contents of your existing
                                       Current Telescopes file: Intes removed; 30-inch, MK127 and
                                       SeeStar added.
  content/astronomy/starparties/venues.md
                                       New venue page at /astronomy/starparties/venues/ (resorts,
                                       hotels, vineyards, weddings, corporate), with pricing. This
                                       The URL is fixed in the front matter, so you can move the file
                                       next to your tucson and phoenix pages if they live elsewhere.
  content/astronomy/telescope-repair.md
                                       New repair page at /astronomy/telescope-repair/.
  REPLACE-MANUALLY/starparties.md      Not for merging. Your main star party page, edited: paste it
                                       over your existing file. Adds the deposit line, the 24-inch
                                       note, a "Star Parties for Venues" section, and a shorter
                                       repair section that links to the new page.
  REPLACE-MANUALLY/starparties-tucson.md
  REPLACE-MANUALLY/starparties-phoenix.md
                                       Not for merging. Your Tucson and Phoenix pages, edited: paste
                                       each over your existing file. Adds the deposit line, pricing
                                       and an FAQ answer for 21 to 100 guests, and a link to the
                                       venue page. Removes the 24-inch line.

  Sidebar note: neither new Astronomy page has a date, so both sort after your dated
  pages and after "Book A Star Party". If one does not show under Astronomy, raise the
  Limit on the Astronomy line of your menu config.
  content/calculators/limiting-magnitude.md
                                       Page at /calculators/limiting-magnitude/. It now holds the
                                       calculator itself, through the limiting-mag shortcode.
  layouts/shortcodes/limiting-mag.html The limiting magnitude calculator (the Nov 11 version, with
                                       your two corrections). It sits inline in the page, so it uses
                                       the site font and follows light and dark mode. Nothing needs
                                       to go in static/tools/ for it.
  layouts/shortcodes/tool.html         No longer used by that page. Embeds any file from
                                       static/tools/ in a frame that resizes to fit, if you want it.
  layouts/shortcodes/phone.html        Click-to-reveal phone number. In your contact page, replace the
                                       typed number with  {{< phone "##########" >}}  (ten digits). The
                                       digits no longer appear in the page source.
  static/images/avatar-placeholder.*   Placeholder sidebar avatar (PNG and SVG). To use it, set
                                       brand_image = "/images/avatar-placeholder.png" in your
                                       site config. The sidebar tagline is the description
                                       param in the same file.

Site config: two lines to set first
-----------------------------------
In your site config (hugo.toml or config.toml, top of the file, above [params]):

    baseURL = "https://astrozane.com/"
    title = "Zane Landers"

Right now the live site is built with baseURL = "/" and no title. That is why the
footer reads "(c) 2026 . All rights reserved." and, more importantly, why every
address in sitemap.xml is a bare path like /astronomy/starparties/ instead of a full
https://astrozane.com/... URL. Google needs full URLs in a sitemap, and the canonical
and og:url tags on every page have the same problem. Setting baseURL fixes all of
them at once; title fills in the footer name and og:site_name.

If the config already has the full address, the build command is overriding it:
in Cloudflare, look for "--baseURL" or "-b" in the build command and remove it.

Structured data on the venue and repair pages
---------------------------------------------
  layouts/shortcodes/zl-faq.html       Prints the "Common questions" list from zl_faq in the
                                       page's front matter.
  layouts/shortcodes/zl-schema.html    Outputs the page's structured data (service, prices,
                                       breadcrumbs, FAQ) from zl_service, zl_breadcrumb and
                                       zl_faq in the front matter.
  Both pages now use these. To change a price or an answer, edit the front matter; the
  page and the markup update together. The names start with zl so they cannot clash
  with your own faq and starparty-schema shortcodes.

Sidebar: Calculators
--------------------
Calculators does not show until your site config says so. In hugo.toml (or config.toml)
find the menu = [ ... ] list under [params] and add this line where you want it:

    {Name = "Calculators", URL = "/calculators/", HasChildren = true, Limit = 5},

Telescope Repair stays nested under Astronomy and needs no config line.

  layouts/partials/sidebar/menu.html   Copy of the theme's sidebar menu with one working
                                       addition: a page with "sidebar_hide: true" in its
                                       front matter is left out of its section's list. (It
                                       also accepts "Link = true" on a menu line for a
                                       top-level link to a single page, which nothing uses
                                       right now.) If you already have your own
                                       layouts/partials/sidebar/menu.html, keep yours and
                                       tell me; I will merge the two.

Trimming the sidebar
--------------------
Any page with this line in its front matter is left out of the sidebar. The page itself
and every link to it keep working:

    sidebar_hide: true

Already set in this package: the venue page. Add the line yourself to
these four pages (anywhere between the two --- lines, not indented):

    Star Parties in Tucson
    Star Parties in Phoenix & Scottsdale
    Other Telescope Projects
    Furniture Projects

The Tucson and Phoenix copies in REPLACE-MANUALLY already have it, if you would rather
paste those over again.

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
