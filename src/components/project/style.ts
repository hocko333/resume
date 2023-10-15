import styled from '@emotion/styled'
import { css } from '@emotion/react'

export const ProjectName = styled.div({
  fontSize: '20px',
  fontWeight: 'bold',
  paddingRight: '5px',
  marginBottom: '10px',
})

export const ProjectContentWrapper = styled.div({
  padding: '5px 0',
})

export const ProjectWrapper = styled.section({
  marginTop: '20px',
  minWidth: '380px',
})

export const Title = styled.div({
  display: 'flex',
  span: {
    marginLeft: '10px',
  },
})

export const TitleContent = styled.span({
  fontSize: '18px',
  marginLeft: '10px',
})

export const Body = styled.div({
  marginTop: '10px',
})

export const ProjectBody = styled.div({
  padding: '5px 20px',
})

export const Roles = styled.span({
  // marginLeft: '15px',
  fontSize: '14px',
  fontStyle: 'italic',
})

export const ProjectTime = styled.span({
  float: 'right',
  fontSize: '14px',
  marginRight: '10px',
})

export const projectGlobalStyle = css({
  '.project-block': {
    marginTop: '10px',

    p: {
      display: 'flex',
      padding: '5px 0',
    },
  },

  '.project-sub-title': {
    fontWeight: 700,
  },
})
