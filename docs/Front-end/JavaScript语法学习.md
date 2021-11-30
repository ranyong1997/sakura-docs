---
date: 2021/11/12 12:45
categories: [前端]
tag: [前端三剑客,JavaScript]
---

# JavaScript语言

## JavaScript 是Web 的编程语言

> JS使用领域
> 浏览器的平台化
> Node
> 数据库操作
> 移动平台开发
> 内嵌脚本语言
> 跨平台的桌面应用程序

`正式开始`

## 语法

举个例子:

```javascript
var a = 1 + 3;
```

### 变量

```javascript
var a = 1;
```

上面的代码先声明变量a，然后在变量a与数值1之间建立引用关系，称为数值1，"赋值"给变量a

```javascript
var a;
a = 1;
var a;
a // underfined
```

如果只是声明变量而没有赋值，则该变量的值是underfined，表示"无定义"

```javascript
var a, b;
```

可以在同一条var命令中声明多个变量

```javascript
var x = 1;
var x;
x // 1
```

如果使用var重新声明一个已经存在的变量，是无效的。上面的代码中，变量x声明了两次，第二次是无效的。

```javascript
var x = 1;
var x = 2;
// 等同于
var x = 1;
var x;
x = 2;
```

但是，如果第二次声明的时候的时候进行了赋值，则会覆盖掉前面的值。

## 变量提升

JavaScript 引擎的工作方式是，先解析代码，获取所有被声明的变量，然后再一行行地运行。

```javascript
console.log(a);
var a = 1;
```

上面的代码首先使用了console.log(a)方法，在控制台(console)显示变量a的值，这是变量a还没有声明和赋值，所以这是一种错误的做法，但是实际上不会报错。因为存在变量提升，真正运行的是下面的代码

```javascript
var a;
console.log(a);
a = 1; // underfined,表示变量a已声明，但还未赋值
```

### 标识符

标识符指的是用来识别各种值的合法名称。最常见的标识符就是变量名，以及后面要提到的函数名。

标识符有一套命名规则，不符合规则的就是非法标识符，会报错

简单说，标识符命名规则如下

