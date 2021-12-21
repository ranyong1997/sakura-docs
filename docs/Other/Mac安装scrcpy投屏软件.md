# Mac M1芯 安装scrcpy投屏软件

## 操作步骤：

### 第一步：安装brew

官方网址安装下载：

```shell
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install.sh)"
```

国内镜像安装下载:

```shell
/usr/bin/ruby -e "$(curl -fsSL https://cdn.jsdelivr.net/gh/ineo6/homebrew-install/install)"
```

### 第二步：设定 HOMEBREW_BOTTLE_DOMAIN(不设定的时候 ，会遇到报错  Bottle missing, falling back to the default domain..)

```shell
echo 'export HOMEBREW_BOTTLE_DOMAIN=https://mirrors.ustc.edu.cn/homebrew-bottles' >> ~/.bash_profile
source ~/.bash_profil
```

### 第三步：设定中科大镜像源

```shell
git -C "$(brew --repo)" remote set-url origin https://mirrors.tuna.tsinghua.edu.cn/git/homebrew/brew.git
```

### 第四步：更新brew至最新

```shell
brew update -verbose
```

### 第五步：安装scrcpy

```shell
brew install scrcpy
```

### 第六步：安装adb

```shell
brew install android-platform-tools
```

## Scrcpy 的使用

### 准备工作：

> 1. 准备好 USB 数据线，安卓系统版本要求 5.0 以上
> 2. 需要在手机端的系统设置里开启「开发者选项」及「USB 调试」选项。不同的手机开启方法不尽相同，找不到选项的话可以自行去搜索一下。

### Scrcpy命令参数

| Scrcpy的命令参数        |                                                              |
| ----------------------- | ------------------------------------------------------------ |
| 关闭手机屏幕            | `scrcpy -S`                                                  |
| 限制画面分辨率          | `scrcpy -m 1024` (比如限制为 1024)                           |
| 修改视频码率            | `scrcpy -b 4M` (默认 8Mbps，改成 4Mbps)                      |
| 裁剪画面                | `scrcpy -c 1224:1440:0:0` 表示分辨率 1224x1440 并且偏移坐标为 (0,0) |
| 多设备切换              | `scrcpy -s 设备ID` (使用 `adb devices` 命令查看设备ID)       |
| 窗口置顶                | `scrcpy -T`                                                  |
| 显示触摸点击            | `scrcpy -t` 在演示或录制教程时，可在画面上对应显示出点击动作 |
| 全屏显示                | `scrcpy -f`                                                  |
| 文件传输默认路径        | `scrcpy --push-target /你的/目录` 将文件拖放到 scrcpy 可以传输文件，此命令指定默认保存目录 |
| 只读模式(仅显示不控制)  | `scrcpy -n`                                                  |
| 屏幕录像                | `scrcpy -r 视频文件名.mp4` 或 `.mkv`                         |
| 屏幕录像 (禁用电脑显示) | `scrcpy -Nr 文件名.mkv`                                      |
| 设置窗口标题            | `scrcpy --window-title '异次元好棒！'`                       |

### 屏幕录像

> 如果有需要，你可以通过命令对连接好的安卓手机进行录屏，并将视频保存为.mp4格式

- 投屏并录屏：`scrcpy -r file.mp4`
- 不投屏只录屏：`scrcpy -Nr file.mp4`

### 使用wifi连接

>1. 查询设备当前的 IP 地址 (设置 →关于手机→状态)
>2. 启用 adb TCP/IP 连接，执行命令：`adb tcpip 5555`，其中 5555 为端口号
>3. 拔掉你的数据线
>4. 通过 WiFi 进行连接，执行命令：`adb connect 设备IP地址:5555`
>5. 重新启动 scrcpy 即可
>6. 如果 WiFi 较慢，可以调整码率：`scrcpy -b 3M -m 800`，意思是限制 3 Mbps，画面分辨率限制 800，数值可以随意调整。
>7. 如需切换回 USB 模式，执行：`adb usb`