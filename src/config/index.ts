import { Project } from '@/types';

export const config = {
    googleScholarUrl: "https://scholar.google.com/citations?user=i5a7uuoAAAAJ&hl=en&authuser=1",
    githubUrl: "https://github.com/spencerteetaert",
    linkedInUrl: "https://www.linkedin.com/in/spencerteetaert/",
    emailAddress: "spencer[dot]teetaert[at]robotics[dot]utias[dot]utoronto[dot]com",
}

// TODO: add projects
export const current_projects: Project[] = [
    {
        title: "Continuous-Time State Estimation for Continuum Robots",
        dates: "September 2023 - Present",
        bannerImg: "images/spacetime.png",
        description: "PhD research on continuous-time state estimation methods for continuum robots.",
        sections: [
            {
                header: "Background",
                content: "Continuum robots are robots that have continuous structures, allowing them to bend and flex similarly to biological appendages such as elephant trunks or octopus arms. This flexibility allows continuum robots to navigate complex environments and perform tasks that traditional rigid-link robots cannot. However, the very properties that make continuum robots advantageous also present significant challenges in accurately estimating their state (e.g., shape and velocity) during operation.",
            },
            {
                header: "Project Description",
                content: "My research focuses on developing continuous-time state estimation techniques for continuum robots. Unlike traditional discrete-time methods, continuous-time approaches can provide more accurate and smooth estimates of the robot's state by leveraging the continuous nature of their structure. This involves formulating mathematical models that capture the dynamics of continuum robots and designing algorithms that can process sensor data in real-time to estimate their state accurately. For more information, please see my public publications linked below.",
            }
        ],
        publications: [
            'Teetaert2025c',
            'Teetaert2025b',
            'Teetaert2024'
        ]
    }
];

