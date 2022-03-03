# Linux进阶学习

## 如何查看CPU信息

> [root@iZzj5iufefpw7dZ ~]# cat /proc/cpuinfo

## 查看占用CPU使用率最高的进程?

> ps aux

**使用sort对cpu占用进行排序**

> ps aux | sort -nr -k3

- sort # 排序命令
- -nr # 默认使用字符串排序n代表使用数值进行排序，默认从小到大排序，r代表反向排序
- k3 # 以第三列进行排序

## 如何查看一个文件的末尾50行

> tail命令，动态显示tail -f，制定50行 tail -n 50

## 如何过滤文件内容中包含”ERROR “的行?

> grep -o "ERROR" 文件名  cat 文件名 ｜ grep -o "ERROR"

## linux查看某端口号?

> netstat -anp | grep 端口号

## 查看某进程号?

> ps -ef | grep 进程名

## grep和find的区别? grep都有哪些用法?

> - grep模糊查询需要使用正则表达式，而find使用通配符
> - find搜索文件用通配符，grep搜索的是文件中的数据则需要使用正则表达式
> - grep 用法
>   - grep "xxx" text.log :在文件test.log 中找出包含xxx的信息的行
>   - grep -v "xxx"：排除xxx所在的行
>   - grep -i "xxx"：不区分大小写

## 查看ip地址？

> ifconfig -a

## 创建和删除一个多级目录?

> mkdir -p 目录1/目录2/目录3 # 创建多级目录
>
> rm -rf /目录 # 删除目录

## 在当前用户家目录中查找haha.txt文件?

> find ~/ -name haha.txt

## 如何查询出tomcat的进程并杀掉这个进程，写出linux命令?

> ps -ef | grep tomcat
>
> kill -9 进程号

## 动态查看日志文件?

> tar -f test.log

## 查看当前机器listen的所有端口?

> netstat -lnp

## 把一个文件夹打包压缩成.tar.gz的命令，以及解压拆包.tar.gz的命令?

> 打包命令：tar -czvf myetc.tar.gz
>
> 解压命令：tar -xzvf myetc.tar.gz

## 如何查询内存占用情况

> free 命令显示系统使用和空闲的内存情况
>
> top 命令查看系统的实施负载，包括进程、cpu负载、内存使用等

## Linux下查看磁盘空间

> df -h # 查看磁盘各分区大小、已用空间等信息
>
> du -sh foo # 查看foo目录大小

## 将文件A.txt 从/home/test复制到/data/test下

> cp A.txt  /data/test

