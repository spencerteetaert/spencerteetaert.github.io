export type Project = {
    title: string
    dates?: string
    bannerImg?: string
    repoUrl?: string
    description: string
    sections?: {
        header?: string
        content: string
        image?: string
    }[]
    publications?: string[]
    links?: {
        link: string
        text: string
    }[]
}