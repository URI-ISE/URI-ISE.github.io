---
title: Edge-Delegated Authorization for Industrial Robots
kicker: Master's Thesis Research
description: Moving a robot's operating authorization onto edge hardware so work continues through a network outage, with an EWMA trust score that can halt a UR5 through its safeguard inputs.
tags: [cyber-physical, robotics, edge-computing, security]
researcher: luke-pepin
note: This is an exploratory investigation into authorization latency. It is **not** a validated or standards-compliant functional-safety architecture, and the experimental design operates outside the normative frameworks of ISO 13849-1, ISO 13855, and IEC 62061.
media:
  - image: ./edge-delegated-authorization/ur5-wired-in.jpg
    alt: Edge node breadboard with lit status LEDs wired into the safeguard input terminals of a Universal Robots UR5 controller cabinet
    caption: The edge node wired into the UR5 controller's safeguard inputs through the 24 V optocoupler stage.
    portrait: true
  - video: /assets/videos/robot-safety-timeline.mp4
    poster: ./edge-delegated-authorization/robot-safety-timeline-poster.jpg
    caption: "One trial, animated: an injected attack decays the trust score until the threshold crossing halts the robot."
  - video: /assets/videos/ur5-trial-run.mp4
    poster: ./edge-delegated-authorization/ur5-trial-run-poster.jpg
    caption: "A physical trial: the UR5 executes its motion program while the edge node's telemetry streams in the terminal overlay."
---

Industrial robots that draw their operating authorization from a cloud identity provider halt
the moment the network drops — the expiring lease acts as an involuntary kill switch. This
thesis moves the authorization decision onto edge hardware beside the robot so work can continue
through an outage. Because no external authority can then revoke permission, the edge node must
be able to stop the robot itself: it maintains an exponentially weighted moving average (EWMA)
trust score that decays as local cryptographic verification degrades, and when the score falls
below threshold it de-energizes a 24&nbsp;V optocoupler wired into the safeguard inputs of a
Universal Robots UR5 controller.

The central contribution is a latency model that predicts, from the verification cycle time and
the EWMA weight, how quickly that stop occurs — exercised across 335 physical trials on the UR5
using a profiled elliptic-curve verification workload (~225&nbsp;ms per cycle).
