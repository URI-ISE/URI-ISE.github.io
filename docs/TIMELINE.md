# Fall 2026 site update → search launch

Owner: Luke Pepin · Launch: **Mon Oct 26, 2026** · How members contribute: [CONTRIBUTING.md](../CONTRIBUTING.md)

| Date | Milestone |
|---|---|
| Mon 10/5 – Thu 10/8 | Site restructure finished and merged |
| Fri 10/9 | Luke's project update (dry run of the member workflow) |
| Mon 10/12 | Email the lab |
| Wed 10/14 | Lab meeting walkthrough |
| Mon 10/19 | Midpoint check |
| **Fri 10/23** | **Member deadline** |
| Sat 10/24 – Sun 10/25 | Review pass |
| **Mon 10/26** | **Launch: final publish + search registration** |
| Mon 11/2, Mon 11/9 | Indexing follow-up |

---

### Mon 10/5 – Thu 10/8 — Site restructure finished and merged
- [ ] Review the restructured site in the dev preview: merged Research page with tag filter, People
      page from content files, 404 page, optimized images, contributor guide.
- [ ] Commit to a branch and open a PR. That PR's own **build** check is the first real test of the check.
- [ ] Merge. The site is live about 2 minutes later.

*Why by 10/8:* the 10/9 project update needs the new project-file format to be live on `main`.

### Fri 10/9 — Luke updates *Edge-Delegated Authorization*
- [ ] Edit `src/content/projects/edge-delegated-authorization.md` in the GitHub web editor, exactly as
      members will: pencil → new branch + PR → green check → merge.
- [ ] Note any step that was confusing and fix `CONTRIBUTING.md` before 10/12.

*Why:* it's a full dry run of the member workflow five days before the lab sees it.

### Mon 10/12 — Email the lab
- [ ] Send the `CONTRIBUTING.md` link and the headshot spec (≥ 800 px, shoulders-up, plain background,
      even light). Point people to [PHOTO-SHOTLIST.md](PHOTO-SHOTLIST.md).
- [ ] Ask for GitHub usernames by **Tue 10/13**.
- [ ] Add each member as a collaborator (write access) on `URI-ISE/URI-ISE.github.io`, so they can
      merge their own PRs. No reviewers are required; the build check is the only gate.

*Why two days early:* GitHub invitations have to be accepted, and the meeting should be spent editing,
not creating accounts.

### Wed 10/14 — Lab meeting
- [ ] 5-minute live demo: open your file in `src/content/people/` → pencil → edit → new branch + PR →
      wait for the green ✓ → merge.
- [ ] Members confirm the six research-thread one-liners (bottom of `/research`, edited in
      `src/data/tags.ts`) still describe their work.
- [ ] New members (Arindam, Sangeetha, Federico, Tim) add bios. Federico adds an email if he wants one shown.
- [ ] Project leads confirm their write-ups: Marco Polo (Luke; Jay-Sun and Seun supporting), Alvik
      Swarm (Andrew M.), Sensor-Integrated CNC (Andrew O.). Anyone with unlisted work starts a project
      file. Vision & QC has no project yet.
- [ ] Hand out photo assignments from [PHOTO-SHOTLIST.md](PHOTO-SHOTLIST.md).

### Mon 10/19 — Midpoint check
- [ ] Scan `/people` for cards that still show initials or have no bio, and nudge those people individually.
- [ ] Glance at open PRs with a red ✗ and help unblock them.

### Fri 10/23 — Member deadline
- [ ] Bios, headshots, links, and project write-ups **merged** (not just opened).

*Why Friday:* it leaves the weekend for a review pass before launch.

### Sat 10/24 – Sun 10/25 — Luke's review pass
- [ ] Read everything on the live site: bio length and tone, sensible tags, captions and alt text,
      photos the right way up, no overclaiming.
- [ ] Anyone without a headshot keeps the initials avatar. That's fine for launch.
- [ ] Final checks: build passes, no broken links, phone-width layout, Lighthouse (Performance / SEO /
      Accessibility).

### Mon 10/26 — Launch: final publish + search registration
Do these in order:
1. [ ] Merge any last PRs and confirm https://www.iseuri.org looks right.
2. [ ] **GitHub → Settings → Branches:** protect `main` and require the **build** status check, with no
       approvals. From now on a PR with a red ✗ can't be merged.
3. [ ] **Namecheap** (Dr. Sodhi's account, with his OK) → Advanced DNS: add the Google Search Console
       TXT record → verify a **Domain** property for `iseuri.org` → add Dr. Sodhi as an owner.
   - [ ] Optional: add GitHub's TXT record to verify `iseuri.org` for the URI-ISE org. This prevents
         anyone else from claiming the domain on GitHub Pages.
4. [ ] **Search Console:** Sitemaps → submit `https://www.iseuri.org/sitemap-index.xml`. URL Inspection →
       **Request indexing** for `/`, `/research`, `/people`, `/industry4-0`.
5. [ ] **Bing Webmaster Tools:** sign in → import from Search Console. This covers Bing, DuckDuckGo, and Yahoo.
6. [ ] **Inbound links:** ask the MCISE department and College of Engineering web admins to link to
       www.iseuri.org. Ask members to add the URL to their Google Scholar, LinkedIn, and GitHub profiles.

*Why links matter:* for a new domain, links from uri.edu are the strongest signal for showing up in
"URI ISE" searches.

**Trade-off of waiting until 10/26 for branch protection:** between 10/14 and 10/25, a PR with a red ✗
*can* be merged. The live site stays safe because a failed build never deploys. But `main` stays broken,
and every other PR fails too, until someone fixes it. If that happens, fix it in a quick follow-up PR. If
you want to avoid it entirely, step 2 can be moved to 10/12; it's a 2-minute change.

### Mon 11/2 and Mon 11/9 — Indexing follow-up
- [ ] Search Console → **Pages**: all 6 pages indexed? Fix anything under "Discovered – currently not
      indexed" (re-request indexing; check that the page links from the nav).
- [ ] Google `site:iseuri.org` and `URI industrial systems engineering lab`.
- [ ] Expect first indexing within a few days to about 2 weeks. Ranking for broader terms grows with
      inbound links.
