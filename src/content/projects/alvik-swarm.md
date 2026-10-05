---
title: Alvik Swarm — Multi-Robot Routing on a Physical Grid
kicker: Swarm Robotics · Optimization
description: A fleet of AprilTag-tracked Arduino Alvik rovers, localized by an overhead camera and routed by a genetic algorithm through a pickup-and-drop-off variant of the traveling-salesman problem.
tags: [optimization, swarm-robotics, genetic-algorithms, computer-vision, localization]
researcher: andrew-muszynski
media:
  - image: ./alvik-swarm/alvik-tsp.jpg
    alt: Six illuminated Alvik rovers with AprilTags on their top plates navigating a large printed grid on a table in a darkened lab
    caption: "The swarm mid-run: Alvik rovers with AprilTag-topped plates traverse the printed grid while the overhead camera tracks each tag."
---

A fleet of Arduino Alvik rovers turns a classic optimization problem into moving hardware. The
rovers operate on a printed grid beneath a fixed overhead camera; each carries an AprilTag on
its top plate, so the moment a powered-on rover enters the camera's view it is registered by
the central server and appears on the control page. Commands are issued to the whole swarm from
the server's dashboard.

The system localizes each rover by fusing wheel odometry with the overhead camera's AprilTag
detections — correcting the drift that odometry alone accumulates. On top of that positioning layer, a
genetic algorithm routes the swarm through a complex variant of the traveling-salesman problem:
"operators" are dropped off at grid locations and must be picked up again later, and the
measured objective is the full execution time of the system. The goal is to make the robots
reflect a real-world routing and logistics optimization problem — algorithm to action.
