---
date: "2021/12/12"
categories: [Python]
tag: [Python基础]
---

# python基础学习

## python基础

### 数据类型和变量

- 整数

python可以处理任意大小的整数，包括负整数，在程序中的表示方式和数学上的写法一摸一样`100`，`-8080`，`0`等等

- 浮点数

浮点数也是小数，如`1.23`,`3.14`，`-9.01`等等

- 字符串

字符串是以单引号`'`或者`"`括起来的任意文本，比如`abc`，`xyz`等等

- 布尔值

布尔值只有`True`、`False`两种值，要么是`True`，要么是`False`

- 空值

空值是python里一个特殊的值，用`None`表示。`None`不能等于`0`，因为`0`是有意义的，而`None`是一个特殊的空值

- 常量

所谓常量就是不能变的变量，比如常用的数学常数π就是一个常量。

### 使用list和tuple

- list

> python内置的一种数据类型是列表：list。list是一种有序的集合，可以随时添加和删除其中的元素。

```python
classmates = ['Michael', 'Bob', 'Tracy']

print(classmates)

# ['Michael', 'Bob', 'Tracy']
```

上面代码中，变量`classmates`就是一个liest。用`len()`函数可以获取list元素的个数：

```python
classmates = ['Michael', 'Bob', 'Tracy']

print(len(classmates))
# 3
```

用索引来访问list中每一个位置的元素，记得索引是从`0`开始的

```python
classmates = ['Michael', 'Bob', 'Tracy']

print(classmates[0])
print(classmates[1])
print(classmates[2])

# Michael
# Bob
# Tracy
```

如果要取最后一个元素，除了计算索引位置外，还可以用`-1`做索引，直接获取最后一个元素:

```python
classmates = ['Michael', 'Bob', 'Tracy']

print(classmates[-1])
# Tracy
```

list是一个可变的有序表，所以，可以往list中追加元素到末尾：

```python
classmates = ['Michael', 'Bob', 'Tracy']
classmates.append('Adam')
print(classmates)

# ['Michael', 'Bob', 'Tracy', 'Adam']
```

也可以把元素插入到指定的位置，比如索引号为`1`的位置：

```python
classmates = ['Michael', 'Bob', 'Tracy']
classmates.insert(1, "jack")
print(classmates)

# ['Michael', 'jack', 'Bob', 'Tracy']
```

要删除list末尾的元素，用`pop()`方法：

```python
classmates = ['Michael', 'Bob', 'Tracy']
classmates.pop()
print(classmates)

# ['Michael', 'Bob']
```

要删除指定的元素，用`pop(i)`方法，其中`i`是索引位置：

```python
classmates = ['Michael', 'Bob', 'Tracy']
classmates.pop(1)
print(classmates)

# ['Michael', 'Tracy']
```

把某个元素替换成别的元素，可以直接赋值给对应的索引位置：

```python
classmates = ['Michael', 'Bob', 'Tracy']
classmates[1] = "Sarah"
print(classmates)

# ['Michael', 'Sarah', 'Tracy']
```

list里面的元素的数据类型也可以不同，比如：

```python
L = ["Apple", 123, True]
```

list元素也可以是另一个list，比如：

```python
s = ['python', 'java', ['asp', 'php'], 'scheme']
print(len(s))

# 4
```

如果一个list中一个元素也没有，就是一个空的list，它的长度为0:

```python
s = []
print(len(s))

# 0
```

- tuple

> 另一种有序列表叫元祖：tuple。tuple和list非常相似。但是tuple一旦初始化就不能修改

```python
classmates = ('Michael', 'Bob', 'Tracy')
```

现在，classmates这个tuple不能变了，它也没有了append()，insert()这样的方法。其中获取元素的方法和list是一样的，你可以正常使用`classmates[0]`，`classmates[-1]`,但不能赋值成另外的元素。

不可变的tuple有什么意义？因为tuple不可变，所以代码更安全。如果可能，能用tuple代替list就尽量用tuple。

tuple的陷阱：当你定义一个tuple时，在定义的时候，tuple的元素就必须被定下来

```python
t = (1, 2)
print(t)

# (1, 2)
```

如果要定义一个空的tuple，可以写成`()`:

```python
t = ()
print(t)

# （）
```

### 条件判断

语法：

```python
if <条件判断>：
		<执行>
```

比如，输入用户年龄，根据年龄打印不同的内容，在Python程序中，用`if`语句实现：

