---
date: 2021/11/12 12:45
categories: [前端]
tag: [TypeScript]
---

# TS语法学习

## 什么是TypeScript

> TypeScript 是一种由微软开发的自由和开源的编程语言，它是 JavaScript 的一个超集，扩展了 JavaScript 的语法。

### 语法的特性

- 类型批注和编译时类型检查
- 类型推断
- 类型擦除
- 接口
- 枚举
- Mixin
- 泛型编程
- 名字空间
- 元组
- Await

### JavaScript 与 TypeScript 的区别

::: tip

TypeScript 是 JavaScript 的超集，扩展了 JavaScript 的语法，因此现有的 JavaScript 代码可与 TypeScript 一起工作无需任何修改，TypeScript 通过类型注解提供编译时的静态类型检查。

TypeScript 可处理已有的 JavaScript 代码，并只对其中的 TypeScript 代码进行编译。

:::

## 基础类型

::: tip

TS与JS几乎相同的数据类型

:::

### 布尔值

> 最基础的数据类型就是简单的true/false值，在JS和TS里面叫`boolean`

```typescript
let isDone: boolean = false;
```

### 数字

> 和JS一样，TS里的所有数字都是浮点数。这些浮点数类型是`number`

```typescript
let decLiteral: number = 6;
let hexLiteral: number = 0xf00d;
let binaryLiteral: number = 0b1010;
let octalLiteral: number = 0o744;
```

### 字符串

> 我们使用string表示文本数据类型。和JS一样，可以使用`"`或者`'`表示字符串

```typescript
let name: string = "bob";
name = "smith";
```

还可以使用模板字符串，它可以定义多行文本和内嵌表达式。这种字符串是被反引号包围（`）,并且以${ expr }这种形式嵌入表达式

```typescript
let name: string = `Gene`;
let age: number = 37;
let sentence: string = `Hello, my name is ${ name }.

I'll be ${ age + 1 } years old next month.`;
```

### 数组

> TS像JS一样可以操作数组元素。
>
> - [] - 表示类型元素组成的一个数组
> - Array<元素类型>:

```typescript
let list: number[] = [1, 2, 3];
```

```typescript
let list: Array<number> = [1, 2, 3];
```

### 元祖Tuple

> 元祖类型允许表示一个已知元素和类型的数组，比如你可以定义一对值分别为`string`和`number`类型的元祖

```typescript
let x: [string, number];
// Initialize it
x = ['hello', 10]; // OK
// Initialize it incorrectly
x = [10, 'hello']; // Error
```

> 当访问一个已知索引的元素，会得到正确的类型：

```typescript
console.log(x[0].substr(1)); // OK
console.log(x[1].substr(1)); // Error, 'number' does not have 'substr'
```

### 枚举

> enum类型是对JS标准数据类型的一个补充。

```typescript
enum Color {Red, Green, Blue}
let c: Color = Color.Green;
```

### Null和Underfined

> TS中，`underfined`和`null`两者各有自己的类型分别叫做`underfined`和`null`。

```typescript
// Not much else we can assign to these variables!
let u: undefined = undefined;
let n: null = null;
```

:::tip

默认情况下`null`和`underfined`是所有类型的字类型。就是说可以把null和`underfined`赋值给`number`类型的变量。

:::

### Never

> `never`类型表示的是那些永不存在的值的类型。例如,`never`类型是那些总是会抛出异常或根本就不会有返回值的函数表达式或箭头函数表达式的返回值类型；变量也可能是`never`类型，当它们被永不为真的类型保护所约束时。

下面是一些返回never类型的函数。

```typescript
// 返回never的函数必须存在无法达到的终点
function error(message: string): never {
    throw new Error(message);
}

// 推断的返回值类型为never
function fail() {
    return error("Something failed");
}

// 返回never的函数必须存在无法达到的终点
function infiniteLoop(): never {
    while (true) {
    }
}
```

### Object

> `object`表示非原始类型，也就是除`number`，`string`，`boolean`，`symbol`，`null`或`underfined`之外的类型。

使用`object`类型，就可以更好的表示像`Object.create`这样的API。

```typescript
declare function create(o: object | null): void;

create({ prop: 0 }); // OK
create(null); // OK

