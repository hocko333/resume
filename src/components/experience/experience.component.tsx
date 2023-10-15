import { FC, memo } from 'react'
import { Global } from '@emotion/react'
import TieSvg from 'tb-icons/lib/svgs/tie.svg?react'
import {
  Body,
  CompanyName,
  CompanyWrapper,
  ExperienceWrapper,
  Title,
  ExperienceBody,
  WorkTitle,
  WorkTime,
  TitleContent,
  experienceGlobalStyle,
} from './style'

export interface ExperienceProps {
  title: string
  companies: {
    name: string
    time: string
    title: string
    content: string
    url: string
  }[]
}

export const Experience: FC<ExperienceProps> = memo((props) => {
  const bodys = props.companies.map((data, i) => {
    const inner = {
      __html: data.content || '',
    }
    return (
      <div key={i}>
        <Global styles={experienceGlobalStyle} />
        <CompanyWrapper>
          <a href={data.url} target="_blank">
            <CompanyName>{data.name}</CompanyName>
          </a>
          <WorkTitle>{data.title}</WorkTitle>
          <WorkTime>{data.time}</WorkTime>
        </CompanyWrapper>
        <ExperienceBody>
          <div dangerouslySetInnerHTML={inner} />
        </ExperienceBody>
      </div>
    )
  })
  return (
    <ExperienceWrapper>
      <Title>
        <TieSvg style={{ fontSize: 18, fill: 'var(--text-color)' }} />
        <TitleContent>{props.title}</TitleContent>
      </Title>
      <hr />
      <Body>{bodys}</Body>
    </ExperienceWrapper>
  )
})
