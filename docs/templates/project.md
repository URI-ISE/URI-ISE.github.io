---
# Copy this into src/content/projects/project-name.md (lowercase, hyphens) and fill it in.
# Put this project's images in a folder with the same name: src/content/projects/project-name/
# Lines starting with # are notes for you — they never appear on the site.

title: Project Name — Short Descriptive Subtitle
kicker: Master's Thesis Research        # small label above the title (course, thesis, sponsor area…)

# One or two plain sentences (240 characters max). Shown in Google results and link previews.
description: What the system does and why it matters, in one or two sentences.

# At least ONE primary research thread:
#   digital-twins, smart-manufacturing, optimization, vision-qc, data-iiot, cyber-physical
# plus any approved hashtags from src/data/tags.ts (SECONDARY_TAGS). Need a new hashtag?
# Add it to SECONDARY_TAGS in the same pull request.
tags: [optimization, robotics]

# Your people file name without .md. Optional supporting researchers use the same format.
researcher: first-last
supporting: [first-last, first-last]    # optional — delete if none

draft: true        # keeps it off the live site while you work; delete this line to publish

# Optional callout under the description (e.g. scope or limitations). Supports **bold** only.
note: This is an exploratory prototype, **not** a production system.

# Figures shown under the text. Every image needs alt text (what's in the picture) and a caption.
media:
  - image: ./project-name/photo-1.jpg
    alt: What the photo shows, for screen-reader users
    caption: "One sentence explaining the figure. Wrap in quotes if it contains a colon:"
  - image: ./project-name/tall-photo.jpg
    alt: What the photo shows
    caption: Caption text.
    portrait: true                       # use for tall (vertical) photos
  - video: /assets/videos/project-name-demo.mp4    # MP4 under 10 MB, uploaded to public/assets/videos/
    poster: ./project-name/demo-poster.jpg         # a still frame shown before the video plays
    caption: What the video shows.
---

Write the project description here in plain paragraphs. **Bold** and *italic* work.

A blank line starts a new paragraph. Bullet lists work too:

- **Component one** — what it does.
- **Component two** — what it does.

Describe what was actually built and measured. Don't claim certifications, validations, or results
the work hasn't achieved.
