(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["quiz"],{"2aa9":function(e,s,n){},"2e44":function(e,s,n){"use strict";n.r(s);var t=function(){var e=this,s=e.$createElement,n=e._self._c||s;return n("b-container",{staticClass:"d-flex align-items-center justify-content-center"},[n("div",{staticClass:"quiz"}),n("QuizLoader")],1)},i=[],o=function(){var e=this,s=e.$createElement,n=e._self._c||s;return n("section",[e._l(e.jsonData,(function(s,t){return n("div",{key:s.index,attrs:{id:"question"}},[n("div",{directives:[{name:"show",rawName:"v-show",value:t===e.itemIndex,expression:"index === itemIndex"}]},e._l(s.questions,(function(t,i){return n("div",{key:t.index},[n("div",{directives:[{name:"show",rawName:"v-show",value:i===e.questionIndex,expression:"index === questionIndex"}]},[n("h3",[e._v(e._s(t.text))]),e._l(t.responses,(function(t){return n("b-row",{key:t.index},[n("label",{staticClass:"col col-lg-6 mb-3",class:"p-3"},[n("input",{directives:[{name:"model",rawName:"v-model",value:e.userResponse,expression:"userResponse"}],attrs:{type:"radio",name:i},domProps:{value:!!t.correct,checked:e._q(e.userResponse,!!t.correct)},on:{change:[function(s){e.userResponse=!!t.correct},function(n){return e.check(s.questions.length,e.itemIndex)}]}}),e._v(e._s(t.text)+" ")])])}))],2)])})),0)])})),n("div",{directives:[{name:"show",rawName:"v-show",value:e.itemIndex===e.jsonData.length,expression:"itemIndex === jsonData.length"}]},[n("QuizResults",{attrs:{userResponses:e.jsonData}})],1)],2)},u=[],a=function(){var e=this,s=e.$createElement,n=e._self._c||s;return n("div",[n("h2",[e._v(e._s(e.$t("quiz.title_results")))]),e._v(" "+e._s(e.userResponses)+" ")])},r=[],c={name:"QuizResults",props:["userResponses"],methods:{pinta:function(e){return console.log(e),0}}},l=c,d=n("2877"),m=Object(d["a"])(l,a,r,!1,null,null,null),p=m.exports,h={name:"QuizLoader",components:{QuizResults:p},data:function(){return{jsonData:this.$i18n.messages[this.$i18n.locale].quiz_items,itemIndex:0,questionIndex:0,userResponse:""}},methods:{check:function(e){this.jsonData[this.itemIndex].questions[this.questionIndex].responses=this.userResponse,this.questionIndex++,this.questionIndex===e&&(this.questionIndex=0,this.itemIndex++)}}},v=h,x=(n("5fbb"),Object(d["a"])(v,o,u,!1,null,"3cd2cdce",null)),f=x.exports,_={name:"Quiz",components:{QuizLoader:f}},w=_,q=(n("ab04"),Object(d["a"])(w,t,i,!1,null,null,null));s["default"]=q.exports},"5fbb":function(e,s,n){"use strict";var t=n("2aa9"),i=n.n(t);i.a},ab04:function(e,s,n){"use strict";var t=n("ed4f"),i=n.n(t);i.a},ed4f:function(e,s,n){}}]);
//# sourceMappingURL=quiz.4f62a577.js.map