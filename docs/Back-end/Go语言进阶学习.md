---
date: "2022/01/01"
categories: [后端]
tag: [Go]
---

# Go语言进阶学习

## 写在前面：

> Go是一门编译型语言，Go语言的工具链将源代码及其依赖转换成计算机的机器指令。Go语言提供的工具都通过一个单独的命令`go`调用，`go`命令有一系列的子命令。最简单的一个子命令就是`run`。这个命令编译一个或多个以.go结尾的源文件。

## Hello,World

```go
package main

import "fmt"

func main() {
	fmt.Println("Hello, 世界")
}
```

编译：

```go
go run helloworld.go
```

输出：

```
Hello, 世界
```

> 如果你希望能够编译这个程序，保存编译后即过以备将来之用。可以用build子命令。

```go
go build helloworld.go
```

> 这个命令生成一个以helloworld的课执行的二进制文件，之后可以随时运行它。不需要任何处理。

```shell
./helloworld
Hello, 世界
```

::: tip
Go的标准库提供了100多个包，以支持常见功能，比如输入、输出、排序以及文本处理。比如`fmt`包，就含有格式化输出、接收输入的函数。`println`是其中的一个基础函数，可以打印以空格间隔的一个或多个值，并在最后添加一个换行符，从而输出一整行。

`main`包比较特殊。它定义了一个独立的可执行的成宿，而不是一个库。在`main`里面的`main`函数也很特殊，它是整个程序执行的入口。`main`函数所做的事情就是程序做的。当然，`main`函数一般调用其它包里的函数完成很多工作。比如`fmt.Println`。

必须告诉编译器源文件需要哪些包，这就是`import`声明以及随后的`package`声明扮演的角色。

Go语言不需要在语句或者声明的末尾添加分号，排除一行上有多条语句。

:::

### 命令行参数

> 大多数程序都是处理输入，参数输出。

`os`包以跨平台的方式，提供了一些与操作系统交互的函数和变量。程序的命令行参数可从`os`包的`Args`量获取；`os`包外部使用`os.Args`访问该变量。

`os.Args`变量是一个字符串的切片，`os.Args`的第一个元素，`os.Args[0]`,是命令本身的名字；其它的元素则是程序启动时传给它的参数。`s[m:n]`形式的切片表达式，产生从第`m`个元素到第`n-1`个元素的切片;如果省略切片表达式的m或n，会默认传入0或len(s)，因此前面的切片可以简写成`os.Args[1:]`

```go
package main

import (
	"fmt"
	"os"
)

func main() {
	var s, sep string
	for i := 1; i < len(os.Args); i++ {
		s += sep + os.Args[i]
		sep = " "
		fmt.Println(s)
	}
}
```

::: tip

注释语句以`//`开头。

符号 := 是短变量声明

:::

Go语言只有for循环着一种循环语句

```go
for initialization; condition; post{
	// 语句
}
```

::: tip

for循环三个部分部需要括号包围。大括号强制要求，左大括号必须和`post`语句在同一行。

`initialization`语句是可选的，在循环开始前执行。`initialization`如果存在，必须是一条简单语句。即，短变量声明、自增语句、赋值语句或函数调用。

`condition`是一个布尔表达式，其值在每次循环迭代开始时计算。如果为`true`则执行循环体语句。

`post`语句在循环体执行结束后执行，之后再次对`condition`求值。`condition`为`false`时，循环结束。

:::

for循环的三个部分每个都可以省略，如果省略`initialization`和`post`，分号也可以省略:

```go
// 传统的while循环
for condition {
    // ...
}
```

如果连`condition`也省略了

```go
// 传统的无限循环
for {
	// ...
}
```

> 这就变成了一个无限循环，尽管如此。还可以用其他的方式终止循环，如一条`break`或`return`语句。

```go
package main

import (
	"fmt"
	"os"
)

func main() {
	s, sep := "", ""
	for _, arg := range os.Args[1:] {
		s += sep + arg
		sep = " "
	}
	fmt.Println(s)
}
```

::: tip

