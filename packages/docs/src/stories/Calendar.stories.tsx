import { Box, Calendar } from '@capfds-ui/react'
import { Meta, StoryObj } from '@storybook/react'
import 'react-calendar/dist/Calendar.css'
import '../styles/calendar.css'
import {
  UilAngleDoubleLeft,
  UilAngleDoubleRight,
  UilAngleLeft,
  UilAngleRight,
} from '@iconscout/react-unicons'
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
        prevLabel={<UilAngleLeft color="#006930" />}
        prev2Label={<UilAngleDoubleLeft color="#006930" />}
        nextLabel={<UilAngleRight color="#006930" />}
        next2Label={<UilAngleDoubleRight color="#006930" />}
        onChange={(date: Date) => console.log(new Date(date))}
        calendarType={'ISO 8601'}
        defaultValue={[new Date(2022, 10, 1), new Date(2022, 10, 4)]}
      />
    ),
  },
} as Meta

export const Primary: StoryObj = {}
