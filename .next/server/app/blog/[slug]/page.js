(()=>{var e={};e.id=308,e.ids=[308],e.modules={7849:e=>{"use strict";e.exports=require("next/dist/client/components/action-async-storage.external")},2934:e=>{"use strict";e.exports=require("next/dist/client/components/action-async-storage.external.js")},5403:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external")},4580:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external.js")},4749:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external")},5869:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external.js")},399:e=>{"use strict";e.exports=require("next/dist/compiled/next-server/app-page.runtime.prod.js")},6628:(e,t,n)=>{"use strict";n.r(t),n.d(t,{GlobalError:()=>o.a,__next_app__:()=>p,originalPathname:()=>u,pages:()=>d,routeModule:()=>m,tree:()=>c});var r=n(482),i=n(9108),a=n(2563),o=n.n(a),s=n(8300),l={};for(let e in s)0>["default","tree","pages","GlobalError","originalPathname","__next_app__","routeModule"].indexOf(e)&&(l[e]=()=>s[e]);n.d(t,l);let c=["",{children:["blog",{children:["[slug]",{children:["__PAGE__",{},{page:[()=>Promise.resolve().then(n.bind(n,904)),"/Users/deeppatel/Documents/Demo/portfolio/src/app/blog/[slug]/page.tsx"]}]},{}]},{}]},{layout:[()=>Promise.resolve().then(n.bind(n,1342)),"/Users/deeppatel/Documents/Demo/portfolio/src/app/layout.tsx"],"not-found":[()=>Promise.resolve().then(n.bind(n,8206)),"/Users/deeppatel/Documents/Demo/portfolio/src/app/not-found.tsx"]}],d=["/Users/deeppatel/Documents/Demo/portfolio/src/app/blog/[slug]/page.tsx"],u="/blog/[slug]/page",p={require:n,loadChunk:()=>Promise.resolve()},m=new r.AppPageRouteModule({definition:{kind:i.x.APP_PAGE,page:"/blog/[slug]/page",pathname:"/blog/[slug]",bundlePath:"",filename:"",appPaths:[]},userland:{loaderTree:c}})},6303:(e,t,n)=>{Promise.resolve().then(n.t.bind(n,1476,23)),Promise.resolve().then(n.bind(n,2041)),Promise.resolve().then(n.bind(n,643))},1389:(e,t,n)=>{"use strict";n.d(t,{Z:()=>r});/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */let r=(0,n(9508).Z)("Clock",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["polyline",{points:"12 6 12 12 16 14",key:"68esgv"}]])},7505:(e,t,n)=>{"use strict";n.d(t,{Z:()=>r});/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */let r=(0,n(9508).Z)("Zap",[["polygon",{points:"13 2 3 14 12 14 11 22 21 10 12 10 13 2",key:"45s27k"}]])},4778:(e,t,n)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"bailoutToClientRendering",{enumerable:!0,get:function(){return a}});let r=n(4910),i=n(5869);function a(){let e=i.staticGenerationAsyncStorage.getStore();(null==e||!e.forceStatic)&&(null==e?void 0:e.isStaticGeneration)&&(0,r.throwWithNoSSR)()}("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},4552:(e,t,n)=>{"use strict";function r(e){}Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"clientHookInServerComponentError",{enumerable:!0,get:function(){return r}}),n(6783),n(2),("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},9738:(e,t,n)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var n in t)Object.defineProperty(e,n,{enumerable:!0,get:t[n]})}(t,{ReadonlyURLSearchParams:function(){return m},useSearchParams:function(){return f},usePathname:function(){return g},ServerInsertedHTMLContext:function(){return l.ServerInsertedHTMLContext},useServerInsertedHTML:function(){return l.useServerInsertedHTML},useRouter:function(){return h},useParams:function(){return x},useSelectedLayoutSegments:function(){return y},useSelectedLayoutSegment:function(){return b},redirect:function(){return c.redirect},permanentRedirect:function(){return c.permanentRedirect},RedirectType:function(){return c.RedirectType},notFound:function(){return d.notFound}});let r=n(2),i=n(8726),a=n(7210),o=n(4552),s=n(3092),l=n(545),c=n(8010),d=n(2100),u=Symbol("internal for urlsearchparams readonly");function p(){return Error("ReadonlyURLSearchParams cannot be modified")}class m{[Symbol.iterator](){return this[u][Symbol.iterator]()}append(){throw p()}delete(){throw p()}set(){throw p()}sort(){throw p()}constructor(e){this[u]=e,this.entries=e.entries.bind(e),this.forEach=e.forEach.bind(e),this.get=e.get.bind(e),this.getAll=e.getAll.bind(e),this.has=e.has.bind(e),this.keys=e.keys.bind(e),this.values=e.values.bind(e),this.toString=e.toString.bind(e),this.size=e.size}}function f(){(0,o.clientHookInServerComponentError)("useSearchParams");let e=(0,r.useContext)(a.SearchParamsContext),t=(0,r.useMemo)(()=>e?new m(e):null,[e]);{let{bailoutToClientRendering:e}=n(4778);e()}return t}function g(){return(0,o.clientHookInServerComponentError)("usePathname"),(0,r.useContext)(a.PathnameContext)}function h(){(0,o.clientHookInServerComponentError)("useRouter");let e=(0,r.useContext)(i.AppRouterContext);if(null===e)throw Error("invariant expected app router to be mounted");return e}function x(){(0,o.clientHookInServerComponentError)("useParams");let e=(0,r.useContext)(i.GlobalLayoutRouterContext),t=(0,r.useContext)(a.PathParamsContext);return(0,r.useMemo)(()=>(null==e?void 0:e.tree)?function e(t,n){for(let r of(void 0===n&&(n={}),Object.values(t[1]))){let t=r[0],i=Array.isArray(t),a=i?t[1]:t;!a||a.startsWith("__PAGE__")||(i&&("c"===t[2]||"oc"===t[2])?n[t[0]]=t[1].split("/"):i&&(n[t[0]]=t[1]),n=e(r,n))}return n}(e.tree):t,[null==e?void 0:e.tree,t])}function y(e){void 0===e&&(e="children"),(0,o.clientHookInServerComponentError)("useSelectedLayoutSegments");let{tree:t}=(0,r.useContext)(i.LayoutRouterContext);return function e(t,n,r,i){let a;if(void 0===r&&(r=!0),void 0===i&&(i=[]),r)a=t[1][n];else{var o;let e=t[1];a=null!=(o=e.children)?o:Object.values(e)[0]}if(!a)return i;let l=a[0],c=(0,s.getSegmentValue)(l);return!c||c.startsWith("__PAGE__")?i:(i.push(c),e(a,n,!1,i))}(t,e)}function b(e){void 0===e&&(e="children"),(0,o.clientHookInServerComponentError)("useSelectedLayoutSegment");let t=y(e);return 0===t.length?null:t[0]}("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},2100:(e,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var n in t)Object.defineProperty(e,n,{enumerable:!0,get:t[n]})}(t,{notFound:function(){return r},isNotFoundError:function(){return i}});let n="NEXT_NOT_FOUND";function r(){let e=Error(n);throw e.digest=n,e}function i(e){return(null==e?void 0:e.digest)===n}("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},5858:(e,t)=>{"use strict";var n;Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"RedirectStatusCode",{enumerable:!0,get:function(){return n}}),function(e){e[e.SeeOther=303]="SeeOther",e[e.TemporaryRedirect=307]="TemporaryRedirect",e[e.PermanentRedirect=308]="PermanentRedirect"}(n||(n={})),("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},8010:(e,t,n)=>{"use strict";var r;Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var n in t)Object.defineProperty(e,n,{enumerable:!0,get:t[n]})}(t,{RedirectType:function(){return r},getRedirectError:function(){return l},redirect:function(){return c},permanentRedirect:function(){return d},isRedirectError:function(){return u},getURLFromRedirectError:function(){return p},getRedirectTypeFromError:function(){return m},getRedirectStatusCodeFromError:function(){return f}});let i=n(4580),a=n(2934),o=n(5858),s="NEXT_REDIRECT";function l(e,t,n){void 0===n&&(n=o.RedirectStatusCode.TemporaryRedirect);let r=Error(s);r.digest=s+";"+t+";"+e+";"+n+";";let a=i.requestAsyncStorage.getStore();return a&&(r.mutableCookies=a.mutableCookies),r}function c(e,t){void 0===t&&(t="replace");let n=a.actionAsyncStorage.getStore();throw l(e,t,(null==n?void 0:n.isAction)?o.RedirectStatusCode.SeeOther:o.RedirectStatusCode.TemporaryRedirect)}function d(e,t){void 0===t&&(t="replace");let n=a.actionAsyncStorage.getStore();throw l(e,t,(null==n?void 0:n.isAction)?o.RedirectStatusCode.SeeOther:o.RedirectStatusCode.PermanentRedirect)}function u(e){if("string"!=typeof(null==e?void 0:e.digest))return!1;let[t,n,r,i]=e.digest.split(";",4),a=Number(i);return t===s&&("replace"===n||"push"===n)&&"string"==typeof r&&!isNaN(a)&&a in o.RedirectStatusCode}function p(e){return u(e)?e.digest.split(";",3)[2]:null}function m(e){if(!u(e))throw Error("Not a redirect error");return e.digest.split(";",2)[1]}function f(e){if(!u(e))throw Error("Not a redirect error");return Number(e.digest.split(";",4)[3])}(function(e){e.push="push",e.replace="replace"})(r||(r={})),("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},3092:(e,t)=>{"use strict";function n(e){return Array.isArray(e)?e[1]:e}Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"getSegmentValue",{enumerable:!0,get:function(){return n}}),("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},8726:(e,t,n)=>{"use strict";e.exports=n(482).vendored.contexts.AppRouterContext},7210:(e,t,n)=>{"use strict";e.exports=n(482).vendored.contexts.HooksClientContext},545:(e,t,n)=>{"use strict";e.exports=n(482).vendored.contexts.ServerInsertedHtml},4910:(e,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var n in t)Object.defineProperty(e,n,{enumerable:!0,get:t[n]})}(t,{NEXT_DYNAMIC_NO_SSR_CODE:function(){return n},throwWithNoSSR:function(){return r}});let n="NEXT_DYNAMIC_NO_SSR_CODE";function r(){let e=Error(n);throw e.digest=n,e}},4551:(e,t,n)=>{e.exports=n(9738)},904:(e,t,n)=>{"use strict";n.r(t),n.d(t,{default:()=>v,generateMetadata:()=>b,generateStaticParams:()=>y});var r=n(5036),i=n(4551),a=n(646),o=n.n(a),s=n(9508);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */let l=(0,s.Z)("ArrowLeft",[["path",{d:"m12 19-7-7 7-7",key:"1l729n"}],["path",{d:"M19 12H5",key:"x3x0zl"}]]),c=(0,s.Z)("User",[["path",{d:"M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2",key:"975kel"}],["circle",{cx:"12",cy:"7",r:"4",key:"17ys0d"}]]);var d=n(146),u=n(1389),p=n(7505),m=n(923),f=n(291),g=n(5402),h=n(3841),x=n(5454);async function y(){return(0,f.u3)().map(e=>({slug:e.slug}))}async function b({params:e}){let t=(0,f.zl)(e.slug);return t?{title:`${t.title} - Deep Patel Blog`,description:t.excerpt}:{title:"Post Not Found"}}function v({params:e}){let t=(0,f.zl)(e.slug);t||(0,i.notFound)();let n=(0,f.EE)(e.slug);return(0,r.jsxs)(x.ZP,{children:[r.jsx(g.ZP,{}),(0,r.jsxs)("main",{className:"pt-20",children:[(0,r.jsxs)("article",{children:[(0,r.jsxs)("header",{className:"section-padding morphing-bg relative overflow-hidden",children:[(0,r.jsxs)("div",{className:"absolute inset-0",children:[r.jsx("div",{className:"absolute top-20 right-20 w-96 h-96 bg-cyan-400/5 rounded-full blur-3xl"}),r.jsx("div",{className:"absolute bottom-20 left-20 w-96 h-96 bg-purple-400/5 rounded-full blur-3xl"})]}),(0,r.jsxs)("div",{className:"container-max relative z-10",children:[(0,r.jsxs)(o(),{href:"/blog",className:"inline-flex items-center text-cyan-400 hover:text-cyan-300 mb-12 font-semibold text-lg transition-all duration-300 transform hover:translate-x-2",children:[r.jsx(l,{size:20,className:"mr-3"}),"Back to Blog"]}),(0,r.jsxs)("div",{className:"max-w-4xl",children:[(0,r.jsxs)("div",{className:"flex flex-wrap items-center gap-6 text-lg text-white/70 mb-8",children:[(0,r.jsxs)("div",{className:"flex items-center",children:[r.jsx(c,{size:18,className:"mr-3 text-cyan-400"}),r.jsx("span",{children:t.author.name})]}),(0,r.jsxs)("div",{className:"flex items-center",children:[r.jsx(d.Z,{size:18,className:"mr-3 text-purple-400"}),r.jsx("span",{children:new Date(t.date).toLocaleDateString()})]}),(0,r.jsxs)("div",{className:"flex items-center",children:[r.jsx(u.Z,{size:18,className:"mr-3 text-blue-400"}),r.jsx("span",{children:t.readTime})]})]}),r.jsx("h1",{className:"text-5xl md:text-7xl font-black text-white mb-8 leading-tight",children:t.title}),r.jsx("p",{className:"text-2xl text-white/90 mb-10 leading-relaxed font-light",children:t.excerpt}),r.jsx("div",{className:"flex flex-wrap gap-4",children:t.tags.map((e,t)=>(0,r.jsxs)("span",{className:"inline-flex items-center px-6 py-3 bg-cyan-500/5 text-cyan-300 text-lg rounded-full border border-cyan-500/15",children:[r.jsx(p.Z,{size:16,className:"mr-2"}),e]},t))})]})]})]}),r.jsx("section",{className:"section-padding bg-gradient-to-b from-gray-900 to-black",children:r.jsx("div",{className:"container-max",children:r.jsx("div",{className:"max-w-4xl mx-auto",children:r.jsx("div",{className:"glass-strong p-10 prose prose-lg prose-invert max-w-none border border-white/5",children:t.content.split("\n").map((e,t)=>e.startsWith("# ")?r.jsx("h1",{className:"text-4xl font-black text-white mb-6 mt-8 leading-tight",children:e.slice(2)},t):e.startsWith("## ")?r.jsx("h2",{className:"text-3xl font-bold text-cyan-300 mb-4 mt-8 leading-tight",children:e.slice(3)},t):e.startsWith("### ")?r.jsx("h3",{className:"text-2xl font-bold text-purple-300 mb-3 mt-6 leading-tight",children:e.slice(4)},t):e.startsWith("- ")?r.jsx("li",{className:"text-white/90 mb-2 text-lg leading-relaxed ml-4",children:e.slice(2)},t):e.startsWith("```")?null:""===e.trim()?r.jsx("div",{className:"h-4"},t):e.startsWith("**")&&e.endsWith("**")?r.jsx("p",{className:"text-cyan-300 font-bold mb-4 text-lg leading-relaxed",children:e.slice(2,-2)},t):r.jsx("p",{className:"text-white/90 mb-4 leading-relaxed text-lg",children:e},t))})})})})]}),n.length>0&&r.jsx("section",{className:"section-padding bg-black",children:(0,r.jsxs)("div",{className:"container-max",children:[(0,r.jsxs)("div",{className:"text-center mb-16",children:[r.jsx("div",{className:"flex justify-center mb-6",children:r.jsx("div",{className:"glass-strong p-4 rounded-full border border-white/5",children:r.jsx(m.Z,{className:"w-8 h-8 text-cyan-400"})})}),(0,r.jsxs)("h2",{className:"text-4xl font-black text-white mb-4",children:["Related ",r.jsx("span",{className:"gradient-text",children:"Posts"})]})]}),r.jsx("div",{className:"grid md:grid-cols-3 gap-8",children:n.map(e=>(0,r.jsxs)("article",{className:"glass-strong p-8 card-hover group border border-white/5",children:[(0,r.jsxs)("div",{className:"flex items-center text-sm text-white/60 mb-4",children:[r.jsx(d.Z,{size:14,className:"mr-2 text-cyan-400"}),r.jsx("span",{children:new Date(e.date).toLocaleDateString()})]}),r.jsx("h3",{className:"text-xl font-bold text-white mb-4 group-hover:text-cyan-300 transition-colors duration-300",children:r.jsx(o(),{href:`/blog/${e.slug}`,className:"hover:underline",children:e.title})}),r.jsx("p",{className:"text-white/80 text-sm mb-6 leading-relaxed group-hover:text-white/95 transition-colors duration-300",children:e.excerpt}),r.jsx(o(),{href:`/blog/${e.slug}`,className:"text-cyan-400 hover:text-cyan-300 font-semibold text-sm group-hover:translate-x-2 transition-all duration-300",children:"Read More →"})]},e.slug))})]})})]}),r.jsx(h.Z,{})]})}},291:(e,t,n)=>{"use strict";n.d(t,{EE:()=>o,u3:()=>i,zl:()=>a});let r=[{slug:"building-scalable-react-applications",title:"Building Scalable React Applications",excerpt:"Learn the best practices for structuring and scaling React applications for production environments.",content:`
# Building Scalable React Applications

When building React applications that need to scale, there are several key principles and patterns that can help ensure your codebase remains maintainable and performant as it grows.

## Component Architecture

The foundation of a scalable React application lies in its component architecture. Here are some key principles:

### 1. Single Responsibility Principle
Each component should have a single, well-defined responsibility. This makes components easier to test, debug, and reuse.

### 2. Composition over Inheritance
React favors composition over inheritance. Build complex UIs by composing smaller, focused components.

### 3. Container and Presentational Components
Separate your components into two categories:
- **Container Components**: Handle logic and state management
- **Presentational Components**: Focus purely on rendering UI

## State Management

As your application grows, managing state becomes increasingly important:

### Local State vs Global State
- Use local state for component-specific data
- Use global state (Context API, Redux, Zustand) for shared application state

### State Normalization
Normalize your state structure to avoid deeply nested objects and make updates more efficient.

## Performance Optimization

### Code Splitting
Use React.lazy() and Suspense to split your code and load components on demand.

### Memoization
Use React.memo, useMemo, and useCallback to prevent unnecessary re-renders.

## Testing Strategy

A scalable application needs a comprehensive testing strategy:

### Unit Tests
Test individual components and functions in isolation.

### Integration Tests
Test how different parts of your application work together.

### End-to-End Tests
Test complete user workflows to ensure everything works as expected.

## Conclusion

Building scalable React applications requires careful planning and adherence to best practices. By following these principles, you can create applications that are maintainable, performant, and ready to grow with your needs.
    `,date:"2024-01-15",readTime:"5 min read",tags:["React","JavaScript","Architecture","Best Practices"],author:{name:"Deep Patel",avatar:"/api/placeholder/40/40"}},{slug:"modern-css-techniques-tailwind",title:"Modern CSS Techniques with Tailwind",excerpt:"Explore advanced CSS techniques and how Tailwind CSS can streamline your development workflow.",content:`
# Modern CSS Techniques with Tailwind

Tailwind CSS has revolutionized how we approach styling in modern web development. Let's explore some advanced techniques and best practices.

## Utility-First Approach

Tailwind's utility-first approach offers several advantages:

### Rapid Development
Build interfaces quickly by composing utilities directly in your markup.

### Consistent Design System
Tailwind provides a consistent set of design tokens out of the box.

### Responsive Design
Built-in responsive utilities make it easy to create adaptive layouts.

## Advanced Techniques

### Custom Properties with Tailwind
Combine CSS custom properties with Tailwind for dynamic theming.

### Component Extraction
When you find yourself repeating utility combinations, extract them into components.

### Animation and Transitions
Create smooth animations with Tailwind's transition utilities.

## Performance Considerations

### Purging Unused CSS
Tailwind automatically removes unused styles in production, keeping your CSS bundle small.

### JIT Mode
Just-In-Time mode generates styles on-demand, providing better performance and unlimited customization.

## Conclusion

Tailwind CSS provides a powerful foundation for modern web styling. By mastering these techniques, you can build beautiful, maintainable interfaces efficiently.
    `,date:"2024-01-10",readTime:"7 min read",tags:["CSS","Tailwind","Design","Frontend"],author:{name:"Deep Patel",avatar:"/api/placeholder/40/40"}},{slug:"nextjs-14-whats-new",title:"Next.js 14: What's New and Exciting",excerpt:"A comprehensive overview of the latest features and improvements in Next.js 14.",content:`
# Next.js 14: What's New and Exciting

Next.js 14 brings significant improvements to performance, developer experience, and new features that make building React applications even better.

## Key Features

### Turbopack (Beta)
Next.js 14 includes Turbopack in beta, offering:
- 53% faster local server startup
- 94% faster code updates with Fast Refresh

### Server Actions (Stable)
Server Actions are now stable, providing a seamless way to handle server-side logic.

### Partial Prerendering (Preview)
A new rendering model that combines static and dynamic rendering.

## Performance Improvements

### Metadata API Enhancements
Improved metadata handling for better SEO.

### Image Optimization
Enhanced image optimization with better performance and smaller bundle sizes.

## Developer Experience

### Improved Error Messages
More helpful error messages and better debugging experience.

### Enhanced TypeScript Support
Better type inference and improved IntelliSense support.

## Migration Guide

Upgrading to Next.js 14 is straightforward:

1. Update your dependencies
2. Update your configuration if needed
3. Test your application thoroughly

## Conclusion

Next.js 14 represents a significant step forward in React framework development. The combination of performance improvements, new features, and enhanced developer experience makes it an excellent choice for modern web applications.
    `,date:"2024-01-05",readTime:"6 min read",tags:["Next.js","React","Web Development","Performance"],author:{name:"Deep Patel",avatar:"/api/placeholder/40/40"}},{slug:"typescript-advanced-patterns",title:"Advanced TypeScript Patterns for Better Code",excerpt:"Discover advanced TypeScript patterns and techniques that will make your code more robust and maintainable.",content:`
# Advanced TypeScript Patterns for Better Code

TypeScript offers powerful features that go beyond basic type annotations. Let's explore advanced patterns that can significantly improve your code quality.

## Generic Constraints

Generic constraints allow you to limit the types that can be used with generics, providing better type safety and IntelliSense.

### Keyof Constraints
Use keyof to constrain generics to object keys.

### Conditional Types
Create types that change based on conditions.

## Utility Types

TypeScript provides built-in utility types that can transform existing types:

### Partial and Required
Make all properties optional or required.

### Pick and Omit
Select or exclude specific properties from types.

### Record and Mapped Types
Create new types by mapping over existing ones.

## Advanced Function Types

### Function Overloads
Define multiple function signatures for different use cases.

### Higher-Order Function Types
Type functions that accept or return other functions.

## Template Literal Types

Create types from string templates for better string manipulation.

## Discriminated Unions

Use discriminated unions for type-safe state management and API responses.

## Best Practices

### Type Guards
Implement custom type guards for runtime type checking.

### Assertion Functions
Create functions that assert types and narrow them.

### Module Augmentation
Extend existing types from third-party libraries.

## Conclusion

Mastering these advanced TypeScript patterns will help you write more robust, maintainable, and type-safe code. Start incorporating these techniques into your projects today.
    `,date:"2023-12-28",readTime:"8 min read",tags:["TypeScript","JavaScript","Programming","Best Practices"],author:{name:"Deep Patel",avatar:"/api/placeholder/40/40"}},{slug:"web-performance-optimization-guide",title:"Complete Guide to Web Performance Optimization",excerpt:"Learn essential techniques to optimize your web applications for speed, user experience, and search engine rankings.",content:`
# Complete Guide to Web Performance Optimization

Web performance is crucial for user experience, SEO, and business success. This comprehensive guide covers essential optimization techniques.

## Core Web Vitals

Google's Core Web Vitals are key metrics for measuring user experience:

### Largest Contentful Paint (LCP)
Measures loading performance. Aim for LCP to occur within 2.5 seconds.

### First Input Delay (FID)
Measures interactivity. FID should be less than 100 milliseconds.

### Cumulative Layout Shift (CLS)
Measures visual stability. Maintain a CLS score of less than 0.1.

## Image Optimization

### Modern Image Formats
Use WebP, AVIF, or JPEG XL for better compression.

### Responsive Images
Implement srcset and sizes attributes for different screen sizes.

### Lazy Loading
Load images only when they're about to enter the viewport.

## Code Optimization

### Bundle Splitting
Split your JavaScript bundles to reduce initial load time.

### Tree Shaking
Eliminate dead code from your bundles.

### Minification and Compression
Minify CSS, JavaScript, and HTML. Enable Gzip or Brotli compression.

## Caching Strategies

### Browser Caching
Set appropriate cache headers for static assets.

### Service Workers
Implement service workers for offline functionality and caching.

### CDN Usage
Use Content Delivery Networks to serve assets from locations closer to users.

## Database and API Optimization

### Query Optimization
Optimize database queries and use proper indexing.

### API Response Caching
Implement caching at the API level to reduce server load.

### Pagination and Lazy Loading
Implement pagination for large datasets.

## Monitoring and Measurement

### Performance Monitoring Tools
Use tools like Lighthouse, WebPageTest, and real user monitoring.

### Continuous Performance Testing
Integrate performance testing into your CI/CD pipeline.

## Conclusion

Web performance optimization is an ongoing process. Regular monitoring, testing, and optimization ensure your applications provide the best possible user experience.
    `,date:"2023-12-20",readTime:"10 min read",tags:["Performance","Web Development","Optimization","SEO"],author:{name:"Deep Patel",avatar:"/api/placeholder/40/40"}}];function i(){return r.sort((e,t)=>new Date(t.date).getTime()-new Date(e.date).getTime())}function a(e){return r.find(t=>t.slug===e)}function o(e,t=3){return r.filter(t=>t.slug!==e).slice(0,t)}},6783:(e,t,n)=>{"use strict";function r(e){return e&&e.__esModule?e:{default:e}}n.r(t),n.d(t,{_:()=>r,_interop_require_default:()=>r})}};var t=require("../../../webpack-runtime.js");t.C(e);var n=e=>t(t.s=e),r=t.X(0,[638,607,132,322],()=>n(6628));module.exports=r})();