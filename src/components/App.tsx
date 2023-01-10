import { Container } from "@mui/material"
import { Banner } from "@/components/Banner"
import { Projects } from "@/components/Projects"
import { AppThemeProvider } from "@/components/AppThemeProvider"

export const App = () => {
  return (
    <AppThemeProvider>
      <Container maxWidth='md' sx={{ mt: 6 }}>
        <Banner />
      </Container>
      <Projects />
    </AppThemeProvider>
  )
}

if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('/sw.js', { scope: "./" });
}