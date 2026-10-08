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
from authorizing its next job. This thesis asks how constrained cryptographic delegation affects
job completion, admission enforcement, and the authority available to an attacker with stolen keys.

Three approaches are compared:

- **Central authorization:** headquarters approves each new job; approvals wait during an outage.
- **Pre-issued offline permission:** the requester selects jobs within a reusable credential's limits.
- **Local delegation:** a bounded local issuer approves jobs serving the current work order with single-use permits.

Hanoi disk-transfer jobs on a UR5 provide the workload. Planned software tests, simulations, and
physical trials compare the modes at three authority levels: fixed sequences, routine moves,
and routine plus recovery. Ed25519 signatures and a Raspberry Pi verifier enforce authority
limits and reject replays.

The study tests delegation's potential security benefits against added latency and issuer failure.
Separate key custody is assumed; host compromise and revocation during outages are outside scope.
