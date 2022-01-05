<block class="project-block">
  <p><span class="project-sub-title">项目描述</span></p>
</block>

<p class="project-desc" style="margin-left: -20px;">
API安全智能平台，扫描、拦截、发现API中的漏洞和风险
</p>

<block class="project-block">
  <p><span class="project-sub-title">核心技术</span></p>
</block>

<p class="project-desc" style="margin-left: -20px;">
React、Umi、Antd、G6、MockJs、Lint、Prettier
</p>

<block class="project-block">
  <p><span class="project-sub-title">项目职责</span></p>
</block>

- 前端技术选型与架构设计，前端项目管理，自动化部署，code review
- 基于Antd封装业务组件，开发资产管理、分类分级、安全风险、多维画像等业务模块
- Fork ali-react-table 仓库，根据业务需求修改源码，并独立发布 react-magic-tables npm 包
- 基于 G6 图可视化引擎，开发资产拓扑图，实现大数据量节点快速绘制
- 基于 G2Plot 图表库，开发数据可视化组件

==split==

<block class="project-block">
  <p><span class="project-sub-title">项目描述</span></p>
</block>

<p class="project-desc" style="margin-left: -20px;">
服务器资产统计和管理
</p>

<block class="project-block">
  <p><span class="project-sub-title">核心技术</span></p>
</block>

<p class="project-desc" style="margin-left: -20px;">
Vue、Vuex、Vue-Router、Axios、Echarts、ElementUI、Less
</p>

<block class="project-block">
  <p><span class="project-sub-title">项目职责</span></p>
</block>

- 前端技术选型和架构设计，搭建 Nginx web服务器，发布与部署上线
- 基于 Vue 搭建项目结构，Vue-Router 开发前端路由，控制角色权限
- 封装 Vuex 模块，管理全局状态，结合 LocalStorage 实现状态持久化
- 基于 ElementUI 封装业务组件，开发安全总览、资产测绘、安全事件、生命周期等业务模块
- 基于 Echarts 绘制网络关系图，及事件风险、线上资产等可视化模块
- 封装 Axios 统一管理项目 API

==split==

<block class="project-block">
  <p><span class="project-sub-title">项目描述</span></p>
</block>

<p class="project-desc" style="margin-left: -20px;">
由 Web（客服端）到 微信小程序（客户端）组成的
实时在线视频沟通、定损、理赔系统。保险客户发起视频通话，并可以实时拍照上传至
OSS 服务器
</p>

<block class="project-block">
  <p><span class="project-sub-title">核心技术</span></p>
</block>

<p class="project-desc" style="margin-left: -20px;">
Agora-RTM-SDK、Agora-RTC-SDK、Vue.js、Vue-Router、Vuex、
Webpack、Axios、Element-UI、Echarts、js-xlsx、file-saver
</p>

<block class="project-block">
  <p><span class="project-sub-title">项目职责</span></p>
</block>

- 搭建实时通讯平台，基于 agora-rtm-sdk、agora-rtc-sdk 开发
- 开发前端页面布局，选用 Element-UI 的通知、表单、弹框、栅格布局等组件
- 搭建项目结构，使用 Vue-cli 定向配置 Webpack、Eslint、按需引入、路由懒加载， 配置多环境以及路由权限控制
- 数据的解析与保存，使用 Js-xlsx 解析 Excel 文件为 json 数据提交至后端保存，使用
Js-zip、File-saver 压缩多个文件流并打包下载
- 数据可视化，使用 Echarts 绘制饼状图、柱状图、折线图、中国地图，实时更新数 据，并适配不同尺寸屏幕的展示
- 设置 http 拦截器，使用 Axios 二次包装在拦截器中设置公共请求头和异常统一处
理，使用 Async/await 进行异步流程控制
- 管理全局状态，使用 Vuex 进行状态管理，使用 vuex-persistedstate 插件实现 Vuex 数
据状态持久化

==split==

<block class="project-block">
  <p><span class="project-sub-title">项目描述</span></p>
</block>

<p class="project-desc" style="margin-left: -20px;">
接收车险相关案件，通过规则人员编写的规则，对案
件进行欺诈、渗漏等分析，得出结论并进行减损，实现车险风控的目的。
</p>

<block class="project-block">
  <p><span class="project-sub-title">核心技术</span></p>
</block>

<p class="project-desc" style="margin-left: -20px;">
Vue、Vue-router、Webpack、Axios、Element-UI、Echarts、ES6+
</p>

<block class="project-block">
  <p><span class="project-sub-title">项目职责</span></p>
</block>

- 参与需求评审并且制定前端开发计划，并与后端确定项目的业务流程和前后端接口
- 使用 vue 初始化项目并配置项目路由，使用 Element-UI、tree-grid 组件快速构建登录
和后台管理页面
- 状态验证功能开发，使用 localStorage 存储后端返回的 token，路由钩子函数验证
token
- 时间进行格式化功能开发，自定义 Vue 的 filter 对时间格式化
- 页面操作功能的实现，包含添加、删除、编辑、分配、分页、级联等功能