create(42); // Error
create("string"); // Error
create(false); // Error
create(undefined); // Error
```

### void

> void用于标识方法返回值的类型，表示该方法没有返回值。

```typescript
function warnUser(): void {
    console.log("This is my warning message");
}
```

声明一个void类型的变量没有什么大的意义，因为你只能给它赋予underfined和null

```typescript
let unusable: void = undefined;
```

### 类型的断言

> 类型的断言有两种形式。
>
> - <>
> - as

尖括号：

```typescript
let someValue: any = "this is a string";
let strLength: number = (<string>someValue).length;
```

as语法：

```typescript
let someValue: any = "this is a string";
let strLength: number = (someValue as string).length;
```

两种形式是等价的。

## TS变量声明

> 变量是一种方便的占位符，用于引用计算机内存地址。
>
> 我们可以把变量看做存储数据的容器。
>
> TS变量的命名规则：
>
> - 变量名称可以包含数字和字母。
> - 除了下划线 **_** 和美元 **$** 符号外，不能包含其他特殊字符，包括空格。
> - 变量名不能以数字开头。

变量使用前必须先声明，我们可以使用`var`来声明变量。

```typescript
var [变量名] : [类型] = 值;
```

例如：

```typescript
var uname:string = "Runoob";
```

声明变量的类型，但没有初始值，变量值会设置为`underfined`：

```typescript
var [变量名] : [类型];
```

例如：

```typescript
var uname:string;
```

声明变量并初始值，但不设置类型，该变量可以是任意类型：

```typescript
var [变量名] = 值;
```

例如：

```typescript
var uname = "Runoob";
```

声明变量没有设置类型和初始值，类型可以是任意类型，默认初始值为`underfined`：

```typescript
var [变量名];
```

例如：

```typescript
var uname:string = "Runoob";
var score1:number = 50;
var score2:number = 42.50
var sum = score1 + score2
console.log("名字: "+uname)
console.log("第一个科目成绩: "+score1)
console.log("第二个科目成绩: "+score2)
console.log("总成绩: "+sum)
```

::: warning 注意

变量不要使用name否则会与DOM中的全局window对象下的name属性出现了重名。

:::

进过tsc命令编译得到JS代码

```javascript
var uname = "Runoob";
var score1 = 50;
var score2 = 42.50;
var sum = score1 + score2;
console.log("名字: " + uname);
console.log("第一个科目成绩: " + score1);
console.log("第二个科目成绩: " + score2);
console.log("总成绩: " + sum);
```

TS遵循强类型，如果将不同的类型赋值给变量会编译错误

```typescript
var num:number = "hello"     // 这个代码会编译错误
```

### 类型断言

> 断言可以用来手动指定一个值的类型，即允许变量从一种类型更改为另一种类型。

语法格式：

```typescript
<类型>值
```

实例：

```typescript
var str = '1' 
var str2:number = <number> <any> str   
//str、str2 是 string 类型
console.log(str2)
```

编译后：

```typescript
var str = '1';
var str2 = str;  //str、str2 是 string 类型
console.log(str2);
// 1
```

### 类型推断

> 当类型没有给出时，TypeScript 编译器利用类型推断来推断类型。
>
> 如果由于缺乏声明而不能推断出类型，那么它的类型被视作默认的动态 any 类型。

```typescript
var num = 2;    // 类型推断为 number
console.log("num 变量的值为 "+num); 
num = "12";    // 编译错误
console.log(num);
```

- 第一行代码声明了`num`设置初始值为2。注意变量声明没有指定类型。因此，程序使用类型推断来确定变量的数据类型，第一次赋值为 2，`num` 设置为 `number` 类型。
- 第三行代码，当我们再次为变量设置字符串类型的值时，这时编译会错误。因为变量已经设置为了 `number` 类型。

```typescript
error TS2322: Type '"12"' is not assignable to type 'number'.
```

### 变量作用域

> 变量作用域指定了变量定义的位置。
>
> 程序中变量的可用性由变量作用域决定。
>
> TypeScript 有以下几种作用域：
>
> - 全局作用域 - 全局变量定义在程序结构的外部，它可以在你代码的**任何位置**使用。
> - 类作用域 - 这个变量也可以称为字段。类变量声明在一个类里头，但在类的方法外面。 该变量可以通过类的对象来访问。类变量也可以是静态的，静态的变量可以通过类名直接访问。
> - 局部作用域 - 局部变量，局部变量只能在声明它的一个代码块（如：方法）中使用。

```typescript
var global_num = 12          // 全局变量
class Numbers { 
   num_val = 13;             // 实例变量
   static sval = 10;         // 静态变量 
   storeNum():void { 
      var local_num = 14;    // 局部变量
   } 
} 
console.log("全局变量为: "+global_num)  
console.log(Numbers.sval)   // 静态变量
var obj = new Numbers(); 
console.log("实例变量: "+obj.num_val)
```

编译后：

```javascript
var global_num = 12; // 全局变量
var Numbers = /** @class */ (function () {
    function Numbers() {
        this.num_val = 13; // 实例变量
    }
    Numbers.prototype.storeNum = function () {
        var local_num = 14; // 局部变量
    };
    Numbers.sval = 10; // 静态变量
    return Numbers;
}());
console.log("全局变量为: " + global_num);
console.log(Numbers.sval); // 静态变量
var obj = new Numbers();
console.log("实例变量: " + obj.num_val);
```

```javascript
全局变量为: 12
10
实例变量: 13
```

## TS运算符

TypeScript 主要包含以下几种运算：

- 算术运算符
- 逻辑运算符
- 关系运算符
- 按位运算符
- 赋值运算符
- 三元/条件运算符
- 字符串运算符
- 类型运算符

### 算术运算符

实例：

::: details 点击查看代码

```typescript
var num1:number = 10
var num2:number = 2
var res:number = 0
   
res = num1 + num2
console.log("加:        "+res);

res = num1 - num2;
console.log("减: "+res)

res = num1*num2
console.log("乘:    "+res)

res = num1/num2
console.log("除:   "+res)
   
res = num1%num2
console.log("余数:   "+res)

num1++
console.log("num1 自增运算: "+num1)

num2--
console.log("num2 自减运算: "+num2)
```

编译后：

```javascript
var num1 = 10;
var num2 = 2;
var res = 0;
res = num1 + num2;
console.log("加:        " + res);
res = num1 - num2;
console.log("减: " + res);
res = num1 * num2;
console.log("乘:    " + res);
res = num1 / num2;
console.log("除:   " + res);
res = num1 % num2;
console.log("余数:   " + res);
num1++;
console.log("num1 自增运算: " + num1);
num2--;
console.log("num2 自减运算: " + num2);
```

结果：

```javascript
加:        12
减: 8
乘:    20
除:   5
余数:   0
num1 自增运算: 11
num2 自减运算: 1
```

:::

### 关系运算符

> 关系运算符用于计算结果是否为 true 或者 false。

实例：

::: details 点击查看代码

```typescript
var num1:number = 5;
var num2:number = 9;
 
