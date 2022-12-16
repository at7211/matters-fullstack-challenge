import { Box, Container } from '@mui/material'
import type { Theme } from '@mui/material/styles'
import React, { ReactNode } from 'react'

interface ContentBgImgProps {
  url?: string
  gap?: string
  size?: 'cover' | 'contain'
  position?: string
  attachment?: 'fixed'
  children: ReactNode
}

const style = {
  container: [
    (theme: Theme) => ({
      p: '60px 0',
      backgroundRepeat: 'no-repeat',
      [theme.breakpoints.down('md')]: {
        backgroundAttachment: 'initial',
      },
      [theme.breakpoints.down('sm')]: {
        p: '50px 0',
      },
    }),
  ],
  content: [
    (theme: Theme) => ({
      display: 'grid',
      '& .title': {
        fontSize: '40px',
        fontWeight: 600,
        [theme.breakpoints.down('sm')]: {
          fontSize: '30px',
        },
      },
      '& .description': {
        fontSize: '20px',
        [theme.breakpoints.down('sm')]: {
          fontSize: '16px',
        },
      },
    }),
  ],
}

const ContentBgImg: React.FC<ContentBgImgProps> = ({
  url = '',
  gap = '20px',
  size = 'contain',
  position = 'center',
  attachment,
  children,
}) => {
  return (
    <Box
      sx={[
        ...style.container,
        {
          backgroundSize: size,
          backgroundImage: `url(${url})`,
          backgroundPosition: position,
          backgroundAttachment: attachment,
        },
      ]}
    >
      <Container sx={[...style.content, { gap: gap }]}>{children}</Container>
    </Box>
  )
}

export default ContentBgImg
