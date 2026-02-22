import { useState, useEffect } from 'react'
import './App.css'
import RoutineDisplay from './components/RoutineDisplay.jsx'
import Nav from './components/Nav.jsx'

function App() {
  const [allPosesData, setAllPosesData] = useState([])
  const [isLoadingFinished, setIsLoadingFinished] = useState(false)

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
  useEffect(() => {
    try {
      const fetchData = async () => {
      fetch(
          `https://yoga-api-js6z.onrender.com/poses`
        )
        .then(async function(response) {
          const data = await response.json()
          setAllPosesData(data)
        })
        .then(function(response) {
          console.log('API Data Loaded....loading page...')
          if (allPosesData !== 'undefined') {
            setIsLoadingFinished(!isLoadingFinished)
          }
          console.log('Error loading API data')
        })
      }
      fetchData();
    } catch (error) {
      console.error(error)
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
          <RoutineDisplay poseData={allPosesData}/>
        </>
      )
      }
    </>
  )
}

export default App
