import { Typography, Box, Container, Grid } from '@mui/material'
import { projects } from '@/config';
import { ProjectCard } from './ProjectCard';

export const Projects = () => {
    return (
        <Box
            sx={{
                background: t => t.palette.primary.main,
                color: t => t.palette.primary.contrastText,
                py: 4,
                mt: 8,
            }}
        >
            <Container maxWidth='md'>
                <Typography mb={2} variant='h6'>Projects</Typography>
                <Grid container spacing={4}>
                    {projects.map(project => (
                        <Grid key={project.title} item xs={12} sm={6} md={4}>
                            <ProjectCard project={project} />
                        </Grid>
                    ))}
                </Grid>
            </Container>
        </Box>
    )
}