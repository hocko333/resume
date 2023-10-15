import { EducationProps } from './education.component'

import { html as contentZh } from './education_zh.md'

const props: {
  zh: EducationProps
  en: EducationProps
} = {
  zh: {
    title: '教育经历',
    content: contentZh,
  },
  get en() {
    return {
      ...this.zh,
      title: 'Education',
    }
  },
}

export default props
