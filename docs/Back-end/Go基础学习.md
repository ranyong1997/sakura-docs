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

## 命令

> 下面我们来看看go相关的语言命令吧

::: details 点击查看代码
```go
Go is a tool for managing Go source code.

Usage:

	go <command> [arguments]

The commands are:

	bug         start a bug report
	build       compile packages and dependencies
	clean       remove object files and cached files
	doc         show documentation for package or symbol
	env         print Go environment information
	fix         update packages to use new APIs
	fmt         gofmt (reformat) package sources
	generate    generate Go files by processing source
	get         add dependencies to current module and install them
	install     compile and install packages and dependencies
	list        list packages or modules
	mod         module maintenance
	run         compile and run Go program
	test        test packages
	tool        run specified go tool
	version     print Go version
	vet         report likely mistakes in packages



Additional help topics:

	buildconstraint build constraints
	buildmode       build modes
	c               calling between Go and C
	cache           build and test caching
	environment     environment variables
	filetype        file types
	go.mod          the go.mod file
	gopath          GOPATH environment variable
	gopath-get      legacy GOPATH go get
	goproxy         module proxy protocol
	importpath      import path syntax
	modules         modules, module versions, and more
	module-get      module-aware go get
	module-auth     module authentication using go.sum
	packages        package lists and patterns
	private         configuration for downloading non-public code
	testflag        testing flags
	testfunc        testing functions
	vcs             controlling version control with GOVCS
```

:::

- go env 用于打印Go语言的环境信息
- go run 命令可以编译并运行命令源码文件
- go get可以根据要求和实际情况从互联网上下载或更新指定的代码包及其依赖包，并对它们进行编译和安装
- go build 命令用于编译我们指定的源码文件或代码包以及它们的依赖包
- go install 用于编译并安装指定的代码包及它们的依赖包
- go clean 命令会删除掉执行其他命令时产生的一些文件和目录
- go doc 命令可以打印附于Go语言程序实体上的文档。我们可以通过把程序实体的标识符作为该命令的参数来达到查看其文档的目的
- go test 命令用于对Go语言编写的程序进行测试
- go list 命令的作用是列出指定的代码包的信息
- go fix 会把指定代码包的所有Go语言源码文件中的旧版本代码修正为新版本的代码
- go vet 是一个用于检查Go语言源码中静态错误的简单工具
- go tool pprof 命令来交互的访问概要文件的内容

## 运算符

> Go语言内置的运算符有：
>
> - 算术运算符
> - 关系运算符
> - 逻辑运算符
> - 位运算符
> - 赋值运算符

### 算术运算符

- +【相加】

- -【相减】
- *【相乘】
- /【相除】
- %【求余】

::: warning
++ （自增）和--（自减）在Go语言中是单独的语句，并不是运算符
:::

### 关系运算符

| 运算符 | 表头                                                        |
| ------ | ----------------------------------------------------------- |
| ==     | 检查两个值是否相等，如果相等返回True，否则返回False         |
| !=     | 检查两个值是否不相等，如果不相等返回True，否则返回False     |
| >      | 检查左边值是否大于右边值，如果是返回True，否则返回False     |
| >=     | 检查左边值是否大于等于右边值，如果是返回True，否则返回False |
| <      | 检查左边值是否小于右边值，如果是返回True，否则返回False     |
| <=     | 检查左边值是否小于等于右边值，如果是返回True，否则返回False |

### 逻辑运算符

| 运算符 | 表头                                                         |
| ------ | ------------------------------------------------------------ |
| &&     | 逻辑AND运算符，如果两边的操作数都是True，则为True，否则为False |
| \|\|   | 逻辑OR运算符，如果两边的操作数有一个True，则为True，否则为False |
| ！     | 逻辑NOT运算符，如果条件为True，则为False，否则为True         |

### 位运算符

> 位运算符对整数在内存中的二进制位进行操作

| 运算符 | 表头                                 |
| ------ | ------------------------------------ |
| &      | 参与运算的两数各对应的二进位相与     |
| \|     | 参与运算符的两数各对应的二进制相或   |
| ^      | 参与运算符的两数各对应的二进制相异或 |
| <<     | 左移n位就是乘以2的n次方              |
| >>     | 右移n位就是除以2的n次方              |

### 赋值运算符

| 运算符 | 表头                                           |
| ------ | ---------------------------------------------- |
| =      | 简单的赋值运算符，将一个表达式的值赋给一个左值 |
| +=     | 相加后在赋值                                   |
| -=     | 相减后再赋值                                   |
| *=     | 相乘后再赋值                                   |
| /=     | 相除后在赋值                                   |
| %=     | 求余后再赋值                                   |
| <<=    | 左移后赋值                                     |
| >>=    | 右移后赋值                                     |
| &=     | 按位与后赋值                                   |
| l=     | 按位或后赋值                                   |
| ^=     | 按位异或后赋值                                 |

## 下划线

> "_"是特殊标识符，用来忽略结果。

### 下划线在import中

> 在Golang里，import的作用时导入其他的packaage。

import 下划线(如：import _ "./hello")的作用：当导入一个包时，该包下的文件里的init()函数都会执行，然而，有些时候我们并不需要把整个包都导入进来，仅仅是希望它执行init()函数而已。这个时候就可以使用import引用该包。即使用【import_包路径】只是引用该包。仅仅是为了调用init()函数，所以无法通过包中的其他函数。

代码结构

```
   src 
    |
    +--- main.go            
    |
    +--- hello
           |
            +--- hello.go
```

```go
ppackage main

import _ "./hello"

func main() {
    // hello.Print() 
    //编译报错：./main.go:6:5: undefined: hello
}
```

hello.go

```go
package hello

import "fmt"

func init() {
    fmt.Println("imp-init() come here.")
}

func Print() {
    fmt.Println("Hello!")
}
```

输出结果：

```go
    imp-init() come here.
```

### 下划线在代码中

```go
package main

import (
    "os"
)

func main() {
    buf := make([]byte, 1024)
    f, _ := os.Open("/Users/***/Desktop/text.txt")
    defer f.Close()
    for {
        n, _ := f.Read(buf)
        if n == 0 {
            break    

        }
        os.Stdout.Write(buf[:n])
    }
}
```

> 解释一：
>
> 下划线意思是忽略这个变量。
>
> 比如os.Open,返回值为*os.File,error
>
> 普通写法是f,err := os.Open("xxxx")
>
> 如果此时不需要知道返回的错误值
>
> 就可以用f, _:= os.Open("xxxxx")
>
> 则忽略了error变量
>
> 解释二：
>
> 占位符，意思是那个位置本应该赋给某个值，但是不需要这个值。
>
> 所以就把该值赋给下划线，意思是丢掉不要。
>
> 这样编译器可以更好的优化，任何类型的单个值都可以丢给下划线。
>
> 这种情况是占位用的，方法返回两个结果，而你只想要一个结果。
>
> 那另一个就用"_"占位，而如果用变量的话，不使用，编译器就会报错

```go
import "database/sql"
import _ "github.com/go-sql-driver/mysql"
```

> 第二个import就是不直接使用mysql包，只是执行一下这个包的init函数，把mysql的驱动注册到sql包里，然后程序里就可以使用sql包来访问mysql数据库了。

## 变量和常量

### 变量

#### 变量的来历

> 程序运行过程中的数据都是保存在内存中，我们想要在代码中操作某个数据时就需要去内存上找这个变量，但是如果我们直接在代码中通过内存地址去操作变量的话，代码的可读性会非常差还容易出错，所以我们就利用变量将这个数据的内存地址保存起来，以后直接通过这个变量就能找到内存上对应的数据了。

#### 变量类型

> 变量的功能是存储数据。不同的变量保存的数据类型可能会不一样。常见的变量数据类型有：整型、浮点数、布尔值等。

#### 变量声明

> Go语言中的变量需要声明后才能使用，同一作用域内不支持重复声明。并且Go语言的变量声明必须使用。

#### 标准声明

```go
var 变量名 变量类型
```

变量声明以关键字 `var` 开头，变量类型放在变量的后面，行尾无需分号。

```go
var name string
var age int
var isOk bool
```

#### 批量声明

每声明一个变量就需要写`var`关键字会比较繁琐，go语言中还支持批量变量声明：

```go
var (
        a string
        b int
        c bool
        d float32
    )
```

#### 变量的初始化

> Go语言在声明变量的时候，会自动对变量对应的内存区域进行初始化操作。每个变量会被初始化成其他类型的默认值，例如：整型和浮点型变量的默认值为0。字符串变量的默认值为空字符串。布尔型变量默认为`false`。切片、函数、指针变量的默认值为`nil`。

当然我们也可以在声明变量的时候为其指定初始值。变量初始化的标准格式如下：

```go
var 变量名 类型 = 表达式
```

举个例子：

```go
var name string = "pprof.cn"
var sex int = 1
```

或者一次初始化多个变量

```go
var name, sex = "pprof.cn", 1
```

#### 类型推导

> 有时候我们会将变量的类型省略，这个时候编译器会根据等号右边的值来推导变量的类型完成初始化。

```go
var name = "pprof.cn"
var sex = 1
```

#### 短变量声明

> 在函数内部，可以使用更简略的 := 方式声明并初始化变量。

```go
package main

import (
    "fmt"
)
// 全局变量m
var m = 100

func main() {
    n := 10
    m := 200 // 此处声明局部变量m
    fmt.Println(m, n)
}
```

#### 匿名变量

> 在使用多重赋值时，如果想要忽略某个值，可以使用 `匿名变量`。匿名变量用一个下划线`_`表示。

```go
func foo() (int, string) {
    return 10, "Q1mi"
}
func main() {
    x, _ := foo()
    _, y := foo()
    fmt.Println("x=", x)
    fmt.Println("y=", y)
}
```

运行结果：

```go
x= 10
y= Q1mi
```

匿名变量不占用命名空间，不会分配内存，所以匿名变量之间不存在重复声明。

::: warning
函数外的每个语句都必须以关键字开始(var、const、func等)

:= 不能使用在函数外。

:::

#### 常量

> 相对于变量，常量是恒定不变的值，多用于定义程序运行期间不会改变的那些值。常量的声明和变量声明非常类似，只是把`var`换成了`const`，常量在定义的时候必须赋值。

```go
const pi = 3.1415
const e = 2.7182
```

声明了 `pi` 和 `e`这两个常量之后，在整个程序运行期间它们的值都不会再发生变化了。

#### 批量声明常量

```go
const (
        pi = 3.1415
        e = 2.7182
    )
```

`const`同时声明多个常量时，如果省略了值则表示和上面一行的值相同。例如

```go
const (
        n1 = 100
        n2
        n3
    )
```

上面示例中，常量`n1` `n2` `n3`的值都是100。

#### iota

> iota是go语言的常量计数器，只能在常量的表达式中使用。
>
> iota在`const`关键字出现时将被重置为`0`。`const`中每新增一行常量声明将使`iota`计数一次。使用iota能简化定义，在定义枚举是很有用。

举个例子：

```go
const (
            n1 = iota //0
            n2        //1
            n3        //2
            n4        //3
)
```

#### 几个常见的iota示例：

使用_跳过某些值

```go
const (
  n1 = iota //0
  n2        //1
  _
  n4        //3
)
```

iota声明中间插队

```go
const (
            n1 = iota //0
            n2 = 100  //100
            n3 = iota //2
            n4        //3
)
const n5 = iota //0
```

定义数量级(这里的<<表示左移操作，1<<10表达1的二进制表示向左移10位，也就是由1变成了10000000000，也就是十进制的1024。同理2<<2表示将2的二进制表示向左移2位，也就是由10变成了1000，也就是十进制的8。)

```go
const (
            _  = iota
            KB = 1 << (10 * iota)
            MB = 1 << (10 * iota)
            GB = 1 << (10 * iota)
            TB = 1 << (10 * iota)
            PB = 1 << (10 * iota)
        )
```

多个iota定义在一行

```go
const (
            a, b = iota + 1, iota + 2 //1,2
            c, d                      //2,3
            e, f                      //3,4
        )
```

## 基本类型

### 基本类型介绍

> Golang更明确的数字类型命名，支持Unicode，支持常用数据结构

#### 整型

#### 浮点型

#### 复数

#### 布尔值

#### 字符串

#### 字符串转义符

| 转义 | 表头   |
| ---- | ------ |
| \r   | 回车符 |
| \n   | 换行符 |
| \t   | 制表符 |
| \'   | 单引号 |
| \''  | 双引号 |
| \    | 反斜杠 |

举个例子，我们要打印一个Windows平台下的文件路径：

```go
package main

import "fmt"

func main() {
	fmt.Println("str := \"c:\\test\test.ext\"")
}
```

#### 多行字符串

Go语言中要定义一个多行字符串时，就必须使用 `反引号` 字符：

```go
s1 := `第一行
    第二行
    第三行
    `
    fmt.Println(s1)
```

反引号间换行将被作为字符串中的换行，但是所有的转义字符均无效、文本将会原样输出。

#### 字符串的常用操作

| 方法                                | 介绍           |
| ----------------------------------- | -------------- |
| len(str)                            | 求长度         |
| +或fmt.Sprintf                      | 拼接字符串     |
| string.Split                        | 分割           |
| strings.Contains                    | 判断是否包含   |
| strings.HasPrefix,strings.HasSuffix | 前缀/后缀判断  |
| string.Index(),strings.LastIndex()  | 子串出现的位置 |
| strings.Join(a[]string,sep string)  | join操作       |

#### byte和rune类型

> 组成每个字符串的元素叫做"字符"，可以通过遍历或者单个获取字符串元素获得字符。字符用单引号(`'`)包裹起来

```go
var a := '中'

var b := 'x'
```

## 数组Array

> Golang Array 和以往认知的数组有很大不同

::: tip

- 数组：是同一种数据类型的固定长度的序列。

- 数组定义：`var a [len] int`, 比如 `var a [5] int`,数组长度必须是常量，且是类型的组成部分。一旦定义，长度不能变。

- 长度是数组类型的一部分，因此，`var a[5] int` 和 `var a[10] int` 是不同类型。

- 数组可以通过下标进行访问，下标从0开始，最后一个元素下标是:len-1

  ```go
  for i := 0; i < len(a); i++ {
  }
  for index, v := range a {
  }
  ```

- 访问越界，如果下标在数组合法范围之外，则触发访问越界，会panic
- 数组是值类型，赋值和传参会复制整个数组，而不是指针。因此改变副本的值，不会改变本身的值。
- 支持 “==”、“!=”操作符，因为内存总是被初始化过
-  指针数组 [n]*T，数组指针 *[n]T。

:::

### 数组初始化

`一维数组`

```
全局：
    var arr0 [5]int = [5]int{1, 2, 3}
    var arr1 = [5]int{1, 2, 3, 4, 5}
    var arr2 = [...]int{1, 2, 3, 4, 5, 6}
    var str = [5]string{3: "hello world", 4: "tom"}
    局部：
    a := [3]int{1, 2}           // 未初始化元素值为 0。
    b := [...]int{1, 2, 3, 4}   // 通过初始化值确定数组长度。
    c := [5]int{2: 100, 4: 200} // 使用索引号初始化元素。
    d := [...]struct {
        name string
        age  uint8
    }{
        {"user1", 10}, // 可省略元素类型。
        {"user2", 20}, // 别忘了最后一行的逗号。
    }
```

::: details 点击查看代码
```go
package main

import "fmt"

var arr0 [5]int = [5]int{1, 2, 3}
var arr1 = [5]int{1, 2, 3, 4, 5}
var arr2 = [...]int{1, 2, 3, 4, 5, 6}
var str = [5]string{3: "hello world", 4: "tom"}

func main() {
	a := [3]int{1, 2}
	b := [...]int{1, 2, 3, 4}
	c := [5]int{2: 100, 4: 200}
	d := [...]struct {
		name string
		age  uint8
	}{
		{"user1", 10},
		{"user2", 20},
	}
	fmt.Println(arr0, arr1, arr2, str)
	fmt.Println(a, b, c, d)
}
```

运行结果：

```go
[1 2 3 0 0] [1 2 3 4 5] [1 2 3 4 5 6] [   hello world tom]
[1 2 0] [1 2 3 4] [0 0 100 0 200] [{user1 10} {user2 20}]
```

:::

`多维数组`

```
全局
    var arr0 [5][3]int
    var arr1 [2][3]int = [...][3]int{{1, 2, 3}, {7, 8, 9}}
    局部：
    a := [2][3]int{{1, 2, 3}, {4, 5, 6}}
    b := [...][2]int{{1, 1}, {2, 2}, {3, 3}} // 第 2 纬度不能用 "..."。
```

::: details 点击查看代码

```go
package main

import "fmt"

var arr0 [5][3]int
var arr1 [2][3]int = [...][3]int{{1, 2, 3}, {7, 8, 9}}

func main() {
	a := [2][3]int{{1, 2, 3}, {4, 5, 6}}
	b := [...][2]int{{1, 1}, {2, 2}, {3, 3}}
	fmt.Println(arr0, arr1)
	fmt.Println(a, b)
}
```

运行结果：

```go
[[0 0 0] [0 0 0] [0 0 0] [0 0 0] [0 0 0]] [[1 2 3] [7 8 9]]
[[1 2 3] [4 5 6]] [[1 1] [2 2] [3 3]]
```

:::

> 内置函数len和cap都返回数组长度(元素数量)

```go
package main

func main() {
	a := [2]int{}
	println(len(a), cap(a))
}
```

运行结果：

```go
2 2
```

`多维数组遍历`

::: details 点击查看代码

```go
package main

import (
    "fmt"
)

func main() {

    var f [2][3]int = [...][3]int{{1, 2, 3}, {7, 8, 9}}

    for k1, v1 := range f {
        for k2, v2 := range v1 {
            fmt.Printf("(%d,%d)=%d ", k1, k2, v2)
        }
        fmt.Println()
    }
}
```

运行结果：

```go
(0,0)=1 (0,1)=2 (0,2)=3 
(1,0)=7 (1,1)=8 (1,2)=9
```

`数组拷贝和传参`

```go
package main

import "fmt"

func printArr(arr *[5]int) {
    arr[0] = 10
    for i, v := range arr {
        fmt.Println(i, v)
    }
}

func main() {
    var arr1 [5]int
    printArr(&arr1)
    fmt.Println(arr1)
    arr2 := [...]int{2, 4, 6, 8, 10}
    printArr(&arr2)
    fmt.Println(arr2)
}
```

运行结果：

```go
0 10
1 0
2 0
3 0
4 0
[10 0 0 0 0]
0 10
1 4
2 6
3 8
4 10
[10 4 6 8 10]
```