```python
age = 20
if age >= 18:
    print('your age is', age)
    print('adult')
    
# your age is 20
# adult    
```

根据Python的缩进规则，如果`if`语句判断是`True`，就把缩进的两行print语句执行了，否则，什么也不做。

也可以给`if`添加一个`else`语句，意思是，如果`if`判断是`False`，不要执行`if`的内容，去把`else`执行了：

语法：

```python
if <条件判断:
    <执行>
else:
    <执行>
```

```python
age = 3
if age >= 18:
    print('your age is', age)
    print('adult')
else:
    print('your age is', age)
    print('teenager')
# your age is 3
# teenager
```

`elif`是`else if`的缩写，完全可以有多个`elif`，所以`if`语句的完整形式就是：

语法：

```python
if <条件判断1>:
    <执行1>
elif <条件判断2>:
    <执行2>
elif <条件判断3>:
    <执行3>
else:
    <执行4>
```

`if`语句执行有个特点，它是从上往下判断，如果在某个判断上是`True`，把该判断对应的语句执行后，就忽略掉剩下的`elif`和`else`，所以，请测试并解释为什么下面的程序打印的是`teenager`：

```python
age = 20
if age >= 6:
    print('teenager')
elif age >= 18:
    print('adult')
else:
    print('kid')
    
# teenager
```

### 循环

>Python的循环有两种，一种是for...in循环，依次把list或tuple中的每个元素迭代出来，看例子：

```python
names = ['Michael', 'Bob', 'Tracy']
for name in names:
    print(name)
    
# Michael
# Bob
# Tracy
```

所以`for x in ...`循环就是把每个元素代入变量`x`，然后执行缩进块的语句。

再比如我们想计算1-10的整数之和，可以用一个`sum`变量做累加：

```python
sum = 0
for x in [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]:
    sum = sum + x
print(sum)

# 55
```

- break

在循环中，`break`语句可以提前退出循环。例如，本来要循环打印1～100的数字：

```python
n = 1
while n <= 100:
    print(n)
    n = n + 1
print('END')
```

上面的代码可以打印出1～100。

如果要提前结束循环，可以使用break语句：

```python
n = 1
while n <= 100:
    if n > 10:
        break
    print(n)
    n = n + 1
print('END')

```

执行上面的代码可以看到，打印出1~10后，紧接着打印`END`，程序结束。

可见`break`的作用是提前结束循环。

- continue

> 在循环过程中，也可以通过`continue`语句，跳过当前的这次循环，直接开始下一次循环。

```python
n = 0
while n < 10:
    n = n + 1
    print(n)
```

上面的程序可以打印出1～10。但是，如果我们想只打印奇数，可以用`continue`语句跳过某些循环：

```python
n = 0
while n < 10:
    n = n + 1
    if n % 2 == 0: # 如果n是偶数，执行continue语句
        continue # continue语句会直接继续下一轮循环，后续的print()语句不会执行
    print(n)
```

执行上面的代码可以看到，打印的不再是1～10，而是1，3，5，7，9。

可见`continue`的作用是提前结束本轮循环，并直接开始下一轮循环。

### 使用dict和set

- dict

> python内置了字典：dict的支持，使用键-值（key-value）存储，具有极快的查找速度。

```python
d = {'Michael': 95, 'Bob': 75, 'Tracy': 85}
print(d["Michael"])

# 95
```

要删除一个key，用pop(key)方法，对应的value也会从dict删除：

```python
d = {'Michael': 95, 'Bob': 75, 'Tracy': 85}

d.pop("Bob")
print(d)

# {'Michael': 95, 'Tracy': 85}
```

::: warning
请务必注意，dict内部存放的顺序和key放入的顺序是没有关系的。
:::

::: tip

和list比较，dict有以下几个特点：

1. 查找和插入的速度极快，不会随着key的增加而变慢；
2. 需要占用大量的内存，内存浪费多。

而list相反：

1. 查找和插入的时间随着元素的增加而增加；
2. 占用空间小，浪费内存很少。

:::

- set

> set和dict类似，也是一组key的集合，但不存储value。由于key不能重复，所以，在set中，没有重复的key。
>
> 要创建一个set，需要提供一个list作为输入集合：

```python
s = set([1, 2, 3])
print(s)

# {1, 2, 3}
```

注意，传入的参数`[1, 2, 3]`是一个list，而显示的`{1, 2, 3}`只是告诉你这个set内部有1，2，3这3个元素，显示的顺序也不表示set是有序的

