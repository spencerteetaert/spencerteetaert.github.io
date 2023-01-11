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
                            I grew up in the small town of Steinbach, MB in a family of eight. From a young age I got involved in every sport under the sun; soccer, basketball, track and field, cross country, volleyball, badminton, and handtis to name a few. I would go on to continue playing volleyball competitively for 7 years, winning several provincial and national medals and a provincial age class player of the year award. While my competitive play stopped after highschool graduation, I continue to play beach volleyball during the summers and intramural volleyball during the year to this day and love every second of it.
                        </Typography>
                        <Typography>
                            I have picked up several instruments throughout the years including piano, clarinet, baritone saxophone, and vocals. I sang in provincial honour choirs, regional choirs, vocal jazz groups, and chamber choirs throughout my highschool experience. Earlier I played saxophone in both concert and jazz bands.
                        </Typography>
                        <Typography>
                            Throughout highschool I was constantly looking for additional challenges for myself as I found the course work quite straightforward. After taking just one year of piano lessons getting up to grade 3 RCM, I decided to take my grade 8 RCM piano exam as a challenge. Just six months after making the decision to try I scored a 76 on my grade 8 RCM practical and 100 on my grade 8 RCM theory exam. Not too bad.
                        </Typography>
                        <Typography>
                            While looking for a challenge, I would discover the Engineering Science (EngSci) program at University of Toronto. Various sources touted it being the hardest undergraduate program in Canada. My next steps were clear. After making it in to EngSci, I would need to define a new path outside of my small town. I would join design teams immediately and eventually climb to be the head of the Robotics Association (UTRA). We oversee four robotic design teams and two robotic outreach / learning initiatives with over 150 active members. We compete internationally in robotics competitions across the world.
                        </Typography>
                        <Typography>
                            After my third year I would take a Professional Experience Year (PEY) at Huawei Canada. I learnt a lot as a machine learning researcher in their Human Machine Interactions (HMI) lab. While my specific work is covered under an NDA, I would spend most of my time between literature reviews for new computer vision methods and designing experiments to try my own methods applied to HMI tasks.
                        </Typography>
                        <Typography>
                            I would get my first taste of research in academia with Professor Angela Schoellig (PhD) at the Dynamic Systems Lab at UTIAS. Working closely with Jacopo Panerati (PhD) I would develop sim2real for easy simulation to real translation of controllers designed for crazyflie drones. This work has continued into what will be my first academic authorship (coming soon). In September of 2022 I would begin work on my undergraduate thesis under Professor Burgner-Kahrs (PhD) at the Continuum Robotics Lab.
                        </Typography>
                        <Typography>
                            With a fast approaching graduation date (April 2023) I am now looking at starting the next chapter of my life and am excited for the prospects of either graduate studies or joining a meaningful team in industry. The rest is still unwritten…
                        </Typography>
                    </Stack>
                </CardContent>
            </Dialog>
        </div >
    )
}