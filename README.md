# 猫眼电影信息管理系统前后端项目

采取的开发结构（数据渲染采用BSR）是前后端分离开发（部署的时候也是前后端分离）

### 前端架构

主体结构：RMVC ； SPA + MPA （index + admin）

View: 视图编译采用template-web.js（artTemplate）

Router: SME-Router

环境搭建：

采用Webpack 4.0开发

UI框架：AdminLTE

JS编译处理：

webpack 4 + babel 7

[babel项目](https://github.com/babel/babel-loader)
cnpm i babel-loader @babel/core @babel/runtime @babel/plugin-transform-runtime @babel/preset-env -D

{
    test: /\.m?js$/,
    exclude: /(node_modules|bower_components)/,
    use: {
      loader: 'babel-loader',
      options: {
        presets: ['@babel/preset-env'],
        plugins: ['@babel/plugin-transform-runtime']
      }
    }
}

SCSS编译处理

利用sass-loader来编译scss代码为css代码（node-sass）
利用css-loader找到引入在js中css代码
利用style-loader将其拿走放入到style标签中（head）


### 后端架构

因为采用的开发与部署结构都是前后端分离，所以，Node.js服务器只负责提供一些API的请求

采用RMVC结构：

Router 根据前端的不同的请求，分发给控制器

Model 提供数据或者与数据相关方法 （连接数据库，操作数据库）

Controller 根据不同请求做出不同的处理之后响应

View 表现数据到响应时的展示


---

前端开发的时候，与服务器进行数据交互之后往往需要对此次请求与请求的结果做出成功或者失败的处理，所以前端一般会将请求抽离出来单独配置, 所以后端给前端响应的数据格式统一化之后能更方便前端的配置和使用, 所以我们可以尽可能的遵循某一种规范进行接口的设计：

[resetful API 接口设计规范](https://learnku.com/laravel/t/13740/resetful-api-design-specification)

返回的数据格式： json

{
  code: 200,
  msg: '请求成功',
  data: []
}






