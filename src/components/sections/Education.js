import React from 'react'
import './Education.scss'
import SchoolIcon from '@mui/icons-material/School'
import CallIcon from '@mui/icons-material/Call'
import LanIcon from '@mui/icons-material/Lan'
import Typography from '@mui/material/Typography'
import {
  Timeline,
  TimelineItem,
  TimelineSeparator,
  TimelineConnector,
  TimelineContent,
  TimelineDot,
  TimelineOppositeContent,
} from '@mui/lab'

const EducationSection = () => {
  return (
    <>
      <div className='education-section'>
        <Timeline>
          <TimelineItem className='timeline-item'>
            <TimelineOppositeContent
              sx={{ m: 'auto 0' }}
              align='right'
              variant='subtitle2'
            >
              2014
            </TimelineOppositeContent>
            <TimelineSeparator>
              <TimelineConnector />
              <TimelineDot color='primary'>
                <CallIcon />
              </TimelineDot>
              <TimelineConnector className='timeline-connector' />
            </TimelineSeparator>
            <TimelineContent>
              <Typography variant='h6'>Operador Call-Center</Typography>
              <Typography>NOS Açores</Typography>
            </TimelineContent>
          </TimelineItem>
          <TimelineItem>
            <TimelineOppositeContent
              sx={{ m: 'auto 0' }}
              align='right'
              variant='subtitle2'
            >
              2008 - 2009
            </TimelineOppositeContent>
            <TimelineSeparator>
              <TimelineConnector />
              <TimelineDot color='primary'>
                <LanIcon />
              </TimelineDot>
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent>
              <Typography variant='h6'>CISCO CCNA</Typography>
              <Typography>Universidade dos Açores</Typography>
            </TimelineContent>
          </TimelineItem>
          <TimelineItem>
            <TimelineOppositeContent
              sx={{ m: 'auto 0' }}
              align='right'
              variant='subtitle2'
            >
              2006 - 2009
            </TimelineOppositeContent>
            <TimelineSeparator>
              <TimelineConnector />
              <TimelineDot color='primary'>
                <SchoolIcon />
              </TimelineDot>
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent>
              <Typography variant='h6'>
                Informática - Redes e Multimédia
              </Typography>
              <Typography>Universidade dos Açores</Typography>
            </TimelineContent>
          </TimelineItem>
        </Timeline>
      </div>
    </>
  )
}

export default EducationSection
