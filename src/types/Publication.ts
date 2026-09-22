export type PublicationCategory = 'journal' | 'conference' | 'preprint' | 'talk' | 'other'

export type PublicationFrontmatter = {
    title: string
    authors: string
    category: PublicationCategory
    year: number
    month?: number
    venue?: string
    doi?: string
    website?: string
    pdf?: string
}

export type Publication = PublicationFrontmatter & {
    key: string
    bibtex: string
}
