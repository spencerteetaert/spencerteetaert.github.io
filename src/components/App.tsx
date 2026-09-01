import { Container, Typography } from "@mui/material"
import { Banner } from "@/components/Banner"
import { Projects } from "@/components/Projects"
import { Publications } from "@/components/Publications"
import { AppThemeProvider } from "@/components/AppThemeProvider"

export const App = () => {
  return (
    <AppThemeProvider>
      <Container maxWidth='md' sx={{ mt: 6 }}>
        <Banner />
      </Container>
      <Projects />
      <Publications />
      <Typography align="center" sx={{ py: 4, fontSize: '0.8em', color: 'text.secondary' }}>
        Last updated: September 1, 2026
      </Typography>
    </AppThemeProvider>
  )
}

if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('/sw.js', { scope: "./" });
}