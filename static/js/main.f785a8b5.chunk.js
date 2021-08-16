(this["webpackJsonpgoit-react-hw-07-phonebook-server"]=this["webpackJsonpgoit-react-hw-07-phonebook-server"]||[]).push([[0],{42:function(e,t,n){},71:function(e,t,n){"use strict";n.r(t);var r={};n.r(r),n.d(r,"fetchContact",(function(){return A})),n.d(r,"addContact",(function(){return L})),n.d(r,"deleteContact",(function(){return F}));var a={};n.r(a),n.d(a,"getFilter",(function(){return X})),n.d(a,"getIsLoading",(function(){return Y})),n.d(a,"getContacts",(function(){return _})),n.d(a,"getVisibleContacts",(function(){return ee}));var c=n(1),o=n.n(c),i=n(15),s=n.n(i),d=(n(42),n(5)),u=n(36),l=n(8),b=n(33),p=n.n(b),j=n(11),f=n(10),x=n.n(f),h=n(20),g=n(9),O=n.n(g);O.a.defaults.baseURL="http://localhost:7777";var m=function(e){return O.a.delete("contacts/".concat(e))};O.a.defaults.baseURL="http://localhost:7777";var v,w,C,y,k,z,A=Object(l.b)("contacts/fetchContact",function(){var e=Object(h.a)(x.a.mark((function e(t,n){var r,a,c;return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=n.rejectWithValue,e.prev=1,e.next=4,O.a.get("/contacts");case 4:return a=e.sent,c=a.data,e.abrupt("return",c);case 9:return e.prev=9,e.t0=e.catch(1),e.abrupt("return",r(e.t0));case 12:case"end":return e.stop()}}),e,null,[[1,9]])})));return function(t,n){return e.apply(this,arguments)}}()),L=Object(l.b)("contacts/addContact",function(){var e=Object(h.a)(x.a.mark((function e(t,n){var r,a,c,o,i,s;return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=t.name,a=t.number,c=n.rejectWithValue,e.prev=2,o={name:r,number:a},e.next=6,d=o,O.a.post("/contacts",d);case 6:return i=e.sent,s=i.data,e.abrupt("return",s);case 11:return e.prev=11,e.t0=e.catch(2),e.abrupt("return",c(e.t0));case 14:case"end":return e.stop()}var d}),e,null,[[2,11]])})));return function(t,n){return e.apply(this,arguments)}}()),F=Object(l.b)("contacts/deleteContact",function(){var e=Object(h.a)(x.a.mark((function e(t,n){var r;return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=n.rejectWithValue,e.prev=1,e.next=4,m(t);case 4:return e.abrupt("return",t);case 7:return e.prev=7,e.t0=e.catch(1),e.abrupt("return",r(e.t0));case 10:case"end":return e.stop()}}),e,null,[[1,7]])})));return function(t,n){return e.apply(this,arguments)}}()),S=Object(l.c)({name:"contacts",initialState:{items:[],filter:"",isLoding:!1,error:null},reducers:{changeFilter:function(e,t){e.filter=t.payload}},extraReducers:function(e){e.addCase(A.fulfilled,(function(e,t){e.items=t.payload})).addCase(L.fulfilled,(function(e,t){e.items.push(t.payload)})).addCase(F.fulfilled,(function(e,t){e.items=e.items.filter((function(e){return e.id!==t.payload}))})).addMatcher(Object(l.e)(A.pending,L.pending,F.pending),(function(e){e.isLoading=!0,e.error=null})).addMatcher(Object(l.e)(A.fulfilled,L.fulfilled,F.fulfilled,A.rejected,L.rejected,F.rejected),(function(e){e.isLoading=!1})).addMatcher(Object(l.e)(A.rejected,L.rejected,F.rejected),(function(e,t){e.error=t.payload,console.error(t.payload)}))}}),M=S.actions.changeFilter,Z=S.reducer,E=[].concat(Object(u.a)(Object(l.d)({serializableCheck:{ignoredActions:[j.a,j.f,j.b,j.c,j.d,j.e]}})),[p.a]),J=Object(l.a)({reducer:{contacts:Z},middleware:E,devTools:!1}),V=n(19),I=n(6),N=n(7),q=N.a.div(v||(v=Object(I.a)(["\n  max-width: 500px;\n  margin-left: auto;\n  margin-right: auto;\n  padding: 20px 50px;\n  background-color: #d2ffff;\n  box-shadow: 1px 1px 3px rgba(0,0,0,0.5);\n  border-radius: 5px;\n  &:hover{\n      box-shadow: 0px 0px 5px  rgba(0,0,0,0.5);\n  }\n"]))),B=N.a.h1(w||(w=Object(I.a)(["\n    text-align: center;\n   \n    color: #000;\n    font-weight: bold;\n    font-size: 42px;\n"]))),R=n(34),W=n(2),U=function(e){var t=e.title,n=e.children;return Object(W.jsxs)(q,{children:[Object(W.jsxs)(B,{children:[Object(W.jsx)(R.a,{})," ",t]}),n]})},$=n(23),D=n(73),P=N.a.h2(C||(C=Object(I.a)(["\nfont-size: 17px;\nfont-weight: 500;\nmargin: 0;\njustify-content:center;\npadding-bottom: 10px;\n"]))),T=N.a.input(y||(y=Object(I.a)(["\nmax-width:350px;\ndisplay: flex;\npadding:5px;\nmargin-bottom: 20px;\ncursor: pointer;\nborder:  solid 2px #c8e7f9;\nbox-shadow: 1px 1px 3px rgba(0,0,0,0.5);\nborder-radius:5px;\n&:hover{\n    border:  solid 2px #79e000;\n    box-shadow: 0 0 20px rgba(121, 224, 0, 0.5);\n}"]))),G=N.a.button(k||(k=Object(I.a)(["\npadding: 5px;\nborder:  solid 2px #6b6a6a4c;\nborder-radius:5px;\n&:hover{\n    color: #09c3e4;\n    border: solid 2px #79e000;\n    box-shadow: 0 0 20px rgba(121, 224, 0, 0.5); \n}\n"]))),H=n(22),K=n(14),Q=n(16),X=function(e){return e.contacts.filter},Y=function(e){return e.contacts.IsLoading},_=function(e){return e.contacts.items},ee=Object(Q.a)([_,X],(function(e,t){var n=t.toLowerCase();return e.filter((function(e){return e.name.toLowerCase().includes(n)}))}));function te(){var e=Object(c.useState)(""),t=Object($.a)(e,2),n=t[0],o=t[1],i=Object(c.useState)(""),s=Object($.a)(i,2),u=s[0],l=s[1],b=Object(d.c)(a.getContacts),p=Object(d.b)(),j=Object(D.a)(),f=Object(D.a)(),x=function(e){var t=e.target,n=t.name,r=t.value;switch(n){case"name":o(r);break;case"number":l(r);break;default:return}},h=function(){o(""),l("")};return Object(W.jsxs)("form",{onSubmit:function(e){if(e.preventDefault(),b.some((function(e){return e.name===n||e.number===u})))return V.b.error("".concat(n," or ").concat(u," already in the contacts.")),void h();p(r.addContact({id:Object(D.a)(),name:n,number:u})),h()},children:[Object(W.jsxs)(P,{htmlFor:j,children:[Object(W.jsx)(H.b,{})," Name"]}),Object(W.jsx)(T,{type:"text",name:"name",placeholder:"Enter name",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"\u0418\u043c\u044f \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0442\u043e\u043b\u044c\u043a\u043e \u0438\u0437 \u0431\u0443\u043a\u0432, \u0430\u043f\u043e\u0441\u0442\u0440\u043e\u0444\u0430, \u0442\u0438\u0440\u0435 \u0438 \u043f\u0440\u043e\u0431\u0435\u043b\u043e\u0432. \u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440 Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan \u0438 \u0442. \u043f.",value:n,onChange:x,id:j,required:!0}),Object(W.jsxs)(P,{htmlFor:f,children:[Object(W.jsx)(H.a,{})," Number"]}),Object(W.jsx)(T,{type:"tel",name:"number",placeholder:"Enter number",autoComplete:"all",onChange:x,pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"\u041d\u043e\u043c\u0435\u0440 \u0442\u0435\u043b\u0435\u0444\u043e\u043d\u0430 \u0434\u043e\u043b\u0436\u0435\u043d \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0446\u0438\u0444\u0440 \u0438 \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0434\u0435\u0440\u0436\u0430\u0442\u044c \u043f\u0440\u043e\u0431\u0435\u043b\u044b, \u0442\u0438\u0440\u0435, \u043a\u0440\u0443\u0433\u043b\u044b\u0435 \u0441\u043a\u043e\u0431\u043a\u0438 \u0438 \u043c\u043e\u0436\u0435\u0442 \u043d\u0430\u0447\u0438\u043d\u0430\u0442\u044c\u0441\u044f \u0441 +",value:u,id:f,required:!0}),Object(W.jsxs)(G,{type:"submit",disabled:!n||!u,children:[Object(W.jsx)(K.c,{})," Add contact"]})]})}var ne,re,ae,ce=N.a.p(z||(z=Object(I.a)(["\nfont-size:20px;\n"]))),oe=function(){var e=Object(d.c)(a.getFilter),t=Object(d.b)();return Object(W.jsxs)(W.Fragment,{children:[Object(W.jsx)(ce,{children:"Find contacts by name"}),Object(W.jsx)(T,{type:"text",name:"name",placeholder:"Name to search",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"\u0418\u043c\u044f \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0442\u043e\u043b\u044c\u043a\u043e \u0438\u0437 \u0431\u0443\u043a\u0432, \u0430\u043f\u043e\u0441\u0442\u0440\u043e\u0444\u0430, \u0442\u0438\u0440\u0435 \u0438 \u043f\u0440\u043e\u0431\u0435\u043b\u043e\u0432. \u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440 Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan \u0438 \u0442. \u043f.",value:e,onChange:function(e){return t(M(e.target.value))},required:!0})]})},ie=N.a.ul(ne||(ne=Object(I.a)(["\nwidth: 350px;\npadding: 0;\n"]))),se=N.a.li(re||(re=Object(I.a)(["\n display: flex;\n font-style: normal;\n font-weight: normal;\n width: 100%;\n margin: 0 auto;\n padding: 10px 5px;\n font-size: 16px;\n align-items:center;\n justify-content: left;\n & span {\n    display: inline-flex;\n    align-items: center;\n    font-weight: 600;\n    color: var(--color-dark);\n    &:first-of-type {\n      color: var(--color-accent);\n      margin-right: 10px;\n    }\n    & svg {\n      margin-right: 10px;\n      color: var(--color-accent);\n    }\n  }\n  & svg {\n    color: var(--color-title);\n  }\n\n"]))),de=N.a.button(ae||(ae=Object(I.a)(["\n display: block;\n  margin-left: auto;\n    padding: 10px;\nbackground-color: #c8e7f9;\nmin-width: 40px;\nheight: 40px;\nborder: solid 2px #c8e7f9;\nbox-shadow: 1px 1px 3px rgba(0,0,0,0.5);\nborder-radius: 10%;\npadding: 3px;\n&:hover{\n    color: #79e000;\n    border:  solid 2px #79e000;\n    box-shadow: 1px 2px 2px 0 rgba(121, 224, 0, 0.5);\n}\n"]))),ue=function(){var e=Object(d.c)(a.getVisibleContacts),t=Object(d.b)();return Object(c.useEffect)((function(){t(r.fetchContact())}),[t]),Object(W.jsx)(ie,{children:e.map((function(e){var n=e.id,a=e.name,c=e.number;return Object(W.jsxs)(se,{children:[Object(W.jsxs)("span",{children:[Object(W.jsx)(K.b,{}),a,":"]}),Object(W.jsx)("span",{children:c}),Object(W.jsx)(de,{onClick:function(){return function(e){t(r.deleteContact(e)),console.log(e)}(n)},children:Object(W.jsx)(K.a,{})})]},n)}))})},le=n(35);function be(){var e=Object(d.c)(_);return Object(c.useEffect)((function(){window.localStorage.setItem("contacts",JSON.stringify(e))}),[e]),Object(W.jsxs)(U,{title:"Phonebook",children:[Object(W.jsx)(V.a,{autoClose:4e3,position:"top-right"}),Object(W.jsx)(te,{}),Object(W.jsxs)("h2",{children:[Object(W.jsx)(le.a,{})," Contacts"]}),Object(W.jsx)(oe,{}),Object(W.jsx)(ue,{})]})}s.a.render(Object(W.jsx)(o.a.StrictMode,{children:Object(W.jsx)(d.a,{store:J,children:Object(W.jsx)(be,{})})}),document.getElementById("root"))}},[[71,1,2]]]);
//# sourceMappingURL=main.f785a8b5.chunk.js.map