/*
 * Research threads and project tags — the single source of truth.
 *
 * - THREADS are the six primary research threads. They drive the filter buttons
 *   and thread list on the Research page and the "Research Areas" cards on the
 *   home and Industry 4.0 pages.
 * - SECONDARY_TAGS are finer, approved hashtags for projects (#uwb, #unity, …).
 *
 * Every project must carry at least one thread slug in its `tags`. A tag that
 * isn't listed here fails the build — to propose a new one, add it to
 * SECONDARY_TAGS in the same pull request as the project that uses it.
 */

export const THREAD_SLUGS = [
  "digital-twins",
  "smart-manufacturing",
  "optimization",
  "vision-qc",
  "data-iiot",
  "cyber-physical",
] as const;

export type ThreadSlug = (typeof THREAD_SLUGS)[number];

export interface Thread {
  slug: ThreadSlug;
  /** Short name used on cards and filter buttons. */
  label: string;
  /** One-sentence blurb (home + Industry 4.0 cards, Research page thread list). */
  summary: string;
  /** Inner SVG markup for a 24×24 Lucide-style icon. */
  icon: string;
}

export const THREADS: Thread[] = [
  {
    slug: "digital-twins",
    label: "Digital Twins",
    summary: "High-fidelity simulation environments for testing, validation, and chaos engineering of industrial systems.",
    icon: '<rect width="18" height="18" x="3" y="3" rx="2"/><path d="M7 7h.01"/><path d="M17 7h.01"/><path d="M7 17h.01"/><path d="M17 17h.01"/><path d="M12 2v20"/><path d="M2 12h20"/>',
  },
  {
    slug: "smart-manufacturing",
    label: "Smart Mfg & CNC",
    summary: "GCode interception, sensor-rich machining, and custom tooling fabrication on in-house equipment.",
    icon: '<path d="m13.5 8.5-5 5"/><circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/>',
  },
  {
    slug: "optimization",
    label: "Optimization",
    summary: "Production scheduling, multi-agent coordination, and genetic ML algorithms for process control.",
    icon: '<path d="M3 3v18h18"/><path d="m19 9-5 5-4-4-3 3"/>',
  },
  {
    slug: "vision-qc",
    label: "Vision & QC",
    summary: "Computer vision for real-time defect detection, dimensional measurement, and robotic pick-and-place.",
    icon: '<path d="M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0"/><circle cx="12" cy="12" r="3"/>',
  },
  {
    slug: "data-iiot",
    label: "Data & IIoT",
    summary: "End-to-end sensor data pipelines, SCADA integration, and real-time operational dashboards.",
    icon: '<rect width="16" height="16" x="4" y="4" rx="2"/><rect width="6" height="6" x="9" y="9" rx="1"/><path d="M12 2v2"/><path d="M12 20v2"/><path d="M2 12h2"/><path d="M20 12h2"/>',
  },
  {
    slug: "cyber-physical",
    label: "Cyber-Physical",
    summary: "Resilient edge architectures, testbed orchestration, and secure operation under degraded connectivity.",
    icon: '<path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>',
  },
];

/** Approved secondary hashtags. Keep them lowercase-kebab-case. */
export const SECONDARY_TAGS = [
  "robotics",
  "machine-learning",
  "computer-vision",
  "localization",
  "uwb",
  "unity",
  "ros2",
  "mqtt",
  "swarm-robotics",
  "genetic-algorithms",
  "scheduling",
  "edge-computing",
  "security",
  "simulation",
  "oee",
  "predictive-maintenance",
  "industry-4-0-course",
] as const;

export const ALL_TAGS = [...THREAD_SLUGS, ...SECONDARY_TAGS] as const;

export type Tag = (typeof ALL_TAGS)[number];

export function isThread(tag: string): tag is ThreadSlug {
  return (THREAD_SLUGS as readonly string[]).includes(tag);
}

/** Display label for any tag: the thread's label, or "#tag" for secondary tags. */
export function tagLabel(tag: string): string {
  return THREADS.find((t) => t.slug === tag)?.label ?? `#${tag}`;
}

/* People page sections, in display order. */
export const SECTIONS = ["advisor", "postdoc", "doctoral", "masters", "undergraduate"] as const;

export type Section = (typeof SECTIONS)[number];

export const SECTION_HEADINGS: Record<Section, string> = {
  advisor: "Principal Advisor",
  postdoc: "Post-Doctoral Fellow",
  doctoral: "Doctoral Students",
  masters: "Master's Students",
  undergraduate: "Undergraduate Researchers",
};
