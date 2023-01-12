import sim2RealImg from '@/assets/sim2real.png';
import caffeineImg from '@/assets/caffeine.jpg';
import pcrImg from '@/assets/pcr.gif';
import evChargerImg from '@/assets/ev_charger.jpg';
import industrialRobotImg from '@/assets/industrial_robot.jpg';
import { Project } from '@/types';

export const config = {
    githubUrl: "https://github.com/spencerteetaert",
    linkedInUrl: "https://www.linkedin.com/in/spencerteetaert/",
    emailAddress: "spencerteetaert@gmail.com",
}

// TODO: add projects
export const current_projects: Project[] = [
    {
        title: "SIM2REAL",
        bannerImg: sim2RealImg,
        repoUrl: "https://github.com/utiasDSL/safe-control-gym/tree/beta-iros-competition",
        description: "Pipeline for zero-shot sim to real transfer of drone controllers",
        sections: [
            {
                header: "Background",
                content: "Work in learning based control has enabled results that\
                    were otherwise unachievable through traditional controls.\
                    The shortcomings of learning based methods become apparent however as \
                    hardware is expensive to acquire and\
                    repair, and is subject to its fastest possible operation in\
                    real time. During training, a learning agent is expected to\
                    fail often. On a platform such as Crazyflies, a failure can\
                    at best slow down the training process as one must reset\
                    the drone, and at worst can cause damage. When factoring\
                    in additional inefficiencies such as limited battery life and\
                    the need for constant supervision, training a learning based\
                    solution on hardware becomes infeasible. For these reasons\
                    it is desirable to have simulations that closely account for\
                    physical phenomena expected in real world implementations.\
                    Current simulations exist for Crazyflies but lack proper\
                    mapping between simulation control inputs and hardware\
                    based flights and do not account for the onboard firmware\
                    and how it affects a control signal.",
            },
            {
                header: "Project Solution",
                content: "",
                image: sim2RealImg,
            },
            
        ],
        publications: [
            "[In progress] Zero-Shot Sim2Real Platform for Reinforcement Learning with Quadrotors",
            "[In progress] An Aerial Sim2real Robot Competition at the 2022 International Conference on Intelligent Robots and Systems",
        ]
    },
    {
        title: "Parallel Continuum Robot",
        bannerImg: pcrImg,
        repoUrl: "https://github.com/spencerteetaert/pcr_control",
        description: "Learning-Based Control for Tendon Driven Parallel Continuum Robot",
    },
    {
        title: "Inspection Drone",
        description: "Autonomous drone for nuclear plant inspection. More coming soon!",
    },
];

export const past_projects: Project[] = [
    {
        title: "Caffeine",
        bannerImg: caffeineImg,
        repoUrl: "https://github.com/UTRA-ART/Caffeine",
        description: "Fully autonomous rover that competes in IGVC",
    },
    {
        title: "Electric Vehicle Charger Robot",
        bannerImg: evChargerImg,
        description: "Robot that autonomously plugs in your EV",
    },
    {
        title: "Industrial Robotics",
        bannerImg: industrialRobotImg,
        repoUrl: "https://github.com/spencerteetaert/loin-feeder-robot",
        description: "Sensing and planning for custom industrial robot",
    },
];

