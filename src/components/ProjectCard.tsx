import {
    Typography, IconButton, Card, CardActionArea, CardContent, CardMedia, Dialog, Box
} from '@mui/material'
import { Project } from '@/types';
import { GitHub } from '@mui/icons-material';
import { useState } from 'react';


export type ProjectCardProps = {
    project: Project
}

export const ProjectCard = ({ project }: ProjectCardProps) => {
    const [open, setOpen] = useState(false);

    const media = (
        <CardMedia image={project.bannerImg} sx={{ height: '180px', position: 'relative' }}>
            <IconButton
                href={project.repoUrl}
                target="_blank"
                sx={{
                    bgcolor: 'white !important',
                    position: 'absolute',
                    m: 1, top: 0, right: 0,
                }}>
                <GitHub color='primary' />
            </IconButton>
        </CardMedia>
    );

    return (
        <>
            <Dialog fullWidth maxWidth='xs' open={open} onClose={() => setOpen(false)}>
                {media}
                <CardContent>
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
                    </CardContent>
                ))}
            </Dialog>
            <Card>
                {media}
                <CardActionArea onClick={() => setOpen(true)}>
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
                </CardActionArea>
            </Card>
        </>
    )
}