VBANK WEBSITE REDESIGN — QUICK START

1. Extract the ZIP file.
2. Keep index.html, styles.css, animations.js, and the assets folder together.
3. Open index.html in a modern browser to preview the static website.

DESIGN HIGHLIGHTS
- Uses the supplied Vbank logo in the header and footer.
- Light, predominantly white and mint visual theme with stronger text contrast.
- Filipino family-focused lifestyle imagery in the community section.
- Dedicated 5% savings feature with animated ripple/vacuum-style CTA emphasis.
- Kabataan Savings concept section, product cards, core values, app mockups, and hero slideshow.
- Poppins and Lexend typography.

IMPORTANT BEFORE PUBLICATION
This is a front-end concept/prototype, not a production banking portal. The app screens and account details are illustrative. Confirm the current interest rate, minimum ADB, product eligibility, contact details, regulatory statements, and all approved brand assets with Vbank before publishing. Do not collect real credentials or financial information through this prototype.

LATEST UPDATE — HERO SLIDESHOW & APP PROMOTION
- The hero slideshow now contains three slides: Bangko ng Masa, Core Values, and Download the Vbank App.
- The 5% interest promotion has been removed from the hero slideshow. It remains in its own dedicated savings section below the hero.
- The app promotion includes App Store and Google Play call-to-action buttons and a clearly marked QR placeholder.
- IMPORTANT: Replace the QR placeholder with an official scannable Vbank app download QR code and connect the store buttons to the verified App Store and Google Play listings before publishing. The current buttons scroll to the app download information section and are not live store links.


APP QR CODES
- assets/qr-ios-demo.png and assets/qr-android-demo.png are distinct demonstration QR codes.
- They point to example.com demo URLs only and are NOT official Vbank app download links.
- Replace them with official App Store and Google Play URLs/QR codes before launch.


VISUAL UPDATE
- Added four product-card illustration crops from the latest user-provided product icon reference image.
- Refreshed the color system with light rose, violet, mint and teal accents. This is a design demo; replace any placeholder marketing, app-store and regulatory content with approved production assets before launch.


ACCESSIBILITY / TYPOGRAPHY UPDATE
- Improved body text sizing and line spacing for easier reading.
- Added a consistent heading hierarchy for desktop and mobile.
- Increased readability of product descriptions, navigation, buttons, annual reports, and regulatory copy.
- Kept small labels secondary while avoiding overly tiny supporting text.


HERO MARKETING / MOTION UPDATE
- Added marketing benefit chips and clear calls to action to the Masa and Core Values slides.
- Added app feature highlights and simplified App Store / Google Play buttons to the app slide.
- Added a subtle floating animation to the official V watermark in branded section backgrounds.
- Honors reduced-motion preferences.


BRAND TYPOGRAPHY ALIGNMENT
- Updated the complete website typography to Lexend, Vbank's primary sans-serif typeface per Vbank Branding Guidelines 2024, page 23.
- Replaced Poppins overrides in interface and marketing components so headings, body copy, buttons, navigation, and labels consistently use Lexend.
- The supplied logo artwork remains unchanged; the guideline identifies Toms Burich as the logo typeface on page 22.


INTERACTION / ANIMATION UPDATE
- Added slow floating and subtle glow motion to the official V watermark across branded section backgrounds.
- Refined hero slideshow navigation to minimal dot-only controls with hover and keyboard focus states; slide buttons retain accessible labels.
- Added a floating animated Vbank chat launcher at the bottom-right. It opens a demo welcome panel and clearly explains that it is not a live support service.
- All motion respects prefers-reduced-motion settings.


HERO SLIDESHOW / OFFICIAL LOGO UPDATE
- Replaced the typed V in the family-photo caption with the official standalone Vbank V symbol asset.
- Expanded the hero slideshow from three to five slides: Bangko ng Masa, Core Values, Vbank App, Savings Goals, and Everyday Progress.
- Added matching image panels, marketing captions, calls to action, and five accessible dot controls.
- New slides reuse the supplied Filipino family and community photography assets.


HERO / PRODUCT VISUAL REPAIR
- Corrected hero carousel markup so all five marketing text slides are siblings in the text carousel, separate from the five visual panels. This prevents slide copy from appearing inside and overflowing the app preview.
- Enforced active/inactive visibility for hero visual panels.
- Refined product artwork panels with dimensional surfaces, soft depth shadows, perspective, and subtle hover lift while retaining the supplied illustration assets.


