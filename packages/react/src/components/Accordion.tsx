import React from 'react'
import { styled, keyframes } from '../styles'
import { IoIosArrowDown } from 'react-icons/io'
import * as AccordionPrimitive from '@radix-ui/react-accordion'

const slideDown = keyframes({
  from: { height: 0 },
  to: { height: 'var(--radix-accordion-content-height)' },
})

const slideUp = keyframes({
  from: { height: 'var(--radix-accordion-content-height)' },
  to: { height: 0 },
})

const StyledAccordion = styled(AccordionPrimitive.Root, {
  borderRadius: '$sm',
  width: '100%',
  display: 'flex',
  flexDirection: 'column',
  gap: 10,
})

const StyledItem = styled(AccordionPrimitive.Item, {
  overflow: 'hidden',
  marginTop: 1,

  '&:first-child': {
    marginTop: 0,
    borderTopLeftRadius: 4,
    borderTopRightRadius: 4,
  },

  '&:last-child': {
    borderBottomLeftRadius: 4,
    borderBottomRightRadius: 4,
  },

  '&:focus-within': {
    position: 'relative',
    zIndex: 1,
    boxShadow: '0 2px 10px black',
  },
})

const StyledHeader = styled(AccordionPrimitive.Header, {
  all: 'unset',
  display: 'flex',
})

const StyledTrigger = styled(AccordionPrimitive.Trigger, {
  all: 'unset',
  fontFamily: 'inherit',
  backgroundColor: 'trasparent',
  padding: '0 20px',
  height: 45,
  flex: 1,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  fontSize: 15,
  lineHeight: 1,
  color: '$white',
  '&[data-state="closed"]': { backgroundColor: '$green150' },
  '&[data-state="open"]': { backgroundColor: '$green200' },
  '&:hover': { backgroundColor: '$green200' },
})

const StyledContent = styled(AccordionPrimitive.Content, {
  overflow: 'hidden',
  fontSize: 15,
  backgroundColor: '$green150',

  '&[data-state="open"]': {
    // backgroundColor: '$green200',
    animation: `${slideDown} 300ms cubic-bezier(0.87, 0, 0.13, 1)`,
  },
  '&[data-state="closed"]': {
    animation: `${slideUp} 300ms cubic-bezier(0.87, 0, 0.13, 1)`,
  },
})

const StyledContentText = styled('div', {
  padding: '$3 $10',
})

const StyledChevron = styled(IoIosArrowDown, {
  fontSize: '$xl',
  transition: 'transform 300ms cubic-bezier(0.87, 0, 0.13, 1)',
  '[data-state=open] &': { transform: 'rotate(180deg)' },
})

// Exports
const AccordionRoot = StyledAccordion
StyledAccordion.displayName = 'Accordion.Root'

const AccordionItem = StyledItem
StyledItem.displayName = 'Accordion.Item'

interface AccordionTriggerProps {
  children: React.ReactNode
}

const AccordionTrigger = React.forwardRef(
  (
    { children, ...props }: AccordionTriggerProps,
    forwardedRef: React.Ref<HTMLButtonElement>,
  ) => (
    <StyledHeader>
      <StyledTrigger {...props} ref={forwardedRef}>
        {children}
        <StyledChevron aria-hidden />
      </StyledTrigger>
    </StyledHeader>
  ),
)

AccordionTrigger.displayName = 'Accordion.Trigger'

interface AccordionContentProps {
  children: React.ReactNode
}

const AccordionContent = React.forwardRef(
  (
    { children, ...props }: AccordionContentProps,
    forwardedRef: React.ForwardedRef<HTMLDivElement>,
  ) => {
    return (
      <StyledContent {...props} ref={forwardedRef}>
        <StyledContentText>{children}</StyledContentText>
      </StyledContent>
    )
  },
)
AccordionContent.displayName = 'Accordion.Content'

export const Accordion = {
  Root: AccordionRoot,
  Item: AccordionItem,
  Trigger: AccordionTrigger,
  Content: AccordionContent,
}