console.log("num1 的值为: "+num1); 
console.log("num2 的值为:"+num2);
 
var res = num1>num2 
console.log("num1 大于n num2: "+res)
 
res = num1<num2 
console.log("num1 小于 num2: "+res)  
 
res = num1>=num2 
console.log("num1 大于或等于  num2: "+res)
 
res = num1<=num2
console.log("num1 小于或等于 num2: "+res)  
 
res = num1==num2 
console.log("num1 等于 num2: "+res)  
 
res = num1!=num2  
console.log("num1 不等于 num2: "+res)
```

编译后：

```javascript
var num1 = 5;
var num2 = 9;
console.log("num1 的值为: " + num1);
console.log("num2 的值为:" + num2);
var res = num1 > num2;
console.log("num1 大于n num2: " + res);
res = num1 < num2;
console.log("num1 小于 num2: " + res);
res = num1 >= num2;
console.log("num1 大于或等于  num2: " + res);
res = num1 <= num2;
console.log("num1 小于或等于 num2: " + res);
res = num1 == num2;
console.log("num1 等于 num2: " + res);
res = num1 != num2;
console.log("num1 不等于 num2: " + res);
```

结果：

```javascript
num1 的值为: 5
num2 的值为:9
num1 大于n num2: false
num1 小于 num2: true
num1 大于或等于  num2: false
num1 小于或等于 num2: true
num1 等于 num2: false
num1 不等于 num2: true
```

:::

### 逻辑运算符

> 逻辑运算符用于测定变量或值之间的逻辑。

实例：

::: details 点击查看代码

```typescript
var avg:number = 20; 
var percentage:number = 90; 
 
console.log("avg 值为: "+avg+" ,percentage 值为: "+percentage);
    
var res:boolean = ((avg>50)&&(percentage>80)); 
console.log("(avg>50)&&(percentage>80): ",res);
 
var res:boolean = ((avg>50)||(percentage>80)); 
console.log("(avg>50)||(percentage>80): ",res);
 
var res:boolean=!((avg>50)&&(percentage>80)); 
console.log("!((avg>50)&&(percentage>80)): ",res);
```

编译后：

```javascript
var avg = 20;
var percentage = 90;
console.log("avg 值为: " + avg + " ,percentage 值为: " + percentage);
var res = ((avg > 50) && (percentage > 80));
console.log("(avg>50)&&(percentage>80): ", res);
var res = ((avg > 50) || (percentage > 80));
console.log("(avg>50)||(percentage>80): ", res);
var res = !((avg > 50) && (percentage > 80));
console.log("!((avg>50)&&(percentage>80)): ", res);
```

结果：

```javascript
avg 值为: 20 ,percentage 值为: 90
(avg>50)&&(percentage>80):  false
(avg>50)||(percentage>80):  true
!((avg>50)&&(percentage>80)):  true
```

:::

### 短路运算符(&&与||)

> &&与||运算符可用于组合表达式。&&运算符只有左右两个表达式都为true时才返回true。

```typescript
var a = 10 
var result = ( a<10 && a>5)
```

以上实例中`a<10`与`a>5`是使用了`&&`运算符的组合表达式，第一个表达式返回了`false`，由于`&&`运算需要两个表达式都为`true`，所以如果第一个为`false`，就不再执行后面的判断(`a>5`跳过计算)，直接返回`false`。

`||`运算符只要其中一个表达式为`true`，则该组合表达式就会返回`true`。

```typescript
var a = 10 
var result = ( a>5 || a<10)
```

以上实例中`a>5`与`a<10`是使用了`||`运算符的组合表达式，第一个表达式返回了`true`，由于`||`组合运算只需要一个表达式为`true`，所以如果第一个为`true`，就不再执行后面的判断(`a<10`跳过计算)，直接返回`true`。

### 位运算符

> 位操作是程序设计中对位模式按位或二进制数的一元和二元操作。

| 运算符 | 描述       |
| ------ | ---------- |
| &      | AND        |
| ｜     | OR         |
| ～     | 取反       |
| ^      | 异或       |
| <<     | 左移       |
| >>     | 右移       |
| >>>    | 无符号右移 |

实例：

::: details 点击查看代码

```typescript
var a:number = 2;   // 二进制 10 
var b:number = 3;   // 二进制 11
    
var result;       
result = (a & b);     
console.log("(a & b) => ",result)        
result = (a | b);          
console.log("(a | b) => ",result)        
result = (a ^ b);  
console.log("(a ^ b) => ",result);   
result = (~b); 
console.log("(~b) => ",result);
result = (a << b); 
console.log("(a << b) => ",result); 
result = (a >> b); 
console.log("(a >> b) => ",result);
result = (a >>> 1); 
console.log("(a >>> 1) => ",result);
```

编译后：

```javascript
var a = 2; // 二进制 10 
var b = 3; // 二进制 11
var result;
result = (a & b);
console.log("(a & b) => ", result);
result = (a | b);
console.log("(a | b) => ", result);
result = (a ^ b);
console.log("(a ^ b) => ", result);
result = (~b);
console.log("(~b) => ", result);
result = (a << b);
console.log("(a << b) => ", result);
result = (a >> b);
console.log("(a >> b) => ", result);
result = (a >>> 1);
console.log("(a >>> 1) => ", result);
```

结果：

```javascript
(a & b) =>  2
(a | b) =>  3
(a ^ b) =>  1
(~b) =>  -4
(a << b) =>  16
(a >> b) =>  0
(a >>> 1) =>  1
```

:::

### 赋值运算符

> 赋值运算符用于给变量赋值。

| 运算符 | 描述                 |
| ------ | -------------------- |
| =      | 赋值                 |
| +=     | 先进行加运算符后赋值 |
| -=     | 先进行减运算符后赋值 |
| *=     | 先进行乘运算符后赋值 |
| /=     | 先进行除运算符后赋值 |

实例：

::: details 点击查看代码

```typescript
var a: number = 12 
var b:number = 10  
 
