import { Meta, StoryObj } from '@storybook/react'
import { Accordion, Background, SectionContent, Text } from '@capfds-ui/react'

export default {
  title: 'Form/Accordion',
  component: Accordion.Root,
  args: {
    type: 'single',
    defaultValue: 'item-1',
    collapsible: true,
    children: (
      <>
        <Accordion.Item value="item-1">
          <Accordion.Trigger>
            <Text css={{ color: 'white' }}>
              <strong>Vou ter aula na primeira semana letiva?</strong>
            </Text>
          </Accordion.Trigger>
          <Accordion.Content>
            <Text css={{ color: 'white' }}>
              Não, a propria universidade promove uma semana de recepção ao
              calouro, de modo a introduzir a faculdade e os professores.
            </Text>
          </Accordion.Content>
        </Accordion.Item>

        <Accordion.Item value="item-2">
          <Accordion.Trigger>
            <Text css={{ color: 'white' }}>
              <strong>
                Quando vou conhecer as outras entidades da faculdade (Centro
                Acadêmico, Atlética, Bateria)?
              </strong>
            </Text>
          </Accordion.Trigger>
          <Accordion.Content>
            <Text css={{ color: 'white' }}>
              Além da Semana de Recepção promovida pela PUC Goiás, o Centro
              Acadêmico Paulo Francescantônio e a Associação Atlética Acadêmica
              Max Weyler Nery realizam também o GiriTour, que tem como função
              apresentar outras atividades do curso de Medicina para os
              calouros.{' '}
            </Text>
          </Accordion.Content>
        </Accordion.Item>

        <Accordion.Item value="item-3">
          <Accordion.Trigger>
            <Text css={{ color: 'white' }}>
              <strong>Tenho que pagar algo pela semana de recepção?</strong>
            </Text>
          </Accordion.Trigger>
          <Accordion.Content>
            <Text css={{ color: 'white' }}>
              Não, a semana de recepção dos calouros é totalmente gratuita .
            </Text>
          </Accordion.Content>
        </Accordion.Item>

        <Accordion.Item value="item-4">
          <Accordion.Trigger>
            <Text css={{ color: 'white' }}>
              <strong>
                Ainda não fiz minha matrícula, posso participar da Semana de
                Recepção?
              </strong>
            </Text>
          </Accordion.Trigger>
          <Accordion.Content>
            <Text css={{ color: 'white' }}>
              Sim, a semana de recepção é para todos os aprovados e que
              pretendem cursar medicina na PUC Goias.{' '}
            </Text>
          </Accordion.Content>
        </Accordion.Item>
      </>
    ),
  },
  decorators: [
    (Story) => (
      <Background.Root dark>
        <Background.CL />
        <Background.Content>
          <SectionContent>
            <Story />
          </SectionContent>
        </Background.Content>
        <Background.CR />
      </Background.Root>
    ),
  ],
} as Meta

export const Primary: StoryObj = {}
