import { FC } from 'react'

import Container from '@mui/material/Container'
import Header from './Header'
import Loading from './Loading'

const styles = {
  root: {
    minHeight: 'calc(100vh - 64px)',
    padding: '2rem',
  },
} as const

const Layout: FC = ({ children }) => {
  return (
    <>
      <Loading />
      <Header />
      <Container sx={styles.root}>{children}</Container>
    </>
  )
}

export default Layout
