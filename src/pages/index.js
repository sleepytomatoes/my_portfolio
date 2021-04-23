import React, {useState} from 'react'
import Sidebar from '../components/Sidebar'
import Navbar from '../components/Navbar'
import InfoSection from '../components/InfoSection'
import { homeObjOne, homeObjTwo, homeObjThree } from '../components/InfoSection/Data'
import Projects from '../components/Projects'

const Home = () => {
  const [isOpen, setIsOpen] = useState(false)

  const toggle = () => {
    setIsOpen(!isOpen)
  }


    return (
        <>
          <Sidebar isOpen={isOpen} toggle={toggle} />
          <Navbar toggle={toggle} />
          <InfoSection {...homeObjOne}/>
          <Projects />
          <InfoSection {...homeObjTwo}/>
          <InfoSection {...homeObjThree}/>
        </>
    )
}

export default Home

