---
date: "2021/11/29"
categories: [服务端]
tag: [HTTPS,SSL]
---


# 如何通过宝塔配置HTTPS网站

## HTTP于HTTPS的区别

**HTTP与HTTPS有什么区别？**

　　HTTP协议传输的数据都是未加密的，也就是明文的，因此使用HTTP协议传输隐私信息非常不安全，为了保证这些隐私数据能加密传输，于是网景公司设计了SSL（Secure Sockets Layer）协议用于对HTTP协议传输的数据进行加密，从而就诞生了HTTPS。简单来说，HTTPS协议是由SSL+HTTP协议构建的可进行加密传输、身份认证的网络协议，要比http协议安全。

## 操作步骤

::: tip

首先看看非HTTPS的网站

> 它会提示用户此网站不安全😣，这非常的痛苦，因此我们需要给这个网站加上HTTPS的一把🔒

:::

![image-20211129131149906](https://gitee.com/ran_yong/mark-down-table-upload/raw/master/img/202111291311936.png)

### 第一步

::: tip

前提你是已经拥有了域名！

我们需要到该服务商去将域名解析，我这里是阿里云的，因此我需要到阿里云服服务商去域名解析

:::

![image-20211129101048215](https://gitee.com/ran_yong/mark-down-table-upload/raw/master/img/202111291010241.png)

### 第二步

::: tip

登陆到宝塔后台，配置你的域名

:::

![image-20211129101207776](https://gitee.com/ran_yong/mark-down-table-upload/raw/master/img/202111291012801.png)

### 第三步

::: tip

点击设置--SSL---Let's Encrypt

:::

![image-20211129101326528](https://gitee.com/ran_yong/mark-down-table-upload/raw/master/img/202111291013556.png)

### 第四步

> 跟着操作步骤走

![image-20211129101420143](https://gitee.com/ran_yong/mark-down-table-upload/raw/master/img/202111291014181.png)

### 第五步

>测试一下，可以看见已经加锁了

![image-20211129130826173](https://gitee.com/ran_yong/mark-down-table-upload/raw/master/img/202111291308213.png)