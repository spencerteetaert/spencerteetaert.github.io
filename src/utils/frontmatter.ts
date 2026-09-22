import { load } from 'js-yaml'

export function parseFrontmatter<T>(raw: string): { data: T, content: string } {
    const match = raw.match(/^---\r?\n([\s\S]*?)\r?\n---\r?\n?([\s\S]*)$/)
    if (!match) {
        return { data: {} as T, content: raw.trim() }
    }
    const data = (load(match[1]) ?? {}) as T
    return { data, content: match[2].trim() }
}
