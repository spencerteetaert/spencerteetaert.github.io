import { Typography, Box, Divider, Button, Stack, Dialog, CardContent, IconButton } from '@mui/material'
import { GitHub, LinkedIn, EmailRounded, ArticleRounded, ExpandMore, Close, Person, School } from '@mui/icons-material';
import { config } from '@/config';
import { useState } from 'react';

// Utility function to convert obfuscated email to actual email
const deobfuscateEmail = (obfuscatedEmail: string): string => {
    return obfuscatedEmail
        .replace(/\s*\[dot\]\s*/g, '.')
        .replace(/\s*\[at\]\s*/g, '@');
};

export const Banner = () => {
    const [showAbout, setShowAbout] = useState(false);

    return (
        <div>
            <Box
                sx={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: 2,
                    flexWrap: 'wrap-reverse',
                }}
            >
                <Box sx={{ width: { xs: 1, sm: 0.5 } }}>
                    <Typography variant='h1'>
                        Hi, I'm Spencer
                    </Typography>
                    <Typography sx={{ fontSize: '1.2em', my: 2 }}>
                        A PhD candidate and robotics researcher at the University of Toronto
                    </Typography>
                    <Button
                        size='large'
                        sx={{ mt: 4, width: { xs: 1, sm: 'auto' } }}
                        variant='contained'
                        href="/cv.pdf"
                        target="_blank"
                        startIcon={<ArticleRounded />}
                    >
                        Curriculum Vitae
                    </Button>
                </Box>
                <Box sx={{ flex: 1, textAlign: 'center' }}>
                    <img
                        src={"images/portrait.png"}
                        alt="portrait"
                        style={{
                            width: '90%',
                            borderTopLeftRadius: '60%',
                            borderBottomLeftRadius: '50%',
                            borderBottomRightRadius: '60%',
                            borderTopRightRadius: '50%',
                        }}
                    />
                </Box>
            </Box>
            <Stack mt={6} spacing={1} direction='row' sx={{ justifyContent: { xs: 'center', sm: 'start' } }}>
                <Button href={config.googleScholarUrl} target="_blank" startIcon={<School />}>
                    Google Scholar
                </Button>
                <Button href={config.githubUrl} target="_blank" startIcon={<GitHub />}>
                    GitHub
                </Button>
                <Button href={config.linkedInUrl} target="_blank" startIcon={<LinkedIn sx={{ color: '#4675AA' }} />}>
                    LinkedIn
                </Button>
                <Button href={'mailto:' + encodeURIComponent(deobfuscateEmail(config.emailAddress))} target="_blank" startIcon={<EmailRounded />}>
                    Email
                </Button>
            </Stack>
            <Divider sx={{ mb: 6, mt: 1 }} />
            <Box>
                <Typography sx={{ fontSize: '2em', fontWeight: 300 }} >
                    About me
                </Typography>
                <Typography sx={{ fontSize: '1.2em', fontWeight: 100 }}>
                    I am a PhD candidate in the <a href="http://asrl.utias.utoronto.ca/" target="_blank" rel="noopener noreferrer">Autonomous Space Robotics Lab</a> and the <a href="https://crl.utm.utoronto.ca/" target="_blank" rel="noopener noreferrer">Continuum Robotics Lab</a> at the University of Toronto, supervised jointly by Professors Timothy D. Barfoot and Jessica Burgner-Kahrs. My research currently focuses on probabilistic state estimation methods for continuum robots. My goal is to enable practical use of continuum robots in real world applications through the effective estimation and utilization of modelling uncertainties. 
                </Typography>
            </Box>
        </div >
    )
}