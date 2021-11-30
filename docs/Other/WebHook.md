---
date: "2021/11/24"
categories: [服务端]
tag: [宝塔面板,同步代码]
---

# 宝塔面板自动同步gitee仓库代码
:::tip
本想弄宝塔的gitlab进行代码同步的，发现自己的服务器太小了，下载gitlab就占了80%的内存了，后面发现网上有webhook这个东西，于是就有了这个方案。
:::

## 步骤

### 前置条件：

需要进入shell终端生成ssh公钥

```shell
ssh-keygen -t rsa
```

```shell
cd ~/.ssh
ls
cat id_rsa.pub
```

`复制这个公钥`

![image-20211124105925255](https://gitee.com/ran_yong/mark-down-table-upload/raw/master/img/20211124105925.png)

![image-20211124110027214](https://gitee.com/ran_yong/mark-down-table-upload/raw/master/img/20211124110027.png)

### 第一步：

`进入宝塔面板`-`软件商店`-`搜索【webhook】`

![image-20211124103919927](https://gitee.com/ran_yong/mark-down-table-upload/raw/master/img/20211124103935.png)

### 第二步：

`打开宝塔WebHook`

![image-20211124104108746](https://gitee.com/ran_yong/mark-down-table-upload/raw/master/img/20211124104108.png)

`脚本语言:`

```shell
#!/bin/bash
 
echo ""
#输出当前时间
date --date='0 days ago' "+%Y-%m-%d %H:%M:%S"
echo "Start"
#判断宝塔WebHook参数是否存在
if [ ! -n "$1" ];
then 
          echo "param参数错误"
          echo "End"
          exit
fi
#git项目路径
gitPath="/www/wwwroot/$1"
#git 网址
gitHttp="https://gitee.com/你的gitee用户名“例如：【ranyong】”/$1.git" //自己仓库的链接
echo "Web站点路径：$gitPath"
#判断项目路径是否存在
if [ -d "$gitPath" ]; then
        cd $gitPath
        #判断是否存在git目录
        if [ ! -d ".git" ]; then
                echo "在该目录下克隆 git"
                sudo git clone $gitHttp gittemp
                sudo mv gittemp/.git .
                sudo rm -rf gittemp
        fi
        echo "拉取最新的项目文件"
        #sudo git reset --hard origin/master
        sudo git pull        
        echo "设置目录权限"
        sudo chown -R www:www $gitPath
        echo "End"
        exit
else
        echo "该项目路径不存在"
                echo "新建项目目录"
        mkdir $gitPath
        cd $gitPath
        #判断是否存在git目录
        if [ ! -d ".git" ]; then
                echo "在该目录下克隆 git"
                sudo git clone $gitHttp gittemp
                sudo mv gittemp/.git .
                sudo rm -rf gittemp
        fi
        echo "拉取最新的项目文件"
        #sudo git reset --hard origin/master
        sudo git pull
        echo "设置目录权限"
        sudo chown -R www:www $gitPath
        echo "End"
        exit
fi
```

### 第三步：

`查看密钥`

![image-20211124104516629](https://gitee.com/ran_yong/mark-down-table-upload/raw/master/img/20211124104516.png)

`可以看到如图的例子`

![image-20211124104602285](https://gitee.com/ran_yong/mark-down-table-upload/raw/master/img/20211124104602.png)

### 第四步：

`来到你的gitee仓库`

![image-20211124104706597](https://gitee.com/ran_yong/mark-down-table-upload/raw/master/img/20211124104706.png)

`点击管理-WebHooks-添加webHook`

![image-20211124104753043](https://gitee.com/ran_yong/mark-down-table-upload/raw/master/img/20211124104753.png)

`将刚刚的密钥填入`

![image-20211124104940833](https://gitee.com/ran_yong/mark-down-table-upload/raw/master/img/20211124104940.png)

`修改一个参数`

![image-20211124105114619](https://gitee.com/ran_yong/mark-down-table-upload/raw/master/img/20211124105114.png)

点击添加即可

### 第五步：

回到宝塔面板，进入到`/www/wwwroot`目录，克隆你的仓库。可能会让你输入密码

```shell
cd /www/wwwroot
```

```shell
git clone https://gitee.com/ran_yong/test-hook.git
```

![image-20211124105459467](https://gitee.com/ran_yong/mark-down-table-upload/raw/master/img/20211124105459.png)

### 第六步：

`测试一下`

在gitee初始化一个README.md文件

![image-20211124110759991](https://gitee.com/ran_yong/mark-down-table-upload/raw/master/img/20211124110800.png)

![image-20211124110839175](https://gitee.com/ran_yong/mark-down-table-upload/raw/master/img/20211124110839.png)

### Q&A：

Q1：如果没拉取成功怎么办？

A：生成ssh公钥后，可以尝试重启下宝塔面板

```
/etc/init.d/bt restart
```