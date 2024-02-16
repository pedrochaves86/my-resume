import React, { useState, useEffect } from 'react'
import './Typewriter.scss'

const Typewriter = ({ text }) => {
  const [displayText, setDisplayText] = useState('')
  const [showClass, setShowClass] = useState(false)
  const speed = 150 // Adjust the typing speed as needed

  useEffect(() => {
    let i = 0
    let tempText = ''
    const intervalId = setInterval(() => {
      if (i < text.length) {
        tempText += text.charAt(i)
        setDisplayText(tempText)
        i++
      } else {
        clearInterval(intervalId)
      }
    }, speed)

    return () => clearInterval(intervalId)
  }, [text])

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowClass(true)
    }, 3500)

    return () => clearTimeout(timer)
  }, [])

  return (
    <div className='typewriter-container'>
      {displayText}
      <span className={showClass ? 'cursor' : ''}>|</span>
    </div>
  )
}

export default Typewriter
