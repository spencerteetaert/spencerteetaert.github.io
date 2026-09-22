import {
    Typography, IconButton, Card, CardActionArea, CardContent, Dialog, Box, List, Link
} from '@mui/material'
import { Project } from '@/types';
import { GitHub, ArrowBack } from '@mui/icons-material';
import { useState } from 'react';
import Markdown from 'markdown-to-jsx'
import { publications, getPublicationIndices } from '@/utils/loadPublications'
import { PublicationEntry } from '@/components/PublicationEntry'

export type ProjectCardProps = {
    project: Project
}

export const ProjectCard = ({ project }: ProjectCardProps) => {
    const [open, setOpen] = useState(false);
    const indices = getPublicationIndices();

    return (
        <>
            <Dialog fullWidth maxWidth='sm' open={open} onClose={() => setOpen(false)}>
                <Box sx={{ width: '100%' }}>
                    <img
                        src={project.bannerImg}
                        style={{
                            width: '100%',
                            height: 'auto',
                            display: 'block'
                        }}
                    />
                    <IconButton
                        onClick={() => setOpen(false)}
                        sx={{
                            bgcolor: t => t.palette.primary.contrastText,
                            position: 'absolute',
                            m: 1, top: 5, left: 5,
                        }}>
                        <ArrowBack />
                    </IconButton>

                    {project.repoUrl ? (
                        <IconButton
                            href={project.repoUrl}
                            target="_blank"
                            sx={{
                                bgcolor: t => t.palette.primary.contrastText,
                                position: 'absolute',
                                m: 1, top: 5, right: 5,
                            }}>
                            <GitHub color='primary' />
                        </IconButton>
                    ) : null}
                </Box>

                <CardContent>
                    <Box>
                        <Typography variant='h5' sx={{ fontWeight: 600 }}>
                            {project.title}
                        </Typography>
                        {project.dates ? <Typography color='text.secondary'>
                            {project.dates}
                        </Typography> : null}
                    </Box>
                </CardContent>
                <CardContent>
                    <Markdown options={{
                        overrides: {
                            h1: { component: Typography, props: { variant: 'h6', sx: { fontWeight: 600 } } },
                            h2: { component: Typography, props: { variant: 'h6', sx: { fontWeight: 600 } } },
                            h3: { component: Typography, props: { variant: 'h6', sx: { fontWeight: 600 } } },
                            p: { component: Typography, props: { color: 'text.secondary', sx: { mb: 2 } } },
                            img: {
                                component: ({ src, alt }: { src?: string, alt?: string }) => (
                                    <Box sx={{ width: '100%', mt: 2 }}>
                                        <img
                                            src={src}
                                            alt={alt}
                                            style={{
                                                width: '100%',
                                                height: 'auto',
                                                display: 'block'
                                            }}
                                        />
                                    </Box>
                                ),
                            },
                        },
                    }}>
                        {project.body}
                    </Markdown>
                </CardContent>
                {
                    project.publications ?
                        <CardContent>
                            <Typography variant='h6' sx={{ fontWeight: 600 }}>
                                References
                            </Typography>
                            <List sx={{ listStyleType: 'none', counterReset: 'ieee-counter' }}>
                                {project.publications?.map(publicationKey => {
                                    const pub = publications.find(pub => pub.key === publicationKey);
                                    if (!pub) return null;
                                    return (
                                        <PublicationEntry
                                            key={publicationKey}
                                            publication={pub}
                                            counter={indices[publicationKey]}
                                        />
                                    );
                                })}
                            </List>
                        </CardContent> : null
                }
            </Dialog>

            <CardActionArea onClick={() => setOpen(true)}>
                <Card>
                    <Box sx={{ width: '100%' }}>
                        <img
                            src={project.bannerImg}
                            style={{
                                width: '100%',
                                height: 'auto',
                                display: 'block'
                            }}
                        />
                        {project.repoUrl ? (
                            <IconButton
                                href={project.repoUrl}
                                target="_blank"
                                sx={{
                                    bgcolor: t => t.palette.primary.contrastText,
                                    position: 'absolute',
                                    m: 1, top: 5, right: 5,
                                }}>
                                <GitHub color='primary' />
                            </IconButton>
                        ) : null}
                    </Box>

                    <CardContent>
                        <Typography variant='h5' sx={{ fontWeight: 600 }}>{project.title}</Typography>
                        {project.dates ? <Typography color='text.secondary' mb={2}>
                            {project.dates}
                        </Typography> : null}
                        <Typography
                            sx={{
                                overflow: "hidden",
                                textOverflow: "ellipsis",
                                display: "-webkit-box",
                                WebkitLineClamp: "2",
                                WebkitBoxOrient: "vertical",
                            }}
                            color='text.secondary'
                        >
                            {project.abstract}
                        </Typography>
                    </CardContent>
                </Card>
            </CardActionArea>
        </>
    )
}
