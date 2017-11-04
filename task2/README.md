## 第一部分

### 代码编写

参考任务关联文件，第二阶段设计稿的两张设计稿，工作量整体预估为4-6小时，分两天完成。

![1.img](https://github.com/xiaqiu2233/baidu-efe-2017summer/blob/master/task2/design/1.png)

#### 说明及要求

1、仅需要实现HTML及CSS部分的编码，不涉及JavaScript部分；只需要实现设计稿的样式，不用实现交互。轮播图及tab切换等都先忽略功能及交互，做成静态展现即可。

2、最上方的黑色导航背景部分宽度为100%自适应，Banner的左侧色块也是向左自适应延伸，右侧图片在浏览器宽度满足的情况下尽多显示，当浏览器宽度超过图片宽度时，图片右侧也用左侧的颜色进行填充

3、整体页面有内容的宽度为960px定宽

4、所有padding，margin请自行用工具量，基本上均为5，10的倍数

5、字号大小分别为：导航16px；banner半透明文字32px，不透明文字44px；One Two Three模块，大标题48px，副标题24px，正文16px；中间banner左下角文字16px；tab导航24px；表格标题18px，表格表头行及左侧第一列18px；表格正文14px；价格行18px；输入框文字12px；按钮14px；版权14px

6、符合语义化

7、代码可以放在codepen或Github均可。

8、页面背景色是白色的！大家请用photoshop等工具打开看

9、页面在浏览器宽度大于960px时候，不出现横线滚动条

10、设计稿中的图片资源可以直接使用设计稿切图，也可以自己寻找尺寸相同的图片

11、设计稿中的文字可以直接使用设计稿中的文字，也可以随意写字。

## 第二部分

### 阅读学习

每日利用1-2小时时间阅读以下材料：

[EFE HTML编码规范](https://github.com/ecomfe/spec/blob/master/html-style-guide.md)

[EFE CSS编码规范](https://github.com/ecomfe/spec/blob/master/css-style-guide.md)

[精简高效的CSS命名准则/方法](https://www.zhangxinxu.com/wordpress/2010/09/%E7%B2%BE%E7%AE%80%E9%AB%98%E6%95%88%E7%9A%84css%E5%91%BD%E5%90%8D%E5%87%86%E5%88%99%E6%96%B9%E6%B3%95/)

[网易编码规范](https://nec.netease.com/standard)

[HTML和CSS高级指南之二——定位详解 编码练习](https://www.w3cplus.com/css/advanced-html-css-lesson2-detailed-css-positioning.html)

利用1-2小时时间，基于任务14的交流心得，对于任务12进行重写，请忽视（或者删掉）之前的代码及资源，重头编码

## 第三部分

### 编码学习

基于之前的HTML任务，完成以下交互功能

__1. 下拉菜单__

用两种方案实现如下图的下拉菜单，方案分别为使用JavaScript和不使用JavaScript

![2.img](https://github.com/xiaqiu2233/baidu-efe-2017summer/blob/master/task2/design/2.png)

子菜单项数量及内容任意填写，不作要求。

下拉菜单的样式可参考上图，但不做强制的一致性要求，样式接近即可。

交互方式为：

鼠标滑过（hover）一级菜单时，便弹出二级菜单，鼠标滑出hover的一级菜单及二级菜单后，二级菜单消失。

__2. 轮显Banner__

![3.img](https://github.com/xiaqiu2233/baidu-efe-2017summer/blob/master/task2/design/3.png)

如上图，自行寻找3-4张图片作为轮流显示的Banner图片，按照一定的时间（如2秒，可灵活配置），进行轮流显示
显示的动画实现两种效果，一种是淡入淡出，一种是左（或右）移动切换。

banner下部的线代表当前轮流显示到哪张图，和图片轮显同步变更。

__3. Tab切换__

![4.img](https://github.com/xiaqiu2233/baidu-efe-2017summer/blob/master/task2/design/4.png)

点击tab，进行tab选中状态的切换，并更新tab下的内容。下方内容自定义，不作具体要求。

__4. 实现自定义样式下拉菜单Select并实现联动__

![5.img](https://github.com/xiaqiu2233/baidu-efe-2017summer/blob/master/task2/design/5.png)

实现如上图的下拉菜单样式，交互与系统默认的Select保持一致。

联动：上面的下拉菜单选择会影响下面下拉菜单的可选项，Select中的选项自定义，不做要求。

例如：

上面选项是 无，中国，美国，英国

则对应下面选项为：

无：无

中国：北京、上海、广州

美国：洛杉矶、纽约、旧金山

英国：伦敦、利物浦、曼彻斯特

以上任务代码放在Github或codepen等上。

### 阅读练习
[JavaScript编码规范](https://github.com/ecomfe/spec/blob/master/javascript-style-guide.md)