# Python进阶

## Pyhon的函数参数传递

先看两个例子：

```python
a = 1
def fun(a):
  	a = 2
fun(a)
print a # 1
```

```python
a = []
def fun(a):
  	a.append(1)
fun(a)
print a # 1
```

所有的变量都可以理解是内存中一个对象“引用”

当一个引用传递给函数的时候，函数会自动复制一份引用，这个函数里的引用和外边的引用没有半毛关系。所以第一个例子函数把引用指向了一个不可变的对象，当函数返回的时候，外面的引用没半毛感觉，而第二个例子就不一样了，函数内的引用指向的是可变对象，对它的操作和定位指针地址一样，在内存里进行修改。

## @staticmethod和@classmethod

Python 其实有3个方法

- 静态方法（staticmethod)
- 类方法（classmethod）
- 实例方法

```python
def foo(x):
    print("executing foo(%s)" % (x))


class A(object):
    def foo(self, x):
        print("executing foo(%s,%s)" % (cls, x))

    @classmethod
    def class_foo(cls, x):
        print("executing class_foo(%s,%s)" % (cls, x))

    @staticmethod
    def static_foo(x):
        print("executing static_foo(%s)" % x)


a = A()
```

> 这里我们先理解下函数里面的self和cls.这个self和cls是对类或者实例的绑定，对于一般的函数来说我们可以这么调用`foo(x)`,这个函数就是最常见的，它的工作跟任何东西(类，实例)无关，对于实例方法，我们知道在类里每次定义方法的时候都需要绑定这个实例，就是foo(self,x)，因为实例方法的调用离不开实例，我们需要把实例自己传给函数，调用的时候是这样的`a.foo(x)`(其实是`foo(a,x)`)。类方法一样，只不过它传递的是类而不是实例，A.class_foo(x)。注意这里self和cls可以替代别的参数，但是python的约定是这俩
>
> 对于静态方法其实和普通方法一样，不需要对谁进行绑定，唯一的区别是调用的时候需要使用`a.static_foo(x)`或者`A.static_foo(x)`来调用

| \       | 实例方法 | 类方法         | 静态方法        |
| ------- | -------- | -------------- | --------------- |
| a = A() | a.foo(x) | a.class_foo(x) | a.static_foo(x) |
| A       | 不可用   | A.class_foo(x) | A.static_foo(x) |

## 类变量和实例变量

**类变量：**

> 是可在类的所有实例之间共享的值（也就是说，它们不是单独分配给每个实例的）

**实例变量：**

> 实例化之后，每个实例单独拥有的变量

```python
class Test(object):
    num_of_instance = 0

    def __init__(self, name):
        self.name = name
        Test.num_of_instance += 1


if __name__ == '__main__':
    print(Test.num_of_instance)	# 0
    t1 = Test('jack')
    print(Test.num_of_instance)	# 1
    t2 = Test('lucy')
    print(t1.name, t1.num_of_instance)	# jack 2
    print(t2.name, t2.num_of_instance)	# lucy 2
```

> 补充例子：

```python
class Person:
    name = "aaa"


p1 = Person()
p2 = Person()
p1.name = "bbb"
print(p1.name)	# bbb
print(p2.name)	# aaa
print(Person.name)	# aaa
```

这里`p1.name = "bbb"` 是实例调用了类变量，这其实和上面第一个问题一样，就是函数传参的问题，`p1.name`一开始是指向的类变量`name="aaa"`,但是实例的作用与里面把类变量的引用改变了，就变成了一个实例变量，self.name不再引用Person的类变量name了

例子：

```python
class Person:
    name = []


p1 = Person()
p2 = Person()
p1.name.append(1)
print(p1.name)	# [1]
print(p2.name)	# [1]
print(Person.name)	# [1]
```

## Python自省

自省就是面向对象的语言所写的程序在运行时，所能知道对象的类型。简单一句就是运行时能够获得对象的类型，比如type(),dir(),getattr(),hasattr(),isintance()

```python
a = [1, 2, 3]
b = {'a': 1, 'b': 2, 'c': 3}
c = True
print(type(a), type(b), type(c))	# <class 'list'> <class 'dict'> <class 'bool'>
print(isinstance(a, list))	# True
```

## 字典推倒式

```python
d = {key: value for (key, value) in iterable}
```

举个例子：

```python
d = {key: value for key, value in zip(range(1, 11), range(1, 11))}
print(d) # {1: 1, 2: 2, 3: 3, 4: 4, 5: 5, 6: 6, 7: 7, 8: 8, 9: 9, 10: 10}
```

