import { Meta, StoryObj } from '@storybook/react'
import { CarouselComponent, SectionContent } from '@capfds-ui/react'
import 'react-responsive-carousel/lib/styles/carousel.min.css'
import { Carousel } from 'react-responsive-carousel'
import { CSSProperties } from 'react'
import { MdOutlineArrowBackIosNew } from 'react-icons/md'

const arrowStyles: CSSProperties = {
  position: 'absolute',
  top: 'calc(50% - 15px)',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  width: 30,
  height: 30,
  backgroundColor: '#90B49C',
  boxShadow: '5px 5px 52px rgba(0, 0, 0, 0.14)',
  borderRadius: '50%',
  border: 'none',
  cursor: 'pointer',
  zIndex: 2,
}

const indicatorStyles: CSSProperties = {
  display: 'none',
}

export default {
  title: 'Components/Carousel',
  component: SectionContent,
} as Meta

export const Primary: StoryObj = {
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
          <CarouselComponent.Content>Evento Teste</CarouselComponent.Content>
          <CarouselComponent.Legend></CarouselComponent.Legend>
        </CarouselComponent.Item>
        <CarouselComponent.Item>
          <CarouselComponent.Content>Evento Teste</CarouselComponent.Content>
          <CarouselComponent.Legend></CarouselComponent.Legend>
        </CarouselComponent.Item>
        <CarouselComponent.Item>
          <CarouselComponent.Content>Evento Teste</CarouselComponent.Content>
          <CarouselComponent.Legend></CarouselComponent.Legend>
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
          <CarouselComponent.Content>
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
          <CarouselComponent.Content>
            <img src="./src/assets/images/logoCapf.svg" alt="" />
          </CarouselComponent.Content>
          <CarouselComponent.Legend></CarouselComponent.Legend>
        </CarouselComponent.Item>
      </Carousel>
    ),
  },
}
