import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'
import { Header } from '../Header/header.component'
import { Container } from '../Container/Container'

export const RootLayout = () => {
  return (
    <div>
        {/* <Container /> */}
        <Outlet />
    </div>
  )
}