CORRECTIVE REPAIR (2026-11-20)
- Rebuilt the complete hero section markup to fix invalid nesting: five text slides are direct siblings inside the text carousel, and five image panels are direct siblings inside the visual viewport.
- Rebuilt hero responsive layout with fixed image viewport dimensions and explicit active/inactive states, so the app QR/app preview cannot be overlaid by other slide text.
- Replaced all four former flat product art images with newly generated, separate 3D-style product illustrations: wallet, savings safe and coins, home/key, and mobile banking phone.
- Updated product art rendering to contain the full generated 3D artwork rather than stretch/crop it.


PRODUCT ART CONTAINMENT AND FOOTER CONTRAST FIX
- Product artwork now has a fixed-height responsive image stage; each 3D image is contained, centered, and constrained to 78-82% of the stage so it cannot spill into product titles or descriptions.
- Product card content has explicit flex sizing and overflow handling for desktop and mobile.
- Footer rebuilt visually as a soft rose/lavender/mint gradient with dark readable text, dark links, clear regulatory copy, and responsive columns. BSP/PDIC logos remain on white-backed tiles.


HERO SLIDESHOW AUTOPLAY FIX
- Replaced the previous global slide selectors with hero-scoped selectors for the five text slides and five visual panels.
- Autoplay now advances every exactly 5,000 milliseconds (5 seconds).
- Clicking any dot changes both the text and image panel together, then restarts the five-second timer.
- Pauses while the visitor hovers/focuses the hero and while the browser tab is hidden; resumes with a fresh five-second interval.
- Added explicit active/inactive visibility rules to prevent inactive slides from covering the current slide.


Vbank design refresh requested 2026-11-27
- Hero carousel timing changed to 3 seconds (3,000 ms).
- Removed the hero slideshow background decoration for a cleaner white hero presentation.
- Removed Branch & ATM Locator references and replaced shortcut/navigation content with Digital Banking and Security & Privacy.
- Added Follow Vbank social shortcuts in the header and a social accounts row in the footer. These are placeholders because official account URLs/handles were not supplied; connect verified Vbank account URLs before publishing.
- Updated label backgrounds to a soft pink-to-white treatment and shifted pink headline/accent text toward Vbank teal/green.
- Restyled the 5% savings feature with a green background and angled lower edge.
- Replaced the four product art assets with separate corporate banking-style SVG illustrations: savings wallet, time-deposit coins, home loan, and mobile banking.
- Added a Data Protection Officer / Data Privacy contact block with a shield icon. Uses the existing customer-care address; confirm the official DPO contact details with Vbank before publication.
- Added BancNet and Mastercard visual marks in the regulatory/footer area. Verify official partner usage and approved artwork before public release.
- Updated primary buttons to Vbank green, with restrained red/rose secondary accents.
- Official Vbank logo artwork already uses the lowercase “bank” wordmark; preserved the supplied logo asset.


FOOTER GRID REPAIR
- Rebuilt the footer as four aligned desktop columns: Vbank brand, quick links, contact/privacy, and regulatory disclosures.
- Integrated the Data Protection Officer information into the Contact Us column instead of leaving it as an orphaned fifth grid item.
- Aligned BSP and PDIC logos beside their respective disclosure copy, with BancNet and Mastercard marks below.
- Rebuilt the social links row and copyright/legal bottom bar with responsive tablet/mobile stacking.
- Applied consistent container widths, spacing, typography, and text wrapping to prevent footer items from scrambling or overflowing.


NO-PINK THEME UPDATE
- Removed pink/rose background treatments throughout the page and replaced them with white, mint, and cool-neutral surfaces.
- Shifted pink accent text and buttons to Vbank teal/green for consistent contrast.
- Kept the green 5% interest feature.
- Preserved the official standalone Vbank V symbol asset and the subtle V watermark treatment; logo colors are not recolored.


