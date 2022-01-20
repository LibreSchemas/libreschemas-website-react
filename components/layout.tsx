/*  Copyright 2022 Dev Mindset Community Interest Company

    This file is part of LibreSchemas Website using React Next.js.

    LibreSchemas Website using React Next.js is free software: you can redistribute it and/or modify it under the terms of the GNU Affero General Public License as published by the Free Software Foundation, either version 3 of the License, or (at your option) any later version.

    LibreSchemas Website using React Next.js is distributed in the hope that it will be useful, but WITHOUT ANY WARRANTY; without even the implied warranty of MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the GNU Affero General Public License for more details.

    You should have received a copy of the GNU Affero General Public License along with LibreSchemas Website using React Next.js. If not, see <https://www.gnu.org/licenses/>.
*/
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