重复元素在set中自动被过滤

```python
s = set([1, 2, 2, 3, 4, 3])
print(s)

# {1, 2, 3, 4}
```

通过`add(key)`方法可以添加元素到set中，可以重复添加，但不会有效果：

```python
s = set([1, 2, 2, 3, 4, 3])
s.add(2)

print(s)

# {1, 2, 3, 4}
```

通过`remove(key)`方法可以删除元素：

```python
s = set([1, 2, 2, 3, 4, 3])
s.remove(4)

print(s)

# {1, 2, 3}
```

set和dict的唯一区别仅在于没有存储对应的value，但是，set的原理和dict一样，所以，同样不可以放入可变对象，因为无法判断两个可变对象是否相等，也就无法保证set内部“不会有重复元素”。试试把list放入set，看看是否会报错。

## 函数

### 调用函数

> Python内置了很多有用的函数，我们可以直接调用。

调用`ads`函数

```python
>>> abs(100)
100
>>> abs(-20)
20
>>> abs(12.34)
12.34
```

调用`max`函数`max()`可以接受任意多个参数，并返回最大的那个：

```python
>>> max(1, 2)
2
>>> max(2, 3, 1, -5)
3
```

#### 数据类型转换

```python
>>> int('123')
123
>>> int(12.34)
12
>>> float('12.34')
12.34
>>> str(1.23)
'1.23'
>>> str(100)
'100'
>>> bool(1)
True
>>> bool('')
False

```

函数名其实就是指向一个函数对象的引用，完全可以把函数名赋给一个变量，相当于给这个函数起了一个"别名"

```python
a = abs
print(a(-1))

# 1
```

### 定义函数

> 在python中，定义一个函数要使用`def`语句，依次写出函数名、括号、括号中的参数和冒号`:`;然后，在缩进快中编译函数体，函数的返回值用`return`语句返回。

```python
def my_abs(x):
  if x >= 0:
    return x
  else:
    return -x
  
print(my_abs(-99))
# 99
```

#### 空函数

> 如果想定义一个什么事都不做的空函数，可以用`pass`语句:

```python
def nop():
  pass
```

`pass`语句什么都不做，它的作用实际上`pass`可以用来作为占位符，比如现在还没想好怎么写函数的代码，就可以先放一个`pass`,让代码先运行起来。

```python
if age >= 10:
  pass
```

缺少了`pass`,代码运行就会有语法错误。

### 函数的参数

> 定义函数的时候，我们把参数的名字和位置确定下来，函数的接口定义就完成了。对于函数的调用者来说，只需要知道如何传递正确的参数，以及函数将返回什么样的值就够了，函数内部的复杂逻辑被封装起来，调用者无需了解。

#### 位置参数

> 我们先写一个计算x2的函数

```python
def power(x):
  	return x * x
```

对于`power(x)`函数，参数`x`就是一个位置参数。

当我们调用`power`函数时，必须传入有且仅有一个参数`x`：

```python
power(5):
  # 25 
```

现在，如果我们要计算x3怎么办？可以再定义一个`power3`函数，但是如果要计算x4、x5……怎么办？我们不可能定义无限多个函数。

你也许想到了，可以把`power(x)`修改为`power(x, n)`，用来计算xn，说干就干：

```python
def power(x, n):
    s = 1
    while n > 0:
        n = n - 1
        s = s * x
    return s
```

对于这个修改后的power(x,n)函数，可以计算任意n次方：

```python
power(5,2)
# 25
```

修改后的`power(x,n)`函数有两个参数：`x`和`n`，这两个参数都是位置参数，调用函数时，传入的两个值按照位置顺序依次赋给参数`x`和`n`

#### 默认参数

> 新的power(x,n)函数定义没有问题，但是，旧的调用代码失效了，原因是我们增加了一个参数，导致旧的代码因为缺少一个参数而无法正常调用：

```python
power(5)
TypeError: power() missing 1 required positional argument: 'n'
```

python的错误信息很明确：调用函数`power()`缺少了一个位置参数`n`。

这个时候，默认参数就派上用场了，由于我们经常计算x2，所以，完全可以把第二个参数n的默认值设定为2:

```python
def power(x, n=2):
    s = 1
    while n > 0:
        n = n - 1
        s = s * x
    return s
```

这样，当我们调用`power(5)`时，相当于调用`power(5,2)`:

```python
power(5)
# 25
```

