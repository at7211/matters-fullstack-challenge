import { Typography } from '@mui/material'
import NextLink, { LinkProps as NextLinkProps } from 'next/link'
import React from 'react'

interface LinkProps extends NextLinkProps {
  children: React.ReactNode
}

const style = {
  wrapper: {
    width: 'fit-content',
  },
}

const Link: React.FC<LinkProps> = ({ href, children }) => {
  return (
    <NextLink href={href} passHref>
      <Typography component="a" href={href as string} sx={style.wrapper}>
        {children}
      </Typography>
    </NextLink>
  )
}

export default Link
