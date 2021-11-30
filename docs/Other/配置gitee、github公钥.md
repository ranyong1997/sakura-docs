---
date: "2021/11/29"
categories: [服务端]
tag: [Github,Gitee,公钥]
---

# 配置gitee、github公钥

> 为什么我们需要配置公钥？
>
> 以github为例，如果要使用git仓库，会要求呢生成公钥和私钥。公钥是放在`服务器`，私钥是放在`本地`，当你push代码到服务器，服务器会要求你出示私钥，如果配对成功则允许push，否则就拒绝push。

## 步骤：

### 以下是github操作添加公钥

#### 第一步：

>在git Bash(终端)执行 `cd ~/.ssh` 命令,如果存在该目录，表明之前生成SSH Key，利用`ls`命令来查看。

![image-20211125094452554](https://gitee.com/ran_yong/mark-down-table-upload/raw/master/img/20211125094459.png)

#### 第二步：

> 生成的SSH Key，输入ssh-keygen -t rsa -C "你github账号"

![image-20211125094839078](https://gitee.com/ran_yong/mark-down-table-upload/raw/master/img/20211125094839.png)

#### 第三步：

> 在 ～/.ssh目录下有id_rsa 和 id_rsa_pub两个文件，其中id_rsa.pub文件里存放的即是公钥Key。

![image-20211125095155912](https://gitee.com/ran_yong/mark-down-table-upload/raw/master/img/20211125095155.png)

#### 第四步：

> 登陆到github，点击头像---settings，点击SSH and GPG keys，点击 New SSH key

![image-20211125095332015](https://gitee.com/ran_yong/mark-down-table-upload/raw/master/img/20211125095332.png)

#### 第五步：

![image-20211125095547483](https://gitee.com/ran_yong/mark-down-table-upload/raw/master/img/20211125095547.png)

#### 第六步：

> 测试一下：输入 `ssh -T git@github.com`,如图即为配置成功。

![image-20211125095907792](https://gitee.com/ran_yong/mark-down-table-upload/raw/master/img/20211125095907.png)

### 以下是gitee操作添加公钥

#### 第一步：

> 输入 `ssh-keygen -t id -C "xxx@xxx.com"`来生成sshkey
>
> 这里的 xxx@xxx.com 只是生成的 sshkey 的名称，并不约束或要求具体命名为某个邮箱。

![image-20211125100707336](https://gitee.com/ran_yong/mark-down-table-upload/raw/master/img/20211125100719.jpg)

#### 第二步：

按照提示完成三次回车，即可生成ssh key。通过命令查看。

```shell
cat ~/.ssh/id_ed25519.pub
```

![image-20211125100925585](https://gitee.com/ran_yong/mark-down-table-upload/raw/master/img/20211125100926.png)

其中 `id_ed25519.pub` 为公钥，`id_ed25519`为私钥。

![image-20211125101124613](https://gitee.com/ran_yong/mark-down-table-upload/raw/master/img/20211125101125.png)

#### 第三步：

> 复制生成好的ssh key，通过仓库主页

![image-20211125104603602](https://gitee.com/ran_yong/mark-down-table-upload/raw/master/img/20211125104603.png)

#### 第四步：

> 测试一下，输入命令：

```shell
ssh -T git@gitee.com
```

看到以下内容即成功

![image-20211125104805482](https://gitee.com/ran_yong/mark-down-table-upload/raw/master/img/20211125104805.png)