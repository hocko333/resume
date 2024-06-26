import { HeaderProps } from './index'

const props: {
  zh: HeaderProps
  en: HeaderProps
} = {
  zh: {
    name: '程宽',
    email: 'chengkuan689@163.com',
    site: 'hocko333.github.io/resume',
    phone: '15010962343',
    github: {
      name: 'hocko333',
      url: 'https://github.com/hocko333',
    },
    zhihu: {
      name: 'xxx',
      url: 'https://www.zhihu.com',
    },
    wechat: 'nothingtosay333',
    exp: '工作经验 6 年',
    location: '北京',
  },
  get en() {
    return {
      ...this.zh,
      name: 'Kuan Cheng',
    }
  },
}

export default props
