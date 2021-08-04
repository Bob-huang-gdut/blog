(window.webpackJsonp=window.webpackJsonp||[]).push([[40],{411:function(s,a,n){"use strict";n.r(a);var e=n(28),t=Object(e.a)({},(function(){var s=this,a=s.$createElement,n=s._self._c||a;return n("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[n("h3",{attrs:{id:"_1-对-redux-的理解-主要解决什么问题"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_1-对-redux-的理解-主要解决什么问题"}},[s._v("#")]),s._v(" 1. 对 Redux 的理解，主要解决什么问题")]),s._v(" "),n("p",[s._v("React是视图层框架。Redux是一个用来管理数据状态和UI状态的JavaScript应用工具。随着JavaScript单页应用（SPA）开发日趋复杂， JavaScript需要管理比任何时候都要多的state（状态）， Redux就是降低管理难度的。（Redux支持React、Angular、jQuery甚至纯JavaScript）。")]),s._v(" "),n("p",[s._v("在 React 中，UI 以组件的形式来搭建，组件之间可以嵌套组合。但 React 中组件间通信的数据流是单向的，顶层组件可以通过 props 属性向下层组件传递数据，而下层组件不能向上层组件传递数据，兄弟组件之间同样不能。这样简单的单向数据流支撑起了 React 中的数据可控性。")]),s._v(" "),n("p",[s._v("当项目越来越大的时候，管理数据的事件或回调函数将越来越多，也将越来越不好管理。管理不断变化的 state 非常困难。如果一个 model 的变化会引起另一个 model 变化，那么当 view 变化时，就可能引起对应 model 以及另一个 model 的变化，依次地，可能会引起另一个 view 的变化。直至你搞不清楚到底发生了什么。state 在什么时候，由于什么原因，如何变化已然不受控制。 当系统变得错综复杂的时候，想重现问题或者添加新功能就会变得举步维艰。如果这还不够糟糕，考虑一些来自前端开发领域的新需求，如更新调优、服务端渲染、路由跳转前请求数据等。state 的管理在大项目中相当复杂。")]),s._v(" "),n("p",[s._v("Redux 提供了一个叫 store 的统一仓储库，组件通过 dispatch 将 state 直接传入store，不用通过其他的组件。并且组件通过 subscribe 从 store获取到 state 的改变。使用了 Redux，所有的组件都可以从 store 中获取到所需的 state，他们也能从store 获取到 state 的改变。这比组件之间互相传递数据清晰明朗的多。")]),s._v(" "),n("p",[n("strong",[s._v("主要解决的问题：")]),s._v(" 单纯的Redux只是一个状态机，是没有UI呈现的，react- redux作用是将Redux的状态机和React的UI呈现绑定在一起，当你dispatch action改变state的时候，会自动更新页面。")]),s._v(" "),n("h3",{attrs:{id:"_2-redux-原理及工作流程"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_2-redux-原理及工作流程"}},[s._v("#")]),s._v(" 2. Redux 原理及工作流程")]),s._v(" "),n("p",[n("strong",[s._v("（1）原理")]),s._v(" Redux源码主要分为以下几个模块文件")]),s._v(" "),n("ul",[n("li",[s._v("compose.js 提供从右到左进行函数式编程")]),s._v(" "),n("li",[s._v("createStore.js 提供作为生成唯一store的函数")]),s._v(" "),n("li",[s._v("combineReducers.js 提供合并多个reducer的函数，保证store的唯一性")]),s._v(" "),n("li",[s._v("bindActionCreators.js 可以让开发者在不直接接触dispacth的前提下进行更改state的操作")]),s._v(" "),n("li",[s._v("applyMiddleware.js 这个方法通过中间件来增强dispatch的功能")])]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("const actionTypes = {\n    ADD: 'ADD',\n    CHANGEINFO: 'CHANGEINFO',\n}\n\nconst initState = {\n    info: '初始化',\n}\n\nexport default function initReducer(state=initState, action) {\n    switch(action.type) {\n        case actionTypes.CHANGEINFO:\n            return {\n                ...state,\n                info: action.preload.info || '',\n            }\n        default:\n            return { ...state };\n    }\n}\n\nexport default function createStore(reducer, initialState, middleFunc) {\n\n    if (initialState && typeof initialState === 'function') {\n        middleFunc = initialState;\n        initialState = undefined;\n    }\n\n    let currentState = initialState;\n\n    const listeners = [];\n\n    if (middleFunc && typeof middleFunc === 'function') {\n        // 封装dispatch \n        return middleFunc(createStore)(reducer, initialState);\n    }\n\n    const getState = () => {\n        return currentState;\n    }\n\n    const dispatch = (action) => {\n        currentState = reducer(currentState, action);\n\n        listeners.forEach(listener => {\n            listener();\n        })\n    }\n\n    const subscribe = (listener) => {\n        listeners.push(listener);\n    }\n\n    return {\n        getState,\n        dispatch,\n        subscribe\n    }\n}\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br"),n("span",{staticClass:"line-number"},[s._v("14")]),n("br"),n("span",{staticClass:"line-number"},[s._v("15")]),n("br"),n("span",{staticClass:"line-number"},[s._v("16")]),n("br"),n("span",{staticClass:"line-number"},[s._v("17")]),n("br"),n("span",{staticClass:"line-number"},[s._v("18")]),n("br"),n("span",{staticClass:"line-number"},[s._v("19")]),n("br"),n("span",{staticClass:"line-number"},[s._v("20")]),n("br"),n("span",{staticClass:"line-number"},[s._v("21")]),n("br"),n("span",{staticClass:"line-number"},[s._v("22")]),n("br"),n("span",{staticClass:"line-number"},[s._v("23")]),n("br"),n("span",{staticClass:"line-number"},[s._v("24")]),n("br"),n("span",{staticClass:"line-number"},[s._v("25")]),n("br"),n("span",{staticClass:"line-number"},[s._v("26")]),n("br"),n("span",{staticClass:"line-number"},[s._v("27")]),n("br"),n("span",{staticClass:"line-number"},[s._v("28")]),n("br"),n("span",{staticClass:"line-number"},[s._v("29")]),n("br"),n("span",{staticClass:"line-number"},[s._v("30")]),n("br"),n("span",{staticClass:"line-number"},[s._v("31")]),n("br"),n("span",{staticClass:"line-number"},[s._v("32")]),n("br"),n("span",{staticClass:"line-number"},[s._v("33")]),n("br"),n("span",{staticClass:"line-number"},[s._v("34")]),n("br"),n("span",{staticClass:"line-number"},[s._v("35")]),n("br"),n("span",{staticClass:"line-number"},[s._v("36")]),n("br"),n("span",{staticClass:"line-number"},[s._v("37")]),n("br"),n("span",{staticClass:"line-number"},[s._v("38")]),n("br"),n("span",{staticClass:"line-number"},[s._v("39")]),n("br"),n("span",{staticClass:"line-number"},[s._v("40")]),n("br"),n("span",{staticClass:"line-number"},[s._v("41")]),n("br"),n("span",{staticClass:"line-number"},[s._v("42")]),n("br"),n("span",{staticClass:"line-number"},[s._v("43")]),n("br"),n("span",{staticClass:"line-number"},[s._v("44")]),n("br"),n("span",{staticClass:"line-number"},[s._v("45")]),n("br"),n("span",{staticClass:"line-number"},[s._v("46")]),n("br"),n("span",{staticClass:"line-number"},[s._v("47")]),n("br"),n("span",{staticClass:"line-number"},[s._v("48")]),n("br"),n("span",{staticClass:"line-number"},[s._v("49")]),n("br"),n("span",{staticClass:"line-number"},[s._v("50")]),n("br"),n("span",{staticClass:"line-number"},[s._v("51")]),n("br"),n("span",{staticClass:"line-number"},[s._v("52")]),n("br"),n("span",{staticClass:"line-number"},[s._v("53")]),n("br"),n("span",{staticClass:"line-number"},[s._v("54")]),n("br"),n("span",{staticClass:"line-number"},[s._v("55")]),n("br"),n("span",{staticClass:"line-number"},[s._v("56")]),n("br"),n("span",{staticClass:"line-number"},[s._v("57")]),n("br"),n("span",{staticClass:"line-number"},[s._v("58")]),n("br"),n("span",{staticClass:"line-number"},[s._v("59")]),n("br")])]),n("p",[n("strong",[s._v("（2）工作流程")])]),s._v(" "),n("ul",[n("li",[s._v("const store= createStore（fn）生成数据;")]),s._v(" "),n("li",[s._v("action: {type: Symble('action01), payload:'payload' }定义行为;")]),s._v(" "),n("li",[s._v("dispatch发起action：store.dispatch(doSomething('action001'));")]),s._v(" "),n("li",[s._v("reducer：处理action，返回新的state;")])]),s._v(" "),n("p",[s._v("通俗点解释：")]),s._v(" "),n("ul",[n("li",[s._v("首先，用户（通过View）发出Action，发出方式就用到了dispatch方法")]),s._v(" "),n("li",[s._v("然后，Store自动调用Reducer，并且传入两个参数：当前State和收到的Action，Reducer会返回新的State")]),s._v(" "),n("li",[s._v("State—旦有变化，Store就会调用监听函数，来更新View")])]),s._v(" "),n("p",[s._v("以 store 为核心，可以把它看成数据存储中心，但是他要更改数据的时候不能直接修改，数据修改更新的角色由Reducers来担任，store只做存储，中间人，当Reducers的更新完成以后会通过store的订阅来通知react component，组件把新的状态重新获取渲染，组件中也能主动发送action，创建action后这个动作是不会执行的，所以要dispatch这个action，让store通过reducers去做更新React Component 就是react的每个组件。")]),s._v(" "),n("h3",{attrs:{id:"_3-redux-中异步的请求怎么处理"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_3-redux-中异步的请求怎么处理"}},[s._v("#")]),s._v(" 3. Redux 中异步的请求怎么处理")]),s._v(" "),n("p",[s._v("可以在 componentDidmount 中直接进⾏请求⽆须借助redux。但是在⼀定规模的项⽬中,上述⽅法很难进⾏异步流的管理,通常情况下我们会借助redux的异步中间件进⾏异步处理。redux异步流中间件其实有很多，当下主流的异步中间件有两种redux-thunk、redux-saga。")]),s._v(" "),n("p",[n("strong",[s._v("（1）使用react-thunk中间件")])]),s._v(" "),n("p",[n("strong",[s._v("redux-thunk")]),s._v("优点:")]),s._v(" "),n("ul",[n("li",[s._v("体积⼩: redux-thunk的实现⽅式很简单,只有不到20⾏代码")]),s._v(" "),n("li",[s._v("使⽤简单: redux-thunk没有引⼊像redux-saga或者redux-observable额外的范式,上⼿简单")])]),s._v(" "),n("p",[n("strong",[s._v("redux-thunk")]),s._v("缺陷:")]),s._v(" "),n("ul",[n("li",[s._v("样板代码过多: 与redux本身⼀样,通常⼀个请求需要⼤量的代码,⽽且很多都是重复性质的")]),s._v(" "),n("li",[s._v("耦合严重: 异步操作与redux的action偶合在⼀起,不⽅便管理")]),s._v(" "),n("li",[s._v("功能孱弱: 有⼀些实际开发中常⽤的功能需要⾃⼰进⾏封装")])]),s._v(" "),n("p",[s._v("使用步骤：")]),s._v(" "),n("ul",[n("li",[s._v("配置中间件，在store的创建中配置")])]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("import {createStore, applyMiddleware, compose} from 'redux';\nimport reducer from './reducer';\nimport thunk from 'redux-thunk'\n\n// 设置调试工具\nconst composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({}) : compose;\n// 设置中间件\nconst enhancer = composeEnhancers(\n  applyMiddleware(thunk)\n);\n\nconst store = createStore(reducer, enhancer);\n\nexport default store;\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br"),n("span",{staticClass:"line-number"},[s._v("14")]),n("br")])]),n("ul",[n("li",[s._v("添加一个返回函数的actionCreator，将异步请求逻辑放在里面")])]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("/**\n  发送get请求，并生成相应action，更新store的函数\n  @param url {string} 请求地址\n  @param func {function} 真正需要生成的action对应的actionCreator\n  @return {function} \n*/\n// dispatch为自动接收的store.dispatch函数 \nexport const getHttpAction = (url, func) => (dispatch) => {\n    axios.get(url).then(function(res){\n        const action = func(res.data)\n        dispatch(action)\n    })\n}\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br")])]),n("ul",[n("li",[s._v("生成action，并发送action")])]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("componentDidMount(){\n    var action = getHttpAction('/getData', getInitTodoItemAction)\n    // 发送函数类型的action时，该action的函数体会自动执行\n    store.dispatch(action)\n}\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br")])]),n("p",[n("strong",[s._v("（2）使用redux-saga中间件")])]),s._v(" "),n("p",[n("strong",[s._v("redux-saga")]),s._v("优点:")]),s._v(" "),n("ul",[n("li",[s._v("异步解耦: 异步操作被被转移到单独 saga.js 中，不再是掺杂在 action.js 或 component.js 中")]),s._v(" "),n("li",[s._v("action摆脱thunk function: dispatch 的参数依然是⼀个纯粹的 action (FSA)，⽽不是充满 “⿊魔法” thunk function")]),s._v(" "),n("li",[s._v("异常处理: 受益于 generator function 的 saga 实现，代码异常/请求失败 都可以直接通过 try/catch 语法直接捕获处理")]),s._v(" "),n("li",[s._v("功能强⼤: redux-saga提供了⼤量的Saga 辅助函数和Effect 创建器供开发者使⽤,开发者⽆须封装或者简单封装即可使⽤")]),s._v(" "),n("li",[s._v("灵活: redux-saga可以将多个Saga可以串⾏/并⾏组合起来,形成⼀个⾮常实⽤的异步flow")]),s._v(" "),n("li",[s._v("易测试，提供了各种case的测试⽅案，包括mock task，分⽀覆盖等等")])]),s._v(" "),n("p",[n("strong",[s._v("redux-saga")]),s._v("缺陷:")]),s._v(" "),n("ul",[n("li",[s._v("额外的学习成本: redux-saga不仅在使⽤难以理解的 generator function,⽽且有数⼗个API,学习成本远超redux-thunk,最重要的是你的额外学习成本是只服务于这个库的,与redux-observable不同,redux-observable虽然也有额外学习成本但是背后是rxjs和⼀整套思想")]),s._v(" "),n("li",[s._v("体积庞⼤: 体积略⼤,代码近2000⾏，min版25KB左右")]),s._v(" "),n("li",[s._v("功能过剩: 实际上并发控制等功能很难⽤到,但是我们依然需要引⼊这些代码")]),s._v(" "),n("li",[s._v("ts⽀持不友好: yield⽆法返回TS类型")])]),s._v(" "),n("p",[s._v("redux-saga可以捕获action，然后执行一个函数，那么可以把异步代码放在这个函数中，使用步骤如下：")]),s._v(" "),n("ul",[n("li",[s._v("配置中间件")])]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("import {createStore, applyMiddleware, compose} from 'redux';\nimport reducer from './reducer';\nimport createSagaMiddleware from 'redux-saga'\nimport TodoListSaga from './sagas'\n\nconst composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({}) : compose;\nconst sagaMiddleware = createSagaMiddleware()\n\nconst enhancer = composeEnhancers(\n  applyMiddleware(sagaMiddleware)\n);\n\nconst store = createStore(reducer, enhancer);\nsagaMiddleware.run(TodoListSaga)\n\nexport default store;\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br"),n("span",{staticClass:"line-number"},[s._v("14")]),n("br"),n("span",{staticClass:"line-number"},[s._v("15")]),n("br"),n("span",{staticClass:"line-number"},[s._v("16")]),n("br")])]),n("ul",[n("li",[s._v("将异步请求放在sagas.js中")])]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("import {takeEvery, put} from 'redux-saga/effects'\nimport {initTodoList} from './actionCreator'\nimport {GET_INIT_ITEM} from './actionTypes'\nimport axios from 'axios'\n\nfunction* func(){\n    try{\n        // 可以获取异步返回数据\n        const res = yield axios.get('/getData')\n        const action = initTodoList(res.data)\n        // 将action发送到reducer\n        yield put(action)\n    }catch(e){\n        console.log('网络请求失败')\n    }\n}\n\nfunction* mySaga(){\n    // 自动捕获GET_INIT_ITEM类型的action，并执行func\n    yield takeEvery(GET_INIT_ITEM, func)\n}\n\nexport default mySaga\n\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br"),n("span",{staticClass:"line-number"},[s._v("14")]),n("br"),n("span",{staticClass:"line-number"},[s._v("15")]),n("br"),n("span",{staticClass:"line-number"},[s._v("16")]),n("br"),n("span",{staticClass:"line-number"},[s._v("17")]),n("br"),n("span",{staticClass:"line-number"},[s._v("18")]),n("br"),n("span",{staticClass:"line-number"},[s._v("19")]),n("br"),n("span",{staticClass:"line-number"},[s._v("20")]),n("br"),n("span",{staticClass:"line-number"},[s._v("21")]),n("br"),n("span",{staticClass:"line-number"},[s._v("22")]),n("br"),n("span",{staticClass:"line-number"},[s._v("23")]),n("br"),n("span",{staticClass:"line-number"},[s._v("24")]),n("br")])]),n("ul",[n("li",[s._v("发送action")])]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("componentDidMount(){\n  const action = getInitTodoItemAction()\n  store.dispatch(action)\n}\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br")])]),n("h3",{attrs:{id:"_4-redux-怎么实现属性传递-介绍下原理"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_4-redux-怎么实现属性传递-介绍下原理"}},[s._v("#")]),s._v(" 4. Redux 怎么实现属性传递，介绍下原理")]),s._v(" "),n("p",[s._v("react-redux 数据传输∶ view--\x3eaction--\x3ereducer--\x3estore--\x3eview。看下点击事件的数据是如何通过redux传到view上：")]),s._v(" "),n("ul",[n("li",[s._v("view 上的AddClick 事件通过mapDispatchToProps 把数据传到action ---\x3e click:()=>dispatch(ADD)")]),s._v(" "),n("li",[s._v("action 的ADD 传到reducer上")]),s._v(" "),n("li",[s._v("reducer传到store上 const store = createStore(reducer);")]),s._v(" "),n("li",[s._v("store再通过 mapStateToProps 映射穿到view上text:State.text")])]),s._v(" "),n("p",[s._v("代码示例∶")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("import React from 'react';\nimport ReactDOM from 'react-dom';\nimport { createStore } from 'redux';\nimport { Provider, connect } from 'react-redux';\nclass App extends React.Component{\n    render(){\n        let { text, click, clickR } = this.props;\n        return(\n            <div>\n                <div>数据:已有人{text}</div>\n                <div onClick={click}>加人</div>\n                <div onClick={clickR}>减人</div>\n            </div>\n        )\n    }\n}\nconst initialState = {\n    text:5\n}\nconst reducer = function(state,action){\n    switch(action.type){\n        case 'ADD':\n            return {text:state.text+1}\n        case 'REMOVE':\n            return {text:state.text-1}\n        default:\n            return initialState;\n    }\n}\n\nlet ADD = {\n    type:'ADD'\n}\nlet Remove = {\n    type:'REMOVE'\n}\n\nconst store = createStore(reducer);\n\nlet mapStateToProps = function (state){\n    return{\n        text:state.text\n    }\n}\n\nlet mapDispatchToProps = function(dispatch){\n    return{\n        click:()=>dispatch(ADD),\n        clickR:()=>dispatch(Remove)\n    }\n}\n\nconst App1 = connect(mapStateToProps,mapDispatchToProps)(App);\n\nReactDOM.render(\n    <Provider store = {store}>\n        <App1></App1>\n    </Provider>,document.getElementById('root')\n)\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br"),n("span",{staticClass:"line-number"},[s._v("14")]),n("br"),n("span",{staticClass:"line-number"},[s._v("15")]),n("br"),n("span",{staticClass:"line-number"},[s._v("16")]),n("br"),n("span",{staticClass:"line-number"},[s._v("17")]),n("br"),n("span",{staticClass:"line-number"},[s._v("18")]),n("br"),n("span",{staticClass:"line-number"},[s._v("19")]),n("br"),n("span",{staticClass:"line-number"},[s._v("20")]),n("br"),n("span",{staticClass:"line-number"},[s._v("21")]),n("br"),n("span",{staticClass:"line-number"},[s._v("22")]),n("br"),n("span",{staticClass:"line-number"},[s._v("23")]),n("br"),n("span",{staticClass:"line-number"},[s._v("24")]),n("br"),n("span",{staticClass:"line-number"},[s._v("25")]),n("br"),n("span",{staticClass:"line-number"},[s._v("26")]),n("br"),n("span",{staticClass:"line-number"},[s._v("27")]),n("br"),n("span",{staticClass:"line-number"},[s._v("28")]),n("br"),n("span",{staticClass:"line-number"},[s._v("29")]),n("br"),n("span",{staticClass:"line-number"},[s._v("30")]),n("br"),n("span",{staticClass:"line-number"},[s._v("31")]),n("br"),n("span",{staticClass:"line-number"},[s._v("32")]),n("br"),n("span",{staticClass:"line-number"},[s._v("33")]),n("br"),n("span",{staticClass:"line-number"},[s._v("34")]),n("br"),n("span",{staticClass:"line-number"},[s._v("35")]),n("br"),n("span",{staticClass:"line-number"},[s._v("36")]),n("br"),n("span",{staticClass:"line-number"},[s._v("37")]),n("br"),n("span",{staticClass:"line-number"},[s._v("38")]),n("br"),n("span",{staticClass:"line-number"},[s._v("39")]),n("br"),n("span",{staticClass:"line-number"},[s._v("40")]),n("br"),n("span",{staticClass:"line-number"},[s._v("41")]),n("br"),n("span",{staticClass:"line-number"},[s._v("42")]),n("br"),n("span",{staticClass:"line-number"},[s._v("43")]),n("br"),n("span",{staticClass:"line-number"},[s._v("44")]),n("br"),n("span",{staticClass:"line-number"},[s._v("45")]),n("br"),n("span",{staticClass:"line-number"},[s._v("46")]),n("br"),n("span",{staticClass:"line-number"},[s._v("47")]),n("br"),n("span",{staticClass:"line-number"},[s._v("48")]),n("br"),n("span",{staticClass:"line-number"},[s._v("49")]),n("br"),n("span",{staticClass:"line-number"},[s._v("50")]),n("br"),n("span",{staticClass:"line-number"},[s._v("51")]),n("br"),n("span",{staticClass:"line-number"},[s._v("52")]),n("br"),n("span",{staticClass:"line-number"},[s._v("53")]),n("br"),n("span",{staticClass:"line-number"},[s._v("54")]),n("br"),n("span",{staticClass:"line-number"},[s._v("55")]),n("br"),n("span",{staticClass:"line-number"},[s._v("56")]),n("br"),n("span",{staticClass:"line-number"},[s._v("57")]),n("br"),n("span",{staticClass:"line-number"},[s._v("58")]),n("br"),n("span",{staticClass:"line-number"},[s._v("59")]),n("br")])]),n("h3",{attrs:{id:"_5-redux-中间件是什么-接受几个参数-柯里化函数两端的参数具体是什么"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_5-redux-中间件是什么-接受几个参数-柯里化函数两端的参数具体是什么"}},[s._v("#")]),s._v(" 5. Redux 中间件是什么？接受几个参数？柯里化函数两端的参数具体是什么？")]),s._v(" "),n("p",[s._v('Redux 的中间件提供的是位于 action 被发起之后，到达 reducer 之前的扩展点，换而言之，原本 view -→> action -> reducer -> store 的数据流加上中间件后变成了 view -> action -> middleware -> reducer -> store ，在这一环节可以做一些"副作用"的操作，如异步请求、打印日志等。')]),s._v(" "),n("p",[s._v("applyMiddleware源码：")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("export default function applyMiddleware(...middlewares) {\n    return createStore => (...args) => {\n        // 利用传入的createStore和reducer和创建一个store\n        const store = createStore(...args)\n        let dispatch = () => {\n            throw new Error()\n        }\n        const middlewareAPI = {\n            getState: store.getState,\n            dispatch: (...args) => dispatch(...args)\n        }\n        // 让每个 middleware 带着 middlewareAPI 这个参数分别执行一遍\n        const chain = middlewares.map(middleware => middleware(middlewareAPI))\n        // 接着 compose 将 chain 中的所有匿名函数，组装成一个新的函数，即新的 dispatch\n        dispatch = compose(...chain)(store.dispatch)\n        return {\n            ...store,\n            dispatch\n        }\n    }\n}\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br"),n("span",{staticClass:"line-number"},[s._v("14")]),n("br"),n("span",{staticClass:"line-number"},[s._v("15")]),n("br"),n("span",{staticClass:"line-number"},[s._v("16")]),n("br"),n("span",{staticClass:"line-number"},[s._v("17")]),n("br"),n("span",{staticClass:"line-number"},[s._v("18")]),n("br"),n("span",{staticClass:"line-number"},[s._v("19")]),n("br"),n("span",{staticClass:"line-number"},[s._v("20")]),n("br"),n("span",{staticClass:"line-number"},[s._v("21")]),n("br")])]),n("p",[s._v("从applyMiddleware中可以看出∶")]),s._v(" "),n("ul",[n("li",[s._v("redux中间件接受一个对象作为参数，对象的参数上有两个字段 dispatch 和 getState，分别代表着 Redux Store 上的两个同名函数。")]),s._v(" "),n("li",[s._v("柯里化函数两端一个是 middewares，一个是store.dispatch")])]),s._v(" "),n("h3",{attrs:{id:"_6-redux-请求中间件如何处理并发"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_6-redux-请求中间件如何处理并发"}},[s._v("#")]),s._v(" 6. Redux 请求中间件如何处理并发")]),s._v(" "),n("p",[n("strong",[s._v("使用redux-Saga")]),s._v(" redux-saga是一个管理redux应用异步操作的中间件，用于代替 redux-thunk 的。它通过创建 Sagas 将所有异步操作逻辑存放在一个地方进行集中处理，以此将react中的同步操作与异步操作区分开来，以便于后期的管理与维护。 redux-saga如何处理并发：")]),s._v(" "),n("ul",[n("li",[n("strong",[s._v("takeEvery")])])]),s._v(" "),n("p",[s._v("可以让多个 saga 任务并行被 fork 执行。")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v('import {\n    fork,\n    take\n} from "redux-saga/effects"\n\nconst takeEvery = (pattern, saga, ...args) => fork(function*() {\n    while (true) {\n        const action = yield take(pattern)\n        yield fork(saga, ...args.concat(action))\n    }\n})\n')])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br")])]),n("ul",[n("li",[n("strong",[s._v("takeLatest")])])]),s._v(" "),n("p",[s._v("takeLatest 不允许多个 saga 任务并行地执行。一旦接收到新的发起的 action，它就会取消前面所有 fork 过的任务（如果这些任务还在执行的话）。 在处理 AJAX 请求的时候，如果只希望获取最后那个请求的响应， takeLatest 就会非常有用。")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v('import {\n    cancel,\n    fork,\n    take\n} from "redux-saga/effects"\n\nconst takeLatest = (pattern, saga, ...args) => fork(function*() {\n    let lastTask\n    while (true) {\n        const action = yield take(pattern)\n        if (lastTask) {\n            yield cancel(lastTask) // 如果任务已经结束，则 cancel 为空操作\n        }\n        lastTask = yield fork(saga, ...args.concat(action))\n    }\n})\n')])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br"),n("span",{staticClass:"line-number"},[s._v("14")]),n("br"),n("span",{staticClass:"line-number"},[s._v("15")]),n("br"),n("span",{staticClass:"line-number"},[s._v("16")]),n("br")])]),n("h3",{attrs:{id:"_7-redux-状态管理器和变量挂载到-window-中有什么区别"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_7-redux-状态管理器和变量挂载到-window-中有什么区别"}},[s._v("#")]),s._v(" 7. Redux 状态管理器和变量挂载到 window 中有什么区别")]),s._v(" "),n("p",[s._v("两者都是存储数据以供后期使用。但是Redux状态更改可回溯——Time travel，数据多了的时候可以很清晰的知道改动在哪里发生，完整的提供了一套状态管理模式。")]),s._v(" "),n("p",[s._v("随着 JavaScript 单页应用开发日趋复杂，JavaScript 需要管理比任何时候都要多的 state （状态）。 这些 state 可能包括服务器响应、缓存数据、本地生成尚未持久化到服务器的数据，也包括 UI状态，如激活的路由，被选中的标签，是否显示加载动效或者分页器等等。")]),s._v(" "),n("p",[s._v("管理不断变化的 state 非常困难。如果一个 model 的变化会引起另一个 model 变化，那么当 view 变化时，就可能引起对应 model 以及另一个model 的变化，依次地，可能会引起另一个 view 的变化。直至你搞不清楚到底发生了什么。state 在什么时候，由于什么原因，如何变化已然不受控制。 当系统变得错综复杂的时候，想重现问题或者添加新功能就会变得举步维艰。 如果这还不够糟糕，考虑一些来自前端开发领域的新需求，如更新调优、服务端渲染、路由跳转前请求数据等等。前端开发者正在经受前所未有的复杂性，难道就这么放弃了吗?当然不是。")]),s._v(" "),n("p",[s._v("这里的复杂性很大程度上来自于：我们总是将两个难以理清的概念混淆在一起：变化和异步。 可以称它们为曼妥思和可乐。如果把二者分开，能做的很好，但混到一起，就变得一团糟。一些库如 React 视图在视图层禁止异步和直接操作 DOM来解决这个问题。美中不足的是，React 依旧把处理 state 中数据的问题留给了你。Redux就是为了帮你解决这个问题。")]),s._v(" "),n("h3",{attrs:{id:"_8-mobox-和-redux-有什么区别"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_8-mobox-和-redux-有什么区别"}},[s._v("#")]),s._v(" 8. mobox 和 redux 有什么区别？")]),s._v(" "),n("p",[n("strong",[s._v("（1）共同点")])]),s._v(" "),n("ul",[n("li",[s._v("为了解决状态管理混乱，无法有效同步的问题统一维护管理应用状态;")]),s._v(" "),n("li",[s._v("某一状态只有一个可信数据来源（通常命名为store，指状态容器）;")]),s._v(" "),n("li",[s._v("操作更新状态方式统一，并且可控（通常以action方式提供更新状态的途径）;")]),s._v(" "),n("li",[s._v("支持将store与React组件连接，如react-redux，mobx- react;")])]),s._v(" "),n("p",[n("strong",[s._v("（2）区别")]),s._v(" Redux更多的是遵循Flux模式的一种实现，是一个 JavaScript库，它关注点主要是以下几方面∶")]),s._v(" "),n("ul",[n("li",[n("p",[s._v("Action∶ 一个JavaScript对象，描述动作相关信息，主要包含type属性和payload属性∶")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("o type∶ action 类型; o payload∶ 负载数据;\n\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br")])])]),s._v(" "),n("li",[n("p",[s._v("Reducer∶ 定义应用状态如何响应不同动作（action），如何更新状态;")])]),s._v(" "),n("li",[n("p",[s._v("Store∶ 管理action和reducer及其关系的对象，主要提供以下功能∶")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("o 维护应用状态并支持访问状态(getState());\no 支持监听action的分发，更新状态(dispatch(action)); \no 支持订阅store的变更(subscribe(listener));\n\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br")])])]),s._v(" "),n("li",[n("p",[s._v("异步流∶ 由于Redux所有对store状态的变更，都应该通过action触发，异步任务（通常都是业务或获取数据任务）也不例外，而为了不将业务或数据相关的任务混入React组件中，就需要使用其他框架配合管理异步任务流程，如redux-thunk，redux-saga等;")])])]),s._v(" "),n("p",[s._v("Mobx是一个透明函数响应式编程的状态管理库，它使得状态管理简单可伸缩∶")]),s._v(" "),n("ul",[n("li",[s._v("Action∶定义改变状态的动作函数，包括如何变更状态;")]),s._v(" "),n("li",[s._v("Store∶ 集中管理模块状态（State）和动作(action)")]),s._v(" "),n("li",[s._v("Derivation（衍生）∶ 从应用状态中派生而出，且没有任何其他影响的数据")])]),s._v(" "),n("p",[n("strong",[s._v("对比总结：")])]),s._v(" "),n("ul",[n("li",[s._v("redux将数据保存在单一的store中，mobx将数据保存在分散的多个store中")]),s._v(" "),n("li",[s._v("redux使用plain object保存数据，需要手动处理变化后的操作;mobx适用observable保存数据，数据变化后自动处理响应的操作")]),s._v(" "),n("li",[s._v("redux使用不可变状态，这意味着状态是只读的，不能直接去修改它，而是应该返回一个新的状态，同时使用纯函数;mobx中的状态是可变的，可以直接对其进行修改")]),s._v(" "),n("li",[s._v("mobx相对来说比较简单，在其中有很多的抽象，mobx更多的使用面向对象的编程思维;redux会比较复杂，因为其中的函数式编程思想掌握起来不是那么容易，同时需要借助一系列的中间件来处理异步和副作用")]),s._v(" "),n("li",[s._v("mobx中有更多的抽象和封装，调试会比较困难，同时结果也难以预测;而redux提供能够进行时间回溯的开发工具，同时其纯函数以及更少的抽象，让调试变得更加的容易")])]),s._v(" "),n("h3",{attrs:{id:"_9-redux-和-vuex-有什么区别-它们的共同思想"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_9-redux-和-vuex-有什么区别-它们的共同思想"}},[s._v("#")]),s._v(" 9. Redux 和 Vuex 有什么区别，它们的共同思想")]),s._v(" "),n("p",[n("strong",[s._v("（1）Redux 和 Vuex区别")])]),s._v(" "),n("ul",[n("li",[s._v("Vuex改进了Redux中的Action和Reducer函数，以mutations变化函数取代Reducer，无需switch，只需在对应的mutation函数里改变state值即可")]),s._v(" "),n("li",[s._v("Vuex由于Vue自动重新渲染的特性，无需订阅重新渲染函数，只要生成新的State即可")]),s._v(" "),n("li",[s._v("Vuex数据流的顺序是∶View调用store.commit提交对应的请求到Store中对应的mutation函数->store改变（vue检测到数据变化自动渲染）")])]),s._v(" "),n("p",[s._v("通俗点理解就是，vuex 弱化 dispatch，通过commit进行 store状态的一次更变；取消了action概念，不必传入特定的 action形式进行指定变更；弱化reducer，基于commit参数直接对数据进行转变，使得框架更加简易;")]),s._v(" "),n("p",[n("strong",[s._v("（2）共同思想")])]),s._v(" "),n("ul",[n("li",[s._v("单—的数据源")]),s._v(" "),n("li",[s._v("变化可以预测")])]),s._v(" "),n("p",[s._v("本质上∶ redux与vuex都是对mvvm思想的服务，将数据从视图中抽离的一种方案。")]),s._v(" "),n("h3",{attrs:{id:"_10-redux-中间件是怎么拿到store-和-action-然后怎么处理"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_10-redux-中间件是怎么拿到store-和-action-然后怎么处理"}},[s._v("#")]),s._v(" 10. Redux 中间件是怎么拿到store 和 action? 然后怎么处理?")]),s._v(" "),n("p",[s._v("redux中间件本质就是一个函数柯里化。redux applyMiddleware Api 源码中每个middleware 接受2个参数， Store 的getState 函数和dispatch 函数，分别获得store和action，最终返回一个函数。该函数会被传入 next 的下一个 middleware 的 dispatch 方法，并返回一个接收 action 的新函数，这个函数可以直接调用 next（action），或者在其他需要的时刻调用，甚至根本不去调用它。调用链中最后一个 middleware 会接受真实的 store的 dispatch 方法作为 next 参数，并借此结束调用链。所以，middleware 的函数签名是（{ getState，dispatch })=> next => action。")]),s._v(" "),n("h3",{attrs:{id:"_11-redux中的connect有什么作用"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_11-redux中的connect有什么作用"}},[s._v("#")]),s._v(" 11. Redux中的connect有什么作用")]),s._v(" "),n("p",[s._v("connect负责连接React和Redux")]),s._v(" "),n("p",[n("strong",[s._v("（1）获取state")])]),s._v(" "),n("p",[s._v("connect 通过 context获取 Provider 中的 store，通过"),n("code",[s._v("store.getState()")]),s._v(" 获取整个store tree 上所有state")]),s._v(" "),n("p",[n("strong",[s._v("（2）包装原组件")])]),s._v(" "),n("p",[s._v("将state和action通过props的方式传入到原组件内部 wrapWithConnect 返回—个 ReactComponent 对 象 Connect，Connect 重 新 render 外部传入的原组件 WrappedComponent ，并把 connect 中传入的 mapStateToProps，mapDispatchToProps与组件上原有的 props合并后，通过属性的方式传给WrappedComponent")]),s._v(" "),n("p",[n("strong",[s._v("（3）监听store tree变化")])]),s._v(" "),n("p",[s._v("connect缓存了store tree中state的状态，通过当前state状态 和变更前 state 状态进行比较，从而确定是否调用 "),n("code",[s._v("this.setState()")]),s._v("方法触发Connect及其子组件的重新渲染")])])}),[],!1,null,null,null);a.default=t.exports}}]);