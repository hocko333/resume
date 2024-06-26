import { ExperienceProps } from './experience.component'
import { html as CNContents } from './experience_zh.md'

const cnContents = CNContents.split('==split==')

const props: {
  zh: ExperienceProps
  en: ExperienceProps
} = {
  zh: {
    title: '工作经历',
    companies: [
      {
        name: '星阑科技',
        time: '2021.3 ~ 2024.5',
        title: '前端开发组长',
        content: cnContents[0],
        url: 'http://www.starcross.cn',
      },
      {
        name: '德联易控',
        time: '2019.12 ~ 2021.3',
        title: '前端开发工程师',
        content: cnContents[1],
        url: 'http://www.delianyikong.com',
      },
      {
        name: '敏捷艾科',
        time: '2018.6 ~ 2019.12',
        title: '前端开发工程师',
        content: cnContents[2],
        url: 'https://www.agileex.com',
      },
    ],
  },
  get en() {
    return {
      ...this.zh,
      title: 'Experience',
    }
  },
}

export default props
