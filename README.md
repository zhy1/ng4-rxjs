# qrcode-welcome-page


本项目是用于显示机器人的产品展示页信息
ajax请求目标地址是
http://remote.gs-robot.com:3001/show/robot/info/GS-SR-0001-0002-0000-0016


> 搭建时间2h


搭建过程中参考了如下地址
http://git.gs-robot.com/zhouyi/qrcode-welcome-page

https://www.tslang.cn/docs/handbook/basic-types.html

https://www.angular.cn/tutorial/toh-pt6

https://angular.io/tutorial/toh-pt6#providing-http-services

https://github.com/xyscat/web-angular-2/tree/4cb80f1a3bca5826b0c2fb2d2afdaaa50ee48e2e/tutorial4/app

https://github.com/mattma/angular2-tour-of-heroes/blob/b3778eb5049862fbd2c9b5ba8ee9b9a767f03a09/src/app/shared/hero.ts

https://github.com/mattma/angular2-tour-of-heroes/blob/b3778eb5049862fbd2c9b5ba8ee9b9a767f03a09/src/app/shared/hero.ts

https://github.com/mattma/angular2-tour-of-heroes/blob/b3778eb5049862fbd2c9b5ba8ee9b9a767f03a09/src/app/shared/hero.service.ts

https://github.com/mattma/angular2-tour-of-heroes/blob/b3778eb5049862fbd2c9b5ba8ee9b9a767f03a09/src/app/shared/hero.service.ts

https://github.com/jwill9999/angular4-router/blob/master/src/app/error-message/error-message.component.html

https://github.com/mattma/angular2-tour-of-heroes/blob/master/src/app/app.component.ts

https://github.com/jwill9999/angular4-router/blob/master/src/app/app-routing.module.ts

https://stackoverflow.com/questions/38900357/no-exported-member-node-modules

https://github.com/AngularClass/angular-starter

https://stackoverflow.com/questions/33187235/getting-angular2-error-no-provider-for-router-routeroutlet-router


### 出现如下问题
ERROR in   router-deprecated/src/directives/router_outlet.d.ts (2,10): Module '"/Users/zy/data/ng2-a
 ERROR in   router-deprecated/src/directives/router_outlet.d.ts (2,10): Module '"@angular/core/core"' has no exported member 'DynamicComponentLoader'.

是由于添加了router-deprecated 导致的异常，删除即可，这个包在angular4中已经被删除了
 
 
### 发现如下知识点
angular的所有包都在node-modules的@angular中

angular注册一个模块可以导入ngModules

angular自己编写的component可以通过declarations声明

angular引入原生模块可以使用imports

angular的provider可以导入服务

angular的启动点在app.modules.ts中声明

ts可以使用any作为类型

ts可以定义一个class作为类型，class中使用k:v形式
