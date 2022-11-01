import { ComponentProps, ElementType, ReactNode } from 'react'
import { BackgroundContainer, CircleLeft, CircleRight, Content } from './styles'
import { darkTheme } from '../../styles'

export interface ContainerBackgroundProps
  extends ComponentProps<typeof BackgroundContainer> {
  as?: ElementType
  children?: ReactNode
  dark?: boolean
}

export const ContainerBackground = ({
  children,
  dark = false,
  as,
  ...props
}: ContainerBackgroundProps) => {
  return (
    <BackgroundContainer as={as} className={dark ? darkTheme : ''} {...props}>
      {children}
    </BackgroundContainer>
  )
}

export interface ContentProps extends ComponentProps<typeof Content> {
  children?: ReactNode
}

export const ContentBackground = ({ children, ...props }: ContentProps) => {
  return <Content {...props}>{children}</Content>
}

export const CicleLeftBackground = () => {
  return <CircleLeft />
}

export const CicleRightBackground = () => {
  return <CircleRight />
}

export const Background = {
  Root: ContainerBackground,
  Content: ContentBackground,
  CL: CicleLeftBackground,
  CR: CicleRightBackground,
}
