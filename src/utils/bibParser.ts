import * as bibtex from 'bibtex-parse-js';

export interface BibEntry {
  key: string;
  type: string;
  title: string;
  author: string;
  year: string;
  journal?: string;
  booktitle?: string;
  volume?: string;
  number?: string;
  pages?: string;
  publisher?: string;
  note?: string;
  doi?: string;
  eprint?: string;
  pubstate?: string;
  index?: number;
}

export function parseBibFile(bibContent: string): BibEntry[] {
  try {
    const parsed = bibtex.toJSON(bibContent);
    return parsed.map((entry: any) => ({
      key: entry.citationKey,
      type: entry.entryType,
      title: cleanBibField(entry.entryTags?.title || ''),
      author: cleanBibField(entry.entryTags?.author || ''),
      year: entry.entryTags?.year || '',
      journal: cleanBibField(entry.entryTags?.journal || ''),
      booktitle: cleanBibField(entry.entryTags?.booktitle || ''),
      volume: entry.entryTags?.volume || '',
      number: entry.entryTags?.number || '',
      pages: entry.entryTags?.pages || '',
      publisher: cleanBibField(entry.entryTags?.publisher || ''),
      note: cleanBibField(entry.entryTags?.note || ''),
      doi: entry.entryTags?.doi || '',
      eprint: entry.entryTags?.eprint || '',
      pubstate: entry.entryTags?.pubstate || ''
    }));
  } catch (error) {
    console.error('Error parsing BibTeX:', error);
    return [];
  }
}

function cleanBibField(field: string): string {
  // Remove curly braces and clean up BibTeX formatting
  return field
    .replace(/[{}]/g, '')
    .replace(/\\\\/g, '')
    .trim();
}

export function formatIEEE(entry: BibEntry): string {
  const authors = formatAuthors(entry.author);
  const title = `"${entry.title}"`;
  
  let formatted = `${authors}, ${title}`;
  
  if (entry.type === 'article') {
    if (entry.journal) {
      formatted += `, ${entry.journal}`;
    }
    if (entry.volume) {
      formatted += `, vol. ${entry.volume}`;
    }
    if (entry.number) {
      formatted += `, no. ${entry.number}`;
    }
    if (entry.pages) {
      formatted += `, pp. ${entry.pages}`;
    }
    formatted += `, ${entry.year}`;
    if (entry.doi) {
      formatted += `, doi: ${entry.doi}`;
    }
  } else if (entry.type === 'inproceedings' || entry.type === 'conference') {
    if (entry.booktitle) {
      formatted += `, in ${entry.booktitle}`;
    }
    if (entry.pages) {
      formatted += `, pp. ${entry.pages}`;
    }
    formatted += `, ${entry.year}`;
    if (entry.publisher) {
      formatted += `, ${entry.publisher}`;
    }
  } else 
  {
    formatted += `, ${entry.year}`;
  }
  
  if (entry.note) {
    formatted += `, ${entry.note}`;
  }
  
  formatted += '.';
  
  return formatted;
}

export function getIEEEURL(entry: BibEntry): string {
  let formatted = '';

  if (entry.eprint) {
    formatted = `https://arxiv.org/abs/${entry.eprint}`;
  }

  return formatted;
}

function formatAuthors(authorString: string): string {
  if (!authorString) return '';
  
  // Split authors by 'and'
  const authors = authorString.split(' and ').map(author => author.trim());
  
  // Format each author (First Initial. Last Name)
  const formattedAuthors = authors.map(author => {
    if (author.includes(',')) {
      // Format is "Last, First Middle" - convert to "F. Last"
      const [lastName, firstNames] = author.split(',').map(part => part.trim());
      if (firstNames) {
        const firstInitial = firstNames.charAt(0).toUpperCase();
        return `${firstInitial}. ${lastName}`;
      }
      return lastName;
    } else {
      // Split by spaces and assume last word is surname
      const parts = author.split(' ');
      if (parts.length >= 2) {
        const surname = parts.pop();
        const firstInitial = parts[0].charAt(0).toUpperCase();
        return `${firstInitial}. ${surname}`;
      }
      return author;
    }
  });
  
  // Join authors with proper formatting
  if (formattedAuthors.length === 1) {
    return formattedAuthors[0];
  } else if (formattedAuthors.length === 2) {
    return `${formattedAuthors[0]} and ${formattedAuthors[1]}`;
  } else if (formattedAuthors.length >= 5) {
    return `${formattedAuthors[0]} et al.`;
  } else {
    const lastAuthor = formattedAuthors.pop();
    return `${formattedAuthors.join(', ')}, and ${lastAuthor}`;
  }
}

export async function loadBibFile(path: string): Promise<BibEntry[]> {
  try {
    const response = await fetch(path);
    const content = await response.text();
    return parseBibFile(content);
  } catch (error) {
    console.error('Error loading BibTeX file:', error);
    return [];
  }
}