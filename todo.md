# URI-ISE Website Task Tracker

Welcome to the URI Industrial & Systems Engineering lab website repository! This document tracks upcoming features, bug fixes, architecture improvements, and content updates. Lab members are encouraged to pick up tasks and submit Pull Requests.

---

## 🐛 Bug Fixes & Immediate Needs
- [x] ⭐ **Navigation Highlighting Logic**
  - **Issue**: The `nav-highlight` class is incorrectly hardcoded onto the "Industry 4.0" link on every page.
  - **Action**: Update the navigation logic in Astro so `nav-highlight` dynamically applies to the current page URL.
- [x] **Dark Mode Navigation Styling**
  - **Issue**: The dropdown menu styling breaks in dark mode. Text becomes illegible (e.g., white text on white background or dark blue on a dark background for "Our Work").
  - **Action**: Update CSS variables in global styles ensuring `.dropdown-menu` and hover states have proper contrast in the `[data-theme="dark"]` selector.
- [ ] **Broken Project Links**
  - **Issue**: Currently, only Luke's projects are listed on the Projects page, and the links do not work.
  - **Action**: Fix routing for existing projects and ensure valid URLs.

---

## 🚀 New Features & Enhancements
- [ ] ⭐ **Contact Form Dropdown Categories**
  - **Description**: The 'Subject' dropdown menu in the contact form is currently empty.
  - **Action**: Populate it with options (e.g. "Research Collaboration", "Prospective Student Inquiry", "General Questions").
- [ ] ⭐ **Accessibility Audit & Alt Text**
  - **Description**: Many visual elements (like the robotic arm and Industry 4.0 robot) lack descriptive `alt` text.
  - **Action**: Add semantic `alt="..."` descriptions to all images for SEO and screen-reader accessibility.
- [ ] **Publications Page**
  - **Description**: A dedicated page for lab publications does not exist.
  - **Action**: Create `src/pages/publications.astro` and split "Research Mission", "Publications", and "Projects" into their own distinct sections or pages.
- [ ] **Dynamic Data Integration & Visuals**
  - **Description**: We need a way to integrate lab research data directly into the website.
  - **Action**: Implement charts/graphs detailing research output, sensor data, or other lab metrics.
- [ ] ⭐ **Homepage Hero Text Redundancy**
  - **Description**: The subheader "Optimization • Machine Learning • Smart Manufacturing" appears twice in the hero section.
  - **Action**: Remove the redundant top instance for a cleaner visual hierarchy.
- [ ] **Homepage Video & Media Enhancement**
  - **Description**: The background video needs an update to look more professional.
  - **Action**: Apply a "techy" filter/overlay to the testbed operation video so it feels less like a home video, OR add a stylized outline of Rhode Island to make it distinct.
  - **Action**: Add a new, high-quality testbed photo to the homepage.
- [ ] **Integration of Stephen's MES Lego Factory Flask App in Projects**
- [ ] **Contact Page Security**
  - **Description**: The contact form is vulnerable to spam.
  - **Action**: Add security (like a hidden honeypot field or reCAPTCHA) to the "Send a Message" form to prevent bots. Update the page to feature all physical lab locations.

---

## 🛠️ Tech Debt & Architecture
- [x] **Extract Reusable Components**
  - **Description**: `src/layouts/BaseLayout.astro` currently hardcodes the Header, Navigation, and Footer. 
  - **Action**: Create a `src/components/` directory. Extract the `<header>` into `Header.astro` and `<nav>` / `<footer>` into their own components to DRY up code.
- [ ] **Adopt Astro Content Collections**
  - **Description**: Content like Roster members, Projects, and Publications should be easy to edit via Markdown.
  - **Action**: Set up `src/content/` collections so non-technical lab members can add their projects and profiles simply by creating `.md` files.

---

## 📝 Content Updates
- [ ] **Roster & Alumni**
  - **Action**: ⭐ Remove or replace raw `[TODO]` links found across the "Lab & People" bios and social media profiles.
  - **Action**: Update all existing Lab members with Google Scholar links and GitHub profiles.
  - **Action**: Add missing emails for Jake Yaco and Juan Lopez.
  - **Action**: Add missing lab members to the page.
  - **Action**: Create a designated section or separate page for Lab Alumni.
- [ ] **Spaces & Equipment**
  - **Action**: Lab spaces descriptions are good, but lack imagery. Add photos of the physical spaces.
  - **Action**: Embed Google Maps links for physical lab locations.
- [ ] **Industry 4.0 Page**
  - **Action**: ⭐ Refocus page content. It currently duplicates a large amount of information found on the Home and Projects pages. Add details on the Industry 4.0 certificate program or case studies.
  - **Action**: Refine the visual asset ratio (fewer generic photos, more specific feature projects).
  - **Action**: Incorporate more educational content derived directly from URI ISE courses.
  - **Action**: Add (or update) logos for trusted industry partners. 
- [ ] **Projects Page Content**
  - **Action**: Add Capstone projects and designate a section specifically for Faculty projects.
- [x] **Footer Links**
  - **Action**: Ensure the global Footer includes working links to all main pages and proper social media links.

---

## 📸 Asset & Photography Requests
*Images needed for the URI ISE website. (Target 2x display density).*

- [ ] **Industry 4.0 hero/banner image**
  - **Context**: Top of industry4-0.html; wide banner showing smart manufacturing environment.
  - **Ideal content**: Robotic arms, conveyor belt, or digital overlay on shop floor.
  - **Dimensions**: 1600×600 px minimum.
- [x] **Capstone Room (FCAE 180A) photo**
  - **Context**: Lab Infrastructure section on industry4-0.html.
  - **Ideal content**: Wide shot of the testbed — Niryo Ned2 robots, xArms, conveyors, AVRS system.
- [x] **Vehicular Vision & Tracking Lab (KIRK) photo**
  - **Context**: Lab Infrastructure section on industry4-0.html.
  - **Ideal content**: Vision equipment, laser cutter, 3-D printers.
- [ ] **CNC machine close-up**
  - **Context**: Smart Mfg & CNC research row on industry4-0.html.
  - **Ideal content**: CNC spindle with sensors attached, machining in progress.
  - **Dimensions**: 600×400 px.
- [ ] **Niryo Ned2 or xArm in action**
  - **Context**: Research section or certificate marketing.
  - **Ideal content**: Collaborative robot performing pick-and-place or assembly task.
  - **Dimensions**: 600×400 px.
- [x] **Student working at testbed**
  - **Context**: Certificate section or general promotional.
  - **Ideal content**: Graduate or capstone student interacting with lab equipment.

---

## 🔍 SEO & Visibility
- [ ] **Google Search Console Integration**
  - **Action**: Register the live production domain with Google Search Console to enforce crawl indexing and track search performance metrics.
- [ ] **Sitemap Generation & Robots.txt**
  - **Action**: Install `@astrojs/sitemap` to auto-generate `sitemap.xml` on build and create a `robots.txt` in the `/public` folder explicitly allowing web crawlers.
- [ ] **Meta Tags & Title Tuning**
  - **Action**: Pass highly specific SEO meta descriptions and keyword-rich titles to `BaseLayout.astro` dynamically based on the current page to boost search engine placement.