Go语言不允许使用无用的局部变量，因为会导致编译错误。

Go语言中这种情况的解决方法是用`空标识符`，即`_`。空标识符可用于任何语法需要变量但程序逻辑不需要的时候，例如：在循环里，丢弃不需要的循环索引，保留元素值。

:::

请看下列两种变量声明

```go
s := ""
var s string
```

> 第一种形式，是一条短变量的生命，最简洁，但只能用于在函数内部。而不能用于包变量。
>
> 第二种形式依赖于字符串的默认初始化零值机制，被初始化为""。

### 查找重复的行

> 对文件做拷贝、打印、搜索、排序、统计或类似事情的程序都有一个差不多的程序结构：一个处理输入的循环，在每个元素上执行计算处理，在处理的同时或最后产生输出。

```go
package main

import (
	"bufio"
	"fmt"
	"os"
)

func main() {
	counts := make(map[string]int)
	input := bufio.NewScanner(os.Stdin)
	for input.Scan() {
		counts[input.Text()]++
	}
	for line, n := range counts {
		if n > 1 {
			fmt.Printf("%d\t%s\n", n, line)
		}
	}
}
```

> 正如`for`循环一样，`if`语句条件两边也不加括号，但是主体部分需要家。`if`语句的`else`部分时可选的，在`if`的条件为`false`时执行。

::: tip

`map`存储了键/值的集合，对集合元素，提供常数时间的存、取或测试操作。键可以时任意类型，只要其值能用`==`运算符比较，最常见的例子是字符串；值则可以是任意类型。

每次`dup`读取一行输入，该行被当作`map`,其对应的值递增。

`counts[input.Text()]++`语句等价于：

```go
line := input.Text()
counts[line] = counts[line] + 1
```

`map`中不含某个键时不用担心，首次读到新行时，等号右边的表达式的值将被计算为其类型的零值，对于`int`即0。

继续来看`bufio`包，它使处理输入和输出方便又高效。`Scanner`类型时该包最有用的特性之一,它读取输入并将其拆成行或者单词；通常时处理形式的输入最简单的方法。

程序使用短变量声明创建`bufio.Scanner`类型的变量`input`。

```go
input := bufio.NewScanner(os.Stdin)
```

该变量从程序的标准输入中读取内容。每次调用`input.Scanner`,即读入下一行，并移除行末的换行符；读取的内容可以调用`input.Text()`得到。`Scan`函数在读到一行时返回`true`,在无输入时返回`false`。

`fmt.Printf`函数对一些表达式产生格式化输出。该函数的首个参数时格式字符串，指定后续参数被如何格式化。各个参数的格式取决于“转换字符”，形式为百分号后跟一个字母。

:::

| %d         | 十进制整数                               |
| ---------- | ---------------------------------------- |
| &x，%o，%b | 十六进制，八进制，二进制整数             |
| %f，%g，%e | 单元格                                   |
| %t         | 布尔值                                   |
| %c         | 字符                                     |
| %s         | 字符串                                   |
| %q         | 带双引号的字符串"abc"或带单引号的字符'c' |
| %v         | 变量的自然形式                           |
| %T         | 变量的类型                               |
| %%         | 字面上的百分号标志                       |

`dup1`的格式字符串中还有制表符`\t`和换行符`\n`。字符串字面上可能含有这些代表不可见字符的转义字符。默认情况下，`Printf`不会换行。以字母`f`结尾的格式化函数。

```go
package main
import (
    "bufio"
    "fmt"
    "os"
)
func main() {
    counts := make(map[string]int)
    files := os.Args[1:]
    if len(files) == 0 {
        countLines(os.Stdin, counts)
    } else {
        for _, arg := range files {
            f, err := os.Open(arg)
            if err != nil {
} }
    fmt.Fprintf(os.Stderr, "dup2: %v\n", err)
continue
}
countLines(f, counts)
f.Close()
    for line, n := range counts {
        if n > 1 {
            fmt.Printf("%d\t%s\n", n, line)
        }
} }
func countLines(f *os.File, counts map[string]int) {
    input := bufio.NewScanner(f)
    for input.Scan() {
        counts[input.Text()]++
    }
}
```

