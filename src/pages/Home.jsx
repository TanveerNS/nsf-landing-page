import React from 'react'
import Header from '../components/common/Header'
import StyleSection from '../components/sections/StyleSection'
import StyleTopSection from '../components/sections/StyleTopSection'
import Section2 from '../components/sections/Section2'
import Section3 from '../components/sections/Section3'
import Section4 from '../components/sections/Section4'
import Section5 from '../components/sections/Section5'

const Home = () => {
  return (
    <>
      <Header />
      <div>

      <StyleSection />
      <StyleTopSection />
      </div>
      <Section2 />
      <Section3 />
      <Section4 />
      <Section5 />
      <div>Home</div>
    </>
  )
}

export default Home