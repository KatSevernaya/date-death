(function(e){function t(t){for(var o,a,i=t[0],s=t[1],l=t[2],u=0,b=[];u<i.length;u++)a=i[u],Object.prototype.hasOwnProperty.call(c,a)&&c[a]&&b.push(c[a][0]),c[a]=0;for(o in s)Object.prototype.hasOwnProperty.call(s,o)&&(e[o]=s[o]);d&&d(t);while(b.length)b.shift()();return r.push.apply(r,l||[]),n()}function n(){for(var e,t=0;t<r.length;t++){for(var n=r[t],o=!0,i=1;i<n.length;i++){var s=n[i];0!==c[s]&&(o=!1)}o&&(r.splice(t--,1),e=a(a.s=n[0]))}return e}var o={},c={app:0},r=[];function a(t){if(o[t])return o[t].exports;var n=o[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,a),n.l=!0,n.exports}a.m=e,a.c=o,a.d=function(e,t,n){a.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},a.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},a.t=function(e,t){if(1&t&&(e=a(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(a.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)a.d(n,o,function(t){return e[t]}.bind(null,o));return n},a.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return a.d(t,"a",t),t},a.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},a.p="/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],s=i.push.bind(i);i.push=t,i=i.slice();for(var l=0;l<i.length;l++)t(i[l]);var d=s;r.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"10b2":function(e,t,n){e.exports=n.p+"img/woman1.ca706394.png"},"12cd":function(e,t,n){e.exports=n.p+"img/quiz-symbol5.bc8ae607.svg"},"19f5":function(e,t,n){"use strict";n("b936")},2775:function(e,t,n){"use strict";n("84d4")},"294c":function(e,t,n){},"31a2":function(e,t,n){e.exports=n.p+"img/microphone.204b9d9b.svg"},"3f5f":function(e,t,n){},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var o=n("7a23"),c={class:"blank"};function r(e,t,n,r,a,i){var s=Object(o["resolveComponent"])("app-progress"),l=Object(o["resolveComponent"])("app-loader"),d=Object(o["resolveComponent"])("router-view");return Object(o["openBlock"])(),Object(o["createBlock"])("div",c,[a.inProgress?(Object(o["openBlock"])(),Object(o["createBlock"])(s,{key:0,onStopProgress:i.stopProgress},null,8,["onStopProgress"])):a.loading?(Object(o["openBlock"])(),Object(o["createBlock"])(l,{key:1})):(Object(o["openBlock"])(),Object(o["createBlock"])(d,{key:2,index:a.index,questions:a.questions,years:a.years,days:a.days,show:a.show,months:a.months,isValid:a.isValid,dataFromSwapi:a.dataFromSwapi,onSendData:i.sendData,onGoTest:i.goTest,onSubmitHandler:i.submitHandler,onAnswerChoosed:i.answerChoosed,onBirthDateHandler:i.birthDateHandler},null,8,["index","questions","years","days","show","months","isValid","dataFromSwapi","onSendData","onGoTest","onSubmitHandler","onAnswerChoosed","onBirthDateHandler"]))])}var a=n("1da1"),i=(n("96cf"),n("a434"),n("d3b7"),n("b0c0"),n("7ed1")),s=n.n(i),l=n("fb76"),d=n.n(l),u={class:"conteiner"},b={class:"quiz-blank"},p={class:"quize-blank__text-block"},j={key:0,class:"quiz-blank__script-text",style:{"white-space":"pre-line"}},O={key:0,class:"quiz-blank__message"},m={key:0,style:{"white-space":"pre-line"}},f={key:1,style:{"white-space":"pre-line"}},h={key:2,style:{"white-space":"pre-line"}},g=Object(o["createVNode"])("div",{class:"quiz__img-eye1"},[Object(o["createVNode"])("img",{src:s.a,alt:""})],-1),V=Object(o["createVNode"])("div",{class:"quiz__img-eye2"},[Object(o["createVNode"])("img",{src:d.a,alt:""})],-1),N={class:"primary"},v={key:1,class:"quiz-blank__buttons"};function y(e,t,n,c,r,a){var i=this,s=Object(o["resolveComponent"])("app-form");return Object(o["openBlock"])(),Object(o["createBlock"])("div",u,[Object(o["createVNode"])("div",b,[Object(o["createVNode"])("div",p,[n.questions[n.index].text?(Object(o["openBlock"])(),Object(o["createBlock"])("p",j,Object(o["toDisplayString"])(n.questions[n.index].text),1)):Object(o["createCommentVNode"])("",!0),4===n.index?(Object(o["openBlock"])(),Object(o["createBlock"])(o["Transition"],{key:1,name:"fade"},{default:Object(o["withCtx"])((function(){return[n.show?(Object(o["openBlock"])(),Object(o["createBlock"])("div",O,[2021-i.questions[2].birthDate[2]<=36?(Object(o["openBlock"])(),Object(o["createBlock"])("p",m,Object(o["toDisplayString"])(n.questions[n.index].text1),1)):Object(o["createCommentVNode"])("",!0),36<2021-i.questions[2].birthDate[2]&&2021-i.questions[2].birthDate[2]<45?(Object(o["openBlock"])(),Object(o["createBlock"])("p",f,Object(o["toDisplayString"])(n.questions[n.index].text2),1)):Object(o["createCommentVNode"])("",!0),2021-i.questions[2].birthDate[2]>=45?(Object(o["openBlock"])(),Object(o["createBlock"])("p",h,Object(o["toDisplayString"])(n.questions[n.index].text3),1)):Object(o["createCommentVNode"])("",!0)])):Object(o["createCommentVNode"])("",!0)]})),_:1})):Object(o["createCommentVNode"])("",!0),g,V]),Object(o["createVNode"])("h1",N,Object(o["toDisplayString"])(n.questions[n.index].question),1),2===n.index?(Object(o["openBlock"])(),Object(o["createBlock"])("form",{key:0,action:"",class:"quiz-blank__form",onSubmit:t[4]||(t[4]=Object(o["withModifiers"])((function(t){return e.$emit("submit-handler",t)}),["prevent"]))},[Object(o["createVNode"])(s,{id:0,title:"День",items:n.days,onClick:a.dayChoose,onInput:t[1]||(t[1]=function(t){return e.$emit("birth-date-handler",e.id,t)}),validation:n.isValid[0]},null,8,["items","onClick","validation"]),Object(o["createVNode"])(s,{id:1,title:"Месяц",items:n.months,onInput:t[2]||(t[2]=function(t){return e.$emit("birth-date-handler",e.id,t)}),validation:n.isValid[1]},null,8,["items","validation"]),Object(o["createVNode"])(s,{id:2,title:"Год",items:n.years,onClick:a.yearChoose,onInput:t[3]||(t[3]=function(t){return e.$emit("birth-date-handler",e.id,t)}),validation:n.isValid[2]},null,8,["items","onClick","validation"]),(Object(o["openBlock"])(!0),Object(o["createBlock"])(o["Fragment"],null,Object(o["renderList"])(n.questions[n.index].answers,(function(e,t){return Object(o["openBlock"])(),Object(o["createBlock"])("button",{class:"btn",type:"submit",key:e},Object(o["toDisplayString"])(n.questions[n.index].answers[t]),1)})),128))],32)):(Object(o["openBlock"])(),Object(o["createBlock"])("div",v,[(Object(o["openBlock"])(!0),Object(o["createBlock"])(o["Fragment"],null,Object(o["renderList"])(n.questions[n.index].answers,(function(t,c){return Object(o["openBlock"])(),Object(o["createBlock"])("button",{class:"btn",key:t,onClick:function(t){return e.$emit("answer-choosed",c)}},Object(o["toDisplayString"])(n.questions[n.index].answers[c]),9,["onClick"])})),128))])),Object(o["createVNode"])("p",null,"Вопрос "+Object(o["toDisplayString"])(n.index+1)+"-5",1)])])}n("a9e3");var x={disabled:"",value:"default"};function k(e,t,n,c,r,a){return Object(o["withDirectives"])((Object(o["openBlock"])(),Object(o["createBlock"])("select",{id:n.id,required:"",class:{invalid:!n.validation},"onUpdate:modelValue":t[1]||(t[1]=function(e){return r.name=e})},[Object(o["createVNode"])("option",x,Object(o["toDisplayString"])(n.title),1),(Object(o["openBlock"])(!0),Object(o["createBlock"])(o["Fragment"],null,Object(o["renderList"])(n.items,(function(e){return Object(o["openBlock"])(),Object(o["createBlock"])("option",{value:e,key:e},Object(o["toDisplayString"])(e),9,["value"])})),128))],10,["id"])),[[o["vModelSelect"],r.name]])}var w={data:function(){return{name:"default"}},props:{id:Number,isValid:Array,validation:Boolean,birthDate:Array,years:Array,items:Array,title:String,invalid:Boolean,index:Number,questions:Array,months:Array},methods:{}};w.render=k;var q=w,_={emits:{"answer-choosed":function(e){},"submit-handler":function(e){return!0},"birth-date-handler":function(e,t){return!!e||(console.warn("There is no id parameter for emit birth-date-handler"),!1)}},props:{index:Number,show:Boolean,questions:Array,years:Array,months:Array,days:Array,isValid:Array},data:function(){return{}},computed:{yearChoose:function(){for(var e=1920;e<=2003;e++)this.years.push(e)},dayChoose:function(){for(var e=1;e<=31;e++)this.days.push(e)}},components:{AppForm:q}};n("19f5");_.render=y;var S=_,B={class:"last-page"},D={class:"last-page__wrap"},T=Object(o["createVNode"])("div",{class:"last-page__message"},[Object(o["createVNode"])("p",null,[Object(o["createTextVNode"])("Спасибо за Ваши ответы!"),Object(o["createVNode"])("br"),Object(o["createVNode"])("span",null,[Object(o["createTextVNode"])("Мы подготовили для Вас "),Object(o["createVNode"])("br"),Object(o["createTextVNode"])("персональную аудио запись с"),Object(o["createVNode"])("br"),Object(o["createTextVNode"])(" Вашим прогнозом.")])])],-1),C=Object(o["createVNode"])("p",null,"Вы можете узнать, как повлиять на события, которые ожидают вас в ближайшем будущем.",-1),A={class:"last-page__notification"},z=Object(o["createTextVNode"])(" Вам надо быть готовым, что бы последствия не оказались необратимыми."),F=Object(o["createVNode"])("p",null,"Нажмите на кнопку ниже прямо сейчас и наберите наш номер телефона. Прослушайте важную информацию!",-1),I={key:0,class:"last-page__getdata"},P=Object(o["createVNode"])("br",null,null,-1),E=Object(o["createVNode"])("br",null,null,-1),L=Object(o["createVNode"])("br",null,null,-1),$=Object(o["createVNode"])("br",null,null,-1),R=Object(o["createVNode"])("br",null,null,-1),M=Object(o["createVNode"])("br",null,null,-1),H=Object(o["createVNode"])("br",null,null,-1),U=Object(o["createVNode"])("br",null,null,-1);function G(e,t,n,c,r,a){var i=Object(o["resolveComponent"])("app-footer");return Object(o["openBlock"])(),Object(o["createBlock"])("div",B,[Object(o["createVNode"])("div",D,[T,C,Object(o["createVNode"])("div",A,[Object(o["createVNode"])("p",null,[Object(o["createVNode"])("span",null,"Первое значимое событие может произойти уже "+Object(o["toDisplayString"])(r.date)+",",1),z])]),F,Object(o["createVNode"])("button",{class:"btn",onClick:t[1]||(t[1]=function(t){return e.$emit("send-data")})},"Позвонить и прослушать"),n.dataFromSwapi?(Object(o["openBlock"])(),Object(o["createBlock"])("div",I,[Object(o["createTextVNode"])(" Имя: "+Object(o["toDisplayString"])(n.dataFromSwapi.name)+" ",1),P,Object(o["createTextVNode"])(" Рост: "+Object(o["toDisplayString"])(n.dataFromSwapi.height)+" см.",1),E,Object(o["createTextVNode"])(" Вес: "+Object(o["toDisplayString"])(n.dataFromSwapi.mass)+" кг.",1),L,Object(o["createTextVNode"])(" Цвет Волос: "+Object(o["toDisplayString"])(n.dataFromSwapi.hair_color)+" ",1),$,Object(o["createTextVNode"])(" Цвет кожи: "+Object(o["toDisplayString"])(n.dataFromSwapi.skin_color)+" ",1),R,Object(o["createTextVNode"])(" Цвет глаз: "+Object(o["toDisplayString"])(n.dataFromSwapi.eye_color)+" ",1),M,Object(o["createTextVNode"])(" Год рождения: "+Object(o["toDisplayString"])(n.dataFromSwapi.birth_year)+" ",1),H,Object(o["createTextVNode"])(" Пол: "+Object(o["toDisplayString"])(n.dataFromSwapi.gender)+" ",1),U])):Object(o["createCommentVNode"])("",!0)]),Object(o["createVNode"])(i,{class:"app-footer"})])}function J(e,t,n,c,r,a){return Object(o["openBlock"])(),Object(o["createBlock"])("footer",{class:"footer",onClick:t[1]||(t[1]=function(e){return r.show=!r.show})},[Object(o["createVNode"])("p",{class:{hidePart:!r.show,showAll:r.show}},"TERMENI SI CONDITII: ACESTA ESTE UN SERVICIU DE DIVERTISMENT. PRIN FOLOSIREA LUI DECLARATI CA AVETI 18 ANI IMPLINITI, ",2)])}var Q={data:function(){return{show:!1}},methods:{}};n("2775");Q.render=J;var K=Q,W={components:{AppFooter:K},emits:["send-data"],props:["dataFromSwapi"],data:function(){return{date:new Date(Date.now()+864e5).toLocaleDateString()}}};n("dc71");W.render=G;var X=W,Y=n("e2c7"),Z=n.n(Y),ee=n("10b2"),te=n.n(ee),ne=n("f54a"),oe=n.n(ne),ce=n("60aa"),re=n.n(ce),ae=n("6863"),ie=n.n(ae),se=n("5b43"),le=n.n(se),de=n("966a"),ue=n.n(de),be=n("f3ff"),pe=n.n(be),je=n("12cd"),Oe=n.n(je),me=n("91fc"),fe=n.n(me),he=n("72d2"),ge=n.n(he),Ve=n("e357"),Ne=n.n(Ve),ve={class:"app-landing"},ye={class:"intro"},xe={class:"intro__wrap"},ke=Object(o["createVNode"])("p",{style:{"margin-top":"0px"}},[Object(o["createVNode"])("small",null,"Лучшие астрологи и экстрасенсы Румынии")],-1),we=Object(o["createVNode"])("div",{class:"intro__line"},[Object(o["createVNode"])("p",null,"Точность прогноза: 97%")],-1),qe=Object(o["createVNode"])("div",{class:"intro__images"},[Object(o["createVNode"])("div",{class:"intro__images-bg"},[Object(o["createVNode"])("img",{src:Z.a,alt:""})]),Object(o["createVNode"])("div",{class:"intro__images-photo"},[Object(o["createVNode"])("img",{src:te.a,alt:""})])],-1),_e={class:"intro__question"},Se=Object(o["createVNode"])("p",null,[Object(o["createTextVNode"])("Вас беспокоит вопрос о том,"),Object(o["createVNode"])("br"),Object(o["createTextVNode"])(),Object(o["createVNode"])("span",null,"когда Вы покинете этот Мир и при каких обстоятельствах?")],-1),Be=Object(o["createVNode"])("button",{class:"btn"},"Нет",-1),De=Object(o["createVNode"])("p",{class:"intro__last-text"},[Object(o["createVNode"])("small",null,"Онлайн предсказание")],-1),Te=Object(o["createVNode"])("section",{class:"offer"},[Object(o["createVNode"])("div",{class:"offer__text"},[Object(o["createVNode"])("img",{src:oe.a,alt:""}),Object(o["createVNode"])("p",null,[Object(o["createTextVNode"])("Позвольте нам раскрыть эту волнующую тайну и "),Object(o["createVNode"])("br"),Object(o["createVNode"])("span",null,"с точностью определить дату и время вашей смерти, "),Object(o["createTextVNode"])(" а также предшествующую этому событию причину")])]),Object(o["createVNode"])("div",{class:"offer__image"},[Object(o["createVNode"])("img",{src:re.a,alt:""}),Object(o["createVNode"])("p",null,[Object(o["createTextVNode"])("Многие не верят предсказаниям и мы решили доказать каждому,"),Object(o["createVNode"])("br"),Object(o["createVNode"])("span",null," что прогноз может изменить жизнь любого человека!")])])],-1),Ce={class:"quiz"},Ae={class:"primary"},ze={class:"quiz-blank__buttons"},Fe=Object(o["createVNode"])("div",{class:"quiz-blank__elements"},[Object(o["createVNode"])("img",{src:ie.a,alt:""}),Object(o["createVNode"])("img",{src:le.a,alt:""}),Object(o["createVNode"])("img",{src:ue.a,alt:""}),Object(o["createVNode"])("img",{src:pe.a,alt:""})],-1),Ie={class:"quiz-blank__script-text",style:{"white-space":"pre-line"}},Pe=Object(o["createVNode"])("div",{class:"quiz-blank__elements"},[Object(o["createVNode"])("img",{src:Oe.a,alt:""}),Object(o["createVNode"])("img",{src:fe.a,alt:""}),Object(o["createVNode"])("img",{src:ge.a,alt:""}),Object(o["createVNode"])("img",{src:Ne.a,alt:""})],-1),Ee=Object(o["createVNode"])("div",{class:"quiz__img-eye1"},[Object(o["createVNode"])("img",{src:s.a,alt:""})],-1),Le=Object(o["createVNode"])("div",{class:"quiz__img-eye2"},[Object(o["createVNode"])("img",{src:d.a,alt:""})],-1);function $e(e,t,n,c,r,a){var i=Object(o["resolveComponent"])("app-footer");return Object(o["openBlock"])(),Object(o["createBlock"])("div",ve,[Object(o["createVNode"])("section",ye,[Object(o["createVNode"])("div",xe,[ke,we,qe,Object(o["createVNode"])("div",_e,[Se,Object(o["createVNode"])("button",{class:"btn",onClick:t[1]||(t[1]=function(){return a.scrollTo&&a.scrollTo.apply(a,arguments)})},"Да"),Be]),De])]),Te,Object(o["createVNode"])("section",Ce,[Object(o["createVNode"])("h1",Ae,Object(o["toDisplayString"])(n.questions[n.index].question),1),Object(o["createVNode"])("div",ze,[(Object(o["openBlock"])(!0),Object(o["createBlock"])(o["Fragment"],null,Object(o["renderList"])(n.questions[n.index].answers,(function(t,c){return Object(o["openBlock"])(),Object(o["createBlock"])("button",{class:"btn",onClick:function(t){return e.$emit("go-test",c)},key:t},Object(o["toDisplayString"])(n.questions[n.index].answers[c]),9,["onClick"])})),128))]),Object(o["createVNode"])("p",null,"Вопрос "+Object(o["toDisplayString"])(n.index+1)+"-5",1),Fe,Object(o["createVNode"])("p",Ie,Object(o["toDisplayString"])(n.questions[n.index].text),1),Pe,Ee,Le]),Object(o["createVNode"])(i)])}var Re={components:{AppFooter:K},emits:{"go-test":function(e){}},props:{index:Number,questions:Array},methods:{scrollTo:function(){var e=document.querySelector(".offer");e.scrollIntoView({block:"start",behavior:"smooth"})}}};n("c3ba");Re.render=$e;var Me=Re,He={class:"container"},Ue=Object(o["createVNode"])("div",{class:"lds-spinner"},[Object(o["createVNode"])("div"),Object(o["createVNode"])("div"),Object(o["createVNode"])("div"),Object(o["createVNode"])("div"),Object(o["createVNode"])("div"),Object(o["createVNode"])("div"),Object(o["createVNode"])("div"),Object(o["createVNode"])("div"),Object(o["createVNode"])("div"),Object(o["createVNode"])("div"),Object(o["createVNode"])("div"),Object(o["createVNode"])("div")],-1),Ge=Object(o["createVNode"])("p",null,"Loading",-1);function Je(e,t,n,c,r,a){return Object(o["openBlock"])(),Object(o["createBlock"])("div",He,[Ue,Ge])}var Qe={};n("d633");Qe.render=Je;var Ke=Qe,We=n("31a2"),Xe=n.n(We),Ye={class:"container"},Ze=Object(o["createVNode"])("div",{class:"app-progress__image"},[Object(o["createVNode"])("img",{src:Xe.a,alt:""})],-1),et=Object(o["createVNode"])("img",{src:"",alt:""},null,-1),tt=Object(o["createVNode"])("p",null,"Запись сообщения",-1);function nt(e,t,n,c,r,a){var i=Object(o["resolveComponent"])("k-progress");return Object(o["openBlock"])(),Object(o["createBlock"])("div",Ye,[Ze,et,Object(o["createVNode"])(i,{percent:r.count,color:"#F6C866"},null,8,["percent"]),tt])}var ot={data:function(){return{count:0}},emits:["stop-progress"],mounted:function(){var e=this,t=function(e){return new Promise((function(t){return setTimeout((function(){return t()}),e)}))};this.$nextTick(Object(a["a"])(regeneratorRuntime.mark((function n(){var o,c;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:for(o=function(t){setTimeout((function(){e.count=t}),20*t)},c=0;c<101;c++)o(c);return n.next=4,t(2e3);case 4:return n.next=6,e.$router.push("/listen");case 6:return n.next=8,e.$emit("stop-progress",e);case 8:case"end":return n.stop()}}),n)}))))}};n("cbfb");ot.render=nt;var ct=ot,rt={components:{AppQuize:S,AppLastPage:X,AppLanding:Me,AppLoader:Ke,AppProgress:ct},data:function(){return{count:0,index:0,show:!1,isValid:[!0,!0,!0],inProgress:!1,loading:!1,years:[],days:[],dataFromSwapi:"",months:["01","02","03","04","05","06","07","08","09","10","11","12"],questions:[{question:"Боитесь ли вы умереть?",answers:["Да","Нет"],choosenAnswer:"",text:"Вы, конечно, умрете.\nИ все, с кем вы знакомы,\nтоже однажды умрут."},{question:"Когда Вы чувствуете себя наиболее комфортно?",answers:["Утро","День","Вечер","Ночь"],choosenAnswer:"",text:"Мы расскажем Вам не только подробности\n вашей смерти, но также поможем Вам\n избежать этой ужасной даты и продлить\n вашу жизнь на многие годы."},{question:"Укажите свою дату рождения:",title:"title",answers:["Далее"],birthDate:[0,0,0],text:"Уже совсем скоро Вы узнаете много\n интересного о своем будущем!"},{question:"Снятся ли Вам умершие люди?",answers:["Да","Нет","Иногда"],choosenAnswer:"",text:"Смерть родного человека – одно из\n тяжелейших испытаний в жизни каждого\n из нас!"},{question:"Запись, которую Вы услышите, может шокировать людей с неокрепшей психикой. Вы готовы узнать, что ждет именно Вас?",answers:["Да","Затрудняюсь ответить"],choosenAnswer:"",text1:"По вам скучает очень близкий человек,\n которого больше нет в мире живых.",text2:"По вам скучает очень близкий человек,\n которого больше нет в мире живых.\n Возможно это дедушка или бабушка.",text3:"По вам скучает очень близкий человек,\n которого больше нет в мире живых.\n Возможно это кто-то из Ваших родителей."}]}},methods:{goTest:function(e){this.questions[this.index].choosenAnswer=this.questions[this.index].answers[e],this.index=this.index+1,this.$router.push("/quiz")},answerChoosed:function(e){var t=this;this.questions[this.index].choosenAnswer=this.questions[this.index].answers[e],this.index+1<this.questions.length?(this.index=this.index+1,console.log(e)):this.inProgress=!0,4===this.index&&setTimeout((function(){t.show=!0}),1500)},submitHandler:function(e){for(var t=this,n=!0,o=0;o<3;o++)n="default"!==e.target[o].value,this.isValid.splice(o,1,n);var c=this.isValid.every((function(e){return!0===e}));console.log(this.isValid),!0===c&&(console.log(c),this.loading=!0,setTimeout((function(){t.index=t.index+1,t.loading=!1}),1500))},birthDateHandler:function(e,t){this.questions[2].birthDate.splice(t.target.id,1,t.target.value),console.log("hi",this.questions[2].birthDate)},sendData:function(){var e=this;return Object(a["a"])(regeneratorRuntime.mark((function t(){var n,o;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,fetch("https://vue-demo-deploy-aa48d-default-rtdb.firebaseio.com/data.json",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({AnswersData:e.questions})});case 2:return n=t.sent,t.next=5,n.json();case 5:return t.sent,console.log(e.questions),t.next=9,fetch("https://swapi.dev/api/people/1/.json",{method:"GET",headers:{"Content-Type":"application/json"}});case 9:return o=t.sent,t.next=12,o.json();case 12:e.dataFromSwapi=t.sent,console.log(e.dataFromSwapi.name);case 14:case"end":return t.stop()}}),t)})))()},stopProgress:function(){this.inProgress=!1}}};n("6069");rt.render=r;var at=rt,it=n("6c02"),st=Object(it["a"])({history:Object(it["b"])(),routes:[{path:"/quiz",component:S},{path:"/listen",component:X},{path:"/home",component:Me,alias:"/"}]}),lt=n("434c"),dt=n.n(lt);n("5d61");Object(o["createApp"])(at).component("k-progress",dt.a).use(st).mount("#app")},"5b43":function(e,t,n){e.exports=n.p+"img/quiz-symbol2.87a70201.svg"},"5d61":function(e,t,n){},6069:function(e,t,n){"use strict";n("635c")},"60aa":function(e,t,n){e.exports=n.p+"img/intro__bg-image.e81bb63a.jpg"},"635c":function(e,t,n){},"67cd":function(e,t,n){},6863:function(e,t,n){e.exports=n.p+"img/quiz-symbol1.78f45c9f.svg"},"72d2":function(e,t,n){e.exports=n.p+"img/quiz-symbol7.52f10448.svg"},"7ed1":function(e,t,n){e.exports=n.p+"img/eye.df0e9d3d.svg"},"84d4":function(e,t,n){},"91fc":function(e,t,n){e.exports=n.p+"img/quiz-symbol6.b0cd1353.svg"},"966a":function(e,t,n){e.exports=n.p+"img/quiz-symbol3.eacf09dd.svg"},"9f37":function(e,t,n){},b936:function(e,t,n){},c3ba:function(e,t,n){"use strict";n("3f5f")},cbfb:function(e,t,n){"use strict";n("67cd")},d633:function(e,t,n){"use strict";n("9f37")},dc71:function(e,t,n){"use strict";n("294c")},e2c7:function(e,t,n){e.exports=n.p+"img/icon1.d425ee06.svg"},e357:function(e,t,n){e.exports=n.p+"img/quiz-symbol8.eadee998.svg"},f3ff:function(e,t,n){e.exports=n.p+"img/quiz-symbol4.76f07c12.svg"},f54a:function(e,t,n){e.exports=n.p+"img/hands.4bbba02b.png"},fb76:function(e,t,n){e.exports=n.p+"img/eye-1.8a081781.svg"}});
//# sourceMappingURL=app.9ccfd3ff.js.map