a = b 
console.log("a = b: "+a) 
a += b
console.log("a+=b: "+a) 
a -= b 
console.log("a-=b: "+a) 
a *= b 
console.log("a*=b: "+a) 
a /= b 
console.log("a/=b: "+a)    
a %= b 
console.log("a%=b: "+a)
```

编译:

```javascript
var a = 12;
var b = 10;
a = b;
console.log("a = b: " + a);
a += b;
console.log("a+=b: " + a);
a -= b;
console.log("a-=b: " + a);
a *= b;
console.log("a*=b: " + a);
a /= b;
console.log("a/=b: " + a);
a %= b;
```

结果：

```javascript
a = b: 10
a+=b: 20
a-=b: 10
a*=b: 100
a/=b: 10
a%=b: 0
```

:::

### 三元运算符

> 三元运算有 3 个操作数，并且需要判断布尔表达式的值。该运算符的主要是决定哪个值应该赋值给变量。

语法:

```typescript
Test ? expr1 : expr2
```

- Test - 指定的条件语句
- expr1 - 如果条件语句Test返回true则返回该值
- expr2 - 如果条件语句Test返回false则返回该值

实例：

::: details 点击查看代码

```typescript
var num:number = -2 
var result = num > 0 ? "大于 0" : "小于 0，或等于 0" 
console.log(result)
```

实例中用于判断变量是否大于0。

编译：

```javascript
var num = -2;
var result = num > 0 ? "大于 0" : "小于 0，或等于 0";
console.log(result);
```

结果：

```javascript
小于 0，或等于 0
```

:::

### 类运算符

#### typeof 运算符

> typeof 是一元运算符，返回操作数的数据类型。

实例：

::: details 点击查看代码

```typescript
var num = 12 
console.log(typeof num);   //输出结果: number
```

编译：

```javascript
var num = 12;
console.log(typeof num); //输出结果: number
```

运行：

```javascript
number
```

:::

## TS条件语句

> 条件语句用于基于不同的条件来执行不同的动作。
>
> TypeScript 条件语句是通过一条或多条语句的执行结果（True 或 False）来决定执行的代码块。

**条件语句**

> 通常在写代码时，您总是需要为不同的决定来执行不同的动作。您可以在代码中使用条件语句来完成该任务。
>
> 在 TypeScript 中，我们可使用以下条件语句：
>
> - **if 语句** - 只有当指定条件为 true 时，使用该语句来执行代码
> - **if...else 语句** - 当条件为 true 时执行代码，当条件为 false 时执行其他代码
> - **if...else if....else 语句**- 使用该语句来选择多个代码块之一来执行
> - **switch 语句** - 使用该语句来选择多个代码块之一来执行

### if语句

> TypeScript if 语句由一个布尔表达式后跟一个或多个语句组成。

语法：

```typescript
if(boolean_expression){
    # 在布尔表达式 boolean_expression 为 true 执行
}
```

如果布尔表达式 boolean_expression为 `true`，则 if 语句内的代码块将被执行。如果布尔表达式为 `false`，则 if 语句结束后的第一组代码（闭括号后）将被执行。

实例：

::: details 点击查看代码

```typescript
var  num:number = 5
if (num > 0) { 
   console.log("数字是正数") 
}
```

编译：

```javascript
var num = 5;
if (num > 0) {
    console.log("数字是正数");
}
```

结果：

```javascript
数字是正数
```

:::

### if...else语句

>一个 if 语句后可跟一个可选的 else 语句，else 语句在布尔表达式为 false 时执行。

语法：

```typescript
if(boolean_expression){
   # 在布尔表达式 boolean_expression 为 true 执行
}else{
   # 在布尔表达式 boolean_expression 为 false 执行
}
```

如果布尔表达式 boolean_expression 为 true，则执行 if 块内的代码。如果布尔表达式为 false，则执行 else 块内的代码。

实例：

::: details 点击查看代码

```typescript
var num:number = 12; 
if (num % 2==0) { 
    console.log("偶数"); 
} else {
    console.log("奇数"); 
}
```

编译：

```javascript
var num = 12;
if (num % 2 == 0) {
    console.log("偶数");
}
else {
    console.log("奇数");
}
```

运行：

```javascript
偶数
```

:::

### if...else if....else 语句

> if...else if....else 语句在执行多个判断条件的时候很有用。

语法：

```typescript
if(boolean_expression 1) {
    # 在布尔表达式 boolean_expression 1 为 true 执行
} else if( boolean_expression 2) {
    # 在布尔表达式 boolean_expression 2 为 true 执行
} else if( boolean_expression 3) {
    # 在布尔表达式 boolean_expression 3 为 true 执行
} else {
    # 布尔表达式的条件都为 false 时执行
}
```

::: warning

需要注意以下几点：

- 一个 **if** 判断语句可以有 0 或 1 个 **else** 语句，她必需在 **else..if** 语句后面。
- 一个 **if** 判断语句可以有 0 或多个 **else..if**，这些语句必需在 **else** 之前。
- 一旦执行了 **else..if** 内的代码，后面的 **else..if** 或 **else** 将不再执行。

:::

实例：

::: details 点击查看代码

```typescript
var num:number = 2 
if(num > 0) { 
    console.log(num+" 是正数") 
} else if(num < 0) { 
    console.log(num+" 是负数") 
} else { 
    console.log(num+" 不是正数也不是负数") 
}
```

编译：

```javascript
var num = 2;
if (num > 0) {
    console.log(num + " 是正数");
}
else if (num < 0) {
    console.log(num + " 是负数");
}
else {
    console.log(num + " 不是正数也不是负数");
}
```

运行：

```javascript
2 是正数
```

:::

## TS循环

> 有的时候，我们可能需要多次执行同一块代码。一般情况下，语句是按顺序执行的：函数中的第一个语句先执行，接着是第二个语句，依此类推。

### for循环

> TypeScript for 循环用于多次执行一个语句序列，简化管理循环变量的代码。

语法：

```typescript
for ( init; condition; increment ){
    statement(s);
}
```

::: tip

下面是 for 循环的控制流程解析：

1. **init** 会首先被执行，且只会执行一次。这一步允许您声明并初始化任何循环控制变量。您也可以不在这里写任何语句，只要有一个分号出现即可。
2. 接下来，会判断 **condition**。如果为 true，则执行循环主体。如果为 false，则不执行循环主体，且控制流会跳转到紧接着 for 循环的下一条语句。
3. 在执行完 for 循环主体后，控制流会跳回上面的 **increment** 语句。该语句允许您更新循环控制变量。该语句可以留空，只要在条件后有一个分号出现即可。
4. 条件再次被判断。如果为 true，则执行循环，这个过程会不断重复（循环主体，然后增加步值，再然后重新判断条件）。在条件变为 false 时，for 循环终止。

在这里，statement(s) 可以是一个单独的语句，也可以是几个语句组成的代码块。

condition 可以是任意的表达式，当条件为 true 时执行循环，当条件为 false 时，退出循环。

:::

实例：

::: details 点击查看代码

```typescript
var num:number = 5; 
var i:number; 
var factorial = 1; 
 
