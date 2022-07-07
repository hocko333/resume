import styled from '@emotion/styled'

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

export const TooltipContent = styled.div({
  position: 'absolute',
  top: '50px',
  width: 0,
  height: 0,
  opacity: 0,
  transition: 'all 0.2s ease-out',
  overflow: 'hidden',
})

export const HeaderInfo = styled.div`
  width: 40%;
  display: flex;
  padding: 2.5px 0;
  alignItems: center;
  &:hover ${TooltipContent} {
    opacity: 1;
    width: 220px;
    height: 220px;
  }
`

export const headerInfoContentStyles = {
  lineHeight: '20px',
  color: 'black',
  fontSize: '14px',
  marginLeft: '10px',
}

export const HeaderInfoContent = styled.a(headerInfoContentStyles)

export const HeaderInfoContentSpan = styled.span(headerInfoContentStyles)
