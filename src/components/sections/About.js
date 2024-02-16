import React from 'react'
import './About.scss'
import Typewriter from '../Typewriter'
import { Stack, IconButton } from '@mui/material'
import LinkedInIcon from '@mui/icons-material/LinkedIn'
import FacebookIcon from '@mui/icons-material/Facebook'
import InstagramIcon from '@mui/icons-material/Instagram'

const AboutSection = () => {
  return (
    <div className='about-section'>
      <div>
        <img
          className='img'
          alt='Pedro Chaves'
          src='/images/me.png'
          loading='lazy'
        />
      </div>
      <div className='name'>
        <Typewriter text="Hi, I'm Pedro Chaves" />
      </div>
      <div className='title'>Tech Lead | Senior Web Developer</div>
      <div>
        <Stack direction='row' spacing={5}>
          <IconButton
            href='https://www.linkedin.com/in/pedrochaves86/'
            target='_blank'
          >
            <LinkedInIcon fontSize='large' color='primary' />
          </IconButton>
          <IconButton
            href='https://www.facebook.com/pedr8chaves/'
            target='_blank'
          >
            <FacebookIcon fontSize='large' color='primary' />
          </IconButton>
          <IconButton
            href='https://www.instagram.com/pedr8chaves/'
            target='_blank'
          >
            <InstagramIcon fontSize='large' color='primary' />
          </IconButton>
        </Stack>
      </div>
    </div>
  )
}

export default AboutSection
