exports.id=417,exports.ids=[417],exports.modules={82401:(e,t,r)=>{Promise.resolve().then(r.t.bind(r,12994,23)),Promise.resolve().then(r.t.bind(r,96114,23)),Promise.resolve().then(r.t.bind(r,9727,23)),Promise.resolve().then(r.t.bind(r,79671,23)),Promise.resolve().then(r.t.bind(r,41868,23)),Promise.resolve().then(r.t.bind(r,84759,23))},13425:(e,t,r)=>{Promise.resolve().then(r.t.bind(r,92481,23)),Promise.resolve().then(r.t.bind(r,79404,23)),Promise.resolve().then(r.bind(r,38464))},5164:()=>{},38538:(e,t,r)=>{Promise.resolve().then(r.bind(r,83846))},35303:()=>{},38464:(e,t,r)=>{"use strict";r.d(t,{default:()=>u});var a=r(10326),s=r(41135),o=r(90434),n=r(35047),i=r(60982),c=r(8885),l=r(8566);let d=[{name:"Home",href:"/dashboard",icon:i.Z},{name:"Invoices",href:"/dashboard/invoices",icon:c.Z},{name:"Customers",href:"/dashboard/customers",icon:l.Z}];function u(){let e=(0,n.usePathname)();return a.jsx(a.Fragment,{children:d.map(t=>{let r=t.icon;return(0,a.jsxs)(o.default,{href:t.href,className:(0,s.Z)("flex h-[48px] grow items-center justify-center gap-2 rounded-md bg-gray-800  text-amber-400 p-3 text-sm font-medium hover:bg-sky-100 hover:text-slate-900 md:flex-none md:justify-start md:p-2 md:px-3",{"bg-sky-100 text-slate-900":e===t.href}),children:[a.jsx(r,{className:"w-6"}),a.jsx("p",{className:"hidden md:block",children:t.name})]},t.name)})})}},83846:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>s});var a=r(10326);function s(){return a.jsx("html",{children:a.jsx("body",{children:a.jsx("h1",{children:"not-found"})})})}},15143:(e,t,r)=>{"use strict";r.d(t,{zB:()=>u,w7:()=>m});var a=r(67096),s=r.n(a),o=r(46591),n=r(80772),i=r(7410),c=r(79665);async function l(e){try{return(await (0,c.i6)`SELECT * FROM users WHERE email=${e}`).rows[0]}catch(e){throw console.error("Failed to fetch user:",e),Error("Failed to fetch user.")}}let{auth:d,signIn:u,signOut:m}=(0,o.ZP)({pages:{signIn:"/login"},callbacks:{authorized({auth:e,request:{nextUrl:t}}){let r=!!e?.user;return t.pathname.startsWith("/dashboard")?!!r:!r||Response.redirect(new URL("/dashboard",t))}},providers:[],providers:[(0,n.Z)({async authorize(e){let t=i.z.object({email:i.z.string().email(),password:i.z.string().min(6)}).safeParse(e);if(t.success){let{email:e,password:r}=t.data,a=await l(e);if(!a)return null;if(await s().compare(r,a.password))return a}return console.log("Invalid credentials"),null}})]})},35957:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>o});var a=r(19510),s=r(17464);function o({children:e}){return(0,a.jsxs)("div",{className:"flex h-screen flex-col md:flex-row md:overflow-hidden ",children:[a.jsx("div",{className:"w-full flex-none md:w-64 ",children:a.jsx(s.default,{})}),a.jsx("div",{className:"flex-grow p-6 md:overflow-y-auto md:p-12 bg-slate-950 ",children:e})]})}},55949:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>i,metadata:()=>n});var a=r(19510);r(94593);var s=r(47294),o=r.n(s);let n={title:{template:"%s | Departamento",default:"Departamento Mar del Plata"},description:"Alquilar departamento en Mar del Plata | Departamento Mar del Plata | departamentomardelplata.com",metadataBase:new URL("https:/departamentomardelplata.com")};function i({children:e,params:{locale:t}}){return a.jsx("html",{lang:t,children:a.jsx("body",{className:`${o().className} antialiased`,children:e})})}},25765:(e,t,r)=>{"use strict";r.d(t,{BX:()=>m,D1:()=>u,NI:()=>i,V_:()=>d,qu:()=>c,t2:()=>n,x4:()=>l});var a=r(57708),s=r(79665),o=r(79020);async function n(){(0,a.unstable_noStore)();try{console.log("Fetching revenue data..."),await new Promise(e=>setTimeout(e,3e3));let e=await (0,s.i6)`SELECT * FROM revenue`;return console.log("Data fetch completed after 3 seconds."),e.rows}catch(e){throw console.error("Database Error:",e),Error("Failed to fetch revenue data.")}}async function i(){(0,a.unstable_noStore)();try{return console.log("Fetching revenue data..."),await new Promise(e=>setTimeout(e,3e3)),(await (0,s.i6)`
      SELECT invoices.amount, customers.name, customers.image_url, customers.email, invoices.id
      FROM invoices
      JOIN customers ON invoices.customer_id = customers.id
      ORDER BY invoices.date DESC
      LIMIT 5`).rows.map(e=>({...e,amount:(0,o.xG)(e.amount)}))}catch(e){throw console.error("Database Error:",e),Error("Failed to fetch the latest invoices.")}}async function c(){(0,a.unstable_noStore)();try{let e=(0,s.i6)`SELECT COUNT(*) FROM invoices`,t=(0,s.i6)`SELECT COUNT(*) FROM customers`,r=(0,s.i6)`SELECT
         SUM(CASE WHEN status = 'paid' THEN amount ELSE 0 END) AS "paid",
         SUM(CASE WHEN status = 'pending' THEN amount ELSE 0 END) AS "pending"
         FROM invoices`,a=await Promise.all([e,t,r]),n=Number(a[0].rows[0].count??"0"),i=Number(a[1].rows[0].count??"0"),c=(0,o.xG)(a[2].rows[0].paid??"0"),l=(0,o.xG)(a[2].rows[0].pending??"0");return{numberOfCustomers:i,numberOfInvoices:n,totalPaidInvoices:c,totalPendingInvoices:l}}catch(e){throw console.error("Database Error:",e),Error("Failed to fetch card data.")}}async function l(e,t){(0,a.unstable_noStore)();try{return(await (0,s.i6)`
      SELECT
        invoices.id,
        invoices.amount,
        invoices.date,
        invoices.status,
        customers.name,
        customers.email,
        customers.image_url
      FROM invoices
      JOIN customers ON invoices.customer_id = customers.id
      WHERE
        customers.name ILIKE ${`%${e}%`} OR
        customers.email ILIKE ${`%${e}%`} OR
        invoices.amount::text ILIKE ${`%${e}%`} OR
        invoices.date::text ILIKE ${`%${e}%`} OR
        invoices.status ILIKE ${`%${e}%`}
      ORDER BY invoices.date DESC
      LIMIT ${6} OFFSET ${(t-1)*6}
    `).rows}catch(e){throw console.error("Database Error:",e),Error("Failed to fetch invoices.")}}async function d(e){(0,a.unstable_noStore)();try{let t=await (0,s.i6)`SELECT COUNT(*)
    FROM invoices
    JOIN customers ON invoices.customer_id = customers.id
    WHERE
      customers.name ILIKE ${`%${e}%`} OR
      customers.email ILIKE ${`%${e}%`} OR
      invoices.amount::text ILIKE ${`%${e}%`} OR
      invoices.date::text ILIKE ${`%${e}%`} OR
      invoices.status ILIKE ${`%${e}%`}
  `;return Math.ceil(Number(t.rows[0].count)/6)}catch(e){throw console.error("Database Error:",e),Error("Failed to fetch total number of invoices.")}}async function u(e){(0,a.unstable_noStore)();try{let t=(await (0,s.i6)`
      SELECT
        invoices.id,
        invoices.customer_id,
        invoices.amount,
        invoices.status
      FROM invoices
      WHERE invoices.id = ${e};
    `).rows.map(e=>({...e,amount:e.amount/100}));return console.log(t),t[0]}catch(e){throw console.error("Database Error:",e),Error("Failed to fetch invoice.")}}async function m(){(0,a.unstable_noStore)();try{return(await (0,s.i6)`
      SELECT
        id,
        name
      FROM customers
      ORDER BY name ASC
    `).rows}catch(e){throw console.error("Database Error:",e),Error("Failed to fetch all customers.")}}},79020:(e,t,r)=>{"use strict";r.d(t,{p9:()=>s,tk:()=>o,xG:()=>a});let a=e=>(e/100).toLocaleString("en-US",{style:"currency",currency:"USD"}),s=(e,t="en-US")=>{let r=new Date(e);return new Intl.DateTimeFormat(t,{day:"numeric",month:"short",year:"numeric"}).format(r)},o=e=>{let t=[],r=1e3*Math.ceil(Math.max(...e.map(e=>e.revenue))/1e3);for(let e=r;e>=0;e-=1e3)t.push(`$${e/1e3}K`);return{yAxisLabels:t,topLabel:r}}},17464:(e,t,r)=>{"use strict";r.r(t),r.d(t,{$$ACTION_0:()=>x,default:()=>f});var a=r(19510),s=r(24330);r(60166);var o=r(15143),n=r(57371),i=r(68570);let c=(0,i.createProxy)(String.raw`/home/doriass/Público/next-course/departamentomardelplata/src/app/[locale]/ui/dashboard/nav-links.tsx`),{__esModule:l,$$typeof:d}=c;c.default;let u=(0,i.createProxy)(String.raw`/home/doriass/Público/next-course/departamentomardelplata/src/app/[locale]/ui/dashboard/nav-links.tsx#default`);var m=r(98769),h=r(77898);function f(){return(0,a.jsxs)("div",{className:"flex h-full flex-col px-3 py-4 md:px-2 bg-gray-900 ",children:[a.jsx(n.default,{className:"mb-2 flex h-20 items-end justify-start rounded-md bg-gray-900 p-4 md:h-40 hover:bg-slate-950",href:"/",children:a.jsx("div",{className:"w-32 md:w-40",children:a.jsx(m.Z,{})})}),(0,a.jsxs)("div",{className:"flex grow flex-row justify-between space-x-2 md:flex-col md:space-x-0 md:space-y-2",children:[a.jsx(u,{}),a.jsx("div",{className:"hidden h-auto w-full grow rounded-md bg-gray-900 md:block "}),a.jsx("form",{action:(0,s.j)("1520c86d09313beb646e4d4fe6189b9bbaec6a49",x),children:(0,a.jsxs)("button",{className:"peer flex h-[48px] w-full grow items-center justify-center gap-2 rounded-md bg-red-900 text-slater-950 p-3 text-sm font-medium hover:bg-red-600 hover:text-gray-900 md:flex-none md:justify-start md:p-2 md:px-3",children:[a.jsx(h.Z,{className:"w-6 text-slater-950"}),a.jsx("div",{className:"hidden md:block",children:"Sign Out"})]})})]})]})}async function x(){await (0,o.w7)()}},98769:(e,t,r)=>{"use strict";r.d(t,{Z:()=>i});var a=r(19510),s=r(17710),o=r(33455),n=r.n(o);function i(){return(0,a.jsxs)("div",{className:`${n().className} flex flex-row items-center leading-none text-white`,children:[a.jsx(s.default,{src:"favicon.ico",width:30,height:30,className:" md:block",alt:"FlagAR"}),a.jsx("p",{className:"text-[44px] text-sky-100 hover:text-amber-500 shado focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-600 ",children:"MdP"})]})}},32029:(e,t,r)=>{"use strict";function a({children:e}){return e}r.r(t),r.d(t,{default:()=>a})},12523:(e,t,r)=>{"use strict";r.r(t),r.d(t,{$$typeof:()=>n,__esModule:()=>o,default:()=>i});var a=r(68570);let s=(0,a.createProxy)(String.raw`/home/doriass/Público/next-course/departamentomardelplata/src/app/not-found.tsx`),{__esModule:o,$$typeof:n}=s;s.default;let i=(0,a.createProxy)(String.raw`/home/doriass/Público/next-course/departamentomardelplata/src/app/not-found.tsx#default`)},94593:()=>{}};