:::

::: tip

*和&的区别 :

& 是取地址符号 , 即取得某个变量的地址 , 如 ; &a
*是指针[运算符] , 可以表示一个变量是指针类型 , 也可以表示一个指针变量所指向的存储单元 , 也就是这个地址所存储的值。

:::

#### 数组练习

`求数组所有元素之和`

::: details 点击查看代码

```go
package main

import (
	"fmt"
	"math/rand"
	"time"
)

func sumArr(a [10]int) int {
	var sum int = 0
	for i := 0; i < len(a); i++ {
		sum += a[i]
		fmt.Printf("sum=%d\n", sum)
	}
	fmt.Printf("sum等于%d\n", sum)
	return sum
}

func main() {
	// 若想做一个真正的随机数，要种子
	// seed()种子默认是1
	//rand.Seed(1)
	rand.Seed(time.Now().UnixNano())
	var b [10]int
	rand.Seed(time.Now().UnixNano())
	fmt.Printf("b=%d\n", b)
	for i := 0; i < len(b); i++ {
		b[i] = rand.Intn(2)
		fmt.Printf("b等于%d\n", b[i])
	}
	sum := sumArr(b)
	fmt.Printf("sum= %d\n", sum)
}
```

运行结果：

```go
b=[0 0 0 0 0 0 0 0 0 0]
b等于0
b等于0
b等于0
b等于0
b等于1
b等于0
b等于1
b等于0
b等于0
b等于0
sum=0
sum=0
sum=0
sum=0
sum=1
sum=1
sum=2
sum=2
sum=2
sum=2
sum等于2
sum= 2
```

:::

## 切片Slice

> 需要说明，slice并不是数组或数组指针。它通过内部指针和相关属性引用数组片段，以实现变长方案。

::: tip

- 切片：切片是数组的一个引用，因此切片是引用类型。但自身是结构体，值拷贝传递。
- 切片的长度可以改变，因此，切片是一个可变的数组。
- 切片遍历方式和数组一样，可以用len()求长度。表示可用元素数量，读写操作不能超过该限制。
- cap可以求出slice最大扩张容量，不能超过数组限制。0 <= len(slice) <= len(array)，其中array是slice引用的数组。
- 切片的定义： var 变量名[] 类型，比如 var str []string var arr []int。
- 如果slice == nil，那么 len、cap结果都等于0

:::

### 创建切片的各种方式

::: details 点击查看代码

```go
package main

import "fmt"

func main() {
	//	1.声明切片
	var s1 []int
	if s1 == nil {
		fmt.Println("是空")
	} else {
		fmt.Println("不是空")
	}
	// 2.:=
	s2 := []int{}
	// 3.make()
	var s3 []int = make([]int, 0)
	fmt.Println(s1, s2, s3)
	//	4.初始化赋值
	var s4 []int = make([]int, 0, 0)
	fmt.Println(s4)
	s5 := []int{1, 2, 3}
	fmt.Println(s5)
	// 5.从数组切片
	arr := [5]int{1, 2, 3, 4, 5}
	var s6 []int
	// 6.前包后不包
	s6 = arr[1:4]
	fmt.Println(s6)
}
```

运行结果；

```go
是空
[] [] []
[]
[1 2 3]
[2 3 4]
```

:::

### 切片初始化

::: tip

| 操作            | 含义                                                         |
| --------------- | ------------------------------------------------------------ |
| s[n]            | 切片s中索引位置位n的项                                       |
| s[:]            | 从切片s的索引位置0到len(s)-1处获得的切片                     |
| s[low:]         | 从切片s的索引位置low到len(s)-1处所获的的切片                 |
| s[:hign]        | 从切片s的索引位置0到high处所获得的切片，len=high             |
| s[low:high]     | 从切片s的索引位置low到high处所获的的切片，len=high-low       |
| s[low:high:max] | 从切片s的索引位置low到high处所获得的切片，len=high-low，cap=max-low |
| len(s)          | 切片s的长度，总是<=cap(s)                                    |
| cap(s)          | 切片s的容量，总是>=len(s)                                    |

:::

::: details 点击查看代码

```go
package main

import "fmt"

var arr = [...]int{0, 1, 2, 3, 4, 5, 6, 7, 8, 9}
var slice0 []int = arr[2:8]
var slice1 []int = arr[0:6]        //	可以简写为 var slice []int = arr[:end]
var slice2 []int = arr[5:10]       // 可以简写为 var slice[]int = arr[start:]
var slice3 []int = arr[0:len(arr)] // var slice []int = arr[:]
var slice4 = arr[:len(arr)-1]      // 去掉切片的最后一个元素

func main() {
	fmt.Printf("全局变量：arr %v\n", arr)
	fmt.Printf("全局变量：slice0 %v\n", slice0)
	fmt.Printf("全局变量：slice1 %v\n", slice1)
	fmt.Printf("全局变量：slice2 %v\n", slice2)
	fmt.Printf("全局变量：slice3 %v\n", slice3)
	fmt.Printf("全局变量：slice4 %v\n", slice4)
	fmt.Printf("--------------------------------")
	arr2 := [...]int{9, 8, 7, 6, 5, 4, 3, 2, 1, 0}
	slice5 := arr[2:8]
	slice6 := arr[0:6]         // 可以简写为 slice := arr[:end]
	slice7 := arr[5:10]        // 可以简写为 slice := arr[start:]
	slice8 := arr[0:len(arr)]  // slice := arr[:]
	slice9 := arr[:len(arr)-1] // 去掉切片的最后一个元素
	fmt.Printf("局部变量: arr2 %v\n", arr2)
	fmt.Printf("局部变量: slice5 %v\n", slice5)
	fmt.Printf("局部变量: slice6 %v\n", slice6)
	fmt.Printf("局部变量: slice7 %v\n", slice7)
	fmt.Printf("局部变量: slice8 %v\n", slice8)
	fmt.Printf("局部变量: slice9 %v\n", slice9)
}
```

运行结果：

```go
全局变量：arr [0 1 2 3 4 5 6 7 8 9]
全局变量：slice0 [2 3 4 5 6 7]
全局变量：slice1 [0 1 2 3 4 5]
全局变量：slice2 [5 6 7 8 9]
全局变量：slice3 [0 1 2 3 4 5 6 7 8 9]
全局变量：slice4 [0 1 2 3 4 5 6 7 8]
--------------------------------
局部变量: arr2 [9 8 7 6 5 4 3 2 1 0]
局部变量: slice5 [2 3 4 5 6 7]
局部变量: slice6 [0 1 2 3 4 5]
局部变量: slice7 [5 6 7 8 9]
局部变量: slice8 [0 1 2 3 4 5 6 7 8 9]
局部变量: slice9 [0 1 2 3 4 5 6 7 8]
```

:::

### 通过make来创建切片

> make函数是Go的内置函数，它的作用时为slice、map或chan初始化并返回引用。make仅仅用于创建slice、map和channel，并返回它们的实例。

```go
var 切片名 []type = make([]type, len, [cap])
参数说明：
type 是数据类型
len 是大小
cap 是切片容量(容量必须>=长度)
slice  := make([]type, len)
slice  := make([]type, len, cap)
```

::: details 点击查看代码

```go
package main

import "fmt"

var slice0 []int = make([]int, 10)
var slice1 = make([]int, 10)
var slice2 = make([]int, 10, 10)

func main() {
	fmt.Printf("make全局slice0：%v\n", slice0)
	fmt.Printf("make全局slice1：%v\n", slice1)
	fmt.Printf("make全局slice2：%v\n", slice2)
	fmt.Println("---------------------------------")

	slice3 := make([]int, 10)
	slice4 := make([]int, 10)
	slice5 := make([]int, 10, 10)
	fmt.Printf("make全局slice3：%v\n", slice3)
	fmt.Printf("make全局slice4：%v\n", slice4)
	fmt.Printf("make全局slice5：%v\n", slice5)
}
```

运行结果:

```go
make全局slice0：[0 0 0 0 0 0 0 0 0 0]
make全局slice1：[0 0 0 0 0 0 0 0 0 0]
make全局slice2：[0 0 0 0 0 0 0 0 0 0]
---------------------------------
make全局slice3：[0 0 0 0 0 0 0 0 0 0]
make全局slice4：[0 0 0 0 0 0 0 0 0 0]
make全局slice5：[0 0 0 0 0 0 0 0 0 0]
```

:::

> 读写操作实际目标是底层数组，只需要注意索引号的差别

::: details 点击查看代码

```go
package main

import "fmt"

func main() {
	data := [...]int{0, 1, 2, 3, 4, 5}
	s := data[2:4]
	fmt.Printf("s=%d\n", s)
	s[0] += 100
	s[1] += 200
	fmt.Println(s)
	fmt.Println(data)
}
```

运行结果：

```go
s=[2 3]
[102 203]
[0 1 102 203 4 5]
```

> 可直接创建slice对象，自动分配底层数组。

```go
package main

import "fmt"

func main() {
	s1 := []int{0, 1, 2, 3, 8: 100} // 通过初始化表达结构，可使用索引号。
	fmt.Printf("s1等于%d，s1的长度为%d，s1的cap为:%d\n", s1, len(s1), cap(s1))
	s2 := make([]int, 6, 8) // 使用 make 创建，指定 len和cap值
	fmt.Printf("s2等于%d，s2的长度为%d，s2的cap为:%d\n", s2, len(s2), cap(s2))
	s3 := make([]int, 6) // 省略 cao，相当于 cap = len
	fmt.Printf("s3等于%d，s3的长度为%d，s3的cap为:%d\n", s3, len(s3), cap(s3))
}
```

运行结果:

```go
s1等于[0 1 2 3 0 0 0 0 100]，s1的长度为9，s1的cap为:9
s2等于[0 0 0 0 0 0]，s2的长度为6，s2的cap为:8
s3等于[0 0 0 0 0 0]，s3的长度为6，s3的cap为:6
```

> 使用make动态创建slice，避免了数组必须用常量做长度的麻烦。还可用指针直接访问底层数组，退化成普通数组操作。

```go
package main

import "fmt"

func main() {
	s := []int{0, 1, 2, 3}
	p := &s[2] // *int,获取底层数组元素指针
	*p += 100
	fmt.Println(s)
}
```

运行结果：

```go
[0 1 102 3]
```

> 至于`[][]T`,是指元素类型为[]T。

```go
package main

import (
    "fmt"
)

func main() {
    data := [][]int{
        []int{1, 2, 3},
        []int{100, 200},
        []int{11, 22, 33, 44},
    }
    fmt.Println(data)
}
```

运行结果：

```go
[[1 2 3] [100 200] [11 22 33 44]]
```

可直接修改struct array/slice成员。

```go
package main

import "fmt"

func main() {
	d := [5]struct {
		x int
	}{}
	d[1].x = 10
	d[2].x = 20
	fmt.Println(d)
	fmt.Printf("%p,%p\n", &d, &d[0])
}
```

运行结果：

```go
[{0} {10} {20} {0} {0}]
0xc0000aa060,0xc0000aa060
```

:::

### 用append内置函数操作切片(切片追加)

::: details 点击查看代码

```go
package main

import "fmt"

func main() {
	var a = []int{1, 2, 3}
	fmt.Printf("slice a : %v\n", a)

	var b = []int{4, 5, 6}
	fmt.Printf("slice b : %v\n", b)

	c := append(a, b...)
	fmt.Printf("slice c: %v\n", c)

	d := append(c, 7)
	fmt.Printf("slice d : %v\n", d)

	e := append(d, 8, 9, 10)
	fmt.Printf("slice e : %v\n", e)
}
```

运行结果：

```go
slice a : [1 2 3]
slice b : [4 5 6]
slice c: [1 2 3 4 5 6]
slice d : [1 2 3 4 5 6 7]
slice e : [1 2 3 4 5 6 7 8 9 10]
```

> append：向slice尾部添加数据，返回新的slice对象。

```go
package main

import "fmt"

func main() {
	s1 := make([]int, 0, 5)
	fmt.Printf("%p\n", &s1)

	s2 := append(s1, 1)
	fmt.Printf("%p\n", &s2)

	fmt.Println(s1, s2)
}
```

运行结果：

```go
0xc0000a4018
0xc0000a4030
[] [1]
```

:::

### 超出原slice.cap限制，就会重新分配底层数组，即便原数组并未填满

::: details 点击查看代码

```go
package main

import "fmt"

func main() {
	data := [...]int{0, 1, 2, 3, 4, 10: 0}
	s := data[:2:3]

	s = append(s, 100, 200)	// 一次 append两个值，超出 s.cap 限制

	fmt.Println(s, data)	// 重新分配底层数组，与原数组无关
	fmt.Println(&s[0], &data[0])	// 比对底层数组起始指针
}
```

运行结果：

```go
[0 1 100 200] [0 1 2 3 4 0 0 0 0 0 0]
0xc0000aa060 0xc00008c060
```

> 从输出结果可以看出，append后的s重新分配了底层数组，并复制数据。如果只追加一个值，则不会超过s.cap限制，也就不会重新分配。通常以2倍容量重新分配底层数组。在大批量添加数据时，建议一次性分配足够大的空间，以减少内存分配和数据复制开销。或初始化足够长的len属性，改用索引号进行操作。及时释放不再使用的slice对象，避免持有过期数组，造成GC无法回收。

:::

### slice中的cap重新分配规律

::: details 点击查看代码

```go
package main

import "fmt"

func main() {
	s := make([]int, 0, 1)
	c := cap(s)

	for i := 0; i < 50; i++ {
		s = append(s, i)
		if n := cap(s); n > c {
			fmt.Printf("cap: %d -> %d\n", c, n)
			c = n
		}
	}
}
```

运行结果：

```go
cap: 1 -> 2
cap: 2 -> 4
cap: 4 -> 8
cap: 8 -> 16
cap: 16 -> 32
cap: 32 -> 64
```

:::

### 切片拷贝

::: details 点击查看代码

```go
package main

import "fmt"

func main() {
	s1 := []int{1, 2, 3, 4, 5}
	fmt.Printf("slice s1 : %v\n", s1)

	s2 := make([]int, 10)
	fmt.Printf("slice s2 : %v\n", s2)

	copy(s2, s1)
	fmt.Printf("copied slice s1 : %v\n", s1)
	fmt.Printf("copied slice s2 : %v\n", s2)

	s3 := []int{1, 2, 3}
	fmt.Printf("slice s3 : %v\n", s3)

	s3 = append(s3, s2...)
	fmt.Printf("appended slice s3 : %v\n", s3)

	s3 = append(s3, 4, 5, 6)
	fmt.Printf("last slice s3 : %v\n", s3)
}
```

运行结果：

```go
slice s1 : [1 2 3 4 5]
slice s2 : [0 0 0 0 0 0 0 0 0 0]
copied slice s1 : [1 2 3 4 5]
copied slice s2 : [1 2 3 4 5 0 0 0 0 0]
slice s3 : [1 2 3]
appended slice s3 : [1 2 3 1 2 3 4 5 0 0 0 0 0]
last slice s3 : [1 2 3 1 2 3 4 5 0 0 0 0 0 4 5 6]
```

copy：函数copy在两个slice间复制数据，复制长度以len小的为准。两个slice可指向同一底层数组，允许元素区间重叠。

```go
package main

import "fmt"

func main() {
	data := [...]int{0, 1, 2, 3, 4, 5, 6, 7, 8, 9}
	fmt.Println("array data :", data)
	s1 := data[8:]
	s2 := data[:5]
	fmt.Printf("slice s1 : %v\n", s1)
	fmt.Printf("slice s2 : %v\n", s2)
	copy(s2, s1)
	fmt.Printf("copied slice s1 : %v\n", s1)
	fmt.Printf("copied slice s2 : %v\n", s2)
	fmt.Println("last array data : ", data)
}
```

运行结果：

```go
array data : [0 1 2 3 4 5 6 7 8 9]
slice s1 : [8 9]
slice s2 : [0 1 2 3 4]
copied slice s1 : [8 9]
copied slice s2 : [8 9 2 3 4]
last array data :  [8 9 2 3 4 5 6 7 8 9]
```

应及时将所需数据copy到较小slice，以便释放超大号底层数组内存。

:::

### slice遍历

::: details 点击查看代码

```go
package main

import "fmt"

func main() {
	data := [...]int{0, 1, 2, 3, 4, 5, 6, 7, 8, 9}
	slice := data[:]
	for index, value := range slice {
		fmt.Printf("inde : %v,value : %v\n", index, value)
	}
}
```

运行结果：

```go
inde : 0,value : 0
inde : 1,value : 1
inde : 2,value : 2
inde : 3,value : 3
inde : 4,value : 4
inde : 5,value : 5
inde : 6,value : 6
inde : 7,value : 7
inde : 8,value : 8
inde : 9,value : 9
```

:::

### 切片resize(调整大小)

::: details 点击查看代码

```go
package main

import "fmt"

func main() {
	var a = []int{1, 3, 4, 5}
	fmt.Printf("slice a : %v,len(a) : %v\n", a, len(a))
	b := a[1:2]
	fmt.Printf("slice b : %v,len(b): %v\n", b, len(b))
	c := b[0:3]
	fmt.Printf("slice c : %v,len(c) : %v\n", c, len(c))
}
```

运行结果：

```go
slice a : [1 3 4 5],len(a) : 4
slice b : [3],len(b): 1
slice c : [1 3 4],len(c) : 3
```

:::

### 字符串和切片

>string底层就是一个byte的数组，因此，也可以进行切片操作

::: details 点击查看代码

```go
package main

import "fmt"

func main() {
	str := "hello world"
	s1 := str[0:5]
	fmt.Println(s1)

	s2 := str[6:]
	fmt.Println(s2)
}
```

运行结果：

```go
hello
world
```

> string本身是不可变的，因此要改变string中字符。需要如下操作：英文字符串

```go
package main

import "fmt"

func main() {
	str := "hello world"
	s := []byte(str)
	s[6] = 'G'
	s = s[:8]
	s = append(s, '!')
	str = string(s)
	fmt.Println(str)
}
```

运行结果：

```go
hello Go!
```

:::

### 含有中文字符串

::: details 点击查看代码

```go
package main

import "fmt"

func main() {
	str := "你好，世界！hello world"
	s := []rune(str)
	s[3] = '够'
	s[4] = '浪'
	s[12] = 'g'
	s = s[:14]
	str = string(s)
	fmt.Println(str)
}
```

运行结果：

```go
你好，够浪！hello go
```

:::

## 指针

> 区别于C/C++中的指针，Go语言中的指针不能进行偏移和运算、是安全指针。

#### Go语言中的指针

