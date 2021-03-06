import { FC, memo } from 'react'
import { Header, headerProps } from './header'
import { Experience, experienceProps } from './experience'
import { Skill, skillProps } from './skills'
import { EducationComponent, educationProps } from './education'
// import { Knowledge, knowledgeProps } from './knowledge'
import { Project, projectProps } from './project'
import PrintSvg from 'tb-icons/lib/svgs/print.svg'
import { Lang } from '../globalState'

interface AppProps {
  lang: Lang
}

export const App: FC<AppProps> = memo((props) => {
  return (
    <div style={{ paddingBottom: 40 }}>
      <Header {...headerProps[props.lang]} />
      <Experience {...experienceProps[props.lang]} />
      <Skill {...skillProps[props.lang]} />
      <Project {...projectProps[props.lang]} />
      <EducationComponent {...educationProps[props.lang]} />
      <a href="javascript:window.print();" className="print-btn">
        <PrintSvg />
      </a>
    </div>
  )
})
