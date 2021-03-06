# MySQL进阶学习

## 表的连接查询方式有哪些，有什么区别？

- inner join（内连接）
  - 在两张表进行连接查询时，只保留两张表中完全匹配的结果集
- left join（左连接）
  - 在两张表进行连接查询时，会返回左表所有的行，即使在右表中没有匹配的记录
- right join（右链接）
  - 在两张表进行连接查询时，会返回右表所有的行，即使在左表中没有匹配的记录
- full join（全链接）
  - 在两张表进行连接查询时，返回左表和右表中所有没有匹配的行

## SQL 的 select语句完整的执行顺序

- from子句组装起来自不同数据源的数据
- where子句基于指定的条件对记录进行筛选
- group by 子句将数据划分为多个组
- 使用聚合函数进行计算
- 使用having 子句筛选分组
- select 计算所有的表达式
- 使用order by 对结果进行排序

## 说一下Mysql数据库存储的原理? 

> 存储过程是一个可编程的函数，它在数据库中创建并保存。它可以有SQL语句和一些特殊的控制结构组成。当希望在不同的应用程序或平台上执行相同的函数，或者封装特定功能时，存储过程非常有用的。数据库中的存储过程可以看做是对编程中面向对象方法的模拟

## 事务的特性?

- 原子性

> 所有操作要么全部成功，要么全部失败回滚

- 一致性

> 数据库从一个一致性状态变换到另一个一致性状态，也就是说事务执行之前和执行之后必须都处于一致性状态

- 隔离性

> 当多个用户并发访问数据库时，比如操作同一张表，数据库为每一个用户开启的事务，不被其它食物的操作干扰，多个事务之间要相互隔离

- 持久性

- > 事务一旦提交了，那么对数据库中的数据的改变就是永久性的，即使在数据库系统遇到故障的情况下也不会丢失提交事务的操作

  - 脏读

  - > 一个事务处理过程里读取了另一个未提交的事务中的数据

  - 不可重复读

  - > 对于数据库中的某个数据，一个事务范围内多次查询却返回了不同的数据值，这是由于查询间隔，被另一个事务修改并提交了

  - 虚读（幻读）

  - > 事务A按照一定条件进行数据读取，期间事务B插入了相同的搜索条件的新数据，事务A再次按照原先条件进行读取时，发现事务B新插入的数据，称幻读

## 数据库索引

- 聚集索引（主键索引）：在数据库里面，所有的行树都会按照主键索引进行排序
- 非聚集索引：就是给普通字段加上索引
- 联合索引：就是好几个字段组成的索引，称为联合索引

## 数据库怎么优化查询效率?

- 数据库设计方面
  - 在一些数字列上设置索引：应避免进行全表扫描，首先应考虑在涉及where或者 order by的列上设置索引
  - 避免对where子句中数组进行null值判断：否则将导致搜索引擎放弃索引搜索而使用全表搜索
  - 建立合适的索引
  - 考虑索引的个数：索引并不是越多越好，索引固然可以提高相应的select的效率，但同时降低了insert及update的效率，因为insert或update时有可能会重建索引，所以怎样建索引需要慎重考虑
  - 尽量使用数字型字段
- SQL方面
  - 应尽量避免where子句中使用`!=`或`<>`操作符，否则将引擎放弃使用索引而进行全表扫描
  - 应尽量避免在where子句中使用`or`来连接条件，否则将导致引擎放弃使用索引而进行全表扫描
  - in 和 not in 也要慎用，否则会导致全表扫描
  - 对于连续的数组，能用 between 就不要用 in 了

- 硬件调整性能

- > 扩大虚拟内存，并保证有足够的扩充的空间；把数据库服务器上的不必要服务关闭掉；把数据库服务器和主域服务器分开；把SQL数据库服务器的吞吐量调为最大；在具有一个以上处理器的机器上运行SQL

- 调整数据库

- > 若对该表查询频率比较高，则建立索引；建立索引时，想尽对该表的所有查询搜索操作。

- 使用存储过程

- > 应用程序的实现过程中，能够采用存储过程实现的对数据库的操作尽量通过存储过程来实现，因为存储过程时存放在数据库服务器上的一次性被设计、编码、测试，并被再次使用

- 应用程序结构算法

- > 建立插叙你条件索引仅仅是提高速度的前提条件，响应速度的提高还依赖于索引的使用

## 你用的Mysql是哪个引擎，各引擎之间有什么区别?

- MyISAM引擎
  - 不支持事务，不可以回滚还原
  - 适合查询以及插入为主的应用
  - 不支持外键
  - 清空整个表时，则会重建表
  - 不支持行锁
- InnoDB引擎
  - 支持事务，可以回滚还原
  - InnoDB适合频繁修改及涉及到安全性较高的应用
  - 支持外键
  - 清空整个表时，一行一行的删除
  - 支持行锁

## 提取数据库中倒数10条数据?

```sql
select * from 表名 order by id desc limit 0,10
```

## 请写出truncate和delete, drop表数据的差别?

- truncate    # 只删除数据
- delete    # 只删除数据
- drop    # 删除整个表(结构和数据)

速度上：drop>truncate>delete