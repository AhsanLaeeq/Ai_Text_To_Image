import React from 'react'
import {Outlet} from 'react-router-dom';
import Footer from '../Footer/Footer';

const Layout = () => {
  return (
   <>
     <main style={{ minHeight: 'calc(100vh - 300px)' }}> {/* adjust footer height here */}
        <Outlet />
      </main>
      <Footer />
   </>
  )
}

export default Layout