# PENNEC Website Plan

## Current Direction

The website should feel clinical, calm, trustworthy and modern, while being clearer and more visually polished than the current EPEN reference site.

The proposed identity is:

- White and pale ice-blue background
- Deep teal primary colour
- Muted cyan supporting colour
- Charcoal clinical text
- Small amber accent for important notices or map highlights
- Clean accessible typography
- Modest 6-8px corners
- Mobile-first structure

The homepage should not put the network map in the first mobile viewport. Following the EPEN mobile structure, the map should sit lower on the homepage in an `Our Network` section, after the core introduction and audience routes.

The map should still be beautiful, accurate and prominent, but it should behave as supporting network context rather than the first hero visual.

## Confirmed Network Map Sites

The map should show the PENNEC hospital/service network:

- James Cook University Hospital
- University Hospital of North Tees
- Sunderland and South Tyneside
- Northumbria
- Gateshead
- Darlington and Durham
- Cumbria
- Newcastle

Current mockup implementation uses:

- Newcastle - Great North Children's Hospital
- James Cook University Hospital
- University Hospital of North Tees
- Sunderland Royal Hospital
- South Tyneside District Hospital
- Northumbria Healthcare
- Gateshead - Queen Elizabeth Hospital
- Darlington Memorial Hospital
- University Hospital of North Durham
- Cumbria services

Cumbria is currently labelled as `Cumbria services` until a specific hospital/site is confirmed.

## Existing Mockups

Preview files in this workspace:

- `pennec-map-mockup.html`
- `pennec-map-mockup-desktop-v2.png`
- `pennec-map-mockup-mobile-v2.png`

The map preview uses OpenStreetMap/CARTO light tiles for reliable geography and a calm clinical look.

## Build Status

First static prototype started in:

- `pennec-map-mockup.html`

Live GitHub Pages site:

- `https://tedotedo.github.io/pennec/`

GitHub repository:

- `https://github.com/tedotedo/pennec`

Current live checkpoint:

- Date: 2026-05-09 16:15 BST
- Branch: `main`
- Commit: `d273b37` (`Refine scroll fade transitions`)

Current implemented sections:

- Responsive header and mobile menu
- Original PENNEC logo from old local website assets
- Large PENNEC logo that shrinks smoothly on scroll
- Smooth hover/focus transitions and sticky header shadow
- Subtle scroll fade-in/fade-out from the bottom
- English/Urdu language toggle for public-facing content
- Urdu mode uses `lang="ur"` and right-to-left layout
- Mobile scroll-to-top button
- Homepage hero
- Desktop/mobile hero `PENNEC at a glance` panel
- Audience route cards
- What PENNEC does
- Families & young people
- Schools & community
- Professionals & members
- Our Network map lower on the page
- About PENNEC
- Meetings & updates
- Trusted resources
- Contact band and footer
- Subtle creator credit: Website created by Dr Mark Aszkenasy

Links added from EPEN / related national resources:

- OPEN UK, via RCPCH
- Epilepsy12 audit, via RCPCH
- NICE epilepsy guideline NG217
- RCPCH Epilepsy Passport
- Healthier Together epilepsy advice
- Epilepsy Action child epilepsy advice
- Medicines for Children epilepsy medicines leaflet
- EPEN as a fellow regional network reference

Latest verification screenshots:

- `pennec-live-logo-desktop.png`
- `pennec-live-logo-mobile.png`
- `pennec-logo-large-desktop.png`
- `pennec-logo-large-mobile.png`

Interaction checks completed:

- Mobile menu includes `Home`
- Mobile menu closes on outside tap
- Mobile menu closes on Escape
- Anchor navigation offsets headings below sticky header
- Scroll-to-top button appears after scrolling
- Header/logo shrinks on scroll
- Scroll reveal respects reduced-motion preferences
- Urdu toggle switches text, direction, document language and persists choice in local storage

## Primary Audiences

The site should make these journeys obvious from the first screen:

- Families and young people
- Schools and community services
- Healthcare professionals and PENNEC members
- Commissioners, charities and partner organisations

## Proposed Site Structure

### Home

Purpose:
Introduce PENNEC, route visitors to the right section, and show the network map lower down the page.

Key sections:

- Hero with PENNEC mission and clear calls to action
- Public resources action
- Professionals area action
- Audience cards
- What PENNEC does
- Our Network section with regional map and hospital/service list
- Regional services
- Meetings and updates
- Trusted national resources

### Families & Young People

Purpose:
Accessible public information for children, young people, parents and carers.

Content:

- What epilepsy is
- What to do after a first seizure
- Safety and seizure first aid
- When to seek urgent help
- Clinic and care pathway information
- Links to Healthier Together, Epilepsy Action, NICE and RCPCH

### Schools & Community

Purpose:
Help schools and community teams support children with epilepsy consistently.

Content:

- School epilepsy awareness
- Emergency plans
- Medication support
- Practical safety guidance
- Links for training and downloadable resources

### Professionals & Members

Purpose:
Professional collaboration, education and regional improvement work.

Content:

- Meetings
- Educational resources
- Regional guidance
- Quality improvement work
- Epilepsy12 and audit participation
- PENNEC Alliance updates
- Member-only resources if needed

### About PENNEC

Purpose:
Explain history, governance and purpose.

Content from the Word document:

- Founded with guidance from Dr Devlin and Dr Ramesh
- First meeting in Windermere in 2002
- Biannual meetings
- Written constitution
- Committee roles: Chair, education/training lead, treasurer
- Administrative support
- Pharmaceutical sponsorship for educational sessions
- Support for nursing education

### Meetings & Updates

Purpose:
Make the network active and current.

Content:

- Upcoming meetings
- Past meeting summaries
- Education events
- Network announcements
- Contact route for members

### Contact

Purpose:
Simple, clear route for enquiries.

Content:

- General network contact
- Professionals/membership enquiries
- Disclaimer that urgent clinical advice should come from local NHS/urgent care routes

## Homepage Content Draft

Hero headline:

Paediatric Epilepsy Network for the North East and Cumbria

Hero copy:

Shared learning, regional collaboration and better epilepsy care for children and young people.

Primary buttons:

- Public resources
- Professionals area

Audience cards:

- Families & young people: Reliable guidance, links to trusted resources, and information about local epilepsy care.
- Schools & community: Practical support for safer, more coordinated care around children and young people.
- Professionals & members: Meetings, clinical resources, education, service updates and quality improvement work.

What PENNEC does:

- Education
- Shared standards
- Quality improvement
- Regional collaboration

## Build Plan

First implementation completed:

1. Build a static responsive website prototype.
2. Use the current map mockup as the homepage direction.
3. Place the map lower on the page, similar to EPEN mobile, rather than in the hero.
4. Keep the map interactive on desktop but calm and readable on mobile.
5. Create reusable sections for audience cards, resources, network sites and updates.
6. Add a clean navigation system with mobile menu.
7. Populate the content from the Word document, rewritten into concise web copy.
8. Add placeholders for meeting dates and member-only content.
9. Test desktop and mobile screenshots before refining.

Recommended next work:

1. Confirm exact hospital/service labels, especially Cumbria and Northumbria.
2. Confirm the contact email or replace the placeholder contact link.
3. Confirm whether professional/member resources will be public or restricted.
4. Add real meeting dates and any approved downloadable resources.
5. Review wording with PENNEC colleagues before replacing placeholder copy.
6. Decide whether to keep GitHub Pages URL or add a custom domain.

## Open Questions

- Which exact Cumbria hospital or service location should be shown?
- Should Northumbria be represented by one site or multiple sites?
- Should Sunderland and South Tyneside be separate markers or grouped as one service?
- Is a restricted professionals area required in the first version, or should it begin as a visible section with future login support?
- Does PENNEC have an existing logo, NHS partner logos, or brand requirements?
