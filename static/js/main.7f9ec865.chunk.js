(this.webpackJsonperikgarfiaportfolio=this.webpackJsonperikgarfiaportfolio||[]).push([[0],{1:function(e){e.exports=JSON.parse('{"a":"Erik","c":"","b":"Garfia","g":"| Programmer | Web Developer | Software Developer | Engineer | Student ","k":[{"id":0,"image":"fa-github","url":"https://github.com/ErikGarfia/","style":"socialicons"},{"id":1,"image":"fa-facebook","url":"https://www.facebook.com/profile.php?id=100007104889288","style":"socialicons"},{"id":2,"image":"fa-instagram","url":"https://www.instagram.com/erik_ga_","style":"socialicons"},{"id":3,"image":"fa-linkedin","url":"https://www.linkedin.com/in/erik-garfia-acevedo-ipn","style":"socialicons"},{"id":4,"image":"fa-twitter","url":"https://twitter.com/GarfiaErik","style":"socialicons"}],"e":"About Me","r":true,"l":"https://www.instagram.com/","n":"erik_ga_","m":"/?__a=1","d":"I am a Computer Sytems Engineer. Currently, I study at ESCOM from IPN with experience in web development and software development. I am an interdisciplinary programmer working at the crossroads of technology. I love working with passionate and enthusiastic people, always trying to solve any kind of problem. I\'m passionate about learning techologies related with programming in general, cloud computing and machine learning","o":"My Recent Projects","h":"https://api.github.com/users/","j":"ErikGarfia","i":"/repos?sort=updated&direction=desc","p":4,"s":true,"q":false,"f":"My Certifications"}')},14:function(e,a,t){e.exports=t.p+"static/media/resume.ef61916b.pdf"},35:function(e,a,t){e.exports=t(66)},40:function(e,a,t){},44:function(e,a,t){},66:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),l=t(30),i=t.n(l),c=(t(40),t(11)),o=t(2),s=(t(41),t(42),t(44),t(1)),m=t(34),u=t(4),d=t(31),p=t.n(d),f=function(){var e=Object(n.useState)(new Array(s.k.length).fill("socialicons")),a=Object(u.a)(e,2),t=a[0],l=a[1],i=function(e){var a=Object(m.a)(t);return"enter"===e.event?(a[e.icon.id]="socialiconshover",l(a)):"leave"===e.event?(a[e.icon.id]="socialicons",l(a)):void 0};return r.a.createElement("div",null,r.a.createElement("div",{id:"home",className:"title jumbotron jumbotron-fluid bg-transparent bgstyle text-light min-vh-100 d-flex align-content-center align-items-center flex-wrap m-0"},r.a.createElement("div",{id:"stars"}),r.a.createElement("div",{className:"container container-fluid text-center "},r.a.createElement("h1",{className:"display-1"},s.a+" "+s.c+" "+s.b),r.a.createElement(p.a,{className:"lead"}," ",s.g),r.a.createElement("div",{className:"p-5"},s.k.map((function(e){return r.a.createElement("a",{key:e.id,target:"_blank",rel:"noopener noreferrer",href:e.url,"aria-label":"My ".concat(e.image.split("-")[1])},r.a.createElement("i",{className:"fab ".concat(e.image,"  fa-3x ").concat(t[e.id]),onMouseOver:function(){return i({icon:e,event:"enter"})},onMouseOut:function(){return i({icon:e,event:"leave"})}}))}))),r.a.createElement("a",{className:"btn btn-outline-light btn-lg",href:"#aboutme",role:"button","aria-label":"Learn more about me"},"About me"))))},g=t(10),b=t.n(g),E=t(14),h=t.n(E),v=function(){var e=Object(n.useState)(""),a=Object(u.a)(e,2),t=a[0],l=a[1],i=Object(n.useState)(s.r),c=Object(u.a)(i,2),o=c[0],m=c[1],d=Object(n.useState)(h.a),p=Object(u.a)(d,1)[0];Object(n.useEffect)((function(){o&&f()}),[o]);var f=function(e){b.a.get(s.l+s.n+s.m).then((function(e){return l(e.data.graphql.user.profile_pic_url_hd)})).catch((function(e){return m(!1),console.error(e.message)})).finally((function(){}))};return r.a.createElement("div",{id:"aboutme",className:"jumbotron jumbotron-fluid m-0"},r.a.createElement("div",{className:"container container-fluid p-5"},r.a.createElement("div",{className:"row"},o&&r.a.createElement("div",{className:"col-5 d-none d-lg-block align-self-center"},r.a.createElement("img",{className:"border-left-0 border-light rounded",src:t,alt:"profilepicture"})),r.a.createElement("div",{className:"col-lg-".concat(o?"7":"12")},r.a.createElement("h1",{className:"display-4 mb-5 text-center"},s.e),r.a.createElement("p",{className:"lead text-center"},s.d),p&&r.a.createElement("p",{className:"lead text-center"},r.a.createElement("a",{className:"btn btn-outline-info btn-lg",href:h.a,target:"_blank",rel:"noreferrer noopener",role:"button","aria-label":"Resume/CV"},"Resume"))))))},N=function(e){var a=e.value,t=Object(n.useState)([]),l=Object(u.a)(t,2),i=l[0],c=l[1],o=Object(n.useCallback)((function(e){b.a.get(a).then((function(e){return c(e.data)})).catch((function(e){return console.error(e.message)})).finally((function(){}))}),[a]);Object(n.useEffect)((function(){o()}),[o]);var s=[],m=0;for(var d in i)s.push(d),m+=i[d];return r.a.createElement("div",{className:"pb-3"},"Languages:"," ",s.map((function(e){return r.a.createElement("p",{key:e,className:"badge badge-light card-link"},e,": ",Math.trunc(i[e]/m*1e3)/10," %")})))},k=function(e){var a=e.value,t=Object(n.useState)("0 mints"),l=Object(u.a)(t,2),i=l[0],c=l[1],o=Object(n.useCallback)((function(e){var t=new Date(a.pushed_at),n=(new Date).getTime()-t.getTime(),r=Math.trunc(n/1e3/60/60);if(r<24)return c("".concat(r.toString()," hours ago"));var l=t.getDate(),i=t.getMonth(),o=t.getFullYear();return c("on ".concat(l," ").concat(["January","February","March","April","May","June","July","August","September","October","November","December"][i]," ").concat(o))}),[a.pushed_at]);Object(n.useEffect)((function(){o()}),[o]);var s=a.name,m=a.description,d=a.svn_url,p=a.stargazers_count,f=a.languages_url;return r.a.createElement("div",{className:"col-md-6"},r.a.createElement("div",{className:"card shadow p-3 mb-5 bg-white rounded"},r.a.createElement("div",{className:"card-body"},r.a.createElement("h5",{className:"card-title"},s," "),r.a.createElement("p",{className:"card-text"},m," "),r.a.createElement("a",{href:"".concat(d,"/archive/master.zip"),className:"btn btn-outline-info mr-3"},r.a.createElement("i",{className:"fab fa-github"})," Clone Project"),r.a.createElement("a",{href:d,target:" _blank",className:"btn btn-outline-danger"},r.a.createElement("i",{className:"fab fa-github"})," Repo"),r.a.createElement("hr",null),r.a.createElement(N,{value:f}),r.a.createElement("p",{className:"card-text"},r.a.createElement("span",{className:"text-dark card-link mr-4"},r.a.createElement("i",{className:"fab fa-github"})," Stars"," ",r.a.createElement("span",{className:"badge badge-warning"},p)),r.a.createElement("small",{className:"text-muted"},"Updated ",i)))))},w=function(){var e=Object(n.useState)([]),a=Object(u.a)(e,2),t=a[0],l=a[1],i=Object(n.useCallback)((function(e){b.a.get(s.h+s.j+s.i).then((function(e){return l(e.data.slice(0,s.p))})).catch((function(e){return console.error(e.message)})).finally((function(){}))}),[]);return Object(n.useEffect)((function(){i()}),[i]),r.a.createElement("div",{id:"projects",className:"jumbotron jumbotron-fluid bg-transparent m-0"},t.length&&r.a.createElement("div",{className:"container container-fluid p-5"},r.a.createElement("h1",{className:"display-4 pb-5"},s.o),r.a.createElement("div",{className:"row"},t.map((function(e){return r.a.createElement(k,{key:e.id,id:e.id,value:e})})))))},y=function(){var e=Object(n.useState)({backgroundColor:"#f5f5f5"}),a=Object(u.a)(e,1)[0];return r.a.createElement("footer",{style:a,className:"mt-auto py-3 text-center"}," ",r.a.createElement("a",{className:"badge badge-danger",rel:"noopener",href:"https://github.com/ErikGarfia","aria-label":"My GitHub"},"Erik Garfia Acevedo")," ")},j=function(e){var a=Object(n.useState)(!0),t=Object(u.a)(a,2),l=t[0],i=t[1];return Object(n.useEffect)((function(){document.addEventListener("scroll",(function(){var e=window.scrollY<200;e!==l&&i(e)}))}),[l]),r.a.createElement("nav",{className:"navbar navbar-expand-lg fixed-top navbar-light ".concat(l?"bg-transparent":"bg-gradient"," ")},r.a.createElement("a",{className:"navbar-brand",href:"/ErikGarfiaportfolio/#home"},"<".concat(s.a," />")),r.a.createElement("button",{className:"navbar-toggler",type:"button","data-toggle":"collapse","data-target":"#navbarTogglerDemo02","aria-controls":"navbarTogglerDemo02","aria-expanded":"false","aria-label":"Toggle navigation"},r.a.createElement("span",{className:"navbar-toggler-icon"})),r.a.createElement("div",{className:"collapse navbar-collapse",id:"navbarTogglerDemo02"},r.a.createElement("ul",{className:"navbar-nav mr-auto mt-2 mt-lg-0"},s.q&&r.a.createElement("li",{className:"nav-item"},r.a.createElement(c.b,{className:"nav-link lead",to:"/ErikGarfiaportfolio/blog"},"Blog")),r.a.createElement("li",{className:"nav-item"},r.a.createElement("a",{className:"nav-link lead",href:"/ErikGarfiaportfolio/#projects"},"Projects")),r.a.createElement("li",{className:"nav-item"},r.a.createElement("a",{className:"nav-link lead",href:h.a,target:"_blank",rel:"noreferrer noopener"},r.a.createElement("b",null,"Resume"))),r.a.createElement("li",{className:"nav-item"},r.a.createElement("a",{className:"nav-link lead",href:"/ErikGarfiaportfolio/#aboutme"},r.a.createElement("b",null,"About"))),r.a.createElement("li",{className:"nav-item"},r.a.createElement("a",{className:"nav-link lead",href:"/ErikGarfiaportfolio/#course"},r.a.createElement("b",null,"Certifications"))))))},O=t(33),x=function e(a){var t=this,l=a.title,i=a.image,c=a.description;Object(O.a)(this,e),this.list=[],this.addParagraph=function(e){return t.list.push(r.a.createElement("p",{key:t.list.length,className:"lead"},e)),t},this.addHeading=function(e){return t.list.push(r.a.createElement(n.Fragment,{key:t.list.length},r.a.createElement("h1",{className:""},e),r.a.createElement("hr",null))),t},this.getBlog=function(){return r.a.createElement("div",{className:"container-lg"},t.list)},this.title=l,this.image=i,this.description=c},q=[],_=new x({title:"My portfolio",image:"img",description:"Erik Garfia's Portfolio!"}).addHeading("Heading").addParagraph("Erik Garfia's Portfolio!").addParagraph("Erik Garfia's Portfolio!"),P=new x({title:"My Second Blog",image:"img",description:"Description Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure tempore aut neque consectetur voluptatem quam nihil, facere earum adipisci, animi beatae dicta maiores, ipsam delectus ab molestias dolorum aperiam? Sapiente?"}).addHeading("Heading").addParagraph("1st Paragraph Aspernatur vero reiciendis quas, autem sit culpa? Quibusdam, cupiditate voluptate a non nulla aliquid enim doloremque ullam, facilis quisquam similique hic omnis!").addParagraph("2nd Paragraph Consequuntur ad, temporibus quae obcaecati eum expedita pariatur aspernatur recusandae beatae iste soluta sunt blanditiis dolore ipsam quia laboriosam quas perspiciatis architecto?").addHeading("New Heading").addParagraph("1st Paragraph Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur vero reiciendis quas, autem sit culpa? Quibusdam, cupiditate voluptate a non nulla aliquid enim doloremque ullam, facilis quisquam similique hic omnis!").addParagraph("2nd Paragraph Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consequuntur ad, temporibus quae obcaecati eum expedita pariatur aspernatur recusandae beatae iste soluta sunt blanditiis dolore ipsam quia laboriosam quas perspiciatis architecto?");q.push(P),q.push(_);var M=q,D=function(e){return r.a.createElement("div",{className:"container-lg mt-5 bg-blue"},r.a.createElement("h1",{className:"text-center"},"Blogs"),M.map((function(e,a){return r.a.createElement(S,{key:a,title:e.title,description:e.description,index:a})})))},S=function(e){var a=e.index,t=e.title,n=(e.image,e.description);return r.a.createElement("div",{className:"m-5"},r.a.createElement("div",{className:""},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-4 col-lg-12"}),r.a.createElement("div",{className:"col-8 col-lg-12"},r.a.createElement("div",{className:""},r.a.createElement("h1",{className:""},t),r.a.createElement("p",{className:"lead"},n),r.a.createElement(c.b,{to:"".concat("/ErikGarfiaportfolio","blog/").concat(a)},"Read more..."," ")))),r.a.createElement("hr",null)))},C=function(e){var a=e.match.params.id,t=M[a];return r.a.createElement("div",{className:"container-lg mt-5"},t&&r.a.createElement("div",null,r.a.createElement("h1",{className:"display-2 text-center"},t.title),r.a.createElement("img",{className:"img-fluid mb-2",src:t.image,alt:t.title}),t.getBlog()),!t&&r.a.createElement("h1",{className:"display-1 text-center"},"404 - Page not found"))},G=function(){return r.a.createElement("div",{className:"col-md-6"},r.a.createElement("div",{className:"card shadow p-3 mb-5 bg-white rounded"},r.a.createElement("div",{className:"card-body"},r.a.createElement("h5",null,"Cloud Computing"),r.a.createElement("hr",null),r.a.createElement("p",{className:"card-text"},"Introduction to cloud computing, Basic learning about configuration, management and maintenance of tools used to implement cloud computing."),r.a.createElement("hr",null),r.a.createElement("a",{href:"https://drive.google.com/file/d/14RMnXu0LcYJW83l2wcNBMpCop2aeoHzK/view",target:" _blank",className:"btn btn-outline-secondary"},r.a.createElement("i",{class:"fa fa-file","aria-hidden":"true"})," Document"))))},I=function(){return r.a.createElement("div",{className:"col-md-6"},r.a.createElement("div",{className:"card shadow p-3 mb-5 bg-white rounded"},r.a.createElement("div",{className:"card-body"},r.a.createElement("h5",null,"Introduction to Web Development I, II by Google"),r.a.createElement("hr",null),r.a.createElement("p",{className:"card-text"},"Learning on the basis of web development made up of theoretical and practical units. Handling of basic topics such as CSS and HTML."),r.a.createElement("hr",null),r.a.createElement("a",{href:"https://drive.google.com/file/d/1-Dti3887nYIr5sX7mSyniANU5lfaiMwq/view",target:" _blank",className:"btn btn-outline-secondary"},r.a.createElement("i",{class:"fa fa-file","aria-hidden":"true"})," Document I"),"\xa0\xa0\xa0",r.a.createElement("a",{href:"https://drive.google.com/file/d/1hdcQFhE9mp-sJMoYs8sE6W5vTgeNOv_U/view",target:" _blank",className:"btn btn-outline-secondary"},r.a.createElement("i",{class:"fa fa-file","aria-hidden":"true"})," Document II"))))},L=function(){return r.a.createElement("div",{className:"col-md-6"},r.a.createElement("div",{className:"card shadow p-3 mb-5 bg-white rounded"},r.a.createElement("div",{className:"card-body"},r.a.createElement("h5",null,"Letter of recommendation Hackify"),r.a.createElement("hr",null),r.a.createElement("span",{className:"card-text"},"Participation in a virtual hackaton organized by Hackify to solve small problems within the areas of business administration, entertainment and personnel management."),r.a.createElement("hr",null),r.a.createElement("a",{href:"https://drive.google.com/file/d/1BMO_ujyOe9JoPv8gA-i6wGVizdJc-iNj/view",target:" _blank",className:"btn btn-outline-secondary"},r.a.createElement("i",{class:"fa fa-file","aria-hidden":"true"})," Document"))))},H=function(){return r.a.createElement("div",{className:"col-md-6"},r.a.createElement("div",{className:"card shadow p-3 mb-5 bg-white rounded"},r.a.createElement("div",{className:"card-body"},r.a.createElement("h5",null,"Certificate of participation Developer Land"),r.a.createElement("hr",null),r.a.createElement("span",{className:"card-text"},'Participation in the virtual event "Developer Land" organized by Talent Land where small talks were given about the technologies that are at the forefront of technology companies. '),r.a.createElement("hr",null),r.a.createElement("a",{href:"https://drive.google.com/file/d/1csaCZKIdNfb3u_N-GQ5fiJ3WhuL5312_/view",target:" _blank",className:"btn btn-outline-secondary"},r.a.createElement("i",{class:"fa fa-file","aria-hidden":"true"})," Document"))))},A=function(){return r.a.createElement("div",{className:"col-md-6"},r.a.createElement("div",{className:"card shadow p-3 mb-5 bg-white rounded"},r.a.createElement("div",{className:"card-body"},r.a.createElement("h5",null,"Certified in Websites Development and Mobile Apps"),r.a.createElement("hr",null),r.a.createElement("span",{className:"card-text"},'Training in website and mobile application development through the virtual platform "capacitate para el empleo" covering topics such as server administration, front-end and back-end development and database management.'),r.a.createElement("hr",null),r.a.createElement("a",{href:"https://drive.google.com/file/d/1snuplpg1mnqPzT3fUkKVDajUoqYcbXuM/view",target:" _blank",className:"btn btn-outline-secondary"},r.a.createElement("i",{class:"fa fa-file","aria-hidden":"true"})," Document"))))},J=function(){return r.a.createElement("div",{id:"course",className:"jumbotron jumbotron-fluid bg-transparent m-0"},r.a.createElement("div",{className:"container container-fluid p-5"},r.a.createElement("h1",{className:"display-4 pb-5"},s.f),r.a.createElement("div",{className:"row"},r.a.createElement(G,null),r.a.createElement(I,null),r.a.createElement(L,null),r.a.createElement(H,null),r.a.createElement(A,null))))},T=function(){return r.a.createElement(n.Fragment,null,r.a.createElement(f,null),r.a.createElement(v,null),r.a.createElement(w,null),r.a.createElement(J,null))},B=function(){return r.a.createElement(c.a,{basename:"/ErikGarfiaportfolio/"},s.s&&r.a.createElement(j,null),r.a.createElement(o.a,{path:"/",exact:!0,component:T}),s.q&&r.a.createElement(o.a,{path:"/blog",exact:!0,component:D}),s.q&&r.a.createElement(o.a,{path:"/blog/:id",component:C}),r.a.createElement(y,null))};i.a.render(r.a.createElement(B,null),document.getElementById("root"))}},[[35,1,2]]]);
//# sourceMappingURL=main.7f9ec865.chunk.js.map