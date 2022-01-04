import { ExperienceProps } from './experience.component'
import CNContents from './experience_zh.md'

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
        time: '2021.3 ~ now',
        title: '前端开发负责人',
        content: cnContents[0],
        url: 'http://www.starcross.cn',
      },
      {
        name: '德联易控',
        time: '2019.5 ~ 2021.3',
        title: '前端开发组长',
        content: cnContents[1],
        url: 'http://www.delianyikong.com',
      },
      {
        name: '瑞友科技',
        time: '2018.4 ~ 2019.5',
        title: '前端工程师',
        content: cnContents[2],
        url: 'http://www.rayootech.com',
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
