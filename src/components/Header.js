import React, { useState } from 'react'
import { useLocation } from 'react-router-dom'
import './Header.scss'
import { Chip, Stack } from '@mui/material'
import LanguageIcon from '@mui/icons-material/Language'

const Header = () => {
  const { hash } = useLocation()

  const [language, setLanguage] = useState([
    { label: 'Portuguese', idiom: 'pt', selected: true },
    { label: 'English', idiom: 'en', selected: false },
  ])

  const isActive = (url) => (hash === url ? 'active' : undefined)

  const handleClick = (clickedChip) => {
    setLanguage(
      language.map((lang) => ({
        ...lang,
        selected: lang.idiom === clickedChip.idiom,
      }))
    )
  }

  return (
    <div className='header'>
      <div className='header-menu-items'>
        <div className='header-title'>
          <a href='#about' className={isActive('#about')}>
            About Me
          </a>
        </div>
        <div className='header-title'>
          <a href='#education' className={isActive('#education')}>
            Education
          </a>
        </div>
        <div className='header-title'>
          <a href='#experience' className={isActive('#experience')}>
            Experience
          </a>
        </div>
        <div className='header-title'>
          <a href='#contacts' className={isActive('#contacts')}>
            Contacts
          </a>
        </div>
        <div className='header-title'>
          <Stack direction='row' spacing={1}>
            {language.map((item, index) => (
              <Chip
                key={index}
                size='small'
                label={item.label}
                icon={item.selected ? <LanguageIcon /> : undefined}
                variant={item.selected ? 'filled' : undefined}
                color={item.selected ? 'primary' : 'secondary'}
                onClick={() => handleClick(item)}
              />
            ))}
          </Stack>
        </div>
      </div>
    </div>
  )
}

export default Header
