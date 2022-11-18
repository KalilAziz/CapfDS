import { ComponentProps, ReactNode } from 'react'
import { HeadingComponent } from './styles'

interface HeadingComponentProps
  extends ComponentProps<typeof HeadingComponent> {}

export interface HeadingProps {
  size?: HeadingComponentProps['size']
  children: ReactNode
}

export const Heading = ({ children, ...props }: HeadingProps) => {
  return <HeadingComponent {...props}>{children}</HeadingComponent>
}
