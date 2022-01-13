import Head from 'next/head'
import Header from './header'
import Footer from './footer'

import 'bootstrap/dist/css/bootstrap.min.css';

export default function Layout({ children }) {
  return (
    <>
      <Head>
        <title>LibreSchemas</title>
      </Head>
      <Header />
      <main>{children}</main>
      <Footer/>
    </>
  )
}