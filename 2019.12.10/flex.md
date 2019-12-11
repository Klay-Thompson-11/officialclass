### 原理
 操作父级盒子来控制子级

 一般来说，给父级添加属性，操作子级

 # 单行

 >控制主轴

 + justify-content:flex-starts
 + justify-content:flex-end
 + justify-content:center
 + justify-content:space-between
 + justify-content:space-around
 + justify-content:space-evenly

 + flex-direction:column

 align-items 控制侧轴方向属性

 + align-items:center
 + align-items:flex-end
 


 # 多行 

+ align-content:flex-end

# 复合样式

+ flow 
  - flex-wrap
  - flex-direction

  + flex-flow:row wrap

> flex:给子级分配剩余部分的空间占比
> order属性定义项目的排列顺序。数值越小，排列越靠前，默认为0.
> align-self属性允许单个项目有与其他项目不一样的对齐方式，可覆盖align-items属性。默认值为      auto，表示继承父元素的align-items属性，如果没有父元素，等同于stretch。