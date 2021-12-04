---
categories: [后端]
date: 2021/11/12 12:45
tag: [Python,后端,接口]
---

# Fastapi学习

::: tip
![image.png](https://img2020.cnblogs.com/blog/2299022/202107/2299022-20210704210450524-1537517306.png)
FastAPI 框架，高性能，易于学习，高效编码，生产可用_
官方文档：&nbsp;[https://fastapi.tiangolo.com](https://fastapi.tiangolo.com/)
FastAPI 是一个用于构建 API 的现代、快速（高性能)的 web 框架，使用 Python 3.6+ 并基于标准的 Python 类型提示。
关键特性:

- **快速**：可与 **NodeJS** 和 **Go** 比肩的极高性能（归功于 Starlette 和 Pydantic）。[最快的 Python web 框架之一](https://fastapi.tiangolo.com/zh/#_11)。
- **高效编码**：提高功能开发速度约 200％ 至 300％。*
- **更少 bug**：减少约 40％ 的人为（开发者）导致错误。*
- **智能**：极佳的编辑器支持。处处皆可自动补全，减少调试时间。
- **简单**：设计的易于使用和学习，阅读文档的时间更短。
- **简短**：使代码重复最小化。通过不同的参数声明实现丰富功能。bug 更少。
- **健壮**：生产可用级别的代码。还有自动生成的交互式文档。
- **标准化**：基于（并完全兼容）API 的相关开放标准

# 安装FastApi：

```python
pip3 install fastapi
pip3 install unicorn
```

# 开始第一个Demo

```python
# 创建一个main.py文件

from typing import Optional

from fastapi import FastAPI

app = FastAPI()


@app.get("/")
def read_root():
    return {"Hello FastApi"}


@app.get("/items/{item_id}")
def read_item(item_id: int, q: Optional[str] = None):
    return {"item_id": item_id, "q": q}

```

## 运行服务器：

### 一、命令运行服务器：

uvicorn main:app --reload --port 8888 # 更改端口号
![image.png](https://img2020.cnblogs.com/blog/2299022/202107/2299022-20210704210450598-734864684.png)

### 二、代码运行服务器调试：

```python
if __name__ == '__main__':
    import uvicorn

    uvicorn.run("main:app", reload=True, port=5555)
```

![image.png](https://img2020.cnblogs.com/blog/2299022/202107/2299022-20210704210450681-681889731.png)

## FastApi提供交互式Api文档一：这很方便我们管理自己的接口

现在访问&nbsp;[http://localhost:8000/docs](http://127.0.0.1:8000/docs)   就会生成一个Swagger文档
![image.png](https://img2020.cnblogs.com/blog/2299022/202107/2299022-20210704210450674-1708206194.png)

## FastApi提供交互式Api文档二：这很方便我们管理自己的接口

现在访问&nbsp;[http://127.0.0.1:8000/redoc](http://127.0.0.1:8000/redoc)  就会生成一个redoc文档
![image.png](https://img2020.cnblogs.com/blog/2299022/202107/2299022-20210704210450595-1548758824.png)
// todo：fastapi中何时用**Path、Query、Header/Body**


## 如果你想即「get」又「post」同时请求，你可以这么做：

```python
@app.api_route("/login", methods=("GET", "POST", "PUT"))
def login():
    """这是一个登陆接口"""
    return {"msg": "login success", "code": 200}
```

![image.png](https://img2020.cnblogs.com/blog/2299022/202107/2299022-20210704210450547-1245255746.png)

## 何时用「Form」，何时用「Body」，何时用「Header」呢

**如果你你以表单的形式传递数据，那你就应该用「Form」，看一下代码**

```python
@app.post("/login1")
def login_form(username=Form(None), password=Form(None)):
    return {"username": username, "password": password}
```

![image.png](https://img2020.cnblogs.com/blog/2299022/202107/2299022-20210704210450768-371511405.png)
**如果你你以JSON的形式传递数据，那你就应该用「Body」，看一下代码**

```python
@app.post("/login")
def login(data=Body(None)):
    return {"data": data}
```

![image.png](https://img2020.cnblogs.com/blog/2299022/202107/2299022-20210704210450556-1359851886.png)
**如果你你想传递「Header」数据，那你就应该用「Header」，看一下代码**

```python
@app.get("/user")
def user(id, num=Header(None)):
    return {"id": id, "num": num}
```

![image.png](https://img2020.cnblogs.com/blog/2299022/202107/2299022-20210704210450550-571388114.png)

## 如何定制一个返回信息，看代码

作用：就是将自己定义好的响应结果返回回来

```python
from fastapi import FastAPI
from fastapi.responses import JSONResponse

app = FastAPI()


@app.get("/user")
def user():
    return JSONResponse(content={"msg": "get user"},   # 内容
    status_code=202,  # 状态码，默认为200
    headers={"a": "b"})


if __name__ == '__main__':
    import uvicorn

    uvicorn.run("04_response:app", reload=True)
```

![image.png](https://img2020.cnblogs.com/blog/2299022/202107/2299022-20210704210450612-949726432.png)

## 如何将自己写的html网站动态加载到fastapi（jinja2模板返回Html页面）

### 我们需要安装一些依赖库

1、jinja2
```pip install jinjia2 ```
2、aiofiles
```pip install aiofiles```

### 废话不多说，看代码

```python
from fastapi import FastAPI, Request from fastapi.templating import Jinja2Templates
# 需要进入的库from starlette.staticfiles import StaticFiles
# 引入静态文件库app = FastAPI()
# 指定静态文件存放路径app.mount("/page", StaticFiles(directory="page"), name="page")# 指定html 存放目录template = Jinja2Templates("page")@app.get("/home")def home (req: Request):    return template.TemplateResponse("index.html", context={"request": req})if __name__ == '__main__':    import uvicorn    uvicorn.run("d05_templates:app", reload=True)
```

![image.png](https://img2020.cnblogs.com/blog/2299022/202107/2299022-20210704210450617-993969700.png)
**如果你的代码中有引入到css样式，你就可以向我这样，你会发现样式就被引入进来了**

### ![image.png](https://img2020.cnblogs.com/blog/2299022/202107/2299022-20210704210450857-918078377.png)如果你想自定义传参进来，你可以试试这样：

![image.png](https://img2020.cnblogs.com/blog/2299022/202107/2299022-20210704210450927-414337391.png)

### 如果你想实现这样的例子

![image.gif](https://img2020.cnblogs.com/blog/2299022/202107/2299022-20210704210450614-453011597.gif)

```python
# main.pyfrom fastapi import FastAPI, Request, Formfrom fastapi.responses import RedirectResponsefrom fastapi.templating import Jinja2Templatesapp = FastAPI()template = Jinja2Templates("pages")todos = ["写博客", "看电影", "玩游戏"]@app.get("/")async def index(req: Request):    return template.TemplateResponse("index.html", context={"request": req, "todos": todos})@app.post("/todo")async def todo(todo=Form(None)):    """处理用户发送过来的 todolist 数据"""    todos.insert(0, todo)    return RedirectResponse('/', status_code=302)if __name__ == '__main__':    import uvicorn    uvicorn.run("main:app", reload=True)
```

![image.png](https://img2020.cnblogs.com/blog/2299022/202107/2299022-20210704210450629-1438946189.png)
在这里我说一下为什么要将状态码设置为302，如果你不设置这个status_code，浏览器发送给后端的请求状态码为307，因为307的状态码是不能从post请求跳转到get请求，原因是post请求如果要跳转到get请求不通用，如果想进行跳转，需要将307更改为302。
![image.png](https://img2020.cnblogs.com/blog/2299022/202107/2299022-20210704210450621-1105676000.png)![image.png](https://img2020.cnblogs.com/blog/2299022/202107/2299022-20210704210450611-558888954.png)

```html
# index.html    <meta charset="UTF-8">    <title>Title</title><h1>待办事项</h1><div>    <form action="/todo" method="post">        <input name="todo" type="text" placeholder="请添加待办事件...">        <input type="submit" value="添加">    </form></div>    {% for todo in todos %}    <p>{{ todo }}</p>    {% endfor %}
```

![image.png](https://img2020.cnblogs.com/blog/2299022/202107/2299022-20210704210450752-450565568.png)

## 关联数据库，将数据存储化

### 第一步：我们需要安装依赖库

```pip install tortoise-orm```
```pip install aiomysq```

### 第二步：电脑需要安装mysql，安装调试过程不在赘述

以我为例：先创建一个db为fastapi的库

```sql
create database fastapi;
```

![image.png](https://img2020.cnblogs.com/blog/2299022/202107/2299022-20210704210450687-144212385.png)

### 第三步：配置数据库

```python
from tortoise.contrib.fastapi import register_tortoise# 数据库绑定register_tortoise(app,                  db_url="mysql://root:Ranyong_520@localhost:3306/fastapi",                  modules={"models": []},                  add_exception_handlers=True,                  generate_schemas=True)
```

![image.png](https://img2020.cnblogs.com/blog/2299022/202107/2299022-20210704210450652-2107100573.png)

### 实例一：将数据存储到数据库并返回给前端

```python
# d06_templates.pyfrom fastapi import FastAPI, Request, Formfrom fastapi.responses import RedirectResponsefrom fastapi.templating import Jinja2Templatesfrom tortoise.contrib.fastapi import register_tortoisefrom dao.models import Todoapp = FastAPI()template = Jinja2Templates("pages")# 数据库绑定register_tortoise(app,                  db_url="mysql://root:Ranyong_520@localhost:3306/fastapi",                  modules={"models": ['dao.models']},  # 设置模型类                  add_exception_handlers=True,                  generate_schemas=True)@app.get("/")async def index(req: Request):    # 从数据库获取 todos 的代码    # ORM,获取所有的 todos    todos = await Todo.all()  # 获取所有的todos    print(todos)    return template.TemplateResponse("index.html", context={"request": req, "todos": todos})@app.post("/todo")async def todo(content=Form(None)):    """处理用户发送过来的 todolist 数据"""    await Todo(content=content).save()    return RedirectResponse('/', status_code=302)if __name__ == '__main__':    import uvicorn    uvicorn.run("d06_templates:app", reload=True)
```

![image.png](https://img2020.cnblogs.com/blog/2299022/202107/2299022-20210704210450873-851989569.png)
然后创建一个dao的文件夹里面创建一个models的py文件

```python
from tortoise import Model, fields


class Todo(Model):
    """数据库当中的表 todo"""
    id = fields.IntField(pk=True)  # id为int类型的 pk:是将id作为主键
    content = fields.CharField(max_length=500)  # todo项里面的内容    例如:todos = ["写博客", "看电影", "玩游戏"]
    created_at = fields.DatetimeField(auto_now_add=True)  # auto_now_add 当每次插入新数据的时候会引用本地时间
    updated_at = fields.DatetimeField(auto_now=True)  # auto_now 当每次修改数据后会更新本地时间

```

![image.png](https://img2020.cnblogs.com/blog/2299022/202107/2299022-20210704210450706-526128356.png)
这时候我们来运行下代码：
![image.gif](https://img2020.cnblogs.com/blog/2299022/202107/2299022-20210704210450635-1846301692.gif)
可以发现返回了，并没有返回添加的数据，那我们再去数据库看,点击数据库更新按钮后，可以发现我们的数据已经存储到了表中表。
![image.gif](https://img2020.cnblogs.com/blog/2299022/202107/2299022-20210704210450658-625902721.gif)
![image.png](https://img2020.cnblogs.com/blog/2299022/202107/2299022-20210704210450637-77645872.png)
可以看到数据库已经存了我们提交的数据，现在我们只需要改一下index.html文件一个地方就可以解决
![image.png](https://img2020.cnblogs.com/blog/2299022/202107/2299022-20210704210450635-22672447.png)
最后效果
![image.gif](https://img2020.cnblogs.com/blog/2299022/202107/2299022-20210704210450673-1759991875.gif)