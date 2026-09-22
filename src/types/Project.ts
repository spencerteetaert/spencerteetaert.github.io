export type ProjectFrontmatter = {
    title: string
    dates?: string
    bannerImg?: string
    repoUrl?: string
    abstract: string
    publications?: string[]
}

export type Project = ProjectFrontmatter & {
    key: string
    body: string
}
