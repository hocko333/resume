> API流量安全风险分析平台，对API资产扫描并实时监控，应对漏洞攻击、黑客入侵、数据泄露以及账号滥用风险

<br />

<block class="project-block">
  <p><span class="project-sub-title">项目职责</span></p>
</block>

- 负责萤火 Web 端**技术选型与架构设计**，自动化部署，**Code Review**，使用 `React` 最新技术栈从0到1开发项目
- `TypeScript` 类型覆盖 **95%** 以上, 极大减少了生产环境的 bug 数量与团队协作成本
- `Recoil` 实现更轻量的Hook化共享状态管理
- `TailwindCSS` 以及 `CSS变量` 作为样式解决方案，实现主题切换、响应式布局
- 封装 **50+** 通用业务组件以及`Hooks`，并**发布** `react-magic-tables` 和 `postcss-px-as-viewport` **NPM包**
- 与运维一起推进 CI/CD 标准化，以及 **dev/staging/release/production** 多套环境的自动化部署机制

<br />

**技术难点以及解决方案**
- 二次封装 `React Virtualized` 借助虚拟渲染的设计，提升大数据量渲染的性能问题
- 解决复杂权限管理问题
- 使用 `Framer Motion` 添加高质量的交互效果
- 扩展 `ant-design` 的 `Table` 组件，实现表头的复杂筛选

<br />

==split==

> 服务器资产统计管理，安全风控

<br />

<block class="project-block">
  <p><span class="project-sub-title">项目职责</span></p>
</block>

- 前端技术选型和架构设计，搭建 **Nginx Web服务器**，配置反向代理，发布与部署上线
- 基于 `Vue` 搭建项目结构，`Vue-Router` 开发前端路由，控制角色权限
- 封装 `Vuex` 模块，管理全局状态，结合 `LocalStorage` 实现状态持久化
- 基于 `ElementUI` 封装业务组件，开发 安全总览、资产测绘、安全事件、生命周期 等业务模块
- 基于 `Echarts` 绘制网络关系图，及事件风险、线上资产等可视化模块
- 封装 `Axios` 统一管理项目 `API`

==split==

> 由 **Web（客服端）** 到 **微信小程序（客户端）** 组成的
实时在线视频沟通、定损、理赔系统。保险客户发起视频通话，并可以实时拍照上传至
OSS 服务器

<br />

<block class="project-block">
  <p><span class="project-sub-title">项目职责</span></p>
</block>

- 基于 `Agora-rtm-sdk`、`Agora-rtc-sdk` 开发，搭建**实时通讯平台**
- 开发前端页面布局，选用 `Element-UI` 的通知、表单、弹框、栅格布局等组件
- 搭建项目结构，使用 `Vue-cli` 定向配置 `Webpack`、`Eslint`、按需引入、路由懒加载，配置多环境以及路由权限控制
- 数据的解析与保存，使用 `Js-xlsx` 解析 `Excel` 文件为 `json` 数据提交至后端保存，使用`Js-zip`、`File-saver` 压缩多个文件流并打包下载
- 数据可视化，使用 `Echarts` 绘制饼状图、柱状图、折线图、中国地图，实时更新数据，并适配不同尺寸屏幕的展示
- 设置 **http 拦截器**，使用 `Axios` 二次包装在拦截器中设置公共请求头和异常统一处理，使用 `Async/Await` 进行异步流程控制
- 管理全局状态，使用 Vuex 进行状态管理，使用 `vuex-persistedstate` 插件实现 Vuex 数据状态持久化

==split==

> 接收车险相关案件，通过规则人员编写的规则，对案件进行欺诈、渗漏等分析，得出结论并进行减损，实现车险风控的目的。

<br />

<block class="project-block">
  <p><span class="project-sub-title">项目职责</span></p>
</block>

- 参与需求评审并且制定前端开发计划，并与后端确定项目的业务流程和前后端接口
- 使用 `vue` 初始化项目并配置项目路由，使用 `Element-UI`、`tree-grid` 组件快速构建登录和后台管理页面
- 状态验证功能开发，使用 `localStorage` 存储后端返回的 `token`，路由钩子函数验证`token`
- 时间进行格式化功能开发，自定义 `Vue` 的 `filter` 对时间格式化
- 页面操作功能的实现，包含添加、删除、编辑、分配、分页、级联等功能

==split==

> 该项目原本使用传统的原生方式开发，因维护成本较高改为前后端分离的方式开发，本人负责前端项目的重构，重构为基于 `Vue-Cli` 和 `Webpack` 的工程化前端项目

<br />

<block class="project-block">
  <p><span class="project-sub-title">项目职责</span></p>
</block>

- 分析原项目的需求和功能，阅读项目代码并且和后端沟通前后端接口，封装 `mixins` 复用逻辑代码，`Vuex`管理全局状态
- 切换项目框架为 `Vue-Cli`，重构各功能组件并统一管理接口，最后重构业务实现方法，实现用户信息认证、用户状态维护等功能
- 优化页面响应速度，使用 `i-View`、`Less` 布局页面和响应式处理，使用 `Axios` 异步向后台发送请求，使用 `Vue-Router` 管理路由
