import { useState, useEffect } from 'react'
import './App.css'
import RoutineDisplay from './components/RoutineDisplay.jsx'
import Nav from './components/Nav.jsx'

function App() {
  const [allPosesData, setAllPosesData] = useState([])
  const [isLoadingFinished, setIsLoadingFinished] = useState(true)

  const links = [
    {
      key: 1,
      name: 'Home',
      href: ''
    },
    {
      key: 2,
      name: 'Quickstart',
      href: ''
    },
    {
      key: 3,
      name: 'Routines',
      href: ''
    }
  ]
  useEffect(() =>{
    try {
      const allPosesData = async () => await fetch(
        `https://yoga-api-js6z.onrender.com/poses`
      ).then(
        setAllPosesData(allPosesData)
      )
      return allPosesData
    } catch (error) {
      console.error(error);
    } finally {
        setIsLoadingFinished(!isLoadingFinished);
    }
  }, []) 
  return (
    <>
      <h1>Daily Yoga</h1>
      <Nav links={links}/>
      {!isLoadingFinished
      ? (
        <>
        ...Loading Content...
        </>
      )
      : (
        <>
          <RoutineDisplay />
        </>
      )
      }
    </>
  )
}

export default App
