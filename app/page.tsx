"use client"
import React from 'react'
import Hero from './Sections/Hero'
import StaggeredMenu from './Sections/StagerredMenu'
import Values from './Sections/Values'
import Projects from './Sections/Projects'
import Team from './Sections/Team'
import Footer from './Sections/Footer'
export default function Home() {
  return (
    <>
      <StaggeredMenu />
      <Hero />
      <Values />
      <Projects />
      <Team />
      <Footer /> 
    </>
  )
}
