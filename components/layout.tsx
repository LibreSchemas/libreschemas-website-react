/*  Copyright 2022 Dev Mindset Community Interest Company

    This file is part of LibreSchemas.org Website for React.

    LibreSchemas.org Website for React is free software: you can redistribute it and/or modify it under the terms of the GNU Affero General Public License as published by the Free Software Foundation, either version 3 of the License, or (at your option) any later version.

    LibreSchemas.org Website for React is distributed in the hope that it will be useful, but WITHOUT ANY WARRANTY; without even the implied warranty of MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the GNU Affero General Public License for more details.

    You should have received a copy of the GNU Affero General Public License along with LibreSchemas.org Website for React. If not, see <https://www.gnu.org/licenses/>.
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