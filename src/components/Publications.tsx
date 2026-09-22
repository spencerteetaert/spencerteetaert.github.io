import { Typography, Box, Container, List, Divider } from '@mui/material'
import { publications, getPublicationIndices } from '@/utils/loadPublications'
import { PublicationEntry } from '@/components/PublicationEntry'

export const Publications = () => {
    const indices = getPublicationIndices()

    return (
        <Box
            sx={{
                py: 4,
            }}
        >
            <Container maxWidth='md'>
                <Typography mb={1} sx={{ fontSize: '2em', fontWeight: 300 }} >Peer-Reviewed Journal and Magazine Articles</Typography>
                <List sx={{ listStyleType: 'none', counterReset: 'ieee-counter' }}>
                    {publications
                        .filter(pub => pub.category === 'journal')
                        .map((pub) => (
                            <PublicationEntry
                                key={pub.key}
                                publication={pub}
                                counter={indices[pub.key]}
                            />
                        ))}
                </List>
            </Container>
            <Box component='hr' sx={{ maxWidth: 'md', width: '100%', border: 0, borderTop: '1px solid', borderColor: 'divider', my: 4, mx: 'auto' }} />
            
            <Container maxWidth='md' sx={{ mt: 4 }}>
                <Typography mb={1} sx={{ fontSize: '2em', fontWeight: 300 }} >Conference Papers</Typography>
                <List sx={{ listStyleType: 'none', counterReset: 'ieee-counter' }}>
                    {publications
                        .filter(pub => pub.category === 'conference')
                        .map((pub) => (
                            <PublicationEntry
                                key={pub.key}
                                publication={pub}
                                counter={indices[pub.key]}
                            />
                        ))}
                </List>
            </Container>
            <Box component='hr' sx={{ maxWidth: 'md', width: '100%', border: 0, borderTop: '1px solid', borderColor: 'divider', my: 4, mx: 'auto' }} />

            <Container maxWidth='md' sx={{ mt: 4 }}>
                <Typography mb={1} sx={{ fontSize: '2em', fontWeight: 300 }} >Preprints</Typography>
                <List sx={{ listStyleType: 'none', counterReset: 'ieee-counter' }}>
                    {publications
                        .filter(pub => pub.category === 'preprint')
                        .map((pub) => (
                            <PublicationEntry
                                key={pub.key}
                                publication={pub}
                                counter={indices[pub.key]}
                            />
                        ))}
                </List>
            </Container>
            <Box component='hr' sx={{ maxWidth: 'md', width: '100%', border: 0, borderTop: '1px solid', borderColor: 'divider', my: 4, mx: 'auto' }} />

            <Container maxWidth='md' sx={{ mt: 4 }}>
                <Typography mb={1} sx={{ fontSize: '2em', fontWeight: 300 }} >Talks</Typography>
                <List sx={{ listStyleType: 'none', counterReset: 'ieee-counter' }}>
                    {publications
                        .filter(pub => pub.category === 'talk')
                        .map((pub) => (
                            <PublicationEntry
                                key={pub.key}
                                publication={pub}
                                counter={indices[pub.key]}
                            />
                        ))}
                </List>
            </Container>
            <Box component='hr' sx={{ maxWidth: 'md', width: '100%', border: 0, borderTop: '1px solid', borderColor: 'divider', my: 4, mx: 'auto' }} />

            <Container maxWidth='md' sx={{ mt: 4 }}>
                <Typography mb={1} sx={{ fontSize: '2em', fontWeight: 300 }} >Other (Poster Presentations, Workshops, etc.)</Typography>
                <List sx={{ listStyleType: 'none', counterReset: 'ieee-counter' }}>
                    {publications
                        .filter(pub => pub.category === 'other')
                        .map((pub) => (
                            <PublicationEntry
                                key={pub.key}
                                publication={pub}
                                counter={indices[pub.key]}
                            />
                        ))}
                </List>
            </Container>
        </Box>
    )
}