> Go语言中的函数传参都是值拷贝，当我们想要修改某个变量的时候，我们可以创建一个指向该变量地址的指针变量。传递数据使用指针，而无需拷贝数据。类型指针不能进行偏移和运算。Go语言中的指针操作非常简单，只需要记住两个符号：`&`（取地址）和`*`（根据地址取值）

#### 指针地址和指针类型

> 每个变量在运行时都拥有一个地址，这个地址代表变量在内存中的位置。Go语言中使用&字符放在变量前面对变量进行"取地址"操作。Go语言中的值类型（`int、float、bool、string、array、struct`）都有对应的指针类型，如 `*int、*int64、*string`等

取变量指针的语法如下：

```go
ptr := &v    // v的类型为T
```

其中：

```go
v:代表被取地址的变量，类型为T
ptr:用于接收地址的变量，ptr的类型就为*T，称做T的指针类型。*代表指针
```

举个例子：

```go
package main

import "fmt"

func main() {
	a := 10
	b := &a
	fmt.Printf("a:%d ptr:%p\n", a, &a)
	fmt.Printf("b:%p type:%T\n", b, b)
	fmt.Println(&b)
}
```

运行结果：

```go
a:10 ptr:0xc0000b2008
b:0xc0000b2008 type:*int
0xc0000ac018
```

### 指针取值

> 对普通变量使用&操作符取地址后会获得这个变量的指针，然后可以对指针使用`*`操作，也就是指针取值。

```go
package main

import "fmt"

func main() {
	//指针取值
	a := 10
	b := &a	// 取变量a的地址，将指针保存到b中
	fmt.Printf("type of b: %T\n", b)
  c := *b	// 指针取值(根据指针去内存取值)
	fmt.Printf("type of c: %T\n", c)
	fmt.Printf("value of c: %v\n", c)
}
```

运行结果：

```go
type of b: *int
type of c: int
value of c: 10
```

总结：取地址操作符&和取值操作符`*`是一对互补操作符，`&`取出地址，`*`根据地址取出地址指向的值。

> 变量、指针地址、指针变量、取地址、取值的相互关系和特性如下：

- 对变量进行取地址(&)操作，可以获得这个变量的指针变量
- 指针变量的值是指针地址
- 对指针变量进行取值(*)操作，可以获得指针变量指向的原变量的值

指针传值示例：

```go
package main

import "fmt"

func modify1(x int) {
	x = 100
}

func modify2(x *int) {
	*x = 100
}

func main() {
	a := 10
	modify1(a)
	fmt.Println(a) // 10
	modify2(&a)
	fmt.Println(a) // 100
}
```

运行结果：

```go
10
100
```

### 空指针

- 当一个指针被定义后没有分配到任何变量时，它的值为nil
- 空指针的判断

```go
package main

import "fmt"

func main() {
	var p *string
	fmt.Printf("p的值是%v\n", p)
	if p != nil {
		fmt.Println("非空")
	} else {
		fmt.Println("空值")
	}
}
```

运行结果：

```go
p的值是<nil>
空值
```

### new和make

> new是一个内置的函数，它的函数签名如下：

```go
func new(Type) * Type
```

其中

- Type表示类型，new函数只接收一个参数，这个参数是一个类型
- *Type表示类型指针，new函数返回一个指向该类型内存地址的指针

> new函数不太常用，使用new函数得到的是一个类型的指针，并且该指针对应的值为该类型的零值。

```go
package main

import "fmt"

func main() {
	a := new(int)
	b := new(bool)
	fmt.Printf("%T\n", a)
	fmt.Printf("%T\n", b)
	fmt.Println(*a)
	fmt.Println(*b)
}
```

运行结果：

```go
*int
*bool
0
false
```

> make也是用于内存分配的，区别于new，它只用于slice，map以及chan的内存创建，而且它返回的类型就是这三个类型本身，而不是他们的指针类型，因为这三种类型就是引用类型，所以就没有必要返回他们的指针了。make函数的函数签名如下：

```go
func make(t Type, size ...IntegerType) Type
```

make函数是无可替代的，我们在使用slice、map以及channel的时候，都需要使用make进行初始化，然后才可以对它们进行操作。

```go
package main

import "fmt"

func main() {
	var b map[string]int
	b = make(map[string]int, 10)
	b["测试"] = 100
	fmt.Println(b)
}
```

运行结果：

```go
map[测试:100]
```

### new与make的区别

- 二者都是用来做内存分配的
- make只用于slice、map以及channel的初始化，返回的还是这三个引用类型的本身
- 而new用于类型的内存分配，并且内存对应为类型零值，返回的是指向类型的指针

### 指针小demo

```go
package main

import "fmt"

func main() {
	var a int
	fmt.Println(&a)
	var p *int
	p = &a
	*p = 20
	fmt.Println(a)
}
```

运行结果：

```go
0xc0000b2008
20
```

## Map

> map是一种无序的机遇key-value的数据结构，Go语言中的map是引用类型，必须初始化才能使用

### map定义

> Go语言中map的定义语法如下：

```go
map[KeyType]ValueType
```

其中

- KeyType：表示键的类型
- ValueType：表示键对应的值的类型

map类型的变量默认初始值为nil，需要使用make()函数来分配内存

```go
make(map[KeyType]ValueType, [cap])
```

其中cap表示map的容量，该参数虽然不是必须的，但是我们应该在初始化map的时候就为其指定一个合适的容量。

### map基本使用

> map中的数据都是成对出现的，map的基本使用如下：

```go
package main

import "fmt"

func main() {
	scoreMap := make(map[string]int, 8)
	scoreMap["张三"] = 90
	scoreMap["小明"] = 100
	fmt.Println(scoreMap)
	fmt.Println(scoreMap["小明"])
	fmt.Printf("type of a:%T\n", scoreMap)
}
```

运行结果：

```go
map[小明:100 张三:90]
100
type of a:map[string]int
```

map也支持在声明的时候填充元素，例如：

```go
package main

import "fmt"

func main() {
	userInfo := map[string]string{
		"username": "admin",
		"password": "12345",
	}
	fmt.Println(userInfo)
}
```

运行结果：

```go
map[password:12345 username:admin]
```

### 判断某个键是否存在

> Go语言中有个判断map中键是否存在的特殊写法，格式如下：

```go
value, ok := map[key]
```

举个例子：

::: details 点击查看代码

```go
package main

import "fmt"

func main() {
	scoreMap := make(map[string]int)
	scoreMap["张三"] = 90
	scoreMap["小明"] = 100
	// 如果key存在ok为true，v为对应的值；不存在ok为false，v为值类型的零值
	v, ok := scoreMap["张三"]
	if ok {
		fmt.Println(v)
	} else {
		fmt.Println("查无此人")
	}
}
```

运行结果：

```go
90
```

:::

### map遍历

> Go语言中使用for range遍历map

::: details 点击查看代码

```go
package main

import "fmt"

func main() {
	scoreMap := make(map[string]int)
	scoreMap["张三"] = 90
	scoreMap["小明"] = 100
	scoreMap["王五"] = 60
	for k, v := range scoreMap {
		fmt.Println(k, v)
	}
}
```

运行结果：

```go
张三 90
小明 100
王五 60
```

> 但我们只想遍历key的时候，可以按下面的写法：

```go
package main

import "fmt"

func main() {
	scoreMap := make(map[string]int)
	scoreMap["张三"] = 90
	scoreMap["小明"] = 100
	scoreMap["王五"] = 60
	for k := range scoreMap {
		fmt.Println(k)
	}
}
```

运行结果：

```go
小明
王五
张三
```

:::

> 注意：遍历map时的元素顺序与添加键值对的顺序无关

### 使用delete()函数删除键值对

> 使用delete()内建函数从map中删除一组键值对，delete()函数的格式如下：

```go
delete(map, key)
```

其中

- map：表示要删除值对的map
- key：表示要删除键值的键

举个例子：

::: details 点击查看代码

```go
package main

import "fmt"

func main() {
	scoreMap := make(map[string]int)
	scoreMap["张三"] = 90
	scoreMap["小明"] = 100
	scoreMap["王五"] = 60
	delete(scoreMap, "小明")
	for k, v := range scoreMap {
		fmt.Println(k, v)
	}
}
```

运行结果：

```go
王五 60
张三 90
```

:::

### 按照指定顺序遍历map

::: details 点击查看代码

```go
package main

import (
	"fmt"
	"math/rand"
	"sort"
	"time"
)

func main() {
	rand.Seed(time.Now().UnixNano()) // 初始化随机数种子
	var scoreMap = make(map[string]int, 10)
	for i := 0; i < 5; i++ {
		key := fmt.Sprintf("stu%02d ", i) // 生成stu开头的字符串
		value := rand.Intn(5)             // 生成0～99的随机数
		scoreMap[key] = value
	}
	// 取出map中的所有key存入切片keys
	var keys = make([]string, 0, 200)
	for key := range scoreMap {
		keys = append(keys, key)
	}
	// 对切片进行排序
	sort.Strings(keys)
	// 按照排序后的key遍历map
	for _, key := range keys {
		fmt.Println(scoreMap[key], key)
	}
}
```

运行结果：

```go
1 stu00 
4 stu01 
1 stu02 
0 stu03 
4 stu04 
```

:::

### 元素为map类型的切片

::: details 点击查看代码

```go
package main

import "fmt"

func main() {
	var mapSlice = make([]map[string]string, 3)
	for index, value := range mapSlice {
		fmt.Printf("index:%d value:%v\n", index, value)
	}
	fmt.Println("after init")
	// 对切片中的map元素进行初始化
	mapSlice[0] = make(map[string]string, 10)
	mapSlice[0]["name"] = "王五"
	mapSlice[0]["password"] = "123456"
	mapSlice[0]["addree"] = "红旗大街"
	for index, value := range mapSlice {
		fmt.Printf("index : %d value : %v\n", index, value)
	}
}
```

运行结果：

```go
index:0 value:map[]
index:1 value:map[]
index:2 value:map[]
after init
index : 0 value : map[addree:红旗大街 name:王五 password:123456]
index : 1 value : map[]
index : 2 value : map[]
```

:::

### 值为切片类型的map

::: details 点击查看代码

```go
package main

import "fmt"

func main() {
	var sliceMap = make(map[string][]string, 3)
	fmt.Println(sliceMap)
	fmt.Println("after init")
	key := "中国"
	value, ok := sliceMap[key]
	if !ok {
		value = make([]string, 0, 2)
	}
	value = append(value, "北京", "上海")
	sliceMap[key] = value
	fmt.Println(sliceMap)
}
```

运行结果：

```go
map[]
after init
map[中国:[北京 上海]]
```

:::

## 结构体

> Go语言中没有"类"的概念，也不支持"类"的继承等面向对象的概念。Go语言中通过结构体的内嵌再配合接口比面向对象具有更高的扩展性和灵活性。

### 类型别名和自定义类型

#### 自定义类型

> 在Go语言中有一些基本的数据类型，如string、整型、浮点型、布尔值等数据类型，Go语言中可以使用type关键字来定义自定义类型。
>
> 自定义类型是定义了一个全新的类型。我们可以基于内置的基本类型定义，也可以通过struct定义。

```go
//将MyInt定义为int类型
type MyInt int
```

通过Type关键字的定义，MyInt就是一种新的类型，它具有int的特性。

#### 类型别名

>类型别名规定：TypeAlias只是Type的别名，本质上TypeAlias与Type是同一个类型。

```go
type TypeAlias = Type
```

#### 类型定义和类型别名的区别

> 类型别名与类型定义表面上看只有一个等号的差异

```go
package main

import "fmt"

// 类型定义
type NewInt int

// 类型别名
type MyInt = int

func main() {
	var a NewInt
	var b MyInt
	fmt.Printf("type of a: %T\n", a) //	type of a: main.NewInt
	fmt.Printf("type of b: %T\n", b) //	type of b: int

}
```

结果显示a的类型是main.NewInt，表示main包下定义的NewInt类型。b的类型是int。MyInt类型只会在代码中存在，编译完成时并不会有MyInt类型。

### 结构体

> Go语言中的基础数据类型可以表示一些事物的基本属性，但是当我们想表达一个事物的全部或部分属性时，这时候再用单一的基本数据类型明显就无法满足需求了，Go语言提供了一种自定义数据类型，可以封装多个基本数据类型，这种数据类型叫结构体。也就是我们可以通过struct来定义自己的类型
>
> Go语言中通过struct来实现面向对象。

#### 结构体的定义

> 使用type和struct关键字来定义结构体

```go
type 类型名 struct {
        字段名 字段类型
        字段名 字段类型
        …
}
```

其中

- 类型名：标识自定义结构体的名称，在同一个包内不能重复
- 字段名：标识结构体字段名。结构体中的字段名必须唯一
- 字段类型：表示结构体字段的具体类型

举个例子：我们定义一个Person结构体

```go
type person struct {
        name string
        city string
        age  int8
}
```

同样类型的字段也可以写在一行：

```go
type person1 struct {
        name, city string
        age        int8
}
```

这样我们就拥有了一个person的自定义类型，它有name、city、age三个字段，分别表示姓名、城市和年龄。这样我们使用这个person结构体就能够很方便的在程序中表示和存储人信息了。

#### 结构体实例化

> 只有当结构体实例化时，才会真正地分配内存。也就是必须实例化后才能使用结构体的字段。
>
> 结构体本身也是一种类型，我们可以像声明内置类型一样使用var关键字声明结构体类型。

```go
var 结构体实例 结构体类型
```

#### 基本实例化

::: details 点击查看代码

```go
package main

import "fmt"

type person struct {
	name string
	city string
	age  int8
}

func main() {
	var p1 person
	p1.name = "小明"
	p1.city = "深圳"
	p1.age = 18
	fmt.Printf("p1=%v\n", p1)
	fmt.Printf("p1=%#v\n", p1)
}
```

运行结果：

```go
p1={小明 深圳 18}
p1=main.person{name:"小明", city:"深圳", age:18}
```

:::

#### 匿名结构体

> 在定义一些临时数据结构等场景下还可以使用匿名结构体

::: details 点击查看代码

```go
package main

import "fmt"

func main() {
	var user struct {
		Name string
		Age  int
	}
	user.Name = "小明"
	user.Age = 18
	fmt.Printf("%#v\n", user)
}
```

运行结果：

```go
struct { Name string; Age int }{Name:"小明", Age:18}
```

:::

#### 创建指针类型结构体

> 我们还可以通过使用new关键字对结构体进行实例化，得到的是结构体的地址。

```go
package main

import "fmt"

type person struct {
	name string
	city string
	age  int8
}

func main() {
	var p2 = new(person)
	fmt.Printf("%T\n", p2)
	fmt.Printf("p2=%#v\n", p2)
}
```

运行结果：

```go
*main.person
p2=&main.person{name:"", city:"", age:0}
```

从打印结果中我们可以看出p2是一个结构体指针

需要注意的是在Go语言中支持对结构体指针直接使用来访问结构体的成员。

```go
package main

import "fmt"

type person struct {
	name string
	city string
	age  int8
}

func main() {
	var p2 = new(person)
	p2.name = "测试"
	p2.age = 18
	p2.city = "北京"
	fmt.Printf("p2=%#v\n", p2)
}
```

运行结果：

```go
p2=&main.person{name:"测试", city:"北京", age:18}
```

#### 取结构体的地址实例化

> 使用&对结构体进行取地址操作相当于对该结构体类型进行了一次new实例化操作。

::: details 点击查看代码

```go
package main

import "fmt"

type person struct {
	name string
	city string
	age  int8
}

func main() {
	p3 := &person{}
	fmt.Printf("%T\n", p3)
	fmt.Printf("p3=%#v\n", p3)
	p3.name = "博客"
	p3.age = 30
	p3.city = "深圳"
	fmt.Printf("p3=%#v\n", p3)
}
```

运行结果：

```go
*main.person
p3=&main.person{name:"", city:"", age:0}
p3=&main.person{name:"博客", city:"深圳", age:30}
```

P3.name = "博客"其实在底层是(*p3).name = "博客"，这是Go语言帮我们实现的语法糖。

:::

#### 结构体初始化

```go
package main

import "fmt"

type person struct {
	name string
	city string
	age  int8
}

func main() {
	var p4 person
	fmt.Printf("p4=%#v\n", p4)
}
```

运行结果：

```go
p4=main.person{name:"", city:"", age:0}
```

#### 使用键值对初始化

> 使用键值对对结构体进行初始化时，键对应结构体的字段，值对应该字段的初始值。

```go
package main

import "fmt"

type person struct {
	name string
	city string
	age  int8
}

func main() {
	p5 := person{
		name: "小明",
		city: "北京",
		age:  18,
	}
	fmt.Printf("p5=%#v\n", p5)
}
```

运行结果：

```go
p5=main.person{name:"小明", city:"北京", age:18}
```

> 也可以对结构体指针进行键值对初始化，例如:

```go
package main

import "fmt"

type person struct {
	name string
	city string
	age  int8
}

func main() {
	p6 := &person{
		name: "小明",
		city: "深圳",
		age:  18,
	}
	fmt.Printf("p6=%#v\n", p6)
}
```

运行结果：

```go
p6=&main.person{name:"小明", city:"深圳", age:18}
```

当某些字段没有初始值的时候，该字段可以不写。此时，没有指定初始值的字段的值就是该字段类型的零值。

```go
package main

import "fmt"

type person struct {
	name string
	city string
	age  int8
}

func main() {
	p7 := &person{
		city: "深圳",
	}
	fmt.Printf("p7=%#v\n", p7)
}
```

运行结果：

```go
p7=&main.person{name:"", city:"深圳", age:0}
```

#### 使用值的列表初始化

> 初始化结构体的时候可以简写，也就是初始化的时候不写键，直接写值：

```go
package main

import "fmt"

type person struct {
	name string
	city string
	age  int8
}

func main() {
	p8 := &person{
		"小明",
		"深圳",
		18,
	}
	fmt.Printf("p8=%#v\n", p8)
}
```

运行结果：

```go
p8=&main.person{name:"小明", city:"深圳", age:18}
```

使用这种格式初始化时，需要注意：

- 必须初始化结构体的所有字段
- 初始值的填充顺序必须与字段在结构体中的声明顺序一致
- 该方式不能和键值初始化方法混用

#### 结构体内存布局

```go
package main

import "fmt"

type person struct {
	name string
	city string
	age  int8
}

func main() {
	type test struct {
		a int8
		b int8
		c int8
		d int8
	}
	n := test{
		1, 2, 3, 4,
	}
	fmt.Printf("n.a %p\n", &n.a)
	fmt.Printf("n.b %p\n", &n.b)
	fmt.Printf("n.c %p\n", &n.c)
	fmt.Printf("n.d %p\n", &n.d)
}
```

