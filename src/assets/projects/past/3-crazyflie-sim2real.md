---
title: "CrazyFlie Sim2Real"
dates: "May - December 2022"
bannerImg: "images/sim2real.png"
repoUrl: "https://github.com/utiasDSL/safe-control-gym/tree/beta-iros-competition"
abstract: "A pipeline for zero-shot sim to real transfer of controllers for the CrazyFlie nano-quadcopter."
publications:
  - Teetaert2025a
  - Teetaert2023a
  - Teetaert2023b
  - Teetaert2022
---
## Background

Work in learning based control has enabled results that were otherwise unachievable through traditional controls. Unfortunately, due to the cost, time, and effort required to train models on real-world systems, learning-based control is only applied to a small set of specialized works. Physics-based simulations aim to address some of these problems by enabling offline training of learning-based controllers without the limitations of real robots. Reducing the gap between simulation and reality remains an ongoing research problem.

## Project Description

This project aims to reduce the sim to real gap for the CrazyFlie quadcopter by integrating the drone's firmware directly into a physics-based simulation framework, safe-control-gym, enabling 'firmware-in-the-loop' training capabilities. This pipeline was developed for the 'Safe Robot Learning Competition' at IROS 2022. Teams were tasked with developing both traditional and learning-based controllers for the CrazyFlie drone that could be trained in simulation and then transferred to the real drone without any real-world training (zero-shot). This not only enabled remote participation in the competition but also significantly lowered the barrier to entry for teams without access to physical CrazyFlie drones. Our pipeline achieved less than 5cm error on average between simulation and real flight data throughout the duration of the flight for each of seven test trajectories.

![Project Description](images/sim2real_flight_comparison.png)

## Links

* [Sim2real demonstation video](https://www.youtube.com/watch?v=PwphA_jsNKw)
* [Competition webpage](https://www.dynsyslab.org/iros-2022-safe-robot-learning-competition/)
* [IROS 2022 competition winning flights](https://www.youtube.com/watch?v=C6PZYJ5R1MI)
* [CDC 2023 workshop presentation](https://youtu.be/UYdkRnGr8eM?t=15230)