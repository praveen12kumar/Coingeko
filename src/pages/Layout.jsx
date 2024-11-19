import React from 'react'
import Header from '../components/common/Header'
import { Outlet } from 'react-router-dom'

const MainLayout = () => {
  return (
    <>
    <Header/>  {/* this header is the shared UI, we want it to be rendered on all the pages*/}
    <Outlet/>  {/* the actual page which will be rendered along with the header*/}
    </>
  )
}

export default MainLayout;