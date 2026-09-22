import { parseFrontmatter } from '@/utils/frontmatter'
import { Publication, PublicationFrontmatter, PublicationCategory } from '@/types'

const raw = import.meta.glob('../assets/publications/*.md', { as: 'raw', eager: true }) as Record<string, string>

export const publications: Publication[] = Object.entries(raw)
    .map(([path, text]) => {
        const { data, content } = parseFrontmatter<PublicationFrontmatter>(text)
        const key = path.split('/').pop()!.replace(/\.md$/, '')
        return { ...data, key, bibtex: content }
    })
    .sort((a, b) => (b.year - a.year) || ((b.month ?? 0) - (a.month ?? 0)))

const CATEGORY_ORDER: PublicationCategory[] = ['journal', 'conference', 'preprint', 'talk', 'other']

export function getPublicationIndices(): Record<string, number> {
    let n = 1
    const out: Record<string, number> = {}
    CATEGORY_ORDER.forEach(category => {
        publications
            .filter(p => p.category === category)
            .forEach(p => { out[p.key] = n++ })
    })
    return out
}
