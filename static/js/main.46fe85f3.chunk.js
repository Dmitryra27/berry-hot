(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[0],{106:function(e,t,a){e.exports=a(198)},111:function(e,t,a){},130:function(e,t,a){},131:function(e,t,a){},136:function(e,t){},144:function(e,t){},160:function(e,t){},162:function(e,t){},189:function(e,t,a){},190:function(e,t,a){},195:function(e,t,a){},198:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(94),s=a.n(c),l=(a(111),a(104)),o=a(1),i=a.n(o),u=a(5),d=a(95),m=a(96),p=a(105),f=a(103),b=(a(56),a(128),a(129),a(130),a(131),a(32)),v=a(97),E=a.n(v),h=a(2),g=(a(189),a(25)),N=a.n(g),_=(a(190),a(98)),w=a.n(_),j=a(99),O=a.n(j),x={},y={},I={};function k(e){return e in I?I[e]:I[e]=new Promise((function(t){y[e]=new Image,y[e].onload=function(){x[e]=!0,t()},y[e].onerror=function(a){x[e]=!1,t()},y[e].src="https://wayback.berryclub.io/img/".concat(e)}))}function S(e){var t=Object(n.useState)(null),a=Object(h.a)(t,2),c=a[0],s=a[1],l=Object(n.useState)(!0),o=Object(h.a)(l,2),i=o[0],u=o[1],d=Object(n.useState)(!1),m=Object(h.a)(d,2),p=m[0],f=m[1],b=Object(n.useRef)(null),v=e.cardReady,E=e.cardId;return Object(n.useEffect)((function(){u(!0),s(null),v(!1),f(!1),k(E).then((function(){f(!x[E]),u(!1),x[E]&&(v(!0),s(y[E]))}))}),[E,v,b]),Object(n.useEffect)((function(){b.current&&c&&b.current.getContext("2d").drawImage(c,0,0)}),[c]),r.a.createElement("div",null,i?r.a.createElement("img",{className:e.className,src:O.a,alt:"The card #".concat(E," is loading")}):p?r.a.createElement("img",{className:e.className,src:w.a,alt:"The card #".concat(E," is broken")}):"",r.a.createElement("canvas",{className:"".concat(e.className).concat(!c||i||p?" d-none":""),ref:b,width:400,height:400,alt:"Card #".concat(E)}))}var C=a(13),R=function(e){return parseFloat(e)/1e24};function A(e){function t(){return(t=Object(u.a)(i.a.mark((function t(a){return i.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a.preventDefault(),t.next=3,e._near.contract.buy_card({card_id:e.cardId},"200000000000000",e.price);case 3:case"end":return t.stop()}}),t)})))).apply(this,arguments)}var a=R(e.price),n=a/100,c=a/10,s=a-n-c;e.ownerId||(c+=s,s=0);var l=1.2*a;return r.a.createElement("div",null,r.a.createElement("button",{className:"btn btn-success",disabled:!e.signedIn,onClick:function(e){return function(e){return t.apply(this,arguments)}(e)}},"Buy for ",a.toFixed(2)," NEAR"),r.a.createElement("div",{className:"text-muted text-start"},r.a.createElement("p",null,"Price breakdown:",r.a.createElement("ul",null,e.ownerId&&r.a.createElement("li",null,"Owner @",e.ownerId," will get ",s.toFixed(2)," NEAR"),r.a.createElement("li",null,"Art DAO will get ",c.toFixed(2)," NEAR"),r.a.createElement("li",null,"1% App commission is ",n.toFixed(2)," NEAR"))),r.a.createElement("p",null,"The new price will be ",l.toFixed(2)," NEAR")))}var q=function(e){return r.a.createElement("div",null,r.a.createElement(C.b,{to:"/c/".concat(e.cardId),className:"btn btn-success",disabled:!e.signedIn},R(e.price).toFixed(2)," NEAR"))};var P=function(e){var t=Object(n.useState)(e.rating),a=Object(h.a)(t,2),c=a[0],s=a[1],l=e.cardId,o=e.rating,d=Object(n.useCallback)(Object(u.a)(i.a.mark((function t(){return i.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e._near.contract.get_rating({card_id:l});case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}}),t)}))),[e._near,l]);return Object(n.useEffect)((function(){e.connected&&(o?s(o):d().then(s))}),[e.connected,o,d]),e.cardId?r.a.createElement("div",{className:"card card-preview m-2"},r.a.createElement(C.b,{to:"/c/".concat(l)},r.a.createElement(S,{className:"card-img-top",cardId:l,cardReady:function(){return!1}})),r.a.createElement("div",{className:"card-body"},"#",l),r.a.createElement("div",{className:"card-footer text-center"},r.a.createElement(q,Object.assign({},e,{cardId:l,price:c})))):r.a.createElement("div",{className:"card card-preview m-2"},r.a.createElement("div",{className:"d-flex justify-content-center"},r.a.createElement("div",{className:"spinner-grow",role:"status"},r.a.createElement("span",{className:"visually-hidden"},"Loading..."))))};var F=function(e){var t=Object(n.useState)(!0),a=Object(h.a)(t,2),c=a[0],s=a[1],l=Object(n.useState)([]),o=Object(h.a)(l,2),d=o[0],m=o[1],p=Object(n.useState)(N()()),f=Object(h.a)(p,1)[0],b=Object(n.useCallback)(Object(u.a)(i.a.mark((function t(){return i.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e._near.contract.get_top({limit:40});case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}}),t)}))),[e._near]);Object(n.useEffect)((function(){e.connected&&(s(!0),b().then((function(e){m(e),s(!1)})))}),[e.connected,b]);var v=d.map((function(t){var a=Object(h.a)(t,2),n=a[0],c=a[1],s="".concat(f,"-").concat(c);return r.a.createElement(P,Object.assign({},e,{key:s,cardId:c,rating:n}))}));return r.a.createElement("div",null,r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row justify-content-md-center"},c?r.a.createElement("div",{className:"col col-12 col-lg-8 col-xl-6"},r.a.createElement("div",{className:"d-flex justify-content-center"},r.a.createElement("div",{className:"spinner-grow",role:"status"},r.a.createElement("span",{className:"visually-hidden"},"Loading...")))):r.a.createElement("div",{className:"col"},v))))};a(195);var T=function(e){var t=Object(n.useState)(!1),a=Object(h.a)(t,2),c=a[0],s=a[1],l=Object(n.useState)(!1),o=Object(h.a)(l,2),d=o[0],m=o[1],p=Object(n.useState)(Promise.resolve()),f=Object(h.a)(p,1)[0],b=Object(n.useState)(N()()),v=Object(h.a)(b,1)[0],E=e.requests?e.requests[0]:null;e.requests&&e.requests.slice(1).forEach((function(e){k(e.left),k(e.right)}));var g=function(){var t=Object(u.a)(i.a.mark((function t(a,n,r){return i.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(a.preventDefault(),"SelectedLeft"!==r||c){t.next=3;break}return t.abrupt("return");case 3:if("SelectedRight"!==r||d){t.next=5;break}return t.abrupt("return");case 5:e.popRequest(),f.then(Object(u.a)(i.a.mark((function t(){var a,c,s,l,o;return i.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:a=100,c=null,s=0;case 3:if(!(s<5)){t.next=21;break}return t.prev=4,t.next=7,e._near.contract.vote({request:n,response:r},a.toString()+"000000000000");case 7:c=t.sent,t.next=17;break;case 10:if(t.prev=10,t.t0=t.catch(4),l=t.t0.toString(),console.warn(l),-1===l.indexOf("prepaid gas")){t.next=17;break}return a+=40,t.abrupt("continue",18);case 17:return t.abrupt("break",21);case 18:++s,t.next=3;break;case 21:c&&("SelectedLeft"!==r&&"SelectedRight"!==r||(o="SelectedLeft"===r?n.left:n.right,e.addRecentCard(o)),e.addRequest(c));case 22:case"end":return t.stop()}}),t,null,[[4,10]])}))));case 7:case"end":return t.stop()}}),t)})));return function(e,a,n){return t.apply(this,arguments)}}(),_=e.recentCards.map((function(t){var a="".concat(v,"-").concat(t);return r.a.createElement(P,Object.assign({},e,{key:a,cardId:t}))}));return r.a.createElement("div",null,r.a.createElement("div",{className:"container"},E?r.a.createElement("div",null,r.a.createElement("h3",null,"Vote"),r.a.createElement("div",{className:"row justify-content-md-center mb-3"},r.a.createElement("div",{className:"col col-sm-6"},r.a.createElement("div",{className:"card-picker".concat(c?"":" disabled"),onClick:function(e){return g(e,E,"SelectedLeft")}},r.a.createElement(S,{className:"img-fluid",cardId:E.left,cardReady:s}))),r.a.createElement("div",{className:"col col-sm-6"},r.a.createElement("div",{className:"card-picker".concat(d?"":" disabled"),onClick:function(e){return g(e,E,"SelectedRight")}},r.a.createElement(S,{className:"img-fluid",cardId:E.right,cardReady:m})))),r.a.createElement("div",{className:"row justify-content-md-center mb-3"},r.a.createElement("button",{className:"btn btn-lg btn-danger",onClick:function(e){return g(e,E,"Skipped")}},"Skip both cards"))):r.a.createElement("div",{className:"d-flex justify-content-center"},r.a.createElement("div",{className:"spinner-grow",role:"status"},r.a.createElement("span",{className:"visually-hidden"},"Loading..."))),r.a.createElement("div",{className:"row justify-content-md-center mb-3"},_.length>0&&r.a.createElement("div",null,r.a.createElement("h3",null,"Recent votes"),_))))},D=a(3),L=a(54),B=a.n(L),V=a(102),U=function(e){return e?{ownerId:e.owner_id,purchasePrice:R(e.purchase_price),purchaseTime:new Date(parseFloat(e.purchase_time)/1e6),volume:R(e.volume),artDaoProfit:R(e.art_dao_profit),numTrades:e.num_trades}:{ownerId:null,purchasePrice:0,purchaseTime:null,volume:0,artDaoProfit:0,numTrades:0}};var K=function(e){var t=Object(n.useState)(null),a=Object(h.a)(t,2),c=a[0],s=a[1],l=e.cardId,o=e.refreshTime,d=e.hidden,m=Object(n.useCallback)(Object(u.a)(i.a.mark((function t(){var a,n;return i.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e._near.contract.get_rating({card_id:l});case 2:return a=t.sent,t.t0=U,t.next=6,e._near.contract.get_card_info({card_id:l});case 6:return t.t1=t.sent,(n=(0,t.t0)(t.t1)).refreshTime=o,n.rating=a,t.abrupt("return",n);case 11:case"end":return t.stop()}}),t)}))),[e._near,l,o]);return Object(n.useEffect)((function(){e.connected&&!d&&(k(l),m().then(s))}),[e.connected,m,l,d]),c?r.a.createElement("div",{className:"card m-2"},r.a.createElement(S,{className:"card-img-top",cardId:l,cardReady:function(){return!1}}),r.a.createElement("div",{className:"card-body text-start"},r.a.createElement("h3",null,"#",l),c.ownerId?r.a.createElement("div",null,r.a.createElement("p",null,"Owned by ",c.ownerId===e.signedAccountId?"you":r.a.createElement(C.b,{to:"/a/".concat(c.ownerId)},"@",c.ownerId),r.a.createElement("br",null),"Purchased ",r.a.createElement(V.a,{datetime:c.purchaseTime})," for ",c.purchasePrice.toFixed(2)," NEAR",r.a.createElement("br",null)),r.a.createElement("p",null,"Total card volume ",c.volume.toFixed(2)," NEAR",r.a.createElement("br",null),"Art DAO got ",c.artDaoProfit.toFixed(2)," NEAR",r.a.createElement("br",null))):r.a.createElement("div",null,r.a.createElement("p",null,"Not owned by anyone."))),r.a.createElement("div",{className:"card-footer"},r.a.createElement("p",{className:"card-text text-center"},c.ownerId===e.signedAccountId?r.a.createElement(q,Object.assign({},e,{cardId:l,price:c.rating})):r.a.createElement(A,Object.assign({},e,{cardId:l,price:c.rating,ownerId:c.ownerId}))))):r.a.createElement("div",{className:"card m-2"},r.a.createElement("div",{className:"d-flex justify-content-center"},r.a.createElement("div",{className:"spinner-grow",role:"status"},r.a.createElement("span",{className:"visually-hidden"},"Loading..."))))};var G=function(e){var t=Object(D.f)().cardId;return r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col col-12 col-lg-8 col-xl-6"},r.a.createElement(K,Object.assign({},e,{cardId:parseInt(t)})))))};var H=function(e){var t=Object(D.f)().accountId,a=Object(n.useState)(null),c=Object(h.a)(a,2),s=c[0],l=c[1],o=Object(n.useState)(!0),d=Object(h.a)(o,2),m=d[0],p=d[1],f=Object(n.useState)([]),b=Object(h.a)(f,2),v=b[0],E=b[1],g=Object(n.useState)(N()()),_=Object(h.a)(g,1)[0],w=Object(n.useCallback)(Object(u.a)(i.a.mark((function a(){var n;return i.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,e._near.getAccount(t);case 2:if(n=a.sent){a.next=5;break}return a.abrupt("return");case 5:return l(n),a.next=8,n.fetchCards();case 8:return a.abrupt("return",a.sent);case 9:case"end":return a.stop()}}),a)}))),[e._near,t]);Object(n.useEffect)((function(){e.connected&&w().then((function(e){E(e),p(!1)}))}),[e.connected,w]);var j=v.map((function(t){var a="".concat(_,"-").concat(t);return r.a.createElement(P,Object.assign({},e,{key:a,cardId:t}))}));return r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row justify-content-md-center"},m?r.a.createElement("div",{className:"col"},r.a.createElement("div",{className:"d-flex justify-content-center"},r.a.createElement("div",{className:"spinner-grow",role:"status"},r.a.createElement("span",{className:"visually-hidden"},"Loading...")))):r.a.createElement("div",{className:"col "},r.a.createElement("h3",null,t===e.signedAccountId?"Your cards":"Cards owned by @".concat(t)),r.a.createElement("div",null,j)),s?r.a.createElement("div",{className:"col col-12 col-lg-4 col-xl-4"},r.a.createElement("h3",null,"Stats"),r.a.createElement("p",null,r.a.createElement("ul",null,r.a.createElement("li",null,"Card owned: ",s.numCards),r.a.createElement("li",null,"Purchase volume: ",s.purchaseVolume.toFixed(2)," NEAR"),r.a.createElement("li",null,"Num purchases: ",s.numPurchases),r.a.createElement("li",null,"Sale profit: ",s.saleProfit.toFixed(2)," NEAR"),r.a.createElement("li",null,"Num sales: ",s.numSales),r.a.createElement("li",null,"Num votes: ",s.numVotes)))):r.a.createElement("div",{className:"col col-12 col-lg-8 col-xl-6"},r.a.createElement("div",{className:"d-flex justify-content-center"},r.a.createElement("div",{className:"spinner-grow",role:"status"},r.a.createElement("span",{className:"visually-hidden"},"Loading..."))))))};var J=function(e){var t=Object(n.useState)(null),a=Object(h.a)(t,2),c=a[0],s=a[1],l=Object(n.useState)(!0),o=Object(h.a)(l,2),d=o[0],m=o[1],p=Object(n.useCallback)(Object(u.a)(i.a.mark((function t(){var a;return i.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e._near.contract.get_trade_data();case 2:return a=t.sent,t.abrupt("return",{numPurchases:a.num_purchases,numUniqueCardsBought:a.num_unique_cards_bought,nearVolume:R(a.near_volume),appCommission:R(a.app_owner_profit),artDaoProfit:R(a.art_dao_profit),appOwnerId:a.app_owner_id,artDaoId:a.art_dao_id,totalVotes:a.total_votes});case 4:case"end":return t.stop()}}),t)}))),[e._near]);return Object(n.useEffect)((function(){e.connected&&p().then((function(e){s(e),m(!1)}))}),[e.connected,p]),r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row"},d?r.a.createElement("div",{className:"col"},r.a.createElement("div",{className:"d-flex justify-content-center"},r.a.createElement("div",{className:"spinner-grow",role:"status"},r.a.createElement("span",{className:"visually-hidden"},"Loading...")))):r.a.createElement("div",{className:"col col-12 col-lg-6 col-xl-6"},r.a.createElement("h3",null,"Global Stats"),r.a.createElement("p",null,r.a.createElement("ul",null,r.a.createElement("li",null,"Total votes: ",c.totalVotes),r.a.createElement("li",null,"Total purchases: ",c.numPurchases),r.a.createElement("li",null,"Total unique purchases: ",c.numUniqueCardsBought),r.a.createElement("li",null,"Total volume: ",c.nearVolume.toFixed(2)," NEAR"),r.a.createElement("li",null,"Total Art DAO profit: ",c.artDaoProfit.toFixed(2)," NEAR"),r.a.createElement("li",null,"Art DAO account ID: ",r.a.createElement("a",{href:"https://explorer.near.org/accounts/".concat(c.artDaoId)},"@",c.artDaoId)),r.a.createElement("li",null,"Total App commission: ",c.appCommission.toFixed(2)," NEAR"))))))},M="berry.cards"===window.location.hostname,W=M?{networkId:"mainnet",nodeUrl:"https://rpc.mainnet.near.org",archivalNodeUrl:"https://rpc.mainnet.internal.near.org",contractName:"cards.berryclub.ek.near",walletUrl:"https://wallet.near.org"}:{networkId:"testnet",nodeUrl:"https://rpc.testnet.near.org",archivalNodeUrl:"https://rpc.testnet.internal.near.org",contractName:"dev-1614645337488-5371259",walletUrl:"https://wallet.testnet.near.org"},z=function(e){return{requests:e.requests,numCards:e.num_cards,purchaseVolume:R(e.purchase_volume),numPurchases:e.num_purchases,saleProfit:R(e.sale_profit),numSales:e.num_sales,numVotes:e.num_votes}},Y=function(e){Object(p.a)(a,e);var t=Object(f.a)(a);function a(e){var n;return Object(d.a)(this,a),(n=t.call(this,e))._near={},n._near.lsKey=W.contractName+":v01:",n._near.lsKeyRecentCards=n._near.lsKey+"recentCards",n.state={connected:!1,isNavCollapsed:!0,account:null,requests:null,recentCards:B.a.get(n._near.lsKeyRecentCards)||[]},n._initNear().then((function(){n.setState({signedIn:!!n._near.accountId,signedAccountId:n._near.accountId,connected:!0})})),n}return Object(m.a)(a,[{key:"_initNear",value:function(){var e=Object(u.a)(i.a.mark((function e(){var t,a,n,r=this;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=new b.keyStores.BrowserLocalStorageKeyStore,e.next=3,b.connect(Object.assign({deps:{keyStore:t}},W));case 3:if(a=e.sent,this._near.keyStore=t,this._near.near=a,this._near.walletConnection=new b.WalletConnection(a,W.contractName),this._near.accountId=this._near.walletConnection.getAccountId(),this._near.account=this._near.walletConnection.account(),this._near.contract=new b.Contract(this._near.account,W.contractName,{viewMethods:["get_account","get_accounts","get_num_cards","get_top","get_rating","get_trade_data","get_card_info","get_account_cards"],changeMethods:["register_account","vote","buy_card"]}),this._near.accounts={},this._near.getAccount=function(e){return e in r._near.accounts?r._near.accounts[e]:r._near.accounts[e]=Promise.resolve(Object(u.a)(i.a.mark((function t(){var a,n;return i.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,r._near.contract.get_account({account_id:e});case 2:return a=t.sent,(n=a?z(a):null)&&(n.fetchCards=function(){if(n.cardFetching)return n.cardFetching;for(var t=[],a=0;a<n.numCards;a+=50)t.push(r._near.contract.get_account_cards({account_id:e,from_index:a,limit:50}));return n.cardFetching=Promise.resolve(Object(u.a)(i.a.mark((function e(){return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Promise.all(t);case 2:return e.abrupt("return",e.sent.flat());case 3:case"end":return e.stop()}}),e)})))())}),t.abrupt("return",n);case 6:case"end":return t.stop()}}),t)})))())},!this._near.accountId){e.next=24;break}return e.next=15,this._near.getAccount(this._near.accountId);case 15:if(null!==(n=e.sent)){e.next=23;break}return e.next=19,this._near.contract.register_account();case 19:return delete this._near.accounts[this._near.accountId],e.next=22,this._near.getAccount(this._near.accountId);case 22:n=e.sent;case 23:this.setState({account:n,requests:n.requests});case 24:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"requestSignIn",value:function(){var e=Object(u.a)(i.a.mark((function e(t){return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),"Berry Cards",e.next=4,this._near.walletConnection.requestSignIn(W.contractName,"Berry Cards");case 4:return e.abrupt("return",!1);case 5:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"logOut",value:function(){var e=Object(u.a)(i.a.mark((function e(){return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:this._near.walletConnection.signOut(),this._near.accountId=null,this.setState({signedIn:!!this._accountId,signedAccountId:this._accountId});case 3:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"popRequest",value:function(e){var t=this.state.requests.slice(1);this.setState({requests:t},e)}},{key:"addRequest",value:function(e,t){var a=this.state.requests.slice(0);a.push(e),this.setState({requests:a},t)}},{key:"addRecentCard",value:function(e){var t=this.state.recentCards.slice(0),a=t.indexOf(e);-1!==a&&t.splice(a,1),t.unshift(e),t=t.slice(0,5),B.a.set(this._near.lsKeyRecentCards,t),this.setState({recentCards:t})}},{key:"render",value:function(){var e=this,t=Object(l.a)({_near:this._near,updateState:function(t,a){return e.setState(t,a)},popRequest:function(t){return e.popRequest(t)},addRequest:function(t,a){return e.addRequest(t,a)},addRecentCard:function(t){return e.addRecentCard(t)}},this.state),a=this.state.connected?this.state.signedIn?r.a.createElement("div",null,r.a.createElement("button",{className:"btn btn-outline-secondary",onClick:function(){return e.logOut()}},"Sign out (",this.state.signedAccountId,")")):r.a.createElement("div",null,r.a.createElement("button",{className:"btn btn-primary",onClick:function(t){return e.requestSignIn(t)}},"Sign in with NEAR Wallet")):r.a.createElement("div",null,"Connecting... ",r.a.createElement("span",{className:"spinner-grow spinner-grow-sm",role:"status","aria-hidden":"true"}));return r.a.createElement("div",{className:"App"},r.a.createElement(C.a,{basename:""},r.a.createElement("nav",{className:"navbar navbar-expand-lg navbar-light bg-light mb-3"},r.a.createElement("div",{className:"container-fluid"},r.a.createElement(C.b,{className:"navbar-brand",to:"/",title:"NEAR.fm"},r.a.createElement("img",{src:E.a,alt:"Berry Cards",className:"d-inline-block align-middle"}),"[BETA] Berry Cards"),r.a.createElement("button",{className:"navbar-toggler",type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation"},r.a.createElement("span",{className:"navbar-toggler-icon"})),r.a.createElement("div",{className:"collapse navbar-collapse",id:"navbarSupportedContent"},r.a.createElement("ul",{className:"navbar-nav me-auto mb-2 mb-lg-0"},r.a.createElement("li",{className:"nav-item"},r.a.createElement(C.b,{className:"nav-link","aria-current":"page",to:"/"},"Home")),this.state.signedIn&&r.a.createElement("li",{className:"nav-item"},r.a.createElement(C.b,{className:"nav-link","aria-current":"page",to:"/discover"},"Discover")),this.state.signedIn&&r.a.createElement("li",{className:"nav-item"},r.a.createElement(C.b,{className:"nav-link","aria-current":"page",to:"/a/".concat(this.state.signedAccountId)},"Profile")),r.a.createElement("li",{className:"nav-item"},r.a.createElement(C.b,{className:"nav-link","aria-current":"page",to:"/stats"},"Stats"))),r.a.createElement("form",{className:"d-flex"},a)))),r.a.createElement("a",{className:"github-fork-ribbon right-bottom fixed",href:"https://github.com/evgenykuzyakov/berry-hot","data-ribbon":"Fork me on GitHub",title:"Fork me on GitHub"},"Fork me on GitHub"),r.a.createElement(D.c,null,r.a.createElement(D.a,{exact:!0,path:"/"},this.state.signedIn?r.a.createElement(T,t):r.a.createElement(F,t)),r.a.createElement(D.a,{exact:!0,path:"/discover"},r.a.createElement(F,t)),r.a.createElement(D.a,{exact:!0,path:"/stats"},r.a.createElement(J,t)),r.a.createElement(D.a,{exact:!0,path:"/a/:accountId"},r.a.createElement(H,t)),r.a.createElement(D.a,{exact:!0,path:"/c/:cardId"},r.a.createElement(G,t)))))}}]),a}(r.a.Component);s.a.render(r.a.createElement(Y,null),document.getElementById("root"))},97:function(e,t,a){e.exports=a.p+"static/media/logo.272328f4.png"},98:function(e,t,a){e.exports=a.p+"static/media/tomato.9239fac3.png"},99:function(e,t,a){e.exports=a.p+"static/media/avocado.f0698336.gif"}},[[106,1,2]]]);
//# sourceMappingURL=main.46fe85f3.chunk.js.map