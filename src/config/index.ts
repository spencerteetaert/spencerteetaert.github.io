import sim2RealImg from '@/assets/sim2real.png';
import sim2RealPipelineImg from '@/assets/sim2real_pipeline.png';
import sim2RealComparisonImg from '@/assets/sim2real_flight_comparison.png';
import caffeineImg from '@/assets/caffeine.png';
import pcrImg from '@/assets/pcr.gif';
import evChargerImg from '@/assets/ev_charger.png';
import industrialRobotImg from '@/assets/industrial_robot.png';
import spacetimeImg from '@/assets/spacetime.png';
import { Project, BibItem } from '@/types';

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
        bannerImg: spacetimeImg, 
        description: "PhD research project on state estimation for continuum robots using continuous-time methods",
        sections: [
            {
                header: "Background",
                content: "Continuum robots are robots that have continuous structures, allowing them to bend and flex similarly to biological appendages such as elephant trunks or octopus arms. This flexibility allows continuum robots to navigate complex environments and perform tasks that traditional rigid-link robots cannot. However, the very properties that make continuum robots advantageous also present significant challenges in accurately estimating their state (i.e., position, orientation, and shape) during operation.",
            },
            {
                header: "Project Description",
                content: "My research focuses on developing continuous-time state estimation techniques for continuum robots. Unlike traditional discrete-time methods, continuous-time approaches can provide more accurate and smooth estimates of the robot's state by leveraging the continuous nature of their structure. This involves formulating mathematical models that capture the dynamics of continuum robots and designing algorithms that can process sensor data in real-time to estimate their state accurately.",
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
        title: "SIM2REAL",
        bannerImg: sim2RealImg,
        repoUrl: "https://github.com/utiasDSL/safe-control-gym/tree/beta-iros-competition",
        description: "Pipeline for zero-shot sim to real transfer of drone controllers",
        sections: [
            {
                header: "Background",
                content: "Work in learning based control has enabled results that were otherwise unachievable through traditional controls. The shortcomings of learning based methods become apparent however as  hardware is expensive to acquire and repair, and is subject to its fastest possible operation in real time. During training, a learning agent is expected to fail often. On a quadcopter platform such as Crazyflies, a failure can at best slow down the training process as one must reset the drone, and at worst can cause damage. When factoring in additional inefficiencies such as limited battery life and the need for constant supervision, training a learning based solution on hardware becomes infeasible. For these reasons it is desirable to have simulations that closely account for physical phenomena expected in real world implementations. Current simulations exist for Crazyflies but lack proper mapping between simulation control inputs and hardware based flights and do not account for the onboard firmware and how it affects a control signal.",
            },
            {
                header: "Project Description",
                content: "A sim2real pipeline was developed to minimize the differences between simulation and real world application, enabling controllers designed entirely in simulation to fly on flight hardware without the need for fine-tuning. The pipeline consists of three parts: (1) Pycffirmware: an extension of the CF firmware python bindings. (2) A firmware wrapper to interface between pycffirmware and safe-control-gym. (3) A module to execute controllers on flight hardware using crazyswarm.",
                image: sim2RealPipelineImg,
            },
            {
                content: "We evaluated the sim2real pipeline on test trajectories. Our pipeline achieved less than 5cm error on average between simulation and real flight data throughout the duration of the flight for each of the  seven test trajectories.",
                image: sim2RealComparisonImg,
            },

        ],
        publications: [
            'Teetaert2025a',
            'Teetaert2023',
            'Teetaert2023_workshop',
            'Teetaert2022_competition'
        ]
    },
    {
        title: "Inspection Drone",
        description: "Autonomous drone for nuclear plant inspection.",
        sections: [
            {
                content: "Project for my fourth year Robotics capstone course. Project runs from January - April 2023."
            }
        ]
    },
    {
        title: "Parallel Continuum Robot",
        bannerImg: pcrImg,
        repoUrl: "https://github.com/spencerteetaert/pcr_control",
        description: "Control for a Tendon Driven Parallel Continuum Robot",
        sections: [
            {
                content: "My undergraduate thesis project looked at control for a planer, parallel continuum robot."
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
        title: "Caffeine",
        bannerImg: caffeineImg,
        repoUrl: "https://github.com/UTRA-ART/Caffeine",
        description: "Fully autonomous rover that competes in IGVC",
        sections: [
            {
                content: "I was the lead designer and project manager for UTRA's Autonomous Rover Team in the 2021-2022 school year. I brought the team back to competition for the first time in over 10 years! Please see github page for more information."
            }
        ]
    },
    {
        title: "Electric Vehicle Charger Robot",
        bannerImg: evChargerImg,
        description: "Robot that autonomously plugs in your EV",
        sections: [
            {
                content: "Project developed for the Praxis III engineering design course in winter semester of 2020. The project was cut short due to the covid shutdown. More info coming soon!"
            }
        ]
    },
    {
        title: "Industrial Robotics",
        bannerImg: industrialRobotImg,
        repoUrl: "https://github.com/spencerteetaert/loin-feeder-robot",
        description: "Sensing and planning for custom industrial robot",
        sections: [
            {
                content: "I continued on the work of a mechanical engineering capstone team at a co-op that I did in the summer of 2019. I wrote the entire software control and sensing library for the robot that they designed. The project scope shifted and we never built the physical robot, but it did spark an automation project at the plant. Please see github page for more information."
            }
        ]
    },
];

