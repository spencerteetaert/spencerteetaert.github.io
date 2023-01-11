import sim2RealImg from '@/assets/sim2real.png';
import caffeineImg from '@/assets/caffeine.jpg';
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
        subTitle: "Pipeline for zero-shot sim to real transfer of drone controllers",
        repoUrl: "https://github.com/utiasDSL/safe-control-gym/tree/beta-iros-competition",
        description: "",
        sections: [
            {
                header: "Background",
                content: "Coming soon",
            },
            {
                header: "Approach",
                content: "Coming soon",
            }
        ]
    },
    {
        title: "Parallel Continuum Robot",
        bannerImg: caffeineImg,
        subTitle: "Learning-Based Control for Tendon Driven Parallel Continuum Robot",
        repoUrl: "https://github.com/spencerteetaert/pcr_control",
        description: "",
    },
    {
        title: "Inspection Drone",
        subTitle: "Fourth year robotics capstone. More coming soon!",
        repoUrl: "",
        description: "",
    },
];

export const past_projects: Project[] = [
    {
        title: "Caffeine",
        bannerImg: caffeineImg,
        repoUrl: "",
        description: "",
    },
    {
        title: "Industrial Robotics",
        repoUrl: "",
        description: "",
    },
    {
        title: "Electric Charger Robot",
        repoUrl: "",
        description: "",
    },
];

