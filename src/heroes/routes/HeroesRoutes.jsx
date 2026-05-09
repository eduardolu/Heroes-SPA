import React from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import { Navbar } from '../../UI'
import { DcPage, HeroePage, MarvelPage, SearchPage } from '../pages'
import { useUser } from '../../context/UserContext'

export const HeroesRoutes = () => {
  const { user } = useUser()

  if (!user) {
    return <Navigate to="/login" replace />
  }

  return (
    <>
        <Navbar />
        <div className='container'>
          <Routes>
              <Route path="marvel" element={ <MarvelPage /> }/>
              <Route path="dc" element={ <DcPage /> }/>
              <Route path="search" element={ <SearchPage /> }/>
              <Route path="heroe/:id" element={ <HeroePage /> }/>
              <Route path="/" element = { <Navigate to="/marvel" /> } />
          </Routes>
        </div>
    </>
  )
}
