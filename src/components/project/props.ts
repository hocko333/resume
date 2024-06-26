import { ProjectProps } from './project.component'
import { html as CNContents } from './project_zh.md'

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
        time: '2021.5 ~ 2024.5',
        roles: ['创建者', '负责人'],
        content: cnContents[0],
      },
      {
        name: 'White ENV（白环境）',
        time: '2021.3 ~ 2021.6',
        roles: ['创建者', '负责人'],
        content: cnContents[1],
      },
      {
        name: '在线理赔系统',
        time: '2020.12 ~ 2021.3',
        roles: ['创建者', '负责人'],
        content: cnContents[2],
      },
      {
        name: '智能车险风控系统',
        time: '2020.1 ~ 2021.2',
        roles: ['创建者', '负责人'],
        content: cnContents[3],
      },
      {
        name: '规则平台重构',
        time: '2019.12 ~ 2020.1',
        roles: ['开发者', '负责人'],
        content: cnContents[4],
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
