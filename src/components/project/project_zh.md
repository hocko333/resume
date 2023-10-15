<block class="project-block">
  <p><span class="project-sub-title">项目描述</span></p>
</block>

从0开始编写萤火前端，它是基于 `React, TypeScript, Umi`的`SPA`项目，`TypeScript` 类型覆盖 **95%** 以上, 极大减少了生产环境的 bug 数量与团队协作成本。
该项目通过API统一管控、API风险发现、API实时监控技术，对每个用户、资产、业务的行为模式进行自动分析建模，应对漏洞攻击、黑客入侵、数据泄露以及账号滥用风险。

<block class="project-block">
  <p><span class="project-sub-title">前端技术栈</span></p>
</block>

`React / Recoil / Umi / TailwindCSS / immer / TypeScript / Antd / MockJs / ahooks`

<block class="project-block">
  <p><span class="project-sub-title">项目职责</span></p>
</block>

- 负责前端 **技术选型与架构设计**，前端项目管理，自动化部署，**Code Review**
- 使用 `Recoil` 替换 `Umi` 自带的 `Dva`，实现更轻量便捷的Hook化共享状态管理
- 基于 `ScatterChart`、`Heatmap` 开发 **API/IP画像** 模块，通过数组的 `map`、`reduce` 方法，对象的 `entries`、`values` 方法，实现对数据的动态补偿
- 基于 `useSessionStorage`、`QueryFilter`、`ProTable` 开发 **事件风险** 模块，通过风险类型、威胁等级等多维度进行检索，并实现页面关键状态的持久化
- 封装基础组件，并**独立发布** `react-magic-tables` NPM包
- 基于 `G6`、`G2Plot`，开发资产拓扑图等数据可视化组件，实现大数据量节点快速绘制
- 与运维一起推进 CI/CD 标准化，以及 **alpha/dev/staging/hotfix/production** 多套环境的自动化部署机制

==split==

<block class="project-block">
  <p><span class="project-sub-title">项目描述</span></p>
</block>

服务器资产统计和管理

<block class="project-block">
  <p><span class="project-sub-title">前端技术栈</span></p>
</block>

`Vue / Vuex / Vue-Router / Axios / Echarts / ElementUI / Less`

<block class="project-block">
  <p><span class="project-sub-title">项目职责</span></p>
</block>

- 前端技术选型和架构设计，搭建 `Nginx web`服务器，发布与部署上线
- 基于 `Vue` 搭建项目结构，`Vue-Router` 开发前端路由，控制角色权限
- 封装 `Vuex` 模块，管理全局状态，结合 `LocalStorage` 实现状态持久化
- 基于 `ElementUI` 封装业务组件，开发 安全总览、资产测绘、安全事件、生命周期 等业务模块
- 基于 `Echarts` 绘制网络关系图，及事件风险、线上资产等可视化模块
- 封装 `Axios` 统一管理项目 `API`

==split==

<block class="project-block">
  <p><span class="project-sub-title">项目描述</span></p>
</block>

由 **Web（客服端）** 到 **微信小程序（客户端）** 组成的
实时在线视频沟通、定损、理赔系统。保险客户发起视频通话，并可以实时拍照上传至
OSS 服务器

<block class="project-block">
  <p><span class="project-sub-title">前端技术栈</span></p>
</block>

`Vue.js / Agora-RTM / Agora-RTC / Vue-Router / Vuex / Webpack / Axios / Element-UI / Echarts / Js-xlsx / File-saver`

<block class="project-block">
  <p><span class="project-sub-title">项目职责</span></p>
</block>

- 基于 `Agora-rtm-sdk`、`Agora-rtc-sdk` 开发，搭建**实时通讯平台**
- 开发前端页面布局，选用 `Element-UI` 的通知、表单、弹框、栅格布局等组件
- 搭建项目结构，使用 `Vue-cli` 定向配置 `Webpack`、`Eslint`、按需引入、路由懒加载，配置多环境以及路由权限控制
- 数据的解析与保存，使用 `Js-xlsx` 解析 `Excel` 文件为 `json` 数据提交至后端保存，使用`Js-zip`、`File-saver` 压缩多个文件流并打包下载
- 数据可视化，使用 `Echarts` 绘制饼状图、柱状图、折线图、中国地图，实时更新数 据，并适配不同尺寸屏幕的展示
- 设置 **http 拦截器**，使用 `Axios` 二次包装在拦截器中设置公共请求头和异常统一处理，使用 `Async/Await` 进行异步流程控制
- 管理全局状态，使用 Vuex 进行状态管理，使用 `vuex-persistedstate` 插件实现 Vuex 数据状态持久化

==split==

<block class="project-block">
  <p><span class="project-sub-title">项目描述</span></p>
</block>

接收车险相关案件，通过规则人员编写的规则，对案
件进行欺诈、渗漏等分析，得出结论并进行减损，实现车险风控的目的。

<block class="project-block">
  <p><span class="project-sub-title">前端技术栈</span></p>
</block>

`Vue / Vue-router / Webpack / Axios / Element-UI / Echarts / ES6+`

<block class="project-block">
  <p><span class="project-sub-title">项目职责</span></p>
</block>

- 参与需求评审并且制定前端开发计划，并与后端确定项目的业务流程和前后端接口
- 使用 `vue` 初始化项目并配置项目路由，使用 `Element-UI`、`tree-grid` 组件快速构建登录和后台管理页面
- 状态验证功能开发，使用 `localStorage` 存储后端返回的 `token`，路由钩子函数验证`token`
- 时间进行格式化功能开发，自定义 `Vue` 的 `filter` 对时间格式化
- 页面操作功能的实现，包含添加、删除、编辑、分配、分页、级联等功能

==split==

<block class="project-block">
  <p><span class="project-sub-title">项目描述</span></p>
</block>

该项目原本使用传统的后端渲染方式开发，因维护成本较高改为
前端分离的方式开发，本人负责前端项目的重构，重构为基于 Vue-Cli 和 Webpack 的
工程化前端项目

<block class="project-block">
  <p><span class="project-sub-title">前端技术栈</span></p>
</block>

`Vue.js / i-View / Axios / Vue-Router / Vue-CLi`

<block class="project-block">
  <p><span class="project-sub-title">项目职责</span></p>
</block>

- 分析原项目的需求和功能，阅读项目代码并且和后端沟通前后端接口
- 切换项目框架为 `Vue-Cli`，重构各功能组件并统一管理接口，最后重构实现方法， 实现用户信息认证、用户状态维护等功能
- 优化页面响应速度，使用 `i-View`、`Less` 布局页面和响应式处理，使用 `Axios` 异步向后台发送请求，使用 `Vue-Router` 管理路由
