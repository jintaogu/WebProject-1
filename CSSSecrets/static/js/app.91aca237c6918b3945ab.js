webpackJsonp([1],{NHnr:function(e,t,s){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var d=s("7+uW"),n={render:function(){var e=this.$createElement,t=this._self._c||e;return t("div",{attrs:{id:"app"}},[t("router-view")],1)},staticRenderFns:[]};var i=s("VU/8")({name:"App"},n,!1,function(e){s("lGf4")},null,null).exports,r=s("/ocq"),o=s("woOf"),l={"1-1":[{src:"//jsfiddle.net/Hwaphon/e6Lg0a3r/embedded/result,html,css/",tips:["background-clip 属性规定背景的绘制区域。"]}],"1-2":[{src:"//jsfiddle.net/Hwaphon/68ry34t1/embedded/result,html,css/",tips:["绘制多重边框有两种方法。第一种是使用 box-shadow ,第二种是 outline。","box-shadow 前三个参数指定为 0，第四个参数指定为要模拟的边框宽度，第五个参数指定为要模拟的边框颜色，就可以实现一个边框效果。由于 box-shadow 可以以逗号分隔指定多个值，所以可以为元素添加任意多个边框。这种方法的优点是可以设置多个边框而且可以保持元素的圆角。缺点是不能响应元素的点击或其它事件。如果响应事件对你非常重要，那么可以启用 box-shadow 的 inset 关键字，然后再为元素设置一个 padding 即可。","outline 的行为和 border 几乎是相同的，不过不支持圆角（Firefox 支持 outline-radius）。借助 outline-offset 属性可以设置相对元素的距离，设置为负值时边框将显示在元素内部。相比于 box-shadow，这种方法的优点是支持边框非实线（可以设置为虚线）,缺点是只能设置一个外边框。"]}],"1-3":[{src:"//jsfiddle.net/Hwaphon/3700Lm2d/1/embedded/result,html,css/",tips:["在 CSS3 中，background-position 可以用 right 10px 这种形式为背景设置距离容器的右边距。在 background 中仍然书写了 right bottom 关键字，主要是为不支持上述写法的浏览器提供一个回退方案。"]},{src:"//jsfiddle.net/Hwaphon/dyLwrnd0/1/embedded/result,html,css/",tips:["一个元素包含三个矩形，一个是 content 矩形，一个是 content + padding 矩形，还有一个是 content + padding + border 矩形。background-origin 用于设置背景图相对于哪个矩形进行定位，默认是 padding-box，为了实现背景图与内边距一致的效果，可将默认值更改为 content-box。"]}],"1-4":[{src:"//jsfiddle.net/Hwaphon/so6ozq8u/embedded/result,html,css/",tips:["利用 box-shadow 和 outline 可以实现这个效果，box-shadow 第四个参数用于设置扩张半径，可保持元素的圆角，outline可以设置边框，但是无法保持圆角。但是这二者一重叠，就可以将元素和 outline 之间的空白填补上。","box-shadow 第四个参数扩张半径的设置是有讲究的，在元素圆角处将圆形描述出来，就不难发现，圆心到外边框的距离为 √ (radius ^ 2 + radius ^2)，所以 box-shadow 扩展半径要大于 (√ 2 - 1) * radius, 小于 (√ 2 - 1) * radius + outline 边框宽度。"]}],"1-5":[{src:"//jsfiddle.net/Hwaphon/1zobd5xe/embedded/result,html,css/",tips:["可以使用 repeating-linear-grandient 生成斜向条纹。","如果某个色标的位置值比整个列表中在它之前的色标的位置值都要小，则该色标的位置值会被设置为它前面所有色标位置值的最大值。","为了设置同色系的条纹，可以先为元素设置好背景色，然后设置透明渐变以获取淡色条纹。"]}],"1-6":[{src:"//jsfiddle.net/Hwaphon/m1wwcaqu/1/embedded/result,html,css/",tips:["background-image 可以用逗号分隔指定多个值，借用这个特性可以实现许多有趣的图形。"]},{src:"//jsfiddle.net/Hwaphon/qr99Lbx6/embedded/result,html,css/",tips:["在未利用预处理器的情况下，如果需要修改圆点的尺寸及间隔，将改动四处代码。建议使用预处理器的 mixins。"]},{src:"//jsfiddle.net/Hwaphon/bjxghn4v/embedded/result,html,css/",tips:["此例的实现依赖于 background-position 的使用。"]}],"1-7":[{src:"//jsfiddle.net/Hwaphon/fnvek1w3/embedded/result,html,css/",tips:["将三个背景的宽度设置为质数，这样背景重复的最小尺寸将为三个质数的乘积。所以选择大小合适的质数将使的在已知分辨率下无规律可循，即实现伪随机。"]}],"1-8":[{src:"//jsfiddle.net/Hwaphon/8nba02wb/embedded/result,html,css/",tips:["结合 background-clip 和 background-origin。 background-origin 的值默认是 padding-box，所以背景图像在 padding-box 的基础上显示是正常的，由于 background-clip 又指明将背景延伸到 border-box，所以这个时候的背景实际上是被拉伸的。为了正常的显示，我们需要先将 background-origin 设置为 border-box。"]}]},a={"2-1":[{src:"//jsfiddle.net/Hwaphon/nweqwhta/embedded/result,html,css/",tips:["在元素宽高相同的情况下，border-radius 的某个值设置为 =50% 或者 >50% 效果是相同的。如果元素是宽高不等的矩形，那么 =50% 和 >50% 的效果将有所不同。","border-radius: 10px 是 border-radius: 10px 10px 10px 10px / 10px 10px 10px 10px 的简写。/ 前指定的是水平方向的圆角半径，/ 后指定的是垂直方向上的圆角半径。"]},{src:"//jsfiddle.net/Hwaphon/rgatvonh/1/embedded/result,html,css/",tips:[]}],"2-2":[{src:"//jsfiddle.net/Hwaphon/4Lhbwzm1/embedded/result,html,css/",tips:["如果为元素本身设置 skew 变形，那么元素的文字也会变形。所以可以为元素的伪元素设置变形。","伪元素设置背景之后将覆盖元素本身，所以需要为其设置 z-index: -1，让其处于元素下一层。","如果元素高度和宽度相等，那么可以对伪元素使用 rotate，从而制造一个菱形。"]}],"2-3":[{src:"//jsfiddle.net/Hwaphon/9rmj89ey/2/embedded/result,html,css/",tips:["使用 skew 让 div 标签旋转 45 度形成菱形，然后让图片标签往相反的方向旋转 45 度，从而保持图片元素的正常水平状态。","为了保持图片能够充满整个元素，需要将图片宽度设置为 √2 * 元素宽度。有两种方法可以改变图片的大小，一种是改变图片的 width，另一种是使用 scale 缩放。","使用 scale 有两个好处。第一个好处就是可以保持 width 为 100% 不变，当浏览器不支持 rotate 属性的时候，仍然能有一个好的布局。第二个好处是，由于 transform-origin 的默认值是 50% 50%, 所以我们不需要任何额外的操作就可以使得图片的中点与容器元素的中点保持一致。如果使用 width，那么图片将以左上角为原点进行缩放，所以需要再为图片设置负边距以保持与容器元素中心点一致。","由于 √2 约等于 1.41，所以我们可以指定缩放比例 >=1.42。而且这种情况是建立在图片是正方形的情况下，如果图片不是一个正方形，那就无法生成一个菱形了，除非根据图片再放大缩放比例。这也是这种方式的一种缺陷。"]},{src:"//jsfiddle.net/Hwaphon/k52p39gz/2/embedded/result,html,css/",tips:["使用 clip-path 可以解决图片不是正方形的问题，除菱形外 clip-path 还可以指定其它的很多形状。clip-path 的兼容性还不是很好，建议使用前用 Caniuse 查一下。"]}],"2-4":[{src:"//jsfiddle.net/Hwaphon/19qgzdp1/embedded/result,html,css/",tips:["利用 background-image 属性为元素设置四个背景，利用 background-position 让每个元素处于一个不同的角落，利用 background-size 让每一个背景占据 1/4 的空间位置， 使用 background-repeat 禁止每个背景的平铺行为。"]},{src:"//jsfiddle.net/Hwaphon/cfcpgf1s/embedded/result,html,css/",tips:["只需要将切角效果中使用的 linear-gradient 改成 radial-gradient 就可以实现弧角效果。"]}],"2-5":[{src:"//jsfiddle.net/Hwaphon/we49cw9v/embedded/result,html,css/",tips:["在 3D 空间内旋转一个矩形，投放到 2D 屏幕上就是一个梯形。如果直接对元素本身进行操作，那么元素上的文字也会因为旋转而变形，所以可以在元素的伪元素上进行旋转操作。在 3D 空间内的元素投放到 2D 屏幕会造成尺寸的变化，所以可以先固定 transform-origin 的值为 bottom，然后再缩放以达到文字垂直居中的效果。","将 transform-origin 设置为 bottom left 和 bottom right 会分别生成一个左梯形和右梯形。"]}],"2-6":[{src:"//jsfiddle.net/Hwaphon/cx82d7mk/1/embedded/result,html,css/",tips:["首先将一个圆形，分成左右两块相等颜色不同的半圆，为元素背景设置渐变可实现这一点。然后用圆形的伪元素遮住右半圆，且伪元素的颜色与左半圆相同，可设置为 inherit。然后只需要旋转伪元素以透露出被遮盖住的右半圆即可实现扇形图效果。","上面这种做法只能实现平分的效果，如果右半圆颜色要遮住左半圆，可以通过改变伪元素的颜色来实现。"]},{src:"//jsfiddle.net/Hwaphon/2b49fyyy/embedded/result,html,css,js/",tips:["这种直接指定百分比的形式更容易使用，不过这依赖于 animation-delay 的一个特性：指定一个负的动画延时来直接跳至动画中的任意时间点。所以我们只需要设置 animation-play-state 为 paused 去停止动画的播放，然后读取元素内容中指定的百分比去设置动画延迟中的负值即可。"]}]},c={"3-1":[{src:"//jsfiddle.net/Hwaphon/41ae20yk/3/embedded/result,html,css/",tips:["box-shadow 的第三个参数为模糊半径，该值并不会影响到投影的大小，它是从投影的边缘开始计算，像内开始模糊。","box-shaodw 的第四个参数为拓展半径，该值设置为正值时，投影会在四个方向上加上该正值。如果该值为负值，则投影会在四个方向上减去该负值的绝对值。","box-shadow 可以指定 inset 关键字，将投影设置为内投影。"]}],"3-2":[{src:"//jsfiddle.net/Hwaphon/0ec1x3b4/32/embedded/result,html,css/",tips:["当我们为一些伪元素或者半透明的元素添加了 box-shadow 就会遇到以上问题，这类情况包括:","1. 半透明图像、背景图像、或者 border-image。","2. 元素设置了点状、虚线或者半透明的边框，但没有背景。","3. 对话气泡的小尾巴。切角效果。折角效果。利用 clip-path 生成的菱形图片。","解决以上问题的办法是使用 filter 的 drop-shadow 属性。"]},{src:"//jsfiddle.net/Hwaphon/3yx4bn1e/3/embedded/result,html,css",tips:["drop-shadow 和 box-shadow 相比，它没有第四个参数拓展半径，也不支持以逗号分隔的多层设置语法。","drop-shadow 会给任何非透明的部分打上投影，包括文本（如果背景是透明的）。"]}],"3-3":[{src:"//jsfiddle.net/Hwaphon/v4hwydsr/5/embedded/result,html,css/",tips:["使用 filter 中的属性可以对图片的色彩进行控制。"]}],"3-4":[{src:"//jsfiddle.net/Hwaphon/d4Lx1yc2/19/embedded/result,html,css/",tips:["首先这个效果利用了 background-attachment: fixed 的原理。","为元素添加伪元素，设置与 body 一样背景，然后利用 filter 设置 blur 半径。这个时候已经有了模糊的效果，但是文字被伪元素遮挡住了，所以需要为伪元素设置 z-index: -1。","实现结束后会发现模糊效果到达边缘的时候会越来越差，即背景图越来越清晰。这个时候可以为伪元素设置负 margin，增大元素的面积，以确保在元素框内模糊程度一样。最后为伪元素的包含块设置 overflow: hidden 即可。"]}]},u=s.n(o)()({},l,a,c),p={data:function(){return{jsfiddle:"",defaultActive:"1-1",menus:[{index:"1",title:"第2章 背景与边框",submenu:[{index:"1-1",title:"1. 半透明边框"},{index:"1-2",title:"2. 多重边框"},{index:"1-3",title:"3. 灵活的背景定位"},{index:"1-4",title:"4. 边框内圆角"},{index:"1-5",title:"5. 条纹背景"},{index:"1-6",title:"6. 复杂的背景图案"},{index:"1-7",title:"7. 伪随机背景"},{index:"1-8",title:"8. 连续的图像边框"}]},{index:"2",title:"第3章 形状",submenu:[{index:"2-1",title:"1. 自适应的椭圆"},{index:"2-2",title:"2. 平行四边形"},{index:"2-3",title:"3. 菱形图片"},{index:"2-4",title:"4. 切角效果"},{index:"2-5",title:"5. 梯形标签页"},{index:"2-6",title:"6. 简单的饼图"}]},{index:"3",title:"第4章 视觉效果",submenu:[{index:"3-1",title:"1. 单侧投影"},{index:"3-2",title:"2. 不规则投影"},{index:"3-3",title:"3. 染色效果"},{index:"3-4",title:"4. 毛玻璃效果"},{index:"3-5",title:"5. 折角效果"}]}],menuContents:u,currentContent:[]}},methods:{selectMenu:function(e){this.currentContent=this.menuContents[e]||[]}},created:function(){this.currentContent=this.menuContents[this.defaultActive]},updated:function(){console.log("updated")}},h={render:function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"Index"},[s("el-row",{staticClass:"Index-row"},[s("el-col",{staticClass:"Index-col",attrs:{span:5,offset:2}},[s("el-menu",{staticClass:"Index-menu",attrs:{mode:"vertical","default-active":e.defaultActive},on:{select:e.selectMenu}},e._l(e.menus,function(t){return s("el-submenu",{key:t.index,attrs:{index:t.index}},[s("span",{attrs:{slot:"title"},slot:"title"},[e._v(e._s(t.title))]),e._v(" "),e._l(t.submenu,function(t){return s("el-menu-item",{key:t.index,attrs:{index:t.index}},[e._v("\n\t\t\t\t\t\t"+e._s(t.title)+"\n\t\t\t\t\t")])})],2)}))],1),e._v(" "),s("el-col",{staticClass:"Index-col",attrs:{span:15}},[s("div",{staticClass:"menu-content"},e._l(e.currentContent,function(t,d){return s("div",{key:d},[s("h2",[e._v("例 "+e._s(d+1))]),e._v(" "),s("iframe",{attrs:{width:"100%",height:"300",src:t.src,allowpaymentrequest:"",allowfullscreen:"allowfullscreen",frameborder:"0"}}),e._v(" "),t.tips.length>0?s("div",{staticClass:"content-tips"},e._l(t.tips,function(t){return s("p",[e._v(e._s(t))])})):e._e()])}))])],1)],1)},staticRenderFns:[]};var m=s("VU/8")(p,h,!1,function(e){s("m7L0")},"data-v-4a27bd22",null).exports;d.default.use(r.a);var b=new r.a({routes:[{path:"/",name:"Index",component:m}]}),f=s("zL8q"),x=s.n(f);s("tvR6");d.default.use(x.a),d.default.config.productionTip=!1,new d.default({el:"#app",router:b,components:{App:i},template:"<App/>"})},lGf4:function(e,t){},m7L0:function(e,t){},tvR6:function(e,t){}},["NHnr"]);
//# sourceMappingURL=app.91aca237c6918b3945ab.js.map