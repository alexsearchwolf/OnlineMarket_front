(this["webpackJsonponline-market"]=this["webpackJsonponline-market"]||[]).push([[0],{17:function(e,t,a){},22:function(e,t,a){},23:function(e,t,a){},27:function(e,t,a){e.exports=a(43)},32:function(e,t,a){},33:function(e,t,a){},39:function(e,t,a){},40:function(e,t,a){},41:function(e,t,a){},42:function(e,t,a){},43:function(e,t,a){"use strict";a.r(t);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var n=a(0),r=a.n(n),l=a(24),s=a.n(l),o=a(12),c=a(11),i=a(1),u=a(2),h=a(5),m=a(3),p=a(4),d=(a(32),function(e){function t(){return Object(i.a)(this,t),Object(h.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"app"},r.a.createElement("div",{className:"app_title"},"Welcome"),r.a.createElement("div",{className:"app_text"},"Your eMarket has been successfully started"))}}]),t}(n.Component)),b=a(7),g=(a(33),function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(h.a)(this,Object(m.a)(t).call(this,e))).handleInputChange=function(e){var t=e.target,n=t.name;a.setState(Object(b.a)({},n,t.value))},a.handleSubmit=function(e){localStorage.setItem("user",btoa(a.state.email+":"+a.state.pass));var t={method:"POST",headers:{"Content-Type":"application/json",Authorization:"Basic "+localStorage.getItem("user")},body:JSON.stringify({email:a.state.email,pass:a.state.pass})};fetch("http://localhost:8080/login",t).then((function(e){e.ok?e.json().then((function(e){a.setState({errorMessage:""}),localStorage.setItem("user",btoa(e.email+":"+e.pass)),"user2@example.com"===e.email&&"pass"===e.pass?a.props.history.push("/admin/home"):a.props.history.push("/user/home")})):e.text().then((function(e){return a.setState({errorMessage:e})}))})).catch((function(e){return console.log(e)})),e.preventDefault()},a.state={email:"",pass:"",errorMessage:""},a}return Object(p.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"login"},r.a.createElement("form",{onSubmit:this.handleSubmit},r.a.createElement("input",{type:"email",name:"email",placeholder:"Enter email",onChange:this.handleInputChange}),r.a.createElement("br",null),r.a.createElement("input",{type:"password",name:"pass",placeholder:"Enter password",onChange:this.handleInputChange}),r.a.createElement("br",null),r.a.createElement("input",{type:"submit",value:"Login",className:"submit"}),r.a.createElement("br",null),r.a.createElement("label",{className:"error"},this.state.errorMessage),r.a.createElement("label",{className:"info"},"If you do not have account, please ",r.a.createElement(o.b,{to:"/signin"},"register"))))}}]),t}(n.Component)),E=(a(22),function(e){function t(){return Object(i.a)(this,t),Object(h.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"homeAdmin"},r.a.createElement("form",null,r.a.createElement("button",{type:"submit",formAction:"/admin/users"},"All users"),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("button",{type:"submit",formAction:"/admin/adduser"},"Add user"),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("button",{type:"submit",formAction:"/products"},"All products"),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("button",{type:"submit",formAction:"/admin/product"},"Add product"),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("label",{className:"info"},"Admin dashboard")))}}]),t}(n.Component)),f=function(e){function t(){return Object(i.a)(this,t),Object(h.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"homeUser"},r.a.createElement("form",null,r.a.createElement("button",{type:"submit",formAction:"/user/products",method:"get"},"Products"),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("button",{type:"submit",formAction:"/basketUser",method:"get"},"Basket"),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("button",{type:"btn3"},"Edit profile"),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("label",{className:"info"},"User dashboard")))}}]),t}(n.Component),y=(a(39),function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(a=Object(h.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).logout=function(){localStorage.clear(),a.props.history.push("/login")},a.home=function(){localStorage.getItem("user")===btoa("user2@example.com:pass")?a.props.history.push("/admin/home"):a.props.history.push("/user/home")},a}return Object(p.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"header"},localStorage.getItem("user")?r.a.createElement("div",{className:"dashboard",onClick:function(){return e.home()}},"Dashboard"):r.a.createElement(o.b,{className:"signin",to:"/signin"},"Signin"),r.a.createElement("div",{className:"svg"},r.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink",width:"28",height:"28",viewBox:"0 0 28 28"},r.a.createElement("title",null,"go home"),r.a.createElement("a",{href:"/",target:"_top",cursor:"pointer"},r.a.createElement("path",{d:"M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z"}))," ")),localStorage.getItem("user")?r.a.createElement("div",{className:"logout",onClick:function(){return e.logout()}},"Logout"):r.a.createElement(o.b,{className:"login-button",to:"/login"},"Login"))}}]),t}(n.Component)),v=Object(c.f)(y),C=(a(40),function(e){function t(){return Object(i.a)(this,t),Object(h.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"footer"},r.a.createElement("span",null,"Online Market 2019"))}}]),t}(n.Component)),j=(a(17),a(41),function(e){function t(){return Object(i.a)(this,t),Object(h.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(u.a)(t,[{key:"refreshPage",value:function(){window.location.reload()}},{key:"updateInputValue",value:function(e){var t=e.target.value;this.setState({name:t})}},{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"table_wrapper"},this.props.data&&r.a.createElement("table",null,r.a.createElement("thead",null,r.a.createElement("tr",null,this.props.heading.map((function(e,t){return r.a.createElement("th",{key:t},e)})))),r.a.createElement("tbody",null,this.props.data.map((function(t){return r.a.createElement("tr",{key:t.id},Object.entries(t).map((function(e){return r.a.createElement("td",{key:e[1]},e[1])})),e.props.buttons.map((function(a){return r.a.createElement("td",{key:a.name},r.a.createElement("button",{className:a.class,onClick:function(){a.action(t.id),e.refreshPage()}},a.name))})))})))))}}]),t}(n.Component)),O=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(h.a)(this,Object(m.a)(t).call(this,e))).url=function(){a.props.history.push("/admin/adduser")},a.gotourl=function(){a.props.history.push("/admin/update/")},a.deleteUser=function(e){var t={method:"DELETE",headers:{"Content-Type":"application/json",Authorization:"Basic "+localStorage.getItem("user")}};fetch("http://localhost:8080/userDelete/"+e,t).then((function(e){e.ok?e.json().then((function(e){return a.setState({users:a.state.users.filter((function(t){return t.id!==e.id}))})})):e.text().then((function(e){return alert(e)}))})).catch((function(e){return console.log(e)}))},a.updateUser=function(){a.props.history.push("/admin/updateUser/")},a.state={users:[]},a}return Object(p.a)(t,e),Object(u.a)(t,[{key:"componentDidMount",value:function(){var e=this;if(null===localStorage.getItem("user"))this.props.history.push("/login");else{var t={method:"GET",headers:{"Content-Type":"application/json",Authorization:"Basic "+localStorage.getItem("user")}};fetch("http://localhost:8080/users",t).then((function(t){t.ok?t.json().then((function(t){return e.setState({users:t})})):t.text().then((function(e){return alert(e)}))})).catch((function(e){return console.log(e)}))}}},{key:"render",value:function(){var e=this,t=[{name:"Basket",action:this.basketUser,class:"btn-update"},{name:"Update",action:this.updateUser,class:"btn-update"},{name:"Delete",action:this.deleteUser,class:"btn-update"}];return r.a.createElement("div",{className:"products_wrapper"},r.a.createElement("input",{className:"btn_add",type:"button",onClick:function(){return e.url()},value:"Add new user"}),this.state.users&&r.a.createElement(j,{heading:["Id","Name","Lastname","Email","Street","City","Role","Suma","","",""],InterchangeableText:!0,data:this.state.users,buttons:t}))}}]),t}(n.Component),k=(a(23),function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(h.a)(this,Object(m.a)(t).call(this,e))).handleInputChange=function(e){var t=e.target,n=t.name;a.setState(Object(b.a)({},n,t.value))},a.handleSubmit=function(e){var t={method:"POST",headers:{"Content-Type":"application/json",Authorization:"Basic "+btoa("user2@example.com:pass")},body:JSON.stringify({email:a.state.email,pass:a.state.pass,name:a.state.name,lastname:a.state.lastname,street:a.state.street,city:a.state.city})};fetch("http://localhost:8080/signin",t).then((function(e){e.ok?e.json().then((function(e){a.setState({errorMessage:""}),a.props.history.push("/admin/users")})):e.text().then((function(e){return a.setState({errorMessage:e})}))})).catch((function(e){return console.log(e)})),e.preventDefault()},a.state={email:"",name:"",lastname:"",street:"",city:"",pass:"",errorMessage:""},a}return Object(p.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"login"},r.a.createElement("form",{onSubmit:this.handleSubmit,className:"register"},r.a.createElement("input",{type:"text",name:"email",placeholder:"Enter email",onChange:this.handleInputChange}),r.a.createElement("input",{type:"password",name:"pass",placeholder:"Enter password",onChange:this.handleInputChange}),r.a.createElement("input",{type:"text",name:"name",placeholder:"Enter name",onChange:this.handleInputChange}),r.a.createElement("input",{type:"text",name:"lastname",placeholder:"Enter lastname",onChange:this.handleInputChange}),r.a.createElement("input",{type:"text",name:"street",placeholder:"Enter street",onChange:this.handleInputChange}),r.a.createElement("input",{type:"text",name:"city",placeholder:"Enter city",onChange:this.handleInputChange}),r.a.createElement("input",{type:"submit",value:"Add user",className:"submit"}),r.a.createElement("label",{className:"error"},this.state.errorMessage)))}}]),t}(n.Component)),S=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(h.a)(this,Object(m.a)(t).call(this,e))).handleInputChange=function(e){var t=e.target,n=t.name;a.setState(Object(b.a)({},n,t.value))},a.handleSubmit=function(e){var t={method:"POST",headers:{"Content-Type":"application/json",Authorization:"Basic "+btoa("user2@example.com:pass")},body:JSON.stringify({email:a.state.email,pass:a.state.pass,name:a.state.name,lastname:a.state.lastname,street:a.state.street,city:a.state.city})};fetch("http://localhost:8080/signin",t).then((function(e){e.ok?e.json().then((function(e){a.setState({errorMessage:""}),localStorage.setItem("user",btoa(e.email+":"+e.pass)),a.props.history.push("/user/home")})):e.text().then((function(e){return a.setState({errorMessage:e})}))})).catch((function(e){return console.log(e)})),e.preventDefault()},a.state={email:"",name:"",lastname:"",street:"",city:"",pass:"",errorMessage:""},a}return Object(p.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"login"},r.a.createElement("form",{onSubmit:this.handleSubmit,className:"register"},r.a.createElement("input",{type:"text",name:"email",placeholder:"Enter email",onChange:this.handleInputChange}),r.a.createElement("input",{type:"password",name:"pass",placeholder:"Enter password",onChange:this.handleInputChange}),r.a.createElement("input",{type:"text",name:"name",placeholder:"Enter name",onChange:this.handleInputChange}),r.a.createElement("input",{type:"text",name:"lastname",placeholder:"Enter lastname",onChange:this.handleInputChange}),r.a.createElement("input",{type:"text",name:"street",placeholder:"Enter street",onChange:this.handleInputChange}),r.a.createElement("input",{type:"text",name:"city",placeholder:"Enter city",onChange:this.handleInputChange}),r.a.createElement("input",{type:"submit",value:"Signin",className:"submit"}),r.a.createElement("label",{className:"error"},this.state.errorMessage)))}}]),t}(n.Component),N=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(h.a)(this,Object(m.a)(t).call(this,e))).url=function(){a.props.history.push("/admin/product")},a.deleteProduct=function(e){var t={method:"DELETE",headers:{"Content-Type":"application/json",Authorization:"Basic "+localStorage.getItem("user")}};fetch("http://localhost:8080/productDelete/"+e,t).then((function(e){e.ok?e.json().then((function(e){return a.setState({products:a.state.products.filter((function(t){return t.id!==e.id}))})})):e.text().then((function(e){return alert(e)}))})).catch((function(e){return console.log(e)}))},a.state={products:[]},a}return Object(p.a)(t,e),Object(u.a)(t,[{key:"componentDidMount",value:function(){var e=this;if(null===localStorage.getItem("user"))this.props.history.push("/login");else{var t={method:"GET",headers:{"Content-Type":"application/json",Authorization:"Basic "+localStorage.getItem("user")}};fetch("http://localhost:8080/products",t).then((function(t){t.ok?t.json().then((function(t){return e.setState({products:t})})):t.text().then((function(e){return alert(e)}))})).catch((function(e){return console.log(e)}))}}},{key:"render",value:function(){var e=this,t=[{name:"Update",action:this.updateProduct,class:"btn-update"},{name:"Delete",action:this.deleteProduct,class:"btn-update"}];return r.a.createElement("div",{className:"products_wrapper"},r.a.createElement("input",{className:"btn_add",type:"button",onClick:function(){return e.url()},value:"Add new product"}),this.state.products&&r.a.createElement(j,{heading:["Id","Name","Price","Stock","Size","Sale","Color","Item","",""],data:this.state.products,buttons:t}))}}]),t}(n.Component),I=a(13),w=(a(42),function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(h.a)(this,Object(m.a)(t).call(this,e))).handleInputChange=function(e){var t=e.target,n=t.name;a.setState(Object(b.a)({},n,t.value))},a.handleChangea=function(e){var t=e.target,n=t.name;a.setState(Object(b.a)({},n,t.value))},a.handleChangeb=function(e){var t=e.target,n=t.name;a.setState(Object(b.a)({},n,t.value))},a.handleChangec=function(e){var t=e.target,n=t.name;a.setState(Object(b.a)({},n,t.value))},a.handleChanged=function(e){var t=e.target,n=t.name;a.setState(Object(b.a)({},n,t.value))},a.handleSubmit=function(e){var t={method:"POST",headers:{"Content-Type":"application/json",Authorization:"Basic "+localStorage.getItem("user")},body:JSON.stringify({name:a.state.name,price:a.state.price,stock:a.state.stock,size_id:a.state.size,sale_id:a.state.sale,color_id:a.state.color,item_id:a.state.item})};fetch("http://localhost:8080/product",t).then((function(e){e.ok?e.json().then((function(e){a.setState({errorMessage:""}),a.props.history.push("/products")})):e.text().then((function(e){return a.setState({errorMessage:e})}))})).catch((function(e){return console.log(e)})),e.preventDefault()},a.handleChangea=a.handleChangea.bind(Object(I.a)(a)),a.handleChangeb=a.handleChangeb.bind(Object(I.a)(a)),a.handleChangec=a.handleChangec.bind(Object(I.a)(a)),a.handleChanged=a.handleChanged.bind(Object(I.a)(a)),a.state={name:"",price:"",stock:"",size_id:"",sale_id:"",color_id:"",item_id:"",errorMessage:""},a}return Object(p.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"product"},r.a.createElement("form",{className:"product_form",onSubmit:this.handleSubmit},r.a.createElement("input",{type:"text",name:"name",placeholder:"Enter name",onChange:this.handleInputChange}),r.a.createElement("input",{type:"number",step:"any",name:"price",placeholder:"Enter price",onChange:this.handleInputChange}),r.a.createElement("input",{type:"number",name:"stock",placeholder:"Enter stock",onChange:this.handleInputChange}),r.a.createElement("table",{className:"table"},r.a.createElement("tbody",null,r.a.createElement("tr",null,r.a.createElement("td",null,r.a.createElement("div",{id:"size_column"},r.a.createElement("label",null," ",r.a.createElement("input",{className:"dot",type:"radio",name:"size",checked:"1"===this.state.size,onChange:this.handleInputChange,value:"1"}),"xs"),r.a.createElement("label",null," ",r.a.createElement("input",{className:"dot",type:"radio",name:"size",checked:"2"===this.state.size,onChange:this.handleInputChange,value:"2"}),"s"),r.a.createElement("label",null," ",r.a.createElement("input",{className:"dot",type:"radio",name:"size",checked:"3"===this.state.size,onChange:this.handleInputChange,value:"3"}),"m"),r.a.createElement("label",null," ",r.a.createElement("input",{className:"dot",type:"radio",name:"size",checked:"4"===this.state.size,onChange:this.handleInputChange,value:"4"}),"l"),r.a.createElement("label",null," ",r.a.createElement("input",{className:"dot",type:"radio",name:"size",checked:"5"===this.state.size,onChange:this.handleInputChange,value:"5"}),"xl"))))),r.a.createElement("tbody",null,r.a.createElement("tr",null,r.a.createElement("td",null,r.a.createElement("div",{id:"sale_column"},r.a.createElement("label",null,r.a.createElement("input",{className:"dot",type:"radio",name:"sale",checked:"1"===this.state.sale,onChange:this.handleChangeb,value:"1"}),"on sale"),r.a.createElement("label",null,r.a.createElement("input",{className:"dot",type:"radio",name:"sale",checked:"2"===this.state.sale,onChange:this.handleChangeb,value:"2"}),"not on sale"))))),r.a.createElement("tbody",null,r.a.createElement("tr",null,r.a.createElement("td",null,r.a.createElement("div",{id:"item_column"},r.a.createElement("label",null," ",r.a.createElement("input",{className:"dot",type:"radio",name:"item",checked:"1"===this.state.item,onChange:this.handleChangec,value:"1"}),"bluza"),r.a.createElement("label",null," ",r.a.createElement("input",{className:"dot",type:"radio",name:"item",checked:"2"===this.state.item,onChange:this.handleChangec,value:"2"}),"pantalone"),r.a.createElement("label",null," ",r.a.createElement("input",{className:"dot",type:"radio",name:"item",checked:"3"===this.state.item,onChange:this.handleChangec,value:"3"}),"haljina"),r.a.createElement("label",null," ",r.a.createElement("input",{className:"dot",type:"radio",name:"item",checked:"4"===this.state.item,onChange:this.handleChangec,value:"4"}),"suknja"),r.a.createElement("label",null," ",r.a.createElement("input",{className:"dot",type:"radio",name:"item",checked:"5"===this.state.item,onChange:this.handleChangec,value:"5"}),"jakna"))))),r.a.createElement("tbody",null,r.a.createElement("tr",null,r.a.createElement("td",null,r.a.createElement("div",{id:"color_column"},r.a.createElement("label",null," ",r.a.createElement("input",{className:"dot",type:"radio",name:"color",checked:"1"===this.state.color,onChange:this.handleChanged,value:"1"}),"bela"),r.a.createElement("label",null," ",r.a.createElement("input",{className:"dot",type:"radio",name:"color",checked:"2"===this.state.color,onChange:this.handleChanged,value:"2"}),"crna"),r.a.createElement("label",null," ",r.a.createElement("input",{className:"dot",type:"radio",name:"color",checked:"3"===this.state.color,onChange:this.handleChanged,value:"3"}),"crvena"),r.a.createElement("label",null," ",r.a.createElement("input",{className:"dot",type:"radio",name:"color",checked:"4"===this.state.color,onChange:this.handleChanged,value:"4"}),"zelena"),r.a.createElement("label",null," ",r.a.createElement("input",{className:"dot",type:"radio",name:"color",checked:"5"===this.state.color,onChange:this.handleChanged,value:"5"}),"plava"),r.a.createElement("label",null," ",r.a.createElement("input",{className:"dot",type:"radio",name:"color",checked:"6"===this.state.color,onChange:this.handleChanged,value:"6"}),"zuta"),r.a.createElement("label",null," ",r.a.createElement("input",{className:"dot",type:"radio",name:"color",checked:"7"===this.state.color,onChange:this.handleChanged,value:"7"}),"ljubicasto"),r.a.createElement("label",null," ",r.a.createElement("input",{className:"dot",type:"radio",name:"color",checked:"8"===this.state.color,onChange:this.handleChanged,value:"8"}),"sareno")))))),r.a.createElement("input",{type:"submit",value:"Add product",className:"submit"}),r.a.createElement("label",{className:"error"},this.state.errorMessage)))}}]),t}(n.Component));function x(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function z(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?x(a,!0).forEach((function(t){Object(b.a)(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):x(a).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}var A=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(h.a)(this,Object(m.a)(t).call(this,e))).handleInputChange=function(e){var t=e.target,n=t.name;a.setState({users:z({},a.state.users,Object(b.a)({},n,t.value))})},a.handleSubmit=function(e){var t={method:"PUT",headers:{"Content-Type":"application/json",Authorization:"Basic "+localStorage.getItem("user")},body:JSON.stringify({name:a.state.users.name,lastname:a.state.users.lastname,email:a.state.users.email,password:a.state.users.password})};fetch("http://localhost:8080/userUpdate/"+a.state.users.id,t).then((function(e){e.ok?e.json().then((function(e){a.setState({errorMessage:""}),a.props.history.push("/admin/users/")})):e.text().then((function(e){return a.setState({errorMessage:e})}))})).catch((function(e){return console.log(e)})),e.preventDefault()},a.state={users:[],name:"",lastname:"",email:"",password:"",errorMessage:""},a}return Object(p.a)(t,e),Object(u.a)(t,[{key:"componentDidMount",value:function(){var e=this,t={method:"GET",headers:{"Content-Type":"application/json",Authorization:"Basic "+localStorage.getItem("user")}};fetch("http://localhost:8080/userUpdate/"+this.props.match.params.id,t).then((function(e){return e.json()})).then((function(t){e.setState({users:t})}))}},{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"login"},this.state.users&&r.a.createElement("form",{onSubmit:this.handleSubmit},r.a.createElement("div",null,r.a.createElement("label",null,"Change name:"),r.a.createElement("input",{type:"text",name:"name",value:this.state.users.name,onChange:this.handleInputChange})),r.a.createElement("div",null,r.a.createElement("label",null,"Change lastname:"),r.a.createElement("input",{type:"text",name:"lastname",value:this.state.users.lastname,onChange:this.handleInputChange})),r.a.createElement("div",null,r.a.createElement("label",null,"Change email:"),r.a.createElement("input",{type:"text",name:"email",value:this.state.users.email,onChange:this.handleInputChange})),r.a.createElement("div",null,r.a.createElement("label",null,"Change password:"),r.a.createElement("input",{type:"text",name:"password",value:this.state.users.password,onChange:this.handleInputChange})),r.a.createElement("input",{type:"submit",value:"Change",className:"submit",onClick:function(){return e.props.history.push("/admin/users")}}),r.a.createElement("input",{type:"button",value:"Cancel",className:"cancel",onClick:function(){return e.props.history.push("/admin/users")}}),r.a.createElement("label",{className:"error"},this.state.errorMessage)))}}]),t}(n.Component),M=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(h.a)(this,Object(m.a)(t).call(this,e))).addBasket=function(e){var t={method:"POST",headers:{"Content-Type":"application/json",Authorization:"Basic "+localStorage.getItem("user")},body:JSON.stringify({product:e})};fetch("http://localhost:8080/3/addProductBasket",t).then((function(e){e.ok?e.json().then((function(e){a.setState({errorMessage:""})})):e.text().then((function(e){return a.setState({errorMessage:e})}))})).catch((function(e){return console.log(e)}))},a.state={products:[],errorMessage:""},a}return Object(p.a)(t,e),Object(u.a)(t,[{key:"componentDidMount",value:function(){var e=this;if(null===localStorage.getItem("user"))this.props.history.push("/login");else{var t={method:"GET",headers:{"Content-Type":"application/json",Authorization:"Basic "+localStorage.getItem("user")}};fetch("http://localhost:8080/products",t).then((function(t){t.ok?t.json().then((function(t){return e.setState({products:t})})):t.text().then((function(e){return alert(e)}))})).catch((function(e){return console.log(e)}))}}},{key:"render",value:function(){var e=this,t=[{name:"Add",action:this.addBasket,class:"btn-update"}];return r.a.createElement("div",{className:"products_wrapper"},r.a.createElement("input",{className:"btn_add",type:"button",onClick:function(){return e.a()},value:"Basket"}),this.state.products&&r.a.createElement(j,{heading:["Id","Name","Price","Stock","Size","Sale","Color","Item",""],data:this.state.products,buttons:t}))}}]),t}(n.Component);s.a.render(r.a.createElement(o.a,null,r.a.createElement(n.Fragment,null,r.a.createElement(v,null),r.a.createElement(c.c,null,r.a.createElement(c.a,{path:"/login",component:g}),r.a.createElement(c.a,{path:"/signin",component:S}),r.a.createElement(c.a,{path:"/admin/home",component:E}),r.a.createElement(c.a,{path:"/user/home",component:f}),r.a.createElement(c.a,{path:"/admin/users",component:O}),r.a.createElement(c.a,{path:"/products",component:N}),r.a.createElement(c.a,{path:"/admin/product",component:w}),r.a.createElement(c.a,{path:"/admin/adduser",component:k}),r.a.createElement(c.a,{path:"/admin/updateUser",component:A}),r.a.createElement(c.a,{path:"/user/products",component:M}),r.a.createElement(c.a,{exact:!0,path:"/",component:d})),r.a.createElement(C,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[27,1,2]]]);
//# sourceMappingURL=main.70956428.chunk.js.map