for(i = num;i>=1;i--) {
   factorial *= i;
}
console.log(factorial)
```

编译：

```javascript
var num = 5;
var i;
var factorial = 1;
for (i = num; i >= 1; i--) {
    factorial *= i;
}
console.log(factorial);
```

结果：

```javascript
120
```

:::

### for...in 循环

> for...in 语句用于一组值的集合或列表进行迭代输出。

语法：

```typescript
for (var val in list) { 
    //语句 
}
```

实例：

::: details 点击查看代码

```typescript
var j:any; 
var n:any = "a b c" 
 
for(j in n) {
    console.log(n[j])  
}
```

编译：

```javascript
var j;
var n = "a b c";
for (j in n) {
    console.log(n[j]);
}
```

结果：

```javascript
a
b
c
```

:::

### for...of、forEach、every和some循环

> 此外，TypeScript 还支持 for…of 、forEach、every 和 some 循环。
>
> for...of 语句创建一个循环来迭代可迭代的对象。在 ES6 中引入的 for...of 循环，以替代 for...in 和 forEach() ，并支持新的迭代协议。for...of 允许你遍历 Arrays（数组）, Strings（字符串）, Maps（映射）, Sets（集合）等可迭代的数据结构等。

#### TypeScript for...of 循环

```typescript
let someArray = [1, "string", false];
 
for (let entry of someArray) {
    console.log(entry); // 1, "string", false
}
```

forEach、every 和 some 是 JavaScript 的循环语法，TypeScript 作为 JavaScript 的语法超集，当然默认也是支持的。

因为 forEach 在 iteration 中是无法返回的，所以可以使用 every 和 some 来取代 forEach。

#### TypeScript forEach 循环

```typescript
let list = [4, 5, 6];
list.forEach((val, idx, array) => {
    // val: 当前值
    // idx：当前index
    // array: Array
});
```

#### TypeScript every 循环

```typescript
let list = [4, 5, 6];
list.every((val, idx, array) => {
    // val: 当前值
    // idx：当前index
    // array: Array
    return true; // Continues
    // Return false will quit the iteration
});
```

### whild 循环

> while 语句在给定条件为 true 时，重复执行语句或语句组。循环主体执行之前会先测试条件。

语法：

```typescript
while(condition)
{
   statement(s);
}
```

在这里，statement(s) 可以是一个单独的语句，也可以是几个语句组成的代码块。

condition 可以是任意的表达式，当条件为 true 时执行循环。 当条件为 false 时，程序流将退出循环。

实例：

::: details 点击查看代码

```typescript
var num:number = 5; 
var factorial:number = 1; 
 
