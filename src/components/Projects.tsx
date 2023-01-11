import { Typography, Box, Container, Grid } from '@mui/material'
import { past_projects, current_projects } from '@/config';
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
                <Typography mb={2} variant='h6'>Current Projects</Typography>
                <Grid container spacing={4}>
                    {current_projects.map(project => (
                        <Grid key={project.title} item xs={12} sm={6} md={4}>
                            <ProjectCard project={project} />
                        </Grid>
                    ))}
                </Grid>
                <Typography mb={2} variant='h6'>Past Projects</Typography>
                <Grid container spacing={4}>
                    {past_projects.map(project => (
                        <Grid key={project.title} item xs={12} sm={6} md={4}>
                            <ProjectCard project={project} />
                        </Grid>
                    ))}
                </Grid>
            </Container>
        </Box>
    )
}