import { Typography, Box, Container, List, ListItem } from '@mui/material'
import { loadBibFile, BibEntry, formatIEEE, getIEEEURL } from '@/utils/bibParser'
import { useState, useEffect } from 'react';

export const PublicationItem = ({ text, link = '', counter = -1 }: { text: string, link: string, counter?: number }) => {
    const names = ['S. Teetaert', 'S. Teetaert*', 'Co-organizer']
    return (
        <ListItem sx={{
            counterIncrement: counter === -1 ? 'ieee-counter' : 'none',
            counterSet: counter === -1 ? undefined : `ieee-counter ${counter}`,
            textIndent: 0,
            '&::before': {
            content: counter === -1 ? '"[" counter(ieee-counter) "]"' : `"[${counter}]"`,
            textAlign: 'left',
            verticalAlign: 'top',
            pr: 2
            }
        }}>
            <Typography>
            {/* Helper function or direct logic to highlight multiple names */}
            {(() => {
                // Create a regex pattern that matches any of the names
                const pattern = new RegExp(`(${names.map(name => name.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')).join('|')})`, 'g');
                const parts = text.split(pattern);

                return (
                <>
                    {parts.map((part, index) =>
                    names.includes(part) ? <strong key={index}>{part}</strong> : part
                    )}
                    {link && <> Available at: <a href={link} target="_blank" rel="noopener noreferrer">{link}</a></>}
                </>
                );
            })()}
            </Typography>
        </ListItem>
    )
}

export const usePublications = () => {
    const [publications, setPublications] = useState<BibEntry[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const loadPublications = async () => {
            try {
                const bibEntries = await loadBibFile('/bib.bib');
                // Sort by year descending (newest first)
                const sortedEntries = bibEntries.sort((a, b) => {
                    return parseInt(b.year) - parseInt(a.year);
                });
                setPublications(sortedEntries);
                setLoading(false);
            } catch (err) {
                setError('Failed to load publications');
                setLoading(false);
                console.error('Error loading publications:', err);
            }
        };

        loadPublications();
    }, []);

    return { publications, loading, error };
};

export const Publications = () => {
    const { publications, loading, error } = usePublications();

    if (loading) {
        return (
            <Box
                sx={{
                    py: 4,
                    mt: 4,
                }}
            >
                <Container maxWidth='md'>
                    <Typography mb={2} sx={{ fontSize: '2em', fontWeight: 300 }} >Publications</Typography>
                    <Typography>Loading publications...</Typography>
                </Container>
            </Box>
        );
    }

    if (error) {
        return (
            <Box
                sx={{
                    py: 4,
                    mt: 4,
                }}
            >
                <Container maxWidth='md'>
                    <Typography mb={2} sx={{ fontSize: '2em', fontWeight: 300 }} >Publications</Typography>
                    <Typography color="error">{error}</Typography>
                </Container>
            </Box>
        );
    }

    return (
        <Box
            sx={{
                py: 4,
            }}
        >
            <Container maxWidth='md'>
                <Typography mb={1} sx={{ fontSize: '2em', fontWeight: 300 }} >Publications</Typography>
                <List sx={{ listStyleType: 'none', counterReset: 'ieee-counter' }}>
                    {publications
                        .filter(pub => pub.type === 'article' || pub.type === 'inproceedings')
                        .map((pub, index) => (
                            <PublicationItem
                                text={formatIEEE(pub)}
                                link={getIEEEURL(pub)}
                                counter={index + 1}
                            />
                        ))}
                </List>
            </Container>
            <Container maxWidth='md' sx={{ mt: 4 }}>
                <Typography mb={1} sx={{ fontSize: '2em', fontWeight: 300 }} >Workshops and Posters</Typography>
                <List sx={{ listStyleType: 'none', counterReset: 'ieee-counter' }}>
                    {publications
                        .filter(pub => pub.type === 'misc')
                        .map((pub, index) => {
                            const articleCount = publications.filter(p => p.type === 'article' || p.type === 'inproceedings').length;
                            return (
                                <PublicationItem
                                    text={formatIEEE(pub)}
                                    link={getIEEEURL(pub)}
                                    counter={articleCount + index + 1}
                                />
                            );
                        })}
                </List>
            </Container>
            <Container maxWidth='md' sx={{ mt: 4 }}>
                <Typography mb={1} sx={{ fontSize: '2em', fontWeight: 300 }} >Other Works</Typography>
                <List sx={{ listStyleType: 'none', counterReset: 'ieee-counter' }}>
                    {publications
                        .filter(pub => pub.type === 'unpublished')
                        .map((pub, index) => {
                            const articleCount = publications.filter(p => p.type === 'article' || p.type === 'inproceedings').length;
                            return (
                                <PublicationItem
                                    text={formatIEEE(pub)}
                                    link={getIEEEURL(pub)}
                                    counter={articleCount + index + 1}
                                />
                            );
                        })}
                </List>
            </Container>
        </Box>
    )
}