---
title: Marco Polo — Precision Indoor Asset Tracking
kicker: Industry 4.0 Special Projects · ISE 575
description: A UWB multi-node network that tracks a mobile tag to centimeter-level precision indoors and maps it in real time onto a Unity digital twin of the capstone lab.
tags: [digital-twins, data-iiot, uwb, unity, mqtt, localization, industry-4-0-course]
researcher: luke-pepin
supporting: [jay-sun-rutledge, seun-filaoye]
media:
  - image: ./marco-polo/uwb-tag.jpg
    alt: Breadboard-mounted UWB hider tag with an Arduino Nano 33 BLE and DWM1000 radio, labeled Tag #1
    caption: "The mobile hider node: Arduino Nano 33 BLE + DWM1000 UWB radio on a battery-backed breadboard."
  - image: ./marco-polo/capstone-room-3d-scan.jpg
    alt: Photogrammetry scan of the capstone lab room shown as a 3-D model
    caption: A 3-D scan of the capstone lab — the environment the Unity digital twin tracks against.
  - video: /assets/videos/marcopolo-hunt.mp4
    poster: ./marco-polo/hunt-poster.jpg
    caption: "Live hunt inside the digital twin: trilateration rays from the three seekers converge on the hider as it moves through the scanned room."
---

Marco Polo is a precision indoor tracking and localization system built as the final project of
the Industry 4.0 certificate sequence. A distributed Ultra-Wideband (UWB) multi-node network —
three fixed "seeker" nodes and a mobile "hider" tag — achieves centimeter-level indoor
positioning, mapped in real time onto a Unity digital twin of the capstone lab through 3-D
trilateration.

The system separates real-time sensing from high-level visualization in three layers:

- **Sensor coprocessor** — An Arduino Nano 33 BLE drives each DWM1000 UWB radio
  over SPI, dedicated entirely to two-way ranging so timing-critical measurements are never
  interrupted, with carrier-integrator clock-offset correction against temporal drift.
- **Data router** — Raspberry Pi 4 base stations parse the serial telemetry, apply
  median and moving-average filtering, and publish clean JSON to a central MQTT broker on the
  local network.
- **Visualization engine** — The Unity digital twin subscribes to the broker and
  runs a gradient-descent non-linear least-squares solver to intersect the three seeker
  distances and track the hider in true 3-D space.
