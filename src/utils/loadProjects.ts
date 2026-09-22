import { parseFrontmatter } from '@/utils/frontmatter'
import { Project, ProjectFrontmatter } from '@/types'

const currentRaw = import.meta.glob('../assets/projects/current/*.md', { as: 'raw', eager: true }) as Record<string, string>
const pastRaw = import.meta.glob('../assets/projects/past/*.md', { as: 'raw', eager: true }) as Record<string, string>

function parseDir(raw: Record<string, string>): Project[] {
    return Object.entries(raw)
        .map(([path, text]) => {
            const { data, content } = parseFrontmatter<ProjectFrontmatter>(text)
            const filename = path.split('/').pop()!.replace(/\.md$/, '')
            const order = Number(filename.match(/^(\d+)-/)?.[1] ?? 0)
            return { ...data, key: filename, body: content, _order: order }
        })
        .sort((a, b) => a._order - b._order)
        .map(({ _order, ...project }) => project)
}

export const current_projects: Project[] = parseDir(currentRaw)
export const past_projects: Project[] = parseDir(pastRaw)
