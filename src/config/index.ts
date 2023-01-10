import sim2RealImg from '@/assets/sim2real.png';
import caffeineImg from '@/assets/caffeine.jpg';
import { Project } from '@/types';

export const config = {
    githubUrl: "", // TODO:
    linkedInUrl: "", // TODO:
    emailAddress: "spencerteetaert@gmail.com",
}

// TODO: add projects
export const projects: Project[] = [
    {
        title: "SIM2REAL",
        bannerImg: sim2RealImg,
        subTitle: "Learning based controller for a parallel continuum robot",
        repoUrl: "https://github.com/utiasDSL/safe-control-gym/tree/beta-iros-competition",
        description: "A firmware wrapper for integrated simulation of real world flight controls for CrazyFlie2.0 drones enabling copy-paste controller implementation.",
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
        title: "Caffeine",
        bannerImg: caffeineImg,
        repoUrl: "https://github.com/utiasDSL/safe-control-gym/tree/beta-iros-competition",
        description: "A firmware wrapper for integrated simulation of real world flight controls for CrazyFlie2.0 drones enabling copy-paste controller implementation.",
    },
];
