import { ProjectProps } from './project.component'
import CNContents from './project_zh.md'

const cnContents = CNContents.split('==split==')

const props: {
  zh: ProjectProps
  en: ProjectProps
} = {
  zh: {
    title: '项目经历',
    projects: [
      {
        name: '萤火 API Intelligence',
        time: '2021.5 ~ now',
        roles: ['Creator', 'Owner'],
        content: cnContents[0],
      },
      {
        name: 'White ENV',
        time: '2021.3 ~ 2021.6',
        roles: ['Creator', 'Owner'],
        content: cnContents[1],
      },
    ],
  },
  get en() {
    return {
      ...this.zh,
      title: 'Projects',
    }
  },
}

export default props