while(num >=1) { 
    factorial = factorial * num; 
    num--; 
} 
console.log("5 的阶乘为："+factorial);
```

编译：

```javascript
var num = 5;
var factorial = 1;
while (num >= 1) {
    factorial = factorial * num;
    num--;
}
console.log("5 的阶乘为：" + factorial);
```

运行：

```javascript
5 的阶乘为：120
```

:::

### do...while循环

> 不像 **for** 和 **while** 循环，它们是在循环头部测试循环条件。**do...while** 循环是在循环的尾部检查它的条件。

语法：

```typescript
do
{
   statement(s);
}while( condition );
```

::: tip

请注意，条件表达式出现在循环的尾部，所以循环中的 statement(s) 会在条件被测试之前至少执行一次。

如果条件为 true，控制流会跳转回上面的 do，然后重新执行循环中的 statement(s)。这个过程会不断重复，直到给定条件变为 false 为止。

:::

实例：

::: details 点击查看代码

```typescript
var n:number = 10;
do { 
    console.log(n); 
    n--; 
} while(n>=0);
```

编译：

```javascript
var num = 5;
var n = 10;
do {
    console.log(n);
    n--;
} while (n >= 0);
```

运行：

```javascript
10
9
8
7
6
5
4
3
2
1
0
```

:::

### break 语句

> `break` 语句有以下两种用法：
>
> 1. 当 `break` 语句出现在一个循环内时，循环会立即终止，且程序流将继续执行紧接着循环的下一条语句。
> 2. 它可用于终止 `switch` 语句中的一个` case`。
>
> 如果您使用的是嵌套循环（即一个循环内嵌套另一个循环），`break `语句会停止执行最内层的循环，然后开始执行该块之后的下一行代码。

语法：

```typescript
break;
```

实例：

::: details 点击查看代码

```typescript
var i:number = 1 
while(i<=10) { 
    if (i % 5 == 0) {   
        console.log ("在 1~10 之间第一个被 5 整除的数为 : "+i) 
        break     // 找到一个后退出循环
    } 
    i++ 
}  // 输出 5 然后程序执行结束
```

编译：

```javascript
var i = 1;
while (i <= 10) {
    if (i % 5 == 0) {
        console.log("在 1~10 之间第一个被 5 整除的数为 : " + i);
        break; // 找到一个后退出循环
    }
    i++;
} // 输出 5 然后程序执行结束
```

运行：

```javascript
在 1~10 之间第一个被 5 整除的数为 : 5
```

:::

### continue 语句

> `continue` 语句有点像 `break` 语句。但它不是强制终止，`continue` 会跳过当前循环中的代码，强迫开始下一次循环。
>
> 对于` for` 循环，`continue` 语句执行后自增语句仍然会执行。对于 `while` 和 `do...while` 循环，`continue` 语句重新执行条件判断语句。

语法：

```typescript
continue;
```

实例：

::: details 点击查看代码

```typescript
var num:number = 0
var count:number = 0;
 
for(num=0;num<=20;num++) {
    if (num % 2==0) {
        continue
    }
    count++
}
console.log ("0 ~20 之间的奇数个数为: "+count)    //输出10个偶数
```

编译：

```javascript
var num = 0;
var count = 0;
for (num = 0; num <= 20; num++) {
    if (num % 2 == 0) {
        continue;
    }
    count++;
}
console.log("0 ~20 之间的奇数个数为: " + count); //输出 10
```

运行：

```javascript
0 ~20 之间的奇数个数为: 10
```

:::

### 无限循环

> 无限循环就是一直在运行不会停止的循环。 `for` 和` while` 循环都可以创建无限循环。

for 创建无限循环语法：

```typescript
for(;;) { 
   // 语句
}
```

实例：

```typescript
for(;;) { 
   console.log("这段代码会不停的执行") 
}
```

while 创建无限循环语法：

```typescript
while(true) { 
   // 语句
} 
```

实例：

```typescript
while(true) { 
   console.log("这段代码会不停的执行") 
}
```

## TS函数

> 函数是一组一起执行一个任务的语句。
>
> 您可以把代码划分到不同的函数中。如何划分代码到不同的函数中是由您来决定的，但在逻辑上，划分通常是根据每个函数执行一个特定的任务来进行的。
>
> 函数声明告诉编译器函数的名称、返回类型和参数。函数定义提供了函数的实际主体。

### 函数的定义

> 函数就是包裹在花括号中的代码块，前面使用了关键词`function`：

语法：

```typescript
function function_name()
{
    // 执行代码
}
```

实例：

```typescript
function () {   
    // 函数定义
    console.log("调用函数") 
}
```

### 调用函数

> 函数只有通过调用才可以执行函数内的代码。

语法：

```typescript
function_name()
```

实例：

```typescript
function test() {   // 函数定义
    console.log("调用函数") 
} 
test()              // 调用函数
```

### 函数的返回值

> 有时，我们会希望函数将执行的结果返回到调用它的地方。
>
> 通过使用`return`语句就可以实现。
>
> 在使用`return`语句时，函数会停止执行，并返回指定的值。

语法：

```typescript
function function_name():return_type { 
    // 语句
    return value; 
}
```

- `return_type`是返回值的类型。
- `return`关键词后跟着要返回的结果。
- 一般情况下，一个函数只有一个`return`语句。
- 返回值的类型需要与函数定义的返回类型(return_type)一致。

实例：

::: details 点击查看代码

```typescript
// 函数定义
function greet():string { // 返回一个字符串
    return "Hello World" 
} 
 
function caller() { 
    var msg = greet() // 调用 greet() 函数 
    console.log(msg) 
} 
 
// 调用函数
caller()
```

- 实例中定义了函数 `greet()`，返回值的类型为 `string`。
- `greet()` 函数通过`return`语句返回给调用它的地方，即变量 `msg`，之后输出该返回值。

编译：

```javascript
// 函数定义
function greet() {
    return "Hello World";
}
function caller() {
    var msg = greet(); // 调用 greet() 函数 
    console.log(msg);
}
// 调用函数
caller();
```

:::

### 带参数函数

> 在调用函数时，您可以向其传递值，这些值被称为参数。
>
> 这些参数可以在函数中使用。
>
> 您可以向函数发送多个参数，每个参数使用逗号 `,` 分隔：

语法：

```typescript
function func_name( param1 [:datatype], param2 [:datatype]) {   
}
```

- `param1`、`param2` 为参数名。
- `datatype` 为参数类型。

实例：

::: details 点击查看代码

```typescript
function add(x: number, y: number): number {
    return x + y;
}
console.log(add(1,2))
```

- 实例中定义了函数 *add()*，返回值的类型为 number。
- *add()* 函数中定义了两个 number 类型的参数，函数内将两个参数相加并返回。

编译：

```javascript
function add(x, y) {
    return x + y;
}
console.log(add(1, 2));
```

运行：

```javascript
3
```

:::

### 可选参数和默认参数

#### 可选参数

>在 TypeScript 函数里，如果我们定义了参数，则我们必须传入这些参数，除非将这些参数设置为可选，可选参数使用问号标识` ？`。

实例：

::: details 点击查看代码

```typescript
function buildName(firstName: string, lastName: string) {
    return firstName + " " + lastName;
}
 
