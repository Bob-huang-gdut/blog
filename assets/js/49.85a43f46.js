(window.webpackJsonp=window.webpackJsonp||[]).push([[49],{422:function(s,n,a){"use strict";a.r(n);var e=a(28),t=Object(e.a)({},(function(){var s=this,n=s.$createElement,a=s._self._c||n;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("p",[s._v("组件通信的方式如下：")]),s._v(" "),a("h3",{attrs:{id:"_1-props-emit"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-props-emit"}},[s._v("#")]),s._v(" （1） props  /   $emit")]),s._v(" "),a("p",[s._v("父组件通过"),a("code",[s._v("props")]),s._v("向子组件传递数据，子组件通过"),a("code",[s._v("$emit")]),s._v("和父组件通信")]),s._v(" "),a("h5",{attrs:{id:"_1-父组件向子组件传值"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-父组件向子组件传值"}},[s._v("#")]),s._v(" 1. 父组件向子组件传值")]),s._v(" "),a("ul",[a("li",[a("code",[s._v("props")]),s._v("只能是父组件向子组件进行传值，"),a("code",[s._v("props")]),s._v("使得父子组件之间形成了一个单向下行绑定。子组件的数据会随着父组件不断更新。")]),s._v(" "),a("li",[a("code",[s._v("props")]),s._v(" 可以显示定义一个或一个以上的数据，对于接收的数据，可以是各种数据类型，同样也可以传递一个函数。")]),s._v(" "),a("li",[a("code",[s._v("props")]),s._v("属性名规则：若在"),a("code",[s._v("props")]),s._v("中使用驼峰形式，模板中需要使用短横线的形式")])]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v('// 父组件\n<template>\n    <div id="father">\n        <son :msg="msgData" :fn="myFunction"></son>\n    </div>\n</template>\n\n<script>\nimport son from "./son.vue";\nexport default {\n    name: father,\n    data() {\n        msgData: "父组件数据";\n    },\n    methods: {\n        myFunction() {\n            console.log("vue");\n        }\n    },\n    components: {\n        son\n    }\n};\n<\/script>\n\n')])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br"),a("span",{staticClass:"line-number"},[s._v("19")]),a("br"),a("span",{staticClass:"line-number"},[s._v("20")]),a("br"),a("span",{staticClass:"line-number"},[s._v("21")]),a("br"),a("span",{staticClass:"line-number"},[s._v("22")]),a("br"),a("span",{staticClass:"line-number"},[s._v("23")]),a("br"),a("span",{staticClass:"line-number"},[s._v("24")]),a("br"),a("span",{staticClass:"line-number"},[s._v("25")]),a("br")])]),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v('// 子组件\n<template>\n    <div id="son">\n        <p>{{msg}}</p>\n        <button @click="fn">按钮</button>\n    </div>\n</template>\n<script>\nexport default {\n    name: "son",\n    props: ["msg", "fn"]\n};\n<\/script>\n\n')])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br")])]),a("h5",{attrs:{id:"_2-子组件向父组件传值"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-子组件向父组件传值"}},[s._v("#")]),s._v(" 2. 子组件向父组件传值")]),s._v(" "),a("ul",[a("li",[a("code",[s._v("$emit")]),s._v("绑定一个自定义事件，当这个事件被执行的时就会将参数传递给父组件，而父组件通过"),a("code",[s._v("v-on")]),s._v("监听并接收参数。")])]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("// 父组件\n<template>\n  <div class=\"section\">\n    <com-article :articles=\"articleList\" @onEmitIndex=\"onEmitIndex\"></com-article>\n    <p>{{currentIndex}}</p>\n  </div>\n</template>\n\n<script>\nimport comArticle from './test/article.vue'\nexport default {\n  name: 'comArticle',\n  components: { comArticle },\n  data() {\n    return {\n      currentIndex: -1,\n      articleList: ['红楼梦', '西游记', '三国演义']\n    }\n  },\n  methods: {\n    onEmitIndex(idx) {\n      this.currentIndex = idx\n    }\n  }\n}\n<\/script>\n\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br"),a("span",{staticClass:"line-number"},[s._v("19")]),a("br"),a("span",{staticClass:"line-number"},[s._v("20")]),a("br"),a("span",{staticClass:"line-number"},[s._v("21")]),a("br"),a("span",{staticClass:"line-number"},[s._v("22")]),a("br"),a("span",{staticClass:"line-number"},[s._v("23")]),a("br"),a("span",{staticClass:"line-number"},[s._v("24")]),a("br"),a("span",{staticClass:"line-number"},[s._v("25")]),a("br"),a("span",{staticClass:"line-number"},[s._v("26")]),a("br"),a("span",{staticClass:"line-number"},[s._v("27")]),a("br")])]),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v('//子组件\n<template>\n  <div>\n    <div v-for="(item, index) in articles" :key="index" @click="emitIndex(index)">{{item}}</div>\n  </div>\n</template>\n\n<script>\nexport default {\n  props: [\'articles\'],\n  methods: {\n    emitIndex(index) {\n      this.$emit(\'onEmitIndex\', index) // 触发父组件的方法，并传递参数index\n    }\n  }\n}\n<\/script>\n\n')])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br")])]),a("h3",{attrs:{id:"_2-eventbus事件总线-emit-on"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-eventbus事件总线-emit-on"}},[s._v("#")]),s._v(" （2）eventBus事件总线（"),a("code",[s._v("$emit / $on")]),s._v("）")]),s._v(" "),a("p",[a("code",[s._v("eventBus")]),s._v("事件总线适用于"),a("strong",[s._v("父子组件")]),s._v("、"),a("strong",[s._v("非父子组件")]),s._v("等之间的通信，使用步骤如下： "),a("strong",[s._v("（1）创建事件中心管理组件之间的通信")])]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("// event-bus.js\n\nimport Vue from 'vue'\nexport const EventBus = new Vue()\n\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br")])]),a("p",[a("strong",[s._v("（2）发送事件")]),s._v(" 假设有两个兄弟组件"),a("code",[s._v("firstCom")]),s._v("和"),a("code",[s._v("secondCom")]),s._v("：")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("<template>\n  <div>\n    <first-com></first-com>\n    <second-com></second-com>\n  </div>\n</template>\n\n<script>\nimport firstCom from './firstCom.vue'\nimport secondCom from './secondCom.vue'\nexport default {\n  components: { firstCom, secondCom }\n}\n<\/script>\n\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br")])]),a("p",[s._v("在"),a("code",[s._v("firstCom")]),s._v("组件中发送事件：")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("<template>\n  <div>\n    <button @click=\"add\">加法</button>    \n  </div>\n</template>\n\n<script>\nimport {EventBus} from './event-bus.js' // 引入事件中心\n\nexport default {\n  data(){\n    return{\n      num:0\n    }\n  },\n  methods:{\n    add(){\n      EventBus.$emit('addition', {\n        num:this.num++\n      })\n    }\n  }\n}\n<\/script>\n\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br"),a("span",{staticClass:"line-number"},[s._v("19")]),a("br"),a("span",{staticClass:"line-number"},[s._v("20")]),a("br"),a("span",{staticClass:"line-number"},[s._v("21")]),a("br"),a("span",{staticClass:"line-number"},[s._v("22")]),a("br"),a("span",{staticClass:"line-number"},[s._v("23")]),a("br"),a("span",{staticClass:"line-number"},[s._v("24")]),a("br"),a("span",{staticClass:"line-number"},[s._v("25")]),a("br")])]),a("p",[a("strong",[s._v("（3）接收事件")]),s._v(" 在"),a("code",[s._v("secondCom")]),s._v("组件中发送事件：")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("<template>\n  <div>求和: {{count}}</div>\n</template>\n\n<script>\nimport { EventBus } from './event-bus.js'\nexport default {\n  data() {\n    return {\n      count: 0\n    }\n  },\n  mounted() {\n    EventBus.$on('addition', param => {\n      this.count = this.count + param.num;\n    })\n  }\n}\n<\/script>\n\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br"),a("span",{staticClass:"line-number"},[s._v("19")]),a("br"),a("span",{staticClass:"line-number"},[s._v("20")]),a("br")])]),a("p",[s._v("在上述代码中，这就相当于将"),a("code",[s._v("num")]),s._v("值存贮在了事件总线中，在其他组件中可以直接访问。事件总线就相当于一个桥梁，不用组件通过它来通信。")]),s._v(" "),a("p",[s._v("虽然看起来比较简单，但是这种方法也有不变之处，如果项目过大，使用这种方式进行通信，后期维护起来会很困难。")]),s._v(" "),a("h3",{attrs:{id:"_3-依赖注入-project-inject"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-依赖注入-project-inject"}},[s._v("#")]),s._v(" （3）依赖注入（project / inject）")]),s._v(" "),a("p",[s._v("这种方式就是Vue中的"),a("strong",[s._v("依赖注入")]),s._v("，该方法用于"),a("strong",[s._v("父子组件之间的通信")]),s._v("。当然这里所说的父子不一定是真正的父子，也可以是祖孙组件，在层数很深的情况下，可以使用这种方法来进行传值。就不用一层一层的传递了。")]),s._v(" "),a("p",[a("code",[s._v("project / inject")]),s._v("是Vue提供的两个钩子，和"),a("code",[s._v("data")]),s._v("、"),a("code",[s._v("methods")]),s._v("是同级的。并且"),a("code",[s._v("project")]),s._v("的书写形式和"),a("code",[s._v("data")]),s._v("一样。")]),s._v(" "),a("ul",[a("li",[a("code",[s._v("project")]),s._v(" 钩子用来发送数据或方法")]),s._v(" "),a("li",[a("code",[s._v("inject")]),s._v("钩子用来接收数据或方法")])]),s._v(" "),a("p",[s._v("在父组件中：")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("provide() { \n    return {     \n        num: this.num  \n    };\n}\n\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br")])]),a("p",[s._v("在子组件中：")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("inject: ['num']\n\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br")])]),a("p",[s._v("还可以这样写，这样写就可以访问父组件中的所有属性：")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("provide() {\n return {\n    app: this\n  };\n}\ndata() {\n return {\n    num: 1\n  };\n}\n\ninject: ['app']\nconsole.log(this.app.num)\n\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br")])]),a("p",[a("strong",[s._v("注意：")]),s._v(" 依赖注入所提供的属性是"),a("strong",[s._v("非响应式")]),s._v("的。")]),s._v(" "),a("h3",{attrs:{id:"_3-ref-refs"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-ref-refs"}},[s._v("#")]),s._v(" （3）ref / $refs")]),s._v(" "),a("p",[s._v("这种方式也是实现"),a("strong",[s._v("父子组件")]),s._v("之间的通信。")]),s._v(" "),a("p",[a("code",[s._v("ref")]),s._v("： 这个属性用在子组件上，它的引用就指向了子组件的实例。可以通过实例来访问组件的数据和方法。")]),s._v(" "),a("p",[s._v("在子组件中：")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("export default {\n  data () {\n    return {\n      name: 'JavaScript'\n    }\n  },\n  methods: {\n    sayHello () {\n      console.log('hello')\n    }\n  }\n}\n\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br")])]),a("p",[s._v("在父组件中：")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("<template>\n  <child ref=\"child\"></component-a>\n</template>\n<script>\n  import child from './child.vue'\n  export default {\n    components: { child },\n    mounted () {\n      console.log(this.$refs.child.name);  // JavaScript\n      this.$refs.child.sayHello();  // hello\n    }\n  }\n<\/script>\n\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br")])]),a("h3",{attrs:{id:"_4-parent-children"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_4-parent-children"}},[s._v("#")]),s._v(" （4）"),a("code",[s._v("$parent / $children")])]),s._v(" "),a("ul",[a("li",[s._v("使用"),a("code",[s._v("$parent")]),s._v("可以让组件访问父组件的实例（访问的是上一级父组件的属性和方法）")]),s._v(" "),a("li",[s._v("使用"),a("code",[s._v("$children")]),s._v("可以让组件访问子组件的实例，但是，"),a("code",[s._v("$children")]),s._v("并不能保证顺序，并且访问的数据也不是响应式的。")])]),s._v(" "),a("p",[s._v("在子组件中：")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("<template>\n  <div>\n    <span>{{message}}</span>\n    <p>获取父组件的值为:  {{parentVal}}</p>\n  </div>\n</template>\n\n<script>\nexport default {\n  data() {\n    return {\n      message: 'Vue'\n    }\n  },\n  computed:{\n    parentVal(){\n      return this.$parent.msg;\n    }\n  }\n}\n<\/script>\n\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br"),a("span",{staticClass:"line-number"},[s._v("19")]),a("br"),a("span",{staticClass:"line-number"},[s._v("20")]),a("br"),a("span",{staticClass:"line-number"},[s._v("21")]),a("br"),a("span",{staticClass:"line-number"},[s._v("22")]),a("br")])]),a("p",[s._v("在父组件中：")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("// 父组件中\n<template>\n  <div class=\"hello_world\">\n    <div>{{msg}}</div>\n    <child></child>\n    <button @click=\"change\">点击改变子组件值</button>\n  </div>\n</template>\n\n<script>\nimport child from './child.vue'\nexport default {\n  components: { child },\n  data() {\n    return {\n      msg: 'Welcome'\n    }\n  },\n  methods: {\n    change() {\n      // 获取到子组件\n      this.$children[0].message = 'JavaScript'\n    }\n  }\n}\n<\/script>\n\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br"),a("span",{staticClass:"line-number"},[s._v("19")]),a("br"),a("span",{staticClass:"line-number"},[s._v("20")]),a("br"),a("span",{staticClass:"line-number"},[s._v("21")]),a("br"),a("span",{staticClass:"line-number"},[s._v("22")]),a("br"),a("span",{staticClass:"line-number"},[s._v("23")]),a("br"),a("span",{staticClass:"line-number"},[s._v("24")]),a("br"),a("span",{staticClass:"line-number"},[s._v("25")]),a("br"),a("span",{staticClass:"line-number"},[s._v("26")]),a("br"),a("span",{staticClass:"line-number"},[s._v("27")]),a("br")])]),a("p",[s._v("在上面的代码中，子组件获取到了父组件的"),a("code",[s._v("parentVal")]),s._v("值，父组件改变了子组件中"),a("code",[s._v("message")]),s._v("的值。 "),a("strong",[s._v("需要注意：")])]),s._v(" "),a("ul",[a("li",[s._v("通过"),a("code",[s._v("$parent")]),s._v("访问到的是上一级父组件的实例，可以使用"),a("code",[s._v("$root")]),s._v("来访问根组件的实例")]),s._v(" "),a("li",[s._v("在组件中使用"),a("code",[s._v("$children")]),s._v("拿到的是所有的子组件的实例，它是一个数组，并且是无序的")]),s._v(" "),a("li",[s._v("在根组件"),a("code",[s._v("#app")]),s._v("上拿"),a("code",[s._v("$parent")]),s._v("得到的是"),a("code",[s._v("new Vue()")]),s._v("的实例，在这实例上再拿"),a("code",[s._v("$parent")]),s._v("得到的是"),a("code",[s._v("undefined")]),s._v("，而在最底层的子组件拿"),a("code",[s._v("$children")]),s._v("是个空数组")]),s._v(" "),a("li",[a("code",[s._v("$children")]),s._v(" 的值是"),a("strong",[s._v("数组")]),s._v("，而"),a("code",[s._v("$parent")]),s._v("是个"),a("strong",[s._v("对象")])])]),s._v(" "),a("h3",{attrs:{id:"_5-attrs-listeners"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_5-attrs-listeners"}},[s._v("#")]),s._v(" （5）"),a("code",[s._v("$attrs / $listeners")])]),s._v(" "),a("p",[s._v("考虑一种场景，如果A是B组件的父组件，B是C组件的父组件。如果想要组件A给组件C传递数据，这种隔代的数据，该使用哪种方式呢？")]),s._v(" "),a("p",[s._v("如果是用"),a("code",[s._v("props/$emit")]),s._v("来一级一级的传递，确实可以完成，但是比较复杂；如果使用事件总线，在多人开发或者项目较大的时候，维护起来很麻烦；如果使用Vuex，的确也可以，但是如果仅仅是传递数据，那可能就有点浪费了。")]),s._v(" "),a("p",[s._v("针对上述情况，Vue引入了"),a("code",[s._v("$attrs / $listeners")]),s._v("，实现组件之间的跨代通信。")]),s._v(" "),a("p",[s._v("先来看一下"),a("code",[s._v("inheritAttrs")]),s._v("，它的默认值true，继承所有的父组件属性除"),a("code",[s._v("props")]),s._v("之外的所有属性；"),a("code",[s._v("inheritAttrs：false")]),s._v(" 只继承class属性 。")]),s._v(" "),a("ul",[a("li",[a("code",[s._v("$attrs")]),s._v("：继承所有的父组件属性（除了prop传递的属性、class 和 style ），一般用在子组件的子元素上")]),s._v(" "),a("li",[a("code",[s._v("$listeners")]),s._v("：该属性是一个对象，里面包含了作用在这个组件上的所有监听器，可以配合 "),a("code",[s._v('v-on="$listeners"')]),s._v(" 将所有的事件监听器指向这个组件的某个特定的子元素。（相当于子组件继承父组件的事件）")])]),s._v(" "),a("p",[s._v("A组件（"),a("code",[s._v("APP.vue")]),s._v("）：")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v('<template>\n    <div id="app">\n        //此处监听了两个事件，可以在B组件或者C组件中直接触发 \n        <child1 :p-child1="child1" :p-child2="child2" @test1="onTest1" @test2="onTest2"></child1>\n    </div>\n</template>\n<script>\nimport Child1 from \'./Child1.vue\';\nexport default {\n    components: { Child1 },\n    methods: {\n        onTest1() {\n            console.log(\'test1 running\');\n        },\n        onTest2() {\n            console.log(\'test2 running\');\n        }\n    }\n};\n<\/script>\n\n')])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br"),a("span",{staticClass:"line-number"},[s._v("19")]),a("br"),a("span",{staticClass:"line-number"},[s._v("20")]),a("br"),a("span",{staticClass:"line-number"},[s._v("21")]),a("br")])]),a("p",[s._v("B组件（"),a("code",[s._v("Child1.vue")]),s._v("）：")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("<template>\n    <div class=\"child-1\">\n        <p>props: {{pChild1}}</p>\n        <p>$attrs: {{$attrs}}</p>\n        <child2 v-bind=\"$attrs\" v-on=\"$listeners\"></child2>\n    </div>\n</template>\n<script>\nimport Child2 from './Child2.vue';\nexport default {\n    props: ['pChild1'],\n    components: { Child2 },\n    inheritAttrs: false,\n    mounted() {\n        this.$emit('test1'); // 触发APP.vue中的test1方法\n    }\n};\n<\/script>\n\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br"),a("span",{staticClass:"line-number"},[s._v("19")]),a("br")])]),a("p",[s._v("C 组件 ("),a("code",[s._v("Child2.vue")]),s._v(")：")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("<template>\n    <div class=\"child-2\">\n        <p>props: {{pChild2}}</p>\n        <p>$attrs: {{$attrs}}</p>\n    </div>\n</template>\n<script>\nexport default {\n    props: ['pChild2'],\n    inheritAttrs: false,\n    mounted() {\n        this.$emit('test2');// 触发APP.vue中的test2方法\n    }\n};\n<\/script>\n\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br")])]),a("p",[s._v("在上述代码中：")]),s._v(" "),a("ul",[a("li",[s._v("C组件中能直接触发test的原因在于 B组件调用C组件时 使用 v-on 绑定了"),a("code",[s._v("$listeners")]),s._v(" 属性")]),s._v(" "),a("li",[s._v("在B组件中通过v-bind 绑定"),a("code",[s._v("$attrs")]),s._v("属性，C组件可以直接获取到A组件中传递下来的props（除了B组件中props声明的）")])]),s._v(" "),a("h3",{attrs:{id:"_6-总结"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_6-总结"}},[s._v("#")]),s._v(" （6）总结")]),s._v(" "),a("p",[a("strong",[s._v("（1）父子组件间通信")])]),s._v(" "),a("ul",[a("li",[s._v("子组件通过 props 属性来接受父组件的数据，然后父组件在子组件上注册监听事件，子组件通过 emit 触发事件来向父组件发送数据。")]),s._v(" "),a("li",[s._v("通过 ref 属性给子组件设置一个名字。父组件通过 "),a("code",[s._v("$refs")]),s._v(" 组件名来获得子组件，子组件通过 "),a("code",[s._v("$parent")]),s._v(" 获得父组件，这样也可以实现通信。")]),s._v(" "),a("li",[s._v("使用 provide/inject，在父组件中通过 provide提供变量，在子组件中通过 inject 来将变量注入到组件中。不论子组件有多深，只要调用了 inject 那么就可以注入 provide中的数据。")])]),s._v(" "),a("p",[a("strong",[s._v("（2）兄弟组件间通信")])]),s._v(" "),a("ul",[a("li",[s._v("使用 eventBus 的方法，它的本质是通过创建一个空的 Vue 实例来作为消息传递的对象，通信的组件引入这个实例，通信的组件通过在这个实例上监听和触发事件，来实现消息的传递。")]),s._v(" "),a("li",[s._v("通过 "),a("code",[s._v("$parent/$refs")]),s._v(" 来获取到兄弟组件，也可以进行通信。")])]),s._v(" "),a("p",[a("strong",[s._v("（3）任意组件之间")])]),s._v(" "),a("ul",[a("li",[s._v("使用 eventBus ，其实就是创建一个事件中心，相当于中转站，可以用它来传递事件和接收事件。")])]),s._v(" "),a("p",[s._v("如果业务逻辑复杂，很多组件之间需要同时处理一些公共的数据，这个时候采用上面这一些方法可能不利于项目的维护。这个时候可以使用 vuex ，vuex 的思想就是将这一些公共的数据抽离出来，将它作为一个全局的变量来管理，然后其他组件就可以对这个公共数据进行读写操作，这样达到了解耦的目的。")])])}),[],!1,null,null,null);n.default=t.exports}}]);