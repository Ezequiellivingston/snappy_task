(function(t){function e(e){for(var a,i,r=e[0],c=e[1],l=e[2],m=0,d=[];m<r.length;m++)i=r[m],Object.prototype.hasOwnProperty.call(s,i)&&s[i]&&d.push(s[i][0]),s[i]=0;for(a in c)Object.prototype.hasOwnProperty.call(c,a)&&(t[a]=c[a]);u&&u(e);while(d.length)d.shift()();return o.push.apply(o,l||[]),n()}function n(){for(var t,e=0;e<o.length;e++){for(var n=o[e],a=!0,r=1;r<n.length;r++){var c=n[r];0!==s[c]&&(a=!1)}a&&(o.splice(e--,1),t=i(i.s=n[0]))}return t}var a={},s={app:0},o=[];function i(e){if(a[e])return a[e].exports;var n=a[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.m=t,i.c=a,i.d=function(t,e,n){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},i.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)i.d(n,a,function(e){return t[e]}.bind(null,a));return n},i.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="/";var r=window["webpackJsonp"]=window["webpackJsonp"]||[],c=r.push.bind(r);r.push=e,r=r.slice();for(var l=0;l<r.length;l++)e(r[l]);var u=c;o.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"0490":function(t,e,n){"use strict";n("c474")},"1b4e":function(t,e,n){"use strict";n("be17")},4343:function(t){t.exports=JSON.parse('[{"nombre":"CocaCola","clientes":20,"satisfaccion":75},{"nombre":"Pepsi","clientes":32,"satisfaccion":65},{"nombre":"Fanta","clientes":53,"satisfaccion":35},{"nombre":"7up","clientes":33,"satisfaccion":55},{"nombre":"Manaos","clientes":2,"satisfaccion":10},{"nombre":"Manaos Uva","clientes":0,"satisfaccion":0}]')},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var a=n("2b0e"),s=n("289d"),o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"has-background-light",attrs:{id:"app"}},[n("Navbar"),n("div",{staticClass:"container pt-5"},[n("MyTeamTable"),n("router-vier")],1)],1)},i=[],r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("b-navbar",[n("template",{slot:"brand"},[n("b-navbar-item",[n("img",{attrs:{src:"https://snappylabs.io/img/SnappyLogo.2cad62d7.svg",alt:"Logo de Snappy"}}),n("span",{staticClass:"ml-2 has-text-weight-bold"},[t._v("Snappy Labs")])])],1)],2)},c=[],l={},u=l,m=n("2877"),d=Object(m["a"])(u,r,c,!1,null,null,null),p=d.exports,f=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("div",{staticClass:"columns is-vcentered"},[n("div",{staticClass:"column is-8"},[n("GraphMetrics")],1),n("div",{staticClass:"column"},[n("div",{staticClass:"is-flex is-justify-content-flex-end"},[n("MyTeamCreateForm",{on:{refresh:t.getTeams}})],1)])]),n("b-table",{attrs:{data:t.teams,"show-detail-icon":t.showDetailIcon,detailed:"","detail-key":"nombre"},scopedSlots:t._u([{key:"detail",fn:function(e){return[n("div",{staticClass:"columns"},t._l(e.row.users,(function(e){return n("div",{key:e.nombre,staticClass:"column is-2"},[n("div",{staticClass:"card"},[n("div",{staticClass:"card-content is-flex is-flex-direction-column is-justify-content-center is-align-items-center"},[n("figure",{staticClass:"image has-background-info has-text-white"},[n("span",[t._v("T")])]),n("span",{staticClass:"mt-2"},[t._v(t._s(e.nombre))])])])])})),0)]}}])},[n("b-table-column",{attrs:{field:"nombre",label:"Teams",width:"100%"},scopedSlots:t._u([{key:"default",fn:function(e){return[n("span",[t._v(t._s(e.row.nombre))])]}}])}),n("b-table-column",{attrs:{field:"stores",label:"Stores"},scopedSlots:t._u([{key:"default",fn:function(e){return[n("span",{staticClass:"tag is-info"},[t._v(t._s(e.row.stores))])]}}])}),n("b-table-column",{attrs:{field:"_",label:"",width:"200px"},scopedSlots:t._u([{key:"default",fn:function(e){return[n("div",{staticClass:"btn_conten"},[n("MyTeamEditForm",{attrs:{team:e.row,indexteam:e.index},on:{refresh:t.getTeams}}),n("MyTeamRemoveForm",{attrs:{teamName:e.row.nombre,indexteam:e.index},on:{refresh:t.getTeams}})],1)]}}])})],1)],1)},b=[],v=(n("a434"),n("f6c0")),h=n("4343"),g={getStore:function(){return h},getTeams:function(){return v},createTeam:function(t){var e=t.nombre,n={nombre:e,users:[]};return v.push(n),n},updateTeam:function(t,e){var n=e.nombre,a=e.stores,s=e.users,o={nombre:n,stores:a,users:s};return v.splice(t,1,o),o},removeTeam:function(t){v.splice(t,1)}},y=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("b-button",{attrs:{type:"is-primary"},on:{click:function(e){t.isComponentModalActive=!0}}},[t._v("Add team")]),n("b-modal",{attrs:{width:340,scroll:"keep"},model:{value:t.isComponentModalActive,callback:function(e){t.isComponentModalActive=e},expression:"isComponentModalActive"}},[n("div",{staticClass:"card"},[n("div",{staticClass:"card-content"},[n("form",{on:{submit:function(e){return e.preventDefault(),t.createTeam()}}},[n("b-field",{attrs:{label:"Nombre",type:t.feedback.type,message:t.feedback.message}},[n("b-input",{attrs:{type:"text"},on:{focus:function(e){t.isTouch=!0}},model:{value:t.form.nombre,callback:function(e){t.$set(t.form,"nombre",e)},expression:"form.nombre"}})],1),n("div",{staticClass:"has-text-right"},[n("b-button",{staticClass:"mt-5",attrs:{type:"is-success is-light"},on:{click:function(e){t.isComponentModalActive=!1}}},[t._v("Cancelar")]),n("b-button",{staticClass:"mt-5",attrs:{type:"is-primary"},on:{click:function(e){return t.createTeam()}}},[t._v("Guardar")])],1)],1)])])])],1)},C=[],x=(n("ac1f"),{data:function(){return{isComponentModalActive:!1,isTouch:!1,form:{nombre:""}}},computed:{feedback:function(){var t=/^[A-Za-z][A-Za-z0-9]*$/,e=t.exec(this.form.nombre);return e?{valid:!0,type:"",message:""}:{valid:!1,type:"is-danger",message:"Ingrese el nombre del team"}}},methods:{createTeam:function(){this.feedback.valid?(g.createTeam(this.form),this.isComponentModalActive=!1,this.$emit("refresh"),this.$buefy.toast.open({duration:3e3,message:"Agregaste ".concat(this.form.nombre," a Team con éxito"),type:"is-success"}),this.form.nombre=""):this.$buefy.toast.open({duration:3e3,message:"Asegura no ingresar espacios, comas o caracteres especiales.",position:"is-top",type:"is-danger"})}}}),_=x,M=Object(m["a"])(_,y,C,!1,null,null,null),T=M.exports,k=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("b-button",{staticClass:"button_modal",attrs:{size:"is-small"},on:{click:function(e){t.isComponentModalActive=!0}}},[n("b-icon",{staticClass:"btn",attrs:{icon:"pencil"}})],1),n("b-modal",{attrs:{width:340,scroll:"keep"},model:{value:t.isComponentModalActive,callback:function(e){t.isComponentModalActive=e},expression:"isComponentModalActive"}},[n("div",{staticClass:"card"},[n("div",{staticClass:"card-content"},[n("form",{on:{submit:function(e){return e.preventDefault(),t.updateTeam()}}},[n("b-field",{attrs:{label:"Nombre",type:t.feedback.type,message:t.feedback.message}},[n("b-input",{attrs:{type:"text"},on:{focus:function(e){t.isTouch=!0}},model:{value:t.form.nombre,callback:function(e){t.$set(t.form,"nombre",e)},expression:"form.nombre"}})],1),n("div",{staticClass:"has-text-right"},[n("b-button",{staticClass:"mt-5",attrs:{type:"is-success is-light"},on:{click:function(e){t.isComponentModalActive=!1}}},[t._v("Cancelar")]),n("b-button",{staticClass:"mt-5",attrs:{type:"is-primary"},on:{click:function(e){return t.updateTeam()}}},[t._v("Guardar")])],1)],1)])])])],1)},A=[],w=(n("a9e3"),n("5530")),O={props:{team:{type:Object,required:!0},indexteam:{type:Number,required:!0}},data:function(){return{isComponentModalActive:!1,isTouch:!1,form:{nombre:""}}},computed:{feedback:function(){var t=/^[A-Za-z][A-Za-z0-9]*$/,e=t.exec(this.form.nombre);return e?{valid:!0,type:"",message:""}:{valid:!1,type:"is-danger",message:"Ingrese el nombre del team"}}},mounted:function(){this.form=Object(w["a"])({},this.team)},methods:{updateTeam:function(){this.feedback.valid?(g.updateTeam(this.indexteam,this.form),this.isComponentModalActive=!1,this.$emit("refresh"),this.$buefy.toast.open({duration:3e3,message:"Team editado con éxito!",type:"is-success"})):this.$buefy.toast.open({duration:3e3,message:"Asegura no ingresar espacios, comas o caracteres especiales.",position:"is-top",type:"is-danger"})}}},j=O,$=(n("0490"),Object(m["a"])(j,k,A,!1,null,"4751431e",null)),S=$.exports,E=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("b-button",{staticClass:"button_modal",attrs:{size:"is-small"},on:{click:function(e){t.isComponentModalActive=!0}}},[n("b-icon",{staticClass:"btn",attrs:{icon:"delete"}})],1),n("b-modal",{attrs:{width:340,scroll:"keep"},model:{value:t.isComponentModalActive,callback:function(e){t.isComponentModalActive=e},expression:"isComponentModalActive"}},[n("div",{staticClass:"card"},[n("div",{staticClass:"card-content"},[n("div",[n("p",[t._v("¿Estas seguro que quieres Eliminar "+t._s(t.teamName)+"?")])]),n("div",{staticClass:"has-text-right"},[n("b-button",{staticClass:"mt-5",attrs:{type:"is-success is-light"},on:{click:function(e){t.isComponentModalActive=!1}}},[t._v("Cancelar")]),n("b-button",{staticClass:"mt-5",attrs:{type:"is-danger"},on:{click:function(e){return t.removeTeam()}}},[t._v("Eliminar")])],1)])])])],1)},G=[],N={props:{teamName:{type:String,required:!0},indexteam:{type:Number,required:!0}},data:function(){return{isComponentModalActive:!1,isTouch:!1}},computed:{},mounted:function(){},methods:{removeTeam:function(){g.removeTeam(this.indexteam),this.isComponentModalActive=!1,this.$emit("refresh"),this.$buefy.toast.open({duration:3e3,message:"Eliminaste ".concat(this.teamName," con éxito"),position:"is-top",type:"is-danger"})}}},P=N,L=(n("6e14"),Object(m["a"])(P,E,G,!1,null,"43c6fa85",null)),F=L.exports,z=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",[n("button",{staticClass:"button is-primary",on:{click:function(e){t.isComponentModalActive=!0}}},[t._v(" Metricas store ")]),n("b-modal",{attrs:{"has-modal-card":"","trap-focus":"","destroy-on-hide":!1,"aria-role":"dialog","aria-modal":""},model:{value:t.isComponentModalActive,callback:function(e){t.isComponentModalActive=e},expression:"isComponentModalActive"}},[[n("div",{staticClass:"modal-card",staticStyle:{width:"auto"}},[n("header",{staticClass:"modal-card-head"},[n("p",{staticClass:"modal-card-title"},[t._v("Graficos store")]),n("button",{staticClass:"delete",attrs:{type:"button"},on:{click:function(e){return t.$emit("close")}}})]),n("section",{staticClass:"modal-card-body"},[n("div",{staticClass:"is-flex"},[n("GraphProductsMetric"),n("GraphClientMetric")],1)]),n("footer",{staticClass:"modal-card-foot is-flex is-justify-content-flex-end"},[n("button",{staticClass:"button",attrs:{type:"button"},on:{click:function(e){t.isComponentModalActive=!1}}},[t._v(" Cerrar ")])])])]],2)],1)},q=[],D=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},I=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("div",{staticStyle:{width:"400px",height:"200px"},attrs:{id:"main"}})])}],J=(n("d81d"),n("96cf"),n("1da1")),R=n("313e"),Z=n.n(R),B={mounted:function(){this.storeGraph()},methods:{storeGraph:function(){var t=this;return Object(J["a"])(regeneratorRuntime.mark((function e(){var n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,g.getStore();case 2:n=e.sent,t.echartGraph(n);case 4:case"end":return e.stop()}}),e)})))()},echartGraph:function(t){var e=Z.a.init(document.getElementById("main")),n={color:["#3398DB"],tooltip:{trigger:"axis",axisPointer:{type:"shadow"}},grid:{left:"3%",right:"4%",bottom:"3%",containLabel:!0},xAxis:[{type:"category",data:t.map((function(t){return t.nombre})),axisTick:{alignWithLabel:!0}}],yAxis:[{type:"value"}],series:[{name:"satisfaccion",type:"bar",barWidth:"40%",data:t.map((function(t){return t.satisfaccion}))}]};e.setOption(n)}}},W=B,U=Object(m["a"])(W,D,I,!1,null,null,null),H=U.exports,K=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},Q=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("div",{staticStyle:{width:"400px",height:"200px"},attrs:{id:"clien"}})])}],V={mounted:function(){this.storeGraph()},methods:{storeGraph:function(){var t=this;return Object(J["a"])(regeneratorRuntime.mark((function e(){var n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,g.getStore();case 2:n=e.sent,t.echartGraph(n);case 4:case"end":return e.stop()}}),e)})))()},echartGraph:function(t){var e=Z.a.init(document.getElementById("clien")),n={title:{text:"Clientes",left:"center"},tooltip:{trigger:"item",formatter:"{a} <br/>{b}: {c} ({d}%)"},legend:{orient:"vertical",left:10,data:t.map((function(t){return t.nombre}))},series:[{name:"Metrica",type:"pie",radius:["50%","70%"],avoidLabelOverlap:!1,label:{show:!1,position:"center"},emphasis:{label:{show:!0,fontSize:"30",fontWeight:"bold"}},labelLine:{show:!1},data:t.map((function(t){return{value:t.clientes,name:t.nombre}}))}]};e.setOption(n)}}},X=V,Y=Object(m["a"])(X,K,Q,!1,null,null,null),tt=Y.exports,et={components:{GraphProductsMetric:H,GraphClientMetric:tt},data:function(){return{isComponentModalActive:!1}}},nt=et,at=(n("1b4e"),Object(m["a"])(nt,z,q,!1,null,"77deda57",null)),st=at.exports,ot={components:{MyTeamCreateForm:T,MyTeamEditForm:S,MyTeamRemoveForm:F,GraphMetrics:st},data:function(){return{showDetailIcon:!0,teams:[]}},mounted:function(){this.getTeams()},methods:{getTeams:function(){this.teams=g.getTeams()}}},it=ot,rt=(n("b771"),Object(m["a"])(it,f,b,!1,null,"181ac2a9",null)),ct=rt.exports,lt={name:"App",components:{Navbar:p,MyTeamTable:ct},mounted:function(){}},ut=lt,mt=(n("d71e"),Object(m["a"])(ut,o,i,!1,null,"b7b8a20e",null)),dt=mt.exports;n("a1a3");a["a"].use(s["a"]),a["a"].config.productionTip=!1,new a["a"]({render:function(t){return t(dt)}}).$mount("#app")},"6e14":function(t,e,n){"use strict";n("cd8d")},"9dbf":function(t,e,n){},a1a3:function(t,e,n){},a7f1:function(t,e,n){},b771:function(t,e,n){"use strict";n("9dbf")},be17:function(t,e,n){},c474:function(t,e,n){},cd8d:function(t,e,n){},d71e:function(t,e,n){"use strict";n("a7f1")},f6c0:function(t){t.exports=JSON.parse('[{"nombre":"Tiburones","stores":2,"users":[{"nombre":"Juan"},{"nombre":"Pedro"},{"nombre":"Lucas"}]},{"nombre":"Dinosaurios","stores":3,"users":[{"nombre":"Florencia"},{"nombre":"Neil"}]},{"nombre":"Linces","stores":0,"users":[{"nombre":"Agustina"},{"nombre":"Juan"},{"nombre":"Angel"},{"nombre":"Miriam"}]}]')}});
//# sourceMappingURL=app.c0eed81c.js.map