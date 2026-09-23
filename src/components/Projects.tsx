import { Typography, Box, Container, Grid, Collapse, IconButton } from '@mui/material'
import { past_projects, current_projects } from '@/config';
import { ProjectCard } from './ProjectCard';
import { useEffect, useRef, useState } from 'react';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';

export const Projects = () => {
    const [pastOpen, setPastOpen] = useState(false);
    const [previewHeight, setPreviewHeight] = useState(0);
    const collapseRef = useRef<HTMLDivElement>(null);

    // Measure the distance from the top of the collapse to the bottom of the
    // first card's image, so the closed preview shows exactly the image height.
    useEffect(() => {
        const root = collapseRef.current;
        const img = root?.querySelector('img');
        if (!root || !img) return;
        const measure = () => {
            const h = img.getBoundingClientRect().bottom - root.getBoundingClientRect().top;
            if (h > 0) setPreviewHeight(h);
        };
        measure();
        const observer = new ResizeObserver(measure);
        observer.observe(img);
        return () => observer.disconnect();
    }, []);

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
                <Typography mb={2} sx={{ fontSize: '2em', fontWeight: 300 }} >Featured Projects</Typography>
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
                    <Typography sx={{ fontSize: '2em', fontWeight: 300 }}>Other Projects</Typography>
                    <IconButton sx={{ ml: 1, color: 'inherit' }}>
                        {pastOpen ? <ExpandLessIcon /> : <ExpandMoreIcon />}
                    </IconButton>
                </Box>
                <Box
                    onClick={pastOpen ? undefined : () => setPastOpen(true)}
                    sx={{ position: 'relative', cursor: pastOpen ? 'auto' : 'pointer' }}
                >
                    <Collapse in={pastOpen} collapsedSize={previewHeight} ref={collapseRef}>
                        <Grid container spacing={4} sx={{ pointerEvents: pastOpen ? 'auto' : 'none' }}>
                            {past_projects.map(project => (
                                <Grid key={project.title} item xs={12} sm={6} md={4}>
                                    <ProjectCard project={project} />
                                </Grid>
                            ))}
                        </Grid>
                    </Collapse>
                    {/* Fade the closed preview out to the section background */}
                    <Box
                        sx={{
                            position: 'absolute',
                            top: 0, left: 0, right: 0,
                            height: previewHeight,
                            pointerEvents: 'none',
                            background: t => `linear-gradient(to bottom, transparent, ${t.palette.secondary.main})`,
                            opacity: pastOpen ? 0 : 1,
                            transition: t => t.transitions.create('opacity'),
                        }}
                    />
                </Box>
            </Container>
        </Box>
    )
}
