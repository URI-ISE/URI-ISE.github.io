---
title: Edge-Delegated Authorization for Industrial Robots
kicker: Master's Thesis Research
description: Comparing central authorization, pre-issued offline permissions, and constrained local delegation for robotic workcells during network outages, measuring job completion, admission enforcement, and compromised-key exposure.
tags: [cyber-physical, robotics, edge-computing, security]
researcher: luke-pepin
note: Research in progress. The scope and minimum evidence remain pending advisor review; the proposed benefits are hypotheses to test. The safeguard interface is a prototype, **not certified functional safety**.
media:
  - image: ./edge-delegated-authorization/ur5-wired-in.jpg
    alt: Edge node breadboard with lit status LEDs wired into the safeguard input terminals of a Universal Robots UR5 controller cabinet
    caption: "Earlier testbed hardware: the edge node connected to the UR5 safeguard inputs through a 24 V optocoupler stage."
    portrait: true
  - video: /assets/videos/ur5-trial-run.mp4
    poster: ./edge-delegated-authorization/ur5-trial-run-poster.jpg
    caption: "An earlier UR5 trial with telemetry overlay, retained as testbed context; it does not demonstrate the new delegated-authorization protocol."
---

A healthy robotic workcell can lose production time when a network outage prevents headquarters
from authorizing its next job. Broad permissions issued in advance keep work moving, but also
give a compromised requester key standing authority. This thesis investigates whether a local
issuer can authorize situation-dependent jobs within headquarters' limits while reducing the
authority available to a compromised requester.

The research question is how constrained cryptographic delegation affects authorized job
completion, enforcement of task-admission rules, and the authority an attacker can gain from
compromised keys under disconnected, intermittent, and limited (DIL) connectivity.

### Three authorization approaches

- **Central authorization:** headquarters approves each new job; new approvals wait during an outage.
- **Pre-issued offline permission:** the requester selects and approves jobs within a reusable credential's limits.
- **Constrained local delegation:** headquarters grants a local issuer bounded authority; the issuer approves individual jobs with single-use permits, and the requester signs each request.

The proposed system uses Ed25519 signatures and a Raspberry Pi verifier with a persistent replay
ledger. An Arduino Nano supervises execution rather than verifying signatures. The local issuer
approves moves that serve the current local work order. Across all modes, the Pi enforces common
goal bounds, shift windows, recovery limits, and task-state rules.

### Planned evaluation

Hanoi disk-transfer jobs on a UR5 workcell provide the workload. A 3×3 design compares the three
authorization modes at three authority levels: a fixed pre-approved sequence, routine moves,
and routine plus recovery. The planned simulation campaign covers connected operation, short
outages, outages crossing the grant lifetime, and intermittent connectivity, with and without
scripted disturbances and goal changes. The fixed-sequence level is run under the long-outage
profile; its behavior under the other profiles is analyzed separately.

Evidence is organized into three blocks: software enforcement and compromised-key tests,
simulation under recorded network conditions, and physical UR5 trials. The physical minimum is
one run each of a valid disconnected job, expiry during a job, replay rejection, and bad-permit
rejection before motion. Video-observed placement is reported separately from simulation.
The project plan progresses through an offline verifier, a reliable physical transfer, a matched
pilot, and a final evidence campaign before manuscript review.

### Tradeoffs and limits

The study tests whether delegation restricts a stolen requester key and requires both requester
and issuer keys to reach the grant's worst-case authority. These are proposed benefits, not
demonstrated results. The additional issuer also adds latency, a failure point, and maintenance
cost; the comparison will report when equal-authority offline permission is preferable.

The threat model trusts headquarters, the Pi verifier and its clock and ledger, the robot-control
path, and execution supervision. It studies stolen requester and issuer keys rather than host
compromise. Separate key custody is an assumption; the bench configuration described in the
charter places issuer and requester on one host. Revocation during an outage and safety
certification are outside scope. The earlier EWMA trust-score work is outside the current thesis core.
