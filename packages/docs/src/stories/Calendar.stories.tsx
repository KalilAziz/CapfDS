import { Box, Calendar } from '@capfds-ui/react'
import { Meta, StoryObj } from '@storybook/react'
import 'react-calendar/dist/Calendar.css'
import '../styles/calendar.css'
import {
  MdOutlineKeyboardArrowLeft,
  MdOutlineKeyboardArrowRight,
} from 'react-icons/md'
export default {
  title: 'Components/Calendar',
  component: Box,
  args: {
    css: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      maxWidth: '600px',
      margin: '0 auto',
    },
    children: (
      <Calendar
        className={'react-calendar'}
        prevLabel={<MdOutlineKeyboardArrowLeft color="#006930" />}
        prev2Label={<MdOutlineKeyboardArrowLeft color="#006930" />}
        nextLabel={<MdOutlineKeyboardArrowRight color="#006930" />}
        next2Label={<MdOutlineKeyboardArrowRight color="#006930" />}
        onChange={(date: Date) => console.log(new Date(date))}
        calendarType={'ISO 8601'}
        defaultValue={[new Date(2022, 0, 1), new Date(2022, 0, 4)]}
      />
    ),
  },
  argTypes: {
    css: {
      table: {
        disable: true,
      },
    },
    children: {
      table: {
        disable: true,
      },
    },
  },
} as Meta

export const Primary: StoryObj = {}
