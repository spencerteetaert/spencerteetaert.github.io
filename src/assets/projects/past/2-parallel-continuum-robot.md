---
title: "Parallel Continuum Robot"
dates: "September 2022 - May 2023"
bannerImg: "images/parallel_cr.png"
repoUrl: "https://github.com/spencerteetaert/pcr_control"
abstract: "Design and control of a planar, parallel continuum robot for my BASc thesis."
---
## Background

Continuum robots are robots that have continuous structures, allowing them to bend and flex similarly to biological appendages such as elephant trunks or octopus arms. This flexibility allows continuum robots to navigate complex environments and perform tasks that traditional rigid-link robots cannot. One downside to this feature is that the robot's stiffness is low, limiting the force it can exert on its environment. One way to increase the stiffness during operation is to use a parallel configuration, where multiple continuum arms enter a workspace and join together, enabling higher force applications.

## Project Description

In this project, I designed and built a planar parallel continuum robot (PCR) with two continuum arms that can work together to manipulate objects in a shared workspace. I developed a kinematic model for the PCR, allowing for accurate control of its end-effector position and orientation. The controller used information about the end effector pose to close the loop, enabling task space control. Later in the project I experimented with learning-based control methods to improve performance, but never achieved satisfactory results within the project timeline. The final PCR was able to trace user-defined trajectories in the work space, with tunable parameters that tradeoff speed and accuracy. The full project is available on github along with my final thesis report.

![Project Description](images/cr_operating.gif)

## Documents

* [Final thesis](https://github.com/spencerteetaert/pcr_control/blob/main/thesis/thesis.pd)