运行结果：

```go
n.a 0xc00001c0a4
n.b 0xc00001c0a5
n.c 0xc00001c0a6
n.d 0xc00001c0a7\
```

#### 构造函数

>Go语言的结构体没有构造函数，我们可以自己实现。例如：下方的代码就实现了一个person的构造函数。因为struct的值类型，如果结构体比较复杂的话，值拷贝性能开销会比较大，所以该构造函数返回的是结构体指针类型。

```go
package main

func newPerson(name, city string, age int8) *person {
	return &person{
		name: name,
		city: city,
		age:  age,
	}
}
```

#### 方法和接受者

> Go语言中的方法是一种作用于特定类型变量的函数。这种特定类型变量叫做接受者。接受者的概念就类似于其他语言中的this或者self。

方法的定义格式如下：

```go
func (接收者变量 接收者类型) 方法名(参数列表) (返回参数) {
  函数体
}
```

其中

- 接受者变量：接受者中的参数变量名在命名时，官方建议使用接受者类型名的第一个小写字母，而不是self、this之类的命名。
- 接受者类型：接受者类型和参数类型类似，可以是指针类型和非指针类型。
- 方法名、参数列表、返回参数：具体格式与函数定义相同。

举个例子：

```go
package main

import "fmt"

type Person struct {
	name string
	age  int8
}

func NewPerson(name string, age int8) *Person {
	return &Person{
		name: name,
		age:  age,
	}
}

func (p Person) Drem() {
	fmt.Printf("%s的梦想是学好go语言！\n", p.name)
}

func main() {
	p1 := NewPerson("小明", 25)
	p1.Drem()
}
```

运行结果：

```go
小明的梦想是学好go语言！
```

方法与函数的区别是，函数不属于任何类型，方法属于特定的类型。

#### 指针类型的接收者

>指针类型的接收者由一个结构体的指针组成，由于指针的特性，调用方法时修改接受者指针的任意成员变量，在方法结束后，修改都是有效的。这种方式就十分接近于其他语言中面向对象中的this或者self。例如我们为Person添加一个SetAge方法，来修改实例变量的年龄。

```go
package main

import "fmt"

type Person struct {
   name string
   age  int8
}

func NewPerson(name string, age int8) *Person {
   return &Person{
      name: name,
      age:  age,
   }
}

func (p *Person) SetAge(newAge int8) {
   p.age = newAge
}

func main() {
   p1 := NewPerson("小明", 25)
   fmt.Println(p1.age)
   p1.SetAge(30)
   fmt.Println(p1.age)
}
```

运行结果：

```go
25
30
```

#### 值类型的接收者

> 当方法作用于值类型接收者时，Go语言会在代码运行时将接收者的值复制一份，在值类型接收者的方法中可以获取接收者的成员值，但修改操作只是针对副本，无法修改接收者变量本身。

```go
package main

import "fmt"

type Person struct {
	name string
	age  int8
}

func NewPerson(name string, age int8) *Person {
	return &Person{
		name: name,
		age:  age,
	}
}

func (p Person) Drem() {
	fmt.Printf("%s的梦想是学好go语言！\n", p.name)
}

func (p *Person) SetAge(newAge int8) {
	p.age = newAge
}

func (p Person) SetAge2(newAge int8) {
	p.age = newAge
}

func main() {
	p1 := NewPerson("小明", 25)
	p1.Drem()
	fmt.Println(p1.age)	// 25
	//p1.SetAge(30)
    p1.SetAge2(30)	// (*p1).SetAge2(30)
	fmt.Println(p1.age)	// 25
}
```

运行结果：

```go
小明的梦想是学好go语言！
25
25
```

#### 什么时候应该使用指针类型接收者

- 需要修改接收者中的值
- 接收者是拷贝代价比较大的大对象
- 保证一致性，如果有某个方法使用了指针接收者，那么其他方法也应该使用指针接收者

#### 任意类型添加方法

> 在Go语言中，接收的类型可以是任意类型，不仅仅是结构体，任何类型都可以拥有方法。举个例子，我们基于内置的int类型使用type关键字可以定义新的自定义类型，然后为我们的自定义类型添加方法。

```go
package main

import "fmt"

type MyInt int

func (m MyInt) SayHello() {
	fmt.Println("Hello,我是一个int。")
}
func main() {
	var m1 MyInt
	m1.SayHello()
	m1 = 100
	fmt.Printf("%#v %T\n", m1, m1)
}
```

运行结果：

```go
Hello,我是一个int。
100 main.MyInt
```

::: tip

非本地类型不能定义方法，也就是说我们不能给别的包的类型定义方法。

:::

#### 结构体的匿名字段

> 结构体允许其成员字段在声明时没有字段名而只有类型，这种没有名字的字段就称为匿名字段。

```go
package main

import "fmt"

type Person struct {
	string
	int
}

func main() {
	p1 := Person{
		"sakura.daydayupran.top",
		18,
	}
	fmt.Printf("%#v\n", p1)
	fmt.Println(p1.string, p1.int)
}
```

运行结果：

```go
main.Person{string:"sakura.daydayupran.top", int:18}
sakura.daydayupran.top 18
```

匿名字段默认采用类型名作为字段名，结构体要求各字段名称必须唯一，因此一个结构体中同种类型的匿名字段只能有一个。

#### 嵌套结构体

> 一个结构体中可以嵌套包含另一个结构体或结构体指针。

```go
package main

import "fmt"

type Address struct {
	Province string
	City     string
}

type User struct {
	Name    string
	Gender  string
	Address Address
}

func main() {
	user1 := User{
		Name:   "小明",
		Gender: "男",
		Address: Address{
			Province: "广东",
			City:     "深圳",
		},
	}
	fmt.Printf("user1=%#v\n", user1)
}
```

运行结果：

```go
user1=main.User{Name:"小明", Gender:"男", Address:main.Address{Province:"广东", City:"深圳"}}
```

#### 嵌套匿名结构体

```go
package main

import "fmt"

type Address struct {
	Province string
	City     string
}

type User struct {
	Nmae   string
	Gender string
	Address
}

func main() {
	var user2 User
	user2.Nmae = "小明"
	user2.Gender = "男"
	user2.Address.Province = "广东"
	user2.City = "深圳"
	fmt.Printf("user2=%#v\n", user2)
}
```

运行结果：

```go
user2=main.User{Nmae:"小明", Gender:"男", Address:main.Address{Province:"广东", City:"深圳"}}
```

当访问结构体成员时会先在结构体中查找该字段，找不到再去匿名结构体中查找。

#### 嵌套结构体的字段名冲突

>嵌套结构体内部可能存在相同的字段名。这个时候为了避免歧义需要指定具体的内嵌结构体的字段。

```go
package main

import "fmt"

type Address struct {
	Province   string
	City       string
	CreateTime string
}

type Email struct {
	Account     string
	CreateTieme string
}

type User struct {
	Name   string
	Gender string
	Address
	Email
}

func main() {
	var user3 User
	user3.Name = "小明"
	user3.Gender = "男"
	user3.Address.CreateTime = "2000" // 指定Address结构体中的CreateTime
	user3.Email.CreateTieme = "2000"  // 指定Emial结构体中的CreateTime
	fmt.Printf("user3=%#v\n", user3)
}
```

运行结果：

```go
user3=main.User{Name:"小明", Gender:"男", Address:main.Address{Province:"", City:"", CreateTime:00"}, Email:main.Email{Account:"", CreateTieme:"2000"}}
```

#### 结构体的"继承"

> Go语言中使用结构体也可以实现其他编程语言中面向对象的继承。

```go
package main

import "fmt"

type Animal struct {
	name string
}

func (a *Animal) move() {
	fmt.Printf("%s会动！\n", a.name)
}

type Dog struct {
	Feet int8
	*Animal
}

func (d *Dog) wang() {
	fmt.Printf("%s会汪汪汪～\n", d.name)
}
func main() {
	d1 := &Dog{
		Feet: 4,
		Animal: &Animal{
			name: "小白",
		},
	}
	d1.wang()
	d1.move()
}
```

运行结果：

```go
小白会汪汪汪～
小白会动！
```

#### 结构体字段的可见性

> 结构体中字段大写开头表示可公开访问，小写表示私有(仅在定义当前结构体的包中可访问)。

#### 结构体与JSON序列化

> JSON是一种轻量级的数据交换格式。易于人阅读和编写。同时也易于机器解析和生成。JSON键值对是用来保存JS对象的一种方式，键/值对组合中的键名写在前面并用双引号`""`包裹，使用冒号`:`分割，然后紧接着`；`多个键值之间可以使用英文`,`分割

```go
package main

import (
	"encoding/json"
	"fmt"
)

type Student struct {
	ID     int
	Gender string
	Name   string
}

type Class struct {
	Titile  string
	Student []*Student
}

func main() {
	c := &Class{
		Titile:  "101",
		Student: make([]*Student, 0, 200),
	}
	for i := 0; i < 10; i++ {
		stu := &Student{
			Name:   fmt.Sprintf("stu%02d", i),
			Gender: "男",
			ID:     i,
		}
		c.Student = append(append(c.Student, stu))
	}
	// JSON序列化：结构体-->JSON格式的字符串
	data, err := json.Marshal(c)
	if err != nil {
		fmt.Println("json marshal failed")
		return
	}
	fmt.Printf("json:%s\n", data)
	str := `{"Title":"101","Students":
[{"ID":0,"Gender":"男","Name":"stu00"},
{"ID":1,"Gender":"男","Name":"stu01"},
"ID":2,"Gender":"男","Name":"stu02"},
{"ID":3,"Gender":"男","Name":"stu03"},
{"ID":4,"Gender":"男","Name":"stu04"},
{"ID":5,"Gender":"男","Name":"stu05"},
{"ID":6,"Gender":"男","Name":"stu06"},
{"ID":7,"Gender":"男","Name":"stu07"},
{"ID":8,"Gender":"男","Name":"stu08"},
{"ID":9,"Gender":"男","Name":"stu09"}]}`
	c1 := &Class{}
	err = json.Unmarshal([]byte(str), c1)
	if err != nil {
		fmt.Println("json unmarshal failed1")
		return
	}
	fmt.Printf("%#v\n", c1)
}
```

运行结果：

```go
json:{"Titile":"101","Student":[{"ID":0,"Gender":"男","Name":"stu00"},{"ID":1,"Gender":"男","Nam:"stu01"},{"ID":2,"Gender":"男","Name":"stu02"},{"ID":3,"Gender":"男","Name":"stu03"},{"ID":4,"Gder":"男","Name":"stu04"},{"ID":5,"Gender":"男","Name":"stu05"},{"ID":6,"Gender":"男","Name":"st"},{"ID":7,"Gender":"男","Name":"stu07"},{"ID":8,"Gender":"男","Name":"stu08"},{"ID":9,"Gender":","Name":"stu09"}]}
json unmarshal failed1
```

#### 结构体标签（Tag）

> Tag是结构体的元信息，可以在运行的时候通过反射的机制读取出来。
>
> Tag在结构体字段的后方定义，由一方反引号包裹起来

```go
`key1:"value1" key2:"value2"`
```

结构体标签由一个或多个键值对组成。键与值使用冒号分隔，值用双引号扩起来。键值对之间使用一个空格分隔。请务必注意：`为结构体编写Tag时，必须严格遵守键值对的规则。结构体标签的解析代码的容错能力很差，一旦格式写错，编译和运行时都不会提示任何错误，通过反射也无法正确取值。例如不要在key和value之间添加空格`

例如我们为Student结构体的每个字段定义json序列化时使用的Tag：

```go
package main

import (
	"encoding/json"
	"fmt"
)

type Student struct {
	ID     int `json:"id"`
	Gender string
	name   string
}

func main() {
	s1 := Student{
		ID:     1,
		Gender: "男",
		name:   "小明",
	}
	data, err := json.Marshal(s1)
	if err != nil {
		fmt.Println("json marshal failed!")
		return
	}
	fmt.Printf("json str:%s\n", data)
}
```

运行结果：

```go
json str:{"id":1,"Gender":"男"}
```

#### 删除map类型的结构体

```go
package main

import "fmt"

type student struct {
	id   int
	name string
	age  int
}

func main() {
	ce := make(map[int]student)
	ce[1] = student{1, "小明", 22}
	ce[2] = student{2, "小红", 23}
	fmt.Println(ce)
	delete(ce, 2)
	fmt.Println(ce)
}
```

运行结果：

```go
map[1:{1 小明 22} 2:{2 小红 23}]
map[1:{1 小明 22}]
```

#### 实现map有序输出采用sort

```go
package main

import (
	"fmt"
	"sort"
)

func main() {
	map1 := make(map[int]string, 5)
	map1[1] = "www.topgoer.com"
	map1[2] = "rpc.topgoer.com"
	map1[5] = "ceshi"
	map1[3] = "xiaohong"
	map1[4] = "xiaohuang"
	sli := []int{}
	for k, _ := range map1 {
		sli = append(sli, k)
	}
	sort.Ints(sli)
	for i := 0; i < len(map1); i++ {
		fmt.Println(map1[sli[i]])
	}
}
```

运行结果：

```go
www.topgoer.com
rpc.topgoer.com
xiaohong
xiaohuang
ceshi
```

## 流程控制

### Go语言条件语句：

> 条件语句需要开发者通过指定一个或多个条件，并通过测试条件是否为true来决定是否执行指定语句，并在条件为false的情况下执行另外的语句。

#### if语句

> 由一个布尔表达式后紧跟一个或多个语句组成

- 可省略条件表达式括号
- 持初始化语句，可定义代码快局部变量
- 代码快左 括号必须在条件表达式尾部

```go
if 布尔表达式 {
  /* 在布尔表达式为 true 时执行 */
}
```

if在布尔表达式为true时，其后紧跟的语句快执行，如果为false则不执行。

::: tip
不支持三元操作符(三目运算符) "a > b ? a : b"
:::

举个例子：

```go
package main

import "fmt"

func main() {
	var a int = 10
	if a < 20 {
		fmt.Printf("a 小于20 \n")
	}
	fmt.Printf("a 的值为: %d\n", a)
}
```

运行结果：

```go
a 小于20 
a 的值为: 10
```

#### If...else 

> 语句if语句后可以使用可选的else语句，else语句中的表达式在布尔表达式为false时执行。

语法：

```go
if 布尔表达式 {
   /* 在布尔表达式为 true 时执行 */
} else {
  /* 在布尔表达式为 false 时执行 */
}
```

if 在布尔表达式为true时，其后紧跟的语句快执行，如果为false则执行else语句快。

举个例子：

```go
package main

import "fmt"

func main() {
	var a int = 100
	if a < 20 {
		fmt.Printf("a 小于20\n")
	} else {
		fmt.Printf("a 不小于 20\n")
	}
	fmt.Printf("a 的值为: %d\n", a)
}
```

运行结果：

```go
a 不小于 20
a 的值为: 100
```

#### If嵌套语句

> 你可以在if或else if 语句中嵌入一个或多个if或else if语句

语法：

```go
if 布尔表达式 1 {
   /* 在布尔表达式 1 为 true 时执行 */
   if 布尔表达式 2 {
      /* 在布尔表达式 2 为 true 时执行 */
   }
}
```

你可以同样的方法在if语句中嵌套else if...else语句

举个例子：

```go
package main

import "fmt"

func main() {
	var a int = 100
	var b int = 200
	if a == 100 {
    /* if 条件语句为 true 执行 */
		if b == 200 {
      /* if 条件语句为 true 执行 */
			fmt.Printf("a 的值为 100，b 的值为 200\n")
		}
	}
	fmt.Printf("a 的值为： %d\n", a)
	fmt.Printf("b 的值为： %d\n", b)
}
```

运行结果：

```go
a 的值为 100，b 的值为 200
a 的值为： 100
b 的值为： 200
```

### 条件语句switch

#### switch语句

> switch语句用于基于不同条件执行不同动作，每一个case分支都是唯一的，从上直下逐一测试，直到匹配为止。Go switch分支表达式可以是任意类型，不限于常量。可省略break，默认自动终止。

语法

```go
switch var1 {
    case val1:
        ...
    case val2:
        ...
    default:
        ...
}
```

变量`val1`可以是任何类型，而`val1`和`val2`则可以是同类型的任意值。类型不被局限于常量或整数，但必须是相同的类型；或者最终结果为相同的类型；或者最终结果为相同类型的表达式。

举个例子：

```go
package main

import "fmt"

func main() {
	/*定义局部变量*/
	var grade string = "B"
	var marks int = 60

	switch marks {
	case 90:
		grade = "A"
	case 80:
		grade = "B"
	case 70:
		grade = "C"
	case 60:
		grade = "D"
	case 50:
		grade = "E"
	default:
		grade = "F"
	}
	switch {
	case grade == "A":
		fmt.Printf("优秀!\n")
	case grade == "B", grade == "C":
		fmt.Printf("良好!\n")
	case grade == "D":
		fmt.Printf("及格!\n")
	case grade == "E":
		fmt.Printf("不及格!\n")
	default:
		fmt.Printf("差\n")
	}
	fmt.Printf("你的等级是 %s\n", grade)
}
```

运行结果：

```go
及格!
你的等级是 D
```

### 条件语句select

#### select语句

> select语句类似于switch语句，但是select会随机执行一个可运行的case。如果没有case可运行，它将阻塞，直到有case可运行。
>
> select 是Go中一个控制结构，类似于用于通信的switch语句。每个case必须是一个通信操作，要么是发送要么是接收。select随机执行一个可运行的case。如果没有case可运行，它将阻塞，直到有case可运行。一个默认的字句应该总是可运行的。

语法：

```go
select {
    case communication clause  :
       statement(s);      
    case communication clause  :
       statement(s);
    /* 你可以定义任意数量的 case */
    default : /* 可选 */
       statement(s);
}
```

其中：

- 每个case都必须是一个通信

- 所有channel表达式都会被求值

- 所有被发送的表达式都会被求值

- 如果任意某个通信可以进行，它就执行；其他被忽略

- 如果有多个case都可以运行，Select会随机公平地选出一个执行。其他不会执行

  否则：

  如果有default子句，则执行该语句。

  没有default子句，select将阻塞，直到某个通信可运行；Go不会重新对channel或值进行求值。

举个例子：

```go
package main

import "fmt"

func main() {
	var c1, c2, c3 chan int
	var i1, i2 int
	select {
      case i1 = <-c1:
        fmt.Printf("received ", i1, " from c1\n")
      case c2 <- i2:
        fmt.Printf("sent ", i2, " to c2\n")
      case i3, ok := (<-c3):
        if ok {
          fmt.Printf("received", i3, " from c3\n")
        } else {
          fmt.Printf("c3 is closed\n")
        }
      default:
        fmt.Printf("no communication\n")
	}
}
```

