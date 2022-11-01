import { ComponentProps } from 'react'
import { styled } from '../styles'

export const SectionContent = styled('section', {
  maxWidth: '1200px',
  margin: '0 auto',
  padding: '$3 $4',
})

export interface SectionContentProps
  extends ComponentProps<typeof SectionContent> {}
