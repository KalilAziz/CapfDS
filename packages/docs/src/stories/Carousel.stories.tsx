import { Meta, StoryObj } from '@storybook/react'
import {
  CarouselComponent,
  SectionContent,
  arrowStyles,
  indicatorStyles,
  Text,
} from '@capfds-ui/react'
import 'react-responsive-carousel/lib/styles/carousel.min.css'
import { Carousel } from 'react-responsive-carousel'
import { MdOutlineArrowBackIosNew } from 'react-icons/md'

export default {
  title: 'Components/Carousel',
  component: SectionContent,
  argTypes: {
    children: {
      table: {
        disable: true,
      },
    },
  },
} as Meta

export const Primary: StoryObj = {
  args: {
    children: (
      <Carousel
        infiniteLoop
        showStatus={false}
        showThumbs={false}
        statusFormatter={(current, total) =>
          `Current slide: ${current} / Total: ${total}`
        }
        renderArrowPrev={(onClickHandler, hasPrev, label) =>
          hasPrev && (
            <button
              type="button"
              onClick={onClickHandler}
              title={label}
              style={{ ...arrowStyles, left: 15 }}
            >
              <MdOutlineArrowBackIosNew style={{ fontSize: '50px' }} />
            </button>
          )
        }
        renderArrowNext={(onClickHandler, hasNext, label) =>
          hasNext && (
            <button
              type="button"
              onClick={onClickHandler}
              title={label}
              style={{ ...arrowStyles, right: 15 }}
            >
              <MdOutlineArrowBackIosNew
                style={{ transform: 'rotate(180deg)' }}
              />
            </button>
          )
        }
        renderIndicator={(onClickHandler, isSelected, index, label) => {
          if (isSelected) {
            return (
              <li
                style={{ ...indicatorStyles, background: '#000' }}
                aria-label={`Selected: ${label} ${index + 1}`}
                title={`Selected: ${label} ${index + 1}`}
              />
            )
          }
          return (
            <li
              style={indicatorStyles}
              onClick={onClickHandler}
              onKeyDown={onClickHandler}
              value={index}
              key={index}
              role="button"
              tabIndex={0}
              title={`${label} ${index + 1}`}
              aria-label={`${label} ${index + 1}`}
            />
          )
        }}
      >
        <CarouselComponent.Item>
          <CarouselComponent.Content>
            <Text>Evento: XXXXX</Text>
          </CarouselComponent.Content>
        </CarouselComponent.Item>
        <CarouselComponent.Item>
          <CarouselComponent.Content>
            <Text>Evento: XXXXX</Text>
          </CarouselComponent.Content>
        </CarouselComponent.Item>
        <CarouselComponent.Item>
          <CarouselComponent.Content>
            <Text>Evento: XXXXX</Text>
          </CarouselComponent.Content>
        </CarouselComponent.Item>
      </Carousel>
    ),
  },
}

export const Secondary: StoryObj = {
  args: {
    children: (
      <Carousel
        infiniteLoop
        // centerMode
        showStatus={false}
        showThumbs={false}
        statusFormatter={(current, total) =>
          `Current slide: ${current} / Total: ${total}`
        }
        renderArrowPrev={(onClickHandler, hasPrev, label) =>
          hasPrev && (
            <button
              type="button"
              onClick={onClickHandler}
              title={label}
              style={{ ...arrowStyles, left: 15 }}
            >
              <MdOutlineArrowBackIosNew style={{ fontSize: '50px' }} />
            </button>
          )
        }
        renderArrowNext={(onClickHandler, hasNext, label) =>
          hasNext && (
            <button
              type="button"
              onClick={onClickHandler}
              title={label}
              style={{ ...arrowStyles, right: 15 }}
            >
              <MdOutlineArrowBackIosNew
                style={{ transform: 'rotate(180deg)' }}
              />
            </button>
          )
        }
        renderIndicator={(onClickHandler, isSelected, index, label) => {
          if (isSelected) {
            return (
              <li
                style={{ ...indicatorStyles, background: '#000' }}
                aria-label={`Selected: ${label} ${index + 1}`}
                title={`Selected: ${label} ${index + 1}`}
              />
            )
          }
          return (
            <li
              style={indicatorStyles}
              onClick={onClickHandler}
              onKeyDown={onClickHandler}
              value={index}
              key={index}
              role="button"
              tabIndex={0}
              title={`${label} ${index + 1}`}
              aria-label={`${label} ${index + 1}`}
            />
          )
        }}
      >
        <CarouselComponent.Item>
          <CarouselComponent.Content border="full">
            <img src="./src/assets/images/logoCapf.svg" alt="" />
          </CarouselComponent.Content>
          <CarouselComponent.Legend></CarouselComponent.Legend>
        </CarouselComponent.Item>
        <CarouselComponent.Item>
          <CarouselComponent.Content border="full">
            <img src="./src/assets/images/logoCapf.svg" alt="" />
          </CarouselComponent.Content>
          <CarouselComponent.Legend></CarouselComponent.Legend>
        </CarouselComponent.Item>
        <CarouselComponent.Item>
          <CarouselComponent.Content border="full">
            <img src="./src/assets/images/logoCapf.svg" alt="" />
          </CarouselComponent.Content>
          <CarouselComponent.Legend></CarouselComponent.Legend>
        </CarouselComponent.Item>
      </Carousel>
    ),
  },
}