let result1 = buildName("Bob");                  
// 错误，缺少参数
let result2 = buildName("Bob", "Adams", "Sr.");  
// 错误，参数太多了
let result3 = buildName("Bob", "Adams");         
// 正确
```

以下实例，我们将lastName设置为`可选参数`：

```typescript
function buildName(firstName: string, lastName?: string) {
    if (lastName)
        return firstName + " " + lastName;
    else
        return firstName;
}
 
let result1 = buildName("Bob");  
// 正确
let result2 = buildName("Bob", "Adams", "Sr.");  
// 错误，参数太多了
let result3 = buildName("Bob", "Adams");  
// 正确
```

可选参数必须跟在必需参数后面。 如果上例我们想让 firstName 是可选的，lastName 必选，那么就要调整它们的位置，把 firstName 放在后面。

如果都是可选参数就没关系。

:::

#### 默认参数

> 我们也可以设置参数的默认值，这样在调用函数的时候，如果不传入该参数的值，则使用默认参数

语法：

```typescript
function function_name(param1[:type],param2[:type] = default_value) { 
}
```

::: warning
参数不能同时设置为可选和默认。
:::

实例：

::: details 点击查看代码

> 以下实例函数的参数` rate` 设置了默认值为` 0.50`，调用该函数时如果未传入参数则使用该默认值

```typescript
function calculate_discount(price:number,rate:number = 0.50) { 
    var discount = price * rate; 
    console.log("计算结果: ",discount); 
} 
calculate_discount(1000) 
calculate_discount(1000,0.30)
```

编译：

```javascript
function calculate_discount(price, rate) {
    if (rate === void 0) { rate = 0.50; }
    var discount = price * rate;
    console.log("计算结果: ", discount);
}
calculate_discount(1000);
calculate_discount(1000, 0.30);
```

结果：

```javascript
计算结果:  500
计算结果:  300
```

:::

#### 剩余参数

> 有一种情况，我们不知道要向函数传入多少个参数，这时候我们就可以使用剩余参数来定义。

::: warning
剩余参数语法允许我们将一个不确定数量的参数作为一个数组传入。
:::

```typescript
function buildName(firstName: string, ...restOfName: string[]) {
    return firstName + " " + restOfName.join(" ");
}
  
let employeeName = buildName("Joseph", "Samuel", "Lucas", "MacKinzie");
```

函数的最后一个命名参数 restOfName 以 `...` 为前缀，它将成为一个由剩余参数组成的数组，索引值从0（包括）到 restOfName.length（不包括）。

实例：

::: details 点击查看代码

```typescript
function addNumbers(...nums:number[]) {  
    var i;   
    var sum:number = 0; 
    
    for(i = 0;i<nums.length;i++) { 
       sum = sum + nums[i]; 
    } 
    console.log("和为：",sum) 
 } 
 addNumbers(1,2,3) 
 addNumbers(10,10,10,10,10)
```

编译：

```javascript
function addNumbers() {
    var nums = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        nums[_i] = arguments[_i];
    }
    var i;
    var sum = 0;
    for (i = 0; i < nums.length; i++) {
        sum = sum + nums[i];
    }
    console.log("和为：", sum);
}
addNumbers(1, 2, 3);
addNumbers(10, 10, 10, 10, 10);
```

结果：

```javascript
和为： 6
和为： 50
```

:::

#### 匿名函数

> 匿名函数是一个没有函数名的函数。
>
> 匿名函数在程序运行时动态声明，除了没有函数名外，其他的与标准函数一样。
>
> 我们可以将匿名函数赋值给一个变量，这种表达式就成为函数表达式。

语法：

```typescript
var res = function( [arguments] ) { ... }
```

实例：

> 不带参数匿名函数

::: details 点击查看代码

```typescript
var msg = function() { 
    return "hello world";  
} 
console.log(msg())
```

编译：

```javascript
var msg = function () {
    return "hello world";
};
console.log(msg());
```

结果：

```javascript
hello world
```

:::

实例：

> 带参数匿名函数

::: details 点击查看代码

```typescript
var res = function(a:number,b:number) { 
    return a*b;  
}; 
console.log(res(12,2))
```

编译：

```javascript
var res = function (a, b) {
    return a * b;
};
console.log(res(12, 2));
```

结果：

```javascript
24
```

:::

#### 匿名函数的自调用

> 匿名函数自调用在函数后使用 () 即可：

实例：

::: details 点击查看代码

```typescript
(function () { 
    var x = "Hello!!";   
    console.log(x)     
 })()
