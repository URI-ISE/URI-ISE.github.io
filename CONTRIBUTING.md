# Updating the lab website

This is how lab members update their profile, headshot, and projects on
**[www.iseuri.org](https://www.iseuri.org)**. You can do everything in your browser on GitHub, with nothing to install.

**How it works:** every change goes through a *pull request* (PR). When you open one, GitHub
automatically builds the site with your change and shows a **build** check:

- **Green ✓** means your change is valid. Merge it yourself and the live site updates in about 2 minutes.
- **Red ✗** means something in your file doesn't match the expected format. Nothing goes live. Read the
  error, fix it, and the check runs again. See [When the check fails](#when-the-check-fails).

**Before you start:**

1. Create a GitHub account if you don't have one.
2. Send Luke Pepin your username so he can add you to the repository.
3. Accept the invitation email from GitHub.

---

## 1. Update your profile

Each person has one file in [`src/content/people/`](src/content/people), named `first-last.md`.

1. Open [`src/content/people/`](src/content/people) and click your file.
2. Click the **pencil icon** (Edit this file).
3. Change what you need. The fields are:

   ```yaml
   ---
   name: Jay-Sun Rutledge
   section: masters                 # advisor, postdoc, doctoral, masters, or undergraduate
   email: jaysun_rutledge@uri.edu
   photo: ./photos/jay-sun-rutledge.webp
   bio: Builds computer vision systems for manufacturing quality control.
   links:
     - label: LinkedIn
       href: https://www.linkedin.com/in/your-handle/
     - label: GitHub Profile
       href: https://github.com/your-handle
   ---
   ```

   - **bio:** one sentence, **160 characters max**. If it contains a colon (`:`), wrap the whole
     sentence in "double quotes".
   - **links:** optional. Common labels are Google Scholar, LinkedIn, GitHub Profile, and Personal Site.
     Each `href` must be a full `https://` address.
   - Keep the `---` lines at the top and bottom, and keep the indentation (spaces, not tabs).
   - The full list of fields is in [`docs/templates/person.md`](docs/templates/person.md).

4. Click **Commit changes…**, choose **Create a new branch for this commit and start a pull request**,
   then click **Propose changes** and **Create pull request**.
5. Wait about 1–2 minutes for the **build** check. When it's green ✓, click **Merge pull request** and
   then **Confirm merge**. That's it.

> **New to the lab and don't have a file yet?** Copy [`docs/templates/person.md`](docs/templates/person.md).
> In `src/content/people/`, click **Add file → Create new file**, name it `first-last.md`, paste the
> template, fill it in, and continue from step 4.

The People page shows cards in a random order within each section (and the Research page shuffles
projects), so everyone gets equal billing.

## 2. Add or replace your headshot

**Photo spec:**

- At least **800 × 800 pixels**. Square is ideal, but any shape works because the site crops it to a square automatically.
- Shoulders-up, facing the camera, plain light background, even light (no harsh shadows), no sunglasses.
- JPG, PNG, or WebP, under 5 MB, named `first-last.jpg` (or `.png`/`.webp`).

**Steps:**

1. Open [`src/content/people/photos/`](src/content/people/photos), click **Add file → Upload files**,
   and drop your photo in.
2. Choose **Create a new branch for this commit and start a pull request**, then **Propose changes**.
3. **Before merging,** add your photo to your profile on the same branch:
   1. On the pull request page, click the branch name (for example `luke-pepin-patch-1`).
   2. Open `src/content/people/your-file.md` and click the **pencil icon**.
   3. Set `photo: ./photos/first-last.jpg` to match the file you uploaded.
   4. Choose **Commit directly to the … branch**.
4. Back on the pull request, wait for the green ✓ and merge.

If you're replacing an old photo, you can delete the old file in the same pull request.

## 3. Add a project

Projects appear on the **[Research](https://www.iseuri.org/research)** page and can be filtered by tag.
Each project is one file in [`src/content/projects/`](src/content/projects). Its images go in a folder
with the same name.

```
src/content/projects/
├── alvik-swarm.md          ← the write-up
└── alvik-swarm/            ← its images
    └── alvik-tsp.jpg
```

1. **Images first.** Put your images in a folder on your computer named after the project, for example
   `my-project/`. Open [`src/content/projects/`](src/content/projects), click **Add file → Upload files**,
   and drag the *whole folder* in. GitHub keeps the folder. Commit to a new branch and **Propose changes**.
2. **Then the write-up, on the same branch.** On the pull request, click the branch name, open
   `src/content/projects/`, click **Add file → Create new file**, and name it `my-project.md`. Paste
   [`docs/templates/project.md`](docs/templates/project.md) and fill it in. The notes in the template
   explain every field. Commit to the same branch.
3. Wait for the green ✓ and merge.

**Things to know:**

- **Tags:** include at least one of the six research threads:

  | Tag | Thread |
  |---|---|
  | `digital-twins` | Digital Twins |
  | `smart-manufacturing` | Smart Mfg & CNC |
  | `optimization` | Optimization |
  | `vision-qc` | Vision & QC |
  | `data-iiot` | Data & IIoT |
  | `cyber-physical` | Cyber-Physical |

  You can also add any hashtags from the approved list in [`src/data/tags.ts`](src/data/tags.ts)
  (`SECONDARY_TAGS`). If you need a new hashtag, add it to that list in the same pull request. Use
  lowercase with hyphens, and reuse an existing tag when one fits.
- **researcher:** your people file name without `.md` (e.g. `luke-pepin`). Optional `supporting:`
  researchers use the same format.
- **Work in progress?** Keep `draft: true` in the file. It merges safely but stays off the live site
  until you delete that line.
- **Videos:** MP4 only, **under 10 MB**. Upload them to [`public/assets/videos/`](public/assets/videos)
  and add a still-frame `poster` image. No YouTube embeds. If your clip is bigger, send the raw file
  to Luke to compress.
- **Be accurate:** describe what was actually built and measured. Don't claim validations,
  certifications, or results the work hasn't achieved, and leave out sponsor-confidential details.

## When the check fails

On the pull request, click **Details** next to the red ✗, open the **Build site** step, and look for a
line that names your file. Common messages:

| Message | Fix |
|---|---|
| `tags.0: Invalid option: expected one of "digital-twins"\|…` | A tag is misspelled or not on the approved list. Use one from the list, or add it to `SECONDARY_TAGS`. |
| `tags: Include at least one primary research thread` | Add one of the six thread tags. |
| `bio: Keep the bio to one sentence (160 characters max)` | Shorten the bio. |
| `Unknown person in "researcher" or "supporting"` | Use the exact people file name, e.g. `jay-sun-rutledge`. |
| `Could not find requested image` / `ImageNotFound` | The `photo:` or `image:` path doesn't match the uploaded file. Check spelling, the folder, and the extension (`.jpg` vs `.jpeg`). |
| `Videos go in public/assets/videos/` | Video paths must start with `/assets/videos/`. |
| `YAMLException` / `bad indentation` | Usually an unquoted colon in text, or a tab instead of spaces. Wrap the text in "quotes" and indent with spaces. |

Fix the file on the same branch (pencil icon → **Commit directly to the … branch**) and the check
re-runs on its own. Stuck? Ask Luke.

## What not to edit

Page layouts (`src/pages/`), styles (`src/styles/`), and site settings are shared. Talk to Luke before
changing them. Your own people file and project files are yours to edit any time.

---

### Optional: preview on your own computer

If you have [Node.js 22](https://nodejs.org) installed:

```bash
git clone https://github.com/URI-ISE/URI-ISE.github.io.git
cd URI-ISE.github.io
npm install
npm run dev        # http://localhost:4321 — updates as you save; drafts are visible here
```

`npm run build` runs the same check as GitHub. After editing `src/data/tags.ts`, run
`npx astro build --force` so every file is re-checked.
