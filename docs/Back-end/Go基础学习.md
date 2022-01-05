---
date: "2022/01/01"
categories: [后端]
tag: [Go]
---

# Go基础学习

## 第一个go程序

> 在src目录下创建一个hello目录，在hello目录中创建一个main.go文件

### HelloWorld

```go
# main.go

package main // 申明main包，标明当前是一个可执行程序

import "fmt"	// 导入内置fmt

func main() {	// main函数，是程序执行的入口
	fmt.Println("hello world!") // 在终端打印Hello World！
}
```

> 在hello目录下执行：`go build`
>
> `go`编译器会去目录下找到你要编译的`hello`项目
>
> 编译得到的可执行文件保存在执行编译命令下的当前目录下，你会发现一个`*.exec/*.exe`的可执行文件

![image-20220105223606208](https://gitee.com/ran_yong/mark-down-table-upload/raw/master/img/image-20220105223606208.png)

> 在终端直接双击执行hello.exec文件：

![image-20220105223845167](https://gitee.com/ran_yong/mark-down-table-upload/raw/master/img/image-20220105223845167.png)

::: tip

我们还可以使用`-o`参数来指定遍以后可执行文件的名字

```go
go build -o main.exec
```

:::

## Go语言的主要特征

### 优点：

- 自带gc
- 静态编译，编译好后，扔服务器直接运行
- 简单的思想，没有继承，多态，类等
- 丰富的库和详细的开发文档
- 语法层支持并发、拥有同步并发的channel类型，使并发开发变得非常方便
- 简洁的语法，提高开发效率，同时提高代码的阅读性和可维护性
- 超级简单的交叉编译，仅需更改环境变量

### 特性：

- 自动立即回收
- 更丰富的内置类型
- 函数多返回值
- 错误处理
- 匿名函数和闭包
- 类型和接口
- 并发编程
- 反射
- 语言交互性

### Golang文件名：

::: tip
所有的go源码都是以 ".go" 结尾
:::

### Go语言命名：

> 1.Go的函数、变量、常量、自定义参数、包的命名方式都遵循以下规则：

1)首字符可以是任意的Unicode字符或者下划线

2)剩余字符可以是Unicode字符、下划线、数字

3)字符长度不限

> 2.Go只有25个关键字

| break    | default     | func   | interface | Select |
| -------- | ----------- | ------ | --------- | ------ |
| case     | defer       | go     | map       | struct |
| chan     | else        | goto   | package   | switch |
| const    | fallthrough | if     | range     | type   |
| continue | for         | import | return    | Var    |

> 3.Go还有37个保留字

![image-20220105225225062](https://gitee.com/ran_yong/mark-down-table-upload/raw/master/img/image-20220105225225062.png)

> 4.可见性

1)声明在函数内部，是函数的本地值，类似private

2)声明在函数外部，是对当前包可见(包内所有.go文件都可见)的全局值，类似protect

3)声明在函数外部且字母大写是所有包可见的全局值，类似public

### Go语言声明：

> 有四种主要声明方式

- var（声明变量）
- const（声明常量）
- type（声明类型）
- func（声明函数）

### Go项目构建及编译

> 一个Go工程主要包含以下三个目录：

- src：源代码文件
- pkg：包文件
- bin：相关bin文件

1：建立工程文件夹 `goproject`

2：在工程文件夹中建立 `src、pkg、bin`文件夹

3：在GOPATH中添加project路径 例 `e:/goproject`

4：如工程中有自己的包examplepackage，那么在src文件夹下建立以包命名的文件夹 例 `examplepackage`

5：在src文件夹下编写主程序代码 例 `goproject.go`

6：在examplepackage文件夹中编写 examplepackage.go 和包测试文件 examplepackage_test.go

7：编译调试包

```go
go build examplepackage
go test examplepackage
go install examplepackage
```

这时在pkg文件夹中可以发现会有一个相应的操作系统文件夹，在这文件夹中会有examplepackage文件夹，在该文件夹中有examplepackage.a文件

8：编译主程序

```go
go build goproject.go
```

成功后会生成goproject.exec文件

### go编译问题

> golang的编译使用命令go build，go install；除非仅写一个main函数，否则还是准备好目录结构：GOPATH=工程根目录；其下应创建src，pkg，bin目录，bin目录中用于生成可执行文件，pkg目录中用于生成a文件；golang中的import name，实际是到GOPATH中寻找name.a，使用时是该name.a的源码中声明的package名字

## Golang内置类型和函数

### 内置类型

1：值类型

```tex
	bool
    int(32 or 64), int8, int16, int32, int64
    uint(32 or 64), uint8(byte), uint16, uint32, uint64
    float32, float64
    string
    complex64, complex128
    array    -- 固定长度的数组
```

2：引用类型

```tex
    slice   -- 序列数组(最常用)
    map     -- 映射
    chan    -- 管道
```

### 内置函数

> Go语言拥有一些不需要进行导入操作就可以使用的内置函数。它们有时针对不同的类型进行操作，例如：len、cap和append，或必须用于系统级的操作，例如：panic。因此它们需要直接获得编译器的支持。

```tex
append  -- 用于追加元素到数组、slice中，返回修改后的数组、slice
close -- 主要用来关闭channel
delete  -- 从main中删除key对应的value
panic  -- 停止常规的goroutine
recover  -- 允许程序定义goroutine的panic动作
real  -- 返回complex的实部
imag  -- 返回complex的虚部
make  -- 用来分配内存，返回Type本身(只能应用于slice、map、channel)
new  -- 用来分配内存，主要用来分配值类型，比如int、struct
cap  -- capacity是容量的意思，用于返回某个类型的最大容量(只能用于切片和map)
copy  -- 用于复制和连接slice，返回复制的数目
len  -- 来求长度，比如string、arrary、slice、map、channel，返回长度
print、println  -- 底层打印函数，在部署环境中建议使用fmt包
```

### 内置接口error

```go
 type error interface { //只要实现了Error()函数，返回值为String的都实现了err接口
            Error()    String
    }
```

## Init函数和main函数

### init函数

> go语言中，init函数用于包的初始化，该函数是go语言的一个重要性

有以下特征：

::: details 点击查看

- init函数是用于程序执行前做包的初始化的函数，比如初始化包里的变量等
- 每个包可以拥有多个init函数
- 包的每个源文件可以拥有多个init函数
- 同一个包中多个init函数的执行顺序go语言没有明确的定义
- 不同的init函数按照包导入的依赖关系决定该初始化函数的执行顺序
- init函数不能被其他函数使用，而是在main函数执行之前，自动被调用

:::

### main函数

> Go语言程序的默认入口函数(主函数)：func main()
>
> 函数体用 {} 一对括号包裹。

```go
func main() {
  // 函数体
}
```

### init函数和main函数的异同

- 相同点：
  - 两个函数在定义时不能有任何参数和返回值，且Go程序自动调用
- 不同点：
  - init可以应用于任意包中，且可以重复定义多个
  - main函数只能用于main包中，且只能定义一个

> 两个函数的执行顺序

对同一个go文件的`init()`调用顺序是从上往下的。

对同一个`package`中不同文件是按文件名字符串比较"从小打到"顺序调用各文件中`init()`函数。

对于不同的`package`，如果不相互依赖的话，按照main包中”先import的后调用“的顺序调用其包中的`init()`，如果package存在依赖，则先调用最早被依赖的package中的`init()`,最后调用main函数。

如果`init`函数中使用`println()`你会发现在执行过程中这两个不会按照你想象中的顺序执行。这两个函数只推荐在测试环境中使用，对于正式环境不使用。