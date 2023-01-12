export type Project = {
    title: string
    subTitle?: string
    bannerImg?: string
    repoUrl?: string
    description: string
    sections?: {
        header: string
        content: string
        image?: MediaImage
    }[]
    publications?: string[]
}