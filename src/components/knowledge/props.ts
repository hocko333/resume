import { KnowledgeProps } from './knowledge.component'

import { html as zhContent } from './knowledge_zh.md'

export const props: {
  zh: KnowledgeProps
  en: KnowledgeProps
} = {
  zh: {
    title: '知识与积累',
    content: zhContent,
  },
  en: {
    title: 'knowledge',
    content: '',
  },
}

export default props
