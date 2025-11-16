import { createTheme, CssBaseline, ThemeProvider } from "@mui/material"
import { ReactNode } from "react";

type AppThemeProviderProps = {
    children: ReactNode
}

/**
 * #292F36 - black 
 * #4ECDC4 - teal
 * #F7FFF7 - off-white
 * #FF6B6B - coral
 * #FFE66D - yellow
 */

export const AppThemeProvider = ({ children }: AppThemeProviderProps) => {
    const theme = createTheme({
        palette: {
            primary: {
                main: '#292F36',
                contrastText: '#F7FFF7',
            },
            secondary: {
                main: '#003049',
                contrastText: '#F7FFF7',
            },
            background: {
                default: '#F7FFF7', // This sets the webpage background color
                paper: '#F7FFF7'
            },
            
        },
        typography: {
            fontSize: 14,
            h1: {
                fontSize: '2.5em',
            },
            button: {
                textTransform: 'unset',
            }
        },
        shape: {
            borderRadius: 8,
        },
        components: {
            MuiDialog: {
                defaultProps: {
                    scroll: 'body',
                }
            },
            MuiButton: {
                styleOverrides: {
                    textPrimary: {
                        paddingLeft: 16,
                        paddingRight: 16,
                    }
                }
            },
            MuiDivider: {
                styleOverrides: {
                    root: {
                        height: 1,
                        border: 'none',
                        background: 'linear-gradient(90deg, transparent, rgba(0,0,0,0.1), transparent)',
                    }
                }
            }
        }
    });

    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />
            {children}
        </ThemeProvider>
    )
}