# API测试

## 接口类型有哪些

- get
- post
- delete
- put

## 手机短信验证码接口怎么测试

> - 选择短信平台
>   - 寻找若干个短信平台，获取测试[接口](https://so.csdn.net/so/search?q=接口&spm=1001.2101.3001.7020)（注：有些平台是可以免费进行试用或者测试，有些平台是不能进行测试的，试用之前最好了解清楚。）如下图所以，就是某个短信平台的接口测试环境
> - 获取AppId和AppKey
> - 进行测试

## Post请求的body有常见的数据类型?

> - application/json
> - application/x-www-form-urlencoded
> - multipart/form-data
> - text/xml

## 常用HTTP协议调试代理工具有什么?详细说明抓取HTTPS协议的设置过程?

> 在win系统中用Fiddler代理
>
> - 安装fiddler证书
> - 打开fiddlder，点击工具栏中Tools-->Options
> - 点击https设置选项，勾选选择项
> - 点击Actions，点击第二项：Export Root Certificate to Desktop，这时候桌面上会出现证书FiddlerRoot文件，点击ok设置成功，关闭fiddler
> - 在pc浏览器中，导入证书FiddlerRoot
>
> 在mac系统中用Charles

## 多个API的连续调用的测试用例的难点是什么？解决方法是什么？

> 难点：多个API的连续调用，并且后一个api的参数适用的是前一个api调用的返回结果，这就要求多个api调用之间可以方便地进行参数传递，举个例子：前一个api调用会返回一个有效的token，后一个api调用更需要用到带有这个token才能调用成功
>
> 解决方法：
>
> - 手工复制前一个api返回结果中的某个值，然后粘贴后一个api作为输入参数。
> - 基于代码的api测试框架
> - 借助于类似HttpRunner之类已有的api测试框架，可以通过关键字，很方便地将前一个api返回值中某个值传递给下一个api作为输入参数

