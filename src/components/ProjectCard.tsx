import {
    Typography, IconButton, Card, CardActionArea, CardContent, CardMedia, Dialog, Box, List, Link
} from '@mui/material'
import { Project } from '@/types';
import { GitHub, ArrowBack } from '@mui/icons-material';
import { useState } from 'react';
import { PublicationItem, usePublications } from "@/components/Publications"
import { formatIEEE } from '@/utils/bibParser'
import { useRef, useEffect } from 'react';

export type ProjectCardProps = {
    project: Project
}

export const ProjectCard = ({ project }: ProjectCardProps) => {
    const [open, setOpen] = useState(false);

    const cardRef = useRef<HTMLDivElement>(null);
    const [cardWidth, setCardWidth] = useState(0);

    useEffect(() => {
        const updateWidth = () => {
            if (cardRef.current) {
                setCardWidth(cardRef.current.offsetWidth);
            }
        };

        updateWidth();
        window.addEventListener('resize', updateWidth);
        return () => window.removeEventListener('resize', updateWidth);
    }, []);

    const aspectRatio = 4 / 3; // Change this to your desired aspect ratio
    const calculatedHeight = cardWidth / aspectRatio;

    const media = (
        <CardMedia ref={cardRef} image={project.bannerImg} sx={project.bannerImg ? { height: calculatedHeight, position: 'relative' } : {}}>
            {
                project.repoUrl ?
                    <IconButton
                        href={project.repoUrl}
                        target="_blank"
                        sx={{
                            bgcolor: t => t.palette.primary.contrastText,
                            position: 'absolute',
                            m: 1, top: 5, right: 5,
                        }}>
                        <GitHub color='primary' />
                    </IconButton> : null
            }
        </CardMedia>
    );

    const { publications, loading, error } = usePublications();

    return (
        <>
            <Dialog fullWidth maxWidth='md' open={open} onClose={() => setOpen(false)}>
                {media}

                <CardContent>
                    <IconButton
                        onClick={() => setOpen(false)}
                        sx={{
                            bgcolor: t => t.palette.primary.contrastText,
                            position: 'absolute',
                            m: 1, top: 5, left: 5,
                        }}>
                        <ArrowBack />
                    </IconButton>
                    <Box mb={2}>
                        <Typography variant='h5' sx={{ fontWeight: 600 }}>
                            {project.title}
                        </Typography>
                        <Typography variant='caption' mb={2}>
                            {project.subTitle}
                        </Typography>
                    </Box>
                    <Typography color='text.secondary'>
                        {project.description}
                    </Typography>
                </CardContent>
                {
                    project.sections?.map(section => (
                        <CardContent key={section.header}>
                            <Typography variant='h6' sx={{ fontWeight: 600 }}>
                                {section.header}
                            </Typography>
                            <Typography color='text.secondary'>
                                {section.content}
                            </Typography>
                            {section.image ? <CardMedia image={section.image.toString()} sx={{ paddingTop: "30%", objectFit: 'contain' }} /> : null}
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
                                            text={formatIEEE(pub)}
                                            counter={publications.indexOf(pub) + 1}
                                        />
                                    );
                                })}
                            </List>
                        </CardContent> : null
                }
                {
                    project.links ? <CardContent>
                        <Typography variant='h6' sx={{ fontWeight: 600 }}>
                            Links
                        </Typography>
                        {project.links?.map(link => (
                            <Link href={link.link}> {link.text} </Link>
                        ))}
                    </CardContent> : null
                }

            </Dialog>
            <CardActionArea onClick={() => setOpen(true)}>
                <Card>
                    {media}
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