```

编译：

```javascript
(function () { 
    var x = "Hello!!";   
    console.log(x)    
})()
```

结果：

```javascript
Hello!!
```

:::

#### 构造函数

> TypeScript 也支持使用 JavaScript 内置的构造函数 Function() 来定义函数

语法：

```typescript
var res = new Function ([arg1[, arg2[, ...argN]],] functionBody)
```

::: tip

参数说明：

- **arg1, arg2, ... argN**：参数列表。
- **functionBody**：一个含有包括函数定义的 JavaScript 语句的字符串。

:::

实例：

::: details 点击查看代码

```typescript
var myFunction = new Function("a", "b", "return a * b"); 
var x = myFunction(4, 3); 
console.log(x);
```

编译：

```javascript
var myFunction = new Function("a", "b", "return a * b"); 
var x = myFunction(4, 3); 
console.log(x);
```

结果：

```javascript
12
```

:::

#### 递归函数

> 递归函数即在函数内调用函数本身。

实例：

::: details 点击查看代码

```typescript
function factorial(number) {
    if (number <= 0) {         // 停止执行
        return 1; 
    } else {     
        return (number * factorial(number - 1));     
      // 调用自身
    } 
}; 
console.log(factorial(6));      // 输出 720
```

编译：

```javascript
function factorial(number) {
    if (number <= 0) { // 停止执行
        return 1;
    }
    else {
        return (number * factorial(number - 1)); // 调用自身
    }
}
;
console.log(factorial(6)); // 输出 720
```

结果：

```javascript
720
```

:::

#### Lambda函数

> Lambda 函数也称之为箭头函数。
>
> 箭头函数表达式的语法比函数表达式更短。

语法：

```typescript
( [param1, parma2,…param n] )=>statement;
```

实例：

::: details 点击查看代码

```typescript
var foo = (x:number)=>10 + x 
console.log(foo(100))      //输出结果为 110
```

编译：

```javascript
var foo = function (x) { return 10 + x; };
console.log(foo(100)); //输出结果为 110
```

结果：

```javascript
110
```

:::

#### 函数重载

> 重载是方法名字相同，而参数不同，返回类型可以相同也可以不同。
>
> 每个重载的方法（或者构造函数）都必须有一个独一无二的参数类型列表。

参数类型不同：

```typescript
function disp(string):void; 
function disp(number):void;
```

参数数量不同：

```typescript
function disp(n1:number):void; 
function disp(x:number,y:number):void;
```

参数类型顺序不同：

```typescript
function disp(n1:number,s1:string):void; 
function disp(s:string,n:number):void;
```

如果参数类型不同，则参数类型应设置为` any`。

参数数量不同你可以将不同的参数设置为可选。

实例：

::: details 点击查看代码

```typescript
function disp(s1:string):void; 
function disp(n1:number,s1:string):void; 
 
function disp(x:any,y?:any):void { 
    console.log(x); 
    console.log(y); 
} 
disp("abc") 
disp(1,"xyz");
```

编译：

```javascript
function disp(x, y) {
    console.log(x);
    console.log(y);
}
disp("abc");
disp(1, "xyz");
```

结果：

```javascript
abc
undefined
1
xyz
```

:::

## TS Number

> TypeScript 与 JavaScript 类似，支持 Number 对象。
>
> Number 对象是原始数值的包装对象。

语法：

```typescript
var num = new Number(value);
```

::: warning
**注意：** 如果一个参数值不能转换为一个数字将返回 NaN (非数字值)。
:::

| 序号              | 描述                               |
| ----------------- | ---------------------------------- |
| MAX_VALUE         | 表示最大值                         |
| MIN_VALUE         | 表示最小值                         |
| NaN               | 非数字值                           |
| NEGATIVE_INFINITY | -∞                                 |
| POSITIVE_INFINITY | +∞                                 |
| rototype          | Number对象的静态属性               |
| constructor       | 返回对创建此对象的Number函数的引用 |

实例：

::: details 点击查看代码

```typescript
console.log("TypeScript Number 属性: "); 
console.log("最大值为: " + Number.MAX_VALUE); 
console.log("最小值为: " + Number.MIN_VALUE); 
console.log("负无穷大: " + Number.NEGATIVE_INFINITY); 
console.log("正无穷大:" + Number.POSITIVE_INFINITY);
```

编译：

```javascript
console.log("TypeScript Number 属性: ");
console.log("最大值为: " + Number.MAX_VALUE);
console.log("最小值为: " + Number.MIN_VALUE);
console.log("负无穷大: " + Number.NEGATIVE_INFINITY);
console.log("正无穷大:" + Number.POSITIVE_INFINITY);
```

结果：

```javascript
TypeScript Number 属性:
最大值为: 1.7976931348623157e+308
最小值为: 5e-324
负无穷大: -Infinity
正无穷大:Infinity
```

#### NaN 实例

```typescript
var month = 0 
if( month<=0 || month >12) { 
    month = Number.NaN 
    console.log("月份是："+ month) 
} else { 
    console.log("输入月份数值正确。") 
}
```

编译：

```javascript
var month = 0;
if (month <= 0 || month > 12) {
    month = Number.NaN;
    console.log("月份是：" + month);
}
else {
    console.log("输入月份数值正确。");
}
```

结果：

```javascript
月份是：NaN
```

### prototype 实例

```typescript
function employee(id:number,name:string) { 
    this.id = id 
    this.name = name 
} 
 
var emp = new employee(123,"admin") 
employee.prototype.email = "admin@runoob.com" 
 
console.log("员工号: "+emp.id) 
console.log("员工姓名: "+emp.name) 
console.log("员工邮箱: "+emp.email)
```

编译：

```javascript
function employee(id, name) {
    this.id = id;
    this.name = name;
}
var emp = new employee(123, "admin");
employee.prototype.email = "admin@runoob.com";
console.log("员工号: " + emp.id);
console.log("员工姓名: " + emp.name);
console.log("员工邮箱: " + emp.email);
```

结果：

```javascript
员工号: 123
员工姓名: admin
员工邮箱: admin@runoob.com
```

:::