运行结果：

```go
no communication
```

select可以监听channel的数据流动

select的用法与switch语法非常相似，由select开始的一个新的选择块，每个选择条件由case语句来描述

与switch语句可以选择任何使用相等比较的条件相比，select由比较多的限制，其中最大的一条限制就是每个case语句里必须是一个IO操作

```go
select { //不停的在这里检测
    case <-chanl : //检测有没有数据可以读
    //如果chanl成功读取到数据，则进行该case处理语句
    case chan2 <- 1 : //检测有没有可以写
    //如果成功向chan2写入数据，则进行该case处理语句


    //假如没有default，那么在以上两个条件都不成立的情况下，就会在此阻塞//一般default会不写在里面，select中的default子句总是可运行的，因为会很消耗CPU资源
    default:
    //如果以上都没有符合条件，那么则进行default处理流程
    }
```

在一个select语句中，Go会按顺序从头到尾评估每一个发送和接收的语句。

#### Golang select的使用及典型用法

> select是Go中的一个控制结构，类似于switch语句，用于处理异步IO操作。
>
> select会监听case语句中channel的读写操作，当case中channel读写操作为非阻塞状态时，将会触发相应的动作。select中的case语句必须是一个channel操作。
>
> select中的default子句总是可运行的
>
> 如果多个case都可以运行，select会随机公平地选出一个执行，其他不会执行。
>
> 如果没有可运行的case语句，且有default语句，那么就会执行default的动作。
>
> 如果没有可运行的case语句，且没有default语句，select将阻塞，直到某个case通行可以运行。

举个例子：

```go
package main

import "fmt"

func main() {
	var c1, c2, c3 chan int
	var i1, i2 int
	select {
	case i1 = <-c1:
		fmt.Printf("received", i1, "from c1\n")
	case c2 <- i2:
		fmt.Printf("sent", i2, "to c2\n")
	case i3, ok := (<-c3):
		if ok {
			fmt.Printf("received", i3, "from c3\n")
		} else {
			fmt.Printf("c3 is closed\n")
		}
	default:
		fmt.Printf("no communication\n")
	}
}
```

运行结果：

```go
no communication
```

### 循环语句for

> for循环是一个循环控制结构，可以执行指定次数的循环

语法：

```go
for init; condition; post { }
for condition { }
for { }
```

其中：

- init ：一般为赋值表达式，给控制变量赋初值；
- condition：关系表达式或逻辑表达式，循环控制条件；
- post：一般为赋值表达式，给控制变量增量或减量。
- for语句执行过程如下：
  - 先对表达式 init 赋初值；
  - 判别赋值表达式`init`是否满足给定`condition`条件，若其值为真，满足循环条件，则执行循环体内语句，然后执行`post`，进入二次循环，再判别`condition`；否则判断`condition`的值为假，不满足条件，就终止`for`循环，执行循环体外语句。

```go
s := "abc"

for i, n := 0, len(s); i < n; i++ { // 常见的 for 循环，支持初始化语句。
    println(s[i])
}
```

举个例子：

```go
package main

func length(s string) int {
	println("call length.")
	return len(s)
}

func main() {
	s := "abc"
	for i, n := 0, length(s); i < n; i++ { // 避免多次调用 length 函数。
		println(i, s[i])
	}
}
```

运行结果：

```go
call length.
0 97
1 98
2 99
```

实例：

```go
package main

import "fmt"

func main() {
	var b int = 15
	var a int
	numbers := [6]int{1, 2, 3, 5}

	for a := 0; a < 10; a++ {
		fmt.Printf("a的值为：%d\n", a)
	}
	for a < b {
		a++
		fmt.Printf("a的值为：%d\n", a)
	}
	for i, x := range numbers {
		fmt.Printf("第 %d 位 x的值 = %d\n", i, x)
	}
}
```

运行结果：

```go
a的值为：0
a的值为：1
a的值为：2
a的值为：3
a的值为：4
a的值为：5
a的值为：6
a的值为：7
a的值为：8
a的值为：9
a的值为：1
a的值为：2
a的值为：3
a的值为：4
a的值为：5
a的值为：6
a的值为：7
a的值为：8
a的值为：9
a的值为：10
a的值为：11
a的值为：12
a的值为：13
a的值为：14
a的值为：15
第 0 位 x的值 = 1
第 1 位 x的值 = 2
第 2 位 x的值 = 3
第 3 位 x的值 = 5
第 4 位 x的值 = 0
第 5 位 x的值 = 0
```

#### 循环嵌套

> 在for循环中嵌套一个或多个for循环

语法

```go
for [condition |  ( init; condition; increment ) | Range]
{
   for [condition |  ( init; condition; increment ) | Range]
   {
      statement(s)
   }
   statement(s)
}
```

实例：

```go
package main

import "fmt"

func main() {
  /* 定义局部变量 */
	var i, j int
	for i = 2; i < 100; i++ {
		for j = 2; j < (i / j); j++ {
			if i%j == 0 {
				break
			}
		}
		if j > (i / j) {
			fmt.Printf("%d 是素数\n", i)
		}
	}
}
```

运行结果：

```go
2 是素数
3 是素数
7 是素数
13 是素数
23 是素数
31 是素数
43 是素数
47 是素数
59 是素数
61 是素数
73 是素数
79 是素数
97 是素数
```

#### 死循环

> 如果循环中条件语句永远不为false则会进入无限循环，我们可以通过for循环语句中设置一个条件表达式来执行无限循环

```go
package main

import "fmt"

func main() {
    for true  {
        fmt.Printf("这是无限循环。\n");
    }
}
```

### 循环语句range

> Golang range类似迭代器操作，返回（索引，值）或（键、值）
>
> for 循环的range格式可以对 slice、map、数组、字符串等进行迭代循环。

```go
for key, value := range oldMap {
    newMap[key] = value
}
```

可以忽略不想要的值，或`"_"`这个特殊变量。

```go
package main

func main() {
    s := "abc"
    // 忽略 2nd value，支持 string/array/slice/map。
    for i := range s {
		println("s等于：", s[i])
    }
    // 忽略 index。
    for _, c := range s {
		println("c等于：", c)
    }
    // 忽略全部返回值，仅迭代。
    for range s {

    }
    m := map[string]int{"a": 1, "b": 2}
    // 返回 (key, value)。
    for k, v := range m {
        println(k, v)
    }
}
```

运行结果：

```go
s等于： 97
s等于： 98
s等于： 99
c等于： 97
c等于： 98
c等于： 99
a 1
b 2
```

::: tip
range 会赋值对象。
:::

```go
package main

import "fmt"

func main() {
	a := [3]int{0, 1, 2}
	for i, v := range a { // index、value 都是从复制品中取出
		if i == 0 { // 在修改前，我们先修改原数组
			a[1], a[2] = 999, 999
			fmt.Println(a) // 确认修改有效，输出[0 999 999]
		}
		a[i] = v + 100 // 使用复制品中取出的 value 修改原数组
	}
	fmt.Println(a) // 输出[100 101 102]
}
```

运行结果：

```go
[0 999 999]
[100 101 102]
```

> 如果不想被复制，建议用引用类型

```go
package main

func main() {
	s := []int{1, 2, 3, 4, 5}
	for i, v := range s { // 复制 struct slice { pointer, len, cap }。
		if i == 0 {
			s = s[:3]  // 对 slice 的修改，不会影响是 range
			s[2] = 100 // 对底层数据的修改
		}
		println(i, v)
	}
}
```

运行结果：

```go
0 1
1 2
2 100
3 4
4 5
```

另外两种引用类型map、channel 是指针包装，而不像slice是struct

> for和 for range有什么区别？

| for                    | for range                                    |
| ---------------------- | -------------------------------------------- |
| 遍历array和slice       | 遍历array和slice                             |
| 遍历key为整型递增的map | 遍历key为整型递增的map                       |
| 遍历string             | 遍历string                                   |
| \                      | 遍历key为string类型的map并同时获取key和value |
| \                      | 遍历channel                                  |

### 循环控制Goto、Break、Continue

> 循环控制语句
>
> 循环控制语句可以控制体内语句的执行过程

- 三个语句都可以配合标签（label）使用
- 标签名区分大小写，定以后若不使用会造成编译错误
- continue、break配合标签（label）可用于多层循环跳出
- goto是调整执行位置，与continue、break配合标签（label）的结果并不相同

## 函数定义

### Golang函数特点：

- 无需声明原型
- 支持不定 变参
- 支持多返回值
- 支持命名返回参数
- 支持匿名函数和闭包
- 函数也是一种类型，一个函数可以赋值给变量
- 不支持 嵌套一个包不能有两个名字一样的函数
- 不支持 重载
- 不支持 默认参数

### 函数声明

> 函数声明包含一个函数名，参数列表，返回值列表和函数体。如果函数没有返回值，则返回列表可以省略。函数从第一条语句开始执行，直到执行return语句或者执行到最后一条语句。
>
> 函数可以没有参数或接收多个参数。
>
> 当两个或多个连续的函数命名参数是同一类型，则除了最后一个类型之外，其他可以省略。
>
> 函数可以返回任意数量的返回值。
>
> 使用关键字func 定义函数，左大括号依旧不能另起一行。

```go
func test(x, y int, s string) (int, string) {
    // 类型相同的相邻参数，参数类型可合并。 多返回值必须用括号。
    n := x + y          
    return n, fmt.Sprintf(s, n)
}
```

函数是第一类对象，可作为参数传递。建议将复杂签名定义为函数类型，以便于阅读。

```go
package main

import "fmt"

func test(fn func() int) int {
	return fn()
}

// FormatFunc 定义函数类型
type FormatFunc func(s string, x, y int) string

func format(fn FormatFunc, s string, x, y int) string {
	return fn(s, x, y)
}

func main() {
	s1 := test(func() int {
		return 100 // 直接将匿名函数当作参数
	})
	s2 := format(func(s string, x, y int) string {
		return fmt.Sprintf(s, x, y)
	}, "%d,%d", 10, 20)
	println(s1, s2)
}
```

运行结果：

```go
100 10,20
```

有返回值的函数，必须有明确的终止语句，否则会引发编译错误。

### 参数

#### 函数参数

> 函数定义时指出，函数定义有参数，该变量可称为函数的形参。形参就像定义在函数体内的局部变量。
>
> 调用函数，传递过来的变量就是函数的实参，函数可以通过两种方式来传递参数：

- 值传递：指在调用函数时将实际参数复制一份传递到函数中，这样在函数中如果对参数进行修改，将不会影响到实际参数

```go
func swap(x, y int) int {
       ... ...
}
```

- 引用传参：指在调用函数时将实际参数的地址传递到函数中，那么在函数中对参数所进行的修改，将影响到实际参数

在默认情况下，Go语言使用`值传递`,即在调用过程中不会影响到实际参数。

::: warning

- 无论是值传递，还是引用传递，传递给函数的都是变量的副本，不过，值传递是值的拷贝。引用传递是地址的拷贝，一般来说，地址拷贝更为高效。而值拷贝取决于拷贝的对象大小，对象越大，则性能越低。
- map、slice、chan、指针、interface默认以引用的方式传递。

:::

> Golang可变参数本质上就是slice。只能有一个，且必须是最后一个。
>
> 在参数赋值时可以不用一个个赋值，可以直接传递一个数组或切片，特别注意的是参数后面加上"..."即可。

```go
  func myfunc(args ...int) {    //0个或多个参数
  }

  func add(a int, args…int) int {    //1个或多个参数
  }

  func add(a int, b int, args…int) int {    //2个或多个参数
  }
```

::: tip
其中args是一个slice，我们可以通过arg[index]依次访问所有参数，通过len(arg)来判断传递参数的个数。

任意类型的不定参数：就是函数的参数和每个参数的类型都不是固定的。

用interface{}传递任意类型数据是Go语言的惯例用法，而且interface{}是类型安全的。

:::

```go
func myfunc(args ...interface{}) {
}
```

举个例子：

::: details 点击查看代码
```go
package main

import "fmt"

func test(s string, n ...int) string {
	var x int
	for _, i := range n {
		x += i
	}
	return fmt.Sprintf(s, x)
}

func main() {
	println(test("sum:%d", 1, 2, 3))
}
```
运行结果：

```go
sum:6
```

:::

使用slice对象做变参时，必须展开。 `（slice...）`

```go
package main

import "fmt"

func test(s string, n ...int) string {
	var x int
	for _, i := range n {
		x += i
	}
	return fmt.Sprintf(s, x)
}

func main() {
	s := []int{1, 2, 3}
	res := test("sum: %d", s...) // slice... 展开slice
	println(res)
}
```

### 返回值

#### 函数返回值

> `_`标识符，用来忽略函数的某个返回值
>
> Go的返回值可以被命名，并且就像在函数体开头声明的变量那样使用。
>
> 返回值的名称应当具有一定的意义，可以作为文档使用。
>
> 没有参数的return语句返回变量的当前值。这种用法被称为"裸"返回。

```go
package main

import "fmt"

func add(a, b int) (c int) {
	c = a + b
	return
}
func calc(a, b int) (sum int, avg int) {
	sum = a + b
	avg = (a + b) / 2
	return
}
func main() {
	var a, b int = 1, 2
	c := add(a, b)
	sum, avg := calc(a, b)
	fmt.Println(a, b, c, sum, avg)
}
```

运行结果：

```go
1 2 3 3 1
```

> Golang返回值不能用容器对象接收多返回值。只能用多个变量，或`_`忽略。

```go
package main

func test() (int, int) {
	return 1, 2
}

func main() {
	x, _ := test()
	println(x)
}
```

运行结果：

```go
1
```

多返回值可以直接作为其他函数调用实参。

```go
package main

func test() (int, int) {
	return 1, 1
}

func add(x, y int) int {
	return x + y
}
func sum(n ...int) int {
	var x int
	for i, _ := range n {
		x += i
	}
	return x
}

func main() {
	println(add(test()))
	println(sum(test()))
}
```

运行结果：

```go
2
1
```

> 命名返回参数可看做与形参类似的局部变量，最后由return隐式返回。

```go
package main

func add(x, y int) (z int) {
	z = x + y
	return
}

func main() {
	println(add(1, 2))
}
```

运行结果：

```go
3
```

> 命名返回参数可被同名局部变量遮蔽，此时需要显示返回。

```go
func add(x, y int) (z int) {
    { // 不能在一个级别，引发 "z redeclared in this block" 错误。
        var z = x + y
        // return   // Error: z is shadowed during return
        return z // 必须显式返回。
    }
}
```

> 命名返回参数允许defer延迟调用通过闭包读取和修改。

```go
package main

func add(x, y int) (z int) {
	defer func() {
		z += 100
	}()
	z = x + y
	return
}
func main() {
	println(add(1, 2))
}
```

运行结果：

```go
103
```

> 显示return返回前，会先修改命名返回参数。

```go
package main

func add(x, y int) (z int) {
    defer func() {
        println(z) // 输出: 203
    }()
    z = x + y
    return z + 200 // 执行顺序: (z = z + 200) -> (call defer) -> (return)
}

func main() {
    println(add(1, 2)) // 输出: 203
}
```

运行结果：

```go
200
203
```

### 匿名函数

> 匿名函数是指不需要定义函数名的一种函数实现方式。
>
> 在Go里，函数可以像普通变量一样被传递或使用，Go语言支持随时在代码里面定义匿名函数。
>
> 匿名函数由一个不带函数名的函数声明和函数体组成。匿名函数的优越性在于可以直接使用函数内的变量，不必申明。

```go
package main

import (
	"fmt"
	"math"
)

func main() {
	getSqrt := func(a float64) float64 {
		return math.Sqrt(a)
	}
	fmt.Println(getSqrt(4))
}
```

运行结果：

```go
2
```

上面先定义一个名为getSqrt的变量，初始化该变量时和之前的变量初始化有些不同，使用了func，func是定义函数的，可是这个函数和上面说的函数最大不同就是没有函数名，也就是匿名函数。这里将一个函数当作一个变量一样的操作。

Golang匿名函数可赋值给变量，做为结构字段，或者在channel里传送。

```go
package main

func main() {
	fn := func() { println("hello world!") }
	fn()
	fns := [](func(x int) int){
		func(x int) int {
			return x + 1
		},
		func(x int) int {
			return x + 2
		},
	}
	println(fns[0](100))

	d := struct {
		fn func() string
	}{
		fn: func() string {
			{
				return "hello world!"
			}
		},
	}
	println(d.fn())
	fc := make(chan func() string, 2)
	fc <- func() string {
		return "hello world!"
	}
	println((<-fc)())
}
```

运行结果：

```go
hello world!
101
hello world!
hello world!
```

### 闭包、递归

#### 闭包解释

> 函数和与其相关的引用环境结合而成的实体，闭包在运行时可以有多个实例，不同的引用环境和相同的函数组合可以产生不同的实例。

#### Go的闭包

```go
package main

import "fmt"

func a() func() int {
	i := 0
	b := func() int {
		i++
		fmt.Println(i)
		return i
	}
	return b
}

func main() {
	c := a()
	c()
	c()
	c()

	a() //不会输出i
}
```

运行结果：

```go
1
2
3
```

闭包复制的是原对象的指针

```go
package main

import "fmt"

func test() func() {
	x := 100
	fmt.Printf("x (%p) = %d\n", &x, x)

	return func() {
		fmt.Printf("x (%p) = %d\n", &x, x)
	}
}

func main() {
	f := test()
	f()
}
```

运行结果：

```go
x (0xc0000b2008) = 100
x (0xc0000b2008) = 100
```

#### Go递归函数

> 递归，就是在运行的过程中调用自己。一个函数调用自己，就叫做递归函数。

- 子问题须与原始问题为同样的事，且更为简单。
- 不能无限制地调用本身，须有个出口，化简为非递归状况处理。

#### 数字阶乘

```go
package main

import "fmt"

func factorial(i int) int {
	if i <= 1 {
		return 1
	}
	return i * factorial(i-1)
}

func main() {
	var i int = 3
	fmt.Printf("Factorial of %d is %d\n", i, factorial(i))
}
```

运行结果：

```go
Factorial of 3 is 6
```

### 延迟调用（defer）

#### defer特性

- 关键字 defer 用于注册延迟调用
- 这些调用直到 return 前才被执行。因此，可以用来做资源清理
- 多个 derfer 语句，按先进后出的方式执行
- defer 语句中的变量，在derfer声明时就决定了

