# todo

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).

## 步骤
### 1.项目创建
vue create todoList 

创建完成之后 cd todoList 

启动 npm run serve
### 2.划分目录
todoList主要一个页面视图 

创建views文件夹 

创建Home.vue
### 3.划分组件
todoList可以作为一整个模块，也可以分为上中下三个模块

创建components文件夹，在文件夹下创建navheader,navmain,navfooter三个文件夹

分别在文件夹下创建navHeader.vue,navMain.vue,navFooter.vue文件
### 4.创建store
放入页面Home的数据方法

设置命名空间foo，state中放入初始list和donelist，getters中设置其他页面可调用的值
### 5.header组件的功能实现
  使用iview组件库中的header、menu组件,调整样式

  使用两个盒子类名分别为layout-name/layout-nav分别作为todolist的标题和输入框

  输入框中设置默认文字：添加ToDo，设置输入后清除，光标锁定

  设置双向数据绑定：输入值inputValue，在data中默认返回值为空

  绑定回车按键事件，addData，在methods里添加事件所需方法，

  该事件在子组件传入数据，发射数据至命名空间foo中，actions中使用addTodo进行接收，返回data即inputValue,传入mutations调用方法addTodo，将输入push至list保存，
  
  在主页面调用命名空间,使用foo中的数据，在computed中利用getters来取值，在methods中利用actions来使用方法。

  在该子组件中使用到了命名空间的数据，命名空间在主页面调用，即子组件需要调用父组件的数据，则在props里写入list{}
### 6.main组件的功能实现
  使用iview组件库中的content、card组件，调整样式

  使用h1来实现“正在进行”的标题内容，使用span放入list.length来实现计数功能

  使用列表通过v-for遍历list来实现list内容的展示，列表由3部分组成
  复选框、文字、删除按钮。

  复选框使用iview中的复选框组件，大小调整为大，

  设置数据双向绑定值为list中的complete值，绑定点击事件move2Done、delTodo,在methods里添加事件所需方法，发射数据至命名空间foo中，actions使用move2Done、delTodo进行接收，传入mutations调用方法，将这条数据item加入donelist，并在list通过数据index删除这条数据。

  文字使用{{item.name}}来显示。

  删除按钮使用iview组件库中的button，形状修改为圆形，右浮动，绑定点击事件delTodo，在methods里添加事件所需方法，该事件在子组件传入数据，发射数据至命名空间foo中，actions中使用delTodo进行接收，
  传入mutations调用方法delTodo，形参为数据index,删除list的这条数据。

  已经完成的内容类似如上。

  在该子组件中使用到了命名空间的数据，命名空间在主页面调用，即子组件需要调用父组件的数据，则在props里写入list{}，donelist{}
### 7.footer组件的功能实现
  使用iview组件库中的footer组件，使用按钮组件，定义类型为text，绑定点击事件clear，在methods里添加事件所需方法，发射数据至命名空间foo中，actions使用clear进行接收，传入mutations调用方法，
  设置list、donelist为空。
### 8.Home主页面功能实现
  将各组件引入主页面 
  ```
  import NavHeader from "@/components/navHeader/NavHeader";
  ```
  并注册 
  ```
  components: {
    NavHeader,
  },
  ```
  最后使用 
  ```
  <nav-header></nav-header>
  ```
  使用iview组件库中的布局Layout，调整相关样式，设置弹性布局。
  
  引入vuex及引入命名空间，在computed中通过getters获取foo的数据，
  在methods中通过actions获取foo中的方法。
  
  在使用上在<nav-header>组件里需要获取list的值，即动态绑定list。绑定方法去foo中调用。
  
  main中需要获取list和donelist的值，动态绑定list和donelist，绑定所需方法去foo中调用。

  



  
      
