import React, { memo } from 'react'
import { Header, headerProps } from '../header'
import { Experience, experienceProps } from '../experience'
import { Skill, skillProps } from '../skills'
import { EducationComponent, educationProps } from '../education'
// import { Knowledge, knowledgeProps } from '../knowledge'
import { Project, projectProps } from '../project'
import { Lang } from '@/constants/lang'

interface ResumePageProps {
  lang: Lang
}

const ResumePage: React.FC<ResumePageProps> = memo((props) => {
  return (
    <div style={{ paddingBottom: 40 }}>
      <Header {...headerProps[props.lang]} />
      <Experience {...experienceProps[props.lang]} />
      <Skill {...skillProps[props.lang]} />
      <Project {...projectProps[props.lang]} />
      <EducationComponent {...educationProps[props.lang]} />
    </div>
  )
})

export default ResumePage
