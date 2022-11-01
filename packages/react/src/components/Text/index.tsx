import { ComponentProps, ElementType, ReactNode } from 'react'
import { TextComponent } from './styles'
import { darkTheme } from '../../styles'

export interface TextProps extends ComponentProps<typeof TextComponent> {
  children: ReactNode
  as?: ElementType
  dark?: boolean
}

export const Text = ({ children, as, dark = false, ...props }: TextProps) => {
  return (
    <TextComponent as={as} className={dark ? darkTheme : ''} {...props}>
      {children}
    </TextComponent>
  )
}
