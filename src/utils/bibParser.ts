import * as bibtex from 'bibtex-parse-js';

export interface BibEntry {
  key: string;
  type: string;
  title: string;
  author: string;
  year: string;
  month?: string;
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
  link?: string;
}

export function parseBibFile(bibContent: string): BibEntry[] {
  try {
    const parsed = bibtex.toJSON(bibContent);
    return parsed.map((entry: any) => ({
      key: entry.citationKey,
      type: entry.entryType,
      title: cleanBibField(entry.entryTags?.title || ''),
      author: entry.entryTags?.author || '',
      year: entry.entryTags?.year || '',
      month: entry.entryTags?.month || '',
      journal: cleanBibField(entry.entryTags?.journal || ''),
      booktitle: cleanBibField(entry.entryTags?.booktitle || ''),
      volume: entry.entryTags?.volume || '',
      number: entry.entryTags?.number || '',
      pages: entry.entryTags?.pages || '',
      publisher: cleanBibField(entry.entryTags?.publisher || ''),
      note: cleanBibField(entry.entryTags?.note || ''),
      doi: entry.entryTags?.doi || '',
      eprint: entry.entryTags?.eprint || '',
      pubstate: entry.entryTags?.pubstate || '',
      link: entry.entryTags?.link || ''
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

function formatMonth(month: string): string {
  const monthMap: { [key: string]: string } = {
    '1': 'Jan.',
    '2': 'Feb.',
    '3': 'Mar.',
    '4': 'Apr.',
    '5': 'May',
    '6': 'Jun.',
    '7': 'Jul.',
    '8': 'Aug.',
    '9': 'Sep.',
    '10': 'Oct.',
    '11': 'Nov.',
    '12': 'Dec.'
  };
  return monthMap[month] || month;
}

export function formatIEEE(entry: BibEntry): string {
  const authors = formatAuthors(entry.author);
  const title = `"${entry.title}"`;
  
  let formatted = `${authors}, ${title}`;
  
  if (entry.journal && entry.type === 'article') {
    formatted += `, ${entry.journal}`;
  }
  if (entry.booktitle && (entry.type === 'inproceedings' || entry.type === 'conference')) {
    formatted += `, ${entry.booktitle}`;
  }
  if (entry.volume && entry.type === 'article') {
    formatted += `, vol. ${entry.volume}`;
  }
  if (entry.number && entry.type === 'article') {
    formatted += `, no. ${entry.number}`;
  }
  if (entry.pages) {
    formatted += `, pp. ${entry.pages}`;
  }
  if (entry.month) {
    formatted += `, ${formatMonth(entry.month)} ${entry.year}`;
  }
  else {
    formatted += `, ${entry.year}`;
  }
  if (entry.publisher) {
    formatted += `, ${entry.publisher}`;
  }
  if (entry.doi && entry.link) {
    formatted += `, doi: ${entry.doi}`;
  }
  if (entry.pubstate) {
    formatted += `, ${entry.pubstate}`;
  }
  if (entry.note) {
    formatted += `, ${entry.note}`;
  }
  
  formatted += '.';
  
  return formatted;
}

export function getIEEEURL(entry: BibEntry): string {
  let formatted = '';

  if (entry.link) {
    formatted =`${entry.link}`;
  }
  else if (entry.eprint) {
    formatted = `https://arxiv.org/abs/${entry.eprint}`;
  }
  else if (entry.doi) {
    formatted = `https://doi.org/${entry.doi}`;
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
      const [lastName, firstNames, ...noteParts] = splitBibtexOnComma(author).map(part => part.trim());
      if (firstNames) {
        const firstNameTokens = tokenizeBibtexName(firstNames).filter(part => !isBibtexNoteToken(part));
        const givenInitials = formatBibtexInitials(firstNameTokens);
        return `${givenInitials} ${stripBibtexBraces(lastName)}${formatBibtexNotes(noteParts)}`;
      }
      return `${stripBibtexBraces(lastName)}${formatBibtexNotes(noteParts)}`;
    } else {
      // Split by spaces outside braces and assume last token is surname
      const parts = tokenizeBibtexName(author);
      const noteParts = parts.filter(isBibtexNoteToken);
      const nameParts = parts.filter(part => !isBibtexNoteToken(part));
      if (nameParts.length >= 2) {
        const surname = stripBibtexBraces(nameParts[nameParts.length - 1]);
        const givenInitials = formatBibtexInitials(nameParts.slice(0, -1));
        return `${givenInitials} ${surname}${formatBibtexNotes(noteParts)}`;
      }
      return `${stripBibtexBraces(author)}${formatBibtexNotes(noteParts)}`;
    }
  });
  
  // Join authors with proper formatting
  if (formattedAuthors.length === 1) {
    return formattedAuthors[0];
  } else if (formattedAuthors.length === 2) {
    return `${formattedAuthors[0]} and ${formattedAuthors[1]}`;
  // } else if (formattedAuthors.length >= 5) {
  //   return `${formattedAuthors[0]} et al.`;
  } else {
    const lastAuthor = formattedAuthors.pop();
    return `${formattedAuthors.join(', ')}, and ${lastAuthor}`;
  }
}

function tokenizeBibtexName(nameString: string): string[] {
  const tokens: string[] = [];
  let currentToken = '';
  let braceDepth = 0;

  for (const char of nameString) {
    if (char === '{') {
      braceDepth += 1;
      currentToken += char;
    } else if (char === '}') {
      braceDepth = Math.max(0, braceDepth - 1);
      currentToken += char;
    } else if (char === ' ' && braceDepth === 0) {
      if (currentToken) {
        tokens.push(currentToken);
        currentToken = '';
      }
    } else {
      currentToken += char;
    }
  }

  if (currentToken) {
    tokens.push(currentToken);
  }

  return tokens;
}

function splitBibtexOnComma(nameString: string): string[] {
  const parts: string[] = [];
  let currentPart = '';
  let braceDepth = 0;

  for (const char of nameString) {
    if (char === '{') {
      braceDepth += 1;
      currentPart += char;
    } else if (char === '}') {
      braceDepth = Math.max(0, braceDepth - 1);
      currentPart += char;
    } else if (char === ',' && braceDepth === 0) {
      parts.push(currentPart);
      currentPart = '';
    } else {
      currentPart += char;
    }
  }

  parts.push(currentPart);
  return parts;
}

function stripBibtexBraces(value: string): string {
  return value.replace(/[{}]/g, '').trim();
}

function isBibtexNoteToken(token: string): boolean {
  const cleanedToken = stripBibtexBraces(token);
  return cleanedToken.startsWith('[') || cleanedToken.startsWith('(') || cleanedToken.includes('on behalf of');
}

function formatBibtexNotes(noteTokens: string[]): string {
  if (!noteTokens.length) {
    return '';
  }

  return ` ${noteTokens.map(stripBibtexBraces).join(' ')}`;
}

function formatBibtexInitials(nameTokens: string[]): string {
  return nameTokens
    .map(token => stripBibtexBraces(token))
    .filter(Boolean)
    .map(token => `${token.charAt(0).toUpperCase()}.`)
    .join(' ');
}

export async function loadBibFile(path: string): Promise<BibEntry[]> {
  try {
    const version = typeof __APP_VERSION__ !== 'undefined' ? __APP_VERSION__ : Date.now().toString();
    const response = await fetch(`${path}?v=${version}`);
    const content = await response.text();
    return parseBibFile(content);

  } catch (error) {
    console.error('Error loading BibTeX file:', error);
    return [];
  }
}