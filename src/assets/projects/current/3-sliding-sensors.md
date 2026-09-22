---
title: "Sliding Sensors"
dates: "December 2025 - February 2026"
bannerImg: "images/sliding_sensors.png"
abstract: "Adaptable uncertainty profiles for continuum robots via translating sensors."
publications:
  - Teetaert2026c
---
## Introduction

In my recent work, I've been developing continuous-space-and-time stochastic estimation methods for continuum robot. This ability to continuously represent both mean estimates and uncertainties led to the question: what can we do with this? Enter the sliding sensors project. The idea is simple: what if we could physically move sensors along the length of a continuum robot to configure the uncertainty profile of the estimate? This could be used for navigating near sensitive objects, robot joining tasks, or any other scenario where you may care about locations other than the end effector.

## Project Description

In this project, we look at sliding a 5-DoF electromagenetic pose sensor down the length of a continuum robot. Using this sliding mechanism, we add an additional degree of freedom to the system, enabling a type of active sensing. Using this, we can control which parts of the robot have high certainty estimates. By sliding the sensor at a high rate, we can make use of information over time to actually improve estimates compared to a fixed sesnor scenario.
