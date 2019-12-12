> PC
> 移动 （主流单一开发，只针对手机浏览器开发）
> flex 布局
> rem 布局
> 响应式布局（繁琐，一个项目要写若干个css去适配）
> 百分比布局
> table布局

#  视口 
 ## 布局视口
> 有滚动条，宽度以整个页面为主
 + document 
 + documentElement
 + clientWidth
 ## 视觉视口
  > 能让pc上的页面，整个装到移动浏览器上，但是会缩小，如果要看就要双指放大，根据设备宽度走
   - window.innerWidth
 ## 理想视口
   > 一切显示根据设备来
   - window.screen.width

```
 <meta name="viewport" content="user-scalable=no,maximum-scale=1.0  ,minimum-scale=1.0,width=device-width, initial-scale=1.0">

```
+ width=device-width 表示宽度为设备宽度
+ initial-scale=1.0 初始化缩放比例
+ maximum-scale=1.0 最大缩放比例
+ minimum-scale=1.0 最小缩放比例
+ user-scalable=no 是否允许缩放
  - no|0 不能
  - yes|1 能

### 物理像素
   屏幕的像素点

### 逻辑像素
   css设置的像素

   在pc上物理像素和逻辑像素是相等的，所以布局是多少就是多少

### web App html5+css3
### Hybrid App 一套代码兼容多个端
### Cordova
### JSBridage  小程序
### Flutter
