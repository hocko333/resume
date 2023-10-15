import { FC, memo } from 'react'
import { Global } from '@emotion/react'
import ProjectSvg from 'tb-icons/lib/svgs/project-fill.svg?react'
import {
  projectGlobalStyle,
  Title,
  TitleContent,
  ProjectWrapper,
  Body,
  ProjectBody,
  ProjectContentWrapper,
  ProjectName,
  Roles,
  ProjectTime,
} from './style'

export interface ProjectProps {
  title: string
  projects: {
    name: string
    time: string
    roles: string[]
    content: string
  }[]
}

export const Project: FC<ProjectProps> = memo((props) => {
  const bodys = props.projects.map((data, i) => {
    const inner = {
      __html: data.content || '',
    }

    return (
      <div key={i}>
        <Global styles={projectGlobalStyle} />
        <ProjectContentWrapper>
          <ProjectName>
            {data.name}
          </ProjectName>
          <Roles>{data.roles.join(' & ')}</Roles>
          <ProjectTime>{data.time}</ProjectTime>
        </ProjectContentWrapper>
        <ProjectBody>
          <div dangerouslySetInnerHTML={inner} />
        </ProjectBody>
      </div>
    )
  })

  return (
    <ProjectWrapper>
      <Title>
        <ProjectSvg style={{ fontSize: 18, fill: 'var(--text-color)' }} />
        <TitleContent>{props.title}</TitleContent>
      </Title>
      <hr />
      <Body>{bodys}</Body>
    </ProjectWrapper>
  )
})
