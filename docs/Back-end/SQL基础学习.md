---
date: "2022/02/18"
categories: [SQL]
tag: [数据库,SQL]
---

# SQL基础学习

前言：

> SQL是用于访问和处理数据库的标准的计算机语言。

`什么是SQL？`

- SQL指结构化查询语言
- SQL使我们有能力访问数据库
- SQL有一种ANSI[ANSI](https://baike.baidu.com/item/ANSI%E6%A0%87%E5%87%86/3127116?fr=aladdin)的标准计算机语言

`SQL能做什么？`

- SQL面向数据库执行查询
- SQL可从数据库取回数据
- SQL可在数据库中插入新的记录
- SQL可更新数据库中的数据
- SQL可从数据库删除记录
- SQL可创建新数据库
- SQL可在数据库中创建新表
- SQL可在数据库中创建存储过程
- SQL可在数据库中创建视图
- SQL可以设置表、存储过程中和视图的权限

## SQL语法

### 数据库表

> 一个数据库通常包含一个或多个表。每个表由一个名字标识。表包含带有数据的记录

| id   | LastName | FirstName | Address       |
| ---- | -------- | --------- | ------------- |
| 1    | Adams    | John      | Oxford Street |
| 2    | Bush     | George    | Fifth Avenue  |

### SQL语句

下面语句从表中选取LastName列的数据：

```sql
SELECT LastName FROM Persons
```

运行结果：

| LastName |
| -------- |
| Adams    |
| Bush     |

::: tip
注意：SQL对大小写不敏感！
:::

### SQL DML 和 DDL

可以把SQL分为两个部分：数据操作语言(**DML**)和数据定义语言(**DDL**)

SQL(结构化查询语言)是用于执行查询的语法。但是SQL语言也包含用于更新、插入和删除记录的语法。

查询和更新指令构成了 SQL 的 DML 部分：

- *SELECT* - 从数据库表中获取数据
- *UPDATE* - 更新数据库表中的数据
- *DELETE* - 从数据库表中删除数据
- *INSERT INTO* - 向数据库表中插入数据

SQL 的数据定义语言(DDL) 部分使我们有能力创建和删除表格。我们也可以定义索引(键)，规定表之间的链接，以及施加表间的约束。

SQL中最重要的DDL语句：

- *CREATE DATABASE* - 创建新数据库
- *ALTER DATABASE* - 修改数据库
- *CREATE TABLE* - 创建新表
- *ALTER TABLE* - 变更（改变）数据库表
- *DROP TABLE* - 删除表
- *CREATE INDEX* - 创建索引（搜索键）
- *DROP INDEX* - 删除索引

## SQL select

### SQL SELECT 语句

> SELECT 语句用于从表中选取数据，结果被存储在一个结果表中

#### SQL SELECT 语法

```sql
SELECT 列名称 FROM 表名称
```

以及：

```sql
SELECT * FROM 表名称
```

## SQL SELECT DISTINCT 语句

### SQL SELECT DISTINCT 语句

> 在表中，可能会包含重复值。关键字DISTINCT 用于返回唯一不同的值

```sql
SELECT DISTINCT 列名称 FROM 表名称
```

## SQL WHERE 子句

> WHERE 自居用于规定选择的标准

### WHERE 子句

```sql
SELECT 列名称 FROM 表名称 WHERE 列 运算符 值
```

运算符有一下：

| 操作符  | 描述         |
| ------- | ------------ |
| =       | 等于         |
| !=      | 不等于       |
| >       | 大于         |
| <       | 小于         |
| <=      | 小于等于     |
| >=      | 大于等于     |
| BETWEEN | 在某个范围内 |
| LIKE    | 搜索某种模式 |

举个例子：

如果只希望选取居住在城市"Beijing"的人，我们需要向SELECT语句添加WHERE子句：

```sql
SELECT * FROM Person WHERE City = 'Beijing'
```

::: tip

注意：我们在例子中的条件值周围使用的是单引号。

SQL使用单引号来环绕文本值。如果是**数值**，请不要使用引号。

:::

`文本值`

```sql
SELECT * FROM Persons WHERE FirstName='Bush'
```

`数值`

```sql
SELECT * FROM Persons WHERE Year > 1965
```

## SQL AND&OR 运算符

> AND 和 OR 运算符用于基于一个以上的条件对记录进行过滤

#### AND 和 OR 运算符

> AND 和 OR 可在 WHERE 子语句中把两个或多个条件结合起来。
>
> 如果第一个条件和第二个条件都成立，则AND运算符显示一条记录
>
> 如果第一个条件和第二个条件中只要有一个成立，则OR运算符显示一条记录

举个例子：

##### AND 运算符实例

使用 AND 来显示所有姓为 "Carter" 并且名为 "Thomas" 的人：

```sql
SELECT * FROM Persons WHERE FfrstName='Thomas' AND LastName='Carter'
```

##### OR 运算符实例

使用 OR 来显示所有姓为 "Carter" 或者名为 "Thomas" 的人：

```sql
SELECT * FROM Persons WHERE firstname='Thomas' OR lastname='Carter'
```

##### 结合 AND 和 OR 运算符

我们也可以把 AND 和 OR 结合起来（使用圆括号来组成复杂的表达式）:

```sql
SELECT * FROM Persons WHERE (FirstName='Thomas' or FirstName='William') AND LastName='Carter'
```

## SQL ORDER BY 子句

### ORDER BY 语句

- ORDER BY 语句用于根据指定的列对结果集进行排序
- ORDER BY 语句默认按照升起对记录进行排序

如果你希望按照降序对记录进行排序，可以使用 DESC 关键字

举个例子：

以字母顺序显示公司名称：

```sql
SELECT Company, OrderNumber FROM Orders ORDER BY Company
```

以字母顺序显示公司名称（Company），并以数字顺序显示顺序号（OrderNumber）：

```sql
SELECT Company,OrderNumber FROM Orders ORDER BY Company,OrderNumber
```

以逆字母顺序显示公司名称：

```sql
SELECT Company,OrderNumber FROM Orders ORDERS BY Company DESC
```

以逆字母顺序显示公司名称，并以数字顺序显示顺序号：

```sql
SELECT Company,OrderNumber FROM Orders ORDER BY Company DESC,OrderNumber ASC
```

## SQL INSERT INTO 语句

> INSERT INTO 语句用于向表格中插入新的行

### INSERT INFO 语句

```sql
INSERT INTO 表名称 VALUES(值1，值2，....)
```

我们也可以指定所要插入数据的列：

```sql
INSERT INTO table_name(列1，列2，....) VALUES(值1，值2，....)
```

举个例子：

插入新的行：

```sql
INSERT INTO Persons VALUES ('Gates','Bill','Xuanwumen 10','Beijing')
```

在指定的列中插入数据：

```sql
INSERT INTO Persons(LastName,Address) VALUES ('Wilson','Champs-Elysess')
```

## SQL UPDATE 语句

> Update 语句用于修改表中的数据

### UPDATE 语句

```sql
UPDATE 表名称 SET 列名称 = 新值 WHERE 列名称 = 某值
```

举个例子：

更新某一行的一个列

我们为 lastname 是 "Wilson" 的人添加 firstname：

```sql
UPDATE Person SET FirstName = 'Fred' WHERE LastName = 'Wilson'
```

更新某一行中的若干列

我们会修改地址（address），并添加城市名称（city）：

```sql
UPDATE Person SET Address = 'Zhongshan 23',City = 'Nanjing' WHERE LastName = 'Wilson'
```

## SQL DELETE 语句

> DELETE 语句用于删除表中的列

### DELETE 语句

```sql
DELETE FROM 表名称 WHERE 列名称 = 值
```

举个例子：

删除某行

"Fred Wilson" 会被删除：

```sql
DELETE FROM Person WHERE LastName = 'Wilson'
```

删除所有行

可以在不删除表的情况下删除所有的行。这意味着表的结构、属性和索引都是完整的：

```sql
DELETE FROM table_name
```

或者：

```sql
DELETE * FROM table_name
```

## SQL TOP 子句

> TOP 子句用于规定要返回的记录的数目。

### SQL Server 语法：

```sql
SELECT TOP number | percent column_name(s) FROM table_name
```

### MySQL 和 Oracle 中的 SQL SELECT TOP 是等价的

##### MySQL 语法

```sql
SELECT column_name(s) FROM table_name LIMIT number
```

例子：

```sql
SELECT * FROM Persons LIMIT 5
```

##### Oracle 语法

```sql
SELECT column_name(s) FROM table_name WHERE ROWNUM <= number
```

例子：

```sql
SELECT * FROM Persons WHERE ROWNUM <= 5
```

### SQL TOP 实例

表中选取头两条记录:

```sql
SELECT TOP 2 * FROM Persons
```

### SQL TOP PERCENT 实例

表中选取 50% 的记录:

```sql
SELECT TOP 50 PERCENT * FROM Persons
```

## SQL LIKE 操作符

> LIKE 操作符用于在WHERE 子句中搜索列中的指定模式

### SQL LIKE 操作符语法：

```sql
SELECT column_name(s) FROM table_name WHERE column_name LIKE pattern
```

### LIKE 操作符实例

例子1

从 "Persons" 表中选取居住在以 "N" 开始的城市里的人：

```sql
SELECT * FROM Persons WHERE City LIKE 'N%'
```

::: tip

"%"可用于定义通配符(模式中缺少的字母)

:::

例子2

从 "Persons" 表中选取居住在以 "g" 结尾的城市里的人：

```sql
SELECT * FROM Persons WHERE City LIKE '%g'
```

例子3

从 "Persons" 表中选取居住在包含 "lon" 的城市里的人：

```sql
SELECT * FROM Persons WHERE City LIKE '%lon%'
```

例子4

通过使用 NOT 关键字，我们可以从 "Persons" 表中选取居住在*不包含* "lon" 的城市里的人：

```sql
SELECT * FROM Persons WHERE City NOT LIKE '%lon%'
```

## SQL 通配符

> 在搜索数据中的数据时，SQL通配符可以替代一个或多个字符
>

| 通配符 | 描述                       |
| ------ | -------------------------- |
| %      | 代表零个或多个字符         |
| _      | 仅替代一个字符             |
| []     | 字符列中的任何单一字符     |
| [^]    | 不再字符列中的任何单一字符 |

### 使用 `%` 通配符

例子1

从 "Persons" 表中选取居住在以 "Ne" 开始的城市里的人：

```sql
SELECT * FROM Persons WHERE City LIKE 'Ne%'
```

例子2

从 "Persons" 表中选取居住在包含 "lond" 的城市里的人：

```sql
SELECT * FROM Persons WHERE City LIKE '%lond%'
```

### 使用 `_` 通配符

例子1

从 "Persons" 表中选取名字的第一个字符之后是 "eorge" 的人：

```sql
SELECT * FROM Persons WHERE FirstName LIKE '_enorge'
```

例子2

从 "Persons" 表中选取的这条记录的姓氏以 "C" 开头，然后是一个任意字符，然后是 "r"，然后是一个任意字符，然后是 "er"：

```sql
SELECT * FROM Persons WHERE LastName LIKE 'C_r_er'
```

### 使用 `[]` 通配符

例子1

从 "Persons" 表中选取居住的城市以 "A" 或 "L" 或 "N" 开头的人：

```sql
SELECT * FROM Persons WHERE City LIKE '[ALN]%'
```

例子2

从 "Persons" 表中选取居住的城市*不以* "A" 或 "L" 或 "N" 开头的人：

```sql
SELECT * FROM Persons WHERE City LIKE '[!ALN]%'
```

## SQL IN 操作符

> IN 操作符允许我们在 WHERE 子句中规定多个值

### SQL IN 语法

```sql
SELECT column_name(s) FROm table_name WHERE column_name IN (value1,value2,....)
```

### IN 操作符实例

们希望从"Persons"表中选取姓氏为 Adams 和 Carter 的人：

```sql
SELECT * FROM Persons WHERE LastName IN ('Adams','Carter')
```

## SQL BETWEEN 操作符

> 操作符 BETWEEN...AND 会选取两个值之间的数据范围。这些值可以时数值、文本或者日期

### SQL BETWEEN 语法

```sql
SELECT column_name(s) FROM table_name WHERE column_name BETWEEN value AND value2
```

例子1

以最后名字顺序显示介于 "Adams"（包括）和 "Carter"（不包括）之间的人，请使用下面的 SQL：

```sql
SELECT * FROM Persons WHERE LastName BETWEEN 'Adams' AND 'Carter'
```

例子2

如需使用上面的例子显示范围之外的人，请使用 NOT 操作符：

```sql
SELECT * FROM Persons WHERE LastName NOT BETWEEN 'Adams' AND 'Carter'
```

## SQL Alias

> 通过使用SQL，可以为列名称和表名称指定别名

### SQL Alias

```sql
SELECT column_name(s)  FROM table_name1 AS alias_name 
```

### 列的SQL Alias 语法

```sql
SELECT column_name AS alias_name FROM table_name
```

### Alias 实例：使用表明称别名

假设我们有两个表分别是："Persons" 和 "Product_Orders"。我们分别为它们指定别名 "p" 和 "po"。现在，我们希望列出尾字为 "John",首字为" Adams" 的所有定单。

```sql
SELECT po.OrderID,p.LastName,p.FirstName FROM Persons AS p,Product_Orders AS po WHERE p.LastName='Adams' AND p.FirstName='John'
```

## SQL JOIN

> SQL join 用于更具两个或多个表中的列之间的关系，从这些表中查询数据。

### Join和Key

>有时为了得到完整的结果，我们需要从两个或更多的表中获取结果，我们就需要执行 join
>
>数据库中的表可以通过键将彼此联系起来，主键是一个列，在这个列中的每一行的值都是唯一的，这样做的目的是在不重复的每个表中的所有数据的情况下，把表间的数据交叉捆绑在一起。

### 引用两个表

我们可以通过引用两个表的方式，从两个表中获取数据：

```sql
SELECT Persons.LastName,Persons.FirstName,Orders.OrderNo FROM Persons,Orders WHERE Persons.Id_P = Orders.Id_P
```

### SQL JOIN - 使用Join

除了上面的方法，我们也可以使用关键词JOIN来从两个表中获取数据

如果我们希望列出所有人的定购，可以使用下面的 SELECT 语句：

```sql
SELECT Persons.LastName,Persons.FirstName,Orders.OrderNo FROM Persons INNER JOIN Orders ON Persons.Id_P = Orders.Id_P ORDER BY Persons.LastName
```

### 不同的 SQL JOIN

- JOIN ： 如果表中有至少一个匹配，则返回行
- LEFT JOIN 即使右表中没有匹配，也从左表返回所有的行
- RIGHT JOIN 即使左表中没有匹配，也从右表返回所有的行
- FULL JOIN 只要其中一个表中存在匹配，就返回行

## SQL INNER JOIN 关键字

> 在表中存在至少一个匹配时，INNER JOIN 关键字返回行

"Persons"表

| Id_P | LastName | FirstName | Address        | City     |
| ---- | -------- | --------- | -------------- | -------- |
| 1    | Adams    | John      | Oxford Street  | London   |
| 2    | Bush     | George    | Fifth Avenue   | New York |
| 3    | Carter   | Thomas    | Changan Street | Beijing  |

"Orders"表

| Id_O | OrderNo |
| ---- | ------- |
| 1    | 77895   |
| 2    | 44678   |
| 3    | 22456   |
| 4    | 24562   |
| 5    | 34764   |

### INNER JOIN 关键字语法

```sql
SELECT column)name(s) FROM table_name1 INNER JOIN table_name2 ON table_name1.column_name=table_name2.column_name
```

`INNER JOIN 与 JOIN是相同的`

### 内连接（INNER JOIN）实例

现在，我们希望列出所有人的定购。您可以使用下面的 SELECT 语句：

```sql
SELECT Persons.LastName,Persons.FirstName,Orders.OrderNo FROM Persons INNER JOIN Orders ON Persons.Id_P = Orders.Id_p ORDER BY Persons.LastName
```

结果集：

| LastName | FirstName | OrderNo |
| -------- | --------- | ------- |
| Adams    | John      | 22456   |
| Adams    | John      | 24562   |
| Carter   | Thomas    | 77895   |

INNER JOIN 关键字在表中存在至少一个匹配时返回行。如果"Persons"中的行在"Orders"中没有匹配，就不会列出这些行。

## SQL LEFT JOIN

> LEFT JOIN 关键字会从左表（table_name1）那里返回所有的行，即使在右表（table_name2）中没有匹配的行。

### LEFT JOIN 关键字

```sql
SELECT column_name(s) FROM table_name1
FROM table_name1
LEFT JOIN table_name2
ON table_name1.column_name=table_name2.column_name
```

注释：在某些数据库中，LEFT JOIN 称为 LEFT OUTER JOIN

"Persons"表

| Id_P | LastName | FirstName | Address        | City     |
| ---- | -------- | --------- | -------------- | -------- |
| 1    | Adams    | John      | Oxford Street  | London   |
| 2    | Bush     | George    | Fifth Avenue   | New York |
| 3    | Carter   | Thomas    | Changan Street | Beijing  |

"Orders"表

| Id_O | OrderNo | Id_P |
| ---- | ------- | ---- |
| 1    | 77895   | 3    |
| 2    | 44678   | 3    |
| 3    | 22456   | 1    |
| 4    | 24562   | 1    |
| 5    | 34764   | 65   |

### 左连接(LEFT JOIN)实例

现在，我们希望列出所有的人，以及他们的定购 - 如果有的话。

您可以使用下面的 SELECT 语句：

```sql
SELECT Persons.LastName,Persons.FirstName,Orders.OrderNo
FROM Persons
LEFT JOIN Orders
ON Persons.Id_P = Orders.Id_P
ORDER BY Persons.LastName
```

结果集：

| LastName | FirstName | OrderNo |
| -------- | --------- | ------- |
| Adams    | John      | 22456   |
| Adams    | John      | 24562   |
| Carter   | Thomas    | 77895   |
| Carter   | Thomas    | 44678   |
| Bush     | George    |         |

LEFT JOIN 关键字会从左表（Persons）那里返回所有的行，即使在右表（Orders）中没有匹配的行

## SQL RIGHT JOIN 关键字

> RIGHT JOIN 关键字会右表（table_name2）那里返回所有的行，即使在左表（table_name1）中没有匹配的行

### RIGHT JOIN 关键字语法

```sql
SELECT column_name(s)
FROM table_name1
RIGHT JOIN table_name2
ON table_name1.column_name=table_name2.column_name
```

注释：在某些数据中，RIGHT JON 称为 RIGHT OUTER JOIN

"Persons"表

| Id_P | LastName | FirstName | Address        | City     |
| ---- | -------- | --------- | -------------- | -------- |
| 1    | Adams    | John      | Oxford Street  | London   |
| 2    | Bush     | George    | Fifth Avenue   | New York |
| 3    | Carter   | Thomas    | Changan Street | Beijing  |

"Orders"表

| Id_O | OrderNo | Id_P |
| ---- | ------- | ---- |
| 1    | 77895   | 3    |
| 2    | 44678   | 3    |
| 3    | 22456   | 1    |
| 4    | 24562   | 1    |
| 5    | 34764   | 65   |

### 右连接（RIGHT JOIN）实例

现在，我们希望列出所有的定单，以及定购它们的人 - 如果有的话。

您可以使用下面的 SELECT 语句：

```sql
SELECT Persons.LastName,Persons.FirstName,Orders.OrderNo
FROM Persons
RIGHT JOIN Orders
ON Persons.Id_P = Orders.Id_p
ORDER BY Persons.LastName
```

结构集：

| LastName | FirstName | OrderNo |
| -------- | --------- | ------- |
| Adams    | John      | 22456   |
| Adams    | John      | 24562   |
| Carter   | Thomas    | 77895   |
| Carter   | Thomas    | 44678   |
|          |           | 34764   |

RIGHT JOIN 关键字会从右表（Orders）那里返回所有的行，即使在左表（Persons）中没有匹配的行

## SQL FULL JOIN 关键字

> 只要其中某个表存在匹配。FULL JOIN 关键字就会返回行

### FULL JOIN 关键字

```sql
SELECT column_name(s)
FROM table_name1
FULL JOIN table_name2
ON table_name1.column_name = table_name2.column_name
```

注释：在某些数据中，FULL JOIN 称为 FULL OUTER JOIN

"Persons"表

| Id_P | LastName | FirstName | Address        | City     |
| ---- | -------- | --------- | -------------- | -------- |
| 1    | Adams    | John      | Oxford Street  | London   |
| 2    | Bush     | George    | Fifth Avenue   | New York |
| 3    | Carter   | Thomas    | Changan Street | Beijing  |

"Orders"表

| Id_O | OrderNo | Id_P |
| ---- | ------- | ---- |
| 1    | 77895   | 3    |
| 2    | 44678   | 3    |
| 3    | 22456   | 1    |
| 4    | 24562   | 1    |
| 5    | 34764   | 65   |

### 全连接（FULL JOIN）实例

现在，我们希望列出所有的人，以及他们的定单，以及所有的定单，以及定购它们的人。

您可以使用下面的 SELECT 语句：

```sql
SELECT Persons.LastName,Persons.FirstName,Orders.OrderNo
FROM Persons
FULL JOIN Orders
ON Persons.Id_P = Orders.Id_P
ORDER BY Persons.LastName
```

结果集：

| LastName | FirstName | OrderNo |
| -------- | --------- | ------- |
| Adams    | John      | 22456   |
| Adams    | John      | 24562   |
| Carter   | Thomas    | 77895   |
| Carter   | Thomas    | 44678   |
| Bush     | George    |         |
|          |           | 34764   |

FULL JOIN 关键字会从表（Persons）和右表（Orders）那里返回所有的行。如果“Persons”中的行在表“Orders”中没有匹配，或着如果“Orders”中的行在表“Persons”中的行在表“Persons”中没有匹配，这些行同样会列出。

## SQL UNION 和 UNION ALL 操作符

> UNION 操作符用于合并两个或多个 SELECT 语句的结果集
>
> 请注意，UNION 内部的 SELECT 语句必须拥有相同数量的列。列也必须拥有相似的数据类型。同时，每条 SELECT 语句中的列的顺序必须相同。

### SQL UNION 语法

```sql
SELECT column_name(s) FROM table_name1
UNION
SELECT column_name(s) FROM table_name2
```

注释：默认的。UNION 操作符选取不同的值，如果允许重复的值，请使用UNION ALL

### SQL UNION ALL 语法

```sql
SELECT column_name(s) FROM table_name1
UNION ALL
SELECT column_name(s) FROM table_name2
```

## SQL SELECT INTO 语句

> SELECT INTO 语句从一个表中选取数据，然后把数据插入另一个表中。
>
> SELECT INTO 语句常用于创建表的备份复件或者用于对记录进行存档。SELECT INTO 

### SQL SELECT INTO 语句

`可以把所有的列插入新表`：

```sql
SELECT * INTO new_table_name [IN externaldatabase]
FROM old_tablename
```

`或者只吧希望的列插入新表`：

```sql
SELECT column_name(s) INTO new_table_name [IN externaldatabase]
FROM old_tablename
```

## SQL AVG 函数

> AVG函数返回数值列出的平均值。NILL 值不包括在计算中

### SQL AVG() 语法

```sql
SELECT AVG(column_name) FROM table_name
```

### SQL AVG() 实例

我们拥有下面这个 "Orders" 表：

| O_Id | OrderDate  | OrderPrice | Customer |
| :--- | :--------- | :--------- | :------- |
| 1    | 2008/12/29 | 1000       | Bush     |
| 2    | 2008/11/23 | 1600       | Carter   |
| 3    | 2008/10/05 | 700        | Bush     |
| 4    | 2008/09/28 | 300        | Bush     |
| 5    | 2008/08/06 | 2000       | Adams    |
| 6    | 2008/07/21 | 100        | Carter   |

例子1:

现在，我们希望计算 "OrderPrice" 字段的平均值。

我们使用如下 SQL 语句：

```sql
SELECT AVG(OrderPrice) AS OrderAverage FROM Orders
```

结果集：

| OrderAverage |
| :----------- |
| 950          |

例子2:

现在，我们希望找到 OrderPrice 值高于 OrderPrice 平均值的客户。

我们使用如下 SQL 语句：

```sql
SELECT Customer FROM Orders WHERE OrderPrice>(SElECT AVG(OrderPrice) FROM Orders)
```

结果集：

| Customer |
| :------- |
| Bush     |
| Carter   |
| Adams    |

## SQL COUNT() 函数

> COUNT() 函数返回匹配指定条件的行树

### SQL COUNT() 语法

`SQL_COUNT(column_name)语法`

COUNT(column_name)函数返回指定列的值的数目(NULL不计入)

```sql
SELECT COUNT(column_name) FROM table_name
```

### SQL COUNT(*) 语法

COUNT(*) 函数返回表中的记录数：

```sql
SELECT COUNT(*) FROM table_name
```

### SQL COUNT(DISTINCT column_name)语法

COUNT(DISTINCT column_name) 函数返回指定列的不同值的数目：

```sql
SELECT COUNT(DISTINCT column_name) FROM table_name
```

### SQL COUNT(column_name)实例

我们拥有下列 "Orders" 表：

| O_Id | OrderDate  | OrderPrice | Customer |
| :--- | :--------- | :--------- | :------- |
| 1    | 2008/12/29 | 1000       | Bush     |
| 2    | 2008/11/23 | 1600       | Carter   |
| 3    | 2008/10/05 | 700        | Bush     |
| 4    | 2008/09/28 | 300        | Bush     |
| 5    | 2008/08/06 | 2000       | Adams    |
| 6    | 2008/07/21 | 100        | Carter   |

现在，我们希望计算客户 "Carter" 的订单数。

```sql
SELECT COUNT(Customer) AS CustomerNilsen FROM Orders WHERE Customer = 'Carter'
```

结果集：

| CustomerNilsen |
| :------------- |
| 2              |

### SQL COUNT(*) 实例

如果我们省略 WHERE 子句，比如这样：

```sql
SELECT COUNT(*) AS NumberOfOrders FROM Orders
```

结果集：

| NumberOfOrders |
| :------------- |
| 6              |

### SQL COUNT(DISTINCT column_name) 实例

现在，我们希望计算 "Orders" 表中不同客户的数目。

我们使用如下 SQL 语句：

```sql
SELECT COUNT(DISTINCT Customer) AS NumberOfCustomers FROM Orders
```

结果集：

| NumberOfOrders |
| :------------- |
| 6              |

## SQL FIRST() 函数

> FIRST()函数返回指定的字段中第一个记录的值
>
> tips：可使用ORDER BY 语句记录进行排序

### SQL FIRST() 语法

```sql
SELECT FIRST(column_name) FROM table_name
```

### SQL FIRST() 实例

我们拥有下面这个 "Orders" 表：

| O_Id | OrderDate  | OrderPrice | Customer |
| :--- | :--------- | :--------- | :------- |
| 1    | 2008/12/29 | 1000       | Bush     |
| 2    | 2008/11/23 | 1600       | Carter   |
| 3    | 2008/10/05 | 700        | Bush     |
| 4    | 2008/09/28 | 300        | Bush     |
| 5    | 2008/08/06 | 2000       | Adams    |
| 6    | 2008/07/21 | 100        | Carter   |

现在，我们希望查找 "OrderPrice" 列的第一个值。

```sql
SELECT FIRST(OrderPrice) AS FirstOrderPrice FROM Orders
```

结果集：

| FirstOrderPrice |
| :-------------- |
| 1000            |

## SQL LAST() 函数

> LAST() 函数返回指定的字段中最后一个记录的值
>
> tips:可使用 ORDER BY 语句来对记录进行排序

### SQL LAST() 语法

```sql
SELECT LAST(column_name) FROM table_name
```

### SQL LAST() 实例

我们拥有下面这个 "Orders" 表：

| O_Id | OrderDate  | OrderPrice | Customer |
| :--- | :--------- | :--------- | :------- |
| 1    | 2008/12/29 | 1000       | Bush     |
| 2    | 2008/11/23 | 1600       | Carter   |
| 3    | 2008/10/05 | 700        | Bush     |
| 4    | 2008/09/28 | 300        | Bush     |
| 5    | 2008/08/06 | 2000       | Adams    |
| 6    | 2008/07/21 | 100        | Carter   |

现在，我们希望查找 "OrderPrice" 列的最后一个值。

```sql
SELECT LAST(OrderPrice) AS LastOrderPrice FROM Orders
```

结果集:

| LastOrderPrice |
| :------------- |
| 100            |

## SQL MAX() 函数

> MAX() 函数返回一列中的最大值。Null 值不包括在计算中

### SQL MAX() 语法

```sql
SELECT MAX(column_name) FROM table_name
```

注释：MIN 和 MAX 也可用于文本列，以获得按字母顺序排列的最高或最低值

### SQL MAX() 实例

我们拥有下面这个 "Orders" 表：

| O_Id | OrderDate  | OrderPrice | Customer |
| :--- | :--------- | :--------- | :------- |
| 1    | 2008/12/29 | 1000       | Bush     |
| 2    | 2008/11/23 | 1600       | Carter   |
| 3    | 2008/10/05 | 700        | Bush     |
| 4    | 2008/09/28 | 300        | Bush     |
| 5    | 2008/08/06 | 2000       | Adams    |
| 6    | 2008/07/21 | 100        | Carter   |

现在，我们希望查找 "OrderPrice" 列的最大值。

```sql
SELECT MAX(OrderPrice) AS LargestOrderPrice FROM Orders
```

结果集：

| LargestOrderPrice |
| :---------------- |
| 2000              |

## SQL MIN() 函数

> MIN() 函数返回一列中最小的值。Null 值不包括在计算中

### SQL MIN() 语法

```sql
SELECT MIN(column_name) FROM table_name 
```

注释：MIN和MAX 也可用于文本列，以获得按字母顺序排列的最高或最低值

### SQL MIN() 实例

我们拥有下面这个 "Orders" 表：

| O_Id | OrderDate  | OrderPrice | Customer |
| :--- | :--------- | :--------- | :------- |
| 1    | 2008/12/29 | 1000       | Bush     |
| 2    | 2008/11/23 | 1600       | Carter   |
| 3    | 2008/10/05 | 700        | Bush     |
| 4    | 2008/09/28 | 300        | Bush     |
| 5    | 2008/08/06 | 2000       | Adams    |
| 6    | 2008/07/21 | 100        | Carter   |

现在，我们希望查找 "OrderPrice" 列的最小值。

```sql
SELECT MIN(OrderPrice) AS SmallestOrderPrice FROM Orders
```

结果集：

| SmallestOrderPrice |
| :----------------- |
| 100                |

## SQL SUM() 函数

> SUM 函数返回数值列的总数

### SQL SUM() 语法

```sql
SELECT SUM(column_name) FROM table_name
```

### SQL SUM() 实例

我们拥有下面这个 "Orders" 表：

| O_Id | OrderDate  | OrderPrice | Customer |
| :--- | :--------- | :--------- | :------- |
| 1    | 2008/12/29 | 1000       | Bush     |
| 2    | 2008/11/23 | 1600       | Carter   |
| 3    | 2008/10/05 | 700        | Bush     |
| 4    | 2008/09/28 | 300        | Bush     |
| 5    | 2008/08/06 | 2000       | Adams    |
| 6    | 2008/07/21 | 100        | Carter   |

现在，我们希望查找 "OrderPrice" 字段的总数。

```sql
SELECT SUM(OrderPrice) AS OrderTotal FROM Orders
```

结果集：

| OrderTotal |
| :--------- |
| 5700       |

## SQL GROUP BY 语句

> GROUP BY语句用于结合合计函数，根据一个或多个列对结果集进行分组

### SQL GROUP BY 语法

```sql
SELECT column_name,aggregate_function(column_name)
FROM table_name
WHERE column_name operator value
GROUP BY column_name
```

### SQL GROUP BY 实例

我们拥有下面这个 "Orders" 表：

| O_Id | OrderDate  | OrderPrice | Customer |
| :--- | :--------- | :--------- | :------- |
| 1    | 2008/12/29 | 1000       | Bush     |
| 2    | 2008/11/23 | 1600       | Carter   |
| 3    | 2008/10/05 | 700        | Bush     |
| 4    | 2008/09/28 | 300        | Bush     |
| 5    | 2008/08/06 | 2000       | Adams    |
| 6    | 2008/07/21 | 100        | Carter   |

现在，我们希望查找每个客户的总金额（总订单）。

```sql
SELECT Customer,SUM(OrderPrice) FROM Orders 
GROUP BY Customer
```

结果集：

| Customer | SUM(OrderPrice) |
| :------- | :-------------- |
| Bush     | 2000            |
| Carter   | 1700            |
| Adams    | 2000            |

## SQL HAVING 子句

> 在SQL 中增加HAVING 子句原因是，WHERE 关键字无法与合计函数一起使用

### SQL HAVING 语法

```sql
SELECT column_name,aggregate_function(column_name)
FROM table_name
WHERE column_name operator value
GROUP BY column_name
HAVING aggregate_function(column_name) operator value
```

### SQL HAVING 实例

我们拥有下面这个 "Orders" 表：

| O_Id | OrderDate  | OrderPrice | Customer |
| :--- | :--------- | :--------- | :------- |
| 1    | 2008/12/29 | 1000       | Bush     |
| 2    | 2008/11/23 | 1600       | Carter   |
| 3    | 2008/10/05 | 700        | Bush     |
| 4    | 2008/09/28 | 300        | Bush     |
| 5    | 2008/08/06 | 2000       | Adams    |
| 6    | 2008/07/21 | 100        | Carter   |

现在，我们希望查找订单总金额少于 2000 的客户。

```sql
SELECT Customer,SUM(OrderPrice) FROM Orders
GROUP BY Customer
HAVING SUM(OrderPrice) <2000
```

结果集：

| Customer | SUM(OrderPrice) |
| :------- | :-------------- |
| Carter   | 1700            |

现在我们希望查找客户 "Bush" 或 "Adams" 拥有超过 1500 的订单总金额。

```sql
SELECT Customer,SUM(Orderprice) FROM Orders
WHERE Customer='Bush' OR Customer='Adams'
GROUP BY Customer
HAVING SUM(OrderPrice) > 1500
```

结果集：

结果集：

| Customer | SUM(OrderPrice) |
| :------- | :-------------- |
| Bush     | 2000            |
| Adams    | 2000            |

## SQL UCASE() 函数

> UCASE 函数吧字段的值转为大写

### SQL UCASE() 语法

```sql
SELECT UCASE(column_name) FROM table_name
```

### SQL UCASE() 实例

我们拥有下面这个 "Persons" 表：

| Id   | LastName | FirstName | Address        | City     |
| :--- | :------- | :-------- | :------------- | :------- |
| 1    | Adams    | John      | Oxford Street  | London   |
| 2    | Bush     | George    | Fifth Avenue   | New York |
| 3    | Carter   | Thomas    | Changan Street | Beijing  |

现在，我们希望选取 "LastName" 和 "FirstName" 列的内容，然后把 "LastName" 列转换为大写。

```sql
SELECT UCASE(LastName) as LastName,FirstName FROM Persons
```

结果集：

| LastName | FirstName |
| :------- | :-------- |
| ADAMS    | John      |
| BUSH     | George    |
| CARTER   | Thomas    |

## SQL LCASE() 函数

> LCASE 函数把字段的值转为小写

### SQL LCASE() 语法

```sql
SELECT LCASE(column_name) FROM table_name
```

### SQL LCASE() 实例

我们拥有下面这个 "Persons" 表：

| Id   | LastName | FirstName | Address        | City     |
| :--- | :------- | :-------- | :------------- | :------- |
| 1    | Adams    | John      | Oxford Street  | London   |
| 2    | Bush     | George    | Fifth Avenue   | New York |
| 3    | Carter   | Thomas    | Changan Street | Beijing  |

现在，我们希望选取 "LastName" 和 "FirstName" 列的内容，然后把 "LastName" 列转换为小写。

```sql
SELECT LCASE(LastName) as LastName,FirstName FROM Persons
```

结果集：

| LastName | FirstName |
| :------- | :-------- |
| adams    | John      |
| bush     | George    |
| carter   | Thomas    |

## SQL MID() 函数

> MID 函数用于从文本段中提取字符

### SQL MID() 语法

```sql
SELECT MID(column_name,start[,length]) FROM table_name
```

| 参数        | 描述                                                        |
| :---------- | :---------------------------------------------------------- |
| column_name | 必需。要提取字符的字段。                                    |
| start       | 必需。规定开始位置（起始值是 1）。                          |
| length      | 可选。要返回的字符数。如果省略，则 MID() 函数返回剩余文本。 |

### SQL MID() 实例

我们拥有下面这个 "Persons" 表：

| Id   | LastName | FirstName | Address        | City     |
| :--- | :------- | :-------- | :------------- | :------- |
| 1    | Adams    | John      | Oxford Street  | London   |
| 2    | Bush     | George    | Fifth Avenue   | New York |
| 3    | Carter   | Thomas    | Changan Street | Beijing  |

现在，我们希望从 "City" 列中提取前 3 个字符。

```sql
SELECT MID(City,1,3) as SmailCity FROM Persons
```

结果集：

| SmallCity |
| :-------- |
| Lon       |
| New       |
| Bei       |

## SQL LEN() 函数

> LEN 函数返回文本字段中值的长度

### SQL LEN() 语法

```sql
SELECT LEN(column_name) FROM table_name
```

### SQL LEN() 实例

我们拥有下面这个 "Persons" 表：

| Id   | LastName | FirstName | Address        | City     |
| :--- | :------- | :-------- | :------------- | :------- |
| 1    | Adams    | John      | Oxford Street  | London   |
| 2    | Bush     | George    | Fifth Avenue   | New York |
| 3    | Carter   | Thomas    | Changan Street | Beijing  |

现在，我们希望取得 "City" 列中值的长度。

```sql
SELECT LEN(City) as LengthOfCity FROM Persons
```

结果集：

| LengthOfCity |
| :----------- |
| 6            |
| 8            |
| 7            |

## SQL ROUND() 函数

> ROUND 函数用于把数值字段舍入为指定的小数位数

### SQL ROUND() 语法

```sql
SELECT ROUND(column_name,decimals) FROM table_name
```

| 参数        | 描述                         |
| :---------- | :--------------------------- |
| column_name | 必需。要舍入的字段。         |
| decimals    | 必需。规定要返回的小数位数。 |

### SQL ROUND() 实例

我们拥有下面这个 "Products" 表：

| Prod_Id | ProductName | Unit   | UnitPrice |
| :------ | :---------- | :----- | :-------- |
| 1       | gold        | 1000 g | 32.35     |
| 2       | silver      | 1000 g | 11.56     |
| 3       | copper      | 1000 g | 6.85      |

现在，我们希望把名称和价格舍入为最接近的整数。

```sql
SELECT ProductName,ROUND(UnitPrice,0) as UnitPrice FROM Products
```

结果集：

| ProductName | UnitPrice |
| :---------- | :-------- |
| gold        | 32        |
| silver      | 12        |
| copper      | 7         |

## SQL NOW() 函数

> NOW 函数返回当前的日期和时间

### SQL NOW() 语法

```sql
SELECT NOW() FROM table_name
```

### SQL NOW() 实例

我们拥有下面这个 "Products" 表：

| Prod_Id | ProductName | Unit   | UnitPrice |
| :------ | :---------- | :----- | :-------- |
| 1       | gold        | 1000 g | 32.35     |
| 2       | silver      | 1000 g | 11.56     |
| 3       | copper      | 1000 g | 6.85      |

现在，我们希望显示当天的日期所对应的名称和价格。

```sql
SELECT ProductName,UnitPrice,Now() as PerDate FROM Products
```

结果集：

| ProductName | UnitPrice | PerDate                |
| :---------- | :-------- | :--------------------- |
| gold        | 32.35     | 12/29/2008 11:36:05 AM |
| silver      | 11.56     | 12/29/2008 11:36:05 AM |
| copper      | 6.85      | 12/29/2008 11:36:05 AM |

## SQL 总结

### SQL 语句

| 语句                                                    | 语法                                                         |
| :------------------------------------------------------ | :----------------------------------------------------------- |
| AND / OR                                                | SELECT column_name(s) FROM table_name WHERE condition AND\|OR condition |
| ALTER TABLE (add column)                                | ALTER TABLE table_name ADD column_name datatype              |
| ALTER TABLE (drop column)                               | ALTER TABLE table_name DROP COLUMN column_name               |
| AS (alias for column)                                   | SELECT column_name AS column_alias FROM table_name           |
| AS (alias for table)                                    | SELECT column_name FROM table_name AS table_alias            |
| BETWEEN                                                 | SELECT column_name(s) FROM table_name WHERE column_name BETWEEN value1 AND value2 |
| CREATE DATABASE                                         | CREATE DATABASE database_name                                |
| CREATE INDEX                                            | CREATE INDEX index_name ON table_name (column_name)          |
| CREATE TABLE                                            | CREATE TABLE table_name ( column_name1 data_type, column_name2 data_type, ....... ) |
| CREATE UNIQUE INDEX                                     | CREATE UNIQUE INDEX index_name ON table_name (column_name)   |
| CREATE VIEW                                             | CREATE VIEW view_name AS SELECT column_name(s) FROM table_name WHERE condition |
| DELETE FROM                                             | DELETE FROM table_name (**Note:** Deletes the entire table!!)*or*DELETE FROM table_name WHERE condition |
| DROP DATABASE                                           | DROP DATABASE database_name                                  |
| DROP INDEX                                              | DROP INDEX table_name.index_name                             |
| DROP TABLE                                              | DROP TABLE table_name                                        |
| GROUP BY                                                | SELECT column_name1,SUM(column_name2) FROM table_name GROUP BY column_name1 |
| HAVING                                                  | SELECT column_name1,SUM(column_name2) FROM table_name GROUP BY column_name1 HAVING SUM(column_name2) condition value |
| IN                                                      | SELECT column_name(s) FROM table_name WHERE column_name IN (value1,value2,..) |
| INSERT INTO                                             | INSERT INTO table_name VALUES (value1, value2,....)*or*INSERT INTO table_name (column_name1, column_name2,...) VALUES (value1, value2,....) |
| LIKE                                                    | SELECT column_name(s) FROM table_name WHERE column_name LIKE pattern |
| ORDER BY                                                | SELECT column_name(s) FROM table_name ORDER BY column_name [ASC\|DESC] |
| SELECT                                                  | SELECT column_name(s) FROM table_name                        |
| SELECT *                                                | SELECT * FROM table_name                                     |
| SELECT DISTINCT                                         | SELECT DISTINCT column_name(s) FROM table_name               |
| SELECT INTO (used to create backup copies of tables)    | SELECT * INTO new_table_name FROM original_table_name*or*SELECT column_name(s) INTO new_table_name FROM original_table_name |
| TRUNCATE TABLE (deletes only the data inside the table) | TRUNCATE TABLE table_name                                    |
| UPDATE                                                  | UPDATE table_name SET column_name=new_value [, column_name=new_value] WHERE column_name=some_value |
| WHERE                                                   | SELECT column_name(s) FROM table_name WHERE condition        |
