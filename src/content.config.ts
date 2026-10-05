/*
 * Content collections — the shape every people/project file must follow.
 * A file that doesn't match fails the build with a message naming the file and field.
 * Templates: docs/templates/person.md and docs/templates/project.md. Guide: CONTRIBUTING.md.
 */
import { defineCollection, reference } from "astro:content";
import { glob } from "astro/loaders";
import { z } from "astro/zod";
import { ALL_TAGS, SECTIONS, isThread } from "./data/tags";

const people = defineCollection({
  // One file per member: src/content/people/<first-last>.md (files starting with "_" are ignored)
  loader: glob({ base: "./src/content/people", pattern: "[^_]*.md" }),
  schema: ({ image }) =>
    z.object({
      name: z.string(),
      /** Optional override for alphabetical order within a section (defaults to the last word of `name`). */
      sortName: z.string().optional(),
      section: z.enum(SECTIONS),
      role: z.string().optional(),
      email: z.email().optional(),
      /** Relative to the .md file, e.g. ./photos/first-last.jpg */
      photo: image().optional(),
      bio: z.string().max(160, "Keep the bio to one sentence (160 characters max)").optional(),
      links: z.array(z.object({ label: z.string(), href: z.httpUrl() })).default([]),
      draft: z.boolean().default(false),
    }),
});

const projects = defineCollection({
  // One file per project: src/content/projects/<project-name>.md, images in src/content/projects/<project-name>/
  loader: glob({ base: "./src/content/projects", pattern: "[^_]*.md" }),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      /** Small uppercase label above the title, e.g. "Master's Thesis Research". */
      kicker: z.string(),
      /** One or two sentences; used for search-engine and link-preview text. */
      description: z.string().max(240),
      tags: z
        .array(z.enum(ALL_TAGS))
        .min(1)
        .refine((tags) => tags.some(isThread), "Include at least one primary research thread (see src/data/tags.ts)"),
      /** Primary researcher: their people file name without .md, e.g. luke-pepin */
      researcher: reference("people").optional(),
      /** Optional supporting researchers, same format: [jay-sun-rutledge, seun-filaoye] */
      supporting: z.array(reference("people")).default([]),
      media: z
        .array(
          z
            .object({
              image: image().optional(),
              /** Videos live in public/assets/videos/, e.g. /assets/videos/clip.mp4 */
              video: z.string().startsWith("/assets/videos/", "Videos go in public/assets/videos/ — write the path as /assets/videos/name.mp4").optional(),
              poster: image().optional(),
              alt: z.string().default(""),
              caption: z.string(),
              portrait: z.boolean().default(false),
            })
            .refine((m) => !!m.image !== !!m.video, "Each media item needs exactly one of `image` or `video`")
            .refine((m) => !m.image || m.alt.length > 0, "Images need `alt` text describing what's in the picture"),
        )
        .default([]),
      /** Optional callout shown below the description (e.g. a scope disclaimer). Supports **bold** only. */
      note: z.string().optional(),
      draft: z.boolean().default(false),
    }),
});

export const collections = { people, projects };
