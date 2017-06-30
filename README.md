# m.douban.com single-page demo
这是一个基于angular而开发的豆瓣移动站单页面应用demo,首先它并不是一个完整的mobile site。目前包含了：首页，电影页，图书页，广播页和小组页。所有站点数据均采用本地json文件模拟动态载入。UI方面则完全参照了本尊的设计，html5和css部分全部用less进行了重构，数据交互部分则由angular来完成。这是第一版，后续还会增加一些内页和登录页。另外后续版本会用directive模块化一些组件，也会对用户体验的细节部分持续优化。

<h3>在线地址</h3>
<pre>http://lizhigang.cn/douban/</pre>
您也可以通过手机扫描二维码来访问<br />
![扫描二维码](https://github.com/aioros2016/m.douban.com/blob/master/dist/img/code.png)

<h3>更新于2017年1月5日</h3>
1：修正了因ios边缘回弹所造成的视觉问题。<br />
2：现在全局toast抛弃了原生alert组件，替换为自定义样式，用户体验更好。

<h3>更新于2016年12月28日</h3>
1：依赖于localstorage，现在广播页可以发广播了。<br />
2：运用gulp-ng-annotate修复了angular注入式依赖不能混淆压缩的问题,进一步缩小了控制器文件的体积。

<h3>更新于2016年12月20日</h3>
终于迎来了版本上线后的第一次大更新。<br />
1：这次加入了详情页，首页所有的文章列表都可以点击了。<br />
2：突破了豆瓣的图片防盗链机制，所有图片均采集自官网服务器，项目下载体积进一步缩小了。<br />
3：详情页底部的点赞按钮由于没有与服务器交互数据，所以用localstorage替代了交互效果。（本站目前也没有用户登录与注册机制）。<br />
4：对电影页与图书页的数据进行了进一步的优化。<br />
5：暂时只想到这么多，以后想到了再补充（对本项目的支持与优化会持续更新）。

<h3>更新于2016年12月14日</h3>
1：修复了点击300ms的延迟问题。<br />
2：修复了小组页标题不显示的问题。<br />
3：修复了active状态失效的问题。

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