NPC DATA PRIVACY BADGE AND HERO SOCIAL/AUTOPLAY FIX (2026-11-27)
- Replaced the incorrect individual "Data Protection Officer" description with the user-provided National Privacy Commission DPO/DPS registration badge image.
- The footer now labels this as "Data Privacy Registration" and "National Privacy Commission — DPO/DPS".
- Added the supplied image as assets/npc-dpo-dps-registration.png.
- Added visible social media shortcuts within the hero area; existing header shortcuts remain. They currently point to the footer social section because official profile URLs/handles were not supplied.
- Rebuilt the hero carousel initialization to run after DOM readiness, synchronize all five text slides and five visual panels, and advance every 3,000 milliseconds.
- Removed hover and keyboard-focus pausing, which could leave the carousel appearing stuck while the pointer/focus remained inside the hero. Manual dot selection still works and restarts the three-second timer.
- IMPORTANT: The supplied NPC badge image displays a validity date of 13 June 2026. Confirm whether a renewed/current certificate is available before publishing it as current registration proof.


HERO SOCIAL LINKS LAYOUT REPAIR (2026-11-27)
- Removed the duplicate social media row from the footer.
- Removed social shortcuts from the utility/header bar so social links appear only once, in the hero.
- Moved the hero social links into the hero copy column after the proof line, so they participate in normal layout flow instead of sitting between the hero grid and slide pagination.
- Added responsive sizing, wrapping, and spacing for desktop/mobile; kept carousel dots in their own bottom position with reserved hero padding to avoid overlap.
- Official social URLs were not supplied, so icon links are placeholders until Vbank's verified profile URLs are provided.


SECTION BACKGROUND ALTERNATION UPDATE
- Removed the large V watermark backgrounds that were repeating across multiple sections and visually competing with content.
- Preserved the official Vbank V logo where used as a foreground logo/brand mark.
- Applied strong Vbank green backgrounds only to the 5% interest feature and Filipino community/masa highlight section.
- Kept product, Kabataan, annual reports, news, and most information sections white or very lightly tinted for clear alternation and readability.
- Kept the footer in a soft neutral mint treatment.


NPC DPO/DPS BADGE FOOTER ALIGNMENT
- Replaced the earlier NPC badge image with the latest user-supplied DPO/DPS registration badge.
- Moved the NPC badge out of the Contact Us column and into the regulatory disclosure column alongside BSP and PDIC.
- Aligned all three regulatory items using the same two-column image-and-disclosure layout.
- Kept the NPC badge's tall original aspect ratio with a dedicated responsive image size, while BSP and PDIC marks retain compact logo tiles.
- Updated desktop and mobile sizing to prevent the NPC badge from stretching or disrupting the disclaimer alignment.


MEETING AGREED ENHANCEMENTS ADDED (2026-11-27)
- Slide Transition: retained automatic hero slide transitions at 3 seconds (3,000 ms); clickable dot navigation remains.
- Website Content: Branch and ATM Locator section is not part of the site; existing replacement content focuses on Digital Banking and Security & Privacy.
- Background and Typography: retained the clean white/mint section alternation, green highlight sections, and Lexend typography.
- Branding Consistency: normalized visible brand spelling to "Vbank"; official supplied Vbank logo asset remains in use.
- DPO/DPS Logo and Link: latest user-provided NPC DPO/DPS badge is clickable and opens data-privacy.html.
- Data Privacy Statement: added a dedicated draft page. It is explicitly marked for legal/compliance review because the bank's actual processing details, lawful bases, retention periods, DPO contact, and effective date were not supplied.
- BancNet Logo and Link: BancNet mark is clickable and links to https://bancnet.com.ph/.
- Mastercard Logo and Link: Mastercard mark is clickable and links to https://www.mastercard.com/ph/en.html.
- Brand Name Consistency: visible website and script copy now uses "Vbank" rather than "VBank".
- Website Imagery: retained separate image assets for the hero, product illustrations, app preview, and Filipino community content; no new image has been reused in this update.
- Color Application and Highlighting: retained green highlight backgrounds for key feature sections and white/light-mint backgrounds for standard content sections.
- Social media links remain in the hero section only; no duplicate footer social row.

- BancNet outbound link updated to the current official corporate website, https://bancnet.com.ph/.


