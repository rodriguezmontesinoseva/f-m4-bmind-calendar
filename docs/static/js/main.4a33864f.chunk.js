(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{26:function(e,a,t){e.exports=t.p+"static/media/logo-bmind-holidays.d4acb251.png"},27:function(e,a,t){e.exports=t.p+"static/media/power-button-off.7468a99a.svg"},30:function(e,a,t){e.exports=t.p+"static/media/logo-bmind.b33ac75d.png"},31:function(e,a,t){e.exports=t.p+"static/media/logo-bmind-holidays-white.0c9586f7.png"},32:function(e,a,t){e.exports=t.p+"static/media/Loading.5fe4039b.gif"},34:function(e,a,t){e.exports=t(60)},39:function(e,a,t){},40:function(e,a,t){},41:function(e,a,t){},46:function(e,a,t){},47:function(e,a,t){},49:function(e,a,t){},56:function(e,a,t){},57:function(e,a,t){},58:function(e,a,t){},59:function(e,a,t){},60:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),s=t(25),l=t.n(s),c=(t(39),t(7)),o=t(8),i=t(10),d=t(9),u=t(3),m=t(11),h=(t(40),t(41),t(26)),g=t.n(h),f=t(27),y=t.n(f),v=t(14);var p=function(e){var a=e.loggedUser;return r.a.createElement("header",{className:"Header"},r.a.createElement("img",{src:g.a,alt:"logo Bmind",className:"Header__image"}),r.a.createElement("div",{className:"user"},r.a.createElement(v.b,{to:"/"},r.a.createElement("img",{src:y.a,alt:"Desconectar",title:"Desconectar",className:"disconected__image"})),r.a.createElement("p",{className:"Header__wellcome"},"Hola, ".concat(a.name))))},k=(t(46),t(47),t(1)),b=t.n(k);var E=function(e){var a=e.selectedUser,t=parseInt(a.vacation_days[b()().year()])-parseInt(a.vacations_used[b()().year()]);return r.a.createElement("div",{className:"info-holidays"},"Informaci\xf3n sobre las vacaciones de este a\xf1o de ",r.a.createElement("span",{className:"bold-name"},a.name)," :",r.a.createElement("ul",{className:"info-holidays__days"},r.a.createElement("li",null,"Vacaciones totales: ",a.vacation_days[b()().year()]||"0"),r.a.createElement("li",null,"Vacaciones usadas: ",a.vacations_used[b()().year()]||"0"),r.a.createElement("li",null,"Vacaciones disponibles: ",t||"0")))},D=(t(49),t(20)),R=(t(56),function(e){return r.a.createElement("div",{className:"info__container"},r.a.createElement("div",{className:"Main__legend-content"},r.a.createElement("div",{className:"Main__legend-color-approved"}),r.a.createElement("p",null,"Vacaciones aprobadas"),r.a.createElement("div",{className:"Main__legend-color-requested"}),r.a.createElement("p",null,"Vacaciones seleccionadas")),r.a.createElement("div",{className:"info__container__info-button"},r.a.createElement("p",{className:"info__paragraph"},e.isDisabled?"Si quieres elegir tus vacaciones, vuelve a tu usuario":""),r.a.createElement("button",{className:"btn-validate",disabled:e.isDisabled,onClick:e.handleValidatePeriod},"Validar")))}),N=function(e){function a(e){var t;return Object(c.a)(this,a),(t=Object(i.a)(this,Object(d.a)(a).call(this,e))).state={showDaysOfWeek:!0,showTodayBtn:!0,showWeekSeparators:!0,firstDayOfWeek:1,customCSSclasses:{}},t}return Object(m.a)(a,e),Object(o.a)(a,[{key:"selectFirstDayOfWeek",value:function(e){this.setState({firstDayOfWeek:parseInt(e.target.value,10)})}},{key:"render",value:function(){var e=this.state,a=e.showTodayBtn,t=e.showDaysOfWeek,n=e.forceFullWeeks,s=e.showWeekSeparators,l=e.firstDayOfWeek,c=e.customCSSclasses,o=this.props,i=o.selectedUser,d=o.isDisabled,u=o.selectRange,m=o.selectedRange,h=o.year,g=o.selectedDay,f=o.goToToday,y=o.onNextYear,v=o.datePicked,p=o.onPrevYear,k=o.rangePicked,b=o.handleValidatePeriod;c={};var E=!0,N=!1,P=void 0;try{for(var _,C=i.periods[Symbol.iterator]();!(E=(_=C.next()).done);E=!0){var O=_.value;c["periods "+O.id]={start:O.start_date,end:O.end_date}}}catch(T){N=!0,P=T}finally{try{E||null==C.return||C.return()}finally{if(N)throw P}}return r.a.createElement("div",null,r.a.createElement("div",{id:"calendar"},r.a.createElement(D.CalendarControls,{year:h,showTodayButton:a,onPrevYear:function(){return p()},onNextYear:function(){return y()},goToToday:function(){return f()}}),r.a.createElement(D.Calendar,{selectedUser:i,year:h,selectedDay:g,showDaysOfWeek:t,forceFullWeeks:n,showWeekSeparators:s,firstDayOfWeek:l,selectRange:u,selectedRange:m,onPickDate:function(e){return v(e)},onPickRange:function(e,a){return k(e,a)},customClasses:c})),r.a.createElement(R,{isDisabled:d,handleValidatePeriod:b}))}}]),a}(r.a.Component);var P=function(e){var a=e.selectedUser,t=e.isDisabled,n=e.loggedUser,s=e.selectRange,l=e.selectedRange,c=e.year,o=e.selectedDay,i=e.goToToday,d=e.onNextYear,u=e.datePicked,m=e.onPrevYear,h=e.rangePicked,g=e.selectRangeAvailable,f=e.handleValidatePeriod;return r.a.createElement("div",null,r.a.createElement(N,{selectedUser:a,isDisabled:t,loggedUser:n,selectRange:s,selectedRange:l,year:c,selectedDay:o,goToToday:i,onNextYear:d,datePicked:u,onPrevYear:m,rangePicked:h,selectRangeAvailable:g,handleValidatePeriod:f}))};t(57);var _=function(e){var a=e.usersData,t=e.handlerChangeSelect,n=e.handlerChangeTeam,s=e.team,l=e.teamID;return r.a.createElement("div",{className:"container-filters"},r.a.createElement("label",{htmlFor:""}," ","Equipo:"," ",r.a.createElement("select",{className:"btn-select",onChange:n},r.a.createElement("option",{value:"0",key:"0",selected:l}," ","Todos"),r.a.createElement("option",{value:"1",key:"1",selected:l}," ","Marketing"),r.a.createElement("option",{value:"2",key:"2",selected:l}," ","Dpto.T\xe9cnico"))),r.a.createElement("label",{htmlFor:""}," ","Usuarios:"," ",r.a.createElement("select",{className:"btn-select",onChange:t},"0"===s?a.map(function(e){return r.a.createElement("option",{value:e.id,key:e.id},e.name)}):a.filter(function(e){return e.team_id===s}).map(function(e){return r.a.createElement("option",{value:e.id,key:e.id},e.name)}))))};var C=function(e){var a=e.selectedUser,t=e.usersData,n=e.handlerChangeSelect,s=e.isDisabled,l=e.loggedUser,c=e.selectRange,o=e.selectedRange,i=e.year,d=e.selectedDay,u=e.goToToday,m=e.onNextYear,h=e.datePicked,g=e.onPrevYear,f=e.rangePicked,y=e.selectRangeAvailable,v=e.handlerChangeTeam,p=e.handleValidatePeriod,k=e.team,b=e.teamID;return r.a.createElement("main",{className:"Main"},r.a.createElement("section",{className:"content-info-filter"},r.a.createElement(E,{selectedUser:a}),r.a.createElement(_,{usersData:t,handlerChangeSelect:n,selectedUser:a,handlerChangeTeam:v,team:k,teamID:b})),r.a.createElement(P,{selectedUser:a,isDisabled:s,loggedUser:l,selectRange:c,selectedRange:o,year:i,selectedDay:d,goToToday:u,onNextYear:m,datePicked:h,onPrevYear:g,rangePicked:f,selectRangeAvailable:y,handleValidatePeriod:p}))},O=(t(58),t(30)),T=t.n(O);var w=function(){return r.a.createElement("footer",{className:"Footer"},r.a.createElement("p",{className:"Footer__copyright"},"Created by Adalabers \xa9 2019"),r.a.createElement("a",{href:"https://www.bmind.es/es/",target:"_blank",rel:"noopener noreferrer"},r.a.createElement("img",{src:T.a,alt:"logo Bmind",className:"Footer__image"})))};var S=function(e){var a=e.selectedUser,t=e.usersData,s=e.handlerChangeSelect,l=e.loggedUser,c=e.isDisabled,o=e.selectRange,i=e.selectedRange,d=e.year,u=e.selectedDay,m=e.goToToday,h=e.onNextYear,g=e.datePicked,f=e.onPrevYear,y=e.rangePicked,v=e.selectRangeAvailable,k=e.handlerChangeTeam,b=e.handleValidatePeriod,E=e.team,D=e.teamID;return r.a.createElement(n.Fragment,null,r.a.createElement(p,{loggedUser:l}),r.a.createElement(C,{selectedUser:a,usersData:t,handlerChangeSelect:s,handlerChangeTeam:k,team:E,teamID:D,isDisabled:c,loggedUser:l,selectRange:o,selectedRange:i,year:d,selectedDay:u,goToToday:m,onNextYear:h,datePicked:g,onPrevYear:f,rangePicked:y,selectRangeAvailable:v,handleValidatePeriod:b}),r.a.createElement(w,null))},j=(t(59),t(31)),Y=t.n(j);var U=function(){return r.a.createElement("div",{className:"page__container"},r.a.createElement("div",{className:"main__container"},r.a.createElement("div",null,r.a.createElement("img",{alt:"bmind logo",className:"main__logo",src:Y.a})),r.a.createElement("main",{className:"login_container"},r.a.createElement("h1",{className:"login__title"},"Login"),r.a.createElement("form",{className:"login__form"},r.a.createElement("label",{htmlFor:"name",className:"hidden"},"Emplead@"),r.a.createElement("input",{id:"name",className:"form__input",type:"text",placeholder:"Aryanna Sanford"}),r.a.createElement("label",{htmlFor:"pasword",className:"hidden"},"Password"),r.a.createElement("input",{id:"password",className:"form__input",type:"password",placeholder:"Password"}),r.a.createElement(v.b,{to:"/calendar",className:"form__link"},r.a.createElement("button",{type:"button",className:"form__button"},"Entrar"))))))};var W=function(){return fetch("https://adalab.bmind.es/api/users").then(function(e){return e.json()})},x=t(32),F=t.n(x),M=t(13),V=function(e){function a(e){var t;Object(c.a)(this,a),t=Object(i.a)(this,Object(d.a)(a).call(this,e));var n=b()();return t.state={usersData:[],selectedUser:{},isFetching:!0,isDisabled:!1,loggedUser:{},selectedRange:[n,b()(n).add(0,"day")],selectRange:!0,year:n.year(),selectedDay:n,team:"0",teamID:""},t.handlerChangeSelect=t.handlerChangeSelect.bind(Object(u.a)(t)),t.rangePicked=t.rangePicked.bind(Object(u.a)(t)),t.onPrevYear=t.onPrevYear.bind(Object(u.a)(t)),t.onNextYear=t.onNextYear.bind(Object(u.a)(t)),t.datePicked=t.datePicked.bind(Object(u.a)(t)),t.goToToday=t.goToToday.bind(Object(u.a)(t)),t.handlerChangeTeam=t.handlerChangeTeam.bind(Object(u.a)(t)),t.handleValidatePeriod=t.handleValidatePeriod.bind(Object(u.a)(t)),t}return Object(m.a)(a,e),Object(o.a)(a,[{key:"fetchUsers",value:function(){var e=this;W().then(function(a){e.setState({usersData:a,selectedUser:a[0],isFetching:!1,loggedUser:a[0]})})}},{key:"componentDidMount",value:function(){this.fetchUsers()}},{key:"handlerChangeTeam",value:function(e){console.log(e.target.name);var a=e.target.value;this.setState({team:a})}},{key:"handlerChangeSelect",value:function(e){var a=e.target.value,t=this.state.usersData.find(function(e){return parseInt(a)===e.id});parseInt(a)===this.state.loggedUser.id?this.setState({selectedUser:t,isDisabled:!1,selectRange:!0,teamID:t.team_id}):this.setState({selectedUser:t,isDisabled:!0,selectRange:!1,teamID:t.team_id})}},{key:"handleValidatePeriod",value:function(){var e=this.state.selectedRange[0]._i[2],a=parseInt(this.state.selectedRange[0]._i[1])+1,t=this.state.selectedRange[0]._i[0],n=this.state.selectedRange[1]._i[2],r=parseInt(this.state.selectedRange[1]._i[1])+1,s=this.state.selectedRange[1]._i[0],l=new URL("https://adalab.bmind.es/api/periods"),c={start_date:t+"-"+a+"-"+e,end_date:s+"-"+r+"-"+n,year:s,user_id:this.state.loggedUser.id};console.log(c);fetch(l,{method:"POST",body:JSON.stringify(c),headers:{Accept:"application/json","Content-Type":"application/x-www-form-urlencoded"}}).then(function(e){return e}).then(function(e){return e}),window.location.reload()}},{key:"goToToday",value:function(){var e=b()();this.setState({selectedDay:e,selectedRange:[e,b()(e).add(0,"day")],year:e.year()})}},{key:"datePicked",value:function(e){this.setState({selectedDay:e,selectedRange:[e,b()(e).add(0,"day")]})}},{key:"rangePicked",value:function(e,a){this.setState({selectedRange:[e,a],selectedDay:e})}},{key:"onPrevYear",value:function(){this.setState(function(e){return{year:e.year-1}})}},{key:"onNextYear",value:function(){this.setState(function(e){return{year:e.year+1}})}},{key:"render",value:function(){var e=this,a=this.state,t=a.selectedUser,n=a.isFetching,s=a.usersData,l=a.loggedUser,c=a.isDisabled,o=a.selectedRange,i=a.selectRange,d=a.year,u=a.selectedDay,m=a.team;return r.a.createElement("div",{className:"App"},n?r.a.createElement("div",{className:"loading-container"},r.a.createElement("img",{src:F.a,alt:"loading spinner",className:"Loading-image"}),r.a.createElement("p",null,"Loading...")):r.a.createElement(M.c,null,r.a.createElement(M.a,{exact:!0,path:"/",component:U}),r.a.createElement(M.a,{path:"/calendar",render:function(){return r.a.createElement(S,{selectedUser:t,usersData:s,handlerChangeSelect:e.handlerChangeSelect,isDisabled:c,loggedUser:l,selectedRange:o,selectRange:i,year:d,selectedDay:u,goToToday:e.goToToday,onNextYear:e.onNextYear,datePicked:e.datePicked,onPrevYear:e.onPrevYear,rangePicked:e.rangePicked,selectRangeAvailable:e.selectRangeAvailable,handlerChangeTeam:e.handlerChangeTeam,team:m,handleValidatePeriod:e.handleValidatePeriod})}})))}}]),a}(r.a.Component),I=(t(15),t(33)),H=function(e){function a(e){var t;return Object(c.a)(this,a),(t=Object(i.a)(this,Object(d.a)(a).call(this,e))).onClick=t.onClick.bind(Object(u.a)(t)),t.onHover=t.onHover.bind(Object(u.a)(t)),t}return Object(m.a)(a,e),Object(o.a)(a,[{key:"onClick",value:function(){var e=this.props;(0,e.dayClicked)(e.day)}},{key:"onHover",value:function(){var e=this.props;(0,e.dayHovered)(e.day)}},{key:"render",value:function(){var e=this.props,a=e.classes,t=e.day;return r.a.createElement("td",{onClick:this.onClick,onMouseEnter:this.onHover,className:a},r.a.createElement("span",{className:"day-number"},null===t?"":t.date()))}}]),a}(n.Component);H.defaultProps={classes:"",day:null};var A=H;function B(e,a,t){null==a&&(a=e||0,e=0),t=t||1;for(var n=Math.max(Math.ceil((a-e)/t),0),r=Array(n),s=0;s<n;s++,e+=t)r[s]=e;return r}var L={selectingRange:void 0,selectedRange:void 0,customClasses:void 0},q=function(e){function a(e){var t;return Object(c.a)(this,a),(t=Object(i.a)(this,Object(d.a)(a).call(this,e))).state={},t}return Object(m.a)(a,e),Object(o.a)(a,[{key:"componentWillReceiveProps",value:function(e){void 0!==e.selectingRange&&this.setState({selectingRangeStart:e.selectingRange[0].month(),selectingRangeEnd:e.selectingRange[1].month()})}},{key:"shouldComponentUpdate",value:function(e){var a=this.props,t=a.month,n=a.selectingRange,r=a.selectedRange,s=this.state,l=s.selectingRangeStart,c=s.selectingRangeEnd;if(this.props.year!==e.year||this.props.forceFullWeeks!==e.forceFullWeeks||this.props.showWeekSeparators!==e.showWeekSeparators||this.props.firstDayOfWeek!==e.firstDayOfWeek||this.props.selectRange!==e.selectRange||this.props.customClasses!==e.customClasses||this.props.selectRange&&void 0===n&&void 0===e.selectingRange)return!0;if(this.props.selectRange){if(void 0===n){var o=r[0].month(),i=r[1].month();if(o>i){var d=[i,o];o=d[0],i=d[1]}var u=e.selectingRange[0].month(),m=e.selectingRange[1].month();if(u>m){var h=[m,u];u=h[0],m=h[1]}return o<=t&&t<=i||u<=t&&t<=m}if(void 0===e.selectingRange){var g=l,f=c;if(g>f){var y=[f,g];g=y[0],f=y[1]}var v=e.selectedRange[0].month(),p=e.selectedRange[1].month();if(v>p){var k=[p,v];v=k[0],p=k[1]}return g<=t&&t<=f||v<=t&&t<=p}var b=l,E=c;if(b>E){var D=[E,b];b=D[0],E=D[1]}var R=e.selectingRange[0].month(),N=e.selectingRange[1].month();if(R>N){var P=[N,R];R=P[0],N=P[1]}return b<=t&&t<=E||R<=t&&t<=N}return this.props.selectedDay.month()===t||e.selectedDay.month()===t}},{key:"dayClicked",value:function(e,a){var t=this.props.dayClicked;t(e,a)}},{key:"dayHovered",value:function(e){var a=this.props,t=a.selectRange,n=a.dayHovered;t&&n(e)}},{key:"renderMonthDays",value:function(){for(var e=this,a=this.props,t=a.year,n=a.month,s=a.forceFullWeeks,l=a.showWeekSeparators,c=a.selectedDay,o=a.firstDayOfWeek,i=a.selectingRange,d=a.selectRange,u=a.selectedRange,m=a.customClasses,h=b()([t,n,1]),g=h.weekday();g<o;)g+=7;var f=h.daysInMonth(),y=[];return B(o+1,(s?42:37)+o+1).forEach(function(a){var s=b()([t,n,a-g]),h=[];if(a<=g)h.push("prev-month");else if(a>f+g)h.push("next-month");else{if(d){var v=(i||u)[0],p=(i||u)[1];if(p.isBefore(v)){var k=i||u,E=Object(I.a)(k,2);p=E[0],v=E[1]}s.isBetween(v,p,"day","[]")&&h.push("range"),s.isSame(v,"day")&&h.push("range-left"),s.isSame(p,"day")&&h.push("range-right")}else s.isSame(c,"day")&&h.push("selected");m instanceof Function&&h.push(m(s))}(a-1)%7===0&&h.push("bolder"),m&&Object.keys(m).forEach(function(e){var a=m[e];if("string"===typeof a)a.indexOf(s.format("ddd"))>-1&&h.push(e);else if(a instanceof Array)a.forEach(function(a){s.format("YYYY-MM-DD")===a&&h.push(e)});else if(a instanceof Function)a(s)&&h.push(e);else if(a.start&&a.end){var t=b()(a.start,"YYYY-MM-DD").add(-1,"days"),n=b()(a.end,"YYYY-MM-DD").add(1,"days");s.isBetween(t,n)&&h.push(e)}}),l&&(a-1)%7===o&&y.length&&y.push(r.a.createElement("td",{className:"week-separator",key:"seperator-".concat(a)})),y.push(r.a.createElement(A,{key:"day-".concat(a),day:s.isValid()?s:null,classes:h.join(" "),dayClicked:function(a){return e.dayClicked(a,h.join(" "))},dayHovered:function(a){return e.dayHovered(a)}}))}),y}},{key:"render",value:function(){var e=this.props,a=e.month,t=e.year;return r.a.createElement("tr",null,r.a.createElement("td",{className:"month-name"},b()([t,a,1]).format("MMM")),this.renderMonthDays())}}]),a}(n.Component);q.defaultProps=L;var J=q,z={forceFullWeeks:!1,showDaysOfWeek:!0,showWeekSeparators:!0,firstDayOfWeek:0,selectRange:!1,onPickDate:null,onPickRange:null,selectedDay:b()(),customClasses:null},G=function(e){function a(e){var t;return Object(c.a)(this,a),(t=Object(i.a)(this,Object(d.a)(a).call(this,e))).state={selectingRange:void 0},t}return Object(m.a)(a,e),Object(o.a)(a,[{key:"dayClicked",value:function(e,a){if(e){var t=this.state.selectingRange,n=this.props,r=n.selectRange,s=n.onPickRange,l=n.onPickDate;r?(t?(s instanceof Function&&(t[0]>e?s(e,t[0]):s(t[0],e)),t=void 0):t=[e,e],this.setState({selectingRange:t})):l instanceof Function&&l(e,a)}}},{key:"dayHovered",value:function(e){if(e){var a=this.state.selectingRange;a&&(a[1]=e,this.setState({selectingRange:a}))}}},{key:"renderDaysOfWeek",value:function(){var e=this.props,a=e.firstDayOfWeek,t=e.forceFullWeeks,n=e.showWeekSeparators,s=[];return B(a,(t?42:37)+a).forEach(function(e){var t=b()().weekday(e).format("dd").charAt(0);n&&e%7===a&&s.length&&s.push(r.a.createElement("th",{className:"week-separator",key:"seperator-".concat(e)})),s.push(r.a.createElement("th",{key:"weekday-".concat(e),className:e%7===0?"bolder":""},t))}),r.a.createElement("tr",null,r.a.createElement("th",null,"\xa0"),s)}},{key:"render",value:function(){var e=this,a=this.state.selectingRange,t=B(0,12).map(function(t){return r.a.createElement(J,Object.assign({month:t,key:"month-".concat(t),dayClicked:function(a,t){return e.dayClicked(a,t)},dayHovered:function(a){return e.dayHovered(a)}},e.props,{selectingRange:a}))});return r.a.createElement("table",{className:"calendar"},r.a.createElement("thead",{className:"day-headers"},this.props.showDaysOfWeek?this.renderDaysOfWeek():null),r.a.createElement("tbody",null,t))}}]),a}(n.Component);G.defaultProps=z;var K=G,Q=function(e){var a,t=e.year,n=e.showTodayButton,s=e.goToToday,l=e.onPrevYear,c=e.onNextYear;return n&&(a=r.a.createElement("div",{className:"control today",onClick:function(){return s()}},"Today")),r.a.createElement("div",{className:"calendar-controls"},r.a.createElement("div",{className:"control",onClick:function(){return l()}},"\xab"),r.a.createElement("div",{className:"current-year"},t),r.a.createElement("div",{className:"control",onClick:function(){return c()}},"\xbb"),a)};Q.defaultProps={onPrevYear:void 0,onNextYear:void 0,goToToday:void 0,showTodayButton:!1};var X=Q;t.d(a,"Calendar",function(){return K}),t.d(a,"CalendarControls",function(){return X}),l.a.render(r.a.createElement(v.a,null,r.a.createElement(V,null)),document.getElementById("root"))}},[[34,1,2]]]);
//# sourceMappingURL=main.4a33864f.chunk.js.map