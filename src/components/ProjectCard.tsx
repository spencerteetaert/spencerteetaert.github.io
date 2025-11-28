import {
    Typography, IconButton, Card, CardActionArea, CardContent, Dialog, Box, List, Link
} from '@mui/material'
import { Project } from '@/types';
import { GitHub, ArrowBack } from '@mui/icons-material';
import { useState } from 'react';
import { PublicationItem, usePublications } from "@/components/Publications"
import { formatIEEE, getIEEEURL } from '@/utils/bibParser'

export type ProjectCardProps = {
    project: Project
}

export const ProjectCard = ({ project }: ProjectCardProps) => {
    const [open, setOpen] = useState(false);
    const { publications, loading, error } = usePublications();

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
                {
                    project.sections?.map(section => (
                        <CardContent>
                            {section.header ? <Typography variant='h6' sx={{ fontWeight: 600 }}>
                                {section.header}
                            </Typography> : null}
                            <Typography color='text.secondary'>
                                {section.content}
                            </Typography>
                            {section.image ?
                                <Box sx={{ width: '100%', mt: 2 }}>
                                    <img
                                        src={section.image}
                                        alt={section.header}
                                        style={{
                                            width: '100%',
                                            height: 'auto',
                                            display: 'block'
                                        }}
                                    />
                                </Box> : null}
                        </CardContent>
                    ))
                }
                {
                    project.publications ?
                        <CardContent>
                            <Typography variant='h6' sx={{ fontWeight: 600 }}>
                                Publications
                            </Typography>
                            <List sx={{ listStyleType: 'none', counterReset: 'ieee-counter' }}>
                                {project.publications?.map(publication => {
                                    const pub = publications.find(pub => pub.key === publication);
                                    if (!pub) return null;
                                    return (
                                        <PublicationItem
                                            key={publication}
                                            text={formatIEEE(pub)}
                                            link={getIEEEURL(pub)}
                                            counter={publications.indexOf(pub) + 1}
                                        />
                                    );
                                })}
                            </List>
                        </CardContent> : null
                }
                {
                    project.links? <CardContent>
                        <Typography variant='h6' sx={{ fontWeight: 600 }}>
                            Links
                        </Typography>
                        {project.links?.map((link, index) => (
                            <Box key={index}>
                                <Link href={link.link} target="_blank" rel="noopener noreferrer">
                                    {link.text}
                                </Link>
                            </Box>
                        ))}
                    </CardContent>: null
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
                        <Typography variant='h5' sx={{ fontWeight: 600 }} mb={2}>{project.title}</Typography>
                        <Typography
                            sx={{
                                overflow: "hidden",
                                textOverflow: "ellipsis",
                                display: "-webkit-box",
                                WebkitLineClamp: "3",
                                WebkitBoxOrient: "vertical",
                            }}
                            color='text.secondary'
                        >
                            {project.description}
                        </Typography>
                    </CardContent>
                </Card>
            </CardActionArea>
        </>
    )
}