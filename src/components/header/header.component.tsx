import { FC, memo } from 'react'
import {
  WechatFilled as Wechat,
  MailOutlined as Mail,
  // GithubOutlined as Github,
  PhoneOutlined as Phone,
  LinkOutlined as Link,
  LaptopOutlined as Laptop,
  // ZhihuOutlined as Zhihu,
} from '@ant-design/icons'
import { qrCodeData } from './constant'
import {
  HeaderWrapper,
  Name,
  HeaderInfoWrapper,
  HeaderInfo,
  HeaderInfoContent,
  HeaderInfoContentSpan,
  ModifiedParagraph,
} from './style'
import { Popover } from 'antd'
import LocationSvg from 'tb-icons/lib/svgs/location.svg?react'

export interface HeaderProps {
  name: string
  email: string
  site: string
  phone: string
  github: {
    name: string
    url: string
  }
  zhihu: {
    name: string
    url: string
  }
  wechat: string
  exp: string
  location: string
}

export const Header: FC<HeaderProps> = memo((props) => (
  <HeaderWrapper>
    <Name>{props.name}</Name>
    <hr />
    <HeaderInfoWrapper>
      <HeaderInfo>
        <Mail />
        <HeaderInfoContent href={`mailto:${props.email}`}>
          <ModifiedParagraph copyable>{props.email}</ModifiedParagraph>
        </HeaderInfoContent>
      </HeaderInfo>
      {/* <HeaderInfo>
        <Link />
        <HeaderInfoContent href={`https://${props.site}`} target="_blank">
          <ModifiedParagraph copyable={{ text: `https://${props.site}` }}>{props.site}</ModifiedParagraph>
        </HeaderInfoContent>
      </HeaderInfo> */}
      <HeaderInfo>
        <Laptop />
        <HeaderInfoContentSpan>
          <ModifiedParagraph>{props.exp}</ModifiedParagraph>
        </HeaderInfoContentSpan>
      </HeaderInfo>
      <HeaderInfo>
        <Phone />
        <HeaderInfoContent href={`tel:+86-${props.phone}`}>
          <ModifiedParagraph copyable>{props.phone}</ModifiedParagraph>
        </HeaderInfoContent>
      </HeaderInfo>
      {/* <HeaderInfo>
        <Github />
        <HeaderInfoContent href={props.github.url} target="_blank">
          {props.github.name}
        </HeaderInfoContent>
      </HeaderInfo> */}
      {/* <HeaderInfo>
        <Zhihu />
        <HeaderInfoContent href={props.zhihu.url} target="_blank">
          {props.zhihu.name}
        </HeaderInfoContent>
      </HeaderInfo> */}
      <HeaderInfo>
        <Wechat />
        <Popover
          placement="bottom"
          content={
            <img
              src={qrCodeData}
              alt="程宽微信二维码"
              style={{ width: 250, borderRadius: 4 }}
            />
          }
        >
          <HeaderInfoContentSpan>
            <ModifiedParagraph copyable>{props.wechat}</ModifiedParagraph>
          </HeaderInfoContentSpan>
        </Popover>
      </HeaderInfo>
      <HeaderInfo>
        <Link />
        <HeaderInfoContent href={`https://${props.site}`} target="_blank">
          <ModifiedParagraph copyable={{ text: `https://${props.site}` }}>{props.site}</ModifiedParagraph>
        </HeaderInfoContent>
      </HeaderInfo>
      <HeaderInfo>
        <LocationSvg style={{ fontSize: 18, fill: 'var(--text-color)' }} />
        <HeaderInfoContentSpan>
          <ModifiedParagraph>{props.location}</ModifiedParagraph>
        </HeaderInfoContentSpan>
      </HeaderInfo>
    </HeaderInfoWrapper>
  </HeaderWrapper>
))
