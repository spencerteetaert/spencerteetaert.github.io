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
                content: "Coming soon",
            },
            {
                header: "My Role",
                content: "Coming soon",
            }
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

