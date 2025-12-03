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
                        A PhD student and robotics researcher at the University of Toronto
                    </Typography>
                    <Button
                        size='large'
                        sx={{ mt: 4, width: { xs: 1, sm: 'auto' } }}
                        variant='contained'
                        href="/cv.pdf"
                        download
                        target="_blank"
                        startIcon={<ArticleRounded />}
                    >
                        Curriculum Vitae
                    </Button>
                </Box>
                <Box sx={{ flex: 1, textAlign: 'center' }}>
                    <img
                        src={"images/portrait.jpg"}
                        alt="portrait"
                        style={{
                            width: '90%',
                            borderTopLeftRadius: '60%',
                            borderBottomLeftRadius: '50%',
                            borderBottomRightRadius: '70%',
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
                    I am a third year PhD student in the <a href="http://asrl.utias.utoronto.ca/" target="_blank" rel="noopener noreferrer">Autonomous Space Robotics Lab</a> and the <a href="https://crl.utm.utoronto.ca/" target="_blank" rel="noopener noreferrer">Continuum Robotics Lab</a> at the University of Toronto, supervised jointly by Professors Timothy D. Barfoot and Jessica Burgner-Kahrs. My research currently focuses on state estimation methods for continuum robots. My goal is to enable practical use of continuum robots in real world applications. 
                </Typography>
                {/* <Box textAlign='center' my={4}>
                    <Button variant='outlined' startIcon={<Person />} endIcon={<ExpandMore />} onClick={() => setShowAbout(true)} size="large">
                        My story
                    </Button>
                </Box> */}
            </Box>
            {/* <Dialog fullWidth maxWidth='md' open={showAbout} onClose={() => setShowAbout(false)}>
                <IconButton
                    onClick={() => setShowAbout(false)}
                    sx={{
                        position: 'absolute',
                        top: 0,
                        right: 0,
                        m: 1,
                        color: t => t.palette.primary.main,
                    }}
                >
                    <Close />
                </IconButton>
                <CardContent>
                    <Stack spacing={2}>
                        <Typography sx={{ fontWeight: 600 }}>
                            Early life 
                        </Typography>
                        <Typography>
                            I grew up in the small town of Steinbach, MB, in a family of eight. From a young age, I got involved in every sport under the sun; soccer, basketball, track and field, cross country, volleyball, badminton, and handtis, to name a few. I went on to continue playing volleyball competitively for 7 years, winning several provincial and national titles. While my competitive play stopped after high school graduation, I continue to play recreationally to this day.
                        </Typography>
                        <Typography>
                            I have picked up several instruments throughout the years including piano, clarinet, baritone saxophone, and vocals. I sang in provincial honour choirs, regional choirs, vocal jazz groups, and chamber choirs throughout my time in high school. Earlier I played saxophone in both concert and jazz bands. 
                        </Typography>
                        <Typography sx={{ fontWeight: 600 }}>
                            Undergraduate education
                        </Typography>
                        <Typography>
                            I started my formal education by obtaining a BASc in Engineering Science at the University of Toronto. Throughout my undergraduate, I joined intramural and design teams. I would eventually go on to lead the Robotics Association (UTRA) as the club president where I oversaw four design teams and two outreach/learning initiatives totalling over 150 active members. We competed internationally in robotics competitions across the world.
                        </Typography>
                        <Typography>
                            After my third year, I did a full year coop at Huawei Canada in the Human Machine Interaction (HMI) lab. There, I developed learning-based computer vision techniques for smart consumer devices including heads up displays and smart phones. My work aimed to improve user experience through enabling hands free control of devices.  
                        </Typography>
                        <Typography>
                            I began my research career under Professor Schoellig (PhD) at the Dynamic Systems Lab at UTIAS. Working closely with Jacopo Panerati (PhD) I developed sim2real for easy simulation to real translation of controllers designed for crazyflie drones. This work has continued into what will be my first academic authorship (coming soon). In September of 2022, I began work on my undergraduate thesis under Professor Burgner-Kahrs (PhD) at the Continuum Robotics Lab. 
                        </Typography>
                        <Typography sx={{ fontWeight: 600 }}>
                            Graduate studies
                        </Typography>
                        <Typography>
                            I began my graduate studies as a MASc candidate at UTIAS under cosupervision of Professors Barfoot and Burgner-Kahrs. After a year of research, I transitioned into the PhD program where I continue my work on state estimation techniques for continuum robots. My research aims to enable practical use of continuum robots in real world applications, a goal I intend to pursue for the foreseeable future.
                        </Typography>
                    </Stack>
                </CardContent>
            </Dialog> */}
        </div >
    )
}