#### defer用途

- 关闭文件句柄
- 锁资源释放
- 数据库连接释放

#### Go语言 derfer

> Go语言的derfer功能强大，对于资源管理非常方便
>
> defer 是先进后出

```go
package main

import "fmt"

func main() {
	var whatever [5]struct{}
	for i := range whatever {
		defer fmt.Println(i)
	}
}
```

运行结果：

```go
4
3
2
1
0
```

#### 当defer碰上闭包

```go
package main

import "fmt"

func main() {
	var whatever [5]struct{}
	for i := range whatever {
		defer func() { fmt.Println(i) }()
	}
}
```

运行结果：

```go
4
4
4
4
4
```

> 也就是说函数正常执行，由于闭包用到的变量i在执行的时候已经变成4，所以输出全部都是4

#### defer f.Close

```go
package main

import "fmt"

type Test struct {
	name string
}

func (t *Test) Close() {
	fmt.Println(t.name, "closed")
}
func main() {
	ts := []Test{{"a"}, {"b"}, {"c"}}
	for _, t := range ts {
		defer t.Close()
	}
}
```

运行结果：

```go
c closed
c closed
c closed
```

### 异常处理

> Golang没有结构化异常，使用panic抛出错误，recover捕获错误。
>
> 异常的使用场景简单描述：Go中可以抛出一个panic的异常，然后在defer中通过recover捕获这个异常，然后正常处理。

`panic`：

- 内置函数
- 加入函数F中书写了panic语句，会终止其后要执行的代码，在panic所在的函数F内如果存在要执行的defer函数列表，按照defer的逆序执行
- 返回函数F的调用者G，在G中，调用函数F语句之后的代码不会执行，假如函数G中存在要执行的defer函数列表，按照defer的逆序执行
- 直到goroutine整个退出，并报告错误

`recover`:

- 内置函数
- 用来控制一个goroutine的panicking行为，捕获panic，从而影响应用的行为
- 一般的调用建议
  - 在defer函数中，通过recever来终止一个goroutine的panicking过程，从而恢复正常代码的执行
  - 可以获取通过panic传递的error

::: tip

- 利用recover处理panic指令，defer必须放在panic之前定义，另外recover只有在defer调用函数中才有效。否则panic时，recover无法捕获到panic，无法防止panic扩散
- recover处理异常后，逻辑并不会恢复到panic那个点去，函数defer之后的那个点
- 多个defer会形成defer栈，后定义的defer语句会被最先调用

```go
package main

func main() {
	test()
}

func test() {
	defer func() {
		if err := recover(); err != nil {
			println(err.(string)) // 将 interface{}转型为具体类型
		}
	}()
	panic("panic error")
}
```

运行结果：

```go
panic error
```

由于panic、recover参数类型为interface{}，因此可抛出任何类型对象。

```go
func panic(v interface{})
func recover() interface{}
```

向已关闭的通道发送数据会引发panic

```go
package main

import "fmt"

func main() {
	defer func() {
		if err := recover(); err != nil {
			fmt.Println(err)
		}
	}()
	var ch chan int = make(chan int, 10)
	close(ch)
	ch <- 1
}
```

运行结果：

```go
send on closed channel
```

延迟调用中引发的错误，可被后续延迟调用捕获，但仅最后一个错误可被捕获。

```go
package main

import "fmt"

func test() {
	defer func() {
		fmt.Println(recover())
	}()
	defer func() {
		panic("defer panic")
	}()
	panic("test panic")
}

func main() {
	test()
}
```

运行结果：

```go
defer panic
```

捕获函数recover只有在延迟调用内直接调用才会终止错误，否则总是返回nil。任何未捕获的错误都会沿调用堆栈向外传递。

```go
package main

import "fmt"

func test() {
	defer func() {
		fmt.Println(recover()) // 有效
	}()
	defer recover()              // 无效
	defer fmt.Println(recover()) // 无效
	defer func() {
		func() {
			println("defer inner")
			recover() // 无效
		}()
	}()
	panic("test panic")
}

func main() {
	test()
}
```

运行结果：

```go
defer inner
<nil>
test panic
```

> Go实现类似try catch 的异常处理

```go
package main

import "fmt"

func Try(fun func(), handler func(interface{})) {
	defer func() {
		if err := recover(); err != nil {
			handler(err)
		}
	}()
	fun()
}

func main() {
	Try(func() {
		panic("test panic")
	}, func(err interface{}) {
		fmt.Println(err)
	})
}
```

运行结果：

```go
test panic
```

### 单元测试

#### go test工具

> Go语言中的测试依赖go test命令。编写测试代码和编写普通的Go代码过程时类似的
>
> go test 命令是一个按照一定约定和组织的测试代码的驱动程序。在包目录内，所有以`_test.go`为后缀名的源代码都是go test测试的一部分，不会被go build 编译到最终可执行文件中。
>
> 在`*_test.go`文件中有三种类型的函数，单元测试函数、基准测试函数和示例函数。

| 类型     | 格式                  | 作用                           |
| -------- | --------------------- | ------------------------------ |
| 测试函数 | 函数名前缀为Test      | 测试程序的一些逻辑行为是否正确 |
| 基准函数 | 函数名前缀为Benchmark | 测试函数的性能                 |
| 示例函数 | 函数前缀为Example     | 为文档提供示例文档             |

go test命令会遍历所有的`*_test.go`文件中符合上述命名规则的函数，然后生成一个临时的main包用于调用相应的测试函数，然后构建并运行、报告测试结果，最后清理测试中生成的临时文件。

Golang 单元测试对文件名和方法名，参数都很严格的要求。

- 文件名必须以xx_test.go命名
- 方法必须是`Test[^a-z]`开头
- 方法参数必须 t *testing.T
- 使用go test执行单元测试

go test的参数解读：
go test 是go语言自带的测试工具，其中包含的是两类，单元测试和性能测试

通过go help test可以看到go test的使用说明：

```go
格式形如：go test [-c] [-i] [build flags] [packages] [flags for test binary]
```

参数解读：

- -c 编译go test称为可执行的二进制文件，但是不运行测试。

- -i 安装测试包依赖的package，但是不运行测试

> 关于build flags，调用go help build，这些是编译运行过程中需要用到的参数，一般设置为空。
>
> 关于packages，调用go help packages，这些是关于包的管理，一般设置为空
>
> 关于flags for binary，调用go help testflag，这些是go test过程中经常使用到的参数
>
> - test.v：是否输出全部的单元测试用例（不管成功或者失败），默认没有加上，所以只输出失败的单元测试用例。
> - test.run pattern：只跑那些单元测试用例
> - test.bench patten：只跑那些性能测试用例
> - test.benchmem：是否在性能测试的时候输出内存情况
> - test.benchtime t：性能测试运行的时间，默认是1s
> - test.cpuprofile cpu.out：是否输出cpu性能分析文件
> - test.memprofile mem.out：是否输出内存性能分析文件
> - test.blockprofile block.out：是否输出内部goroutine阻塞的性能分析文件
> - test.memprofilerate n：内存性能分析的时候有一个分配了多少的时候打点记录。
>
> 可以通过设置memprofilerate=1和GOGC=off来关闭内存回收，并且对每个内存块的分配进行观察。
>
> - test.blockprofilerate n：基本同上，控制的是goroutine阻塞时候打点的纳秒数。

目录结构：

```
   test
      |
       —— calc.go
      |
       —— calc_test.go
```

#### 测试函数

> 测试函数的格式

每个测试函数必须导入testing包，测试函数的基本格式如下：

```go
func TestName(t *testing.T){
  // ...
}
```

测试函数的名字必须以Test开头，可选的后缀名必须以答谢字母开头，举个例子：

```go
func TestAdd(t *testing.T){ ... }
func TestSum(t *testing.T){ ... }
func TestLog(t *testing.T){ ... }
```

其中参数t用于报告测试失败和附加的日志信息。testing.T的拥有的方法如下：

```go
func (c *T) Error(args ...interface{})
func (c *T) Errorf(format string, args ...interface{})
func (c *T) Fail()
func (c *T) FailNow()
func (c *T) Failed() bool
func (c *T) Fatal(args ...interface{})
func (c *T) Fatalf(format string, args ...interface{})
func (c *T) Log(args ...interface{})
func (c *T) Logf(format string, args ...interface{})
func (c *T) Name() string
func (t *T) Parallel()
func (t *T) Run(name string, f func(t *T)) bool
func (c *T) Skip(args ...interface{})
func (c *T) SkipNow()
func (c *T) Skipf(format string, args ...interface{})
func (c *T) Skipped() bool
```

测试函数示例：

> 定义一个split的包，包中定义一个Split函数，具体实现如下：

```go
// split/split.go

package split

import "strings"


func Split(s, sep string) (result []string) {
    i := strings.Index(s, sep)

    for i > -1 {
        result = append(result, s[:i])
        s = s[i+1:]
        i = strings.Index(s, sep)
    }
    result = append(result, s)
    return
}
```

在当前目录下，我们创建了一个split_test.go的测试文件，并定义一个测试函数如下：

```go
// split/split_test.go

package split

import (
    "reflect"
    "testing"
)

func TestSplit(t *testing.T) { // 测试函数名必须以Test开头，必须接收一个*testing.T类型参数
    got := Split("a:b:c", ":")         // 程序输出的结果
    want := []string{"a", "b", "c"}    // 期望的结果
    if !reflect.DeepEqual(want, got) { // 因为slice不能比较直接，借助反射包中的方法比较
        t.Errorf("excepted:%v, got:%v", want, got) // 测试失败输出错误提示
    }
}
```

此时split这个包中的文件如下：

```go
❯ ls -l
total 16
-rw-r--r--  1 ranyong  staff  287 Jan 30 13:19 split.go
-rw-r--r--  1 ranyong  staff  466 Jan 30 13:18 split_test.go
```

在split包路径下，执行go test命令，可以看到输出结果如下：

```go
❯ go test
PASS
ok      demo/bin/split  0.173s
```

#### 测试组

> 我们现在还想要测试一下split函数对中文字符串的支持，这个时候我们可以再编写一个TestChineseSplit测试函数，但是我们也可以使用如下更好的一种方式来添加更多的测试用例。

```go
```

### 压力测试

#### Go怎么写测试用例

> Go语言中自带有一个轻量级的测试框架testing和自带的go test命令来实现单元测试和性能测试，testing框架和其他语言中的测试框架类似

另外建议安装gotests插件自动生成测试代码：

```go
go get -u -v github.com/cweill/gotests/...
```

#### 如何编写测试用例

> 由于go test命令只能在一个相应的目录下执行所有文件，所以我们接下来新建一个目录gotest，这样我们所有的代码和测试代码都在这个目录下。
>
> 接下来我们在该目录下面创建两个文件：gotest.go和gotest_test.go

gotest.go：这个文件里面我们创建了一个包，里面有一个函数实现了除法运算：

## 方法

### 方法的定义

> Golang方法总是绑定对象实例，并隐式将实例作为第一个实参。

- 只能为当前包内命名类型定义方法
- 参数receiver可任意命名。如方法中为曾使用，可省略参数名。
- 参数receiver类型可以是T或*T。基类型T不能是借口或指针。
- 不支持方法重载，receiver只是参数签名的组成部分。
- 可以实例value或pointer调用全部方法，编译器自动转换。

一个方法就是一个包含了接收者的函数，接收者可以是命名类型活着结构体类型的一个值或者是一个指针。

所有给定义的方法属于该类型的方法集。

#### 方法的定义

```go
func (recevier type) methodName(参数列表)(返回值列表){}

参数和返回值可以省略
```

举个例子：

```go
package main

type Test struct {
}

// 无参数、无返回值
func (t Test) method0() {

}

// 单参数、无返回值
func (t Test) method1(i int) {
}

// 多参数、无返回值
func (t Test) method2(x, y int) {

}

// 无参数、单返回值
func (t Test) method3() (i int) {
	return
}

// 多参数，多返回值
func (t Test) method4() (i int) {
	return
}

// 无参数、无返回值
func (t *Test) method5() {

}

// 单参数、无返回值
func (t *Test) method6(i int) {

}

// 多参数、无返回值
func (t *Test) method7(x, y int) {

}

// 无参数、单返回值
func (t *Test) method8() (i int) {
	return
}

// 多参数、多返回值
func (t *Test) method9(x, y int) (z int, err error) {
	return
}

func main() {
	
}
```

下面定义一个结构体类型和该类型的一个方法：

```go
package main

import "fmt"

// 结构体
type User struct {
	Name  string
	Email string
}

// 方法
func (u User) Notify() {
	fmt.Printf("%v:%v \n", u.Name, u.Email)
}
func main() {
	// 值类型调用方法
	u1 := User{"golang", "golang@golang.com"}
	u1.Notify()
	// 指针类型调用方法
	u2 := User{"go", "go@go.com"}
	u3 := &u2
	u3.Notify()
}
```

运行结果：

```go
golang:golang@golang.com 
go:go@go.com 
```

首先我们定义一个叫做User的结构体类型，然后定义了一个该类型的方法叫做Notify，该方法的接收者是一个User类型的值。要调用Notify方法我们需要一个User类型的值。要调用Notify方法我们需要一个User类型的值或者指针。

在这个例子中当我们使用指针时，Go调整和解引用指针使得调用可以被执行。注意，当接收者不是一个指针时，该方法操作对应接收者的值的副本。

我们修改Notify方法，让它的接收者使用指针类型：

```go
package main

import "fmt"

// 结构体
type User struct {
	Name  string
	Email string
}

// 方法
func (u *User) Notify() {
	fmt.Printf("%v:%v \n", u.Name, u.Email)
}
func main() {
	// 值类型调用方法
	u1 := User{"golang", "golang@golang.com"}
	u1.Notify()
	// 指针类型调用方法
	u2 := User{"go", "go@go.com"}
	u3 := &u2
	u3.Notify()
}
```

运行结果：

```go
golang:golang@golang.com 
go:go@go.com 
```

注意：当接收者是指针时，即使用值类型调用那么函数内部也是对指针的操作。

方法不过是一种特殊函数，只需将其还原，就知道`receiver T`和`*T`的差别

```go
package main

import "fmt"

type Data struct {
	x int
}

func (self Data) ValueTest() {
	fmt.Printf("Value:%p\n", &self)
}

func (self *Data) PointerTest() {
	fmt.Printf("Pointer:%p\n", self)
}

func main() {
	d := Data{}
	p := &d
	fmt.Printf("Data: %p\n", p)
	d.ValueTest()
	d.PointerTest()
	p.ValueTest()
	p.PointerTest()
}
```

运行结果：

```go
Data: 0xc0000b2008
Value:0xc0000b2018
Pointer:0xc0000b2008
Value:0xc0000b2020
Pointer:0xc0000b2008
```

#### 普通函数与方法的区别

- 对于普通函数，接收者为值类型时，不能将指针类型的数据直接传递，反之亦然。
- 对于方法(如struct方法)，接收者为值类型时，可以直接用指针类型的变量调用方法，反过来同样也可以。

```go
package main

import "fmt"

// 1.普通函数
// 接收值类型参数的函数
func valueIntTest(a int) int {
	return a + 10
}

// 接收者指针类型参数的函数
func pointerIntTest(a *int) int {
	return *a + 10
}

func structTestValue() {
	a := 2
	fmt.Println("valueIntTest:", valueIntTest(a))
	// 函数的参数为值类型，则不能直接将指针作为参数传递

	b := 5
	fmt.Println("pointerIntTest:", pointerIntTest(&b))
	// 同样，当函数的参数为指针类型时，也不能直接将值类型作为参数传递
}

// 2.方法
type PersonD struct {
	id   int
	name string
}

// 接收者为值类型
func (p PersonD) valueShowName() {
	fmt.Println(p.name)
}

// 接收者为指针类型
func (p *PersonD) pointShowName() {
	fmt.Println(p.name)
}

func structTestFunc() {
	// 值类型调用方法
	personValue := PersonD{101, "hello world"}
	personValue.valueShowName()
	personValue.pointShowName()
	// 指针类型调用方法
	personPointer := &PersonD{102, "hello golang"}
	personPointer.valueShowName()
	personPointer.pointShowName()
}

func main() {
	structTestValue()
	structTestFunc()
}
```

运行结果：

```go
valueIntTest: 12
pointerIntTest: 15
hello world
hello world
hello golang
hello golang
```

#### 匿名字段

> Golang你名字段：可以像字段成员那样访问匿名字段方法，编译器负责查找。

```go
package main

import "fmt"

type User struct {
	id   int
	name string
}

type Manager struct {
	User
}

func (self *User) ToString() string {
	return fmt.Sprintf("User:%p,%v", self, self)
}
func main() {
	m := Manager{User{1, "Tom"}}
	fmt.Printf("Manager: %p\n", &m)
	fmt.Println(m.ToString())
}
```

运行结果：

```go
Manager: 0xc0000a4018
User:0xc0000a4018,&{1 Tom}
```

通过匿名字段，可获得和继承类似的复用能力。依据编译器查找次序，只需在外层定义同名方法，就可以实现"override"。

```go
package main

import "fmt"

type User struct {
	id   int
	name string
}
type Manager struct {
	User
	title string
}

func (self *User) ToString() string {
	return fmt.Sprintf("User:%p,%v", self, self)
}

func (self *Manager) ToString() string {
	return fmt.Sprintf("Manager: %p,%v", self, self)
}

func main() {
	m := Manager{User{1, "Tom"}, "Administrator"}
	fmt.Println(m.ToString())
	fmt.Println(m.User.ToString())
}
```

运行结果：

```go
Manager: 0xc00006c180,&{{1 Tom} Administrator}
User:0xc00006c180,&{1 Tom}
```

#### 方法集

> Golang方法集：每个类型都有与之关联的方法集，这会影响到接口实现规则。

- 类型 T 方法集包含全部 receiver T 方法。
- 类型 *T 方法集包含全部 receiver T + *T 方法。
- 如类型 S 包含匿名字段 T，则 S 和 *S 方法集包含 T 方法。
- 如类型 S 包含匿名字段 *T，则 S 和 *S 方法集包含 T + *T 方法。
- 不管嵌入 T 或 *T， *S 方法集总是包含 T + *T 方法。

用实例 value 和 pointer 调用方法不受方法集约束，编译器总是查找全部方法，并自定转换receiver实惨。

Go语言中内部类型方法集提升的规则：

类型T方法集包含全部receiver T方法。

```go
package main

import "fmt"

type T struct {
	int
}

func (t T) test() {
	fmt.Println("类型 T 方法集包含全部 receiver T 方法。")
}

func main() {
	t1 := T{1}
	fmt.Printf("t1 is : %v\n", t1)
	t1.test()
}
```

