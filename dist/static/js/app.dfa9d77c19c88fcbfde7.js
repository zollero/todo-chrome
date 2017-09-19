webpackJsonp([0],[,function(t,e){},function(t,e){},function(t,e){},function(t,e,n){function s(t){n(10)}var i=n(0)(n(7),n(13),s,"data-v-4fbb73e6",null);t.exports=i.exports},,function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=n(5),i=n(4),a=n.n(i),o=n(1),c=(n.n(o),n(3)),r=(n.n(c),n(2));n.n(r);s.a.config.productionTip=!1,new s.a({el:"#app",template:"<App/>",components:{App:a.a}})},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=n(11),i=n.n(s),a=["Sun.","Mon.","Tue.","Wed.","Thu.","Fri.","Sat."],o=window.chrome;e.default={components:{todoList:i.a},data:function(){return{today:"",currentDate:"",todos:[],inputVal:"",showDateSelect:!1,setNotice:!1,noticeHour:0,noticeMin:0}},computed:{selectedDate:function(){var t=this.getCurrentDate(),e=t.getDay();return"<b>"+(e=a[e])+"</b> "+this.currentDate}},methods:{getCurrentDate:function(){if(0===this.currentDate.length)return new Date;var t=this.currentDate.split(".");return new Date(Number(t[0]),Number(t[1])-1,Number(t[2]))},formatDate:function(t){return t.getFullYear()+"."+(t.getMonth()+1)+"."+t.getDate()},initDate:function(){var t=this.formatDate(new Date);this.today=t,this.currentDate=t},getTodods:function(){var t=this;o.runtime.sendMessage({type:"getAll",date:t.currentDate},function(e){e.map&&(e.map(function(t,e){return t.showAction=!1,t}),t.todos=e)})},init:function(){this.initDate(),this.getTodods()},saveNewTodo:function(t){console.log(t);var e=this;o.runtime.sendMessage({type:"add",date:e.currentDate,newTodo:t},function(n){console.log(n),n&&(t.showAction=!1,e.todos.push(t))})},typeNewTask:function(t){var e=this.inputVal.trim(),n=t.keyCode;if(this.showDateSelect=e.length>0,e.length>0&&13===n){this.showDateSelect=!0;var s={status:"on",message:e,setNotice:this.setNotice,noticeTime:this.setNotice?this.noticeHour+":"+this.noticeMin:""};this.saveNewTodo(s),this.inputVal="",this.setNotice=!1,this.showDateSelect=!1,this.noticeHour=0,this.noticeMin=0}},turnPre:function(){var t=this.getCurrentDate(),e=new Date(t.getTime()-864e5),n=this.formatDate(e);this.currentDate=n,this.getTodods()},turnPost:function(){var t=this.getCurrentDate(),e=new Date(t.getTime()+864e5),n=this.formatDate(e);this.currentDate=n,this.getTodods()}},mounted:function(){this.init()}}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=window.chrome;e.default={props:{data:{type:Array,default:function(){return[]}},currentDate:{type:String,required:!0,default:function(){var t=new Date;return t.getFullYear()+"."+(t.getMonth()+1)+"."+t.getDate()}}},methods:{changeStatus:function(t,e){var n=this;"on"===t?e.status="done":"done"===t?e.status="on":"undone"===t&&(e.status="on"),s.runtime.sendMessage({type:"save",date:n.currentDate,todos:n.data})},toggleAction:function(t){t.showAction=!t.showAction},deleteTodo:function(t){var e=this;console.log(t),e.data.splice(t,1),s.runtime.sendMessage({type:"save",date:e.currentDate,todos:e.data})}}}},function(t,e){},function(t,e){},function(t,e,n){function s(t){n(9)}var i=n(0)(n(8),n(12),s,"data-v-176eb016",null);t.exports=i.exports},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("ul",{staticClass:"list-container"},[0===t.data.length?n("li",{staticClass:"li"},[n("div",{staticClass:"tip"},[t._v("There are no todos.")])]):t._e(),t._v(" "),t._l(t.data,function(e,s){return n("li",{key:s,staticClass:"li"},[n("div",{staticClass:"list",class:e.status},[n("div",{staticClass:"status"},[n("div",{staticClass:"icon-container"},[n("i",{staticClass:"icon",on:{click:function(n){t.changeStatus(e.status,e)}}},[t._v("\n            "+t._s("done"===e.status?"✓":"")+"\n          ")])])]),t._v(" "),n("div",{staticClass:"content",attrs:{title:e.message},on:{click:function(n){t.toggleAction(e)}}},[t._v("\n        "+t._s(e.message)+"\n      ")])]),t._v(" "),n("transition",{attrs:{name:"custom-classes-transition","enter-active-class":"animated swing","leave-active-class":"animated flipOutY"}},[e.showAction?n("div",{staticClass:"actions"},[n("div",{staticClass:"action",on:{click:function(e){t.deleteTodo(s)}}},[n("i",{staticClass:"iconfont icon-delete"})])]):t._e()])],1)})],2)},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"container",attrs:{id:"todo-list-container"}},[n("div",{staticClass:"banner"},[n("i",{staticClass:"iconfont icon-left",on:{click:t.turnPre}}),t._v(" "),n("div",{staticClass:"center",domProps:{innerHTML:t._s(t.selectedDate)}}),t._v(" "),n("i",{staticClass:"iconfont icon-right",on:{click:t.turnPost}})]),t._v(" "),n("todo-list",{attrs:{data:t.todos,"current-date":t.currentDate}}),t._v(" "),n("transition",{attrs:{name:"custom-classes-transition","enter-active-class":"animated flipInX","leave-active-class":"animated flipOutX"}},[t.today===t.currentDate?n("div",{staticClass:"input-container"},[n("div",{staticClass:"li"},[n("div",{staticClass:"status"},[n("div",{staticClass:"icon-container"},[n("i",{staticClass:"icon"})])]),t._v(" "),n("div",{staticClass:"content"},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.inputVal,expression:"inputVal"}],attrs:{type:"text",placeholder:"Type a new task, then Enter"},domProps:{value:t.inputVal},on:{keyup:t.typeNewTask,input:function(e){e.target.composing||(t.inputVal=e.target.value)}}})])])]):t._e()])],1)},staticRenderFns:[]}}],[6]);