# m.douban.com single-page demo
这是一个基于angular而开发的豆瓣移动站单页面应用demo,首先它并不是一个完整的mobile site。目前包含了：首页，电影页，图书页，广播页和小组页。所有站点数据均采用本地json文件模拟动态载入。UI方面则完全参照了本尊的设计，html5和css部分全部用less进行了重构，数据交互部分则由angular来完成。这是第一版，后续还会增加一些内页和登录页。另外后续版本会用directive模块化一些组件，也会对用户体验的细节部分持续优化。

<h3>在线地址</h3>
<pre>http://test11.cdgzy.com/douban/</pre>
您也可以通过手机扫描二维码来访问<br />
![扫描二维码](https://github.com/aioros2016/m.douban.com/blob/master/dist/img/code.png)

<h3>预览</h3>
<h4>step 1:</h4>
下载后，首先安装依赖
<pre>npm install</pre>

<h4>step2:</h4>
启动服务(http://localhost:3000)
<pre>gulp</pre>

<h3>开发</h3>

<h4>目录结构</h4>
<pre>
.
├── README.md           
├── dist               // 项目build目录
├── src                // 生产目录
│   ├── css            // css目录
│   ├── js             // 脚本目录
│   ├── img            // 图片目录
│   ├── controllers    // 控制器目录
│   ├── views          // 视图目录
│   ├── less           // 样式预处理器目录
│   ├── json           // 数据目录
├── gulpfils.js        // gulp任务配置文件
└── package.json       // gulp配置文件
</pre>
