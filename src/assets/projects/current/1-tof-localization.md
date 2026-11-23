---
title: "Time-of-Flight Localization with Distributed Sensors"
dates: "October 2025 - Present"
bannerImg: "images/tof/tof_localization.png"
abstract: "Research project aimed at localizing continuum robots in unstructured environments."
publications:
  - Teetaert2026tof
---
## The Problem

Continuum robots have long been advertised to be able to operate in confined and unstructured environments. Most sensors typically used on these robots have one of three problems:

1. They are not feasible to use in most out-of-lab environments (e.g. X-ray, MRI, EM trackers)
2. They only measure values that are subject to dead-reckoning errors (e.g. IMUs, FBGs, actuation inputs)
3. They are incapable of measuring the environment itself.

In order to generate drift-free estimates in unknown environments, we need to use sensors that are not subject to these issues. This leaves two primary options: LiDAR and cameras. Both of these options have severely degraded sensing capabilities at this scale than their full-size counterparts. In this work, we explore the LiDAR option.

## The Idea

By distributing many mm-scale time-of-flight sensors around the full body of a continuum robot, the shortcomings of each individual sensor can be mitigated. While a single sensor does not typically measure enough information to full constrain the estimate, the joining of many sensors through a robot model can mitigate this degeneracy.

![Concept](images/tof/tof_concept.png "")

## Results

We evaluated the algorithm on both real and simulated robots, each containing a number of distributed time-of-flight sensors, gyroscopes, and the simulated robot containing an FBG sensor.

<video src="images/tof/tof_real_demo.mp4" poster="images/tof/tof_real_demo_poster.jpg" title="A real-world robot (left) and its state estimate (right) side-by-side. The map used for localization in this case matches the real-world scene, representing a best case scenario for this setup."></video>

<video src="images/tof/tof_sim_demo.mp4" poster="images/tof/tof_sim_demo_poster.jpg" title="A simulated robot (left) operating inside of a jet engine and its state estimate (right) side-by-side. The map used for localization in this case deviates from the real-scene which includes a bird, and two engine defects. Despite the changes, the estimate still closely tracker the ground truth frames."></video>

## Mapping as a Bonus

Given a small enough deviation between the real world and the prior map, the localization will be accurate. In this case, we can project the measurements that we received back into a point cloud using the shape estimate. This point cloud can be compared against the original prior map, with differences indicating errors in the map. This would have potential applications in anomaly detection.

![Scene reconstruction](images/tof/tof_anomaly_detection.png "")

For more information, see my [Robotics: Science and Systems (RSS) 2026 talk](https://youtu.be/_BYFs2Dx17Q?t=8977) or the paper referenced below.
