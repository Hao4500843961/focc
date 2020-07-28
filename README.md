# focc
1、整体使用Vue.js+webpack+node.js搭建。
2、项目使用了npm包管理工具，想导入任何包，可使用：npm install 包名。（类似maven工具）
3、由于npm导入包可能出现网络问题，已安装的淘宝镜像cnpm，但是建议大家使用npm，失败后，可以多试几次。
4、npm安装成功后的包，可以在package.json中查看（包括包名、版本号等）。
5、首次clone完成后，需要在项目地址的路径下，右键打开git bash或者在支持终端的编辑器中，运行npm install命令，此命令会自动安装pakage.json中的所有依赖。
（此步骤会出现网络错误或超时等，耐心等待，在网络较好的环境下多试几次~）
6、第5步成功安装后，在命令行运行：npm run dev。成功运行后，会显示首页打开的url，在浏览器打开即可。
7、为避免第6步中，每次去手动输入命令运行的繁琐流程，可以在编辑器中配置此运行命令，每次去点击编辑器中的运行按钮即可。
8、js代码，使用jquery；与freeswitch服务器的交互，使用JsSIP；数据渲染使用Vue.js；html页面的一些组建的使用，用element UI（包括按钮、弹框等）。
9、由于vue是组件化开发，因此新的页面全部以组件的方式创建。具体目录是在：focc/src/componets，请在此目录下创建新的页面，右键：new-》Vue Componet。
10、新创建的页面，使用vue的标准模板，在对应的标签里面填写对应的代码即可：
   <template/>标签中写html代码（html标准页面中的<body>标签内容；
   <script/>写js代码；
   <style/>写css代码；
11、html页面的<head>标签放在public/index.html中，是所有页面的公共头部。
12、已经创建了Login.vue登录注册页面，供大家参考。
13、若有需要用npm引入的其他库，需要在导入后，需要先在main.js中做相关的引入。
