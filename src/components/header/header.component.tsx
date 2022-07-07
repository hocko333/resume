import { FC, memo } from 'react'
import {
  WechatFilled as Wechat,
  MailOutlined as Mail,
  // GithubOutlined as Github,
  PhoneOutlined as Phone,
  LinkOutlined as Link,
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
  TooltipContent,
} from './style'

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
}

export const Header: FC<HeaderProps> = memo((props) => (
  <HeaderWrapper>
    <Name>{props.name}</Name>
    <hr />
    <HeaderInfoWrapper>
      <HeaderInfo>
        <Mail />
        <HeaderInfoContent href={`mailto:${props.email}`}>
          {props.email}
        </HeaderInfoContent>
      </HeaderInfo>
      <HeaderInfo>
        <Link />
        <HeaderInfoContent href={`https://${props.site}`} target="_blank">
          {props.site}
        </HeaderInfoContent>
      </HeaderInfo>
      <HeaderInfo>
        <Phone />
        <HeaderInfoContent href={`tel:${props.phone}`}>
          {props.phone}
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
        <HeaderInfoContentSpan>
          {props.wechat}
        </HeaderInfoContentSpan>
        <TooltipContent>
          <img src={qrCodeData} alt="程宽微信二维码" style={{ width: '100%', height: '100%', borderRadius: 8 }} />
        </TooltipContent>
      </HeaderInfo>
    </HeaderInfoWrapper>
  </HeaderWrapper>
))
