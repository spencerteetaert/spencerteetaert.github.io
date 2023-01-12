import {
    Typography, IconButton, Card, CardActionArea, CardContent, CardMedia, Dialog, Box, ListItemText
} from '@mui/material'
import { Project } from '@/types';
import { GitHub, ArrowBack } from '@mui/icons-material';
import { useState } from 'react';


export type ProjectCardProps = {
    project: Project
}

export const ProjectCard = ({ project }: ProjectCardProps) => {
    const [open, setOpen] = useState(false);

    const media = (
        <CardMedia image={project.bannerImg} sx={project.bannerImg ? { height: '180px', position: 'relative' } : {}}>
            {
                project.repoUrl ? 
                <IconButton
                    href={project.repoUrl}
                    target="_blank"
                    sx={{
                        bgcolor: 'white !important',
                        position: 'absolute',
                        m: 1, top: 5, right: 5,
                    }}>
                    <GitHub color='primary' />
                </IconButton> : null
            }
        </CardMedia>
    );

    return (
        <>
            <Dialog fullWidth maxWidth='md' open={open} onClose={() => setOpen(false)}>
                {media}
                
                <CardContent>
                    <IconButton 
                        onClick={() => setOpen(false)}
                        sx={{
                            bgcolor: 'white !important',
                            position: 'absolute',
                            m: 1, top: 5, left: 5,
                        }}>
                        <ArrowBack/>
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
                {project.sections?.map(section => (
                    <CardContent key={section.header}>
                        <Typography variant='h6' sx={{ fontWeight: 600 }}>
                            {section.header}
                        </Typography>
                        <Typography color='text.secondary'>
                            {section.content}
                        </Typography>
                        {section.image ? <CardMedia image={section.image} sx={{ height: '180px'}}/> : null}
                    </CardContent>
                ))}
                {
                    project.publications ? <CardContent>
                        <Typography variant='h6' sx={{ fontWeight: 600 }}>
                            Publications
                        </Typography>
                        {project.publications?.map(publication => (
                            <ListItemText>
                                <Typography color='text.secondary'>
                                    {publication}
                                </Typography>
                            </ListItemText>
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