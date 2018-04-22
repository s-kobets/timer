webpackJsonp([5],{"./app/containers/FeaturePage/index.js":function(e,a,t){"use strict";function n(e,a){if(!(e instanceof a))throw new TypeError("Cannot call a class as a function")}function r(e,a){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!a||"object"!=typeof a&&"function"!=typeof a?e:a}function i(e,a){if("function"!=typeof a&&null!==a)throw new TypeError("Super expression must either be null or a function, not "+typeof a);e.prototype=Object.create(a&&a.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),a&&(Object.setPrototypeOf?Object.setPrototypeOf(e,a):e.__proto__=a)}Object.defineProperty(a,"__esModule",{value:!0});var o=t("./node_modules/react/react.js"),s=t.n(o),l=t("./node_modules/react-helmet/lib/Helmet.js"),d=t("./node_modules/react-intl/lib/index.es.js"),c=t("./app/components/H1/index.js"),u=Object(d.e)({header:{id:"boilerplate.containers.FeaturePage.header",defaultMessage:"Features"},scaffoldingHeader:{id:"boilerplate.containers.FeaturePage.scaffolding.header",defaultMessage:"Quick scaffolding"},scaffoldingMessage:{id:"boilerplate.containers.FeaturePage.scaffolding.message",defaultMessage:"Automate the creation of components, containers, routes, selectors\n  and sagas - and their tests - right from the CLI!"},feedbackHeader:{id:"boilerplate.containers.FeaturePage.feedback.header",defaultMessage:"Instant feedback"},feedbackMessage:{id:"boilerplate.containers.FeaturePage.feedback.message",defaultMessage:"\n      Enjoy the best DX and code your app at the speed of thought! Your\n    saved changes to the CSS and JS are reflected instantaneously\n    without refreshing the page. Preserve application state even when\n    you update something in the underlying code!\n    "},stateManagementHeader:{id:"boilerplate.containers.FeaturePage.state_management.header",defaultMessage:"Predictable state management"},stateManagementMessages:{id:"boilerplate.containers.FeaturePage.state_management.message",defaultMessage:"\n      Unidirectional data flow allows for change logging and time travel\n    debugging.\n    "},javascriptHeader:{id:"boilerplate.containers.FeaturePage.javascript.header",defaultMessage:"Next generation JavaScript"},javascriptMessage:{id:"boilerplate.containers.FeaturePage.javascript.message",defaultMessage:"Use template strings, object destructuring, arrow functions, JSX\n    syntax and more, today."},cssHeader:{id:"boilerplate.containers.FeaturePage.css.header",defaultMessage:"Features"},cssMessage:{id:"boilerplate.containers.FeaturePage.css.message",defaultMessage:"Next generation CSS"},routingHeader:{id:"boilerplate.containers.FeaturePage.routing.header",defaultMessage:"Industry-standard routing"},routingMessage:{id:"boilerplate.containers.FeaturePage.routing.message",defaultMessage:"\n      Write composable CSS that's co-located with your components for\n    complete modularity. Unique generated class names keep the\n    specificity low while eliminating style clashes. Ship only the\n    styles that are on the page for the best performance.\n    "},networkHeader:{id:"boilerplate.containers.FeaturePage.network.header",defaultMessage:"Offline-first"},networkMessage:{id:"boilerplate.containers.FeaturePage.network.message",defaultMessage:"\n      The next frontier in performant web apps: availability without a\n      network connection from the instant your users load the app.\n    "},intlHeader:{id:"boilerplate.containers.FeaturePage.internationalization.header",defaultMessage:"Complete i18n Standard Internationalization & Pluralization"},intlMessage:{id:"boilerplate.containers.FeaturePage.internationalization.message",defaultMessage:"Scalable apps need to support multiple languages, easily add and support multiple languages with `react-intl`."}}),g=t("./node_modules/styled-components/dist/styled-components.es.js"),f=g.c.ul.withConfig({displayName:"List__List"})(["font-family: Georgia, Times, 'Times New Roman', serif;padding-left: 1.75em;"]),p=f,m=g.c.li.withConfig({displayName:"ListItem__ListItem"})(["margin: 1em 0;"]),h=m,b=g.c.p.withConfig({displayName:"ListItemTitle__ListItemTitle"})(["font-weight: bold;"]),y=b,v=function(){var e="function"==typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103;return function(a,t,n,r){var i=a&&a.defaultProps,o=arguments.length-3;if(t||0===o||(t={}),t&&i)for(var s in i)void 0===t[s]&&(t[s]=i[s]);else t||(t=i||{});if(1===o)t.children=r;else if(o>1){for(var l=Array(o),d=0;d<o;d++)l[d]=arguments[d+3];t.children=l}return{$$typeof:e,type:a,key:void 0===n?null:""+n,ref:null,props:t,_owner:null}}}(),w=function(){function e(e,a){for(var t=0;t<a.length;t++){var n=a[t];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(a,t,n){return t&&e(a.prototype,t),n&&e(a,n),a}}(),M=v(l.Helmet,{},void 0,v("title",{},void 0,"Feature Page"),v("meta",{name:"description",content:"Feature page of React.js Boilerplate application"})),P=function(e){function a(){return n(this,a),r(this,(a.__proto__||Object.getPrototypeOf(a)).apply(this,arguments))}return i(a,e),w(a,[{key:"shouldComponentUpdate",value:function(){return!1}},{key:"render",value:function(){return v("div",{},void 0,M,v(c.a,{},void 0,s.a.createElement(d.a,u.header)),v(p,{},void 0,v(h,{},void 0,v(y,{},void 0,s.a.createElement(d.a,u.scaffoldingHeader)),v("p",{},void 0,s.a.createElement(d.a,u.scaffoldingMessage))),v(h,{},void 0,v(y,{},void 0,s.a.createElement(d.a,u.feedbackHeader)),v("p",{},void 0,s.a.createElement(d.a,u.feedbackMessage))),v(h,{},void 0,v(y,{},void 0,s.a.createElement(d.a,u.routingHeader)),v("p",{},void 0,s.a.createElement(d.a,u.routingMessage))),v(h,{},void 0,v(y,{},void 0,s.a.createElement(d.a,u.networkHeader)),v("p",{},void 0,s.a.createElement(d.a,u.networkMessage))),v(h,{},void 0,v(y,{},void 0,s.a.createElement(d.a,u.intlHeader)),v("p",{},void 0,s.a.createElement(d.a,u.intlMessage)))))}}]),a}(s.a.Component);a.default=P}});