webpackJsonp([0],[function(t,e){},function(t,e){},function(t,e){},function(t,e,s){function n(t){s(10)}var o=s(8)(s(6),s(9),n,"data-v-4fbb73e6",null);t.exports=o.exports},,function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=s(4),o=s(3),i=s.n(o),a=s(0),c=(s.n(a),s(2)),r=(s.n(c),s(1));s.n(r);n.a.config.productionTip=!1,new n.a({el:"#app",template:"<App/>",components:{App:i.a}})},function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=["Sun.","Mon.","Tue.","Wed.","Thu.","Fri.","Sat."];console.log(window.chrome);var o=window.chrome;e.default={data:function(){return{today:"",currentDate:"",todos:[],inputVal:"",showDateSelect:!1,setNotice:!1,noticeHour:0,noticeMin:0}},computed:{selectedDate:function(){var t=this.getCurrentDate(),e=t.getDay();return"<b>"+(e=n[e])+"</b> "+this.currentDate}},methods:{getCurrentDate:function(){if(0===this.currentDate.length)return new Date;var t=this.currentDate.split(".");return new Date(Number(t[0]),Number(t[1])-1,Number(t[2]))},formatDate:function(t){return t.getFullYear()+"."+(t.getMonth()+1)+"."+t.getDate()},toggleAction:function(t){t.showAction=!t.showAction},initDate:function(){var t=this.formatDate(new Date);this.today=t,this.currentDate=t},getTodods:function(){var t=this;o.runtime.sendMessage({type:"getAll",date:t.currentDate},function(e){e.map&&(e.map(function(t,e){return t.showAction=!1,t}),t.todos=e)})},init:function(){this.initDate(),this.getTodods()},saveNewTodo:function(t){console.log(t);var e=this;o.runtime.sendMessage({type:"add",date:e.currentDate,newTodo:t},function(s){console.log(s),s&&(t.showAction=!1,e.todos.push(t))})},typeNewTask:function(t){var e=this.inputVal.trim(),s=t.keyCode;if(this.showDateSelect=e.length>0,e.length>0&&13===s){this.showDateSelect=!0;var n={status:"on",message:e,setNotice:this.setNotice,noticeTime:this.setNotice?this.noticeHour+":"+this.noticeMin:""};this.saveNewTodo(n),this.inputVal="",this.setNotice=!1,this.showDateSelect=!1,this.noticeHour=0,this.noticeMin=0}},changeStatus:function(t,e){var s=this;"on"===t?e.status="done":"done"===t?e.status="on":"undone"===t&&(e.status="on"),o.runtime.sendMessage({type:"save",date:s.currentDate,todos:s.todos})},deleteTodo:function(t){var e=this;console.log(t),e.todos.splice(t,1),o.runtime.sendMessage({type:"save",date:e.currentDate,todos:e.todos})},turnPre:function(){var t=this.getCurrentDate(),e=new Date(t.getTime()-864e5),s=this.formatDate(e);this.currentDate=s,this.getTodods()},turnPost:function(){var t=this.getCurrentDate(),e=new Date(t.getTime()+864e5),s=this.formatDate(e);this.currentDate=s,this.getTodods()}}}},function(t,e){throw new Error("Module build failed: Error: [object Object] is not a PostCSS plugin\n    at Processor.normalize (/Users/henry/workspace/own-repos/todo-chrome/node_modules/postcss/lib/processor.js:145:15)\n    at new Processor (/Users/henry/workspace/own-repos/todo-chrome/node_modules/postcss/lib/processor.js:51:25)\n    at postcss (/Users/henry/workspace/own-repos/todo-chrome/node_modules/postcss/lib/postcss.js:73:10)\n    at loadPostcssConfig.then.config (/Users/henry/workspace/own-repos/todo-chrome/node_modules/vue-loader/lib/style-compiler/index.js:56:12)")},,function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"container",attrs:{id:"todo-list-container"}},[s("div",{staticClass:"banner"},[s("i",{staticClass:"iconfont icon-left",on:{click:t.turnPre}}),t._v(" "),s("div",{staticClass:"center",domProps:{innerHTML:t._s(t.selectedDate)}}),t._v(" "),s("i",{staticClass:"iconfont icon-right",on:{click:t.turnPost}})]),t._v(" "),t.todos.length>0?s("ul",{staticClass:"list-container"},t._l(t.todos,function(e,n){return s("li",{key:n,staticClass:"li"},[s("div",{staticClass:"list",class:e.status},[s("div",{staticClass:"status"},[s("div",{staticClass:"icon-container"},[s("i",{staticClass:"icon",on:{click:function(s){t.changeStatus(e.status,e)}}},[t._v("\n              "+t._s("done"===e.status?"✓":"")+"\n            ")])])]),t._v(" "),s("div",{staticClass:"content",attrs:{title:e.message},on:{click:function(s){t.toggleAction(e)}}},[t._v("\n          "+t._s(e.message)+"\n        ")]),t._v(" "),s("div",{staticClass:"notice"},[s("i",{staticClass:"iconfont icon-notice",class:{disabled:!e.setNotice}})])]),t._v(" "),s("transition",{attrs:{name:"custom-classes-transition","enter-active-class":"animated swing","leave-active-class":"animated flipOutY"}},[e.showAction?s("div",{staticClass:"actions"},[e.setNotice?t._e():s("div",{staticClass:"action"},[s("i",{staticClass:"iconfont icon-notice"})]),t._v(" "),s("div",{staticClass:"action",on:{click:function(e){t.deleteTodo(n)}}},[s("i",{staticClass:"iconfont icon-delete"})])]):t._e()])],1)})):s("ul",{staticClass:"list-container"},[t._m(0)]),t._v(" "),s("transition",{attrs:{name:"custom-classes-transition","enter-active-class":"animated flipInX","leave-active-class":"animated flipOutX"}},[t.today===t.currentDate?s("div",{staticClass:"input-container"},[s("transition",{attrs:{name:"custom-classes-transition","enter-active-class":"animated bounceIn","leave-active-class":"animated bounceOut"}},[t.showDateSelect?s("div",{staticClass:"notice-select"},[s("div",{staticClass:"notice-icon"},[s("i",{staticClass:"iconfont icon-notice",class:{disabled:t.setNotice},on:{click:function(e){t.setNotice=!t.setNotice}}})]),t._v(" "),s("div",{staticClass:"date-select"},[s("select",{directives:[{name:"model",rawName:"v-model",value:t.noticeHour,expression:"noticeHour"}],attrs:{disabled:!t.setNotice},on:{change:function(e){var s=Array.prototype.filter.call(e.target.options,function(t){return t.selected}).map(function(t){return"_value"in t?t._value:t.value});t.noticeHour=e.target.multiple?s:s[0]}}},t._l(24,function(e){return s("option",{domProps:{value:e-1}},[t._v(t._s(e-1))])})),t._v(" "),s("span",{staticClass:"time-split"},[t._v(":")]),t._v(" "),s("select",{directives:[{name:"model",rawName:"v-model",value:t.noticeMin,expression:"noticeMin"}],attrs:{disabled:!t.setNotice},on:{change:function(e){var s=Array.prototype.filter.call(e.target.options,function(t){return t.selected}).map(function(t){return"_value"in t?t._value:t.value});t.noticeMin=e.target.multiple?s:s[0]}}},t._l(60,function(e){return s("option",{domProps:{value:e-1}},[t._v(t._s(e-1))])}))])]):t._e()]),t._v(" "),s("div",{staticClass:"li"},[s("div",{staticClass:"status"},[s("div",{staticClass:"icon-container"},[s("i",{staticClass:"icon"})])]),t._v(" "),s("div",{staticClass:"content"},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.inputVal,expression:"inputVal"}],attrs:{type:"text",placeholder:"Type a new task, then Enter"},domProps:{value:t.inputVal},on:{keyup:t.typeNewTask,input:function(e){e.target.composing||(t.inputVal=e.target.value)}}})])])],1):t._e()])],1)},staticRenderFns:[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("li",{staticClass:"li"},[s("div",{staticClass:"tip"},[t._v("There are no todos.")])])}]}},function(t,e,s){var n=s(7);"string"==typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);s(11)("762b49f6",n,!0)}],[5]);