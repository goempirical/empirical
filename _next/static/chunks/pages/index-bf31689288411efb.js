(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{5301:function(e,t,i){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return i(2271)}])},1927:function(e,t,i){"use strict";var n=i(5893),a=i(6010);function r(e){var t=e.bgColors,i=e.className,r=e.classNames,o=e.text.split("\n");return(0,n.jsx)("div",{className:(0,a.Z)("flex flex-col w-full items-start",i),children:o.map((function(e,i){return(0,n.jsxs)("div",{className:"flex flex-col relative items-start w-auto -mt-4",children:[(0,n.jsx)("div",{className:"block absolute h-2/6 bottom-1/6 left-0 w-full ".concat(null===t||void 0===t?void 0:t[i])}),(0,n.jsx)("span",{className:(0,a.Z)("font-display uppercase font-bold relative opacity-20 w-auto whitespace-nowrap",(null===r||void 0===r?void 0:r.textPart)||"lg:text-9xl text-8xl"),children:e})]},e)}))})}r.defaultProps={bgColors:["bg-primary","bg-brand-yellow","bg-brand-red"]},t.Z=r},7137:function(e,t,i){"use strict";var n=i(5893),a=i(9944),r=i(6010);function o(e){var t=e.className,i=e.content,o=e.title;return(0,n.jsxs)("div",{className:(0,r.Z)("flex flex-col justify-center px-8 sm:px-12 pt-4 relative gap-4","before:bg-primary before:h-full before:absolute before:w-1 before:rounded-sm before:left-0",t),children:[(0,n.jsx)(a.Z,{variation:"h4",children:o}),(0,n.jsx)(a.Z,{variation:"p",className:"max-w-sm opacity-70",children:i})]})}o.defaultProps={className:""},t.Z=o},3848:function(e,t,i){"use strict";var n=i(5893),a=i(6010),r=i(2167),o=i(9944);t.Z=function(e){var t=e.className,i=e.content,s=e.icon,l=e.renderIcon,c=e.title,m=r.P[s||"Bridge"];return(0,n.jsxs)("div",{className:(0,a.Z)("flex flex-col items-center gap-5",t),children:[(0,n.jsx)("div",{className:"flex items-center justify-center text-primary border-primary p-2 border rounded-full h-20 w-20",children:(null===l||void 0===l?void 0:l())||(0,n.jsx)(m,{className:"h-7 w-7"})}),(0,n.jsxs)("div",{className:"flex flex-col items-center gap-2",children:[(0,n.jsx)(o.Z,{variation:"h4",className:"text-center",children:c}),(0,n.jsx)(o.Z,{variation:"p",className:"opacity-70 text-center",children:i})]})]})}},2271:function(e,t,i){"use strict";i.r(t),i.d(t,{default:function(){return k}});var n=i(5893),a=i(5675),r=i(7452),o=i(1423),s=i(7250),l=i(8654),c=i(9944),m=i(6010);var d=function(e){var t=e.author,i=e.className,a=e.quote;return(0,n.jsxs)("div",{className:(0,m.Z)("flex flex-col px-5 gap-10",i),children:[(0,n.jsx)(c.Z,{variation:"quote",className:"text-center max-w-3xl",children:a}),(0,n.jsxs)("div",{className:"flex flex-col gap-1 items-center",children:[(0,n.jsx)("div",{className:"h-[1px] w-32 bg-white bg-opacity-20 mb-4"}),(0,n.jsx)(c.Z,{variation:"span",className:"text-base text-center font-bold",children:t.name}),(0,n.jsx)(c.Z,{variation:"span",className:"text-xs text-center",children:t.company})]})]})},u=i(3872),h=i(7294),p=i(5585),A=i(2167);function f(e,t){(null==t||t>e.length)&&(t=e.length);for(var i=0,n=new Array(t);i<t;i++)n[i]=e[i];return n}function g(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var i=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=i){var n,a,r=[],o=!0,s=!1;try{for(i=i.call(e);!(o=(n=i.next()).done)&&(r.push(n.value),!t||r.length!==t);o=!0);}catch(l){s=!0,a=l}finally{try{o||null==i.return||i.return()}finally{if(s)throw a}}return r}}(e,t)||function(e,t){if(!e)return;if("string"===typeof e)return f(e,t);var i=Object.prototype.toString.call(e).slice(8,-1);"Object"===i&&e.constructor&&(i=e.constructor.name);if("Map"===i||"Set"===i)return Array.from(i);if("Arguments"===i||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(i))return f(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}var x=function(e){var t=e.className,i=e.children,a=g((0,p.Z)({loop:!0}),2),r=a[0],o=a[1];return(0,n.jsxs)("div",{className:(0,m.Z)("relative flex items-center w-full overflow-hidden",t),ref:r,children:[(0,n.jsx)("div",{className:"flex w-full",children:h.Children.map(i,(function(e){return(0,n.jsx)("div",{className:"flex items-center justify-center flex-grow-0 flex-shrink-0 basis-full relative",children:e})}))}),(0,n.jsxs)("div",{className:"flex w-full absolute justify-between md:-translate-y-10 bottom-0 md:bottom-auto px-4",children:[(0,n.jsx)("button",{type:"button",onClick:function(){null===o||void 0===o||o.scrollPrev()},className:"flex items-center justify-center rounded-full border border-primary h-10 w-10 text-primary",children:(0,n.jsx)(A.P.Chevron,{className:"rotate-180"})}),(0,n.jsx)("button",{type:"button",onClick:function(){null===o||void 0===o||o.scrollNext()},className:"flex items-center justify-center rounded-full border border-primary h-10 w-10 text-primary",children:(0,n.jsx)(A.P.Chevron,{})})]})]})},b=i(1927),v=i(7137),y=i(3848),w=i(5293),j={title:"Empirical",description:"",socialMediaImage:""},N={hero:{title:"A *new kind* of product development partner",content:"We are product development experts passionate about helping established companies to build successful software/tech products. We provide technical and product leadership coupled with high perform[...]"},ourClients:{title:"Our clients",items:[{highlight:"Bring \ninnovative \nsolutions",title:"Who you are",content:"You are a stablished technology company, that have a proven business model, but you\u2019re still defining product direction and making high level technical decisions. You are in the process of building a core development team and looking to establish strong software engineering practices. You are open to expanding your capacity as a service so you can leverage..."},{highlight:"Partner with \nexperienced\n professionals",title:"Your pains",content:"Your product backlog is ever growing and you can\u2019t release features and fix issues quickly enough. Your roadmap needs further definition, both from a product and technical perspective. You realize that you need more product development capacity but at the same time need to establish a solid foundation of software engineering practices. You are frustrated with the amount of effort and time it takes to hire..."}]},approach:{title:"Approach",items:[{title:"Empathize and understand",content:"We seek first to understand your context, needs and goals. Lorem ipsum dolor sit amet."},{title:"Support",content:"We meet regularly with you and the team to provide support and continuous career [...]"},{title:"Strategic",content:"We seek first to understand your context, needs and goals. Lorem ipsum dolor sit amet."},{title:"Collaborative",content:"We get to work and take a collaborative approach lorem ipsum dolor sit amet."},{title:"Best path",content:"We take a product development perspective to determine the best path. Lorem ipsum dolor."},{title:"Empirical Fit \xae",content:"Each one vetted through a rigorous, proprietary process with the 6 Empirical Fit\xae dimensions."}]},benefits:{title:"The benefits",items:[{highlight:"Peace\n of\n mind",content:"That you have partnered with a company that provides high performing, resilient and motivated teams, who are always ready to deliver quality and results.\n\n        That you increased your product development capacity efficiently (less time, less effort, better fit). That your product development needs are being handled by professionals that care about your product.\n\n        That we provide continuous support, we are in it for the long run and are committed to make it work! Lorem ipsum dolor sit amet consectetur adipisicng sed aliqua lorem ipsum dolor consectetur."}]},workingWithUs:{title:"Working with us",items:[{icon:"Star",title:"Experts",content:"We are product development experts with over 15 years of experience."},{icon:"Globe",title:"Nearshore",content:"We are nearshore, remote first experts lorem ipsum dolor sti amet aliqua."},{icon:"Handshake",title:"Solid relationships",content:"We establish solid, long standing relationships with a select pool [...]"},{icon:"Bridge",title:"Bridge",content:"We have been the bridge between U.S. companies and talent in Latinamerica."},{icon:"Translate",title:"Multicultural",content:"We are truly multicultural and multinational lorem ipsum dolor sit amet sed."},{icon:"Translate",title:"Multicultural",content:"We are truly multicultural and multinational lorem ipsum dolor sit amet sed."}]},testimonials:{title:"Testimonials",items:[{quote:"Strong team. Solid Results! This team has been essential to the success of SouthDoctors.",author:{name:"Mario Mireles",company:"South Doctors"}},{quote:"Lorem ipsum sit dolor amet sed loprericum content morbenim culpus aderam postem orderum.",author:{name:"Person 1",company:"Company 1"}},{quote:"Loprericum content morbenim culpus aderam postem orderum. Lorem ipsum sit dolor amet sed.",author:{name:"Person 2",company:"Company 2"}}]},clients:{items:[{logo:{src:"/_next/static/media/robolink.4bf59773.png",height:80,width:153,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAECAYAAACzzX7wAAAAUElEQVR42mMgCJhX/HJhWPHbw3jll6CWjZcjGZb+Fxdf8V2Ja+UPE8mV3yIZGFf80mNY8ctAesU3k6A1b/QZlv9QZVv+XQkobs6y8lcSQRsAAVIe8a2p5IQAAAAASUVORK5CYII="},title:"RoboLink"},{logo:{src:"/_next/static/media/smithsonian.2920f541.png",height:58,width:209,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAACCAQAAADPnVVmAAAAKklEQVR42mOYIzRHfo7SHNl5ih1ih+2OmjLMYZ8jAIRq8/R7lQ57HLUHANBtDIHLeeS0AAAAAElFTkSuQmCC"},title:"Smithsonian"},{logo:{src:"/_next/static/media/soloshot.a1733e88.png",height:37,width:143,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAACCAQAAADPnVVmAAAALElEQVR42mPYYXhE/7/GX8V/Kv80/+n8U2T4pPzB8L/GP/V/Kv80/mn+EwMALnkRufEnnhQAAAAASUVORK5CYII="},title:"Soloshot"},{logo:{src:"/_next/static/media/moment.61d963ee.png",height:40,width:111,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAADCAYAAACuyE5IAAAAZElEQVR4nGP8//8/19mz57ju3r3HExYW8uL379+cLCws/xgYGECYA6TA4PbtO0K3bt2W8vb2vPDnzx9uZmbm70BJRiD+BFLAsHjJUo7Xr15zFhcXvv/27RsbBwfHf6DkXyD+DwCBYi4pXt40GQAAAABJRU5ErkJggg=="},title:"Moment"},{logo:{src:"/_next/static/media/tracking_happiness.38391702.png",height:37,width:197,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAACCAYAAABllJ3tAAAARElEQVR4nBXKywmAQAwE0Ex2RxALsBj7r8MeRPwsyUS8P0ja3oodEBllPsg05N3hrev6wToqHoPAkc1jmmW+nA0HqfgAci4gDWAv6JcAAAAASUVORK5CYII="},title:"Tracking Happiness"},{logo:{src:"/_next/static/media/feedmob.61168f74.png",height:31,width:112,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAACCAYAAABllJ3tAAAAPUlEQVR4nBXKwQmAQBBD0UnYVmxB7L+NxYsIlqCniX8Pj4QQdfdRVS+CgSuJbGfOc1uHndEQLOkmP06D/vz9MBXLGNHyIwAAAABJRU5ErkJggg=="},title:"Feedmob"}]},letsTalk:{items:[{title:"Let's talk",link:{title:"Contact us",href:"https://google.com"}}]}};var k=function(){return(0,n.jsx)(l.Z,{config:j,children:(0,n.jsxs)(o.Z,{children:[(0,n.jsxs)(s.Z,{className:"py-20 md:py-40 px-4",children:[(0,n.jsx)(c.Z,{variation:"h1",className:"max-w-xl text-center",isMarkdown:!0,children:N.hero.title}),(0,n.jsx)(c.Z,{variation:"p",className:"max-w-xl text-center opacity-80",children:N.hero.content})]}),(0,n.jsx)(u.Z,{title:N.ourClients.title,children:N.ourClients.items.map((function(e){return(0,n.jsx)(w.Z,{className:"md:pr-8 md:max-w-none max-w-lg",title:e.title,highlight:e.highlight,content:e.content},e.title)}))}),(0,n.jsx)(u.Z,{title:N.approach.title,children:(0,n.jsx)("div",{className:"grid grid-cols-12 gap-y-7 gap-x-2 md:px-4 lg:px-16 w-full",children:N.approach.items.map((function(e){return(0,n.jsx)(v.Z,{className:"md:col-span-6 col-span-12 px-4",title:e.title,content:e.content},e.title)}))})}),(0,n.jsx)(u.Z,{title:N.benefits.title,children:N.benefits.items.map((function(e){return(0,n.jsx)(w.Z,{className:"md:pr-8 md:max-w-none max-w-lg",highlightComponent:(0,n.jsx)(b.Z,{className:"md:p-16 p-4",text:e.highlight}),content:e.content},null===e||void 0===e?void 0:e.content)}))}),(0,n.jsx)(u.Z,{title:N.workingWithUs.title,children:(0,n.jsx)("div",{className:"flex flex-wrap gap-x-16 gap-y-12 justify-center",children:N.workingWithUs.items.map((function(e){return(0,n.jsx)(y.Z,{className:"flex-1 md:basis-1/4 basis-1/2 max-w-sm",icon:e.icon,title:e.title,content:e.content},e.title)}))})}),(0,n.jsx)(u.Z,{title:N.testimonials.title,className:"md:mb-10",children:(0,n.jsx)(x,{children:N.testimonials.items.map((function(e){return(0,n.jsx)(d,{quote:e.quote,author:e.author},e.quote)}))})}),(0,n.jsx)(u.Z,{className:"bg-black bg-opacity-5 dark:bg-white dark:bg-opacity-5 hidden md:flex",children:(0,n.jsx)("div",{className:"flex items-center justify-center gap-10 flex-wrap",children:N.clients.items.map((function(e){return(0,n.jsx)(a.default,{className:"h-10 grayscale dark:brightness-100 dark:contrast-100 brightness-200 contrast-0 hover:grayscale-0 hover:brightness-100 hover:contrast-100 transition-all",src:e.logo,height:e.logo.height,width:e.logo.width,alt:e.title},e.logo.src)}))})}),(0,n.jsx)(u.Z,{children:(0,n.jsx)("div",{className:"flex items-center justify-center gap-10 flex-wrap py-5",children:N.letsTalk.items.map((function(e){return(0,n.jsx)(r.Z,{title:e.title,link:e.link},e.title)}))})})]})})}}},function(e){e.O(0,[291,585,693,774,888,179],(function(){return t=5301,e(e.s=t);var t}));var t=e.O();_N_E=t}]);