import '../styles/globals.css'
import Router from 'next/router'
import NProgress from 'nprogress'
import {ChakraProvider} from '@chakra-ui/react'
import Layout from '../components/Layout'
import '../styles/nprogress.css'


function MyApp({ Component, pageProps }) {
  NProgress.configure({showSpinner: false})

  Router.events.on('routeChangeStart', () => {
    NProgress.done()
  });

  Router.events.on('routeChangeComplete', () => {
    NProgress.start()
  });

  return (
    <>
      <ChakraProvider>
          <Layout>
            <Component {...pageProps} />
          </Layout>
      </ChakraProvider>
    </>
  )
}

export default MyApp