运行结果：

```go
t1 is : {1}
类型 T 方法集包含全部 receiver T 方法。
```

#### 表达式

> Golang 表达式：根据调用者不同，方法分为两种表现形式：

```go
instance.method(args...) ---> <type>.func(instance, args...)
```

前者称为method value，后者method expression。

两者都可以像普通函数那样赋值和传参，区别在于method value 绑定实例，而method expression则须显式传参。

```go
package main

import "fmt"

type User struct {
	id   int
	name string
}

func (self *User) Test() {
	fmt.Printf("%p,%v\n", self, self)
}
func main() {
	u := User{1, "Tom"}
	u.Test()
	mValue := u.Test
	mValue() // 隐式传递 receiver

	mExpression := (*User).Test
	mExpression(&u) // 显式传递 receiver
}
```

运行结果：

```go
0xc0000a4018,&{1 Tom}
0xc0000a4018,&{1 Tom}
0xc0000a4018,&{1 Tom}
```

需要注意，method value会复制receiver。

```go
package main

import "fmt"

type User struct {
	id   int
	name string
}

func (self User) Test() {
	fmt.Println(self)
}

func main() {
	u := User{1, "Tom"}
	mValue := u.Test // 立即复制 receiver，因为不是指针类型，不受后续修改影响。

	u.id, u.name = 2, "Jack"
	u.Test()
	mValue()
}
```

运行结果：

```go
{2 Jack}
{1 Tom}
```

在汇编层面，method value 和闭包的实现方式不同，实际返回FuncVal类型对象。

```go
FuncVal { method_address, receiver_copy }
```

可依据方法集转换 method expression，注意receiver类型的差异。

```go
package main

import "fmt"

type User struct {
	id   int
	name string
}

func (self *User) TestPointer() {
	fmt.Printf("TestPointer: %p,%v\n", self, self)
}

func (self User) TestValue() {
	fmt.Printf("TestValue: %p,%v\n", &self, self)
}
func main() {
	u := User{1, "Tom"}
	fmt.Printf("User: %p ,%v\n", &u, u)

	mv := User.TestValue
	mv(u)

	mp := (*User).TestPointer
	mp(&u)
	
	mp2 := (*User).TestValue
	mp2(&u)
}
```

运行结果：

```go
User: 0xc00000c030 ,{1 Tom}
TestValue: 0xc00000c060,{1 Tom}
TestPointer: 0xc00000c030,&{1 Tom}
TestValue: 0xc00000c0a8,{1 Tom}
```

#### 自定义error

##### 抛异常和处理异常

`系统抛`

```go
package main

import "fmt"

func test01() {
	a := [5]int{0, 1, 2, 3, 4}
	a[1] = 123
	fmt.Println(a)
	index := 10
	a[index] = 10
	fmt.Println(a)
}

func getCircleArea(radius float32) (area float32) {
	if radius < 0 {
		panic("半径不能为负")
	}
	return 3.14 * radius * radius
}

func test02() {
	getCircleArea(-5)
}

func test03() {
	defer func() {
		if err := recover(); err != nil {
			fmt.Println(err)
		}
	}()
	getCircleArea(-5)
	fmt.Println("这里有没有执行")
}

func test04() {
	test03()
	fmt.Println("test04")
}

func main() {
	test04()
}
```

运行结果：

```go
半径不能为负
test04
```

`返回异常`

```go
package main

import (
	"errors"
	"fmt"
)

func getCircleArea(radius float32) (area float32, err error) {
	if radius < 0 {
		// 构建个异s对象
		err = errors.New("半径不能为负")
		return
	}
	area = 3.14 * radius * radius
	return
}
func main() {
	area, err := getCircleArea(-5)
	if err != nil {
		fmt.Println(err)
	} else {
		fmt.Println(area)
	}
}
```

运行结果：

```go
半径不能为负
```

`自定义error`

```go
package main

import (
	"fmt"
	"os"
	"time"
)

type PathError struct {
	path       string
	op         string
	createTime string
	message    string
}

func (p *PathError) Error() string {
	return fmt.Sprintf("path= %s \nop=%s \ncreateTime=%s", p.path,
		p.op, p.createTime, p.message)
}

func Open(filename string) error {
	file, err := os.Open(filename)
	if err != nil {
		return &PathError{
			path:       filename,
			op:         "read",
			message:    err.Error(),
			createTime: fmt.Sprintf("%v", time.Now()),
		}
	}
	defer file.Close()
	return nil
}
func main() {
	err := Open("/Users/demo/Desktop/go/src/test.txt")
	switch v := err.(type) {
	case *PathError:
		fmt.Println("get path error,", v)
	default:

	}
}
```

运行结果：

```go
get path error, path= /Users/demo/Desktop/go/src/test.txt 
op=read 
createTime=2022-02-07 17:50:17.065474 +0800 CST m=+0.000087501%!(EXTRA string=open /Users/demo/Desktop/go/src/test.txt: no such file or directory)
```

## 接口

> Go支持只提供类型而不写字段名的方式，也就是匿名字段，也称为嵌入字段

```go
package main

import "fmt"

// 人
type Person struct {
	name string
	sex  string
	age  int
}

type Student struct {
	Person
	id   int
	addr string
}

func main() {
	// 初始化
	s1 := Student{Person{"ranyong", "man", 20}, 1, "SZ"}
	fmt.Println(s1)
	s2 := Student{Person: Person{"ranyong", "man", 20}}
	fmt.Println(s2)
	s3 := Student{Person: Person{name: "ranyong"}}
	fmt.Println(s3)
}
```

运行结果：

```go
{{ranyong man 20} 1 SZ}
{{ranyong man 20} 0 }
{{ranyong  0} 0 }
```

同名字段的情况

```go
package main

import "fmt"

type Person struct {
	name string
	sex  string
	age  int
}

type Student struct {
	Person
	id   int
	addr string
	// 同名字段
	name string
}

func main() {
	var s Student
	// 给自己字段赋值
	s.name = "ranyong"
	fmt.Println(s)
	// 若给父类同名字段赋值，如下
	s.Person.name = "枯藤"
	fmt.Println(s)
}
```

运行结果：

```go
{{  0} 0  ranyong}
{{枯藤  0} 0  ranyong}
```

所有的内置类型和自定义类型都是可以作为匿名字段去使用

```go
package main

import "fmt"

// 人
type Person struct {
	name string
	sex  string
	age  int
}

// 自定义类型
type mystr string

// 学生
type Student struct {
	Person
	int
	mystr
}

func main() {
	s1 := Student{Person{"ranyong", "man", 20}, 1, "SZ"}
	fmt.Println(s1)
}
```

运行结果：

```go
{{ranyong man 20} 1 SZ}
```

指针类型匿名字段

```go
package main

import "fmt"

// 人
type Person struct {
	name string
	sex  string
	age  int
}

// 学生
type Student struct {
	*Person
	id   int
	addr string
}

func main() {
	s1 := Student{&Person{"ranyong", "man", 20}, 1, "SZ"}
	fmt.Println(s1)
	fmt.Println(s1.name)
	fmt.Println(s1.Person.name)
}
```

运行结果：

```go
{0xc00006c180 1 SZ}
ranyong
ranyong
```

## 网络编程

### 互联网协议介绍

> 互联网的核心是一系列协议，总成为"互联网协议"，正是这一些协议规定了电脑如何连接和组网。我们理解了这些协议，就理解了互联网的原理。

### 互联网分层模型

> 互联网的逻辑实现被分为好几层。每一层都有自己的功能

