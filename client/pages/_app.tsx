import type { AppProps } from 'next/app'

import Layout from '@components/Layout'
import { theme } from '@configs/theme'
import { WalletProvider } from '@context/wallet'

import '@styles/globals.css'
import { ThemeProvider } from '@mui/material'
import { SnackbarProvider } from '@components/Snackbar'
import { ApolloProvider } from '@apollo/client'
import client from '../core/graphql'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ApolloProvider client={client}>
      <WalletProvider>
        <ThemeProvider theme={theme}>
          <SnackbarProvider>
            <Layout>
              <Component {...pageProps} />
            </Layout>
          </SnackbarProvider>
        </ThemeProvider>
      </WalletProvider>
    </ApolloProvider>
  )
}

export default MyApp