## Python中单下划线和双下划线

```python
class MyClass():
    def __init__(self):
        self.__superprivate = "Hello"
        self.__superprivate = ",World"


mc = MyClass()
print(mc.__superprivate)	# AttributeError: 'MyClass' object has no attribute '__superprivate'
print(mc.__dict__)	# {'_MyClass__superprivate': ',World'}
```

`__foo__`:一种约定，Python内部的名字，用来区别其他用户自定义的命名，以防冲突，就是例如`__init__()`,`__del__()`,`__call__()`这些特使方法

`_foo`:一种约定，用来指定变量私有，来指定私有变量一种方式，不能用from module import * 导入，其他方面和公有一样访问

`__foo`:这个有真正的意义：解释器用`_classname__foo`来代替这个名字，以区别和其他类相同的命名，它无法直接像共有成员一样随便访问，通过对象名._类名__xxx这样的方式可以访问。

## 字符串格式化：%和.format

.format在许多方面看起来更便利。对于`%`最烦人的是它无法同时传递一个变量和元祖:

```python
"hi there %s" % name
```

但是，如果name恰好是(1,2,3)，他将会抛出一个TypeError异常。为了保证它总是正确的，你必须这样做：

```python
"hi there %s" % (name,)   # 提供一个单元素的数组而不是一个参数
```

但是有点丑..format就没有这些问题，你给的第二个问题也是这样，.format好看多了

## 迭代器和生成器

将列表生成器中[]改成()之后数据结构是否改变？

答案：是，从列表变成生成器

```python
L = [x*x for x in range(10)]
print(L)	# [0, 1, 4, 9, 16, 25, 36, 49, 64, 81]

g = (x*x for x in range(10))
print(g)	# <generator object <genexpr> at 0x100725c10>
```

通过列表生成式，可以直接创建一个列表。但是，受内存限制，列表容量肯定有限的。而且，创建一个百万元素的列表，不仅是占用很大的内存空间，如：我们只需要访问前面的几个元素，后面大部分元素所占的空间都是浪费。因此，没有必要创建完整的列表。在python中个，我们可以采用生成器：边循环，边计算的机制。

## *args and **kwargs

用`*args`和`**kwargs`只是为了方便并没有强制使用它们

当你不确定你的函数将要传递多少参数时你可以用`*args`。例如，它可以传递任意数量的参数

```python
def print_everything(*args):
    for count, thing in enumerate(args):
        print('{0}. {1}'.format(count, thing))


print_everything('apple', 'banana', 'cabbage')

0. apple
1. banana
2. cabbage
```

相似的，`**kwargs`允许你使用没有实现定义的参数名：

```python
def table_things(**kwargs):
    for name, value in kwargs.items():
        print('{0} = {1}'.format(name, value))


table_things(apple='fruit', cabbage='vegetable')
cabbage = vegetable
apple = fruit
```

你可以混用，命名参数首先获得参数值所有的其他参数都传递给`*args`和`**kwargs`。命名参数在列表的最前端。例如：

```python
def table_things(titlestring, **kwargs)
```

`*args`和`**kwargs`可以同时在函数的定义中，但是`*args`必须在`**kwargs`前面。

当调用函数时也可以用`*`和`**`用法，例如：

```python
def print_three_things(a, b, c):
    print('a = {0},b={1},c={2}'.format(a, b, c))

mylist = ['aardvark', 'baboon', 'cat']
print_three_things(*mylist)
a = aardvark, b = baboon, c = cat
```

就像你看到的一样，它可以传递列表(或者元祖)的每一项并把它们解包，注意必须与它们在函数里的参数相吻合，当然，你可以在函数中定义或者调用时用.*

## Python中重载

函数重载主要是为了解决两个问题。

- 可变参数类型
- 可变参数个数

另外，一个基本的设计原则是，仅仅当两个函数除了参数类型和参数个数不同以外，其功能是完全相同的，此时才使用函数重载，如果两个函数的功能其实不同，那么不应当使用重载，而应当使用一个名字不同的函数。

## `__new__`和`__init__`的区别

- `__new__`是一个静态方法，而`__init__`是一个实例方法
- `__new__`方法会返回一个创建的实例，而`__init__`什么都不返回
- 只有在`__new__`返回一个cls的实例时后面的`__init__`才能被调用
- 当创建一个新实例时调用`__new__`，初始化一个实例时用`__init__`

## 单例子模式

