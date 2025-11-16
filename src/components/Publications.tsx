import { Typography, Box, Container, List, ListItem } from '@mui/material'
import { loadBibFile, BibEntry, formatIEEE } from '@/utils/bibParser'
import { useState, useEffect } from 'react';

export const PublicationItem = ({ text, counter = -1 }: { text: string, counter?: number }) => {
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
                {text}
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
                const sortedEntries = bibEntries.sort((a, b) => parseInt(b.year) - parseInt(a.year));
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
                mt: 4,
            }}
        >
            <Container maxWidth='md'>
                <Typography mb={2} sx={{ fontSize: '2em', fontWeight: 300 }} >Publications</Typography>
                <List sx={{ listStyleType: 'none', counterReset: 'ieee-counter' }}>
                    {publications
                        .filter(pub => pub.type === 'article')
                        .map((pub, index) => (
                            <PublicationItem
                                text={formatIEEE(pub)}
                                counter={index + 1}
                            />
                        ))}
                </List>
            </Container>
        </Box>
    )
}