import styled from '@emotion/styled'
import { Typography } from 'antd'

export const HeaderWrapper = styled.div({
  marginTop: '50px',
  minWidth: '380px',
})

export const Name = styled.h1({
  margin: '5px 0',
  fontSize: '32px',
})

export const HeaderInfoWrapper = styled.div({
  display: 'flex',
  flexDirection: 'row',
  flexWrap: 'wrap',
  justifyContent: 'space-between',
  width: '94%',
  left: '3%',
  position: 'relative',
})

export const HeaderInfo = styled.div`
  width: 40%;
  display: flex;
  padding: 2.5px 0;
  align-items: center;
`

export const headerInfoContentStyles = {
  display: 'inline-block',
  lineHeight: '20px',
  color: 'var(--text-color)',
  fontSize: '14px',
  marginLeft: '10px',
}

export const HeaderInfoContent = styled.a(headerInfoContentStyles)

export const HeaderInfoContentSpan = styled.span(headerInfoContentStyles)

export const ModifiedParagraph = styled(Typography.Paragraph)`
  &.ant-typography {
    margin-bottom: 0;
  }
  .ant-typography-copy {
    opacity: 0;
    transition: all 0.3s;
  }
  &:hover .ant-typography-copy {
    opacity: 1;
  }
`
