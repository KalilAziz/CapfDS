import { styled } from '../styles'
import { SectionContent } from './SectionContent'
import {
  UilMapMarker,
  UilEnvelope,
  UilBracketsCurly,
  UilFacebook,
  UilInstagramAlt,
} from '@iconscout/react-unicons'

const Container = styled('footer', {
  backgroundColor: '$green400',

  hr: {
    minWidth: 'calc(100% - 4px)',
    border: '2px solid',
    borderColor: '$green500',
    margin: '0',
  },
})
const Content = styled('div', {
  display: 'flex',
  flexWrap: 'wrap',
  padding: '$10',
  span: {
    display: 'flex',
    alignItems: 'center',
    gap: '0.5rem',
    color: '$white',
  },
  svg: {
    color: '$yellow900',
  },

  '.adress': {
    flex: '1',
    minWidth: '350px',

    span: {
      marginTop: '$4',
      marginBottom: '$4',
    },
  },
  '.social': {
    flex: '1',
    minWidth: '350px',
    display: 'flex',
    justifyContent: 'flex-end',

    svg: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    },

    '@bp1': {
      justifyContent: 'center',
    },
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

    svg: {
      color: '$yellow900',
    },
  },
})

export const Footer = () => {
  return (
    <Container>
      <SectionContent>
        <Content>
          <div className="adress">
            <span>
              <UilMapMarker size="1.5rem" />
              R. 235, 15 - Setor Leste Universitário, Goiânia - GO, 74605-050
            </span>
            <span>
              <UilEnvelope size="1.5rem" />
              capfmedpucgo@gmail.com
            </span>
          </div>
          <div className="social">
            <UilFacebook size="3rem" />
            <UilInstagramAlt size="3rem" />
          </div>
        </Content>
      </SectionContent>
      <hr />
      <SectionContent>
        <Copy>
          <span>
            <UilBracketsCurly size="1.5rem" />
            Desenvolvido por ELO Júnior Engenharias e Arquitetura
          </span>
        </Copy>
      </SectionContent>
    </Container>
  )
}