> 单例模式是一种常用的软件设计模式。在它的核心结构中包含一个被称为单例类的特殊类。通常单例模式可以保证系统中一个实例而且该实例易于外界访问，从而方便对实例个数的控制并节约系统资源。如果希望在系统中某个类的对象只能存在一个，单例模式是最好的解决方案，
>
> `__new__()`在`__init__()`之前被调用，用于生成实例对象。利用这个方法和类的属性的特点可以实现设计模式的单例模式。单例模式是指创建唯一对象，单例模式设计的类只能实例

1、使用`__new__`方法

```python
class Singleton(object):
    def __new__(cls, *args, **kwargs):
        if not hasattr(cls, '_instance'):
            orig = super(Singleton, cls)
            cls._instance = orig.__new__(cls, *args, **kwargs)
        return cls._instance


class MyClass(Singleton):
    a = 1
```

2、共享属性

创建实例时把所有实例`__dict__`指向同一个字典，这样它们具有相同的属性和方法。

```python
class Borg(object):
    _state = {}

    def __new__(cls, *args, **kw):
        ob = super(Borg, cls).__new__(cls, *args, **kw)
        ob.__dict__ = cls._state
        return ob


class MyClass2(Borg):
    a = 1
```

3、装饰器版本

```python
def singleton(cls):
    instances = {}
    def getinstance(*args, **kw):
        if cls not in instances:
            instances[cls] = cls(*args, **kw)
        return instances[cls]


@singleton
class MyClass:
  	...
```

4、import方法

作为python的模块是天然的单例模块

```python
class My_Singleton(object):
    def foo(self):
        pass

my_singleton = My_Singleton()

from mysingleton import my_singleton

my_singleton.foo()
```

## Python中的做用域

Python中，一个变量的作用域是由在代码中被赋值的地方所决定的

当Python遇到一个变量的话他会按照这样的顺讯进行搜索：

本地作用域->当前作用域被嵌入的本地作用域->全局/模块作用域->内置作用域

## GIL线程的全局锁

线程全局锁为了保证线程安全而采取的独立线程运行的限制，说白了就是一个核只能在同一时间运行一个线程，对于io密集型的任务，python的多线程起到作用，但对于cpu密集型任务，python的多线程几乎占不到任何优势，还有可能因为争夺资源而变慢。

解决办法就是多进程和下面的协程（协程也只能单CPU，但是能减少切换代价提升性能）

## 协程

简单点说协程是进程和线程的升级版，进程和线程都面临着内核态和用户态切换问题而消耗许多切换时间，而协程就是用户控制切换的时机，不需要陷入系统的内核态。

Python里最常见的yield就是协程的思想。

## 闭包

闭包是函数时变成的重要的语法结构。闭包也是一种组织代码的结构，它同样提高了代码的可重复使用性。

当一个内嵌函数引用其外部作用域的变量，我们就会得到一个闭包，创建一个闭包必须满足以下几点：

- 必须有一个内嵌函数
- 内嵌函数必须引用外部函数中的变量
- 外部函数的返回值必须是内嵌函数

## Python里的拷贝

引用copy(),deepcopy()的区别

```python
import copy

a = [1, 2, 3, 4, ['a', 'b']]  # 原始对象

b = a  # 赋值，传对象的引用
c = copy.copy(a)  # 对象拷贝，浅拷贝
d = copy.deepcopy(a)  # 对象拷贝，深拷贝

a.append(5)  # 修改对象a
a[4].append('c')  # 修改对象a中的['a','b'] 数组对象

print('a = ', a) # a =  [1, 2, 3, 4, ['a', 'b', 'c'], 5]
print('b = ', b) # b =  [1, 2, 3, 4, ['a', 'b', 'c'], 5]
print('c = ', c) # c =  [1, 2, 3, 4, ['a', 'b', 'c']]
print('d = ', d) # d =  [1, 2, 3, 4, ['a', 'b']]
```

## Python垃圾回收机制

Python GC主要使用引用计数来跟踪和回收垃圾。在引用计数的基础上，通过“标记-清楚”解决容器对象可能产生的循环引用问题，通过“分代回收”以空间换时间的方法提高垃圾回收效率。

## Python中list的实现

```python
L = []
L.append(1)
L.append(2)
L.append(3)
print(L) # [1, 2, 3]
for e in L:
    print(e)
# 1
# 2
# 3   
```

可以看到，list是迭代的

## Python的is

is是对比地址，==是对比值

## read，readline和readlines

- read 读取整个文件
- readline 读取下一行，使用生成器的方法
- readlines 读取整个文件到一个迭代器以供我们遍历
