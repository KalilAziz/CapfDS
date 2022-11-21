import { styled } from '../styles'
import { SectionContent } from './SectionContent'
import {
  AiOutlineFacebook,
  AiOutlineInstagram,
  AiOutlineMail,
} from 'react-icons/ai'
import { HiOutlineMap } from 'react-icons/hi'
import { BsCodeSlash } from 'react-icons/bs'

const Container = styled('footer', {
  backgroundColor: '$green400',

  hr: {
    minWidth: 'calc(100% - 4px)',
    border: '2px solid',
    borderColor: '$green500',
    margin: '0',
  },

  svg: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: '1.8rem',
    minHeight: '1.8rem',
    Height: '1.8rem',
    minWidth: '1.8rem',
    color: '$yellow900',
    fontSize: '$5xl',
  },

  '@bp1': {
    fontSize: '$sm',
  },
})
const Content = styled('div', {
  display: 'grid',
  justifyContent: 'center',
  textAlign: 'center',
  gridTemplateColumns: '2fr 1fr',

  span: {
    display: 'flex',
    alignItems: 'center',
    gap: '0.5rem',
    color: '$white',
  },

  '.adress': {
    display: 'flex',
    flexDirection: 'column',
    span: {
      marginTop: '$4',
      marginBottom: '$4',
    },
  },
  '.social': {
    display: 'flex',
    justifyContent: 'flex-end',

    '@bp1': {
      justifyContent: 'center',
    },
  },

  '@bp1': {
    gridTemplateColumns: '1fr',
  },
})
const Copy = styled('div', {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  span: {
    display: 'flex',
    alignItems: 'center',
    gap: '0.5rem',
    color: '$white',
    textAlign: 'center',
  },
})

export const Footer = () => {
  return (
    <Container>
      <SectionContent>
        <Content>
          <div className="adress">
            <span>
              <HiOutlineMap />
              R. 235, 15 - Setor Leste Universitário, Goiânia - GO, 74605-050
            </span>
            <span>
              <AiOutlineMail />
              capfmedpucgo@gmail.com
            </span>
          </div>
          <div className="social">
            <AiOutlineFacebook />
            <AiOutlineInstagram />
          </div>
        </Content>
      </SectionContent>
      <hr />
      <SectionContent>
        <Copy>
          <span>
            <BsCodeSlash size="1.5rem" />
            Desenvolvido por ELO Júnior Engenharias e Arquitetura
          </span>
        </Copy>
      </SectionContent>
    </Container>
  )
}
