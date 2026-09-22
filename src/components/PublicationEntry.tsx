import { Typography, Box, ListItem, IconButton, Tooltip } from '@mui/material'
import { Link as LinkIcon, Language, PictureAsPdf, ContentCopy } from '@mui/icons-material'
import { useState } from 'react'
import { Publication } from '@/types'

export type PublicationEntryProps = {
    publication: Publication
    counter?: number
}

export const PublicationEntry = ({ publication, counter = -1 }: PublicationEntryProps) => {
    const [copied, setCopied] = useState(false)

    const handleCopy = async () => {
        await navigator.clipboard.writeText(publication.bibtex)
        setCopied(true)
        setTimeout(() => setCopied(false), 1500)
    }

    return (
        <ListItem sx={{
            counterIncrement: counter === -1 ? 'ieee-counter' : 'none',
            counterSet: counter === -1 ? undefined : `ieee-counter ${counter}`,
            textIndent: 0,
            alignItems: 'flex-start',
            '&::before': {
                content: counter === -1 ? '"[" counter(ieee-counter) "]"' : `"[${counter}]"`,
                textAlign: 'left',
                verticalAlign: 'top',
                pr: 2,
            }
        }}>
            <Box sx={{ width: '100%' }}>
                <Typography sx={{ fontWeight: 500 }}>
                    {publication.title}
                </Typography>
                <Typography color='text.secondary'>
                    {publication.authors}
                    {publication.venue ? `, ${publication.venue}` : ''}
                </Typography>
                <Box sx={{ display: 'flex', gap: 0.5, mt: 0.5 }}>
                    {publication.doi ? (
                        <Tooltip title='View DOI'>
                            <IconButton size='small' href={`https://doi.org/${publication.doi}`} target='_blank' rel='noopener noreferrer'>
                                <LinkIcon fontSize='small' />
                            </IconButton>
                        </Tooltip>
                    ) : null}
                    {publication.website ? (
                        <Tooltip title='Visit website'>
                            <IconButton size='small' href={publication.website} target='_blank' rel='noopener noreferrer'>
                                <Language fontSize='small' />
                            </IconButton>
                        </Tooltip>
                    ) : null}
                    {publication.pdf ? (
                        <Tooltip title='Download PDF'>
                            <IconButton size='small' href={`${publication.pdf}`} download target='_blank' rel='noopener noreferrer'>
                                <PictureAsPdf fontSize='small' />
                            </IconButton>
                        </Tooltip>
                    ) : null}
                    {publication.bibtex ? (
                        <Tooltip title={copied ? 'Copied!' : 'Copy BibTeX'}>
                            <IconButton size='small' onClick={handleCopy}>
                                <ContentCopy fontSize='small' />
                            </IconButton>
                        </Tooltip>
                    ) : null}
                </Box>
            </Box>
        </ListItem>
    )
}
