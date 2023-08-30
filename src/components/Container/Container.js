import React from 'react'
import { Header } from '../Header/header.component'
import Sidebar from '../Sidebar/sidebar.component'
import './Container.css';
export const Container = () => {
  return (
    <div className='container'>
        <Header />
        <Sidebar />
    </div>
  )
}