PRODUCT VISUALS AND GREEN-SECTION CONTRAST UPDATE (2026-11-27)
- Reworked the four product artwork SVGs (Savings, Time Deposits, Loans, Digital Banking) with more restrained corporate banking styling, polished gradients, refined materials, subtle depth, and cleaner composition.
- Removed cartoon-like decorative details and reduced visual noise; illustrations are centered and contained within fixed-height product art panels.
- Refined product art panel surfaces with soft neutral/mint backgrounds and restrained shadows.
- Increased contrast in the green 5% interest feature: white headings and supporting copy, light mint eyebrow badge, and dark readable text on the white offer card.
- Increased contrast in the green Filipino community section: white headings/body copy and high-contrast mint labels/numeric markers.
- Added explicit opacity and color values to avoid inherited low-contrast text styles.


BANCNET LOGO UPDATE
- Replaced the text-based BancNet wordmark with the latest user-supplied BancNet logo artwork.
- Removed the checkerboard background from the supplied image and saved a transparent PNG in assets/bancnet-logo.png.
- Kept the BancNet logo clickable, linking to the BancNet official website.
- Added responsive logo sizing and a simple white logo tile consistent with the regulatory footer row.


COMMUNITY SECTION IMAGE AND TEXT CONTRAST UPDATE
- Removed the repeated Filipino family photo from the "Banking that feels close to home" community section; that section now uses a separate original neighborhood banking illustration asset.
- The hero slideshow retains its own Filipino community and family photos, so the same photo is no longer repeated in the community section.
- Reworked the community section into a light mint/white treatment with dark forest-green heading/body text and teal emphasis for strong readability.
- Improved heading scale, paragraph line-height, point labels, and mobile stacking.


PRODUCT ICONS — CORPORATE BANKING REDESIGN
- Replaced the four product SVG artworks again with a consistent corporate banking icon family rather than illustrative/cartoon-style scenes.
- Savings Accounts: structured savings ledger/account panel with a clear deposit/add-funds symbol.
- Time Deposits: formal deposit certificate/record with a restrained clock motif to communicate term and maturity.
- Loans: architectural banking/home-finance symbol with precise navy linework.
- Digital Banking: secure mobile banking device with a verification shield.
- Standardized icon scale, line weights, background treatment, and accent palette (Vbank teal, deep institutional green/navy, and restrained gold).
- Removed the oversized decorative card treatment and excess shadowing; product art now uses a clean neutral presentation stage.
- Updated the smaller product category icons, typography, and text contrast to match the more professional banking catalogue.


COMMUNITY PHOTO REPLACEMENT
- Replaced the community-section family-at-home photo with a new, distinct image of a Filipino sari-sari store owner using her phone.
- This community-section image is separate from the hero slideshow assets, preventing photo repetition between the two areas.
- Updated the alt text and photo crop for the wide community image layout.


OFFICIAL VBANK V WATERMARK UPDATE
- Extracted only the stylized V mark from the supplied Vbank logo asset; the wordmark is not included in the watermark.
- Added subtle, low-opacity V marks to selected sections: Our Products, community, About/Core Values, 5% featured savings, and Annual Reports.
- Kept the marks behind section content with pointer events disabled, varied positioning, and responsive sizing.
- Watermarks are deliberately selective and subtle to avoid clutter and preserve readability.


V WATERMARK CLEANUP
- Removed standalone V badges/icons from hero photo captions and app/digital sections, including versions shown inside circular/boxed treatments.
- Removed older duplicated/animated watermark layers from prior CSS iterations.
- Retained only the plain V letter watermark (the actual V cropped from the supplied Vbank logo) in two selected sections: About/Core Values and the 5% featured-savings section.
- The watermark has no circle, badge, border, or card behind it; it is a subtle low-opacity background mark only.


BALANCED V WATERMARKS AND GREEN SECTION DECORATION
- Enlarged the standalone V watermark and applied it selectively to white-background sections: quick links, products, Kabataan Savings, digital banking, app download, annual reports, and news.
- Kept watermark opacity low and placed it behind content for visual balance and readability.
- Removed the V watermark treatment from the green 5% and community sections.
- Added restrained abstract radial/ring decorations to the green feature sections instead, using subtle translucent tones that complement the green backgrounds without competing with content.
- Retained the standalone V mark in the About/Core Values section at a slightly larger, subtle scale.


