import { Typography, Box, Container, Grid, Collapse, IconButton } from '@mui/material'
import { past_projects, current_projects } from '@/config';
import { ProjectCard } from './ProjectCard';
import { useState } from 'react';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';

export const Projects = () => {
    const [pastOpen, setPastOpen] = useState(false);

    return (
        <Box
            sx={{
                background: t => t.palette.secondary.main,
                color: t => t.palette.secondary.contrastText,
                py: 4,
                mt: 8,
            }}
        >
            <Container maxWidth='md'>
                <Typography mb={2} sx={{ fontSize: '2em', fontWeight: 300 }} >Current Projects</Typography>
                <Grid container spacing={4}>
                    {current_projects.map(project => (
                        <Grid key={project.title} item xs={12} sm={6} md={4}>
                            <ProjectCard project={project} />
                        </Grid>
                    ))}
                </Grid>
                <Box
                    onClick={() => setPastOpen(prev => !prev)}
                    sx={{
                        display: 'flex',
                        alignItems: 'center',
                        cursor: 'pointer',
                        mt: 4,
                        mb: 2,
                        userSelect: 'none',
                    }}
                >
                    <Typography sx={{ fontSize: '2em', fontWeight: 300 }}>Past Projects</Typography>
                    <IconButton sx={{ ml: 1, color: 'inherit' }}>
                        {pastOpen ? <ExpandLessIcon /> : <ExpandMoreIcon />}
                    </IconButton>
                </Box>
                <Collapse in={pastOpen}>
                    <Grid container spacing={4}>
                        {past_projects.map(project => (
                            <Grid key={project.title} item xs={12} sm={6} md={4}>
                                <ProjectCard project={project} />
                            </Grid>
                        ))}
                    </Grid>
                </Collapse>
            </Container>
        </Box>
    )
}