export const past_projects: Project[] = [
    {
        title: "Nuclear Inspection Drone",
        dates: "January - May 2023",
        bannerImg: 'images/capstone.png',
        description: "Autonomous drone project made for my BASc final year capstone.",
        sections: [
            {
                header: "Project Description",
                content: "The 2023 EngSci robotics capstone project course involved designing and building an autonomous drone capable of navigating an unknown environment, travelling through a series of waypoints, and visually inspecting specific objects. The course focused on system integration. My team, Flight Club, successfully achieved flight, obstacle avoidance, and waypoint navigation using a combination of visual SLAM and EKF based state estimation. My work focused on software development, system integration, and drone validation. I would go on to TA this course in subsequent years.",
            }
        ]
    },
    {
        title: "Parallel Continuum Robot",
        dates: "September 2022 - May 2023",
        bannerImg: 'images/parallel_cr.png',
        repoUrl: "https://github.com/spencerteetaert/pcr_control",
        description: "Design and control of a planar, parallel continuum robot for my BASc thesis.",
        sections: [
            {
                header: "Background",
                content: "Continuum robots are robots that have continuous structures, allowing them to bend and flex similarly to biological appendages such as elephant trunks or octopus arms. This flexibility allows continuum robots to navigate complex environments and perform tasks that traditional rigid-link robots cannot. One downside to this feature is that the robot's stiffness is low, limiting the force it can exert on its environment. One way to increase the stiffness during operation is to use a parallel configuration, where multiple continuum arms enter a workspace and join together, enabling higher force applications.",
            },
            {
                header: "Project Description",
                content: "In this project, I designed and built a planar parallel continuum robot (PCR) with two continuum arms that can work together to manipulate objects in a shared workspace. I developed a kinematic model for the PCR, allowing for accurate control of its end-effector position and orientation. The controller used information about the end effector pose to close the loop, enabling task space control. Later in the project I experimented with learning-based control methods to improve performance, but never achieved satisfactory results within the project timeline. The final PCR was able to trace user-defined trajectories in the work space, with tunable parameters that tradeoff speed and accuracy. The full project is available on github along with my final thesis report.",
                image: 'images/cr_operating.gif',
            }
        ],
        links: [
            {
                link: 'https://github.com/spencerteetaert/pcr_control/blob/main/thesis/thesis.pdf',
                text: 'Final thesis report'
            }
        ]
    },
    {
        title: "CrazyFlie Sim2Real",
        dates: "May - December 2022",
        bannerImg: 'images/sim2real.png',
        repoUrl: "https://github.com/utiasDSL/safe-control-gym/tree/beta-iros-competition",
        description: "A pipeline for zero-shot sim to real transfer of controllers for the CrazyFlie nano-quadcopter.",
        sections: [
            {
                header: "Background",
                content: "Work in learning based control has enabled results that were otherwise unachievable through traditional controls. Unfortunately, due to the cost, time, and effort required to train models on real-world systems, learning-based control is only applied to a small set of specialized works. Physics-based simulations aim to address some of these problems by enabling offline training of learning-based controllers without the limitations of real robots. Reducing the gap between simulation and reality remains an ongoing research problem."
            },
            {
                header: "Project Description",
                content: "This project aims to reduce the sim to real gap for the CrazyFlie quadcopter by integrating the drone's firmware directly into a physics-based simulation framework, safe-control-gym, enabling 'firmware-in-the-loop' training capabilities. This pipeline was developed for the 'Safe Robot Learning Competition' at IROS 2022. Teams were tasked with developing both traditional and learning-based controllers for the CrazyFlie drone that could be trained in simulation and then transferred to the real drone without any real-world training (zero-shot). This not only enabled remote participation in the competition but also significantly lowered the barrier to entry for teams without access to physical CrazyFlie drones. Our pipeline achieved less than 5cm error on average between simulation and real flight data throughout the duration of the flight for each of seven test trajectories.",
                image: 'images/sim2real_flight_comparison.png',
            }

        ],
        publications: [
            'Teetaert2025a',
            'Teetaert2023',
            'Teetaert2023_workshop',
            'Teetaert2022_competition'
        ]
    },
    {
        title: "Caffeine",
        dates: "October 2020 - June 2022",
        bannerImg: 'images/caffeine.png',
        repoUrl: "https://github.com/UTRA-ART/Caffeine",
        description: "Fully autonomous rover for the intelligent ground vehicle competition (IGVC).",
        sections: [
            {
                header: "Project Description",
                content: "Caffeine is the University of Toronto Robotics Association's (UTRA) entry to the Intelligent Ground Vehicle Competition (IGVC). IGVC is an annual competition where university teams design and build autonomous ground vehicles to navigate an obstacle course. I began working on the team's computer vision team before moving on to be the project manager in the 2021-2022 year. Being a small team, I wore many hats as the project lead, contributing directly to computer vision development, electrical design, mechanical design and manufacturing, software, and most importantly, system integration. We competed in the 2022 IGVC competition where I led the team to UTRA's first rover competition appearance in a decade. While technical difficulties during the competition itself prevented us from achieving the results we wanted, the year was a huge success for establishing a foundation for the team moving forward. They would go on to compete again in 2023 and 2024 with ever improving results.",
                image: 'images/igvc.png',
            }
        ]
    },
    {
        title: "EV Charger Robot",
        dates: "January - March 2020",
        bannerImg: 'images/ev_charger.png',
        description: "Robot that autonomously plugs in your EV made for a second year design course.",
        sections: [
            {
                header: "Project Description",
                content: "For the Praxis III design course in second year, my team and I designed and built a robot that aimed to autonomously plug in an electric vehicle (EV). I was the team's mechanical design lead, responsible for designing all the components required for locomotion and manipulation of the EV charger. This course was unfortunately interrupted by the COVID-19 pandemic, so we were unable to see the project through to completion, but we did successfully build and test the robot's chassis and drivetrain before the university closed.",
                image: 'images/ev_charger.jpg',
            }
        ]
    },
    {
        title: "Loin Feeder Robot",
        dates: "May - August 2020",
        bannerImg: 'images/industrial_robot.png',
        repoUrl: "https://github.com/spencerteetaert/loin-feeder-robot",
        description: "Sensing and planning for an industrial robot in a hog processing plant.",
        sections: [
            {
                header: "Project Description",
                content: "For a summer internship at Hylife Foods, I worked on the sensing and control for a robot that was mechanically designed by a capstone team from the University of Manitoba. The robot was designed to perform a specific maneuver on the plant assembly line, grasping hog halves and aligning them to enter a machine that separates the loins. I wrote all the software for sensing, control, and planning of the robot. A vision pipeline identified the location, dynamics, and orientation of the hogs. A planning script then identified the joint configurations required to grasp and move the hogs to the proper location. Lastly, a trajectory planner created velocity profiles for each actuation unit. The project scope shifted and we never built the physical robot, but it did spark interest in automation at the plant that would go on to inspire future projects."
            }
        ]
    },
];