![分层模型](https://gitee.com/ran_yong/mark-down-table-upload/raw/master/img/1-20220207181924848.png)

如上图所示，互联网按照不同的模型划分会有不同的分层，但是不论按照什么模型去划分，越往上的层越靠近用户，越往下的层越靠近硬件。

`物理层`

> 我们的电脑要与外界互联通行，需要先把电脑连接网络，我们可以用双绞线、光纤、无线电波等等方式。这就叫做“实物理层”，他就是把电脑连接起来的物理手段。它主要规定了网络的一些电气特性，作用是负责传送0和1的电信号。

`数据联络层`

> 单纯的0和1没有任何意义，所以我们使用者会为其赋予一些特定的含义，规定解读电信号的方式：例如：多少个电信号一组？每个信号位有何意义？这就是“数据链接层”的功能，它在“物理层”的上方，确定了物理层传输的0和1的分组方式即代表的意义。

`网络层`

>

`传输层`

> 

`应用层`

> 应用程序收到“传输层”的数据，接下来就要对数据进行解包。由于互联网是开放架构，数据来源五花八门，必须事先规定好通信的数据格式，否则接收方根本无法获得真正的数据内容。“应用层”的作用就是规定应用程序使用的数据格式，例如我们TCP协议之上常见的Email、HTTP、FTP等协议，这些协议就组成了互联网协议的应用层。

![应用层](https://gitee.com/ran_yong/mark-down-table-upload/raw/master/img/2.png)

### socket编程

> Socket是BSD UNIX的进程通信机制，通常也称为“套接字”，用于描述IP地址和端口，是一个通行链的句柄。Socket可以理解为TCP/IP网络的API，它定义了许多函数或例程，程序员可以用它们来开发TCP/IP网络上的应用程序。

### socket图解

>Socket是应用层与TCP/IP协议族通信的中间软件抽象层。在设计模式中，Socket其实就是一个门面模式，它把复杂的TCP/IP协议族隐藏在Socket后面，对用户来说只需要调用Socket规定的相关函数，让Socket去组织符合指定的协议数据然后进行通行。

![socket图解](https://gitee.com/ran_yong/mark-down-table-upload/raw/master/img/3.png)

- Socket 又称"套接字"，应用程序通常通过“套接字”向网络发出请求活着答应网络请求
- 常用的Socket类型有两种：流式Socket和数据报式Socket，流式式一种面向连接的Socket，针对于面向连接的TCP服务应用，数据报式Socket式一种无连接的Socket，针对于无连接的UDP服务应用。
- TCP：比较靠谱，面向连接，比较慢
- UDP：不是太靠谱，比较快

举个例子：TCP就像货到付款的快递，送到家还必须见到你人才算一整套流程。UDP就像某个快递柜一扔就走管你收不收得到。一般直播用UDP。

### TCP协议

>TCP/IP即传输控制协议/网间协议，是一种面向连接的、可靠的、基于字节流的传输层通信协议，因为是面向连接的协议，数据想水流一样传输，会存在黏包问题。

### TCP服务端

> 一个TCP服务端可以同时连接很多个客户端，例如世界各地的用户使用电脑上的浏览器访问淘宝。因为Go语言中创建多个goroutine实现并发非常方便和高效，所以我们可以每建立一次链接创建一个goroutine去处理。

TCP服务端程序的处理流程：

- 监听端口
- 接收客户端请求建立链接
- 创建goroutine处理链接

我们使用Go语言的net包实现的TCP服务端代码如下：

```go
package main

import (
	"bufio"
	"fmt"
	"net"
)

// 处理函数
func process(conn net.Conn) {
	defer conn.Close() // 关闭连接
	for {
		reader := bufio.NewReader(conn)
		var buf [128]byte
		n, err := reader.Read(buf[:])
		if err != nil {
			fmt.Println("read form client failed, err:", err)
			break
		}
		recvStr := string(buf[:n])
		fmt.Println("收到client端发来的数据：", recvStr)
		conn.Write([]byte(recvStr)) // 发送数据
	}
}

func main() {
	listen, err := net.Listen("tcp", "127.0.0.1:20000")
	if err != nil {
		fmt.Println("listen failed, err:", err)
		return
	}
	for {
		conn, err := listen.Accept() // 建立连接
		if err != nil {
			fmt.Println("accept failed, err:", err)
			continue
		}
		go process(conn) // 启动一个goroutine处理连接
	}
}
```

将上面的代码保存之后编译成server或server.exe可执行文件。

### TCP客户端

> 一个TCP客户端进行TCP通信的流程如下：

- 建立于服务端的链接
- 进行数据收发
- 关闭链接

使用Go语言的net包实现的TCP客户端代码如下：

```go
package main

import (
	"bufio"
	"fmt"
	"net"
	"os"
	"strings"
)

// 客户端
func main() {
	conn, err := net.Dial("tcp", "127.0.0.1:20000")
	if err != nil {
		fmt.Println("err :", err)
		return
	}
	defer conn.Close() // 关闭连接
	inputReader := bufio.NewReader(os.Stdin)
	for {
		input, _ := inputReader.ReadString('\n') // 读取用户输入
		inputInfo := strings.Trim(input, "\r\n")
		if strings.ToUpper(inputInfo) == "Q" { // 如果输入q就退出
			return
		}
		_, err = conn.Write([]byte(inputInfo)) // 发送数据
		if err != nil {
			return
		}
		buf := [512]byte{}
		n, err := conn.Read(buf[:])
		if err != nil {
			fmt.Println("recv faile, err:", err)
			return
		}
		fmt.Println(string(buf[:n]))
	}
}
```

将上面的代码编译成client或client.exec可执行文件，先启动server端再启动client端，再client端输入任意内容回车之后就能够再server端看到client端发送的数据，从而实现TCP通信。

### UDP编程

#### Go语言实现UDP通信

`UDP协议`

> UDP协议中文名称是用户数据协议报协议，是OSI参考模型中一种无连接的传输层协议，不需要建立连接就能直接进行数据发送和接收，属于不可靠、没有时序的通信，但是UDP协议的实时性比较好，通常用于视频直播相关领域。

`UDP服务端`

使用Go语言的net包实现UDP服务端代码如下：

```go
package main

import (
	"fmt"
	"net"
)

// UDP server端
func main() {
	listen, err := net.ListenUDP("udp", &net.UDPAddr{
		IP:   net.IPv4(0, 0, 0, 0),
		Port: 30000,
	})
	if err != nil {
		fmt.Println("listen failed, err:", err)
		return
	}
	defer listen.Close()
	for {
		var data [1024]byte
		n, addr, err := listen.ReadFromUDP(data[:]) // 接收数据
		if err != nil {
			fmt.Println("read udp failed, err:", err)
			continue
		}
		fmt.Printf("data:%v addr:%v count:%v\n", string(data[:n]), addr, n)
		_, err = listen.WriteToUDP(data[:n], addr) // 发送数据
		if err != nil {
			fmt.Println("write to udp failed, err:", err)
			continue
		}

	}
}
```

`UDP客户端`

使用Go语言的net包实现的UDP客户端代码如下：

```go
package main

import (
	"fmt"
	"net"
)

// UDP 客户端
func main() {
	socket, err := net.DialUDP("udp", nil, &net.UDPAddr{
		IP:   net.IPv4(0, 0, 0, 0),
		Port: 30000,
	})
	if err != nil {
		fmt.Println("连接服务端失败, err", err)
		return
	}
	defer socket.Close()
	sendData := []byte("Hello server")
	_, err = socket.Write(sendData) // 发送数据
	if err != nil {
		fmt.Println("发送数据失败, err:", err)
		return
	}
	data := make([]byte, 4096)
	n, remoteAddr, err := socket.ReadFromUDP(data) // 接收数据
	if err != nil {
		fmt.Println("接收数据失败，err：", err)
		return
	}
	fmt.Printf("recv: %v addr：%v connet: %v\n", string(data[:n]), remoteAddr, n)

}
```

### HTTP编程

### web工作流程

- Web服务器的工作原理可以简单地归纳为
  - 客户机通过TCP/IP协议建立到服务器的TCP连接
  - 客户端向服务器发送HTTP协议请求包，请求服务器里的资源文档
  - 服务器向客户机发送HTTP协议答应包，如果请求的资源包含有动态语言的内容，那么服务器会调用动态语言的解释引擎负责处理"动态内容"。并将处理的到的数据返回给客户端
  - 客户机与服务器断开。由客户端解释HTML文档，再客户端屏幕上渲染图形结果

### HTTP协议

- 超文本传输协议是互联网再应用上最为广泛的一种网络协议，它详细规定了浏览器和万维网服务器之间的相互通信的规则，通过因特网传送万维网文档的数据传送协议
- HTTP协议通常承载于TCP协议之上

### HTTP客户端

```go
package main

import (
	"fmt"
	"net/http"
)

func main() {
	// http://127.0.0.1:8000/go
	// 单独写回调函数
	http.HandleFunc("/go", myHandler)
	http.ListenAndServe("127.0.0.1:8000", nil)
	// addr：监听的地址
	// handler：回调函数
}

// handler 函数
func myHandler(w http.ResponseWriter, r *http.Request) {
	fmt.Println(r.RemoteAddr, "连接成功")
	// 请求方法：GET POST DELETE PUT UPDATE
	fmt.Println("method---->", r.Method)
	// go
	fmt.Println("url---->", r.URL.Path)
	fmt.Println("header---->", r.Header)
	fmt.Println("body---->", r.Body)
	// 回复
	w.Write([]byte("www.baidu.com"))
}
```

运行结果：

```go
127.0.0.1:62382 连接成功
method----> GET
url----> /go
header----> map[Accept:[text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9] Accept-Encoding:[gzip, deflate, br] Accept-Language:[zh-CN,zh;q=0.9] Cache-Control:[max-age=0] Connection:[keep-alive] Sec-Ch-Ua:[" Not A;Brand";v="99", "Chromium";v="98", "Google Chrome";v="98"] Sec-Ch-Ua-Mobile:[?0] Sec-Ch-Ua-Platform:["macOS"] Sec-Fetch-Dest:[document] Sec-Fetch-Mode:[navigate] Sec-Fetch-Site:[none] Sec-Fetch-User:[?1] Upgrade-Insecure-Requests:[1] User-Agent:[Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/98.0.4758.80 Safari/537.36]]
```

![image-20220208110805267](https://gitee.com/ran_yong/mark-down-table-upload/raw/master/img/image-20220208110805267.png)

### HTTP服务端

```go
package main

import (
	"fmt"
	"io"
	"net/http"
)

func main() {
	resp, _ := http.Get("https://www.baidu.com")
	defer resp.Body.Close()
	fmt.Println("状态码--->", resp.Status)
	fmt.Println(resp.Header)
	// 200 OK
	buf := make([]byte, 1024)
	for {
		n, err := resp.Body.Read(buf)
		if err != nil && err != io.EOF {
			fmt.Println(err)
			return
		} else {
			fmt.Println("读取完毕")
			res := string(buf[:n])
			fmt.Println(res)
			break
		}
	}
}
```

运行结果：

```go
package main

import (
	"fmt"
	"io"
	"net/http"
)

func main() {
	resp, _ := http.Get("https://www.baidu.com")
	defer resp.Body.Close()
	fmt.Println("状态码--->", resp.Status)
	// 200 OK
	fmt.Println(resp.Header)
	buf := make([]byte, 1024)
	for {
		// 接收服务端信息
		n, err := resp.Body.Read(buf)
		if err != nil && err != io.EOF {
			fmt.Println(err)
			return
		} else {
			fmt.Println("读取完毕")
			res := string(buf[:n])
			fmt.Println(res)
			break
		}
	}
}
```

运行结果：

```go
状态码---> 200 OK
map[Accept-Ranges:[bytes] Cache-Control:[no-cache] Connection:[keep-alive] Content-Length:[227] Content-Type:[text/html] Date:[Tue, 08 Feb 2022 03:33:18 GMT] P3p:[CP=" OTI DSP COR IVA OUR IND COM " CP=" OTI DSP COR IVA OUR IND COM "] Pragma:[no-cache] Server:[BWS/1.1] Set-Cookie:[BD_NOT_HTTPS=1; path=/; Max-Age=300 BIDUPSID=CB200783148EA7D61872E0669D6CA9FD; expires=Thu, 31-Dec-37 23:55:55 GMT; max-age=2147483647; path=/; domain=.baidu.com PSTM=1644291198; expires=Thu, 31-Dec-37 23:55:55 GMT; max-age=2147483647; path=/; domain=.baidu.com BAIDUID=CB200783148EA7D6B809366876584A91:FG=1; max-age=31536000; expires=Wed, 08-Feb-23 03:33:18 GMT; domain=.baidu.com; path=/; version=1; comment=bd] Strict-Transport-Security:[max-age=0] Traceid:[1644291198353161447413072606535956375628] X-Frame-Options:[sameorigin] X-Ua-Compatible:[IE=Edge,chrome=1]]
读取完毕
<html>
<head>
        <script>
                location.replace(location.href.replace("https://","http://"));
        </script>
</head>
<body>
        <noscript><meta http-equiv="refresh" content="0;url=http://www.baidu.com/"></noscript>
</body>
</html>
```

### WebSocket编程

#### websocket是什么

- WebSocket是一种在单个TCP连接上进行全双工通信的协议
- WebSocket使得客户端在服务器之间的数据交换变得更加简单，允许服务端主动向客户端推送数据
- 在WebSocket API中，浏览器和服务器只需要完成一次握手，两者之间就可以直接创建持久性的连接，并进行双向数据传输
- 需要安装第三方包
  - cmd中：go get -u -v github.com/gorilla/websocket

#### 举个聊天室的例子：

在同一级别下新建4个go文件分别是：

- connection.go
- data.go
- hub.go
- server.go

::: details 点击查看代码

`server.g`

```go
package main

import (
	"fmt"
	"github.com/gorilla/mux"
	"net/http"
)

func main() {
	router := mux.NewRouter()
	go h.run()
	router.HandleFunc("/ws", myws)
	if err := http.ListenAndServe("127.0.0.1:8000", router); err != nil {
		fmt.Println("err:", err)
	}
}
```

`hub.go`

```go
package main

import "encoding/json"

var h = hub{
	c: make(map[*connection]bool),
	u: make(chan *connection),
	b: make(chan []byte),
	r: make(chan *connection),
}

type hub struct {
	c map[*connection]bool
	b chan []byte
	r chan *connection
	u chan *connection
}

func (h *hub) run() {
	for {
		select {
		case c := <-h.r:
			h.c[c] = true
			c.data.Ip = c.ws.RemoteAddr().String()
			c.data.Type = "handshake"
			data_b, _ := json.Marshal(c.data)
			c.sc <- data_b
		case c := <-h.u:
			if _, ok := h.c[c]; ok {
				delete(h.c, c)
				close(c.sc)
			}
		case data := <-h.b:
			for c := range h.c {
				select {
				case c.sc <- data:
					delete(h.c, c)
					close(c.sc)
				}
			}
		}
	}
}
```

`data.go`

```go
package main

type Data struct {
	Ip       string   `json:"ip"`
	User     string   `json:"user"`
	From     string   `json:"from"`
	Type     string   `json:"type"`
	Content  string   `json:"content"`
	UserList []string `json:"user_list"`
}
```

`connection.go`

```go
package main

import (
	"encoding/json"
	"fmt"
	"github.com/gorilla/websocket"
	"net/http"
)

type connection struct {
	ws   *websocket.Conn
	sc   chan []byte
	data *Data
}

var wu = &websocket.Upgrader{ReadBufferSize: 512,
	WriteBufferSize: 512, CheckOrigin: func(r *http.Request) bool {
		return true
	}}

func myws(w http.ResponseWriter, r *http.Request) {
	ws, err := wu.Upgrade(w, r, nil)
	if err != nil {
		return
	}
	c := &connection{sc: make(chan []byte, 256), ws: ws, data: &Data{}}
	h.r <- c
	go c.writer()
	c.reader()
	defer func() {
		c.data.Type = "logout"
		user_list = del(user_list, c.data.User)
		c.data.UserList = user_list
		c.data.Content = c.data.User
		data_b, _ := json.Marshal(c.data)
		h.b <- data_b
		h.r <- c
	}()
}

func (c *connection) writer() {
	for message := range c.sc {
		c.ws.WriteMessage(websocket.TextMessage, message)
	}
	c.ws.Close()
}

var user_list = []string{}

func (c *connection) reader() {
	for {
		_, message, err := c.ws.ReadMessage()
		if err != nil {
			h.r <- c
			break
		}
		json.Unmarshal(message, &c.data)
		switch c.data.Type {
		case "login":
			c.data.User = c.data.Content
			c.data.From = c.data.User
			user_list = append(user_list, c.data.User)
			c.data.UserList = user_list
			data_b, _ := json.Marshal(c.data)
			h.b <- data_b
		case "user":
			c.data.Type = "user"
			data_b, _ := json.Marshal(c.data)
			h.b <- data_b
		case "logout":
			c.data.Type = "logout"
			user_list = del(user_list, c.data.User)
			data_b, _ := json.Marshal(c.data)
			h.b <- data_b
			h.r <- c
		default:
			fmt.Print("========default================")
		}
	}
}

func del(slice []string, user string) []string {
	count := len(slice)
	if count == 0 {
		return slice
	}
	if count == 1 && slice[0] == user {
		return []string{}
	}
	var n_slice = []string{}
	for i := range slice {
		if slice[i] == user && i == count {
			return slice[:count]

		} else if slice[i] == user {
			n_slice = append(slice[:i], slice[i+1:]...)
			break
		}
	}
	fmt.Println(n_slice)
	return n_slice
}
```

`local.html`

```html
<!DOCTYPE html>
<html>
<head>
    <title></title>
    <meta http-equiv="content-type" content="text/html;charset=utf-8">
    <style>
        p {
            text-align: left;
            padding-left: 20px;
        }
    </style>
</head>
<body>
<div style="width: 800px;height: 600px;margin: 30px auto;text-align: center">
    <h1>演示聊天室</h1>
    <div style="width: 800px;border: 1px solid gray;height: 300px;">
        <div style="width: 200px;height: 300px;float: left;text-align: left;">
            <p><span>当前在线:</span><span id="user_num">0</span></p>
            <div id="user_list" style="overflow: auto;">
            </div>
        </div>
        <div id="msg_list" style="width: 598px;border:  1px solid gray; height: 300px;overflow: scroll;float: left;">
        </div>
    </div>
    <br>
    <textarea id="msg_box" rows="6" cols="50" onkeydown="confirm(event)"></textarea><br>
    <input type="button" value="发送" onclick="send()">
</div>
</body>
</html>

<script type="text/javascript">
    var uname = prompt('请输入用户名', 'user' + uuid(8, 16));
    var ws = new WebSocket("ws://127.0.0.1:8080/ws");
    ws.onopen = function () {
        var data = "系统消息：建立连接成功";
        listMsg(data);
    };
    ws.onmessage = function (e) {
        var msg = JSON.parse(e.data);
        var sender, user_name, name_list, change_type;
        switch (msg.type) {
            case 'system':
                sender = '系统消息: ';
                break;
            case 'user':
                sender = msg.from + ': ';
                break;
            case 'handshake':
                var user_info = {'type': 'login', 'content': uname};
                sendMsg(user_info);
                return;
            case 'login':
            case 'logout':
                user_name = msg.content;
                name_list = msg.user_list;
                change_type = msg.type;
                dealUser(user_name, change_type, name_list);
                return;
        }
        var data = sender + msg.content;
        listMsg(data);
    };
    ws.onerror = function () {
        var data = "系统消息 : 出错了,请退出重试.";
        listMsg(data);
    };
    function confirm(event) {
        var key_num = event.keyCode;
        if (13 == key_num) {
            send();
        } else {
            return false;
        }
    }
    function send() {
        var msg_box = document.getElementById("msg_box");
        var content = msg_box.value;
        var reg = new RegExp("\r\n", "g");
        content = content.replace(reg, "");
        var msg = {'content': content.trim(), 'type': 'user'};
        sendMsg(msg);
        msg_box.value = '';
    }
    function listMsg(data) {
        var msg_list = document.getElementById("msg_list");
        var msg = document.createElement("p");
        msg.innerHTML = data;
        msg_list.appendChild(msg);
        msg_list.scrollTop = msg_list.scrollHeight;
    }
    function dealUser(user_name, type, name_list) {
        var user_list = document.getElementById("user_list");
        var user_num = document.getElementById("user_num");
        while(user_list.hasChildNodes()) {
            user_list.removeChild(user_list.firstChild);
        }
        for (var index in name_list) {
            var user = document.createElement("p");
            user.innerHTML = name_list[index];
            user_list.appendChild(user);
        }
        user_num.innerHTML = name_list.length;
        user_list.scrollTop = user_list.scrollHeight;
        var change = type == 'login' ? '上线' : '下线';
        var data = '系统消息: ' + user_name + ' 已' + change;
        listMsg(data);
    }
    function sendMsg(msg) {
        var data = JSON.stringify(msg);
        ws.send(data);
    }
    function uuid(len, radix) {
        var chars = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'.split('');
        var uuid = [], i;
        radix = radix || chars.length;
        if (len) {
            for (i = 0; i < len; i++) uuid[i] = chars[0 | Math.random() * radix];
        } else {
            var r;
            uuid[8] = uuid[13] = uuid[18] = uuid[23] = '-';
            uuid[14] = '4';
            for (i = 0; i < 36; i++) {
                if (!uuid[i]) {
                    r = 0 | Math.random() * 16;
                    uuid[i] = chars[(i == 19) ? (r & 0x3) | 0x8 : r];
                }
            }
        }
        return uuid.join('');
    }
</script>
```

::: 

运行：

```go
go run server.go hub.go data.go connection.go
```

**然后执行local.html**

运行结果：

![image-20220208235257575](https://gitee.com/ran_yong/mark-down-table-upload/raw/master/img/image-20220208235257575.png)

## 并发编程

### 并发介绍

**进程和线程**

> - 进程时程序在操作系统中一次执行过程，系统进行资源分配和调度的一个独立单位
> - 线程时进程的一个执行实体，是CPU调度和分派的基本单位，它是比进程更小的能独立运行的基本单位
> - 一个进程可以创建和撤销多个线程；同一个进程中的多个线程之间可以并发执行

**并发和并行**

>- 多线程程序在一个核的CPU上运行，就是并发
>- 多线程在多个核的CPU上运行，就是并发

**协程和线程**

> - 协程：独立的栈空间，共享堆空间，调度由用户自己控制，本质上有点类似于用户级线程，这些用户级线程的调度也是自己实现的
> - 线程：一个线程上可以抛多个写协程，协程师轻量级的线程

### Goroutine

> 在Java/c++中我们要实现并发编程的时候，我们通常需要自己维护一个线程池，并且需要自己去包装一个又一个的任务，同时需要自己去调度线程执行任务并维护上下文切换
>
> Go语言中的goroutine就是这样一种机制，goroutine的概念类似于线程，但goroutine是由Go的运行时调度和管理的。Go程序会智能地将goroutine中的任务合理地分配给每个CPU。Go语言之所以会被称为现代的编程语言，就是因为它在语言层面已经内置了调度和上下文切换的机制。
>
> 在Go语言编程中你不需要去自己写进程、线程、协程，你的技能包里只有一个技能-goroutine，当你需要让某个任务并发执行的时候，你只需要把这个任务包装成一个函数，开启一个goroutine去执行这个函数就可以了

### 使用goroutine

> Go语言中使用goroutine非常简单，只需要在调用函数的时候在前面加上go关键字，就可以为一个函数创建一个goroutine。
>
> 一个goroutine必定对应一个函数，可以创建多个goroutine去执行相同的函数。

### 启动单个goroutine

> 启动goroutine的方式非常简单，只需要在调用的函数(普通函数和匿名函数)前面加上一个go关键字。

举个例子：

```go
package main

import "fmt"

func hello() {
	fmt.Println("Hello Goroutine")
}
func main() {
	hello()
	fmt.Println("main goroutine done")
}
```

运行结果：

```go
Hello Goroutine
main goroutine done
```

这个示例中hello函数和下面的语句是串行的，执行的结果是打印完`Hello Goroutine`后打印 `main goroutine done`

接下来我们调用hello函数钱敏啊加上关键字go，也就是启动一个goroutine去执行hello这个函数。

```go
func main() {
	go hello()
	fmt.Println("main goroutine done")
}
```

运行结果：

```go
main goroutine done
```

这一次的执行结果只打印了`main goroutine done`，并没有打印`Hello Goroutine`,为什么呢？

在程序启动时，Go程序就会为main()函数创建一个默认的goroutine。

所以我们要想办法让main函数等一等hello函数，最简单粗暴的方式就是time.Sleep了。

```go
package main

import (
	"fmt"
	"time"
)

func hello() {
	fmt.Println("Hello Goroutine")
}
func main() {
	go hello() // 启动另外一个goroutine去执行hello函数
	fmt.Println("main goroutine done")
	time.Sleep(time.Second)
}
```

运行结果：

```go
main goroutine done
Hello Goroutine
```

执行上面的代码你会发现，这一次先打印`main goroutine done`，然后紧接这打印`Hello Goroutine`

首先为什么会打印`main goroutine done`是因为我们在创建新的`goroutine`的时候需要花费一些时间，而此时main函数所在的`goroutine`是继续执行的。

### 启动多个goroutine

> 在Go语言中实现并发就是这样简单，我们还可以启动多个goroutine

启动多个goroutine （这里使用了sync.WaitGroup来实现goroutine的同步）

```go
package main

import (
	"fmt"
	"sync"
)

var wg sync.WaitGroup

func hello(i int) {
	defer wg.Done() // goroutine结束就登记-1
	fmt.Println("hello goroutine", i)
}

func main() {
	for i := 0; i < 5; i++ {
		wg.Add(1) // 启动一个goroutine就登记+1
		go hello(i)
	}
	wg.Wait() // 等待所有登记的goroutine都结束
}
```

运行结果：

```go
hello goroutine 4
hello goroutine 1
hello goroutine 0
hello goroutine 2
hello goroutine 3
```

多次执行上面的代码，会发现每次打印的数字的顺序都不一致。这是因为5个goroutine是并发执行的，而goroutine的调度是随机的。

### runtime包

### runtime.Gosched()

> 让出CPU时间片，重新等待安排任务(大概意思就是本来计划的好好的周末出去烧烤，但是你妈让你去相亲,两种情况第一就是你相亲速度非常快，见面就黄不耽误你继续烧烤，第二种情况就是你相亲速度特别慢，见面就是你侬我侬的，耽误了烧烤，但是还馋就是耽误了烧烤你还得去烧烤)

```go
package main

import (
	"fmt"
	"runtime"
)

func main() {
	go func(s string) {
		for i := 0; i < 2; i++ {
			fmt.Println(s)
		}
	}("world")
	// 主协程
	for i := 0; i < 2; i++ {
		// 切一下，再次分配任务
		runtime.Gosched()
		fmt.Println("hello")
	}
}
```

运行结果：

```go
main goroutine: i = 1
new goroutine: i = 1
main goroutine: i = 2
new goroutine: i = 2
new goroutine: i = 3
```

### runtime.Goexit()

> 退出当前协程（一边烧烤一边相亲，突然发现相亲对象太丑影响烧烤，果断让她滚蛋，然后也就没有然后了）

```go
package main

import (
	"fmt"
	"runtime"
)

func main() {
	go func() {
		defer fmt.Println("A.defer")
		func() {
			defer fmt.Println("B.defer")
			// 结束协程
			runtime.Goexit()
			defer fmt.Println("C.defer")
			fmt.Println("B")
		}()
		fmt.Println("A")
	}()
	for {
	}
}
```

运行结果：

```go
B.defer
A.defer
```

### runtime.GOMAXPROCS

> Go运行时的调度器使用GOMAXPROCS参数来确定需要使用多少个OS线程来同时执行Go代码。默认值时机器上的CPU核心数。
>
> Go语言中可以通过runtime.GOMAXPROCS()函数设置当前程序并发时占用的CPU逻辑核心数。
>
> 我们可以通过将任务分配到不同的CPU逻辑核心上实现并行的效果。

举个例子：

```go
package main

import (
	"fmt"
	"runtime"
	"time"
)

func a() {
	for i := 0; i < 5; i++ {
		fmt.Println("A:", i)
	}
}

func b() {
	for i := 0; i < 5; i++ {
		fmt.Println("B:", i)
	}
}

func main() {
	runtime.GOMAXPROCS(1)
	go a()
	go b()
	time.Sleep(time.Second)
}
```

运行结果：

```go
B: 0
B: 1
B: 2
B: 3
B: 4
A: 0
A: 1
A: 2
A: 3
A: 4
```

两个任务只有一个逻辑核心，此时时做完一个任务再做另一个任务。将逻辑核心设为2，此时两个任务并行执行，代码如下：

```go
package main

import (
	"fmt"
	"runtime"
	"time"
)

func a() {
	for i := 0; i < 5; i++ {
		fmt.Println("A:", i)
	}
}
func b() {
	for i := 0; i < 5; i++ {
		fmt.Println("B", i)
	}
}
func main() {
	runtime.GOMAXPROCS(2)
	go a()
	go b()
	time.Sleep(time.Second)
}
```

运行结果：

```go
A: 0
A: 1
A: 2
A: 3
A: 4
B 0
B 1
B 2
B 3
B 4
```

Go语言中的操作系统线程和goroutine的关系：

- 一个操作系统线程对应用户态多个goroutine
- go程序可以同时使用多个操作系统线程
- goroutine和OS线程时多对多的关系，即m:n