`os.Open`函数返回两个值。第一个值是被打开的文件(`*os.File`),其后被`Scanner`读取。

`os.Open`返回第二个值是内置`error`类型的值。如果`err`等于内置`nil`,那么文件被成功打开。读取文件，直到文件结束，然后调用`Close`关闭该文件，并释放占用的所有资源。相反的话，如果`err`的值不为`nil`，说明打开文件时出错了。

```go
package main

import (
	"fmt"
	"io/ioutil"
	"os"
	"strings"
)

func main() {
	counts := make(map[string]int)
	for _, filename := range os.Args[1:] {
		data, err := ioutil.ReadFile(filename)
		if err != nil {
			fmt.Fprintf(os.Stderr, "dup3: %v\n", err)
			continue
		}
		for _, line := range strings.Split(string(data), "\n") {
			counts[line]++
		}
	}
	for line, n := range counts {
		if n > 1 {
			fmt.Printf("%d\t%s\n", n, line)
		}
	}
}
```

`ReadFile`函数返回一个字节切片，必须把它转换为`string`,才能用`strings.Split`分割。

### 获取URL

> Go语言在net这个强大的package的帮助下提供了一系列的package来做这件事，使用这些包可以更简明的用网络收发信息，还可以建立更底层的网络连接，编写服务器程序。

```go
package main

import (
	"fmt"
	"io/ioutil"
	"net/http"
	"os"
)

func main() {
	for _, url := range os.Args[1:] {
		resp, err := http.Get(url)
		if err != nil {
			fmt.Fprintf(os.Stderr, "fetch: %v\n", err)
			os.Exit(1)
		}
		b, err := ioutil.ReadAll(resp.Body)
		resp.Body.Close()
		if err != nil {
			fmt.Fprintf(os.Stderr, "fetch: reading %s: %v\n", url, err)
			os.Exit(1)
		}
		fmt.Printf("%s", b)
	}
}
```

这个程序从葱两个package中导入了函数，`net/http`和`io/ioutil`包

`http.Get`函数是创建`HTTP`请求的函数，如果获取过程没有出错，那么会在`resp`这个结构体中得到访问的请求结果。`resp`的`Body`字段包括一个可读服务器响应流。`ioutill.ReadAll`函数从`response`中读取到全部内容；将其结果保存到变量b中。`resp.Body.Close`关闭`resp`的`Body`流，防止资源泄漏，Printf函数会将结果b写出到标准输出流中。

```go
go run url.go http://www.baidu.com
```

