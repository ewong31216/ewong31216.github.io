(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{129:function(t,e,a){t.exports=a(286)},134:function(t,e,a){},284:function(t,e,a){},286:function(t,e,a){"use strict";a.r(e);var n=a(1),r=a.n(n),s=a(44),i=a.n(s),c=(a(134),a(34)),l=a(19),o=a(20),d=a(22),h=a(21),u=a(23),m=a(11),p=function(t){function e(t){var a;return Object(l.a)(this,e),(a=Object(d.a)(this,Object(h.a)(e).call(this,t))).onChangeToDate=a.onChangeToDate.bind(Object(m.a)(Object(m.a)(a))),a.onChangeFromDate=a.onChangeFromDate.bind(Object(m.a)(Object(m.a)(a))),a.onGoButton=a.onGoButton.bind(Object(m.a)(Object(m.a)(a))),a.data={dateExp:/^(\d{2}:\d{2}:\d{2}) (\d{1,2})\/(\d{1,2})\/(\d{4})$/},a.state={toDate:!1,fromDate:!1,valid:!1},a}return Object(u.a)(e,t),Object(o.a)(e,[{key:"componentDidUpdate",value:function(){var t=this.isValid();t!==this.state.valid&&this.setState({valid:t})}},{key:"getDate",value:function(t){if(t){var e=t.match(this.data.dateExp);if(e&&5===e.length)return new Date(e[4]+"-"+e[3]+"-"+e[2]+" "+e[1])}return!1}},{key:"isValid",value:function(){return!(!this.state.fromDate||!this.state.toDate)&&("Invalid Date"!==this.state.fromDate.toString()&&"Invalid Date"!==this.state.toDate.toString())}},{key:"onChangeToDate",value:function(t){this.setState({toDate:this.getDate(t.target.value)})}},{key:"onChangeFromDate",value:function(t){this.setState({fromDate:this.getDate(t.target.value)})}},{key:"onGoButton",value:function(){this.state.valid&&this.props.fetchData({toDate:this.state.toDate.toISOString(),fromDate:this.state.fromDate.toISOString()})}},{key:"render",value:function(){return r.a.createElement("div",{className:"date-range"},r.a.createElement("div",{className:"to-date-container"},r.a.createElement("label",{className:"to-date"},"To"),r.a.createElement("input",{type:"text",onChange:this.onChangeToDate}),r.a.createElement("br",null),r.a.createElement("div",{className:"helptext"},"(HH:mm:ss DD/MM/YYYY)")),r.a.createElement("div",{className:"from-date-container"},r.a.createElement("label",{className:"from-date"},"From"),r.a.createElement("input",{type:"text",onChange:this.onChangeFromDate}),r.a.createElement("br",null),r.a.createElement("div",{className:"helptext"},"(HH:mm:ss DD/MM/YYYY)")),r.a.createElement("button",{className:"go-button",disabled:!this.state.valid,onClick:this.onGoButton},"Go"))}}]),e}(n.Component),b=a(73),v=a.n(b),f={makeCall:function(t,e,a,n){var r={url:t,type:e||"GET",crossDomain:!0,cache:!1,credentials:!0};return a&&(r.beforeSend=function(t){t.setRequestHeader.apply(t,Object(c.a)(a))}),"POST"===e&&n&&v.a.extend(r,{data:JSON.stringify(n),contentType:"application/json",dataType:"json"}),v.a.ajax(r).then(function(t){return t},function(t){return!1})}},g=a(117),j=a.n(g),O=function(){return r.a.createElement("div",{className:"dot"})},E=function(t){function e(){return Object(l.a)(this,e),Object(d.a)(this,Object(h.a)(e).apply(this,arguments))}return Object(u.a)(e,t),Object(o.a)(e,[{key:"render",value:function(){var t=this.props,e=t.current,a=t.data;return!(!a||!a.length)&&r.a.createElement("div",{className:"map-container",style:{height:"600px",width:"600px"}},r.a.createElement(j.a,{bootstrapURLKeys:{key:"AIzaSyB7VapGG60Ch5j7T3jbrlFUvpJRofu2Wak"},defaultCenter:this.props.center,defaultZoom:this.props.zoom},r.a.createElement(O,{lat:a[e].lat,lng:a[e].long})),r.a.createElement("div",{className:"info"},r.a.createElement("div",{className:"speed"},a[e].speed," mph"),r.a.createElement("div",{className:"signal"},r.a.createElement("div",{className:"signal-bar bar-1"+(a[e].rssi>0?" red":"")}),r.a.createElement("div",{className:"signal-bar bar-2"+(a[e].rssi>1?" red":"")}),r.a.createElement("div",{className:"signal-bar bar-3"+(a[e].rssi>2?" red":"")}),r.a.createElement("div",{className:"signal-bar bar-4"+(a[e].rssi>3?" red":"")}))))}}]),e}(n.Component);E.defaultProps={center:{lat:59.95,lng:30.33},zoom:11};var y=E,D=function(t){function e(t){var a;return Object(l.a)(this,e),(a=Object(d.a)(this,Object(h.a)(e).call(this,t))).addCurrent=a.addCurrent.bind(Object(m.a)(Object(m.a)(a))),a.toggleStart=a.toggleStart.bind(Object(m.a)(Object(m.a)(a))),a.slower=a.slower.bind(Object(m.a)(Object(m.a)(a))),a.faster=a.faster.bind(Object(m.a)(Object(m.a)(a))),a.data={width:t.width||600,timer:!1},a.state={start:!1,speed:100},a}return Object(u.a)(e,t),Object(o.a)(e,[{key:"addCurrent",value:function(){this.state.start&&this.props.current<this.props.data.length-1?(this.props.updateCurrent(this.props.current+1),this.data.timer=setTimeout(this.addCurrent,this.state.speed)):this.setState({start:!1})}},{key:"toggleStart",value:function(){var t=!this.state.start,e=this;this.setState({start:t},function(){clearTimeout(e.data.timer),t&&e.addCurrent()})}},{key:"slower",value:function(){this.setState({speed:Math.round(2*this.state.speed)})}},{key:"faster",value:function(){this.setState({speed:Math.round(this.state.speed/2)})}},{key:"render",value:function(){var t=this.props,e=t.current,a=t.data,n=e*this.data.width/(a.length||1);return!(!a||!a.length)&&r.a.createElement("div",{className:"slider-container current-line-container"},r.a.createElement("div",{className:"current-line",style:{left:n}}),r.a.createElement("div",{className:"status-bar",style:{width:this.data.width}}),r.a.createElement("div",{className:"controller-buttons"},r.a.createElement("span",{className:"arrow left-arrow",onClick:this.slower},r.a.createElement("div",null),r.a.createElement("div",null)),r.a.createElement("span",{className:"start-pause "+(this.state.start?"pause":"start"),onClick:this.toggleStart},r.a.createElement("div",{className:"start"}),r.a.createElement("div",null)),r.a.createElement("span",{className:"arrow right-arrow",onClick:this.faster},r.a.createElement("div",null),r.a.createElement("div",null))))}}]),e}(n.Component),N=a(289),C=a(287),k=a(283),I=function(t){function e(){return Object(l.a)(this,e),Object(d.a)(this,Object(h.a)(e).apply(this,arguments))}return Object(u.a)(e,t),Object(o.a)(e,[{key:"getRandomColor",value:function(){for(var t="#",e=0;e<6;e++)t+="0123456789ABCDEF"[Math.floor(16*Math.random())];return t}},{key:"render",value:function(){var t=this.props,e=t.current,a=t.data,n=t.dataKey,s=this.props.width||400,i=e*s/(a.length||1)+60,c=this.props.color||this.getRandomColor();return!(!a||!a.length)&&r.a.createElement("div",{className:"graph-container current-line-container"},r.a.createElement("div",{className:"title"},this.props.title),r.a.createElement("div",{className:"current-line",style:{left:i}}),r.a.createElement(N.a,{width:s,height:200,data:a,margin:{top:20,right:20,bottom:5,left:0}},r.a.createElement(C.a,{type:"monotone",connectNulls:!0,dataKey:n,stroke:c,key:n}),r.a.createElement(k.a,null)))}}]),e}(n.Component),w=(a(284),function(t){function e(t){var a;return Object(l.a)(this,e),(a=Object(d.a)(this,Object(h.a)(e).call(this,t))).processData=a.processData.bind(Object(m.a)(Object(m.a)(a))),a.updateCurrent=a.updateCurrent.bind(Object(m.a)(Object(m.a)(a))),a.fetchData=a.fetchData.bind(Object(m.a)(Object(m.a)(a))),a.data={id:"dd7295fa-6c65-484d-b38d-30df3bc31c0c",lags:[],longs:[]},a.state={current:0,data:[],center:{lat:59.95,lng:30.33}},a}return Object(u.a)(e,t),Object(o.a)(e,[{key:"updateCurrent",value:function(t){isNaN(t)||this.setState({current:t})}},{key:"processData",value:function(t){if(t&&t.length){for(var e=0;e<t.length;e++){var a=t[e-1]?t[e-1].speed:0,n=t[e].speed-a;t[e].acceleration=n,this.data.lags.push(t[e].lat),this.data.longs.push(t[e].long)}this.setState({center:{lat:(Math.max.apply(Math,Object(c.a)(this.data.lags))+Math.min.apply(Math,Object(c.a)(this.data.lags)))/2,lng:(Math.max.apply(Math,Object(c.a)(this.data.longs))+Math.min.apply(Math,Object(c.a)(this.data.longs)))/2}})}return t}},{key:"fetchData",value:function(t){var e=this;f.makeCall("https://alpha.skylo.io/api/devices/history/ids/"+this.data.id+"?since="+t.fromDate+"&until="+t.toDate,"GET",["Authorization","Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImRqYXlAZm9yZC5jb20iLCJzeXN0ZW1Sb2xlIjoic3lzdGVtVXNlciIsImlhdCI6MTU0MTAwNzAzMiwiaXNzIjoiaHR0cDovL3dlYi1zZXJ2ZXJzLWRldi0xNDI1MzI1MDI4LnVzLXdlc3QtMi5lbGIuYW1hem9uYXdzLmNvbSIsInN1YiI6ImUyMmE2MjlkLWRlYTAtNDc0Yi04YzY5LTFlODQwYmZkMzRmYSIsImp0aSI6IjY0Nzk2YWIwLTlhYTItNGY3Ny04OTk4LWI1MzMzYzhlMmI5OCJ9.aIGEX_qigixaA17dcO0KNJay-R_704FDaugfkIAeVLA"]).then(function(t){var a=[];t&&t.devices&&t.devices[e.data.id]&&(a=t.devices[e.data.id]),e.setState({current:0,data:e.processData(a)})})}},{key:"render",value:function(){return r.a.createElement("div",{className:"App"},r.a.createElement("div",{className:"header"},r.a.createElement("div",{className:"title"},"Vehicle Statistics"),r.a.createElement(p,{fetchData:this.fetchData})),r.a.createElement("div",{className:"right-content"},r.a.createElement(I,Object.assign({},this.state,{dataKey:"rssi",color:"#00f",title:"Signal"})),r.a.createElement(I,Object.assign({},this.state,{dataKey:"speed",color:"#0f0",title:"Speed"})),r.a.createElement(I,Object.assign({},this.state,{dataKey:"acceleration",color:"#0ff",title:"Acceleration"}))),r.a.createElement("div",{className:"main-content"},r.a.createElement(y,this.state),r.a.createElement(D,Object.assign({},this.state,{updateCurrent:this.updateCurrent}))))}}]),e}(n.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(r.a.createElement(w,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(t){t.unregister()})}},[[129,2,1]]]);
//# sourceMappingURL=main.941301bd.chunk.js.map