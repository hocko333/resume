import styled from '@emotion/styled'

export const HiddenOnMobileAndPrint = styled.div`
  display: block;
  position: fixed;
  top: 50px;
  right: 30px;
  padding: 0 2px;
  border: 1px solid var(--float-actions-border-color);
  border-radius: 6px;
  transition: all 0.3s ease-in-out;
  background-color: var(--float-actions-bgc);
  overflow: hidden;
  z-index: 99;
  box-shadow: 0 1px 2px -2px rgba(0, 0, 0, 0.16), 0 3px 6px 0 rgba(0, 0, 0, 0.12), 0 5px 12px 4px rgba(0, 0, 0, 0.09);

  &:hover {
    box-shadow: 0 4px 4px -4px rgba(0, 0, 0, 0.2), 0 7px 10px 0 rgba(0, 0, 0, 0.16), 0 7px 16px 6px rgba(0, 0, 0, 0.11);
  }

  @media (max-width: 600px) {
    display: none;
  }
  @media print {
    display: none;
  }

  .ant-btn {
    line-height: 1;
    font-size: 16px;
  }
`