![](https://gitee.com/ran_yong/mark-down-table-upload/raw/master/img/image-20211225104934220.png)

HTTP请求如果失败的话，会得到下面这样的结果：

````go
go run url.go htttps://sakura.daydayupran.top234/

fetch: Get "https://sakura.daydayupran.top234/": dial tcp: lookup sakura.daydayupran.top234: no such host
````

无论哪种失败，我们的程序都用了os.Exit函数来终止进程，并且返回一个status错误码，其值为1。

### 并发获取多个URL

> Go语言最有意思并且最新奇的特性就是对并发编程的支持。

```go
package main

import (
	"fmt"
	"io"
	"io/ioutil"
	"net/http"
	"os"
	"time"
)

func main() {
	start := time.Now()
	ch := make(chan string)
	for _, url := range os.Args[1:] {
		go fetch(url, ch)
	}
	for range os.Args[1:] {
		fmt.Println(<-ch)
	}
	fmt.Printf("%.2fs elapsed\n", time.Since(start).Seconds())
}

func fetch(url string, ch chan<- string) {
	start := time.Now()
	resp, err := http.Get(url)
	if err != nil {
		ch <- fmt.Sprint(err)
		return
	}
	nbytes, err := io.Copy(ioutil.Discard, resp.Body)
	resp.Body.Close()
	if err != nil {
		ch <- fmt.Sprintf("while reading %s:%v", url, err)
	}
	secs := time.Since(start).Seconds()
	ch <- fmt.Sprintf("%.2fs %7d %s", secs, nbytes, url)
}
```

下面使用fetchall来请求多个地址:

```go
go run fechall.go http://www.hao123.com http://www.baidu.com

0.06s  329011 http://www.baidu.com
0.47s  450657 http://www.hao123.com
0.47s elapsed
```

`goroutine`是一种函数的并发执行方式，而`channel`是用来在`goroutine`之间进行参数传递。

### Web服务

> Go语言的内置库使用写一个类似fetch的web服务器变得异常地简单

```go
// Server1 is a minimal "echo" server.
package main

import (
	"fmt"
	"log"
	"net/http"
)

func main() {
	http.HandleFunc("/", handler)
	log.Fatal(http.ListenAndServe("localhost:8000", nil))
}

func handler(w http.ResponseWriter, r *http.Request) {
	fmt.Fprintf(w, "URL.Path = %q\n", r.URL.Path)
}
```

main函数将所有发送到/路径下的请求和handler函数关联起来，/开头的请求其实就是所有发送到当前站点上的请求，服务监听8000端口。发送到这个服务的"请求"是一个http.Request类型的对象，这个对象中包含了请求中的一系列相关字段，其中就包括我们需要的URL。

![](https://gitee.com/ran_yong/mark-down-table-upload/raw/master/img/image-20211225173741395.png)



```go
package main

import (
	"fmt"
	"log"
	"net/http"
	"sync"
)

var mu sync.Mutex
var count int

func main() {
	http.HandleFunc("/", handler)
	http.HandleFunc("/count", counter)
	log.Fatal(http.ListenAndServe("localhost:8000", nil))
}

func handler(w http.ResponseWriter, r *http.Request) {
	mu.Lock()
	count++
	mu.Unlock()
	fmt.Fprintf(w, "URL.Path=%q\n", r.URL.Path)
}

func counter(w http.ResponseWriter, r *http.Request) {
	mu.Lock()
	fmt.Fprintf(w, "Count %d\n", count)
	mu.Unlock()
}
```

这个服务器有两个请求处理函数，根据请求的url不同会调用不同的函数：对/count这个url的请求会调用到count这个函数，其它url都会调用默认的处理函数。如果你的请求pattern是以/结尾，那么所有以该url为前缀的url都会被这条规则匹配。

## 程序结构

> Go语法和其他结构语言一样样，一个大的程序由很多小的基础构件组成。变量保存值，简单的加法和减法运算被组合成较复杂的表达式。

### 命名

> Go语言中的函数名、变量名、常量名、类型名、语句标号和包名等所有的命名，都遵循一个简单的命名规则：一个名字必须以一个字母或下划线开头，后面可以跟任何数量的字母、数字或下划线。大写字母和小写字母是不同的。

Go语言中类似if和switch的关键字有25个；关键字不能用于自定义名字，只能在特定语法结构中使用。

| break    | default     | func   | interface | Select |
| -------- | ----------- | ------ | --------- | ------ |
| case     | defer       | go     | map       | struct |
| chan     | else        | goto   | package   | switch |
| const    | fallthrough | if     | range     | type   |
| continue | for         | import | return    | Var    |

Go语言推荐使用驼峰命名，当名字又几个单词组成的生活优先使用大小写分隔，而不是优先使用下划线分隔。

### 声明

>声明语句定义了程序的各大实体对象以及部分或全部的属性。Go语言主要由四种类型的声明语句：var、const、type和func，分别对应变量、常量、类型和函数实体对象的声明。

一个Go语言编写的程序对应一个或多个以go为文件后缀名的源文件中。

```go
package main

import "fmt"

const boilingF = 212.0

func main() {
	var f = boilingF
	var c = (f - 32) * 5 / 9
	fmt.Printf("boiling point = %g°F or %g°C\\n", f, c)
}
```

其中常量boilingF是在包一级范围声明语句声明的，然后f和c两个变量是在main函数内部