DIGITAL SECTION V REMOVAL, WATERMARK MOTION AND CHAT BRAND UPDATE
- Removed the redundant standalone V watermark from the Digital Banking feature section (#business), which already has a circular halo and phone mockup as its own visual treatment.
- Added a slow, restrained floating animation to the standalone V watermarks only; the primary Vbank logo/wordmark is not animated.
- Tuned watermark sizes by section density: smaller in compact/utility areas, medium in products and annual reports, and larger in spacious feature sections.
- Added reduced-motion support so users who prefer reduced motion do not receive the watermark animation.
- Recolored the floating chat launcher and pulse from pink/purple to Vbank teal/green, and matched the chat header, close button, panel border, and shadows to the same brand palette.


ICON AND LOGO MICRO-ANIMATION UPDATE
- Added subtle hover/focus motion to product category icon tiles and their SVG line icons.
- Added a small lift response to Quick Links icons.
- Added a restrained hover lift to the Annual Reports document mark.
- Added hover-only lift/shadow feedback to BSP, PDIC, NPC, BancNet, and Mastercard marks; the official marks do not constantly animate.
- Added hover/focus feedback to the hero social buttons and a gentle pulse to the iOS/Android platform marks when their QR cards are hovered.
- Included prefers-reduced-motion handling for accessibility.


ALTERNATING V WATERMARK LAYOUT
- Repositioned the standalone V watermarks in a deliberate left/right sequence across selected light sections to balance each section's content layout.
- Quick Links: left; Our Products: right; Kabataan Savings: left; App Download: right; Annual Reports: left; News: right.
- Positioned the marks toward available negative space and kept them behind section content at low opacity.
- Removed extra V marks from Core Values and the 5% feature sections so their existing background treatments remain uncluttered.
- Added mobile-specific smaller watermark sizing and opacity.


5% SAVINGS FEATURE — PESO GROWTH VISUAL
- Added a custom vector illustration featuring stacked Philippine peso coins, a peso banknote, and an upward growth arrow.
- Placed the illustration in the open lower area of the green savings feature section so it supports the message without covering the 5% offer card or headline.
- Added a gentle floating animation, with reduced-motion support.
- The illustration is decorative and does not imply a guaranteed return; existing promotional terms/disclaimer remain in place.


5% SAVINGS FEATURE — PESO GROWTH ILLUSTRATION AND V BRAND MARK
- Added a custom Philippine-peso-themed illustration with stacked coins, a stylized peso banknote, and an upward growth arrow to reinforce the savings-growth message.
- Added the official standalone V letter from the Vbank logo as a subtle background mark in the 5% savings feature only.
- Positioned the V in available negative space between the feature copy and offer card, behind the foreground content and money illustration.
- Added a gentle float animation and responsive sizing; opacity is reduced on mobile to preserve readability.
- The peso illustration is decorative and does not depict an actual banknote or imply guaranteed investment returns.


5% SAVINGS FEATURE — REFINED BACKGROUND / ENGRAVED V
- Reverted the previous decorative peso coins, banknote, and growth-arrow illustration; removed its markup and SVG asset.
- Removed the floating/animated V logo treatment from the savings feature.
- Replaced the overly saturated green background with a calmer Vbank teal-to-forest gradient and restrained tonal glow.
- Added the official standalone V mark as a large, low-contrast engraved/embossed background impression using offset light and dark layers.
- Kept the V behind the copy and 5% offer card, with responsive sizing and no circle, badge, or separate icon treatment.
- Preserved the 5% offer content and card.


FOOTER AND REGULATORY ADVISORIES LAYOUT UPDATE
- Rebalanced the main footer into three clear columns: Vbank brand, Quick Links, and Contact Us.
- Moved BSP supervision, PDIC deposit insurance, and NPC DPO/DPS registration into a separate full-width "Regulatory advisories & payment networks" band below the main footer columns.
- Presented the three regulatory notices as aligned cards with consistent image sizing, text hierarchy, spacing, and borders.
- Grouped BancNet and Mastercard beneath the regulatory cards in a dedicated payment-network row.
- Kept the regulatory design disclaimer separate beneath the payment-network marks.
- Updated the footer background to a clean, light mint gradient with readable dark text and responsive tablet/mobile layouts.
- Preserved the existing regulatory descriptions, official external links, and Data Privacy Statement link.


ALTERNATING FEATURE SECTION LAYOUT
- Kept the community story section with its photo on the left and copy on the right.
- Reversed the Kabataan Savings section on desktop: text now appears on the left and the savings visual appears on the right.
- On tablet and mobile, the Kabataan copy appears first followed by its visual, preserving a readable single-column flow.


FOOTER PAYMENT NETWORK PRESENTATION
- Centered the BancNet and Mastercard logos beneath a short marketing heading and supporting message.
- Added a responsive centered layout and kept both logos clickable to their official websites.
- Added a note that supported services and applicable transactions remain subject to Vbank's current arrangements and terms. Please confirm the exact wording with Compliance before publishing.


Vbank brand accent refinement
- Introduced restrained red/pink accents on selected green-highlighted headings, section labels, and eyebrow text using the Vbank logo palette.
- Kept the primary green/teal identity intact for backgrounds, buttons, and core interface elements.
- Updated the floating chat launcher to a red-to-teal gradient drawn from the Vbank logo colors, with a matching red pulse ring and coordinated chat-panel header.


Vbank color refinement — balanced red and teal
- Rebalanced the palette to keep teal/green as the dominant brand color and use the Vbank logo red (#D9365B) only for selected emphasized heading words, small labels, and the hero eyebrow line.
- Returned hero taglines and general eyebrow text to readable dark teal instead of making all labels red.
- Replaced the floating chat launcher’s red/pink gradient with a solid teal gradient consistent with the Vbank brand.
- Added a small red notification-style accent dot to the chat launcher and a restrained red detail to the chat panel header.
- Reduced the pulse ring to a soft red tint; retained readable white iconography and accessible reduced-motion behavior.


SOCIAL MEDIA ICON COLOR UPDATE
- Kept the Facebook, Instagram, and LinkedIn buttons circular and consistent in size.
- Applied each platform's recognizable colors: Facebook blue, Instagram gradient, and LinkedIn blue.
- Kept white icon lettering for contrast and added a subtle lift/brightness hover interaction.
- Existing social profile URLs remain placeholders (#) and should be replaced with Vbank's official account links before publication.


CAREERS PROMOTION AND DEDICATED CAREERS PAGE
- Added a "Careers" navigation link in the main Vbank website header.
- Added a separate homepage recruitment promotion: "Make a difference. Grow with us." with a "Join our team" call to action.
- Created a standalone careers.html page with a dedicated recruitment banner, purpose-led introduction, three culture/value cards, and a contact CTA.
- Added a custom careers-only banner image featuring Filipino colleagues in a Vbank-inspired office setting.
- The careers page does not claim specific vacancies or hiring terms. The contact CTA points to the existing Vbank contact section; replace it with an approved recruitment email or application portal when available.
- Responsive layouts included for desktop and mobile.


HERO SOCIAL AND CAREERS PLATFORM LINKS
- Reworked the hero social row into two clearly separated groups placed side by side: "Follow Us" and "Join Us".
- Follow Us contains Facebook, Twitter, and Instagram circular icons in recognizable platform colors.
- Join Us contains LinkedIn Jobs and JobStreet links with platform branding, intended for visitors looking for Vbank career opportunities.
- Facebook, Twitter, and Instagram profile URLs remain placeholders (#) because the official Vbank profile URLs were not provided. Replace them before launch.
- LinkedIn Jobs and JobStreet currently link to their public job-search entry pages; replace with Vbank's verified employer profiles/job listings when available.


CAREERS PROMOTION BRAND MARK CORRECTION
- Replaced the generic typed capital V watermark in the homepage Careers promotion with the official Vbank symbol asset (assets/vbank-symbol.png).
- Preserved the official two-tone red/magenta and teal V mark, displayed as a subtle translucent watermark behind the People First card.
- Responsive sizing and opacity adjustments keep the mark decorative and prevent it from competing with the Careers heading or CTA.


NEWS & ADVISORIES WATERMARK CLEANUP
- Removed the decorative Vbank V watermark from the News & Advisories section only.
- Kept the section's existing background, text, spacing, and other section watermarks unchanged to reduce visual repetition.


CONTACT DETAILS UPDATED FROM USER-PROVIDED VIGAN BANCO RURAL NOTICE
- Landline numbers: 632-0326 and 604-4905.
- Mobile number: 0917-856-5853.
- Address: 115 Salcedo St., Brgy. III, Vigan City, Ilocos Sur.
- Updated the top utility bar and footer Contact Us section.
- Note: the notice image does not show a telephone area code, so the displayed numbers are preserved exactly as printed rather than adding an unverified area code.