- 第一个字符：可以任意[Unicode字母](https://baike.baidu.com/item/Unicode字符列表/12022016?fr=aladdin)(包括英文字母和其他语言的字母)，以及美元符号($)和下划线(_)
- 第二个字符及后面的字符：除了[Uniode字母](https://baike.baidu.com/item/Unicode字符列表/12022016?fr=aladdin)

**下面这些都是合法的标识符**

```javascript
arg0_tmp$elemπ
```

**下面这些则是不合法的标识符**

```javascript
la	// 第一个字符串不能是数字23	// 同上***	// 标识符不能包含星号a + b	// 标识符不能包含加号-d	// 标识符不能包含减号或连词线
```

**中文是合法的标识符，可以用作变量名**

```javascript
var 临时变量 = 1;
```

JavaScript 有一些保留字，不能用作标识符：arguments、break、case、catch、class、const、continue、debugger、default、delete、do、else、enum、eval、export、extends、false、finally、for、function、if、implements、import、in、instanceof、interface、let、new、null、package、private、protected、public、return、static、super、switch、this、throw、true、try、typeof、var、void、while、with、yield

### 注释

//    单行注释

/* */    多行注释

```javascript
// 这是单行注释/*这是多行注释*/
```

### 区块

JS使用大括号，将多个相关的语句组合在一起，称为"区块"

区块往往用来构成其他更复杂的语法结构,比如for、if、while、function等

### 条件语句

JS提供了if结构和switch结构，完成条件判断

**if结构**

**if结构先判断一个表达式的布尔值，然后根据布尔值的真伪，执行不同的语句。**

**true表示"真"、false表示"假"**

```javascript
if(布尔值)  语句;if(m=== 3) {	m += 1;}
```

上面代码表示，只有在m等于3时，才会将其加上1。

注意，if后面的表达式之中，赋值表达式(=)、严格相等运算符(===)、相等运算符(==)

**if...else结构**

**if 代码块后面，还可以跟一个else代码块，表示不满足条件时，所要执行的代码**

```javascript
if (m === 3) {
  //	满足条件时，执行的语句
}
  else {
    //	不满足条件时，执行的语句
  }
```

上面的代码判断变量m是否等于3，如果等于就执行if代码块，否则执行else代码块。

**if...else if...else语句**

**对同一个变量进行多次判断时，多个if...else语句**

```javascript
if (m === 0) {
  // ...
} else if (m === 1) {
  // ...
} else if (m === 2) {
  // ...
} else {
  // ...
}
```

**switch结构**

**多个if...else 连在一起使用的时候，可以转为使用更方便的switch结构**

```javascript
switch(fruit) {
  case "banana":
    // ...        
    break;    
  case "apple":
    // ...
    break;    
  default:
    // ...
}
```

上面代码根据变量fruit的值，选择执行相应的case。如果所有case都不符合，则执行最后的default部分。需要注意的是，每个case代码快内部的break语句不能少，否则会接下去执行下一个case代码快，而不是跳出switch结构

```javascript
var x = 1;switch (x) {
  case 1:
    console.log('x 等于1');
    // x等于1
  case 2:
    console.log('x 等于2');
    // x 等于2
  case 3:
    console.log('x 等于3');
    // x 等于3
  default:
    console.log('x 等于其他值');
    // x等于其他值
}
```

上面代码中，case代码快之中没有break语句，导致不会跳出switch结构，而会一直执行下去。

```javascript
var x = 1;switch (x) {
  case 1:
    console.log('x 等于1');
    // x 等于1
    break;
  case 2:
    console.log('x 等于2');
    break;
  default:
    console.log('x 等于其他值');
}
```

switch 语句部分和case语句部分，都可以使用表达式

```javascript
var x = 1;switch (x) {
  case true:
    console.log('x 发生类型转换');
    break;
  default:
    console.log('x 没有发生类型转换')
}
// x 没有发生类型转换
```

上面代码中，由于变量x没有发生类型转换，所以不会执行case true 的情况，这表明，switch 语句内部采用的是"严格相等运算符"

**三元运算符**

**JS支持三元运算符(即该运算符需要三个运算子)** **?:** **也可以用于逻辑判断**

**(条件) ? 表达式1: 表达式2**

**上面代码中，如果"条件"为 true，则返回"表达式1"的值，否则返回"表达式2"的值**

```javascript
var even = (n % 2 === 0) ? true: false;
等价于
var even;
if(n % 2 === 0) {
  even = true;
} else { even = false;}
```

上面代码中，如果n可以被2整除，则even等于true，否则等于false

```javascript
var myVar;console.log(myVar ? "myVar 有值" : "myVar 无值")
// myVar 无值
```

上面代码利用三元运算符，输出相应的提示

```javascript
var n = 1;var msg = '数字' + n + '是' + (n % 2 === 0 ? '偶数' : '奇数');
console.log(msg)
// 数字1是奇数
```

上面代码利用三元运算符，在字符串之中插入不同的值

### 循环语句

**while循环**

**while语句包括一个循环条件和一段代码，只要条件为真，就不断循环执行代码块**

```javascript
while (条件) {  语句;}
```

while语句的循环条件是一个表达式，必须放在圆括号中。

```javascript
var i = 0;
while (i <= 10) {
  console.log('i 当前为:' + i);
  i = i +1;
}
```

上面的代码将循环100次，直到i等于10为止。

```javascript
while (true) {
  console.log("Hello, world");
}
```

**for循环**

**for 语句是循环命令的另一种形式，可以指定循环的起点、终点、和终止条件。**

```javascript
for (初始化表达式；条件；递增表达式) {语句}
```

for语句后面的括号里面，有三个表达式

- 初始化表达式：确定循环变量的初始值，只在循环开始时执行一次。
- 条件表达式：每轮循环开始，都要执行这个条件表达式，只有值为真，才可继续循环。

- 递增表达式：每轮循环的最后一个操作，通常用来递增循环变量。

```javascript
var x = 3;
for (var i = 0; i < x; i++) {
  console.log(i);
}
// 0
// 1
// 2
```

所有for循环，都可以改写成while循环

```javascript
var x = 3;
var i = 0;
while (i < x) {
  console.log(i);
  i++;
}
```

**do...while循环**

**do...while循环与while循环类似，唯一的区别就是先运行一次循环体，然后判断循环条件。**

```javascript
do {
  语句
}while (条件);
```

不管条件是否为真，do...while循环至少运行一次，这是这种结构最大的特点，while语句后面的分号注意不要省略。

```javascript
var x = 3;var i = 0;
do{
  console.log(i);
  i++;
}
while(i < x);
// 0
// 1
// 2
```

**break语句和continue语句**

**break语句和continue语句都是具有跳转作用，可以让代码不按既有的顺序执行。**

break语句用于跳出代码块或循环

```javascript
var i = 0;
while (i < 100) {
  console.log('i 当前为: ' + i);
  i++;
  if(i === 10)
    break;
}
```

上面代码只会执行10次循环，一旦i等于10，就会跳出循环。

```javascript
for(var i = 0; i < 5; i++) {
  console.log(i);
  if (i === 3)
    break;
}
// 0
// 1
// 2
// 3
```

上面代码执行到i等于3，就会跳出循环。

continue语句用于立即终止本轮循环，返回循环结构的头部，开始下一轮循环

```javascript
var i = 0;
while (i< 100){
  i++;
  if(i % 2 ===0)
    continue;
  console.log('i当前为:' + i);
}
```

上面代码只有在**i**为奇数时，才会输出**i**的值。如果**i**为偶数，则直接进入下一轮循环。

如果存在多重循环，不带参数**break**语句和**continue**语句都只针对最内层循环

### 标签

JS语言允许，语句前面有标签，想当与定位符，用于跳转程序的任意位置

```javascript
label:	语句
```

标签可以是任意的标识符，但不能保留字，语句部分可以是任意语句

标签通常与break语句和continue语句配合使用，跳出特定的循环

```javascript
top:
for (var i = 0; i < 3; i++){
  for ( var j = 0; j < 3; j++){
    if(i === 1 && j === 1)
      break top;
    console.log('i=' + i + ', j=' +j); 
  }
}
// i=0, j=0
// i=0, j=1
// i=0, j=2
// i=1, j=0
```

上面代码为一个双重循环区块，break命令后面加上top标签(注意，top不用加引号)，满足条件时，直接跳出双层循环。如果break语句后面不使用标签，则只能跳出内层循环，进入下一次的外层循环。

标签也可以用于跳出代码块。

```javascript
foo: {
  console.log(1);
  break foo;
  console.log('本行不会输出');
}
console.log(2);
// 1
// 2
```

上面代码执行到 break foo，就会跳出区块

continue语句也可以使用标签配合使用

```javascript
top:
for (var i = 0; i < 3; i++) {
  for (var j = 0; j < 3; j++) {
    if (i === 1 && j === 1)
      continue top;
    console.log('i =' + i + ', j=' + j)
  }
}
// i=0, j=0
// i=0, j=1
// i=0, j=2
// i=1, j=0
// i=2, j=0
// i=2, j=1
// i=2, j=2
```

上面代码中，conutinue 命令后面又一个标签名，满足条件时，会跳出当前循环，直接进入下一轮外层循环。如果continue语句后面不使用标签，则只能进入下一轮内层循环。

## 数据类型概述

JS语言的每一个值，都属于某一种数据类型。

- 数值(number)：整数和小数
- 字符串(string)：文本

- 布尔值(boolean)：表示真伪的两个特殊值
- underfind：表示"未定义"，或不存在，即由于目前没有定义，所以此处暂时没有任何值

- null：表示空值，即此处的值为空
- 对象(object)：各种值组成的集合

1. 狭义的对象(object)
2. 数组(array)

3. 函数(function)

### typeof运算符

JS有三种方法

- typeof运算符
- instanceof运算符

- object.prototype.toString方法

typeof运算符可以返回一个值的数据类型

**数值、字符串、布尔值分别返回 number、string、boolean**

```javascript
typeof 123 // "number"
typeof '123' // "string"
typeof false // "boolean"
```

**函数返回 function**

```javascript
function f() {}
typeof f	// "function"
```

**underfined 返回 underfined**

```javascript
typeof underfined	// "underfined"
```

利用这一点，typeof 可以用来检查一个没有声明的变量，而不报错。

```javascript
v	// ReferenceError: v is not defined
typeof v	// "underfined"
```

上面代码中，变量v没有用var命令声明，直接使用就会报错。但是，放在 typeof 后面，就不报错了。而是返回 underfined。

```javascript
// 错误的写法
if(v) {
	// ...
}
// ReferenceError: v is not defined

// 正确的写法
if(typeof v === "underfined") {
	// ...
}
```

上面代码，在实际编程中，这个特点通常用在判断语句。

**对象返回object**

```javascript
typeof window	// "object"
typeof {}	// "object"
typeof []	// "object"
```

上面代码，空数组（[ ]）的类型也是object，这表示在JS内部，数组本质上只是一种特殊的对象。

```javascript
var o = {};
var a = [];

o instanceof Array	// false
a instanceof Array	// true
```

这里提一下，instanceof运算符可以区分数组和对象。

**null 返回 object**

```javascript
typeof null	// "object"
```

null 的类型是 object

### null、underfined 和布尔值

null与 underfined 都可以表示"没有"，含义非常相似。

```javascript
var a = underfined;
var a = null;
```

上面代码中，变量a分别被赋值为 underfined 和 null，这两种写法效果几乎等价。

在if语句中，他们都会被自动转换为false，相等运算符(==)甚至直接报告两者相等。

```javascript
if(!undefined) {
    console.log('undefined is false')
}
// undefined is false

if (!null) {
    console.log('null is false')
}
// null is false

underfined == null
// true
```

上面代码中，两者的行为基本相似

```javascript
Number(null)  // 01 + null // 1
```

上面代码中，null转为数字时，自动变成为0

```javascript
Number(underfined) // NaN5 + unerfined	// NaN
```

#### 用法和含义

对于 null 和 underfined，可以这么理解。

null：表示空值，即该处的值现在为空。调用函数时，某个函数未设置任何值，这是就可以传入null，表示该参数为空。

underfined：表示"未定义"

```javascript
// 变量声明了，但没有赋值
var i;
i	// underfined

// 调用函数时，应该提供的参数没有提供，该参数等于 underfined
function f(x) {
    return x;
}
f()	// underfined

// 对象没有赋值的属性
var o = new Object();
o.p	// underfined

// 函数没有返回值时，默认返回underfined
function f() {}
f()	// underfined
```

### 布尔值

布尔值代表"真"和"假"两个状态。"真"用关键字true表示，"假"用关键词false表示

下面运算符会返回布尔值：

- 前置逻辑运算符：!(Not)
- 相等运算符：===，!==，==，!=

- 比较运算符：>，>=，<，<=

如果JS预期某个位置应该是布尔值，会将该位置上现有的值自动转为布尔值，这几个值为false，其他值视为true

- underfined
- null

- false
- 0

- NaN
- " " 或 ' ' (空字符串)

```javascript
if(' ') {
	console.log('true');
}
// 没有任何输出
```

上面代码中。if命令后面的判断条件，预期应该是个布尔值，所以JS自动将空字符串，转为布尔值 false，导致程序不会进入代码块，所以没有任何输出

注意，空数组（[ ]）和空对象（{ }）对应的布尔值，都是true

```javascript
if ([]) {
	console.log('true');
}
// true

if ({}) {
	console.log('true');
}
// true
```

### 数值

**整数和浮点数**

JS内部，所有数字都已64位浮点数形式存储

```javascript
1 === 1.0	// true
```

JS语言的底层没有整数，所以数字都是小数。

```javascript
0.1 + 0.2 === 0.3
// false

0.3 / 0.1
// 2.9999999999999996

(0.3 - 0.2) === (0.2 - 0.1)
// false
```

由于浮点数不是精确的值，所以涉及小数的比较和运算符要特别小心。

**数值精度**

根据国际标准IEEE 754，JS浮点数为64个二进制

```javascript
Math.pow(2, 53)
// 9007199254740992

Math.pow(2, 53) + 1
// 9007199254740992

Math.pow(2, 53) + 2
// 9007199254740994

Math.pow(2, 53) + 3
// 9007199254740996

Math.pow(2, 53) + 4
// 9007199254740996
```

**字符串**

字符串就是零个或多个排在一起的字符，放在单引号或双引号之中

```javascript
'abc'
"abc"
```

单引号字符串的内部，可以使用双引号。双引号字符串的内部，可以使用单引号

```javascript
'key = "value"'
"It's a long journey"
```

上面两个都是合法的字符串

```javascript
'Did she say \'Hello\'?'
// "Did she say 'Hello'?"

"Did she say \"Hello\"?"
// "Did she say "Hello"?"
```

如果要在单引号字符串的内部，使用单引号，就必须在内部的单引号前面加上反斜杠，用来转义。双引号字符串内部使用双引号，也是如此。

**转义**

反斜杠（\）在字符串内有特殊含义，用来表示一些特殊字符，所以又称为转义符。

- \0 ：null（\u0000）
- \b ：后退键（\u0008）

- \f ：换页符（\u000C）
- \n ：换行符（\u000A）

- \r ：回车键（\u000D）
- \t ：制表符（\u0009）

- \v ：垂直制表符（\u000B）
- \' ：单引号（\u0027）

- \" ：双引号（\u0022）
- \\ ：反斜杠（\u005C）

```javascript
console.log('1\n2')
// 1
// 2
```

上面代码中，\n表示换行，输出的时候就分成两行。

**字符串与数组**

字符串可以被视为字符数组，因此可以使用数组的方括号运算符，用来返回某个位置的字符

```javascript
var s = 'hello';
s[0]	// "h"
s[1]	// "e"
s[4]	// "o"

// 直接对字符串使用方括号运算符
'hello'[1]	// "e"
```

上面代码表示，字符串内部的单个字符无法改变和增删，这些操作会默默地失败。

### length属性

length属性返回字符串的长度，该属性也是无法改变的。

```javascript
var s = 'hello';
s.length	// 5

s.length = 3;
s.length	// 5
```

上面代码表示字符串的length属性无法改变，但是不会报错。

### 字符集

JS使用Unicode 字符集

```javascript
var f\u006F\u006F = 'abc';
foo // "abc"
```

### Base64 转码

所谓Base64就是一种编码方法，可以将任意值转成0～9、A～Z、a～z

JS原声提供两个 Base64 编码

- btoa()：任意值转为Base64编码
- atob()：Base64编码转为原来的值

```javascript
var string = 'Hello World';
btoa(string) // "SGVsbG8gV29ybGQh"
atob("SGVsbG8gV29ybGQh")	// "Hello World"
```

注意，这两个方法不适合非ASCII码的字符，会报错

```javascript
btoa('你好')	// 报错
```

```javascript
function b64Encode(str) {
  return btoa(encodeURIComponent(str));
}

function b64Decode(str) {
  return decodeURIComponent(atob(str));
}

b64Encode('你好') // "JUU0JUJEJUEwJUU1JUE1JUJE"
b64Decode('JUU0JUJEJUEwJUU1JUE1JUJE') // "你好"
```

上面代码中，要将非ASCII码字符转为Base64编码，必须中间插入一个转码环节，在使用这两个方法。

## 对象

对象(object)是JS语言的核心概念，也是最重要的数据类型

对象就是一组"键值对"(key-value)的集合，是一种无序的复合数据集合

```javascript
var obj = {
	foo: 'Hello',
  bar: 'World'
};
```

上面代码中，大括号就定义了一个对象，它被赋值给变量obj，所以变量obj就指向一个对象。该对象内部包括两个键值对，第一个键值对是foo: 'Hello'，其中foo是"键名"，字符串Hello是"键值"。键名与键值之间用冒号分隔。

#### 键名

对象的所有键名都是字符串，所以加不加引号都可以

```javascript
var obj = {
	'foo': 'Hello',
  'bar': 'World'
};
```

```javascript
var obj = {
	1: 'a',
  3.2: 'b',
  1e2: true,
  1e-2: true,
  .234: true,
  0xFF: true
};

obj

// {
//     '1': 'a',
//     '100': true,
//     '255': true,
//     '3.2': 'b',
//     '0.01': true,
//     '0.234': true
// }

obj['100']	// true
```

上面代码中，对象obj的所有键名虽然看上去像数值，实际上都被自动转成了字符串

```javascript
// 报错
var obj = {
  1p: 'Hello World'
};

// 不报错
var obj = {
  '1p': 'Hello World',
  'h w': 'Hello World',
  'p+q': 'Hello World'
};
```

上面代码中如果键名不符合标识名的条件(比如第一个字符为数字，或者含有空格或运算符)，且也不是数字，则必须加上引号，否则会报错。

```javascript
var obj = {
	p: function (x) {
  	return 2 * x;
  }
};

obj.p(1)	// 2
```

上面代码中，对象obj的属性p，就指向一个函数。如果属性的值还是一个对象，就形成了链式引用。

```javascript
var o1 = {};
var o2 = { bar: 'hello' };

o1.foo = o2;
o1.foo.bar	// "hello"
```

上面代码中，对象o1的属性foo指向对象o2，就可以链式引用o2的属性。

```javascript
var obj = {
	p: 123,
  m: function () {
  	...
  },
}
```

上面的代码中，对象的属性之间用逗号分隔，最后一个属性后面可以加逗号，也可不加。

```javascript
var obj = {};
obj.foo = 123;
obj.foo // 123
```

上面代码中，直接对obj对象的foo属性赋值，结果就在运行时创建了foo属性。

#### 对象的引用

如果不同的变量名指向同一个对象，那么它们都是这个对象的引用，也就是说指向同一个内存地址。修改其中一个变量，会影响到其他所有变量。

```javascript
var o1 = {};
var o2 = o1;

o1.a = 1;
o2.a	// 1

o2.b = 2;
o1.b // 2
```

上面代码中，o1和o2指向同一个对象，因此为其中任何一个变量添加属性，另一个变量都可以读写该属性。

```javascript
var o1 = {};
var o2 = o1;

o1 = 1;
o2 // {}
```

上面代码中，o1和o2指向同一个对象，然后o1的值变成1，这时不会对o2产生影响，o2还是指向原来的哪个对象。

```javascript
var x = 1;
var y = x;

x = 2;
y // 1
```

上面代码中，这种引用只局限于对象，如果两个变量指向同一个原始类型的值。那么，变量这时都是值的拷贝。当x的值发生变化后，y的值并不变，这就表示y和x并不是指向同一个内存地址。

## 属性的操作

读取对象的属性，有两种方法，一种是使用运算符，另一种是使用方括号运算符

```javascript
var obj = {
	p: 'Hello World'
};

obj.p	//	"Hello World"
obj['p']	// "Hello World"
```

上面代码分别采用运算符和方括号运算符，读取属性p。

```javascript
var foo = 'bar';

var obj = {
	foo: 1,
  bar: 2
};

obj.foo	// 1
obj[foo]	// 2
```

上面代码中，引用对象obj的foo属性，如果使用点运算符，foo就是字符串；如果使用方括号运算符，但是不使用引号，那么foo就是一个变量，指向字符串bar。

**方括号运算符内部还可以使用表达式**

```javascript
obj['hello' + 'world']
obj[3 + 3]
```

数字键可以不佳引号，因为会自动转成字符串。

```javascript
var obj = {
	0.7: 'Hello World'
};
obj['0.7']	// "Hello World"
obj[0.7]	// "Hello World"
```

上面代码中，对象obj的数值有键0.7，加不加引号都可以，因为会被自动转为字符串。

```javascript
var obj = {
	123: 'hello world'
};
obj.123	// 报错
obj[123]	// "Hello world"
```

在上面代码中，对数值键名123使用点运算符，结果报错。使用方括号运算符，结果正常。

### 属性的赋值

点运算符和方括号运算符，不仅可以使用来读取值，还可以用来赋值。

```javascript
var obj = {};
obj.foo = 'Hello';
obj['bar'] = 'World';
```

上面代码中，分别使用点运算符和方括号运算符，对属性赋值。

```javascript
var obj = { p : 1};

// 等价于
var obj = {};
obj.p = 1;
```

上面代码中，JS允许属性的'后绑定'，可以在任意时刻新增属性

### 属性的删除:delete命令

delete命令用于删除对象的属性，删除成功后返回true。

```javascript
var obj = { p : 1 };
Object.keys(obj)	// ["p"]

delete obj.p	// true
obj.p	// underfined
Object.keys(obj)	// []
```

上面代码中，delete命令删除对象obj的p属性。删除后，在读取p属性就会返回underfined，而object.keys方法的返回值也不会在包括该属性。

**注意：删除一个不存在的属性，delete不报错，而且返回true。**

```javascript
var ojb = {};
delete obj.p 	// true
```

上面代码中，对象obj并没有p属性，但是delete命令照样返回true。因此不能根据delete命令的结果，认定某个属性存在。

```javascript
var obj = Object.defineProperty({}, 'p',{
    value:123,
    configurable:false
});

console.log(obj.p)	// 123
delete obj.p;
console.log(delete obj.p)	// false
```

上面代码中，对象obj的p属性是不能删除的，所以delete命令返回false

```javascript
var obj = {};
delete obj.toString // true
obj.toString // function toString() { [native code] }
```

上面代码中，toString是对象obj继承的属性，虽然delete命令返回true，但该属性并没有删除，依然存在

### 属性是否存在：in 运算符

in运算符用于检查对象是否包含某个属性（检查的键名，不是键值），如果包含就返回true，否则就返回false。左边是一个字符串，表示属性名，右边是一个对象。

```javascript
var obj = { p: 1};
console.log('p' in obj)	// true
console.log('toString' in obj)	// true
```

**in**运算符不能识别哪些属性是对象自身的，哪些属性是继承的。上面代码中，对象obj本身没有toString属性，但是in运算符会返回true，因为这个属性是继承的。

这时，可以使用对象**hasOwnProperty**方法进行判断。

什么是hasOwnProperty()

- 判断自身属性是否存在
- 判断自身属性与继承属性

- 遍历一个对象的所有自身属性

```javascript
var obj = {};
if ('toString' in obj) {
	console.log(obj.hasOwnProperty('toString'))	// false
}
```

### 属性的遍历： for...in 循环

for...in 循环用来遍历一个对象的全部属性

```javascript
var obj = { a: 1, b: 2, c: 3 };
for (var i in obj) {
    console.log('键名:', i);
    console.log('键值:', obj[i]);
}
// 键名: a
// 键值: 1
// 键名: b
// 键值: 2
// 键名: c
// 键值: 3
```

**for...in** 循环有两个使用注意点。

- 它遍历的是对象所有可遍历的属性，会跳过不可遍历的属性。
- 它不仅遍历对象的属性，还遍历继承的属性。

举个例子：对象都继承了**toString**属性**，**但是**for...in**循环不会遍历到这个属性。

```javascript
var obj = {};

// toString 属性是存在的
obj.toString // toString() { [Function: toString]
}

for(var p in obj){
    console.log(p);
    // 没有任何输出
}
```

上面代码中，对象**obj**继承了**toString**属性，该属性不会被**for..in**循环遍历到，因为它默认是"不可遍历的"。

```javascript
var person = { name: '老张'};

for(var key in person){
    if(person.hasOwnProperty(key)) {
        console.log(key)
    }
}
// name
```

上面代码中，如果继承的属性是可遍历的，那么就会被for...in循环遍历到。但是，一般情况下，都是只想遍历对象自身的属性。所以使用for...in的时候，应该结合使用**hasOwnProperty**方法，在循环内部判断一下，某个属性是否为对象自身的属性。

## with 语句

操作同一个对象的多个属性，简化代码

```javascript
with(对象) {
	语句；
}
// 例子一：
var obj = {
    p1: 1,
    p2: 2,
};
with (obj) {
    p1 = 4;
    p2 = 5;
}
// 等同于
obj.p1 = 4;
obj.p2 = 5;

console.log(obj);	//{ p1: 4, p2: 5 }
// 例子二：
with (document.links[0]){
    console.log(href);
    console.log(title);
    console.log(style);
}
// 等同于
console.log(document.links[0].href);
console.log(document.links[0].title);
console.log(document.links[0].style);
```

注意：**如果with区块内部有变量的赋值操作，必须是当前对象已经存在的属性，否则会创造一个当前作用域的全局变量。**

```javascript
var obj = {};
with (obj) {
	p1 = 4;
  p2 = 5;
}
obj.p1	// underfined
p1 // 4
```

上面代码中，对象obj并没有p1属性，对p1赋值等于创造了一个全局变量p1。正确的写法，先定义对象obj的属性p1，然后在with区域内操作它。因为with区块没有改变作用域，它的内部依然是当前作用域。

```javascript
with(obj) {
	console.log(x)
}
```

## 函数

函数是一段可以反复调用的代码块。函数还能接受输入的参数，不同的参数会返回不同的值

JS有三种声明函数的方法

- function命令
- 函数表达式

- Function构造函数

**function 命令**

**function 命令声明的代码区块，就是一个函数。function命令后面是函数名，函数名后面是一对圆括号，里面是传入函数的参数。函数体放在大括号里。**

```javascript
function print(s) {
	console.log(s);
}
```

上面代码命名了一个**print**函数，以后使用**print()**这种形式，就可以调用相应的代码。这叫做函数的声明。

**函数表达式**

**除了用function命令声明函数，还可以采用变量赋值的写法。**

```javascript
var print = function(s) {
	console.log(s);
}
```

上面代码将一个匿名函数赋值给变量。这时，这个匿名函数又称函数表达式，因为赋值语句的等号右侧只能放表达式。

采用函数表达式声明函数时，**function**命令后面不带有函数名。如果加上函数名，该函数名只在函数体内部有效，在函数体外部无效。

```javascript
var print = function x() {
	console.log(typeof x);
};

x	// x is not defined

print()
// function
```

上面代码在函数表达式中，加入了函数名x。这个x只在函数体内部可用，指代函数表达式本身，其他地方都不可用。这种写法的用处有两个，一是可以在函数体内部调用自身，二是方便除错。

```javascript
var f = function f() {};
```

需要注意的是，函数的表达式需要在语句的结尾加上分号，表示语句结束。

**Function 构造函数 (不常用)**

**第三种声明函数的方式是Function 构造函数。**

```javascript
var add = new Function(	'x',  'y',  'return x + y');
// 等同于function add(x,y) {	return x + y;}
```

上面代码中，**Function**构造函数接受三个参数，除了最后一个参数是**add**函数的"函数体"，其他参数都是add函数的参数。

可以传递任意数量的参数给Function构造，只有最后一个参数会被当作函数体，如果只有一个参数，该参数就是函数体。

```javascript
var foo =  new Function(	'return "hello world";');
// 等同于function foo() {	return 'hello world';}
```

Function构造函数可以不使用new命令，返回结果完全一样。

### 函数的重复声明

如果用一个函数被多次声明，后面的声明就会覆盖前面的声明

```javascript
function f() {	console.log(1);}f() 
// function f() {	console.log(2)}f()	
// 2
```

上面代码中，后一次的函数声明覆盖了前面一次。而且，由于函数名的提升，前一次声明在任何时候都无效的，这一点特别注意。

### 圆括号运算符，return 语句和递归

调用函数时，要使用圆括号运算符。圆括号之中，可以加入函数的参数。

```javascript
function add(x,y) {	return x + y;}add(1 ,1)	
// 2
```

上面代码中，函数名后面紧跟一对圆括号，就会调用这个函数。

函数体内部的**return**语句，表示返回，JS引擎遇到**return**语句，就直接返回**return**后面那个表达式的值，**return**语句所带的那个表达式，就是函数的返回值。

```javascript
function fib(num) {
  if(num ===0) {
    return 0;    
  };
  if(num === 1) {
    return 1;
  }
  return fib(num -2) + fib(num -1);
}console.log(fib(6));
// 8
```

上面代码中，函数可以调用自身，这就是递归。fib函数内部又调用了fib。

###  函数与其他数据类型平等

JS语言将函数看作一种值，与其他值(数值、字符串、布尔值等等)地位相同。凡是可以使用值的地方，就可以使用函数。

```javascript
function add(x,y) {
  return x + y;
}
// 将函数复制给一个变量var operator = add;
// 将函数作为参数和返回值function a(op){    return op;}console.log(a(add) (1,1));	
// 2
```

### 函数名的提升

JS引擎将函数名称同变量名，所以采用function命令声明函数时，整个函数就会像变量声明一样，被提升到代码头部。

```javascript
f();function f() {	代码;};
```

上面代码中，好像在声明之前就调用了函数f。但是实际上，由于"变量提升"，函数f被提升到了代码头部，也就是在调用之前已经声明了。

```javascript
f();var f = function() {	代码;};
// 等同于var f;f();f = function (){	代码;}
```

上面第9行，调用f的时候，f只是被声明了，还没有被赋值，等于underfined

```javascript
var f = function () {
  console.log('1');
}
function f() {
  console.log('2');
}console.log(f());	
// 1
```

上面代码中，同时采用function命令和var 赋值语句声明同一个函数，由于存在函数提升，最后采用var赋值语句的定义。**表面上后面声明的函数f，应该覆盖前面的var赋值语句，但是由于存在函数提升，恰好反过来**

## 函数的属性和方法

### name 属性

函数的name属性返回函数的名字

```javascript
function f1() {}f1.name	
// "f1"
```

如果是通过变量赋值定义的函数，那么name属性返回变量名。

```javascript
var f2 = function () {};f2.name	
// "f2"
```

javascript在变量值是一个匿名函数时才可以返回名字，如果变量的值是一个具名函数，那么name属性返回function关键字之后的那个函数名。

```javascript
var f3 = function myName() {};
f3.name	
// "myName"
```

上面代码中，**f3.name**返回函数表达式的名字。真正的函数名还是**f3**，而**myName**这个名字只在函数体内部可用。

**name**属性的一个用处，就是获取参数函数的名字。

```javascript
var myFunc = function () {};function test(f) {	console.log(f.name);}test(myFunc)	
// [Function: myFunc]
```

上面代码中，函数**test**内部通过**name**属性，就可以知道传入的参数是什么函数

### length 属性

函数length 属性返回函数预期传入的参数个数，即函数定义之中的参数个数

```javascript
function f(a, b) {}f.length
// 2
```

上面代码定义了空函数**f**，它的**length**属性就是定义时的参数个数。不管调用时输入了多少个参数，**length**属性值始终等于2。

### toString()

函数的toString()方法返回一个字符串，内容是函数的源码。

```javascript
function f() {    
  console.log('a')    
  a(1);    
  b(2);    
  c(3);
}
f.toString()
// function f() {
//     console.log('a')
//     a(1);
//     b(2);
//     c(3);
// }
```

上面代码中，函数**f**的**toString()**方法返回了**f**的源码，包含换行符在内。

对于原生的函数， **toString()**方法返回

```javascript
Math.sqrt.toString()

// "function sqrt() { [native code] }"
```

上面代码中，**Math.sqrt()**是JS引擎提供的原生函数，**toString()**方法就是返回原生代码的提示。

```javascript
function f() {
    /*
    这是一个
    多行注释
    */
}

f.toString()

// function f() {
//     /*
//     这是一个
//     多行注释
//     */
// }
```

上面代码中，函数内部的注释也可以返回

```javascript
var multiline = function (fn) {
    var arr = fn.toString().split('\n');
    return arr.slice(1,arr.length -1).join('\n');
}

function f() {/*
    这是一个
    多行注释
 */}

console.log(multiline(f));

// 这是一个
// 多行注释
```

上面代码中，函数f内部有一个多行注释，toString()方法拿到f的源码后，去掉首位两行，就得到了一个多行字符串，利用这一点，可以变相实现多行字符串。

## 函数作用域

作用域(scope)指的是变量存在的范围。JS只有两种作用域：一种是全局作用域，变量在整个程序中一直存在，所有地方都可以读取；另一种是函数作用域，变量只在函数内部存在。

对于顶层函数来说，函数外部声明的变量就是全局变量，它可以在函数内部读取。

```javascript
var v = 1;

function f() {
    console.log(v);
}

f()
// 1
```

上面代码表明，函数**f**内部可以读取全部变量**v**。

在函数内部定义的变量，外部无法读取，成为"局部变量"。

```javascript
function f(){
  var v = 1;
}

v // ReferenceError: v is not defined
```

上面代码中，变量v在函数内部定义，所以是一个局部变量，函数之外就无法读取。

```javascript
var v = 1;
function f() {
    var v = 2;
    console.log(v);
}
f();	// 2
v	// 1
```

上面代码中，变量**v**同时在函数的外部和内部有定义。结果在函数内部定义，局部变量**v**覆盖了全局变量**v。**

```javascript
if(true) {
    var x = 5;
}
console.log(x);	// 5
```

上面代码中，变量x在条件判断区块之中声明，结果就是一个全局变量，可以在区块之外读取。

### 函数内部的变量提升

var 命令声明的变量，不管在什么位置，变量声明都会被提升到函数体的头部。

```javascript
function foo(x) {
    if (x > 100) {
        var tmp = x - 100;
    }
}

// 等同于
function foo(x) {
    var tmp;
    if (x > 100) {
        tmp = x - 100;
    }
}
```

### 函数本身的作用域

函数本身也是一个值，也有自己的作用域，它的作用域与变量一样。

```javascript
var a = 1;
var x = function () {
    console.log(a);
};

function f() {
    var a = 2;
    x()
}

f()	// 1
```

上面代码中，函数**x**在函数**f**的外部声明的，所以它的作用域绑定外层，内部变量**a**不会到函数f体内取值，所以输出1，而不是2。

```javascript
function foo() {
    var x = 1;
    function bar() {
        console.log(x);
    }
    return bar;
}

var x = 2;
var f = foo();
f()	// 1
```

上面代码中，函数**foo**内部声明了一个函数**bar**，**bar**的作用域绑定**foo**。当我们在**foo**外部取出**bar**执行时，变量**x**指向**foo**内部的**x**，而不是**foo**外部的**x**。

## 参数

函数运行的时候，有时需要提供外部数据，不同的外部数据会得到不同的结果，这种外部数据就叫参数。

```javascript
function square(x) {
    return x * x;
}
console.log(square(2));	// 4
console.log(square(3));	// 9
```

上面代码中，x就是square函数的参数。每次运行的时候，需要提供这个值，刚要提供这个值，否则得不到结果。

### 参数的省略

函数参数不是必须的，JS允许省略参数

```javascript
function f(a,b) {
    return a;
}
console.log(f(1,2,3))	// 1
console.log(f(1))	// 1
console.log(f())	// underfined
console.log(f.length)	// 2
```

上面代码的函数**f**定义了两个参数，但是运行时无论提供多少个参数(或者不提供参数)，JS都不会报错。省略的参数的值就变成**underfined**。需要注意的是，函数**length**属性与实际传入的参数个数无关，只反映函数预期传入的参数个数。

```javascript
function f(a,b) {
    return a;
}
console.log(f(,1))	// 报错
console.log(f(undefined, 1))	// underfined
```

上面代码中，没有办法只省略靠前的参数，而保留靠后的参数。如果一定要省略靠前的参数，只有显式传入**underfined，如果省略第一个参数，就会报错。**

### 传递方式

函数参数如果是原始类型的值(数值、字符串、布尔值)，传递方式是**传值传递**。这意味，在函数体内修改参数值，不会影响到函数外部。

```javascript
var p = 2;
function f(p) {
    p = 3;
}
console.log(f(p))	// underfined

console.log(p)	// 2
```

上面代码中，变量p是一个原始类型的值，传入函数f的方式是传值传递。因此，在函数内部，p的值是原始值的拷贝，无论这么改，都不会影响到原始值。

如果函数参数是复合类型的值(数组、对象、其他函数)，传递方式是**传址传递**。也就是说，传入函数的原始值的地址，因此在函数内部修改参数，将会影响到原始值。

```javascript
var obj = { p: 1 };

function f(o) {
    o.p = 2;
}
console.log(f(obj))	// underfined
console.log(obj.p)	// 2
```

上面代码中，传入函数**f**是参数对象**obj**的地址，因此，在函数内部修改**obj**的属性**p**，会影响到原始值。

```javascript
var obj = [1, 2, 3];

function f(o) {
	o = [2, 3, 4];
}

f(obj);

console.log(obj)	// [1, 2, 3]
```

上面代码中，如果在函数内部修改的，不是参数对象的某个属性，而是替换掉整个参数，这不会影响到原始值，函数**f()**内部，参数对象**obj**被整个替换成另一个值，这时不会影响到原始值。因为形参（**o**）的值实际是参数**obj**的地址，重新对**o**赋值导致**o**指向另一个地址，保持到原地址上的值不会受影响

### 同名参数

如果有同名的参数，则取最后出现的那个值

```javascript
function f(a,a) {
    console.log(a);
}

f(1,2)	// 2
```

上面代码中，函数**f()**有两个参数，且参数名都是**a**。取值的时候，以后面的**a**为准，即使后面的**a**没有值或被省略，也是以其为准。

```javascript
function f(a, a) {
    console.log(a);
}

f(1)	// underfined
```

调用函数**f()**的时候，没有提供第二个参数，**a**的取值就变成了**underfined**。这时，如果要获得第一个**a**的值，可以使用**argument**对象。

```javascript
function f(a,a) {
    console.log(arguments[0]);
}

f(1);	// 1
```

上面代码中，调用**arguments**对象就可以取到第一个**a**的值。

### arguments 对象

由于JS允许函数有不定数目的参数，所以需要一种机制，可以在函数体内部读取所有参数

**arguments**对象包含了函数运行时的所有参数，**arguments[0]**就是第一个参数，**arguments[1]**就是第二个参数。这个对象只能在函数体内部。

```javascript
var f = function (one) {
    console.log(arguments[0]);
    console.log(arguments[1]);
    console.log(arguments[2]);
}
f(1, 2, 3)
// 1
// 2
// 3
```

在正常模式下，**arguments**对象可以在运行时修改

```javascript
var f = function (a, b) {
    arguments[0] = 3;
    arguments[1] = 2;
    return a + b;
}
console.log(f(1, 1))	// 5
```

上面代码中，函数f()调用传入的参数，在函数内部被修改成3和2。

```javascript
var f = function (a, b) {
    'use strict';   // 开启严格模式
    arguments[0] = 3;
    arguments[1] = 2;
    return a + b
}
console.log(f(1, 1))
```

上面代码中，函数体内是严格模式，这时修改**arguments**对象，不会影响到真实参数**a**和**b**

```javascript
function f() {
    return arguments.length;
}

console.log(f(1,2,3))	// 3
console.log(f(1))	// 1
console.log(f())	// 0
```

上面代码中，通过**arguments**对象的**length**属性，可以判断函数调用时到底带几个参数。

#### 与数组的关系

虽然**arguments**很像数组，但它是一个对象。数组有专门的方法(**slice**和**forEach**)，不能在**arguments**对象上直接使用。

如果让**arguments**对象使用数组方法，真正的解决方法是将**arguments**转为真正的数组。

```javascript
// slice方法
var args = Array.prototype.slice.call(arguments);
// 逐一填入新数组
var args = [];
for (var i = 0; i<arguments.length; i++) {
    args.push(arguments[i]);
}
```

上面代码中，体现了两种常用的转换方法：**slice** 方法和逐一填入新数组。

#### callee属性

**arguments**对象带有一个**callee**属性，返回它所对应的原函数。

```javascript
var f = function () {
    console.log(arguments.callee === f);
}
f()	// true
```

上面代码中，可以通过**arguments.callee**，达到调用函数自身的目的。这个属性在严格模式里面是禁用的。

## 函数的其他知识点

### 闭包

闭包是JS语言的一个难点，也是JS的特色，很重要。

理解闭包，首先必须理解变量的作用域。JS有两种作用域：**全局作用域**和**函数作用域**。函数内部可以直接读取全局变量。

```javascript
var n = 999;
function f1() {
    console.log(n);
}
f1()	// 999
```

上面代码中，函数**f1**可以读取全局变量**n**。

但是，正常情况下，函数外部无法读取函数内部声明的变量。

```javascript
function f1() {
    var n = 999;
}
console.log(n)	// 报错
```

上面代码中，函数**f1**内部声明的变量**n**，函数外部是无法读取的。

```javascript
function f1() {
    var n = 999;
    function f2() {
        console.log(n);
    }
    return f2()
}
f1()	// 999
```

上面代码中，函数**f2**就在函数**f1**内部，这时f1内部的所有局部变量，对**f2**都是可见的。但是反过来就不行，**f2**内部的局部变量，对**f1**就是不可见的。这是JS语言的特有的"**链式作用域**"结构，子对象会一级一级的向上寻找父对象的变量。所以，父对象的所有变量，对子对象都说是可见的。

```javascript
function f1() {
    var n = 999;
    function f2() {
        console.log(n)
        return n;
    }
    return f2();
}

var result = f1();
console.log(result)	// 999
```

上面代码中，函数**f1**的返回值就是函数**f2**，由于**f2**可以读取**f1**的内部变量，所以就可以在外获得**f1**的变量了。

闭包就是函数**f2**，即能够读取其他函数内部变量的函数。由于在JS语言中，只有在函数内部的子函数才能读取内部变量，因此可以吧闭包简单理解：**定义在一个函数内部的函数**。闭包最大的特点，就是它可以"记住"诞生的环境，比如**f2**记住了它诞生的环境**f1**，所以从**f2**可以得到**b**的内部变量。在本质上，闭包就是将函数内部和函数外部连接起来的一座桥梁。

```javascript
function createIncrementor(start) {
    return function () {
        return start++;
    };
}

var inc = createIncrementor(5);
console.log(inc())	// 5
console.log(inc())	// 6
console.log(inc())	// 7
```

上面代码中，**start**是函数**createIncrementor**的内部变量。通过闭包，**start**的状态被保留了，每一次调用都在上一次调用的基础上进行计算。从中可以看到，闭包**inc**似的函数**createIncrementor**的内部环境，一直存在。所以，闭包可以看作是函数内部作用域的一个接口。

```javascript
function Person(name){
    var _age;
    function setAge(n) {
        _age = n;
        return _age;
    }
    function getAge() {
        return _age;
    }

    return{
        name: name,
        getAge: getAge,
        setAge: setAge,
    }
}

var p1 = Person('张三');
console.log(p1.setAge(25))
console.log(p1.getAge())
```

上面代码中，函数**Person**的内部变量**_age**，通过闭包**getAge**和**setAge**，变成了返回对象**p1**的私有变量。

注意，外层函数每次执行，都会形成新的闭包，而这个闭包又会保留外层函数的内部变量，所以内存。

## 立即调用的函数表达式

根据JS的语法，圆括号**()**跟函数名之后，表示调用该函数。比如，**print()**就表示调用**print**函数。

有时，我们需要在定义函数之后，立即调用该函数。这时，你不能在函数的定义之后加上圆括号，这会产生语法错误。

```javascript
// 语句
function f() {}
// 表达式
var f = function() {}
```

上面代码中，函数可以定义后直接加圆括号调用。

```javascript
var f = function f() { return 1 } ();
console.log(f)	// 1
```

上面代码中，函数定义后直接加圆括号调用，没有报错。原因就是**function**作为表达式，引擎就把函数定义当作一个值。

```javascript
var f = function f() {
    return 1
}();

console.log(f)	// 1
```

上面代码中，函数定义后直接加圆括号调用，不会报错，原因就是function作为表达式，引擎就把函数定义当作一个值。这种情况下，就不会报错。

为了避免解析的歧义，JS规定，如果**function**关键字出现行首，一路解释成语句。因此，引擎看到行首是**function**关键字之后，认为这一段都是函数的定义，不应该以圆括号结尾，所以就不报错了。

函数定义后立即调用的解决方法，就是不要让**function**出现首行，让引擎将其理解成一个表达式。最简单的处理，就是将其放在一个圆括号里面。

```javascript
(function(){ /* code */ }());
// 等价于
(function(){ /* code */ })();
```

上面两种写法都是以圆括号开头，引擎就会认为后面跟的是一个表达式，而不是函数定义语句，这就叫做："**立即调用的函数表达式**"简称：**IIFE**

**注意：上面两种写法最后的分号都是必须的，如果省略分号，遇到两个IIFE，可能就会报错。**

**解释器以表达式来处理函数定义的方法，都能产生同样的效果**

```javascript
(function () {
    var tmp = newData;
    processData(tmp);
    storeData(tmp);
}());
```

上面代码中，只对匿名函数使用这种"立即执行的函数表达式"。它的目的有两个：**一是不必为函数命名，避免了污染全局变量；二是IFEE内部形成了一个单独的作用域，可以封装一些外部无法读取的私有变量**。

## eval 命令

eval命令接受一个字符串作为参数，并将这个字符串当作语句执行。

```javascript
eval('var a = 1;');console.log(a)	// 1
```

上面袋中将字符串当作语句运行，生成了变量**a**。

如果参数字符串无法当作语句运行，那么就会报错。

```javascript
eval('3x')	// 报错
```

放在eval中的字符串，应该有独自存在的意义，不能用来与evel以外的命令配合使用。

```javascript
eval('return;');	// 报错
```

上面代码中，会报错，因为**return**不能单独使用，必须在函数中使用。

如果**eval**的参数不是字符串，那么会原样返回。

```javascript
eval(123)	// 123
```

**evel**没有自己的作用域，都在当前作用域内执行，因此可能会修改当前作用域的变量的值，造成安全问题。

```javascript
var a = 1;eval('a = 2;');console.log(a)	// 2
```

上面代码中，**eval**命令修改了外部变量**a**的值。由于这个原因，**eval**有安全风险。

为了防止这种风险，JS规定，如果使用严格模式，**eval**内部声明的变量，不会影响到外部作用域。

```javascript
(function f() {    'use strict';    eval('var foo = 123');    console.log(foo);  // ReferenceError: foo is not defined})()
```

上面代码中，函数**f**内部是严格模式，这时**eval**内部声明的**foo**变量，就不会影响到外部。

总之，**eval**的本质是在当前作用域之中，注入代码。由于安全风险和不利于JS引擎优化的执行速度，一般不推荐使用。通常情况下，**eval**最常见的场合是解析JSON数据的字符串

#### eval 的别名调用

前面说过evel不利于引擎优化执行速度。更麻烦的

```javascript
var m = eval;m('var x = 1;');console.log(x)	// 1
```

上面代码中，变量**m**是**eval**的别名。静态代码分析阶段，引擎分辨不出**m('var x = 1')**执行的是**eval**命令。

为了保住**eval**的别名不影响代码优化，JS的标准规定，凡是使用别名执行**eval**，**eval**内部一律是全局作用域。

```javascript
var a = 1;function f() {  var a = 2;  var e = eval;  e('console.log(a)');}f() // 1
```

上面代码中，**eval**是别名调用，所以即使它是在函数中，它的作用域还是全局作用域，因此输出的**a**为全局变量。这样的话，引擎就能确认**e()**不会对当前的函数作用域产生影响。

## 数组

数组是按次序排列的一组值。每个值的位置都有编号，整个数组用方括号表示。

```javascript
var arr = ['a', 'b', 'c'];
```

上面代码中，**a**、**b**、**c**就构成一个数组，两端的方括号是数组的标志。**a**是0号位置，**b**是1号位置，**c**是2号位置。

除了在定义时赋值，数组也可以先定义后赋值。

```javascript
var arr = [];
arr[0] = 'a';
arr[1] = 'b';
arr[2] = 'c';
console.log(arr)	// [ 'a', 'b', 'c' ]
```

**任何类型的数据，都可以放入数组。**

```javascript
var arr = [
    {a:1},
    [1,2,3],
    function() {return true;}
];

console.log(arr[0])	// { a: 1 }
console.log(arr[1])	// [ 1, 2, 3 ]
console.log(arr[2])	// [Function (anonymous)]
```

上面数组arr的3个成员依次是对象、数组、函数。

如果数组的元素还是数组，就形成了多维数组。

```javascript
var a = [[1,2],[3,4]];
console.log(a[0][1])	// 2
console.log(a[1][1])	// 4
```

### 数组的本质

本质上，数组属于一种特殊的对象。**typeof**运算符会返回数组的类型是**object**。

```javascript
console.log(typeof [1,2,3]) // object
```

上面代码表明，**typeof** 运算符认为数组的类型就是对象。

数组的特殊性体现在，它的健名是按次序列的一组整数（0，1，2...）

```javascript
var arr = ['a','b','c'];
console.log(Object.keys(arr)) // [ '0', '1', '2' ]
```

上面代码中，**Object.keys**方法返回数组的所有键名。可以看到数组的键名就是整数0、1、2。

由于数组成员的键名是固定的(默认总是0、1、2....)，因此数组不用为每个元素指定键名，而对象的每个成员都必须指定键名。JS语言规定，对象的键名一律为字符串。

```javascript
var arr = ['a','b','c'];
console.log(arr['0'])	// 'a'
console.log(arr[0])	// 'a'
```

上面代码分别用数值和字符串作为键名，结果都能读取数组。原因是数值键名被自动转换为字符串。

```javascript
var a  = [];
a[1.00] = 6;
console.log(a[1])	// 6
```

上面代码中，由于1.00转成字符串是1，所以通过数字键1可以读取值。

对象有两种读取成员的方法：点结构和方括号结构。但是，对于数值的键名，不能使用点结构。

```javascript
var arr = [1, 2, 3];
console.log(arr.0)	// 报错
console.log(arr[0]) // 1
```

上面代码中，**arr.0**的写法不合法，因为单独的数值不能作为标识符。所以数值成员只能用方括号**arr[0]**表示。

### length 属性

数组**length**属性，返回数组的成员数量。

```javascript
var len = ['a','b','c']
console.log(len.length)	// 3
```

只要是数组，就一定有**length**属性。该属性是一个动态值，等于键名中的最大整数加上1。

```javascript
var arr = ['a','b'];
console.log(arr.length)	// 2

arr[2] = 'c';
console.log(arr.length)	// 3

arr[9] = 'd';
console.log(arr.length)	// 10

arr[1000] = 'e';
console.log(arr.length)	// 1001
```

上面代码中，数组的数字键不需要连续，**length**属性的值总是比最大的那个整数键大**1**。另外，这也说明数组是一种动态的数据结构，可以增减成员。

**length**属性是可写的。如果人为设置一个小于当前成员成员个数的值。该数组的成员数量就会自动减少到**length**的值。

```javascript
var arr = ['a','b','c'];
console.log(arr.length)	// 3

arr.length = 2;
console.log(arr)	// [ 'a', 'b' ]
```

上面代码中，当数组的**length**属性设为2(即最大的整数键只能是1)，那么整数键2(值为**c**)就已经被剔除了。

清空数组的一个有效方法，就是将length属性设置为0。

```javascript
var arr = ['a','b','c'];
arr.length = 0;
console.log(arr) // []
```

如果人为设置length大于当前元素个数，则元素的成员数量会增加到这个值，新增的位置都是空位。

```javascript
var a = ['a'];
a.length = 3;
console.log(a[1])	// underfined
```

上面代码表示，当length属性为大于数组个数时，读取新增的位置都会返回**underfined**。

如果人为设置length为不合法的值，JS会报错。

```javascript
// 设置负值
[].length = -1
// RangeError: Invalid array length

// 数组元素个数大于等于2的32次方
[].length = Math.pow(2, 32)
// RangeError: Invalid array length

// 设置字符串
[].length = 'abc'
// RangeError: Invalid array length
```

需要注意的是，由于数组本质上是一种对象，所以可以为数组添加属性，但是这不影响length属性的值。

```javascript
var a = [];
a['p'] = 'abc';
console.log(a.length);	// 0

a[2.1] = 'abc';
console.log(a.length);	// 0
```

上面代码中将数组的键分别设为字符串和小树，结果都不影响**length**属性。因为，**length**属性的值就是等于最大的数字键加1，而这个数组没有整数键，所以**length**属性保持为**0**。

如果数组的键名是添加超出范围的值，该键名会自动转换为字符串。

```javascript
var arr = [];
arr[-1] = 'a';
arr[Math.pow[2,32]] = 'b';

console.log(arr.length);	// 0
console.log(arr[-1]);	// 'a'
console.log(arr[4294967296]);	// 'b'
```

上面代码中，我们为数组arr添加了两个不合法的数字键，结果length属性没有发生变化。这些数字键都变成了字符串键名。最后两行致所有会取到值，是因为取键值时，数字键名会默认转为字符串

### in 运算符

检查某个键名是否存在运算符in，适用于对象，也适用于数组。

```javascript
var arr = ['a','b','c'];
console.log(2 in arr)	// true
console.log('2' in arr)	// true
console.log(4 in arr)	// false
```

上面代码中，数组存在键名为**2**的键。由于键名都是字符串，所以数值**2**会自动转成字符串。

```javascript
var arr = [];
arr[100] = 'a';

console.log(100 in arr)	// true
console.log(1 in arr)	// false
```

上面代码中，数组**arr**只有一个成员**arr[100]**，如果数组的某个位置是空位，其他位置的键名都会返回**false**。

### for...in 

for...in 循环不仅可以遍历对象，也可以遍历数组

```javascript
var a = [1, 2, 3];
for (var i in a) {
    console.log(a[i])
}

// 1
// 2
// 3
```

但是，for...in 不仅会遍历数组所有的数字键，还会遍历非数字键。

```javascript
var a = [1, 2, 3];
a.foo = true;

for (var key in a) {
    console.log(key);
}

// 0
// 1
// 2
// foo
```

上面代码在遍历数组时，也遍历到了非整数键**foo**。所以，不推荐使用**for...in**遍历数组

数组的遍历可以考虑使用**for**循环或**while**循环。

```javascript
var a = [1, 2, 3];

// for循环
for(var i = 0;i<a.length; i++){
    console.log(a[i]);
}

// while 循环
var i = 0;
while (i<a.length) {
    console.log(a[i])
    i++;
}


var l = a.length;
while (l--) {
    console.log(a[1])
}
```

上面代码是三种遍历数组的写法。最后一种写法是逆向遍历，即从最后一个元素向第一个元素遍历。

```javascript
var colors = ['red', 'green', 'blue'];
colors.forEach(function (colors) {
    console.log(colors)
})

// red
// green
// blue
```

## 数组的空位

当数组的某个位置为空元素，即两个逗号之间没有任何值，我们称该数组存在空位。

```javascript
var a = [1, , 1];
console.log(a.length)	// 3
```

上面代码中，数组的空位不影响length属性，虽然这个位置没有值，引擎依然认为这个位置是有效的。

注意，如果最后一个元素后面有逗号，并不会产生空位。也就是说，有没有这个逗号，结果都是一样的。

```javascript
var a = [1, 2, 3,];
console.log(a.length)	// 3
console.log(a)	// [ 1, 2, 3 ]
```

上面代码中，数组最后一个成员后面里有一个逗号，这不影响length属性的值

```javascript
var a = [, , , ,];
console.log(a[1])	// underfined
```

上面代码中，数组的空位是可以读取的，返回**underfined。**

**使用delete命令删除了一个数组成员，这个位置就形成了空位，但对length属性没有影响。**

```javascript
var a = [1,2,3];
delete a[1];
console.log(a[1]);	// undefined
console.log(a.length)	// 3
```

上面代码中**delete**命令删除了数组的第二个元素，这个位置就形成了空位，但是对**length**属性没有影响。也就是说，**length**属性不过滤空位。所以，使用**length**属性进行数组遍历，要特别注意。

数组的某个位置是空位，与某个位置是**underfined**，是不一样的。如果是空位，使用数组**forEach**方法、**for...in**结构、以及**Object.keys**方法进行遍历，空位都会被**跳过**。

```javascript
var a = [,,,];

a.forEach(function (x,i){
    console.log(i+'.' + x);
})
// 不产出任何输出

for(var i in a){
    console.log(i);
}
// 不产出任何输出

console.log(Object.keys(a))
// []
```

如果某个位置是**underfined**，遍历的时候就**不会被跳过**。

```javascript
var a = [undefined, undefined, undefined];
a.forEach(function (x, i) {
    console.log(i + '.' + x);
});
// 0.undefined
// 1.undefined
// 2.undefined

for (var i in a) {
    console.log(i);
}
// 0
// 1
// 2

console.log(Object.keys(a))

// [ '0', '1', '2' ]
```

上面代码中，空位就是数组没有这个元素，所以不会被遍历到，而**underfined**则表示数组这个元素，值是**underfined**，所以遍历**不会跳过**。

## 类似数组的对象

如果一个对象的所以键名都是正整数或零，并且有**length**属性，那么这个对象就很像数组，语法上成为"类似数组的对象"。

```javascript
var obj = {
    0: 'a',
    1: 'b',
    2: 'c',
    length: 3
};
console.log(obj[0])	// a
console.log(obj[1])	// b
console.log(obj.length)	// 3
console.log(obj.push('d'))	// 报错
```

上面代码中，对象**obj**就是一个类似数组的对象。但是，"类似数组的对象"并不是数组，因为它们不具备数组特有的方法。对象**obj**没有数组的**push**方法，使用push就会报错。

"类似数组的对象"的根本特征，就是具有**length**属性。只要有**length**属性，就可以认为这个对象类似于数组。这个**length**属性不是动态值，不会随着成员的变化而变化。

```javascript
var obj = {
    length: 0
};
obj[3] = 'd';
console.log(obj.length)	// 0
```

上面代码为对象**obj**添加了一个数字键，但是**length**属性没变。这说明了**obj**不是数组。

典型的"类似数组的对象"是函数的**arguments**对象，以及大多数DOM元素集，还有字符串。**伪数组**

```javascript
// arguments对象
function args() { return arguments }
var arrayLike = args('a', 'b');

console.log(arrayLike[0])	// a
console.log(arrayLike.length)	// 2
console.log(arrayLike instanceof Array)	// false

// DOM元素集
var elts = document.getElementsByTagName('h3');
console.log(elts.length);	// 3
console.log(elts instanceof Array);	// false

// 字符串
console.log('abc'[1])	// b
console.log('abc'.length)	// 3
console.log('abc' instanceof Array)	// false
```

上面代码中包含3个例子，他们都不是数组，但是看上去都非常像数组。

数组的**slice**方法可以将"类似数组的对象"变成真正的数组。

```javascript
var arr = Array.prototype.slice.call(arrayLike);

// 补充
function args() { return arguments }
var arrayLike = args('a', 'b');
var arr  = Array.prototype.slice.call(arrayLike)
console.log(arr instanceof Array)	// true
```

除了转为真正的数组，"类似数组的对象"还有一个办法可以使用数组的方法，就是通过call()把数组的方法放在对象上面。

```javascript
function args() { return arguments }
var arrayLike = args('a', 'b', 'c');
function print(value, index) {
    console.log(index + ' : ' + value);
}
Array.prototype.forEach.call(arrayLike, print);

// 0 : a
// 1 : b
// 2 : c
```

上面代码中，**arrayLike**代表一个类似数组的对象，本来是不可以使用数组的**forEach**()方法的，但是通过**call()**，可以吧**forEach()**嫁接到**arrayLike**上面调用。相当于使用了**call()**属性后，你就可以使用到**forEach()**属性了。

```javascript
// forEach方法
function logArgs() {
  Array.prototype.forEach.call(arguments, function (elem, i) {
    console.log(i + '. ' + elem);
  });
}

// 等同于 for 循环
function logArgs() {
  for (var i = 0; i < arguments.length; i++) {
    console.log(i + '. ' + arguments[i]);
  }
}
```

上面代码中，在arguments对象上面调用forEach方法。

```javascript
Array.prototype.forEach.call('abc',function(chr){
    console.log(chr);
});
// a
// b
// c
```

上面代码中，字符串也是类似数组的对象，所以也可以用**Array.prototype.forEach.call**遍历。

## 运算符

运算符是处理数据的基本方法，用来从现有的值得到新的值。JS提供了多种运算符，覆盖了所有的运算

### 概述

- 加法运算符：x + y
- 减法运算符：x - y

- 乘法运算符：x * y
- 除法运算符：x / y

- 指数运算符：x ** y
- 余数运算符：x % y

- 自增运算符：x++
- 自减运算符：x--

- 数值运算法：+x
- 负数值运算符：-x

减法、乘法、除法运算符比较单纯，就是执行相应的数学运算

### 加法运算符

加法运算符(+)最常见的运算符，用来求两个数值的和。

```javascript
1 + 1 // 2
```

JS允许非数值的相加。

```javascript
true + true // 2
1 + true // 2
```

上面代码中，第一行是两个布尔值相加，第二行是数值于布尔值相加。这种情况，布尔值都会自动转成数值，然后相加。

比较特殊的是，如果是两个字符串相加，这时加法运算符就会变成连接运算符，返回一个新的字符串。

```
'a' + 'bc' // 'abc'
```

如果一个运算子是字符串，另一个运算子是非字符串，这时非字符串会转成字符串。

```javascript
1 + 'a' // '1a'
false + 'a' // falsea
```

加法运算符是在运行时决定的，到底执行相加的，还是执行连接，运算子的不同，导致了不同的语法行为，这种现象成为"重载"。由于加法运算符存在重载，可能执行两种运算，使用的时候必须很小心。

```javascript
'3' + 4 + 5 // 345
3 + 4 + '5' // 75
```

上面代码中，由于从左到右的运算次序，字符串的位置不同会导致不同的结果。

除了加法运算符，其他算术运算符(比如减法、除法和乘法)都不会发生重载。他们的规则是：所有运算子一律转为数值，再进行相应的数字运算。

```javascript
1 - '2' // -1
1 * '2'	// 2
1 / '2' 	// 0.5 
```

上面代码中，减法、除法和乘法运算符，都是将字符串自动转为数值，然后在运算。

### 对象的相加

如果运算子是对象，必须先转成原始类似的值，然后在相加。

```javascript
var obj = { p: 1 }
console.log(obj + 2)	// "[object Object]2"
```

上面代码中，对象**obj**转成原始类型的值是**[object Object]**，再加**2**就得到了上面的结果。

对象转成原始类型的值，规则如下：

首先，自动调用对象**valueOf**方法。

```javascript
var obj = { p: 1 }
console.log(obj.valueOf())	// { p: 1 }
```

一般来说，对象**valueOf**方法总是返回对象自身，这时再自动调用对象的**toString**方法，将其转为字符串。

```javascript
var obj = { p: 1 }
console.log(obj.valueOf().toString())	// "[object Object]"
```

对象**toString**方法默认返回**[object Object]**，所以就得到了最前面例子的结果。

知道了这个规则后，就可以定义**valueOf**方法或**toString**方法，得到想要的结果。

下面是自定义valueOf方法的例子。

```javascript
var obj = {
    valueOf: function() {
        return 1;
    }
};
console.log(obj + 2)	// 3
```

上面代码中，我们定义**obj**对象**valueOf**方法返回**1**，于是**obj + 2**就的不到了**3**。

这个例子中，由于**valueOf**方法直接返回一个原始类型的值，所以不再调用**toString**方法。

下面是自定义**toString**方法的例子。

```javascript
var obj = {
    toString: function () {
        return 'hello';
    }
};
console.log(obj + 2);	// "hello2"
```

上面代码中，对象**obj**的**toString**方法返回字符串**hello**。前面说过，只要有一个运算子是字符串，加法运算符就变成连接运算符，返回连接后的字符串。

### 余数运算符

余数运算符(**%**)返回前一个运算子被后一个运算子除，所得的余数。

```javascript
12 % 5 // 2
```

需要注意的是，运算结果的正负号由一个运算子的正负号决定。

```javascript
-1 % 2	// -1
1 % -2	// 1
```

所以，为了得到负数的正确余数值，可以先使用绝对值函数。

```javascript
function isOdd(n) {
    return Math.abs(n%2) === 1;
}
console.log(isOdd(-5))	// true
console.log(isOdd(-4))	// false
```

余数运算符还可以使用于浮点数的运算。但是，由于浮点数不是精确的值，**无法得到**完全准确的结果。

```javascript
6.5 % 2.1
// 0.19999999999999973
```

### 自增和自减运算符

自增和自减运算符，是一元运算符，只需要一个运算子。它们的作用 是将运算子首先转为数值，然后加上1或者减去1。它们会修改原始变量。

```javascript
var x = 1;
x++
console.log(x)	// 2
--x
console.log(x)	// 1
```

上面代码的变量**x**自增后，返回**2**，在进行自减，返回**1**。这两种情况都会使得，原始变量**x**的值发生改变。

运算之后，变量的值发生变化，这种效应叫做运算的副作用。自增和自减运算符是仅有两个具有副作用的运算符，其他运算符都不会改变变量的值。

自增和自减运算符有一个需要注意的地方，就是放在变量之后，会先返回变量操作前的值，在进行自增/自减操作；放在变量之前，会先进行自增/自减操作，在返回变量操作后的值。

```javascript
var x = 1;
var y = 1;

x++
++y
console.log(x)	// 2
console.log(y)	// 2
```

上面代码中，**x**是先返回当前的值，然后自增，所以得到2；y是先自增，然后返回新的值，所以得到**2。**

### 数值运算符，负数值运算符

数值运算符(**+**)同样使用家好，但它是一元运算符，而加法运算符是二元运算符。

数值运算符的作用在于可以将任何值转为数组

```javascript
console.log(+true)	// 1
console.log(+[])	// 0
console.log(+{})	// NaN
```

上面代码表示，非数值经过数值 运算符之后，都变成了数值。

负数值运算符(-)，具有一个值转为数组的功能，只不过得到值正负相反。连用两个负数值运算符，等同于数值运算符。

```javascript
var x = 1;
console.log(-x)	// -1
console.log(-(-x))	// 1
```

上面代码最后一行的圆括号不可少，否则会变成自减运算符。

### 指数运算符

指数运算符(**)完成指数运算，前一个运算子是底数，后一个运算子是指数。

```javascript
2 ** 4	// 16
```

注意，指数运算符是右结合，而不是左结合。即多个指数运算符连用时，先进行最右边的计算。

```javascript
// 相当于 2 ** (3 ** 2)
2 ** 3 ** 2
// 512
```

上面代码中，由于指数运算符是右结合，所以先计算第二个指数运算符。

### 赋值运算符

赋值运算符用于给变量赋值。

最常见的赋值运算符，就是等号(**=**)

```javascript
// 将 1 赋值给变量 x
var x = 1;

// 将变量 y 的值赋值给变量 x
var x = y;
```

赋值运算符还可以与其他运算符结合，形成变体。

```javascript
// 等同于 x = x + y
x += y

// 等同于 x = x - y
x -= y

// 等同于 x = x * y
x *= y

// 等同于 x = x / y
x /= y

// 等同于 x = x % y
x %= y

// 等同于 x = x ** y
x **= y
```

## 比较运算符

### 概述

比较运算符用于比较两个值的大小，然后返回一个布尔值，表示是否满足指定的条件。

```javascript
2 > 1 // true
```

上面代码比较**2**是否大于**1**，返回**true**。

注意，比较运算符可以比较各种类型的值，不仅仅是数组。

JS一共提供了8个比较运算符。

- \>	大于运算符
- <	小于运算符

- <=	小于或等于运算符
- \>=	大于或等于运算符

- ==	相等运算符
- ===	严格相等运算符

- !=	不相等运算符
- !==	严格不相等运算符

### 非相等运算符：字符串的比较

字符串按照字典顺序进行比较。

```javascript
'cat' > 'dog' // false
'cat' > 'catalog' // false
```

JS引擎内部首先比较首字符的Unicode码点。如果相等，在比较第二个字符的Unicode码点

### 非相等运算符：非字符串的比较

如果两个运算子之中，至少有一个不是字符串，需要分成一下两种情况

**原始类型值**

如果两个运算子都是原始类型的值，则是先转成数值在比较。

```javascript
5 > '4'	// true
// 等同于 5 > Number('4')
// 即 5 > 4

true > false // true
// 等同于 Number(true) > Number(false)
// 即 1 > 0

2 > true // true
// 等同于 2 > Number(true)
// 即 2 > 1
```

上面代码中，字符串和布尔值都会先转成数值，在进行比较。

这里需要注意与**NaN**的比较。任何值(包括**NaN**本身)与**NaN**使用非相等运算符进行比较，返回的都是**false**。

```javascript
1 > NaN // false
1 <= NaN // false
'1' > NaN // false
'1' <= NaN // false
NaN > NaN // false
NaN <= NaN // false
```

**对象**

**如果运算子是对象，会转为原始类型的值，再进行比较。**

对象转换成原始类型的值，算法是先调用**valueOf**方法；如果返回的还是对象，再接着调用**toString**方法。

```javascript
var x = [2];
x > '11'	// true
// 等同于 [2].valueOf().toString() > '11'
// 即 '2' > '111'

x.valueOf = function() { return '1' };
x > '111'	// false
// 等同于 [2].valueOf() > '11'
// 即 '1' > '11'
```

### 严格相等运算符

JS提供两种相等运算符： **==** 和 **===**

**不同类型的值**

**如果两个值的类型不同，直接返回false。**

```javascript
1 === "1" // false
true === "true" // false
```

上面代码比较数值的**1**与字符串的**"1"**、布尔值的**true**与字符串**"true"**，因为类型不同，结果都是**false**。

**同一类的原始类型值**

同一类的原始类型的值(数值、字符串、布尔值)比较时，值相同就返回**true**，值不同就返回**false。**

```javascript
1 === 0x1 // true
```

上面代码比较十进制的**1**与十六进制的**1**，因为类型和值都相同，返回**true**。

需要注意的是，**NaN**与任何值都不相等。

```javascript
NaN === NaN  // false
+0 === -0 // true
```

**复合类型值**

**两个复合类型(对象、数组、函数)的数据比较时，不是比较它们的值是否相等，而是比较它们是否指向同一个地址。**

```javascript
{} === {} // false
[] === [] // false
(function () {} === function () {}) // false
```

### 其他运算符，运算顺序

#### void 运算符

**void** 运算符的作用是执行一个表达式，然后不返回任何值，或者说返回**underfined**。

```javascript
void 0 // undefined
void(0) // undefined
```

上面是void运算符的两种写法，都是正确的。建议采用最后一种形式，即总是使用圆括号。因为void运算符的优先性很高，如果不使用括号，容易造成错误的结果。

```javascript
var x = 3;
void (x = 5);
console.log(x)	// 5
```

上面是void运算符的一个例子。

```javascript
<script>
function f() {
  console.log('Hello World');
}
</script>
<a href="http://baidu.com" onclick="f(); return false;">点击</a
```

上面代码中，点击链接后，会先执行**onclick**的代码，由于**onclick**返回**false**，所以浏览器不会跳到baidu.com。

**void**运算符可以取代上面的写法。

```javascript
<script>
function f() {
  console.log('Hello World');
}
</script>
<a href="javascript: void(f())">文字</a>
<a href="javascript: void(document.form.submit())">
  提交
</a>
```

上面代码中，用户点击链接提交表单，但是不产生页面跳转。

#### 逗号运算符

逗号运算符用于对两个表达式求值，并返回后一个表达式的值。

```javascript
'a', 'b' // 'b'

var x = 0;
var y = (x++, 10);

console.log(x)	// 1
console.log(y)	// 10
```

上面代码中，逗号运算符返回后一个表达式的值。

逗号运算符的一个用途是，在返回一个值之前，进行一些辅助操作。

```javascript
var value = (console.log('Hi!'),true);
// Hi!
console.log(value)	// true
```

上面代码中，先执行逗号之前的操作，然后返回逗号后面的值。

## 数据类型的转换

### 概述

JS是一种动态类型的语言，变量没有类型限制，可以随时赋予任意值。

```javascript
var x = y ? 1 : 'a';
```

上面代码中，变量**x**到底是数值还是字符串，取决于另一个变量**y**的值。**y**为**true**时，**x**是一个数值；**y**为**false**时，**x**是一个字符串。这意味着，**x**的类型没法在编译阶段知道，必须等到运行时才能知道。

### 强制转换

强制转换主要指使用**Number()**、**String()**、和**Boolean()**三个函数，手动将各种类型的值。分别转换成数字、字符串或者布尔值。

#### Number()

使用**Number**函数，可以将任意类型的值转化成数值。

**原始类型值**

```javascript
// 数值：转换后还是原来的值
Number(324) // 324

// 字符串：如果可以被解析为数值，则转换为相应的数值
Number('324') // 324

// 字符串：如果不可以被解析为数值，返回 NaN
Number('324abc') // NaN

// 空字符串转为0
Number('') // 0

// 布尔值：true 转成 1，false 转成 0
Number(true) // 1
Number(false) // 0

// undefined：转成 NaN
Number(undefined) // NaN

// null：转成0
Number(null) // 0
```

**Number**函数将字符串转为数值，要比**parseInt**函数严格很多。基本上，只要有一个字符无法转成数值，整个字符串就会被转为**NaN**。

```javascript
console.log(parseInt('42 cats'))	// 42
console.log(Number('42 cats'))	// NaN
```

上面代码中，**parseInt**逐个解析字符，而**Number**函数整体转换为字符串的类型。

```javascript
console.log(parseInt('\t\v\r12.34\n'))	// 12
console.log(Number('\t\v\r12.34\n'))	// 12.34
```

另外，**parseInt**和**Number**函数都会自动过滤一个字符串前导和后缀的空格。

#### 对象

简单的规则是，**Number**方法的参数是对象的，将返回**NaN**，除非是包含单个数值的数组。

```javascript
console.log(Number({ a: 1 }))	// NaN
console.log(Number([1, 2, 3]))	// NaN
console.log(Number([5]))	// 5
```

举个例子：

```javascript
var obj = { x: 1 };
console.log(Number(obj))	// NaN
// 等价于
if (typeof obj.valueOf() === 'object') {
    console.log(Number(obj.toString()));
} else {
    console.log(Number(obj.valueOf()));
}
```

上面代码中，**Number**函数将**obj**对象转为数值。首先调用**obj.valueOf**方法，结果返回对象本身；于是，继续调用**obj.toString**方法，这是返回字符串**[obj Object]**，对这个字符串使用**Number**函数，得到**NaN**。

默认情况下，对象**valueOf**方法放回返回对象本身，所以一般总会调用toString方法，而toString方法返回对象的类型字符串。所以，会有下面的结果。

```javascript
console.log(Number({}))	// NaN
```

如果toString方法返回的不是原始类似类型的值，结果就会报错。

```javascript
var obj = {
    valueOf: function () {
        return {};
    },
    toString: function () {
        return {};
    }
}
console.log(Number(obj))	// 报错
```

上面代码**valueOf**和**toString**方法，返回的都是对象，所以转成数值时会报错。

从上面可以看到，**valueOf**和**toString**方法，都是可以自定义的。

```javascript
Number({
  valueOf: function () {
    return 2;
  }
})
// 2

Number({
  toString: function () {
    return 3;
  }
})
// 3

Number({
  valueOf: function () {
    return 2;
  },
  toString: function () {
    return 3;
  }
})
// 2
```

上面代码对三个对象使用了**Number**函数。第一个对象返回**valueOf**方法的值，第二个对象返回**toString**方法的值，第三个对象表示**valueOf**方法> **toString**方法执行。

#### String()

String 函数可以将任意类型的值转化成字符串。

**1、原始类型值**

- **数值：转为相应的字符串**
- **字符串：转换后还是原来的值**

- **布尔值：true转为字符串"true"，false转为字符串"false"。**
- **underfined：转为字符串"underfined"。**

- **null：转为字符串"null"。**

```javascript
String(123) // "123"
String('abc') // "abc"
String(true) // "true"
String(undefined) // "undefined"
String(null) // "null"
```

**2、对象**

**String方法的参数如果是对象，返回一个类型字符串；如果是数组，返回该数组的字符串形式。**

```javascript
String({a: 1}) // "[object Object]"
String([1, 2, 3]) // "1,2,3"
```

**String**方法背后的转换规则，与**Number**方法基本相同，只是互换了**valueOf**方法和**toString**方法的执行顺序。

1. 先调用对象自身的**toString**方法。如果返回原始类型的值，则对该值使用**String**函数，不再进行后面步骤。
2. 如果**toString**方法返回的是对象，再调用原对象**valueOf**方法。如果**valueOf**方法返回原始类型的值，则对该值使用**String**函数，不再进行后面步骤。

1. 如果**valueOf**方法返回的是对象，就报错。

```javascript
String({a: 1})
// "[object Object]"

// 等同于
String({a: 1}.toString())
// "[object Object]"
```

上面代码中，先调用对象**toString**方法，发现返回的是字符串**[object Object]**，就不再调用**valueOf**方法了。

如果**toString**方法和**valueOf**方法，返回都是对象，就会报错。

```javascript
var obj = {
  valueOf: function () {
    return {};
  },
  toString: function () {
    return {};
  }
};

String(obj)
// TypeError: Cannot convert object to primitive value
```

从上面可以看到**toString**方法，都是可以自定义的。

```javascript
String({
  toString: function () {
    return 3;
  }
})
// "3"

String({
  valueOf: function () {
    return 2;
  }
})
// "[object Object]"

String({
  valueOf: function () {
    return 2;
  },
  toString: function () {
    return 3;
  }
})
// "3"
```

上面代码对三个对象使用**String**函数。第一个对象返回**toString**方法的值，第二个对象返回的还是**toString**方法的值，第三个对象表示**toString**方法优先于**valueOf**方法执行。

#### Boolean()

Boolean() 函数可以将任意类型的值转为布尔值。

它的转换规则相对简单，除了以下五个值的转换结果为false，其他值全部为true。

- underfined
- null

- 0、-0、+0
- NaN

- ' '（空字符串）

```javascript
Boolean(undefined) // false
Boolean(null) // false
Boolean(0) // false
Boolean(NaN) // false
Boolean('') // false
```

#### 自动转换

遇到以下三种情况时，JS会自动转换数据类型

第一种情况，不同类型的数据相互运算。

```javascript
123 + 'abc' // "123abc"
```

第二种情况，对非布尔值类型的数据求布尔值。

```javascript
if ('abc') {
  console.log('hello')
}  // "hello"
```

第三种情况，对非数值类型的值使用一元运算符(即 **+** 和 **-**)。

```javascript
+ {foo: 'bar'} // NaN
- [1, 2, 3] // NaN
```

预期什么类型的值，就调用该类型的转换函数。比如，某个位置预期为字符串，就调用**String()**函数进行转换。如果该位置即可以是字符串，也可以是数值，那么默认转为数值。建议在预期为布尔值、数值、字符串的地方，全部使用**Boolean()**、**Number()**、**String()**函数进行显式转换。

## 错误处理机制

### Error 实例对象

JS解析或运行时，一旦发生错误，引擎就会抛出一个错误对象。JS原生提供Error构造函数，所有抛出的错误都是这个构造函数的实例。

```javascript
var err = new Error('出错了');
console.log(err.message)	// 出错了
```

上面代码中，我们调用**Error()**构造函数，生成一个实例对象**err**。**Error()**构造函数接受一个参数，表示错误提示，可以从实例的**message**属性读到这个参数。抛出**Error**实例多想对象以后，整个程序就中断在发生错误的地方，不再往下执行。

JS语言提到，**Error**实例对象必须有**message**属性，表示出错时的提示信息，没有提到其他属性。大多数JS引擎，对**Error**实例还提供**name**和**stack**属性，分别表示错误的名词名称和错误的堆栈，但它们是非常标准的，不是每种实现都有。

- message：错误提示信息
- name：错误名称

- stack：错误的堆栈

使用**name**和**message**这两个属性，可以对发生什么错误有一个大概了解。

```javascript
var error = new Error('出错了');
if (error.name) {
    console.log(error.name + ":" + error.message)
}
// "Error:出错了"
```

**stack**属性用来查看错误发生时的堆栈。

```javascript
var error = new Error('出错了');
function throwit() {
    throw new Error('');
}
function catchit() {
    try {
        throwit();
    } catch (e) {
        console.log(e.stack); // print stack trace
    }
}
catchit()
// Error
//     at throwit (/Users/bytedance/Desktop/gitpush/JS语法学习/tempCodeRunnerFile.js:3:11)
//     at catchit (/Users/bytedance/Desktop/gitpush/JS语法学习/tempCodeRunnerFile.js:7:9)
//     at Object.<anonymous> (/Users/bytedance/Desktop/gitpush/JS语法学习/tempCodeRunnerFile.js:12:1)
//     at Module._compile (internal/modules/cjs/loader.js:1063:30)
//     at Object.Module._extensions..js (internal/modules/cjs/loader.js:1092:10)
//     at Module.load (internal/modules/cjs/loader.js:928:32)
//     at Function.Module._load (internal/modules/cjs/loader.js:769:14)
//     at Function.executeUserEntryPoint [as runMain] (internal/modules/run_main.js:72:12)
//     at internal/main/run_main_module.js:17:47
```

上面代码中，错误堆栈的最内层时**throwit**函数，然后时**catchit**函数，最后是函数的运行环境。

### 原生错误类型

Error实例对象是最一般的错误类型，在它的基础上，JS还定义了其他6种错误对象

#### SyntaxError 对象

**SyntaxError**对象是解析代码时发生的语法错误。

```javascript
// 变量名错误
var 1a;
// Uncaught SyntaxError: Invalid or unexpected token

// 缺少括号
console.log 'hello');
// Uncaught SyntaxError: Unexpected string
```

上面代码的错误，都是在语法解析阶段就可以发现，所以会抛出SyntaxError。第一个错误提示是"token非法"，第二个错误提示是"字符串不符合要求"。

#### ReferenceError 对象

**ReferenceError** 对象是引用一个不存在的变量时发生的错误。

```javascript
// 使用一个不存在的变量
unknownVariable
// Uncaught ReferenceError: unknownVariable is not defined
```

#### RangeError 对象

**RangeError** 对象是一个超出有效范围时发生的错误，一是数组长度为负数，二是**Number**对象的方法参数超出范围。

```javascript
// 数组长度不得为负数
new Array(-1)
// Uncaught RangeError: Invalid array length
```

#### TypeError 对象

**TypeError** 对象是变量或参数不是预期类型时发生的错误。比如，对字符串、布尔值、数值等原始类型的值使用**new**命令，就会抛出这种错误，因为**new**命令的参数应该为一个构造函数。

```javascript
new 123
// Uncaught TypeError: 123 is not a constructor

var obj = {};
obj.unknownMethod()
// Uncaught TypeError: obj.unknownMethod is not a function
```

#### URIError 对象

**URIError** 对象时URI相关函数的参数不正确时抛出的错误，主要涉及**encodeURI()**、**decodeURI()**、**encodeURIComponent()**、**decodeURIComponent()**、**escape()**和**unescape()**这六个函数。

### EvalError 对象

eval 函数没有被正确执行时，会抛出EvalError错误。该错误类型已经废除了

#### 总结：

以上6种派生错误，连同原始的Error对象，都是构造函数。开发者可以使用他们

```javascript
var err1 = new Error('出错了！');
var err2 = new RangeError('出错了，变量超出有效范围！');
var err3 = new TypeError('出错了，变量类型无效！');

console.log(err1.message) // "出错了！"
console.log(err2.message) // "出错了，变量超出有效范围！"
console.log(err3.message) // "出错了，变量类型无效！"
```

### 自定义错误

除了JS原生提供的七种错误对象，还可以自定义自己的错误对象。

```javascript
function UserError(message) {
    this.message = message || "默认信息";
    this.name = 'UserError';
}

UserError.prototype = new Error();
UserError.prototype.constructor = UserError;
```

上面代码自定义一个错误对象UsernameError，让它继承Error对象。然后，就可以生成这种自定义类型的错误了。

```javascript
new UserError('这是自定义的错误!');
```

### throw 语句

throw语句的作用是手动中断程序执行，抛出一个错误。

```javascript
var x = -1;
if (x <= 0) {
    throw new Error("x 必须为正数");
}
// Error: x 必须为正数
```

上面代码中，如果变量**x**小于等于**0**，就手动抛出一个 错误，告诉用户**x**的值不正确，整个程序就会在这里中断执行。可以看到，**throw**抛出的错误就是它的参数，这里是一个**Error**对象的实例。

**throw**也可以抛出自定义错误。

```javascript
function UserError(message) {
    this.message = message || '默认信息';
    this.name = 'UserError';
}

throw new UserError('出错了!');
// UserError { message: '出错了!', name: 'UserError' }
```

上面代码中，**throw**抛出的是一个**UserError**实例。

实际上，**throw**可以抛出任何类型的值，也就是说，它的参数可以是任何值。

```javascript
// 抛出一个字符串
throw 'Error！';
// Uncaught Error！

// 抛出一个数值
throw 42;
// Uncaught 42

// 抛出一个布尔值
throw true;
// Uncaught true

// 抛出一个对象
throw {
  toString: function () {
    return 'Error!';
  }
};
// Uncaught {toString: ƒ}
```

对于JS引擎来说，遇到**throw**语句，程序就停止了。引擎会接收到**throw**抛出的信息，可能是一个错误实例，也可能是其他类型的值。

### try...catch 结构

一旦发生错误，程序终止执行了。JS提供了try...catch结构，允许对错误进行处理，选择是否往下执行。

```javascript
try {
    throw new Error('出错了!');
} catch (e) {
    console.log(e.name + ':' + e.message);	// Error:出错了!
    console.log(e.stack);	
  // Error: 出错了! at Object.<anonymous> (/Users/bytedance/Desktop/gitpush/JS语法学习/tempCodeRunnerFile.js:3:11)
}
```

上面代码中，try代码块抛出错误，JS引擎就立即把代码执行，转到catch代码块，或则说错误被catch代码捕获了。catch接收一个参数，表示try代码块抛出的值。

如果你不确定某些代码是否会报错，就可以把他们放在try...catch代码快之中，便于进一步对错误进行处理。

```javascript
try {
    f();
} catch (e) {
    // 处理错误
}
```

上面代码中，如果函数**f**执行报错，就会进行**catch**代码块，接着对错误进行处理。

**catch**代码块捕获错误之后，程序不会中断，会按照正常流程继续执行下午。

```javascript
try {
    throw "出错了";
} catch (e) {
    console.log(111);
}
console.log(222);	
// 111
// 222
```

上面代码中，**try**代码块抛出的错误，被**catch**代码块捕获后，程序会继续向下执行。

**catch**代码块之中，还可以再抛出错误，甚至使用潜逃嵌套的**try...catch**结构。

```javascript
var n = 100;

try {
    throw n;
} catch (e) {
    if (e <= 50) {
        // ...
    } else {
        throw e;
    }
}
// Uncaught 100
```

为了捕捉不同类型的错误，catch代码块之中可以加入判断语句。

```javascript
try {
    foo.bar();
} catch (e) {
    if (e instanceof EvalError) {
        console.log(e.name + ':' + e.message);
    } else if (e instanceof RangeError) {
        console.log(e.name + ":" + e.message);
    }
    // ....
}
```

上面代码中，catch捕获错误之后，会判断错误类型，进行不同的处理。

### finally 代码块

try...catch 结构允许在最后添加一个finally代码块，表示不管是否出现错误，都必须在最后运行的语句。

```javascript
function cleansUp() {
    try {
        throw new Error('出错了...');
        console.log('此行不会执行');
    } finally {
        console.log('完成清理工作');
    }
}

cleansUp()
// 完成清理工作
// /Users/bytedance/Desktop/gitpush/JS语法学习/tempCodeRunnerFile.js:3
//         throw new Error('出错了...');
```

上面代码中，由于没有**catch**语句快，一旦发生错误，代码就会中断执行。中断执行之前，会先执行**finally**代码块，然后再向用户提示报错信息。

```javascript
function idle(x) {
    try {
        console.log(x);
        return 'result';
    } finally {
        console.log('FINALLY')
    }
}

idle('hello')
// hello
// FINALLY
```

上面代码中，**try**代码块没有发生错误，而且里面还包括**return**语句，但是**finally**代码依然会执行。而且，这个函数的返回值还是**result**。

```javascript
var count = 0;
function countUp() {
    try {
        return count;
    } finally {
        count++;
    }
}

console.log(countUp())
// 0
console.log(count)
// 1
```

上面代码说明，return语句里面count的值，实在finally代码块运行之前就获取了。

下面是finally代码块用法的典型场景

```javascript
openFile();

try {
  writeFile(Data);
} catch(e) {
  handleError(e);
} finally {
  closeFile();
}
```

上面代码中，首先打开一个文件，然后**try**代码块中写入文件，如果没有发生错误，则运行**finally**代码块关闭文件；一旦发生错误，则先使用**catch**代码块处理错误，再使用**finally**代码块关闭文件。

下面的例子充分反映了**try...catch...finally**这三者之间的执行顺序。

```javascript
function f() {
    try {
        console.log(0);
        throw 'bug';
    } catch (e) {
        console.log(1);
        return true;	// 这个遇到错误会先执行finally语句，放在finally代码块结束后在执行
        console.log(2);	// 不会执行
    } finally {
        console.log('3');
        return false;	// 这会覆盖掉前面那句 return
        console.log(4);	// 不会执行
    }
    console.log(5)	// 不会执行
}

var result = f()
// 0
// 1
// 3

console.log(result)	// false
```

上面代码中，**catch**代码块结束执行之前，会先执行**finally**代码快。



**catch**代码块之中，触发转入**finally**代码块的标志，不仅有**return**语句，还有**throw**语句。

```javascript
function f() {
    try {
        throw '出错了';
    } catch (e) {
        console.log('捕捉到内部错误');
        throw e;	//	这句原本会等到finally结束后在运行
    } finally {
        return false;	// 直接返回
    }
}

try {
    f();
} catch (e) {
    console.log('caught outer "bogus"');	// 不会运行
}

// 捕捉到内部错误
```

上面代码中，进入**catch**代码块之后，一遇到**throw**语句，就会去执行**finally**代码块，其中**return false**语句，因此就直接返回了，不再会回去执行**catch**代码块剩下的部分了。

**try**代码块内部，还可以再使用**try**代码块。

```javascript
try {
    try {
        consle.log('Hello World!')	// 报错(故意写错console单词)
    }
    finally {
        console.log('Finally')
    }
    console.log('Will I run?');
} catch (error) {
    console.error(error.message)
}

// Finally
// consle is not defined
```

上面代码中，**try**里面还有一个**try**。内层的**try**报错(**consoel**拼错了)，这时会执行内层的**finally**代码块，然后抛出错误，被外层的**catch**捕获。

## 编程的风格

"编程风格"指的是编写代码的样式规则，不同的人有着不同的编程风格。

### 缩进

行首和空格和Tab键，都可以产生代码缩进效果。

### 区块

如果循环和判断的代码只有一行，JS允许该区块省略大括号。

```javascript
if (a)
  b();
	c();
// 等同于
if (a) {
	b();
}
c();
```

因此，建议总是使用大括号表示区快。

### 圆括号

圆括号在JS中有两种作用，一种表示函数的调用，另一种表示表达式的组合。

```javascript
// 圆括号表示函数的调用
console.log('abc');

// 圆括号表示表达式的组合
(1 + 2) * 3
```

### 行尾的分号

分号表示一条语句的结束。JS允许省略行尾的分号。

#### 不用使用分号的情况

首先，以下三种情况，语法规定本来就不需要在结尾添加分号。

- **for**和**while**循环

```javascript
for ( ; ; ) {
} // 没有分号

while (true) {
} // 没有分号
```

注意，**do...while**循环是有分号的。

```javascript
do {
  a--;
} while(a > 0); // 分号不能省略
```

- 分支语句：**if，switch，try**

```javascript
if (true) {
} // 没有分号

switch () {
} // 没有分号

try {
} catch {
} // 没有分号
```

- 函数的声明语句

```javascript
function f() {
} // 没有分号
```

注意，函数表达式仍然要使用分号。

```javascript
var f = function f() {
};
```

### 变量声明

JS会自动将将变量声明"提升"到代码块的头部。

```javascript
if (!x) {
  var x = {};
}

// 等同于
var x;
if (!x) {
  x = {};
}
```

这意味着，变量x是if代码块之前就存在了。为了避免可能出现的问题，最好把变量声明都放在代码块的头部。

```javascript
for (var i = 0; i < 10; i++) {
  // ...
}

// 建议写成
var i;
for (i = 0; i < 10; i++) {
  // ...
}
```

### with 语句

with可以减少代码的书写，但是会造成混淆。

```javascript
with (o) {
　foo = bar;
}
// 上面代码中，可以有四种运行结果:
// o.foo = o.bar;
// foo = bar;
// foo = o.bar;
```

### 相等和严格相等

JS有两个表示相等的运算符："相等"(**==**)和"严格相等"(**===**)。

相等运算符会自动转换变量类型，造成很多意想不到的情况。

```javascript
0 == ''// true
1 == true // true
2 == true // false
0 == '0' // true
false == 'false' // false
false == '0' // true
' \t\r\n ' == 0 // true
```

因此可以看出，建议不要使用相等运算符(**==**)，只使用严格相等运算符(**===**)。

## console 对象与控制台

### console 对象

**console** 对象是JS的原生对象，可以输出各种信息到控制台，并且还提供了很多有用的辅助方法。

**console** 的常见用途有两个。

- 调试程序，显示网页代码运行时的错误信息。
- 提供了一个命令行接口，用来与网页代码互动。

### console 对象的静态方法

**console** 对象提供的各种静态方法，用来与控制台窗口互动。

#### console.log()

**console.log** 方法用于控制台输出信息，它可以接收一个或多个参数，将它们连接起来输出。

```javascript
console.log('Hello World')
// Hello World
console.log('a', 'b', 'c')
// a b c
```

**console.log** 方法会自动在每次输出的尾行，添加换行符。

```javascript
console.log(1);
console.log(2);
console.log(3);
// 1
// 2
// 3
```

如果第一个参数是格式字符串(使用了格式占位符)，**console.log** 方法依次用后面的参数替换占位符，然后进行输出。

```javascript
console.log(' %s + %s = %s', 1, 1, 2)
//  1 + 1 = 2
```

上面代码中，**console.log**方法的第一个参数有三个占位符(**%s**)，第二、三、四个参数会在显示时，依次替换掉这个三个占位符。

**console.log** 方法支持以下占位符，不同类型的数据必须使用对应的占位符。

- %s 字符串
- %d 整数

- %i 整数
- %f 浮点数

- %o 对象的链接
- %c CSS格式字符串

```javascript
var number = 11 * 9;
var color = 'red';

console.log('%d %s balloons', number, color);
// 99 red balloons
```

上面代码中，第二个参数是数值，对应的占位符是**%d**，第三个参数是字符串，对应的占位符是**%s**。

使用**%c**占位符时，对应的参数必须是CSS代码，用来对输出内容进行CSS渲染。

```javascript
console.log(
  '%cThis text is styled!',
  'color: red; background: yellow; font-size: 24px;'
)
```

上面代码运行后，输出的内容将带上css样式。

**console.log** 方法的两种参数格式，可以结合在一起使用。

```javascript
console.log(' %s + %s ', 1, 1, '= 2')
// 1 + 1  = 2
```

如果参数是一个对象，**console.log**会显示该对象的值。

```javascript
connsole.log({foo: 'bar'})
// Object {foo: "bar"}
console.log(Date)
// [Function: Date]
```

上面代码输出Date对象的值，结构为一个构造函数。

#### console.warn()，console.error()

warn 方法和error方法也是控制台输出信息，它们与log方法的不同之处在于，warn方法输出信息时，在最前面加一个黄色三角，表示警告；error方法输出信息时，在最前面加了一个红色的叉，表示出错。

```javascript
console.error('Error: %s (%i)', 'Server is not responding', 500)
// Error: Server is not responding (500)
console.warn('Warning! Too few nodes (%d)', document.childNodes.length)
// Warning! Too few nodes (1)
```

上面代码中，可以这样理解，**log**方法是写入标准输出，**warn**方法和**error**方法是写入标准错误。

#### console.table()

对于某些复合类型的数据，console.table方法可以将其转为表格显示。

```javascript
var languages = [
  { name: "JavaScript", fileExtension: ".js" },
  { name: "TypeScript", fileExtension: ".ts" },
  { name: "CoffeeScript", fileExtension: ".coffee" }
];

console.table(languages);
┌─────────┬────────────────┬───────────────┐
│ (index) │      name      │ fileExtension │
├─────────┼────────────────┼───────────────┤
│    0    │  'JavaScript'  │     '.js'     │
│    1    │  'TypeScript'  │     '.ts'     │
│    2    │ 'CoffeeScript' │   '.coffee'   │
└─────────┴────────────────┴───────────────┘
```

下面是显示表格内容的例子：

```javascript
var languages = {
    csharp: { name: "C#", paradigm: "object-oriented" },
    fsharp: { name: "F#", paradigm: "functional" }
};

console.table(languages);
```

上面代码的languages，转为表格显示如下

```javascript
┌─────────┬──────┬───────────────────┐
│ (index) │ name │     paradigm      │
├─────────┼──────┼───────────────────┤
│ csharp  │ 'C#' │ 'object-oriented' │
│ fsharp  │ 'F#' │   'functional'    │
└─────────┴──────┴───────────────────┘
```

### console.count()

**count**方法用于计数，输出它被调用了多少次。

```javascript
function greet(user) {
    console.count();
    return 'hi' + user;
}
console.log(greet('bob'))
// default: 1
// hi bob
console.log(greet('alice'))
// default: 2
// hi alice
console.log(greet('bob'))
// default: 3
// hi bob
```

上面代码每次调用**greet**函数，内部的**console.count方法就输出执行次数。**

该方法可以接收一个字符串作为参数，作为标签，对执行次数进行分类。

```javascript
function greet(user) {
    console.count(user);
    return 'hi' + " " + user;
}
console.log(greet('bob'))
// bob: 1
// hi bob
console.log(greet('alice'))
// alice: 1
// hi alice
console.log(greet('bob'))
// bob: 2
// hi bob
```

上面代码根据参数的不同，显示**bob**执行了两次，**alice**执行了一次。

#### console.dir(),console.dirxml()

> **dir**方法用来对一个对象进行检查，并以易于阅读和打印的格式显示。

```javascript
console.log({f1:'foo',f2:'bar'})
// { f1: 'foo', f2: 'bar' }
console.dir({ f1: 'foo', f2: 'bar' })
//   f1: "foo"
//   f2: "bar"
```

上面代码显示**dir**方法的输出结果，比**log**方法更易读，信息也更丰富。

该方法对于输出DOM对象非常有用，因为会显示DOM对象所有属性。

```javascript
console.dir(document.body)
```

Node环境中，还可以指定代码高亮形式输出。

```javascript
console.dir(obj, {colors: true})
```

**dirxml**方法主要用于以目录树的形式，显示DOM节点。

```javascript
console.dirxml(document.body)
```

如果参数不是DOM节点，而是普通的JS对象，**console.dirxml**等同于**console.dir**。

```javascript
console.dirxml([1, 2, 3])
// 等同于
console.dir([1, 2, 3])
```

#### console.assert()

> **console.assert**方法主要用于程序运行过程中，进行条件判断，如果不满足条件，就显示一个错误，但不会中断程序执行。这就相当于提示用户。
>
> 它接受两个参数，第一个参数是表达式，第二个参数是字符串。只有当第一个参数为**false**，才会提示有错误，在控制台输出第二个参数，否则不会有任何结果。

```javascript
console.assert(false, '判断条件不成立')
// Assertion failed: 判断条件不成立
// 相当于
try {
  if (!false) {
    throw new Error('判断条件不成立');
  }} catch (e) {
    console.error(e);
  }
```

下面是一个例子，判断子节点的个数是否大于等于500。

```javascript
console.assert(list.childNodes.length < 500, '节点个数大于等于500')
```

上面代码中，如果符合条件的节点小于500个，不会有任何输出；只有大于等于500时，才会在控制台提示错误，并且显示指定文本。

#### console.time(),console.timeEnd()

> 这两个方法用于计时，可以算出一个操作所话费的准确时间。

```javascript
console.time('Array initialize');
var array = new Array(100000);
for (var i = array.length - i;
     i >= 0;
     i--){
  array[i] = new Object();
};
console.timeEnd('Array initialize')
// Array initialize: 0.509ms
```

**time**方法表示计时开始，**timeEnd**方法表示计时结束。它们的参数时计时器的名称。调用**timeEnd**方法之后，控制台会显示"计时器名称：所耗费的时间"。

#### Console.group(),console.groupEnd(),console.groupCollapsed()

> console.group和console.groupEnd这两个方法用于显示的信息分组。它只在输出大量信息时有用，分在一组的信息，可以用鼠标折叠/展开。

```javascript
console.group('一级分组');
console.log('一级分组的内容');
console.group('二级分组');
console.log('二级分组的内容');
console.groupEnd(); 
// 二级分组结束
console.groupEnd();
// 一级分组结束
```

![image-20211028102733505](https://gitee.com/ran_yong/mark-down-table-upload/raw/master/img/20211028102733.png)

上面代码会将"二级分组"显示在"一级分组"内部，并且"一级分组"和"二级分组"前面都有一个折叠符号，可以用来折叠本级的内容。

**console.groupCollapsed**方法与**console.group**方法类似，唯一的区别就是该组的内容，在第一次显示时是收起的，而不是展开的。

```javascript
console.groupCollapsed('Fetching Data');
console.log('Request Sent');
console.error('Error: Server not responding (500)');
console.groupEnd();
```

![image-20211028125645211](https://gitee.com/ran_yong/mark-down-table-upload/raw/master/img/20211028125645.png)

上面代码只显示一行"Fetching Data"，点击后才会展开。

#### console.trace(),console.clear()

> **console.trace**方法显示当前执行的代码在堆栈中的调用路径。

```javascript
console.trace()
//	(anonymous)
```

**console.clear**方法用于清楚当前控制台的所有输出，将光标回置到第一行。

### 控制台命令行API

> 浏览器控制台中，除了使用console对象，还可以使用一些控制台自带的命令行方法。

- $

> **$_**属性返回一个表达式的值。

```javascript
2 + 2// 4$_// 4
```

- $0-$4

> 控制台保存了近5个在Elements面板选中的DOM元素，**$0**代表倒数第一个，$1代表倒数第二个，以此类推。

- $(selector)

> **$(selector)**返回第一个匹配的元素，等同于**document.querySelector()**。注意，如果页面脚本对$有定义，则覆盖原始的定义。

- $$(selector)

> **$$(selector)**返回选中的DOM对象，等同于**document.querySelectorAll**。

- $x(path)

> **$x(path)**方法返回一个数组，包含匹配特定的XPath表达式的所有DOM元素。

```javascript
$x("//p[a]")
```

上面代码返回所有包含**a**元素的**p**元素

- inspect(object)

> **inspect(object)**方法打开相关面板，并选中相应的元素，显示它的细节。DOM元素在Element面板中显示，比如inspect(document)会在Elements面板显示document元素

### debugger 语句

> Debugger 语句主要用于除错，作用是设置断点。
>
> Chrome 浏览器中，当代码运行到debugger语句时，就会暂停运行，自动打开脚本源码界面。

```javascript
for(var i = 0; i < 5; i++){
  console.log(i);
  if (i === 2) 
    debugger;
}
```

上面代码打印出0，1，2以后，就会暂停，自动打开源码界面，等待进一步处理。

## 标准库

### Object 对象

> JS原生提供**Object**对象
>
> JS的所有其他对象都继承自**Object**对象，即那些对象都是**Object**实例。
>
> **Object**对象的原生方法分成两类：**Object**本身的方法与**Object**的实例方法。

- Object对象本身的方法

> 所谓"本身的方法"就是直接定义在**Object**对象的方法。

```javascript
Object.print = function (o) {
  console.log(o) 
};
```

上面代码中，**print**方法就是直接定义在**Object**对象上。

- Object的实例方法

> 所谓实例方法就是定义在**Object**原型对象**Object.prototype**上的方法。它可以被**Object**实例直接使用。

```javascript
Object.prototype.print = function () {
  console.log(this);};
var obj = new Object();
obj.print()
// Object
```

上面代码中，**Object.prototype**定义了一个**print**方法，然后生成一个**Object**实例**obj**。**obj**直接继承了**Object.prototype**的属性和方法，可以直接使用**obj.print**调用**print**方法。也就是说，**obj**对象的**print**方法实质上就是调用**Object.prototype.print**方法。

- Object()

> Object本身是一个函数，可以当作工具方法使用，将任意值转为对象。这个方法常用于保护某个值一定是对象。
>
> 如果参数为空(或者**underfined**和**null**)，**object()**返回一个空对象。

```javascript
var obj = Object();
// 等同于
var obj = Object(undefined);
var obj = Object(null);
console.log(obj instanceof Object)	
// true
```

上面代码的含义，是将**underfined**和**null**转为对象，结果得到了一个空对象**obj**。

**instanceof**运算符用来验证，一个对象是否为指定的构造函数的实例。**obj instanceof Object** 返回**true**，就表示**obj**对象是**Object**的实例。

```javascript
var obj = Object(1);
console.log(obj instanceof Object)
// true
console.log(obj instanceof Number)	
// truevar obj = Object('foo');
console.log(obj instanceof Object)
// true
console.log(obj instanceof String)
// truevar obj = Object(true);
console.log(obj instanceof Object)
// true
console.log(obj instanceof Boolean)
// true
```

上面代码中，**Object**函数的参数时各种原始类型的值，转换成对象就是原始类型值对应的包装对象。

```javascript
var arr = [];var obj = Object(arr);
// 返回原数组console.log(obj === arr)
// true
var value = {};
var obj = Object(value)
// 返回原对象
console.log(obj === value)
// true
var fn = function () { };
var obj = Object(fn);
// 返回原函数
console.log(obj === fn)
// true
```

上面代码中，如果Object方法的参数是一个对象，它总是返回该对象，即不用转换。

```javascript
function isObject(value) {
  return value === Object(value);
}
console.log(isObject([]))
// trueconsole.log(isObject(true))
// false
```

利用这一点，可以写一个判断变量是否为对象的函数。

#### Object 构造函数

> **Object**不仅可以当工具函数使用，还可以当作构造函数使用，即前面可以使用**new**命令

**Object**构造函数的首要用途，是直接通过它来生成新对象。

```javascript
var obj = new Object();
```

> ⚠️：通过**var obj = new Object()** 的写法生成新对象，与字面量的写法 **var ojb = {}** 是等价的。或者说，后者知识前者的一种简便写法。

```javascript
var o1 = { a: 1 };
var o2 = new Object(o1);
console.log(o1 === o2)
// truevar obj = new Object(123);
console.log(obj instanceof Number)
// true
```

上面代码中，虽然用法相似，但是**Object(value)**与**new Object(value)**两者的语义是不同的，**Object(value)**表示将**value**转成一个对象，**new Object(value)**则表示新生成一个对象，它的值是**value**。

#### Object 静态方法

> 所谓"静态方法"，是指部署在**Object**对象自身的方法。

#### Object.keys(),Object.getOwnPropertyNames()

> **Object.keys**方法和**Object.getOwnPropertyNames**方法都是用来遍历对象的属性。

**Object.keys**方法的参数是一个对象，返回一个数组。该数组的成员都是该对象自身的所有属性名。

```javascript
var obj = {
  p1: 123,
  p2: 456
}
console.log(Object.keys(obj))	
// [ 'p1', 'p2' ]
```

**Object.getOwnPropertyNames**方法与**Object.keys**类似，也是接受一个对象作为参数，返回一个数组，包含了该对象自身的所有属性名。

```javascript
var obj = {
  p1: 123,
  p2: 345};
console.log(Object.getOwnPropertyNames(obj))
// [ 'p1', 'p2' ]
```

**Object.keys**方法只返回可枚举的属性名。

```javascript
var a = ['Hello', 'World'];console.log(Object.keys(a))
// [ '0', '1' ]
console.log(Object.getOwnPropertyNames(a))
// [ '0', '1', 'length' ]
```

上面代码中，数组的**length**属性是不可枚举的属性，所以只出现在**Object.getOwnPropertyNames**方法的返回结果中。

由于JS没有提供计算对象属性个数的方法，所以可以用这两个方法代替。

```javascript
var obj = {
  p1: 123,
  p2: 456};
console.log(Object.keys(obj).length)
// 2
console.log(Object.getOwnPropertyNames(obj).length)
// 2
```

一般情况下，几乎都是用**Object.keys**方法，遍历对象的属性。

#### Object 的实例方法

> 除了静态方法，还有不少方法定义在**Object.prototype**对象。它们称为实例方法，所以Object的实例对象都继承了这些方法。

**Object**实例对象的方法，主要有以下六个。

- Object.prototype.valueOf()：返回当前对象对应的值。
- Object.prototype.toString()：返回当前对象对应的字符串形式。
- Object.prototype.toLocaleString()：返回当前对象对应的本地字符串形式。
- Object.prototype.hasOwnProperty()：判断某个属性是否为当前对象自身的属性，还是继承自原型对象的属性。
- Object.prototype.isPrototypeOf()：判断当前对象是否为另一个对象的原型。
- Object.prototype.propertyIsEnumerable()：判断某个属性是否可枚举。

#### Object.prototype.valueOf()

> valueOf方法的作用是返回一个对象的"值"，默认情况下返回对象本身。

```javascript
var obj = new Object();
console.log(obj.valueOf() === obj)
// false
```

上面代码比较**obj.valueOf()**与**obj**本身，两者都是一样的。

**valueOf**方法的主要用途是，JS自动类型转换时会默认调用这个方法。

```javascript
var obj = new Object();
console.log(1 + obj)	
// 1[object Object]
```

上面代码将对象**obj**与数字1相加。这时JS就会默认调用**valueOf()**方法，求出**obj**的值与1相加。所以，如果自定义**valueOf**方法，就可以得到想要的结果。

```javascript
var obj = new Object();
obj.valueOf = function () {
  return 2;}
console.log(1 + obj)
// 3
```

上面代码自定义了**obj**对象的**valueOf**方法，于是**1**+**obj**就得到了**3**。这种方法相当于用自定义的**obj.valueOf**，覆盖了**Object.prototpye.valueOf**。

#### Object.prototype.toString()

> **toString**方法的作用时返回一个对象的字符串形式，默认情况下返回类型字符串。

```javascript
var o1 = new Object();
console.log(o1.toString())
// [object Object]var o2 = { a: 1 };
console.log(o2.toString())
// [object Object]
```

上面代码标识，对于一个对象调用**toString**方法，会返回字符串**[object Object]**，该字符串说明对象的类型。

字符串**[object Object]**本身没有太大用处，但是通过自定义**toString**方法，可以让对象在自动类型转换时，得到想要的字符串形式。

```javascript
var obj = new Object();
obj.toString = function () {
  return "hello";}
console.log(obj + " " + 'world')
// hello world
```

上面代码表示，当对象用于字符串加法时，会自动调用**toString**方法。由于自定义了**toString**方法，所以会返回字符串**hello world**

数组、字符串、函数、Data对象都分别部署了自定义的**toString**方法，覆盖了**Object.prototype.toString**方法。并不会返回**[object Object]**，因为它们都自定义了**toString**方法，覆盖了原始方法。

#### toString()的应用：判断数据类型

> Object.prototype.toString方法返回对象的类型字符串，因此可以用来判断一个值的类型。

```javascript
var obj = {};console.log(obj.toString())
// [object Object]
```

上面代码调用空对象**toString**方法，结果返回一个字符串**object Object**，其中第二个**Object**表示该值的结构函数。这是一个十分有用的判断数据类型的方法。

不同的数据类型的Object.prototype.toString方法返回值如下。

- 数值：返回**[object Number]**。
- 字符串：返回**[object String]**。
- 布尔值：返回**[object Boolean]**。
- underfined：返回**[object Underfined]**。
- null：返回**[object Null]**。
- 数组：返回**[object Array]**。
- arguments 对象：返回**[object Arguments]**。
- 函数：返回**[object Function]**。
- Error对象：返回**[object Error]**。
- Data对象：返回**[object Data]**。
- RegExp对象：返回**[object Object]**。
- 其他对象：返回**[object Object]**。

这就是说，**Object.prototype.toString**可以看出一个值到底是什么类型。

```javascript
console.log(Object.prototype.toString.call(2))	
// [object Number]console.log(Object.prototype.toString.call(''))	
// [object String]console.log(Object.prototype.toString.call(true))	
// [object Boolean]console.log(Object.prototype.toString.call(undefined))	
// [object Undefined]console.log(Object.prototype.toString.call(null))	
// [object Null]console.log(Object.prototype.toString.call(Math))	
// [object Math]console.log(Object.prototype.toString.call({}))	
// [object Object]console.log(Object.prototype.toString.call([]))	
// [object Array]
```

利用这个特性，可以写出一个typeof运算符更准确的类型判断函数。

```javascript
var type = function (o) {    
  var s = Object.prototype.toString.call(o);
  return s.match(/\[object (.*?)\]/)[1].toLowerCase();};
console.log(type({}))	
// objectconsole.log(type([]))	
// arrayconsole.log(type(5))	
// numberconsole.log(type(null))	
// nullconsole.log(type())	
// undefinedconsole.log(type(/abcd/))	
// regexpconsole.log(type(new Date()))	
// date
```

在上面这个**type**函数的基础上，还可以加上专门判断某种类型数据的方法。

```javascript
var type = function (o) {
  var s = Object.prototype.toString.call(o); 
  return s.match(/\[object (.*?)\]/)[1].toLowerCase();
};
[
    'Null',
    'Underfined',
    'Object',
    'Array',
    'String',
    'Number',
    'Boolean',
    'Function',
    'RegExp'].forEach(function (t) {
    type['is' + t] = function (o) {
      return type(o) === t.toLowerCase()
    }
});
console.log(type.isObject({}))	
// trueconsole.log(type.isNumber(NaN))	
// trueconsole.log(type.isRegExp(/abc/))	
// true
```

#### Object.prototype.toLocaleString()

> **Object.prototype.toLocaleString**方法与**toString**的返回结果相同，也是返回一个值的字符串形式。

```javascript
var obj = {};console.log(obj.toString(obj));
// [object Object]
console.log(obj.toLocaleString(obj));
// [object Object]
```

这个方法的主要作用是留出一个接口，让各种不同的对象实现自己版本的**toLocaleString**，用来返回针对某些地域的特定的值。 

```javascript
var person = {    
  toString: function () {
    return 'Henry Norman Bethune';
  },
  toLocaleString: function () {
    return '白求恩';
  }};
console.log(person.toString())
// Henry Norman Bethune
console.log(person.toLocaleString())
// 白求恩
```

上面代码中，**toString()**方法返回对象的一般字符串形式，**toLocaleString()**方法返回本地的字符串形式。

目前，主要有三个对象自定义了**toLocaleString**方法。

- Array.prototype.toLocaleString()
- Number.prototype.toLocaleString()
- Date.prototype.toLocaleString()

举个例子，日期的实例对象的**toString**和**toLocaleString**返回值就不一样，而且**toLocaleString**的返回值跟用户设定的所在地域相关。

```javascript
var date = new Date();console.log(date.toString())
// Fri Oct 29 2021 23:29:08 GMT+0800 (China Standard Time)console.log(date.toLocaleString())
// 10/29/2021, 11:29:08 PM
```

#### Object.prototype.hasOwnProperty()

> **Object.prototype.hasOwnProperty**方法接受一个字符串作为参数，返回一个布尔值，表示该实例对象自身是否具有该属性。

```javascript
var obj = {    p: 123};console.log(obj.hasOwnProperty('p'));	
// true
console.log(obj.hasOwnProperty('toString'));	
// false
```

### 属性描述对象

>JS提供了一个内部数据结构，用来描述对象的属性，控制它的行为，比如该函数是否可写、可遍历等等。这个内部数据结构称为"属性描述对象"每个属性都有自己对应的属性描述对象，保存该属性的一些元信息。

```javascript
{  value: 123,  writable: false,  enumerable: true,  configurable: false,  get: undefined,  set: undefined}
```

属性描述对象提供6个元属性。

- value

**value**是属性的属性值，默认为**underlined**。

- writable

**writable**是一个布尔值，表示属性值(value)是否可改变，默认为**true**。

- enumerable

**enumerable**是一个布尔值，表示该属性是否可遍历，默认为**true**。如果设为false会使得某些操作(比如**for..in**循环、**Object.keys()**)跳过该属性。

- configurable

**configurable**是一个布尔值，表示属性的可配置性，默认为**true**。如果设为**false**，将阻止某些操作改写属性描述对象，比如无法删除该属性，也不得改变各种元属性。也就是说，**configurable**属性控制了属性描述对象的可写性。

- get

**get**是一个函数，表示该属性的取值函数，默认为**underfined**。

- set

**set**是一个函数，表示该属性的存值函数，默认为**underfined**。

#### Object.getOwnPropertyDescriptor()

>**Object.getOwnPropertyDescriptor()**方法可以获取属性描述对象。它的第一个参数是目标对象，第二个参数是一个字符串，对应目标对象的某个属性名。

```javascript
var obj = { p: 'a' }
console.log(Object.getOwnPropertyDescriptor(obj, 'p'))
// { value: 'a', writable: true, enumerable: true, configurable: true }
```

上面代码中，**Object.getOwnPropertyDescriptor()**方法获取**obj.p**的属性描述对象。

注意，**Object.getOwnPropertyDescriptor()**方法只能用于对象自身的属性，不能用于继承的属性。

```javascript
var obj = { p: 'a' };
console.log(Object.getOwnPropertyDescriptor(obj, 'toString')) 
// underfined
```

上面代码中，**toString**是**obj**对象继承的属性。

**Object.getOwnPropertyDescriptor()**无法获取。

#### Object.getOwnPropertyNames()

> **Object.getOwnPropertyNames**方法返回一个数组，成员是参数对象自身的全部属性名，不管该属性是否可遍历。

```javascript
var obj = Object.defineProperties({}, {    
  p1: {
    value: 1,
    enumerable: true 
  },
  p2: {
    value: 2,
    enumerable: false }});
console.log(Object.getOwnPropertyNames(obj))
// [ 'p1', 'p2' ]
```

上面代码中，**obj.p1**是可遍历的，**obj.p2**是不可遍历的。**Object.getOwnPropertyNames**会将它们都返回。

这跟**Object.keys**的行为不同，**Object.keys**只返回对象自身的可遍历属性的全部属性名。

```javascript
console.log(Object.keys([]))
// []
console.log(Object.getOwnPropertyNames([]))
// [ 'length' ]
console.log(Object.keys(Object.keys(Object.prototype)))	
// []
console.log(Object.getOwnPropertyNames(Object.prototype))
// ['hasOwnProperty',
//  'valueOf',
//  'constructor',
//  'toLocaleString',
//  'isPrototypeOf',
//  'propertyIsEnumerable',
//  'toString']
```

上面代码中，数组自身的**length**属性是不可遍历的，**Object.keys**不会返回该属性。第二个例子中的**Object.prototype**也是一个对象，所有实例对象都会继承它，它自身的属性都是不可遍历的。

#### Object.defineProperty(),Object.defineProperties()

> Object.defineProperty()方法允许通过属性描述对象，定义或修改一个属性，然后返回修改后的对象。

```javascript
Object.defineProperty(object, propertyName, attributesObject)
```

**Object.defineProperty**方法接受三个参数，依次如下：

- **object**：属性所在的对象
- **propertyName**：字符串，表示属性名
- **attributesObject**：属性描述对象

举个例子：定义**obj.p**可以写成下面这样。

```javascript
var obj = Object.defineProperty({}, 'p', {
  value: 123,    
  writable: false,
  enumerable: true,
  configurable: false});
console.log(obj.p)
// 123obj.p = 246
console.log(obj.p)
// 123
```

上面代码中，**Object.defineProperty()**方法定义了**obj.p**属性。由于属性描述对象的**writable**属性为**false**，所以**obj.p**属性不可写。注意，这里的**Object.definePropert**方法的第一个参数是**{ }**（一个新建的空对象），**p**属性直接定义在这个空对象上面，然后返回这个对象，这是**Object.defineProperty()**的常见用法。

如果属性已经存在，**Object.defineProperty()**方法相当于更新该属性的属性描述对象。

如果一次性定义或修改多个属性，可以使用**Object.defineProperties()**方法。

```javascript
var obj = Object.defineProperties({}, {    
  p1: {
  value: 123, 
  enumerable: true 
},
  p2: {
    value: 'abc', 
    enumerable: true 
  },
  p3: {
    get: function () { return this.p1 + this.p2 },
    enumerable: true,
    configurable: true
  }})
console.log(obj.p1)
// 123console.log(obj.p2)
// abcconsole.log(obj.p3)
// 123abc
```

上面代码中，**Object.defineProperties()**同时定义了**obj**对象的三个属性。其中，**p3**属性定义了取值函数**get**，即每次读取该属性，都会调用这个取值函数。

⚠️：一旦定义了取值范围**get**（或存值函数**set**），就不能将**writable**属性设为**true**，或者同时定义**value**属性，否则会报错。

```javascript
var obj = {};Object.defineProperty(obj, 'p', {
  // 定义了取值函数get，不能同时定义value属性    
  value: 123,    
  get: function () { return 456; }});
  // TypeError: Invalid property.
  // A property cannot both have accessors and be writable or have a value
  // 属性不能既具有访问器又具有可写或具有值
Object.defineProperty(obj, 'p', {    
  // 定义了取值函数get，不能将writable属性设为true    
  writable: true,
  get: function () { return 456; }})
  // TypeError: Invalid property descriptor.
  // Cannot both specify accessors and a value or writable attribute// 不能同时指定访问器和值或可写属性
```

上面代码中，同时定义了**get**属性和**value**属性，以及**writable**属性设为**true**，就会报错。

**Object.defineProperty()**和**Object.defineProperties()**参数里面的属性描述对象，**writable**、**configurable**、**enumerable**这三个属性的默认值都是**false**。

```javascript
var obj = {};console.log(Object.defineProperty(obj, 'foo', {}))	
// {}
console.log(Object.getOwnPropertyDescriptor(obj, 'foo'))
// {
//     value: undefined,
//     writable: false,
//     enumerable: false,
//     configurable: false
// }
```

上面代码中，定义obj.foo时用了一个空的属性描述对象，就可以看到各个元属性的默认值。

#### Object.prototype.propertylsEnumerable()

> 实例对象的**propertyIsEnumerable()**方法返回一个布尔值，用来判断某个属性是否可遍历。注意，这个方法只能用于判断对象自身的属性，对于继承的属性一律返回false。

```javascript
var obj = {};obj.p = 123;console.log(obj.propertyIsEnumerable('p'))	
// trueconsole.log(obj.propertyIsEnumerable('toString'))	
// false
```

上面代码中，**obj.p**是可遍历的，而**obj.toString**是继承的属性。

### 元属性

> 属性描述对象的各个属性称为"元属性"，因为它们可以看作是控制属性的属性。

#### value

> value属性是目标属性的值。

```javascript
var obj = {};obj.p = 123;
console.log(Object.getOwnPropertyDescriptor(obj, 'p').value)
// 123Object.defineProperty(obj, 'p', { value: 246 })
console.log(obj.p)	
// 246
```

上面代码是通过**value**属性，读取或改写**obj.p**的例子。

#### writable

> writable属性是一个布尔值，决定了目标属性的值(value)是否可以被改变。

```javascript
var obj = {};Object.defineProperty(obj, 'a', { 
  value: 37,   
  writable: false})
console.log(obj.a)	
// 37obj.a = 25;
console.log(obj.a)	
// 37
```

上面代码中，**obj.a**的**writable**属性是**false**。然后，改变**obj.a**的值，不会有任何效果。

⚠️：正常模式下，对**writable**为**false**的属性赋值不会报错，只会默默失败。但是，严格模式下会报错，即使对**a**属性重新赋予一个同样的值。

```javascript
'use strict';var obj = {};Object.defineProperty(obj, 'a', {    value: 37,    writable: false})console.log(obj.a)	
// 37obj.a = 37;
console.log(obj.a)	
// Uncaught TypeError: Cannot assign to read only property 'a' of object
```

上面代码是严格模式，对**obj.a**任何赋值行为都会报错。

如果原型对象的某个属性的**writable**为**false**，那么子对象将无法自定义这个属性。

```javascript
var proto = Object.defineProperty({}, 'foo', {
  value: 'a',    
  writable: false});
var obj = Object.create(proto);
obj.foo = 'b';
console.log(obj.foo)	
// a
```

上面代码中，**proto**是原型对象，它的**foo**属性不可写。**obj**对象继承**proto**，也不可以再自定义这个属性了。如果是严格模式，这样做还会抛个错。

#### enumerable

> **enumerable**（可遍历性）返回一个布尔值，表示目标属性是否可遍历。

JS早期版本，**for...in**循环是基于**in**运算符的。我们知道，in运算符不管某个属性是对象自身的还是继承的，都会返回**true**。

```javascript
var obj = {}console.log('toString ' in obj)	
// true
```

上面代码中，**toString**不是**obj**的自身对象的属性，但是**in**运算符也返回**true**，这导致了**toString**属性也会被**for...in**循环遍历。

这是非常不合理的，就出现了可遍历性这个概念。只有可遍历的属性，才会被**for...in**循环遍历，同时还规定**toString**这一类实例对象继承的原生属性，都是不可遍历的，这样就保证了**for...in**循环的可用性。

具体来说，如果一个属性的**enumerable**为**false**，下面三个操作不会取到该属性。

- for...in 循环
- Object.keys 方法
- JSON.stringify 方法

因此，**enumerable**可以用来设置"秘密"属性。

```javascript
var obj = {};Object.defineProperty(obj, 'x', {
  value: 123,
  enumerable: false});
console.log(obj.x)
// 123
for (var key in obj) {
  console.log(key);
  // underfined}console.log(Object.keys(obj))	
  // []console.log(JSON.stringify(obj))	
  // {}
```

上面代码中，**obj.x**属性的**enumerable**为**false**，所以一般的遍历操作都无法获取该属性，使得它有点像"秘密"属性，但不是真正的私有属性，还是可以直接获取它的值。

⚠️：for...in循环包括继承的属性，Object.keys方法不包括继承的属性。如果需要获取对象自身的所有属性，不管是否可遍历，可以使用**Object.getOwnPropertyNames**方法。

#### configurable

> **configurable**（可配置性）返回一个布尔值，决定了是否可以修改属性描述对象。也就是说，**configurable**为**false**时，**writable**、**enumerable**和**configurable**都不能修改了。

```javascript
var ojb = Object.defineProperty({}, 'p', { 
  value: 1,   
  writable: false,
  enumerable: false, 
  configurable: false});
console.log(Object.defineProperty(ojb, 'p', { writable: true }))
// TypeError: Cannot redefine property: pconsole.log(Object.defineProperty(ojb, 'p', { enumerable: true }))
// TypeError: Cannot redefine property: pconsole.log(Object.defineProperty(ojb, 'p', { configurable: true }))
// TypeError: Cannot redefine property: pconsole.log(Object.defineProperty(ojb, 'p', { value: true }))
// TypeError: Cannot redefine property: p
```

上面代码中，**obj.p**的**configurable**属性为**false**。然后改动，**writable**、**enumable**、**configurable**。结果都报错。

⚠️：**writable**属性只有再**false**改为**true**时报错，**true**改为**false**是允许的。

```javascript
var obj = Object.defineProperty({}, 'p', {
  writable: true,
  configurable: false})
console.log(Object.defineProperty(obj, 'p', { writable: false }))	
// {}
```

**value**属性的情况比较特殊。只要有**writable**和**configurable**有一个为**true**，就允许改动value。

```javascript
var o1 = Object.defineProperty({}, 'p', {
  value: 1,
  writable: true,
  configurable: false})
console.log(Object.defineProperty(o1, 'p', { value: 2 }))
// 修改成功
var o2 = Object.defineProperty({}, 'p', {
  value: 1,    
  writable: false,
  configurable: true});
console.log(Object.defineProperty(o2, 'p', { value: 2 }))
// 修改成功
```

另外，**writable**为**false**时，直接对目标属性赋值，不报错，但也不会成功。

```javascript
var obj = Object.defineProperty({}, 'p', {
  value: 1,    
  writable: false,
  configurable: false});
obj.p = 2;
console.log(obj.p)
// 1
```

上面代码中，**obj.p**的**writable**为**false**，对**obj.p**直接赋值不会生效。

可配置性决定了目标属性是否可以被删除（delete）。

```javascript
var obj = Object.defineProperties({}, {
  p1: { value: 1, configurable: true },
  p2: { value: 2, configurable: false }})
console.log(delete obj.p1)
// trueconsole.log(delete obj.p2)
// falseconsole.log(obj.p1)
// underfinedconsole.log(obj.p2)
// 2
```

上面代码中，**obj.p1**的**configurable**是**true**，所以可以被删除，**obj.p2**为**false**，就无法被删除。

#### 存储器

>除了直接定义以外，属性还可以用存储器定义。其中，存值函数称为**setter**，使用属性描述对象的**set**属性；取值函数称为**getter**，使用属性描述对象的**get**属性。

```javascript
var obj = {
  get p() {
    return 'getter';
  },
  set p(value) {
    console.log('setter：' + value)
  }}
console.log(obj.p)
// getterobj.p = 123	
// setter：123
```

上面代码中，**obj.p**定义了**get**和**set**属性。**obj.p**取值时，就会调用**get**；赋值时，就会调用**set**。属性**p**的**configurable**和**enumerable**都为**true**，因此属性**p**是可遍历的。

⚠️：取值函数**get**不能接受参数，存值函数**set**只能接受一个参数。

```javascript
var obj = {    
  $n: 5,
  get next() {
    return this.$n++
  },    
  set next(n) {
    if (n >= this.$n) this.$n = n;
    else throw new Error('新的值必须大于当前值');
  }};
console.log(obj.next)
// 5obj.next = 10;
console.log(obj.next)
// 10obj.next = 5;
// Uncaught Error: 新的值必须大于当前值 
```

上面代码中，next属性的存值函数和取值函数，都依赖于内部属性**$n**

### Array对象

#### 构造对象

> Array是JS的原生对象，同时也是一个构造对象，可以用它生成的新组。

```javascript
var arr = new Array(2);
console.log(arr.length)	
// 2console.log(arr)	
// [ <2 empty items> ]
```

上面代码中，Array()构造函数的参数2,表示生成一个两个成员的数组，每个位置都是空值。

#### 静态方法

##### Array.isArray()

> Array.isArray方法返回一个布尔值，表示参数是否为数组。它可以弥补typeOf运算符的不足。

```javascript
var arr = [1, 2, 3];
console.log(typeof arr)
// objectconsole.log(Array.isArray(arr))	
// true
```

上面代码中，typerof运算符只能显示数组的类型是object，而Array.isArray方法可以识别数组。

#### 实例方法

##### valueOf(),toString()

> valueOf方法是一个所有对象都拥有的方法。表示对该对象求值。不同对象的valueOf方法不尽一致，数组的valueOf方法返回数组本身。

```javascript
var arr = [1, 2, 3]
console.log(arr.valueOf())
// [ 1, 2, 3 ]
```

**toString**方法也是对象的通用方法，数组的**toString**方法返回数组的字符串形式。

```javascript
var arr = [1, 2, 3];
console.log(arr.toString())
// "1,2,3"var arr = [1, 2, 3, [4, 5, 6]];
console.log(arr.toString())	
// "1,2,3,4,5,6"
```

##### push(),pop()

> push方法用于在数组的末端添加一个或多个元素，并返回添加新元素的数组长度，注意，该方法会改变原数组。

```javascript
var arr = [];
arr.push(1);
arr.push('a');
arr.push(true, {});
console.log(arr)	
// [ 1, 'a', true, {} ]
```

上面代码使用**push**方法，往数组中添加了四个成员。

> **pop**方法用于删除数组的最后一个元素，并返回该元素。注意，该方法会改变原数组。

```javascript
var arr = ['a', 'b', 'c'];
arr.pop();
console.log(arr)
// [ 'a', 'b' ]
```

对空数组使用**pop**方法，不会报错，而是返回**underfined**

```javascript
console.log([].pop())	
// underfined
```

**push**和**pop**结合使用，就构成了"后进先出"的栈结构。

```javascript
var arr = [];
arr.push(1, 2);
arr.push(3);
arr.pop();
console.log(arr)
// [ 1, 2 ]
```

上面代码中，**3**是最后进入数组的，但是最早离开数组。

##### shift(),unshift()

> **shift()**方法用于删除数组的第一个元素，并返回该元素。注意，该方法会改变原数组。

```javascript
var a = ['a', 'b', 'c'];
console.log(a.shift());
// aconsole.log(a)	
// [ 'b', 'c' ]
```

**push()**和**shift()**结合使用，就构成了"先进先出"的队列结构。

**unshift()**方法用于在数组的第一个位置添加元素，并返回添加新元素后的数组长度。注意，该方法会改变原数组。

```javascript
var a = ['a', 'b', 'c'];
console.log(a.unshift('x'));
// 4console.log(a)
// [ 'x', 'a', 'b', 'c' ]
```

##### join()

> **join()**方法以指定参数作为分隔符，将所有数组成员连接成一个字符串返回。如果不提供参数，默认用逗号分隔。

```javascript
var a = [1, 2, 3, 4];
console.log(a.join(' '))
// 1 2 3 4
console.log(a.join(' | '))
// 1 | 2 | 3 | 4
console.log(a.join())
// 1,2,3,4
```

如果数组成员是**underfined**或**null**或空位，会被转成空字符串。

```javascript
[undefined, null].join('#')
// '#'['a',, 'b'].join('-')
// 'a--b'
```

##### concat()

> **concat**方法用于多个数组的合并。它将新数组的成员，添加到原数组成员后面，然后返回一个新数组，原数组不变。

```javascript
console.log(['hello'].concat(['world']))
// [ 'hello', 'world' ]
console.log(['hellos'].concat(['world'], ['!']))
// [ 'hellos', 'world', '!' ]
console.log([].concat({ a: 1 }, { b: 2 }))
// [ { a: 1 }, { b: 2 } ]
console.log([2].concat({ a: 1 }))
// [ 2, { a: 1 } ]
```

##### reverse()

> **reverse**方法用于颠倒排列数组元素，返回改变后的数组。注意，该方法改变原数组。

```javascript
var a = ['a', 'b', 'c'];
console.log(a.reverse())
// [ 'c', 'b', 'a' ]
console.log(a)
// [ 'c', 'b', 'a' ]
```

##### slice()

> **slice()**方法用于提取目标数组的一部分，返回一个新数组，原数组不变。

```javascript
arr.slice(start, end);
```

它的第一个参数为起始位置(从0开始，会包括在返回的新数组之中)，第二个参数为终止位置(但该位置的元素本身不包括在内)。如果省略第二个参数，则一直返回到原数组的最后一个成员。

```javascript
var a = ['a', 'b', 'c'];
console.log(a.slice(0))	
// [ 'a', 'b', 'c' ]
console.log(a.slice(1))
// [ 'b', 'c' ]
console.log(a.slice(1, 2))
// [ 'b' ]
console.log(a.slice(2, 6))
// [ 'c' ]
console.log(a.slice())
// [ 'a', 'b', 'c' ]
```

上面代码中，最后一个例子**slice()**没有参数，实际上等于返回一个原数组的拷贝。

如果**slice()**方法的参数时负数，则表示倒数计算的位置。

```javascript
var a = ['a', 'b', 'c'];console.log(a.slice(-2))
// [ 'b', 'c' ]
console.log(a.slice(-2, -1))
// [ 'b' ]
```

上面代码中，**-2**表示倒数计算的第二个位置，-1表示倒数计算的第一个位置。如果第一个参数大于等于数组长度，或者第二个参数小于第一个参数，则返回空数组。

如果第一个参数大于等于数组的长度，或者第二个参数小于第一个参数，则返回空数组。

```javascript
var a = ['a', 'b', 'c'];
console.log(a.slice(4));
// []console.log(a.slice(2, 1))	// []
```

**slice()**方法一个重要应用，就是将类似数组的对象转为真正的数组。

```javascript
var a = Array.prototype.slice.call({ 0: 'a', 1: 'b', length: 2 })
console.log(a)
// [ 'a', 'b' ]
```

##### splice()

> **splice()** 方法用于删除原数组的一部分成员，并可以在删除的位置添加新的数组成员，返回值是被删除的元素。注意，该方法会改变原数组。

 ```javascript
arr.splice(start, count, addElement1, addElement2, ...);
 ```

**spilice**的第一个参数是删除的起始位置(从0开始)，第二个参数是被删除的元素个数。

```javascript
var a = ['a', 'b', 'c', 'd', 'e', 'f'];
console.log(a.splice(4, 2))	
// [ 'e', 'f' ]console.log(a)
// [ 'a', 'b', 'c', 'd' ]
```

上面代码中，从原数组4号位置，删除了两个数组成员。

```javascript
var a = ['a', 'b', 'c', 'd', 'e', 'f'];
console.log(a.splice(4, 2, 1, 2))
// [ 'e', 'f' ]console.log(a)
// [ 'a', 'b', 'c', 'd', 1, 2 ]
```

上面代码中，删除了成员，还插入了两个新成员。

起始位置如果是负数，就表示从倒数位置开始删除。

```javascript
var a = ['a', 'b', 'c', 'd', 'e', 'f'];
console.log(a.splice(-4, 2))
// [ 'c', 'd' ]
```

上面代码表示，从倒数第四个位置**c**开始删除两个成员。

如果只是想单纯地插入元素，splice方法的第二个参数可以设为0。

```javascript
var a = [1, 2, 3];
console.log(a.splice(1, 0, "a", "b"))
// []console.log(a)	// [ 1, 'a', 'b', 2, 3 ]
```

##### sort()

> **sort**方法对数组成员进行排序，默认是按照字典顺序排序。排序后，原数组将被改变。

```javascript
var a = ['d', 'c', 'b', 'a'].sort()
console.log(a)	
// [ 'a', 'b', 'c', 'd' ]
var b = [4, 3, 2, 1].sort()
console.log(b)	
// [ 1, 2, 3, 4 ]
```

##### map()

> map()方法将数组的所有成员依次传入参数函数，然后把每一次的执行结果组成一个新数组返回。

```javascript
var numbers = [1, 2, 3];
numbers.map(function (n) {
  return n + 1;});
// [ 2, 3, 4 ]console.log(numbers)
// [ 1, 2, 3 ]
```

上面代码中，**numbers**数组的所有成员依次执行参数函数，运行结果组成一个新数组返回，原数组没有变化。

**map()**方法接收一个函数作为参数，该函数调用时，**map()**方法向它传入三个参数：当前成员、当前位置和数组本身。

```javascript
var a = [1, 2, 3].map(function (elem, index, arr) {
  return elem * index;})
console.log(a)
// [ 0, 2, 6 ]
```

上面代码中，**map()**方法的回调函数有三个参数，**elem**为当前成员的值，**index**为当前成员的值，**arr**为原数据（**[1, 2, 3]**）。

##### forEach()

> **forEach()**方法与**map()**方法很相似，也是对数组的所有成员依次执行参数函数。但是，**forEach()**方法不返回值，只用来操作数据。如果数组遍历的目的是为了得到返回值，那么使用**map()**方法，否则使用**forEach()**方法。

**forEach()**的用法与**map()**方法一致，参数是一个函数，该函数同样接收三个参数：当前值、当前位置、整个数组。

```javascript
function log(element, index, array) {
  console.log('[' + index + '] = ' + element);
}[2, 5, 9].forEach(log)
// [0] = 2
// [1] = 5
// [2] = 9
```

上面代码中，**forEach()**遍历数组不是为了得到返回值，而是为了在屏幕输出内容，所以不必使用**map()**方法。

**forEach()**方法也可以接受第二个参数，绑定参数函数的**this**变量。

```javascript
var out = [];[1, 2, 3].forEach(function (elem) {
  this.push(elem * elem);
}, out);
console.log(out)
// [ 1, 4, 9 ]
```

上面代码中，空数组**out**是**forEach()**方法的第二个参数，结果，回调函数内部的**this**关键字就指向**out**。

⚠️：**forEach()**方法无法中断执行，总是会将所有的成员遍历完。如果希望符合某种条件时，就中断遍历，要使用**for**循环

```javascript
var arr = [1, 2, 3]for (var i = 0; i < arr.length; i++) {
  if (arr[i] === 2) break;
  console.log(arr[i]);
}
// 1
```

上面代码中，执行到数组的第二个成员时，就会中断执行。**forEach()**方法做不到这一点。

##### filter()

> **filter()**方法用于过滤数组成员，满足条件的成员组成一个新数组返回。

它的参数是一个函数，所有数组成员依次执行该函数，返回结果为true的成员组成一个新数组返回。该方法不会改变原数组。

```javascript
var a = [1, 2, 3, 4, 5].filter(function (elem) {
  return (elem > 3);
})console.log(a)
// [ 4, 5 ]
```

上面代码中，将大于**3**的数组成员，作为一个新数组返回。

**fliter()**方法的参数函数可以接受三个参数：当前成员，当前位置和整个数组。

```javascript
var a = [1, 2, 3, 4, 5].filter(function (elem, index, arr) {
  return index % 2 === 0;
})
console.log(a)
// [ 1, 3, 5 ]
```

上面代码返回**偶数**位置的成员组成的新数组。

**fliter()**方法的参数函数可以接受第二个参数，用来绑定参数内部的**this**变量。

```javascript
var obj = { MAX: 3 };
var myFilter = function (item) {
  if (item > this.MAX) return true;
}
var arr = [2, 8, 3, 4, 1, 3, 2, 9];
console.log(arr.filter(myFilter, obj))
// [ 8, 4, 9 ]
```

上面代码中，过滤器**myFilter()**内部有this变量，它可以被**filter()**方法的第二个参数**obj**绑定，返回大于**3**的成员。

##### some(),every()

> 这两个方法类似"断言"（assert），返回一个布尔值，表示判断数组成员是否符合某种条件。

它们接受一个函数作为参数，所有的数组成员依次执行该函数。该函数接受三个参：当前成员、当前位置和整个数组，然后返回一个布尔值。

**some**方法是只要一个成员的返回值是**true**，则整个**some**方法的返回值就是**true**，否则返回**false**。

```javascript
var arr = [1, 2, 3, 4, 5];
var a = arr.some(function (elem, index, arr) {
  return elem >= 3;
})
console.log(a)
// true
```

上面代码中，如果数组**arr**有一个成员数量大于等于3，**some**方法就返回**true**。

**every**方法是所有成员的返回值都是**true**，整个**every**方法才返回**true**，否则返回**false**。

```javascript
var arr = [1, 2, 3, 4, 5];
var a = arr.every(function (elem, index, arr) {
  return elem >= 3;
})
console.log(a)	
// false
```

上面代码中，数组**arr**并非所有成员的值大于等于3，所以返回false。

##### 链式使用

> 链式调用可以进一步筛选自己需要的值

```javascript
var users = [
  { name: 'tom', email: 'tom@example.com' }, 
  { name: 'peter', email: 'peter@example.com' }
];
users.map(function (user) {
  return user.email;
}).filter(function (email) { 
  return /^t/.test(email);
}).forEach(function (email) {
  console.log(email)
})
// tom@example.com
```

上面代码中，先产生一个所有Email地址组成的数组，然后再过滤出以**t**开头的Email地址，最后打印出来。

### 包装对象

> 对象是JS语言最主要的数据类型，三种原始类型的值——数值、字符串、布尔值——在一定条件下，也会自动转为对象，也就是原始类型的"包装对象"。

所谓"包装对象"，指的是与数值、字符串、布尔值分别相对应的Number、String、Boolean三个原生对象。这三个原生对象可以把原始类型的值变成对象。

```javascript
var v1 = new Number(123);
var v2 = new String('abc');
var v3 = new Boolean(true);
console.log(typeof v1)	
// objectconsole.log(typeof v2)	
// objectconsole.log(typeof v3)	
// objectconsole.log(v1 === 123)	
// falseconsole.log(v2 === 'abc')	
// falseconsole.log(v3 === true)	
// false
```

上面代码中，基于原始类型的值，生成了三个对应的包装对象。可以看到，**v1**、**v2**、**v3**都是对象，且与对应的简单类型值不相等。

> 包装对象的设计目的，首先是使得"对象"这种类型可以覆盖JS所有的值

#### 实例方法

> 三种包装对象各自提供了许多实例方法。

##### valueOf()

> **valueOf()**方法返回包装对象实例对应的原始类型的值。

```javascript
var a = new Number(123).valueOf()console.log(a)
// 123var b = new String('abc').valueOf()console.log(b)
// abc
```

##### toString()

> toString()方法返回对应的字符串形式。

```javascript
var a = new Number(123).toString()console.log(a)
// "123"new String('abc').toString() 
// "abc"new Boolean(true).toString() 
// "true"
```

#### 原始类型与实例对象的自动转换

字符串可以调用length属性，返回字符串的长度。

```javascript
console.log('abc'.length)
// 3
```

上面代码中，abc是一个字符串，本身不是对象，不能调用length属性。JS引擎自动将其转为包装对象，在这个对象上调用length属性。调用结束后，这个临时对象就会被销毁。

```javascript
var str = 'abc';
console.log(str.length)
// 3
// 等同于var strObj = new String(str);
console.log(strObj.length)
// 3
```

上面代码中，字符串abc的包装对象提供了多个属性，length只是其中之一。

自动转换生成的包装对象是只读的，无法修改。所以字符串无法添加新属性。

```javascript
var s = 'Hello world';
s.x = 123console.log(s.x);	
// underfined
```

上面代码为字符串**s**添加了一个**x**属性，结果无效，总是返回**underfined**。

### Boolean对象

> Boolean对象是JS的三个包装对象之一。作为构造函数，它主要用于生成布尔值的包装对象实例。

```javascript
var b = new Boolean(true);
console.log(typeof b)
// objectconsole.log(b.valueOf())	
// true
```

上面代码的变量**b**是一个**boolean**对象的实例，它的类型是对象，值为布尔值**true**。注意，**false**对应的包装对象实例，布尔运算结果也为**true**。

```javascript
if (new Boolean(false)) {
  console.log('true');	
  // true
}
  if (new Boolean(false).valueOf()) {
    console.log('true')	
    // 无输出
  }
```

上面代码的第一个例子之所以得到**true**，是因为**false**对应的包装对象实例是一个对象，进行逻辑运算时，被自动转化成布尔值**true**。而实例**valueOf**方法，则返回实例对应的原始值，本例为**false**。

### Number对象

> Number对象是数值对应的包装对象，可以作为构造函数使用，也可以作为工具函数使用。

```javascript
var n = new Number(1);
console.log(typeof n)	
// object
```

上面代码中，**Number**对象作为构造函数使用，返回一个值为**1**的对象。

### String对象

> **String**对象是JS原生提供的三个包装的对象之一，用来生成字符串对象。

```javascript
var s1 = 'abc';
var s2 = new String('abc');
console.log(typeof s1)	
// stringconsole.log(typeof s2)	
// objectconsole.log(s2.valueOf())	
// "abc"
```

上面代码中，变量**s1**是字符串，**s2**是对象。由于**s2**是字符串对象，**s2.valueOf**方法返回的就是它所对应的原始字符串。

字符串对象是一个类似数组的对象。

### Math对象

> **Math**是JS的原生对象，提供各种数学功能。该对象爱过你不是构造函数，不能生成实例，所有的的属性和方法都必须在**Math**对象上调用。

#### 静态方法

> **Math**对象提供了以下一些静态方法。

- Math.abs()：绝对值
- Math.ceil()：向上取整
- Math.floor()：向下取整
- Math.max()：最大值
- Math.min()：最小值
- Math.pow()：幂运算
- Math.sqrt()：平方根
- Math.log()：自然对数
- Math.exp()：e的指数
- Math.round()：四舍五入
- Math.random()：随机数

##### Math.abs()

> Math.abs方法返回参数值的绝对值。

```javascript
console.log(Math.abs(1))	
// 1console.log(Math.abs(-1))	
// 1
```

##### Math.max(),Math.min()

> Math.max方法返回参数之中最大的那个值，**Math.min**返回最小的那个值。

```javascript
console.log(Math.max(2, -1, 5))	
// 5console.log(Math.min(2, -1, 5))	
// -1console.log(Math.max())	
// -Infinityconsole.log(Math.max())	
// -Infinity
```

##### Math.floor(),Math.ceil()

> Math.floor方法返回小于或等于参数值的最大整数。

```javascript
console.log(Math.ceil(3.2))	
// 4console.log(Math.ceil(-3.2))	
// -3
```

这两个方法可以结合起来，实现一个总是返回数值的整数部分的函数。

```javascript
function ToInteger(x) {
  x = Number(x);
  return x < 0 ? Math.ceil(x) : Math.floor(x)
}
console.log(ToInteger(3.2))	
// 3console.log(ToInteger(3.3))	
// 3console.log(ToInteger(-3.4))	
// -3console.log(ToInteger(-3.5))	
// -3
```

上面代码中，不管正数或负数，**ToInteger**函数总是返回一个数值的整数部分。

##### Math.round()

> Math.round方法用于四舍五入。

```javascript
console.log(Math.round(0.1))
// 0console.log(Math.round(0.5))
// 1console.log(Math.round(0.6))
// 1
```

##### Math.pow()

> Math.pow方法返回以第一个参数作为底数、第二个参数为指数的幂运算值。

```javascript
console.log(Math.pow(2, 2))	
// 4console.log(Math.pow(2, 3))
// 8
```

##### Math.sqrt()

> **Math.sqrt**方法返回参数的平方根。如果参数是一个负值，则返回**NaN**。

```javascript
console.log(Math.sqrt(4))	
// 2console.log(Math.sqrt(-4))	
// NaN
```

##### Math.log()

> **Math.log**方法返回以e为底的自然数值。

```javascript
console.log(Math.log(Math.E))	
// 1
```

##### Math.exp()

> Math.exp方法返回常数e的参数次方。

```javascript
console.log(Math.exp(1))	
// 2.718281828459045
```

##### Math.random()

> Math.random()返回0到1之间的一个伪随机数，可能等于0，但一定小于1。

```javascript
console.log(Math.random())	
// 0.9194172155426013
```

任意范围的随机数生成函数如下：

```javascript
function getRandomArbitrary(min, max) {
  return Math.random() * (max - min) + min;
}
console.log(getRandomArbitrary(1.5, 6.5))
// 6.430177012163458
```

任意范围的随机整数生成函数如下：

```javascript
function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
console.log(getRandomInt(1, 6))	
// 3
```

返回随机字符的例子：

```javascript
function random_str(length) {
  var ALPHABET = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  ALPHABET += 'abcdefghijklmnopqrstuvwxyz';
  ALPHABET += '0123456789-_';
  var str = '';
  for (var i = 0; i < length; i++) {
    var rand = Math.floor(Math.random() * ALPHABET.length);
    str += ALPHABET.substring(rand, rand + 1);
  }
  return str;
}
console.log(random_str(6))	
// EejNfj
```

上面代码中，**random_str**函数接受一个整数作为参数，返回变量**ALPHABET**内的随机字符所组成的指定长度的字符串。

### Date对象

> **Date**对象是JS原生的时间库。

##### 普通函数的用法

> Date对象可以作为普通函数直接调用，返回一个代表当前时间的字符串。

```javascript
console.log(Date())
// Sat Nov 06 2021 08:50:09 GMT+0800 (China Standard Time)
```

⚠️：即使带有参数，Date作为普通函数使用，返回的还是当前的时间。

```javascript
console.log(Date(2000, 1, 1))
// Sat Nov 06 2021 08:51:09 GMT+0800 (China Standard Time)
```

##### 构造函数的用法

> Date实例有一个独特的地方。其他对象求值的时候，都是默认调用**.valueOf()**方法，但是Date实例求值的时候，默认调用的是toString()方法。这导致对Date实例求值，返回的是一个字符串，代表该实例对应的时间。

```javascript
var today = new Date()
console.log(today)
// 2021-11-06T00:53:50.894Z
// 等同于console.log(today.toString())
// Sat Nov 06 2021 08:54:41 GMT+0800 (China Standard Time)
```

上面代码中，**today**是Date的实例，直接求值等同于调用**toString**方法。

作为构造函数时，Date对象可以接受多种格式的参数，返回一个该参数对应的时间实例。

```javascript
// 参数作为时间零点开始计算的好秒数
var a = new Date(1378218728000)
console.log(a)	
// 2013-09-03T14:32:08.000Z
// 参数为日期字符串
var a = new Date('January 6, 2013')
console.log(a)	
// 2013-01-05T16:00:00.000Z
// 参数为多个整数
// 代表年、月、日、小时、分钟、秒、毫秒
var a = new Date(2013, 0, 1, 0, 0, 0, 0)
console.log(a)
// 2012-12-31T16:00:00.000Z
```

#### 静态方法

##### Date.now()

> **Date.now**方法返回当前时间距离时间零点（1970年1月1日 00:00:00 UTC）的毫秒数

```javascript
console.log(Date.now())
// 1636178869183
```

##### Date.parse()

> Date.parse方法用来解析日期字符串，返回该时间距离时间零点的毫秒数。

```javascript
console.log(Date.parse('Aug 9, 1995'))
// 807897600000console.log(Date.parse('2011-10-10'))
// 1318204800000
```

#### get类方法

> Date对象提供了一系列get*方法，用来获取实例对象某个方面的值。

- getTime()：返回实例距离1970年1月1日00:00:00的毫秒数
- getDate()：返回实例对象对应每个月的几号（从1开始）
- getDay()：返回星期几，星期日为0，星期一为1
- getFullYear()：返回四位的年份
- getMonth()：返回月份（0表示1月，11表示12月）
- getHours()：返回小时（0-23）
- getMilliseconds()：返回毫秒（0-999）
- getMinutes()：返回分钟（0-59）
- getSeconds()：返回秒（0-59）
- getTimezoneOffset()：返回当前时间与UTC的时区差异，以分钟表示

```javascript
var d = new Date('January 6, 2013');
console.log(d.getDate())	
// 6console.log(d.getMonth())	
// 0console.log(d.getFullYear())	
// 2013console.log(d.getTimezoneOffset())	
// -480
```

上面代码中，最后一行返回-480，即UTC时间减去当前时间，单位是分钟。-480表示UTC比当前时间少了480分钟，即当前时区比UTC早8个小时。

下面是一个例子，计算本年度还剩多少天。

```javascript
function leftDays() {
  var today = new Date();
  var endYear = new Date(today.getFullYear(), 11, 31, 23, 59, 59, 999);
  var msPerDay = 24 * 60 * 60 * 1000;
  return Math.round((endYear.getTime() - today.getTime()) / msPerDay)
}
console.log(leftDays())	
// 55
```

上面这些get*方法返回的都是当前时区的时间，Date对象还提供这些方法对应的UTC版本，用来返回UTC时间。

- getUTCDate()
- getUTCFullYear()
- getUTCMonth()
- getUTCDay()
- getUTCHours()
- getUTCMinutes()
- getUTCSeconds()
- getUTCMilliseconds()

```javascript
var d = new Date('January 6, 2013')
console.log(d.getDate())	
// 6console.log(d.getUTCDate())	
// 5
```

上面代码中，实例对象**d**表示当前时区(东八时区)的1月6日0点0分0秒，这个时间相当于当前时区来说是1月6日，所以**getDate**方法返回6，对于UTC时区来说是1月5日，所以**getUTCDate**方法返回5

#### set类方法

> Date对象提供了一系列set*方法，用来射这实例对象的各个方面。

- setDate(date)：设置实例对象对应的每个月的几号（1-31），返回改变后毫秒时间戳。
- setFullYear(year [, month, date])：设置四位年份。
- setHours(hour [, min, sec, ms])：设置小时（0-23）。
- setMilliseconds()：设置毫秒（0-999）。
- setMinutes(min [, sec, ms])：设置分钟（0-59）。
- setMonth(month [, date])：设置月份（0-11）。
- setSeconds(sec [, ms])：设置秒（0-59）。
- setTime(milliseconds)：设置毫秒时间戳。

这些方法基本跟**get***方法一一对应的，但是没有**setDay**方法，因为星期几是计算出来的，而不是设置的。另外，需要注意的是，凡是涉及到设置月份，都是从0开始算的，即**0**是1月，**11**是12月。

```javascript
var d = new Date('January 6, 2013')
console.log(d)	
// 2013-01-05T16:00:00.000Zconsole.log(d.setDate(9))	
// 1357660800000console.log(d)	
// 2013-01-08T16:00:00.000Z
```

### RegExp对象

> RegExp对象提供正则表达式的功能

语法

```javascript
/正则表达式主体/修饰符(可选)
```

实例

```javascript
var patt = /runoob/i
```

上面代码中，**/runoob/i** 是一个正则表达式，**runoob**是一个正则表达式主体(用于检索)。**i**是一个修饰符

#### search()

> **search()**方法使用正则表达式

```javascript
var str = "Visit Runoob!";
var n = str.search(/Runoob/i)
console.log(n)	
// 6
```

上面代码中，使用正则表达式搜索"Runoob"字符串，且不区分大小写,**search()**方法用于检索字符串中指定的子字符串，返回子串的起始位置。

> search()方法使用字符串

```javascript
var str = "Visit Runoob!";
var n = str.search("Runoob")
console.log(n)	
// 6
```

上面代码中，**search()**方法可以使用字符串作为参数

#### replace()

> **replace()**方法使用正则表达式

```javascript
var str = "Visit Microsoft!";
var txt = str.replace(/microsoft/i,"Runoob");
console.log(txt)
// Visit Runoob!
```

上面代码中，使用正则表达式且不区分大小写将Microsoft替换为Runoob。

> replace()方法将接受字符串作为参数

```javascript
var str = "Visit Microsoft!";
var txt = str.replace("Microsoft","Runoob");
console.log(txt)	
// Visit Runoob!
```

#### 正则表达式修饰符

| 修饰符 | 描述                     |
| ------ | ------------------------ |
| i      | 执行对大小写不敏感的匹配 |
| g      | 执行全局匹配             |
| m      | 执行多行匹配             |

#### 正则表达式模式

| 表达式 | 描述                     |
| ------ | ------------------------ |
| [abc]  | 查找方括号之间的任何字符 |
| [0-9]  | 查找任何从0至9的数字     |
| (x\|y) | 查找任何以'\|'分隔的选项 |

#### 元字符的特殊含义

| 元字符 | 描述                                 |
| ------ | ------------------------------------ |
| \d     | 查找数字                             |
| \s     | 查找空白字符                         |
| \b     | 匹配单词边界                         |
| \uxxxx | 查找以十六进制的xxx规定的Unicode字符 |

#### 量词

| 量词 | 描述                            |
| ---- | ------------------------------- |
| n+   | 匹配任何包含至少一个n的字符     |
| n*   | 匹配任何包含零个或多个n的字符串 |
| n?   | 匹配任何包含零个或一个n的字符串 |

#### 使用exec()

>**exec()**方法是一个正则表达式方法。
>
>**exec()**方法用于检索字符串中的正则表达式的匹配
>
>该函数返回一个数组，其中存放匹配的结果。如果未找到匹配，则返回null

```javascript
var a = /e/.exec("The best things in life are free!");
console.log(a)
// [
//     'e',
//     index: 2,
//     input: 'The best things in life are free!',
//     groups: undefined
// ]
```

#### 使用test()

> test()方法是一个正则表达式方法。
>
> test()方法用于检测一个字符串是否匹配某个模式，如果字符串中含有匹配的文本，则返回true，否则返回false

```javascript
var patt1 = new RegExp("e");
var a = patt1.test("The best things in life are free")
console.log(a)	
// true
// 等价于var b = /e/.test("The best things in life are free!")console.log(b)	
// true
```

百度网盘链接匹配例子：

```javascript
function baiduDownLinkArr( string ){
  var reg = /([http|https]*?:\/\/pan\.baidu\.com\/[(?:s\/){0,1}|(share)]*(?:[0-9a-zA-Z?=&])+)(?:.+:(?:\s)*)?([a-zA-Z]{4})?/;
  console.log(reg.exec(string));
}
baiduDownLinkArr("链接: https://pan.baidu.com/s/15gzY8h3SEzVCfGV1xfkJsQ 提取码: vsuw 复制这段内容后打开百度网盘手机App，操作更方便哦")
// [//     'https://pan.baidu.com/s/15gzY8h3SEzVCfGV1xfkJsQ 提取码: vsuw',
//     'https://pan.baidu.com/s/15gzY8h3SEzVCfGV1xfkJsQ',
//     'vsuw',
//     index: 4,
//     input: '链接: https://pan.baidu.com/s/15gzY8h3SEzVCfGV1xfkJsQ 提取码: vsuw 复制这段内容后打开百度网盘手机App，操作更方便哦',
//     groups: undefined
// ]
```

### JSON对象

> JSON格式是一种用于数据交换的文本格式。
>
> 书写简单，一目了然

JSON对值的类型和格式有严格的规定

- 符合类型的值只能是数组和对象，不能是函数、正则表达式对象、日期对象。
- 原始类型的值只有四种：字符串、数值、布尔值和null。
- 字符串必须使用双引号表示，不能使用单引号。
- 对象的键名必须放在双引号里面。
- 数组或对象最后一个成员的后面，不能加逗号。

以下是合法的JSON。

```json
["one", "two", "three"]
{ "one": 1, "two": 2, "three": 3 }
{"names": ["张三", "李四"] }
[ 
  { 
  "name": "张三"
},
  {
    "name": "李四"
  } 
]
```

以下是不合法的JSON。

```json
{ name: "张三", 'age': 32 }  
// 属性名必须使用双引号[32, 64, 128, 0xFFF] 
// 不能使用十六进制值{ "name": "张三", "age": undefined } 
// 不能使用 undefined{ "name": "张三",  "birthday": new Date('Fri, 26 Aug 2011 07:13:10 GMT'),  "getName": function () {      return this.name;  }} 
// 属性值不能使用函数和日期对象
```

注意：null、空数组和空对象都是合法的JSON值

#### JSON对象

>JSON对象是JS的原生对象，用来处理JSON格式数据。它有两个静态方法：**JSON.stringify()**和**JSON.parse()**

#### JSON.stringify()

> **JSON.stringify()**方法用于将一个值转为JSON字符串。该字符串符合JSON格式，并且可以被**JSON.parse()**方法还原。

```javascript
var a = JSON.stringify('abc')
var b = JSON.stringify(1)
var c = JSON.stringify(false)
var d = JSON.stringify([])
var e = JSON.stringify({})
var f = JSON.stringify([1, "false", false])
var g = JSON.stringify({ name: "张三" })console.log(a)	
// "abc"console.log(b)	
// 1console.log(c)	
// falseconsole.log(d)	
// []console.log(e)	
// {}console.log(f)	
// [1,"false",false]console.log(g)	
// {"name":"张三"}
```

上面代码将各类的值，转成JSON字符串。

⚠️：对于原始类型的字符串，转换结果会带双引号。

```json
var a = JSON.stringify('foo') === "foo"var b = JSON.stringify('foo') === "\"foo\""console.log(a)	// falseconsole.log(b)	// true
```

上面代码中，字符串**foo**，被转成`"\"foo\""`。这是因为将来还原的时候，内层双引号可以让JS引擎知道，这是一个字符串。而不是其他类型的值。

#### JSON.parse()

> JSON.parse()方法用于将JSON字符串转换成对应的值。

```json
var a = JSON.parse('{}')
var b = JSON.parse('true')
var c = JSON.parse('"foo"')
var d = JSON.parse('[1,5,"false"]')
var e = JSON.parse('null')console.log(a)	
// {}console.log(b)	
// trueconsole.log(c)	
// fooconsole.log(d)	
// [ 1, 5, 'false' ]console.log(e)	
// nullvar f = JSON.parse('{"name":"张三"}')console.log(f.name)	
// 张三
```

如果传入的字符串不是有效的JSON格式，JSON.parse()方法将报错

```json
var g = JSON.parse("'String'")console.log(g)	// 报错
```

上面代码中，双引号字符串中是一个单引号字符串，因为单引号字符串不符合JSON格式，所以报错。

为了处理解析错误，可以将JSON.parse()方法放在try...catch代码块中。

```javascript
try{
  JSON.parse("'String'");
} catch(e){
  console.log('parsing error')}
// parsing error
```

**JSON.parse()**方法可以接受一个处理函数，作为第二个参数用法与**JSON.stringify()**方法类似。

```JSON
function f(key, value) {
    if (key === 'a') {
        return value + 10;
    }
    return value;
}

var a = JSON.parse('{"a":1,"b":2}', f)
console.log(a)
// { a: 11, b: 2 }
```

上面代码中，**JSON.parse()**的第二个参数是一个函数，如果键名是**a**，该函数会将键值加上10。

## 面向对象编程

#### 实例对象与new命令

##### new命令

> new命令的作用，就是执行构造函数，返回一个实例对象

```javascript
var Vehicle = function () {
    this.price = 1000;
};
var v = new Vehicle();
console.log(v.price)	// 1000
```

上面代码通过**new**命令，让构造函数**Vehicle**生成一个实例对象，保存在变量v中。这个新生成的实例对象，从构造函数**Vehicle**得到了**price**属性。**new**命令执行时，构造函数内部的**this**，就代表了新生成的实例对象，**this.price**表示实例对象有一个**price**属性，值是1000。

使用new命令时，根据需要，构造函数也可以接受参数。

```javascript
var Vehicle = function (p) {
    this.price = p;
}
var v = new Vehicle(500);
console.log(v.price)	// 500
```

new命令本身就可以执行构造函数，所以后面的构造函数可以带括号，也可以不带括号。推荐带括号写法

```javascript
var Vehicle = function () {
    this.price = 1000;
};
var v = Vehicle();
console.log(v)	// underfined
console.log(price)	// 1000
```

上面代码中，调用**Vehicle**构造函数时，忘记加上**new**命令。结果v变成了**underfined**，而**price**属性变成了全局变量。因此，要非常小心，避免不使用**new**命令、直接调用构造函数。

为了保证构造函数必须与**new**命令一起使用，构造函数内部使用严格模式，即第一行加上**use strict**。这样的话，一旦忘了使用new命令，直接调用构造函数就会报错。

```javascript
function Fubar(foo,bar) {
    'use strict';
    this._foo = foo;
    this._bar = bar;
}
Fubar()
// TypeError: Cannot set property '_foo' of undefined
```

上面代码的Fubar为构造函数，use strict命令保证了该函数在严格模式下运行。由于严格模式中，函数内部的this不能指向全局对象，默认等于underfined，导致不加new调用会报错。

#### this关键字

> this可以用在构造函数之中，表示实例对象。除此之外，this还可以用在别的场合，它总是返回一个对象。

简单说，this就是属性或方法"当前"所在的对象。

```
this.property
```

上面代码中，this就代表property属性当前所在的对象。

```javascript
var person = {
    name: '张三',
    describe: function () {
        return '姓名: ' + this.name;
    }
};
console.log(person.describe())	// 姓名:张三
```

上面代码中，**this.name**表示**name**属性所在的那个对象。由于**this.name**是在**describe**方法中调用的，而**describe**方法所在的当前对象是**person**，因此**this**指向**person**，**this.name**就是**person.name**。

由于对象的属性可以赋给另一个对象，所以属性所在的当前对象是可变的，即**this**的指向是可变的。

```javascript
var A = {
    name: '张三',
    describe: function () {
        return '姓名：' + this.name;
    }
};

var B = {
    name: '李四'
};
B.describe = A.describe;
console.log(B.describe())	// 姓名：李四
```

上面代码中，**A.describe**属性被赋给**B**，于是**B.describe**就表示**describe**方法所在的当前对象是**B**，所以**this.name**就指向**B.name**。

```javascript
function f() {
    return '姓名：' + this.name;
}

var A = {
    name: '张三',
    describe: f
};
var B = {
    name: '李四',
    describe: f
}

console.log(A.describe())	// 姓名：张三
console.log(B.describe())	// 姓名：李四
```

上面代码中，函数f内部使用了**this**关键字，随着**f**所在的对象不同，**this**的指向也不同。

只要函数被赋值给另一个对象，this的指向就会变。

```javascript
var A = {
    name: '张三',
    describe: function() {
        return '姓名:' + this.name;
    }
};
var name = '李四';
var f = A.describe;
f()	// "姓名:李四"
```

上面代码中，**A.describe**被赋值给变量**f**，内部的**this**就会指向**f**运行时所在的对象。

#### 使用场合

**this**主要有以下几个使用场合。

##### 情况一：纯粹的函数调用

> 这是函数的最通常用法，属于全局性调用，因此this就代表全局对象

```javascript
var x = 1;
function test() {
    console.log(this.x)
}
test()	// 1
```

##### 情况二：作为对象方法调用

> 函数还可以作为某个对象的方法调用，这时this就指这个上级对象。

```javascript
function test() {
    console.log(this.x)
}
var obj = {};
obj.x = 1;
obj.m = test;
obj.m()	// 1
```

##### 情况三：作为构造函数调用

> 所谓构造函数，就是通过这个函数，可以生成一个新对象。这时，this就指这个新对象。

```javascript
function test() {
    this.x  = 1;
}

var obj = new test();
console.log(obj.x)	// 1
```

运行结果为1。为了表明这时**this**不是全局对象，我们对代码进行一些改变。

```javascript
var x = 2;
function test() {
    this.x = 1;
}
var obj = new test();
console.log(x)	// 2
```

##### 情况四：apply调用

> **apply()**是函数的一个方法，作用是改变函数的调用对象。它的第一个参数就表示改变后的调用这个函数的对象。因此，这时**this**指的就是这**第一个**参数。

```javascript
var x = 0;
function test() {
　console.log(this.x);
}

var obj = {};
obj.x = 1;
obj.m = test;
obj.m.apply() // 0
```

**apply()**的参数为空时，默认调用全局对象。因此，这时的运行结果为**0**，证明**this**指的是全局对象。

```javascript
var x = 0;
function test() {
　console.log(this.x);
}

var obj = {};
obj.x = 1;
obj.m = test;
obj.m.apply(obj) // 1
```

运行结果就变成**1**，证明了这时**this**代表的是对象**obj**。

#### 构造函数的继承

##### 一、构造函数绑定

> 第一种方法也是最简单的方法，使用call或apply方法，将父对象的构造函数绑定在子对象上，即子对象构造函数中加一行。

```javascript
function Animal(){
		this.species = "动物";
}
function Cat(name, color) {
    Animal.apply(thi.arguments);
    this.name = name;
    this.color = color;
}
var cat1 = new Cat("大猫", "黄色")
alert(cat1.species);
```

##### 二、prototype模式

> 使用prototype属性
>
> JS继承机制的设计思想就是，原型对象的所有属性和方法，都能被实例对象共享，也就是说，如果属性和方法定义在原型上，那么所有实例对象就能共享。

每个函数都有一个**prototype**属性，指向一个对象。

```javascript
function f() {}
typeof f.prototype // "object"
```

上面代码中，函数**f**默认具有**prototype**属性，指向一个对象。

对于普通函数来说，该属性基本无用。但是，对于构造函数来说，生成实例的时候，该属性会自动成为实例对象的原型。

```javascript
function Animal(name) {
    this.name = name;
}
Animal.prototype.color = 'white';

var cat1 = new Animal('大毛');
var cat2 = new Animal('二毛');
console.log(cat1.color)	// white
console.log(cat2.color)	// white
```

上面代码中，构造函数**Animal**的**prototype**属性，就是实例对象**cat1**和**cat2**的原型对象。原型对象上添加一个**color**属性，结果，实例对象都共享了该属性。

```javascript
function Animal(name) {
    this.name = name;
}
Animal.prototype.color = 'white';
var cat1 = new Animal('大毛');
var cat2 = new Animal('二毛');
Animal.prototype.color = 'yellow';
console.log(cat1.color)	// yellow
console.log(cat2.color)	// yellow
```

上面代码中，原型对象的**color**属性的值变为**yellow**，两个实例对象的**color**属性立刻跟着变了。这是因为实例对象其实没有**color**属性，都是读取原型对象的**color**属性。也就是说，当实例对象本身没有某个属性或方法的时候，它会到原型对象去寻找该属性或方法。

```javascript
function Animal(name) {
    this.name = name;
}
var cat1 = new Animal('大毛');
var cat2 = new Animal('二毛');
Animal.prototype.color = 'yellow';
cat1.color = 'black';
console.log(cat1.color)	// black
console.log(cat2.color)	// yellow
var a = Animal.prototype.color
console.log(a)	// yellow
```

上面代码中，实例对象**cat1**的**color**属性改为**black**，就使得它不再去原型对象读取**color**属性，后者的值依然为**yellow**。

##### 三、构造函数的继承

> 让一个构造函数继承另一个构造函数，是非常常见的需求。

```javascript
function Sub(value) {
    Super.call(this);
    this.prop = value;
}
```

上面代码中，**Sub**是子类的构造函数，**this**是子类的实例。在实例上调用父类的构造函数**Super**，就会让子类实例具有父类实例的属性。

#### 模块

##### 基本的实现方法

> 模块是实现特定功能的一组属性和方法的封装。

```javascript
var module = new Object({
    _count: 0,
    m1: function () {
        // ...
    },
    m2: function () {
        // ...
    }
});
```

上面的函数**m1**和**m2**，都封装在**module1**对象里。使用的时候，就是i调用这个对象的属性。

```javascript
module1.m1();
```

但是，这样的写法会暴露所有的模块成员，内部状态可以被外部改写。

```javascript
module1._count = 5;
```

##### 封装私有变量：构造函数的写法

> 我们可以利用构造函数，封装私有变量。

```javascript
function StringBuilder() {
    var buffer = [];
    this.add = function (str) {
        buffer.push(str);
    };
    this.toString = function () {
        return buffer.join('')
    };
}
```

上面代码中，**buffer**是模块化的私有变量。一旦生成实例对象，外部是无法直接访问**buffer**的。但是，这种方法将私有变量封装在构造函数中，导致构造函数与实例对象是一体的。总是存在内存之中，无法使用后清除。

##### 封装私有变量：立即执行函数的写法

> 另一种做法是使用"立即执行函数"，将相关的属性和方法封装在一个函数的作用域里面，可以达到不暴露私有成员的目的。

```javascript
var module1 = (function () {
    var _count = 0;
    var m1 = function () {
        // ...
    };
    var m2 = function () {
        // ...
    };
    return {
        m1: m1,
        m2: m2
    }
}) ();
```

使用上面的写法，外部代码无法读取内部的**_count**变量。

```javascript
console.info(module1._count);	// underfined
```

##### 模块的放大模式

> 如果一个模块很大，必须分成几个部分，或者一个模块需要继承另一个模块，这时就有必要采用"放大模式"。

```javascript
var module1 = (function (mod) {
    mod.m3 = function () {
        // ...
    }
    return mod;
})(module1);
```

上面的代码为**module1**模块添加了一个新方法**m3()**，然后返回新的**module1**模块。

#### Object对象的相关方法

> JS在Object对象上面，提供了很多相关的方法

##### Object.getPrototypeOf()

> Object.getPrototypeOf方法返回参数对象的原型。这是获取原型对象的标准方法。

```javascript
var F = function () {};
var f = new F();
Object.getPrototypeOf(f) === F.prototype // true
```

上面代码中，实例对象**f**的原型**F.prototype**。

##### Object.setPrototypeOf()

> **Object.setPrototypeOf**方法为参数对象设置原型，返回该参数对象。它接受两个参数，第一个是现有对象，第二个是原型对象。

```javascript
var a = {};
var b = {x: 1};
Object.setPrototypeOf(a, b);

Object.getPrototypeOf(a) === b // true
a.x // 1
```

上面代码中，**Object.setPrototypeOf**方法将对象a的原型，设置为对象**b**，因此a可以共享**b**的属性。

### 异步操作

#### 回调函数

> 回调函数是异步操作最基本的方法。

下面是两个函数**f1**和**f2**，编程的意图是**f2**必须等到**f1**执行完成，才能执行。

```javascript
function f1() {
  // ...
}

function f2() {
  // ...
}

f1();
f2();
```

上面代码的问题在于，如果**f1**是异步操作，**f2**会立即执行，不会等到**f1**结束再执行。

这时，可以考虑改写**f1**，把**f2**写成**f1**的回调函数。

```javascript
function f1(callback) {
  // ...
  callback();
}

function f2() {
  // ...
}

f1(f2);
```

回调函数的优点是简单、容易理解和实现，缺点是不利于代码的阅读和维护，各个部分之间高度耦合。

#### 事件监听

> 任务的执行不取决于代码的顺序，而取决于某个事件是否发生。

```javascript
f1.on('done', f2)
```

上面代码中。当**f1**发生**done**事件，就执行**f2**。

```javascript
function f1() {
    setTimeout(function () {
        // f1的任务代码
        f1.trigger('done');
    }, 1000);
}
```

**f1.tigger('done')**表示，执行完成后，立即触发**done**事件，从而开始执行**f2**。

这种方法的优点是比较容易理解，可以绑定多个事件，每个事件可以指定多个回调函数，可以去耦合，有利于实现模块化，缺点就是整个程序都要变成事件驱动型，流程不清晰。

##### Promises对象

> Promises是一个对象，也是一个构造函数。

```javascript
function f1(resolve, reject) {
    // 异步代码...
}
var p1 = new Promise(f1);
```

上面代码中，**Promise**构造函数接受一个回调函数**f1**作为参数，f1里面是异步操作的代码。然后，返回**p1**就是一个**Promise**实例。

**Promise**的设计思想是，所有异步任务都返回一个**Promise**实例。**Promise**实例有一个**then**方法，用来指定下一步的回调函数。

```javascript
var p1 = new Promise(f1);
p1.then(f2);
```

上面代码中，**f1**的异步操作执行完成，就会执行**f2**。

```javascript
// 传统写法
step1(function (value1) {
  step2(value1, function(value2) {
    step3(value2, function(value3) {
      step4(value3, function(value4) {
        // ...
      });
    });
  });
});
// Promise 写法
new Promise(step1))
  .then(step2)
  .then(step3)
  .then(step4);
```

从上面代码可以看出，采用Promise以后，流程变得非常清楚，十分易读。

##### Promise对象的状态

> Promise对象通过自身的状态，来控制异步操作。Promise实例具有三种状态。

- 异步操作未完成（pending）
- 异步操作成功（fulfilled）
- 异步操作失败（rejected）

上面三种状态里面，**fulfilled**和**rejected**合在一起称为**resolved**（已定型）。

这三种的状态的变化途径只有两种。

- 从"未完成"到"成功"
- 从"未完成"到"失败"

一旦状态发生变化，就凝固了，不会再有新的状态变化。

因此，Promise的最终结果只有两种。

- 异步操作成功，Promise实例传回一个值（value），状态变为fulfilled。
- 异步操作失败，Promise实例抛出一个错误（error），状态变为rejected。

##### Promise构造函数

> JS提供原生的Promise构造函数，用来生成Promise实例。

```javascript
var promise = new Promise(function (resolve, reject) {
  // ...
  if (/* 异步操作成功 */){
    resolve(value);
  } else { /* 异步操作失败 */
    reject(new Error());
  }
});
```

上面代码中，**Promise**构造函数接受一个函数作为参数，该函数的两个参数分别是**resolve**和**reject**。

**resolve**函数的作用是，将**Promise**实例的状态从"未完成"变成"成功"（即从**pending**变为**fulfilled**），在异步操作成功时调用，并将异步操作的结果，作为参数传递出去。**reject**函数的作用是，将**Promise**实例状态从"未完成"变成"失败"（即从**pending**变成**rejected**），在异步操作失败时调用，并将异步操作报出的错误，作为参数传递出去。

```javascript
function timeout(ms) {
    return new Promise((resolve, reject) => {
        setTimeout(resolve, ms, 'done')
    });
}
timeout(100)
```

上面代码中，**timeout(100)**返回一个**Promise**实例。100毫秒以后，该实例的状态会变成**fulfilled**。

##### Promise.prototype.then()

> **Promise**实例的**then**方法，用来添加回调函数。

**then**方法可以接受两个回调函数，第一个是异步操作成功时（变为**fulfilled**状态）的回调函数，第二个是异步操作失败（变成**rejected**）时的回调函数。

```javascript
var p1 = new Promise(function (resolve, reject) {
    resolve('成功');
});
p1.then(console.log, console.error);
//  成功
var p2 = new Promise(function (resolve, reject) {
    reject(new Error('失败'));
});
p2.then(console.log, console.error);
// Error：失败
```

上面代码中，**p1**和**p2**都是**Promise**实例，它们的**then**方法绑定两个回调函数:成功时的回调函数**console.log**，失败时的回调函数**console.error**。**p1**的状态变为成功，**p2**的状态变为失败，对应的回调函数会收到异步操作传回的值，然后在控制台输出。

**then**方法可以链式使用。

```javascript
p1
  .then(step1)
  .then(step2)
  .then(step3)
  .then(
    console.log,
    console.error
  );
```

上面代码中，**p1**后面有四个**then**，意味依次由四个回调函数。只要前一步的状态变为**fulfilled**，就会依次执行紧跟在后面的回调函数。

最后一个**then**方法，回调函数**console.log**和**console.error**，用法上有一个重要区别。**console.log**只显示**step3**的返回值，而**consoe.error**可以显示**p1**、**step1**、**step2**、**step3**之中任意一个错误。如果**step1**的状态为**rejected**，那么**step2**和**s**都不会执行了。

Promise开始寻找，接下来第一个为**rejected**的回调函数，在上面代码中是**console.error**。这就是说，Promise对象的报错具有传递性。

##### then()用法辨析

> **Promise**的用法，简单说就是一句话：使用then方法提那家回调函数。但是，不同的写法有一些细微的差别。

```javascript
// 写法一
f1().then(function () {
    return f2();
})

// 写法二
f1().then(function () {
  f2();
});

// 写法三
f1().then(f2());

// 写法四
f1().then(f2);
```

上面代码中，写法一的**f3**回调函数的参数，是**f2**函数的运行结果。

```javascript
f1().then(function () {
  return f2();
}).then(f3);
```

写法二的**f3**回调函数的参数是**underfined**。

```javascript
f1().then(function () {
  f2();
  return;
}).then(f3);
```

写法三的**f3**回调函数的参数，是**f2**函数返回的函数的运行结果。

```javascript
f1().then(f2())
  .then(f3);
```

写发四与写法一只有一个差别，那就是**f2**会接受到**f1()**返回的结果。

```javascript
f1().then(f2)
  .then(f3);
```

##### 实例：图片加载

```javascript
var preloadImage = function (path) {
    return new Promise(function (resolve, reject) {
        var image = new Image();
        image.onload = resolve;
        image.onerror = reject;
        image.src = path;
    });
};
```

上面代码中，**image**是一个图片对象的实例。它有两个事件监听属性，**onload**属性在图片加载成功后调用，**onerror**属性在加载失败调用。

上面的**prelodImage()**函数用法如下。

```javascript
preloadImage('https://example.com/my.jpg')
  .then(function (e) { document.body.append(e.target) })
  .then(function () { console.log('加载成功') })
```

![image-20211114221552223](https://gitee.com/ran_yong/mark-down-table-upload/raw/master/img/20211114221552.png)

上面代码中，图片加载成功以后，**onload**属性会返回一个事件对象，因此第一个**then()**方法的回调函数，会接受到这个事件对象。该对象**target**属性就是图片加载后生成的DOM节点。

### DOM

#### HTML DOM（文档对象模型）

当网页被加载时，浏览器会创建页面的文档对象模型。

HTML DOM 模型被构造为对象的树：

HTML DOM 树

![img](https://gitee.com/ran_yong/mark-down-table-upload/raw/master/img/20211117222641.gif)

通过可编程的对象模型，JS获得了足够的能力来创建动态的HTML。

- JS能够改变页面中的所有HTML元素
- JS能够改变页面中的所有HTML属性
- JS能够改变页面中的所有CSS样式
- JS能够改变页面中所有事件做出反应

#### 查找HTML元素

通常，通过JS，您需要操作HTML元素。

为了做到这种事情，您必须首先找到该元素。有三种方法来做这件事：

- 通过id找到HTML元素
- 通过标签名找到HTML元素
- 通过类名找到HTML元素

##### 通过id查找HTML元素

在DOM中查找HTML元素的最简单的方法，是通过使用元素的id。

```javascript
var x=document.getElementById("intro");
```

如果找到该元素，则该方法将以对象的形式返回该元素。

如果未找到该元素，则x将包含null。

#### 通过标签名查找HTML元素

```javascript
var x=document.getElementById("main");
var y=x.getElementsByTagName("p");
```

上面代码中，查找id="main"的元素，然后查找id="main"元素中的所有`<p>`元素

#### 通过类名找到HTML元素

```javascript
var x=document.getElementsByClassName("intro");
```

上面代码中，通过**getElementsByClassName**函数来查找class="intro"的元素。

### DOM HTML

#### 改变HTML输出流

JS能够创建动态的HTML内容：

**今天的日期是： Wed Nov 17 2021 22:36:44 GMT+0800 (中国标准时间)**

在JS中，document.write()可用于直接向HTML输出流写内容。

```html
<!DOCTYPE html>
<html>
<body>
<script>
document.write(Date());
</script>
</body>
</html>
```

⚠️：绝对不要在文档(DOM)加载完成之后使用**document.write()**。这回覆盖该文档。

#### 改变HTML内容

修改HTML内容的最简单的方法是使用innerHTML属性。

如需改变HTML元素的内容，使用这个语法：

```javascript
document.getElementById(id).innerHTML=新的 HTML
```

下面代码中，改变了`<p>`元素的内容：

```html
<html>
<body>
<p id="p1">Hello World!</p>
<script>
document.getElementById("p1").innerHTML="新文本!";
</script>
</body>
</html>
```

下面代码中，改变了`<h1>`元素的内容：

```html
<!DOCTYPE html>
<html>
<body>
<h1 id="header">Old Header</h1>
<script>
var element=document.getElementById("header");element.innerHTML="新标题";
</script>
</body>
</html>
```

- 上面的HTML文档含有id="header"的`<h1>`元素

- 我们使用HTML DOM 来获得id="header"的元素
- JS更改此元素的内容

#### 改变HTML属性

如需改变HTML元素的属性，请使用这个语法：

```javascript
document.getElementById(id).attribute=新属性值
```

下面代码中，改变了`<img>`元素的src元素：

```html
<!DOCTYPE html><html>
<body>
<img id="image" src="smiley.gif">
<script>
document.getElementById("image").src="landscape.jpg";
</script>
</body>
</html>
```

- 上面的HTML文档含有id="image"的`<img>`元素
- 我们使用HTML DOM 来获取id="image"元素
- JS更改此元素的属性(把 "smiley.gif" 改为 "landscape.jpg")

### DOM CSS

#### 改变HTML样式

如需改变HTML元素的样式，使用这个语法：

```javascript
document.getElementById(id).style.property=新样式
```

下面代码中，改变`<p>`元素的有样式：

```html
<!DOCTYPE html>
<html>
<head>
<meta charset="utf-8">
</head>
<body>
<p id="p1">Hello World!</p>
<p id="p2">Hello World!</p>
<script>
document.getElementById("p2").style.color="blue";
document.getElementById("p2").style.fontFamily="Arial";
document.getElementById("p2").style.fontSize="larger";
</script>
</body>
</html>
```

![image-20211117225518328](https://gitee.com/ran_yong/mark-down-table-upload/raw/master/img/20211117225518.png)

#### 使用事件

HTML DOM 允许我们通过触发事件来执行代码。

- 元素被点击
- 页面加载完成
- 输入框被修改

下面代码中，改变了id="id1"的HTML元素的样式，当用户点击按钮时：

```html
<!DOCTYPE html>
<html>
  <body>
    <h1 id="id1">我的标题 1</h1>
<button type="button" onclick="document.getElementById('id1').style.color='red'">
点我!</button>
  </body>
</html>
```

### DOM 事件

HTML DOM 使JS有能力对HTML事件做出反应。

#### 对事件做出反应

我们可以在事件发生时执行JS，比如当用户在HTML元素上点击时。

如需在用户点击某个元素时执行代码，请向一个HTML事件属性添加JS代码。

```javascript
onclick=JavaScript
```

HTML事件的例子：

- 当用户点击鼠标时
- 当网页已加载时
- 当图像已加载
- 当鼠标移动到元素上时
- 当输入字段被改变时
- 当提交HTML表单时
- 当用户触发案件时

下面代码中，当用户在`<h1>`元素上点击时，会改变其内容：

```html
<!DOCTYPE html><html>
<body>
<h1 onclick="this.innerHTML='Ooops!'">点击文本!</h1>
</body>
</html>
```

下面代码中，从事件处理器调用一个函数：

```html
<!DOCTYPE html><html>
<head>
<script>
function changetext(id)
{
    id.innerHTML="Ooops!";
}
</script>
</head>
<body>
<h1 onclick="changetext(this)">点击文本!</h1>
</body>
</html>
```

#### HTML 事件属性

如需向HTML元素分配事件，您可以使用事件属性。

向button元素分配onclick事件：

```html
<!DOCTYPE html>
<html>
<head> 
<meta charset="utf-8"> 
</head>
<body>

<p>点击按钮执行 displayDate() 函数.</p>
<button onclick="displayDate()">点这里</button>
<script>
function displayDate(){
	document.getElementById("demo").innerHTML=Date();
}
</script>
<p id="demo"></p>

</body>
</html>
```

上面代码中，名为displayDate的函数将在按钮被点击时执行。

#### 使用HTML DOM来分配事件

HTML DOM允许使用JS来向HTML元素分配事件：

向button元素分配onclick事件：

```html
<!DOCTYPE html>
<html>
<head>
<meta charset="utf-8">
</head>
<head>
</head>
<body>

<p>点击按钮执行 <em>displayDate()</em> 函数.</p>
<button id="myBtn">点这里</button>
<script>
document.getElementById("myBtn").onclick=function(){displayDate()};
function displayDate(){
	document.getElementById("demo").innerHTML=Date();
}
</script>
<p id="demo"></p>

</body>
</html>
```

在上面例子中，名为displayDate的函数将在按钮被点击时执行。

#### 使用HTML DOM 来分配事件

HTML DOM 允许您使用JS来向HTML元素分配事件

向button元素分配onclick事件：

```html
<!DOCTYPE html>
<html>
<head>
<meta charset="utf-8">
</head>
<head>
</head>
<body>

<p>点击按钮执行 <em>displayDate()</em> 函数.</p>
<button id="myBtn">点这里</button>
<script>
document.getElementById("myBtn").onclick=function(){displayDate()};
function displayDate(){
	document.getElementById("demo").innerHTML=Date();
}
</script>
<p id="demo"></p>

</body>
</html>
```

上面代码中，名为displayDate的函数被分配给id="myBtn"的HTML元素。按钮点击时JS函数将会被执行。

#### onload和onunload事件

onload和onunload事件会在用户进入或离开页面时被触发。

onload事件可用户检测访问者的浏览器类型和浏览器版本，并基于这些信息来加载网页版本。

onload和onunload事件可用于处理cookie。

```html
<!DOCTYPE html>
<html>
<head>
<meta charset="utf-8">
<title>JavaScript中文网(javascriptcn.com)</title>
</head>
<body onload="checkCookies()">

<script>
function checkCookies(){
	if (navigator.cookieEnabled==true){
		alert("Cookies 可用")
	}
	else{
		alert("Cookies 不可用")
	}
}
</script>
<p>弹窗-提示浏览器 cookie 是否可用。</p>
</body>
</html>
```

当页面完成加载时，显示一个提示框

```html
<!DOCTYPE html>
<html>
<head>
<meta charset="utf-8">
</head>
<head>
<script>
function mymessage(){
	alert("消息在 onload 事件触发后弹出。");
}
</script>
</head>

<body onload="mymessage()"></body>

</html>
```

当输入字段获得焦点时，改变其背景色

```html
<!DOCTYPE html>
<html>
<head>
<meta charset="utf-8">
</head>
<head>
<script>
function myFunction(x){
	x.style.background="yellow";
}
</script>
</head>
<body>

输入你的名字: <input type="text" onfocus="myFunction(this)">
<p>当输入框获取焦点时，修改背景色（background-color属性） 将被触发。</p>

</body>
</html>
```



#### onchange事件

onchange事件常结合对输入字段的验证来使用。

```html
<!DOCTYPE html>
<html>
<head>
<meta charset="utf-8">
</head>
<head>
<script>
function myFunction(){
	var x=document.getElementById("fname");
	x.value=x.value.toUpperCase();
}
</script>
</head>
<body>

输入你的名字: <input type="text" id="fname" onchange="myFunction()">
<p>当你离开输入框后，函数将被触发，将小写字母转为大写字母。</p>

</body>
</html>
```

上面代码中，当用户改变输入字段的内容时，会调用toUpperCase函数。

#### onmouseover和onmouseout事件

onmouseover和onmouseout事件可用于在用户的鼠标移至HTML元素上方或移除元素时触发函数。

```html
<!DOCTYPE html>
<html>
<head>
<meta charset="utf-8">
</head>
<body>

<div onmouseover="mOver(this)" onmouseout="mOut(this)" style="background-color:#D94A38;width:120px;height:20px;padding:40px;">Mouse Over Me</div>
<script>
function mOver(obj){
	obj.innerHTML="Thank You"
}
function mOut(obj){
	obj.innerHTML="Mouse Over Me"
}
</script>

</body>
</html>
```

![1](https://gitee.com/ran_yong/mark-down-table-upload/raw/master/img/20211117232759.gif)

```html
<!DOCTYPE html>
<html>
<head>
<meta charset="utf-8">
</head>
<body>

<h1 onmouseover="style.color='red'"onmouseout="style.color='black'">将鼠标移至文部上</h1>

</body>
</html>
```

![1](https://gitee.com/ran_yong/mark-down-table-upload/raw/master/img/20211117233655.gif)

#### onmousedown、onmouseup以及onclick事件

onmousedown,onmouseup以及onclick构成了鼠标点击事件的所有部分。首先当点击鼠标按钮时，触发onmousedown事件，当释放鼠标按钮时，会触发onmouseup事件，最后，当完成鼠标点击时，触发onclick事件。

```html
<!DOCTYPE html>
<html>
<head>
<meta charset="utf-8">
</head>
<head>
<script>
function lighton(){
	document.getElementById('myimage').src="/public/upload/imgs/bulbon.gif";
}
function lightoff(){
	document.getElementById('myimage').src="/public/upload/imgs/bulboff.gif";
}
</script>
</head>

<body>
<img id="myimage" onmousedown="lighton()" onmouseup="lightoff()" src="/public/upload/imgs/bulboff.gif" width="100" height="180" />
<p>点击不释放鼠标灯将一直亮着!</p>
</body>
</html>
```

![1](https://gitee.com/ran_yong/mark-down-table-upload/raw/master/img/20211117233205.gif)

### DOM EventListener

##### addEventListener()

`实例`：在用户点击按钮触发监听事件

```html
<!DOCTYPE html>
<html>
<head>
<meta charset="utf-8">
</head>
<body>

<p>该实例使用 addEventListener() 方法在按钮中添加点击事件。 </p>
<button id="myBtn">点我</button>
<p id="demo"></p>
<script>
document.getElementById("myBtn").addEventListener("click", displayDate);
function displayDate() {
    document.getElementById("demo").innerHTML = Date();
}
</script>

</body>
</html>
```

![1](https://gitee.com/ran_yong/mark-down-table-upload/raw/master/img/20211118094221.gif)

- addEventListener()方法用于向指定元素添加事件句柄。

- addEventListener()方法添加的事件句柄不会覆盖已存在的事件句柄。

- 可以向一个元素添加多个事件句柄。
- 可以向同个元素天际多个同类型的事件句柄，如：两个"click"事件。
- 你可以向任何DOM对象添加事件监听，不仅仅是HTML元素。如：window对象。
- addEventListener()方法可以更简单的控制事件。
- 当你使用addEventListener()方法时，JS从HTML标记中分离出来，可读写更强。
- 你可以使用removeEventListener()方法来移除事件的监听。

`语法`:

```javascript
element.addEventListener(event,function,useCapture);
```

- 第一个参数是事件的类型(如："click"或"mousedown")
- 第二个参数是事件触发后调用的函数。
- 第三个参数是布尔值用于描述事件是冒泡还是捕获。该参数是可选的

⚠️：不要使用"on"前缀。例如：使用"click"，而不是使用"onclick"。

`向原元素添加事件句柄`

实例：当用户点击元素时弹出"Hello World"：

```html
<!DOCTYPE html>
<html>
<head>
<meta charset="utf-8">
</head>
<body>

<p>该实例使用 addEventListener() 方法在用户点击按钮时执行函数。</p>
<button id="myBtn">点我</button>
<script>
document.getElementById("myBtn").addEventListener("click", myFunction);
function myFunction() {
    alert ("Hello World!");
}
</script>

</body>
</html>
```

`向同一个元素中添加多个事件句柄`

addEventListener()方法允许向同一个元素添加多个事件，且不会覆盖已存在的事件：

```html
<!DOCTYPE html>
<html>
<head>
<meta charset="utf-8">
</head>
<body>

<p>该实例使用 addEventListener() 方法向同个按钮中添加两个点击事件。</p>
<button id="myBtn">点我</button>
<script>
var x = document.getElementById("myBtn");
x.addEventListener("click", myFunction);
x.addEventListener("click", someOtherFunction);
function myFunction() {
    alert ("Hello World!")
}
function someOtherFunction() {
    alert ("函数已执行!")
}
</script>

</body>
</html>
```

`向同个元素添加不同类型的事件`

```html
<!DOCTYPE html>
<html>
<head>
<meta charset="utf-8">
</head>
<body>

<p>实例使用 addEventListener() 方法在同一个按钮中添加多个事件。</p>
<button id="myBtn">点我</button>
<p id="demo"></p>
<script>
var x = document.getElementById("myBtn");
x.addEventListener("mouseover", myFunction);
x.addEventListener("click", mySecondFunction);
x.addEventListener("mouseout", myThirdFunction);
function myFunction() {
    document.getElementById("demo").innerHTML += "鼠标放在!<br>"
}
function mySecondFunction() {
    document.getElementById("demo").innerHTML += "点击!<br>"
}
function myThirdFunction() {
    document.getElementById("demo").innerHTML += "鼠标移出!<br>"
}
</script>

</body>
</html>
```

![1](https://gitee.com/ran_yong/mark-down-table-upload/raw/master/img/20211118100404.gif)

### DOM元素

#### 创建新的HTML元素(节点)-appendChild()

若要创建新的HTML元素(节点)需要先创建一个元素，然后在已存在的元素中添加它，用于添加新元素到尾部。

```html
<!DOCTYPE html>
<html>
<head>
<meta charset="utf-8">
</head>
<body>

<div id="div1">
<p id="p1">这是一个段落。</p>
<p id="p2">这是另外一个段落。</p>
</div>
 
<script>
var para = document.createElement("p");
var node = document.createTextNode("这是一个新的段落。");
para.appendChild(node);
 
var element = document.getElementById("div1");
element.appendChild(para);
</script>

</body>
</html>
```

![image-20211124215612521](https://gitee.com/ran_yong/mark-down-table-upload/raw/master/img/20211124215612.png)

上面代码中，先创建`<p>`元素：

```javascript
var para = document.createElement("p")
```

为`<p>`元素添加文本节点：

```javascript
var node = document.createTextNode("这是一个新的段落。");
```

将文本节点添加到`<p>`元素中：

```javascript
para.appendChild(node);
```

最后，在一个已存在的元素中添加p元素。

```javascript
var element = document.getElementById("div1");
```

添加到已存在的元素中：

```javascript
element.appendChild(para);
```

#### 创建新的HTML元素(节点)-insertBefore()

若我们需要将新元素添加到开始的位置，可以使用insertBefore()方法：

```html
<!DOCTYPE html>
<html>
<head>
<meta charset="utf-8">
</head>
<body>

<div id="div1">
<p id="p1">这是一个段落。</p>
<p id="p2">这是另外一个段落。</p>
</div>
 
<script>
var para = document.createElement("p");
var node = document.createTextNode("这是一个新的段落。");
para.appendChild(node);
 
var element = document.getElementById("div1");
var child = document.getElementById("p1");
element.insertBefore(para, child);
</script>

</body>
</html>
```

![image-20211124220209879](https://gitee.com/ran_yong/mark-down-table-upload/raw/master/img/20211124220210.png)

#### 移除已存在的元素

若要移除一个元素，需要知道改元素的父元素。

```html
<!DOCTYPE html>
<html>
<head>
<meta charset="utf-8">
</head>
<body>

<div id="div1">
<p id="p1">这是一个段落。</p>
<p id="p2">这是另外一个段落。</p>
</div>
 
<script>
var parent = document.getElementById("div1");
var child = document.getElementById("p1");
parent.removeChild(child);
</script>

</body>
</html>
```

![image-20211124221542054](https://gitee.com/ran_yong/mark-down-table-upload/raw/master/img/20211124221542.png)

#### 替换HTML元素-replaceChild()

若使用replaceChild()方法来替代HTML DOM 中的元素。

```html
<!DOCTYPE html>
<html>
<head>
<meta charset="utf-8">
</head>
<body>

<div id="div1">
<p id="p1">这是一个段落。</p>
<p id="p2">这是另外一个段落。</p>
</div>
 
<script>
var para = document.createElement("p");
var node = document.createTextNode("这是一个新的段落。");
para.appendChild(node);
 
var parent = document.getElementById("div1");
var child = document.getElementById("p1");
parent.replaceChild(para, child);
</script>

</body>
</html>
```

![image-20211124221754969](https://gitee.com/ran_yong/mark-down-table-upload/raw/master/img/20211124221755.png)

#### 总结：HTML DOM 你可以学会：

- 如何改变HTML元素的内容(innerHTML)
- 如何改变HTML元素的样式(CSS)
- 如何对HTML DOM事件作出反应
- 如何添加删除HTML元素

### HTMLCollection 对象

`文档中添加和移除元素(节点)`

实例：

```javascript
var x = document.getElementsByTagName("p");
```

#### HTMLCollection对象

> getElementByTagName()方法返回HTMLCollection对象。
>
> HTMLCollection对象类似包含HTML元素的一个数组。

```html
<!DOCTYPE html>
<html>
<head>
<meta charset="utf-8">
</head>
<body>

<h2>JavaScript HTML DOM</h2>
<p>Hello World!</p>
<p>Hello JavaScript!</p>
<p id="demo"></p>

<script>
var myCollection = document.getElementsByTagName("p");
document.getElementById("demo").innerHTML = "第二个段落的内容为:<span style='color:red;'> " + myCollection[1].innerHTML + '</span>';
</script>

</body>
</html>
```

![image-20211124222459418](https://gitee.com/ran_yong/mark-down-table-upload/raw/master/img/20211124222459.png)

#### HTMLCollection对象的length属性

> HTMLCollection 对象的length属性定义了集合中元素的数量。

```html
<!DOCTYPE html>
<html>
<head>
<meta charset="utf-8">
</head>
<body>
<p>Hello World!</p>
<p>Hello JavaScript!</p>
<p id="demo"></p>
<script>
var myCollection = document.getElementsByTagName("p");
document.getElementById("demo").innerHTML = "文档包含" + myCollection.length + " 个段落。";
</script>

</body>
</html>
```

![image-20211124222833769](https://gitee.com/ran_yong/mark-down-table-upload/raw/master/img/20211124222834.png)

上面代码中，先获取了`<p>`元素的集合：

```javascript
var myCollection = document.getElementsByTagName("p");
```

然后显示元素个数：

```javascript
document.getElementById("demo").innerHTML = myCollection.length;
```

集合length属性常用与遍历集合中的元素

举个例子：

```html
<!DOCTYPE html>
<html>
<head>
<meta charset="utf-8">
</head>
<body>
<h2>JavaScript HTML DOM</h2>
<p>Hello World!</p>
<p>Hello JavaScript!</p>
<p>点击按钮修改 p 元素的背景颜色。</p>
<button onclick="myFunction()">点我</button>

<script>
function myFunction() {
    var myCollection = document.getElementsByTagName("p");
    var i;
    for (i = 0; i < myCollection.length; i++) {
        myCollection[i].style.color = "red";
    }
}
</script>

</body>
</html>
```

![1](https://gitee.com/ran_yong/mark-down-table-upload/raw/master/img/20211124223507.gif)

### 浏览器BOM

#### JS Window

> 浏览器对象模型(BOM)使JS有能力与浏览器"对话"。

全局变量是window对象的属性。

全局函数是window对象的方法。

甚至HTML DOM 的document也是window对象的属性之一；

```javascript
window.document.getElementById("header");
```

与此相同：

```javascript
document.getElementById("header");
```

##### Window尺寸

有三种方法能够确定浏览器窗口的尺寸。

对于Internet Explorer、Chrome、Firefox、Opera 以及 Safari：

- window.innerHeight - 浏览器窗口的内部高度(包括滚动条)
- window.innerWidth - 浏览器窗口的内部宽度(包括滚动条)

对于 Internet Explorer 8、7、6、5：

- document.documentElement.clientWidth
- document.documentElement.clientHeight

或者

- document.body.clientHeight
- document.body.clientWidth

实例

```html
<!DOCTYPE html>
<html>
<head>
<meta charset="utf-8">
</head>
<body>

<p id="demo"></p>
<script>
var w=window.innerWidth 
|| document.documentElement.clientWidth
|| document.body.clientWidth;
var h=window.innerHeight
|| document.documentElement.clientHeight
|| document.body.clientHeight;
x=document.getElementById("demo");
x.innerHTML="浏览器window宽度: " + w + ", 高度: " + h + "。"
</script>

</body>
</html>
```

![image-20211124231359538](https://gitee.com/ran_yong/mark-down-table-upload/raw/master/img/20211124231359.png)

##### 其他window方法

- Window.open() - 打开新窗口
- window.clocse() - 关闭当前窗口
- window.moveTo() - 移动当前窗口
- window.resizeTo() - 调整当前窗口尺寸

#### JS Window Screen

> window.screen 对象包含有关用户屏幕的信息

##### Window Screen

> Window.screen对象在编写时不使用window这个前缀。

一些属性：

- screen.availWidth - 可用的屏幕宽度
- screen.availH eight - 可用的屏幕高度

##### Window Screen 可用宽度

> screen.availWidth 属性返回访问者屏幕的宽度

```html
<!DOCTYPE html>
<html>
<head>
<meta charset="utf-8">
</head>
<body>

<script>
document.write("可用宽度: " + screen.availWidth);
</script>

</body>
</html>
```

![image-20211125130824245](https://gitee.com/ran_yong/mark-down-table-upload/raw/master/img/20211125130824.png)

##### Window Screen 可用高度

> screen.availHeight 属性返回访问者屏幕的高度

```html
<!DOCTYPE html>
<html>
<head>
<meta charset="utf-8">
</head>
<body>

<script>
document.write("可用高度: " + screen.availHeight);
</script>

</body>
</html>
```

![image-20211125130942247](https://gitee.com/ran_yong/mark-down-table-upload/raw/master/img/20211125130942.png)

#### JS Window Location

> window.location 对象用于获得当前页面的地址 (URL)，并把浏览器重定向到新的页面。

##### Window Location

> window.location 对象在编写时可不使用window这个前缀

- location.hostname 返回 web 主机的域名
- location.pathname 返回当前页面的路径和文件名
- location.port 返回 web 主机的端口 （80 或 443）
- location.protocol 返回所使用的 web 协议（http:// 或 https://）

##### Window Location Href

> location.href 属性返回当前页面的 URL。

```html
// 返回（当前页面的）整个 URL
<script>
document.write(location.href);
</script>
```

##### Window Location Pathname

> location.pathname 属性返回 URL 的路径名。

```html
// 返回当前 URL 的路径名：
<script>
document.write(location.pathname);
</script>
```

##### Window Location Assign

> location.assign() 方法加载新的文档。

```html
<!DOCTYPE html>
<html>
<head>
<meta charset="utf-8">
</head>
<head>
<script>
function newDoc(){
	window.location.assign("http://sakura.daydayupran.top")
}
</script>
</head>
<body>

<input type="button" value="加载新文档" onclick="newDoc()">

</body>
</html>
```

#### JS Window History

> Window,history 对象包含浏览器的历史

###### Window History

> Window.history对象在编写时不使用window这个前缀

为了保护用户隐私，对JS访问该对象的方法作出了限制。

- history.back() - 与在浏览器点击后退按钮相同
- history.forward() - 与在浏览器中点击向前按钮相同

###### Window History Back

> history,back()方法加载历史列表中的前一个URL

这与在浏览器中点击后退按钮时相同的：

```html
<!DOCTYPE html>
<html>
<head>
<meta charset="utf-8">
<head>
<script>
function goBack(){
  window.history.back()
}
</script>
</head>
<body>
<input type="button" value="Back" onclick="goBack()">
</body>
</html>
```

###### Window History Forward

> history forward()方法加载历史列表中的下一个URL

这与在浏览器中点击前进按钮是相同的：

```html
<!DOCTYPE html>
<html>
<head>
<meta charset="utf-8">
<script>
function goForward(){
  window.history.forward()
}
</script>
</head>
<body>
<input type="button" value="Forward" onclick="goForward()">
</body>
</html>
```

#### JS Navigator

> window.navigator 对象包含有关访问者浏览器的信息

###### Window Navigator

> Window.navigator 对象在编写时可不用window这个前缀

```html
<!DOCTYPE html>
<html>
<head>
<meta charset="utf-8">
</head>
<body>
<div id="example"></div>
<script>
txt = "<p>浏览器代号: " + navigator.appCodeName + "</p>";
txt+= "<p>浏览器名称: " + navigator.appName + "</p>";
txt+= "<p>浏览器版本: " + navigator.appVersion + "</p>";
txt+= "<p>启用Cookies: " + navigator.cookieEnabled + "</p>";
txt+= "<p>硬件平台: " + navigator.platform + "</p>";
txt+= "<p>用户代理: " + navigator.userAgent + "</p>";
txt+= "<p>用户代理语言: " + navigator.systemLanguage + "</p>";
document.getElementById("example").innerHTML=txt;
</script>

</body>
</html>
```

![image-20211125232643306](https://gitee.com/ran_yong/mark-down-table-upload/raw/master/img/20211125232643.png)

⚠️：来自navigator 对象的信息具有误导性，不应该被用于检测浏览器版本。

#### JS 弹窗

> 可以在JS中创建三种消息框：警告框、确认框、提示框

##### 警告框

> 警告框经常用于确保用户可以得到某些信息。
>
> 当警告框出现后，用户需要点击确定按钮才能继续进行操作。

语法：

```javascript
window.alert("你好～");
```

Window.alert()方法可以不带上window对象，直接使用alert()方法。

```html
<!DOCTYPE html>
<html>
<head>
<meta charset="utf-8">
<script>
function myFunction(){
	alert("你好，我是一个警告框！");
}
</script>
</head>
<body>
<input type="button" onclick="myFunction()" value="显示警告框" />
</body>
</html>
```

##### 确认框

> 确认框通常用于验证是否接收用户操作
>
> 当确认框弹出时，用户点击"确认"或者"取消"来确定用户操作。
>
> 当你点击"确定"，确认框返回true，如果点击"取消"，确认框返回false。

语法：

```javascript
window.confirm("sometext");
```

window.confirm()方法可以不带上window对象，直接使用confirm()方法。

```html
<!DOCTYPE html>
<html>
<head>
<meta charset="utf-8">
</head>
<body>
<p>点击按钮，显示确认框。</p>
<button onclick="myFunction()">点我</button>
<p id="demo"></p>
<script>
function myFunction(){
	var x;
	var r=confirm("按下按钮!");
	if (r==true){
		x="你按下了\"确定\"按钮!";
	}
	else{
		x="你按下了\"取消\"按钮!";
	}
	document.getElementById("demo").innerHTML=x;
}
</script>

</body>
</html>
```

##### 提示框

> 提示框经常用于提示用户在进入页面前输入某个值。
>
> 当提示框出现后，用户需要输入某个值，然后点击确认或取消按钮才能继续操作。
>
> 如果用户点击确认，那么返回值为输入的值。如果用户点击取消，那么返回值为null。

语法：

```javascript
window.prompt("sometext","defaultvalue");
```

window.prompt()方法可以不带上window对象，直接使用prompt()方法。

```html
<!DOCTYPE html>
<html>
<head>
<meta charset="utf-8">
</head>
<body>

<p>点击按钮查看输入的对话框。</p>
<button onclick="myFunction()">点我</button>
<p id="demo"></p>
<script>
function myFunction(){
	var x;
	var person=prompt("请输入你的名字","Harry Potter");
	if (person!=null && person!=""){
	    x="你好 " + person + "! 今天感觉如何?";
	    document.getElementById("demo").innerHTML=x;
	}
}
</script>

</body>
</html>
```

##### 换行

>弹窗使用反斜杠 + "n"(\n)来设置换行。

```javascript
alert("Hello\nHow are you?");

```

```html
<!DOCTYPE html>
<html>
<head>
<meta charset="utf-8">
</head>
<body>

<p>点击按钮在弹窗总使用换行。</p>
<button onclick="myFunction()">点我</button>
<p id="demo"></p>
<script>
function myFunction(){
	alert("Hello\nHow are you?");
}
</script>

</body>
</html>
```

#### JS 计时事件

> 在JS中使用计时事件是很容易的，两个关键方法是：
>
> - setInterval() - 间隔指定的毫秒数不停地执行指定的代码。
> - setTimeout() - 在指定的毫秒数后执行指定的代码。

⚠️： setInterval() 和 setTimeout() 是 HTML DOM Window对象的两个方法。

##### setInterval() 方法

> setInterval() 间隔指定的毫秒数不停的执行指定的代码

语法

```javascript
window.setInterval("javascript function",milliseconds);
```

**window.setInterval()**方法可以不使用window前缀，直接使用函数**setInterval()**。

setInterval()第一个参数是函数(function)。

第二个参数间隔是毫秒数

⚠️：1000毫秒等于一秒。

```html
<!DOCTYPE html>
<html>
<head>
<meta charset="utf-8">
</head>
<body>

<p>在页面显示一个时钟</p>
<p id="demo"></p>
<script>
var myVar=setInterval(function(){myTimer()},1000);
function myTimer(){
	var d=new Date();
	var t=d.toLocaleTimeString();
	document.getElementById("demo").innerHTML=t;
}
</script>

</body>
</html>
```

##### 如何停止执行？

> clearInterval()方法用于停止setInterval()方法执行的函数代码。

语法

```javascript
window.clearInterval(intervalVariable)
```

**window.clearInterval()**方法可以不使用window前缀，直接使用函数**clearInterval()**。

要使用**clearInterval()**方法，在创建计时方法时你必须使用`全局变量`：

```javascript
myVar=setInterval("javascript function",milliseconds);
```

然后你可以使用**clearInterval()**方法来停止执行。

```html
<!DOCTYPE html>
<html>
<head>
<meta charset="utf-8">
</head>
<body>

<p>页面上显示时钟：</p>
<p id="demo"></p>
<button onclick="myStopFunction()">停止</button>
<script>
var myVar=setInterval(function(){myTimer()},1000);
function myTimer(){
	var d=new Date();
	var t=d.toLocaleTimeString();
	document.getElementById("demo").innerHTML=t;
}
function myStopFunction(){
	clearInterval(myVar);
}
</script>

</body>
</html>
```

![image-20211126094110921](https://gitee.com/ran_yong/mark-down-table-upload/raw/master/img/20211126094118.png)

##### setTimeout()方法

语法

```javascript
myVar= window.setTimeout("javascript function", milliseconds);
```

**setTimeout()**方法会返回某个值。在上面的语句中，值被储存在名为myVar的变量中。假如希望取消这个setTimeout()，你可以使用这个变量名来指定它。

**setTimeout()**的第一个参数是含有JS语句的字符串。这个语句可能诸如"alert('5 seconds!')"，或者对函数的调用，诸如 alertMsg。

第二个参数指示从当前起多少毫秒后执行第一个参数。

```html
<!DOCTYPE html>
<html>
<head>
<meta charset="utf-8">
</head>
<body>
<p>点击按钮，在等待 3 秒后弹出 "Hello"。</p>
<button onclick="myFunction()">点我</button>
<script>
function myFunction(){
	setTimeout(function(){alert("Hello")},3000);
}
</script>

</body>
</html>
```

##### 如何停止执行？

> **clearTimeout()** 方法用于停止执行**setTimeout()**方法的函数代码。

语法

```javascript
window.clearTimeout(timeoutVariable)
```

要使用**clearTimeout()**方法，你必须在创建超时方法中(setTimeout)使用全局变量：

```javascript
myVar=setTimeout("javascript function",milliseconds);
```

如果函数还未被执行，你可以使用**clearTimeout()**方法来停止执行函数代码。

```html
<!DOCTYPE html>
<html>
<head>
<meta charset="utf-8">
</head>
<body>
<p>点击第一个按钮等待3秒后出现"Hello"弹框。</p>
<p>点击第二个按钮来阻止第一个函数运行。（你必须在3秒之前点击它）。</p>
<button onclick="myFunction()">点我</button>
<button onclick="myStopFunction()">停止弹框</button>
<script>
var myVar;
function myFunction(){
	myVar=setTimeout(function(){alert("Hello")},3000);
}
function myStopFunction(){
	clearTimeout(myVar);
}
</script>

</body>
</html>
```

![image-20211126095402229](https://gitee.com/ran_yong/mark-down-table-upload/raw/master/img/202111260954436.png)

#### JS Cookie

> Cookie用于存储web页面的用户信息。

##### 什么是Cookie？

> Cookie是一些数据，存储于你电脑上的文本文件中。

当web服务器向浏览器发送web页面时，在连接关闭后，服务端不会记录用户的信息。

Cookie的作用就是用于解决"如何记录客户端的用户信息":

- 当用户访问web页面时，他的名字可以记录在cookie中。
- 在用户下一次访问该页面时，可以在cookie中读取用户访问记录

Cookie 以名/值对形式存储，如下所示：

```javascript
username=John Doe
```

在浏览器从服务器上请求web 页面时，属于该页面的cookie会被添加到该请求中。服务端用这种方式来获取用户的信息。

##### 使用JS创建Cookie

> JS可以使用 **document.cookie** 属性来创建、读取、及删除cookie。

JS中，创建cookie如下所示：

```javascript
document.cookie="username=John Doe";
```

您还可以为cookie 添加一个过期时间，默认情况下，cookie在浏览器关闭时删除。

```javascript
document.cookie="username=John Doe; expires=Thu, 18 Dec 2043 12:00:00 GMT";
```

您可以使用path参数告诉浏览器cookie的路径。默认情况下，cookie属于当前页面。

```javascript
document.cookie="username=John Doe; expires=Thu, 18 Dec 2043 12:00:00 GMT; path=/";
```

##### 使用JS读取Cookie

> 在JS中，可以使用以下代码来读取cookie：

```javascript
var x = document.cookie;
```

⚠️：document.cookie 将以字符串的方式返回所有的 cookie，类型格式： cookie1=value; cookie2=value; cookie3=value;

##### 使用JS修改Cookie

> 在JS中，修改cookie类似于创建cookie，如下所示：

```javascript
document.cookie="username=John Smith; expires=Thu, 18 Dec 2043 12:00:00 GMT; path=/";
```

这样会将旧的cookie覆盖。

##### 使用JS删除Cookie

> 删除cookie只需要设置expires参数为以前的时间即可。

```javascript
document.cookie = "username=; expires=Thu, 01
Jan 1970 00:00:00 GMT";
```

⚠️：当前删除时不必指定cookie的值。

##### Cookie 字符串

##### 实例

- 设置cookie值的函数
- 获取cookie值的函数
- 检测cookie值的函数

##### 设置cookie值的函数

> 首先，我们创建一个函数用于存储访问者的名字

```javascript
function setCookie(cname,cvalue,exdays)
{
  var d = new Date();
  d.setTime(d.getTime()+(exdays*24*60*60*1000));
  var expires = "expires="+d.toGMTString();
  document.cookie = cname + "=" + cvalue + "; " + expires;
}
```

上面代码中，cookie的名称为cname，cookie的值为cvalue，并设置了cookie的过期时间expires。

改函数设置了cookie名、cookie值、cookie过期时间。

##### 获取cookie值的函数

> 创建一个函数用户返回指定cookie的值

```javascript
function getCookie(cname){
  var name = cname + "=";
  var ca = document.cookie.split(';');
  for(var i=0; i<ca.length; i++) {
    var c = ca[i].trim();
    if (c.indexOf(name)==0) return c.substring(name.length,c.length);
  }
  return "";
}
```

上面代码中，cookie名的参数为cname。

创建一个文本变量用于检索指定 cookie：cname+ "="。

使用分毫来分割document.cookie字符串，并将分割后的字符串数组复制给ca(ca = document.cookie.split(';'))。循环ca数组 (i=0;i<ca.length;i++)，然后读取数组种的每个值，并去除前后空格 (c=ca[i].trim())。

如果找到cookie(c.indexOf(name) == 0)，返回cooie的值 (c.substring(name.length,c.length)。如果没有找到cookie，返回""。

##### 检测cookie值的函数

> 如果设置了cookie，将显示一个问候信息。
>
> 如果没有设置cookie，将会显示一个弹窗用于询问访问者的名字，并调用setCookie函数将访问者的名字存储365天

```javascript
function checkCookie(){
  var user=getCookie("username");
  if (user !=""){
    alert("欢迎" + user + "再次访问");
  }else {
    user = prompt("Please enter your name:","");
    if (user!="" && user!=null){
      setCookie("username",user,365);
    }
  }
}
```

