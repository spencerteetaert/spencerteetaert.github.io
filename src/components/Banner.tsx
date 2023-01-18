import { Typography, Box, Divider, Button, Stack, Dialog, CardContent, IconButton } from '@mui/material'
import { GitHub, LinkedIn, EmailRounded, ArticleRounded, ExpandMore, Close, Person } from '@mui/icons-material';
import { config } from '@/config';
import { useState } from 'react';
import portraitImg from '@/assets/portrait.jpg';

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
                        MAKING ROBOTS MOVE WITH LESS WORK
                    </Typography>
                    <Typography sx={{ fontSize: '1.2em', my: 2 }}>
                        I'm <b>Spencer Teetaert</b>, a student and robotics researcher
                    </Typography>
                    <Button
                        size='large'
                        sx={{ width: { xs: 1, sm: 'auto' } }}
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
                        src={portraitImg}
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
                <Button href={config.githubUrl} target="_blank" startIcon={<GitHub />}>
                    GitHub
                </Button>
                <Button href={config.linkedInUrl} target="_blank" startIcon={<LinkedIn sx={{ color: '#4675AA' }} />}>
                    LinkedIn
                </Button>
                <Button href={'mailto:' + encodeURIComponent(config.emailAddress)} target="_blank" startIcon={<EmailRounded />}>
                    Email
                </Button>
            </Stack>
            <Divider sx={{ mb: 6, mt: 1 }} />
            <Box>
                <Typography sx={{ fontSize: '1.5em', fontWeight: 100 }}>
                    I work at the intersection of machine learning and control for robotic systems. My work has focused on developing tools that enable easy transfer from simulation to real world hardware for flying and continuum robots.
                </Typography>
                <Box textAlign='center' my={4}>
                    <Button variant='outlined' startIcon={<Person />} endIcon={<ExpandMore />} onClick={() => setShowAbout(true)} size="large">
                        My story
                    </Button>
                </Box>
            </Box>
            <Dialog fullWidth maxWidth='sm' open={showAbout} onClose={() => setShowAbout(false)}>
                <img
                    src={portraitImg}
                    alt="portrait"
                    style={{ width: '100%' }}
                />
                <IconButton
                    onClick={() => setShowAbout(false)}
                    sx={{
                        position: 'absolute',
                        top: 0,
                        right: 0,
                        m: 1,
                        color: 'white',
                    }}
                >
                    <Close />
                </IconButton>
                <CardContent>
                    <Stack spacing={2}>
                        <Typography sx={{ fontWeight: 600 }}>
                            My story
                        </Typography>
                        <Typography>
                        I grew up in the small town of Steinbach, MB in a family of eight. From a young age, I got involved in every sport under the sun; soccer, basketball, track and field, cross country, volleyball, badminton, and handtis to name a few. I went on to continue playing volleyball competitively for 7 years, winning several provincial and national awards. While my competitive play stopped after high school graduation, I continue to play beach volleyball during the summers and intramural volleyball during the year to this day, and love every second of it.
                        </Typography>
                        <Typography>
                        I have picked up several instruments throughout the years including piano, clarinet, baritone saxophone, and vocals. I sang in provincial honour choirs, regional choirs, vocal jazz groups, and chamber choirs throughout my time in high school. Earlier I played saxophone in both concert and jazz bands.
                        </Typography>
                        <Typography>
                        I discovered the Engineering Science (EngSci) program at the University of Toronto while in pursuit of continuing my education. After making it into EngSci, I needed to define a new path outside of my small town. I joined design teams immediately and eventually end up as the head of the Robotics Association (UTRA) where I oversee four robotic design teams and two robotic outreach/learning initiatives with over 150 active members. We compete internationally in robotics competitions across the world.
                        </Typography>
                        <Typography>
                        After my third year, I took my Professional Experience Year (PEY) at Huawei Canada. I learned a lot as a machine learning researcher in their Human Machine Interactions (HMI) lab. While my specific work is covered under an NDA, I spent most of my time between literature reviews for new computer vision methods and designing experiments to try my own methods applied to HMI tasks.
                        </Typography>
                        <Typography>
                        I got my first taste of research in academia with Professor Angela Schoellig (Ph.D.) at the Dynamic Systems Lab at UTIAS. Working closely with Jacopo Panerati (Ph.D.) I developed sim2real for easy simulation to real translation of controllers designed for crazyflie drones. This work has continued into what will be my first academic authorship (coming soon). In September of 2022, I began work on my undergraduate thesis under Professor Burgner-Kahrs (Ph.D.) at the Continuum Robotics Lab.
                        </Typography>
                        <Typography>
                        With a fast-approaching graduation date (April 2023) I am now looking at starting the next chapter of my life and am excited about the prospects of what comes next!
                        </Typography>
                    </Stack>
                </CardContent>
            </Dialog>
        </div >
    )
}