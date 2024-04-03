exports.id=74,exports.ids=[74],exports.modules={90645:(e,t,r)=>{Promise.resolve().then(r.bind(r,7799)),Promise.resolve().then(r.t.bind(r,67490,23))},22821:()=>{},37446:(e,t,r)=>{Promise.resolve().then(r.t.bind(r,53579,23)),Promise.resolve().then(r.t.bind(r,30619,23)),Promise.resolve().then(r.t.bind(r,81459,23)),Promise.resolve().then(r.t.bind(r,13456,23)),Promise.resolve().then(r.t.bind(r,50847,23)),Promise.resolve().then(r.t.bind(r,57303,23))},7799:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>m});var s=r(53854),o=r(29395),a=r(75548),n=r.n(a),i=r(51018),c=r(27121),l=r(3774),d=r(2769);let u=[{name:"Home",href:"/dashboard",icon:c.Z},{name:"Invoices",href:"/dashboard/invoices",icon:l.Z},{name:"Customers",href:"/dashboard/customers",icon:d.Z}];function m(){let e=(0,i.usePathname)();return s.jsx(s.Fragment,{children:u.map(t=>{let r=t.icon;return(0,s.jsxs)(n(),{href:t.href,className:(0,o.Z)("flex h-[48px] grow items-center justify-center gap-2 rounded-md bg-gray-50 p-3 text-sm font-medium hover:bg-sky-100 hover:text-blue-600 md:flex-none md:justify-start md:p-2 md:px-3",{"bg-sky-100 text-blue-600":e===t.href}),children:[s.jsx(r,{className:"w-6"}),s.jsx("p",{className:"hidden md:block",children:t.name})]},t.name)})})}},20834:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>a});var s=r(4656),o=r(41191);function a({children:e}){return(0,s.jsxs)("div",{className:"flex h-screen flex-col md:flex-row md:overflow-hidden",children:[s.jsx("div",{className:"w-full flex-none md:w-64",children:s.jsx(o.default,{})}),s.jsx("div",{className:"flex-grow p-6 md:overflow-y-auto md:p-12",children:e})]})}},7502:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>n});var s=r(4656);r(36824);var o=r(93891),a=r.n(o);function n({children:e}){return s.jsx("html",{lang:"en",children:s.jsx("body",{className:`${a().className} antialiased`,children:e})})}},75794:(e,t,r)=>{"use strict";r.d(t,{BX:()=>m,D1:()=>u,NI:()=>i,V_:()=>d,qu:()=>c,t2:()=>n,x4:()=>l});var s=r(61726),o=r(7590),a=r(38179);async function n(){(0,s.unstable_noStore)();try{console.log("Fetching revenue data..."),await new Promise(e=>setTimeout(e,3e3));let e=await o.i6`SELECT * FROM revenue`;return console.log("Data fetch completed after 3 seconds."),e.rows}catch(e){throw console.error("Database Error:",e),Error("Failed to fetch revenue data.")}}async function i(){(0,s.unstable_noStore)();try{console.log("Fetching revenue data..."),await new Promise(e=>setTimeout(e,3e3));let e=await o.i6`
      SELECT invoices.amount, customers.name, customers.image_url, customers.email, invoices.id
      FROM invoices
      JOIN customers ON invoices.customer_id = customers.id
      ORDER BY invoices.date DESC
      LIMIT 5`,t=e.rows.map(e=>({...e,amount:(0,a.xG)(e.amount)}));return t}catch(e){throw console.error("Database Error:",e),Error("Failed to fetch the latest invoices.")}}async function c(){(0,s.unstable_noStore)();try{let e=o.i6`SELECT COUNT(*) FROM invoices`,t=o.i6`SELECT COUNT(*) FROM customers`,r=o.i6`SELECT
         SUM(CASE WHEN status = 'paid' THEN amount ELSE 0 END) AS "paid",
         SUM(CASE WHEN status = 'pending' THEN amount ELSE 0 END) AS "pending"
         FROM invoices`,s=await Promise.all([e,t,r]),n=Number(s[0].rows[0].count??"0"),i=Number(s[1].rows[0].count??"0"),c=(0,a.xG)(s[2].rows[0].paid??"0"),l=(0,a.xG)(s[2].rows[0].pending??"0");return{numberOfCustomers:i,numberOfInvoices:n,totalPaidInvoices:c,totalPendingInvoices:l}}catch(e){throw console.error("Database Error:",e),Error("Failed to fetch card data.")}}async function l(e,t){(0,s.unstable_noStore)();try{let r=await o.i6`
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
    `;return r.rows}catch(e){throw console.error("Database Error:",e),Error("Failed to fetch invoices.")}}async function d(e){(0,s.unstable_noStore)();try{let t=await o.i6`SELECT COUNT(*)
    FROM invoices
    JOIN customers ON invoices.customer_id = customers.id
    WHERE
      customers.name ILIKE ${`%${e}%`} OR
      customers.email ILIKE ${`%${e}%`} OR
      invoices.amount::text ILIKE ${`%${e}%`} OR
      invoices.date::text ILIKE ${`%${e}%`} OR
      invoices.status ILIKE ${`%${e}%`}
  `,r=Math.ceil(Number(t.rows[0].count)/6);return r}catch(e){throw console.error("Database Error:",e),Error("Failed to fetch total number of invoices.")}}async function u(e){(0,s.unstable_noStore)();try{let t=await o.i6`
      SELECT
        invoices.id,
        invoices.customer_id,
        invoices.amount,
        invoices.status
      FROM invoices
      WHERE invoices.id = ${e};
    `,r=t.rows.map(e=>({...e,amount:e.amount/100}));return console.log(r),r[0]}catch(e){throw console.error("Database Error:",e),Error("Failed to fetch invoice.")}}async function m(){(0,s.unstable_noStore)();try{let e=await o.i6`
      SELECT
        id,
        name
      FROM customers
      ORDER BY name ASC
    `,t=e.rows;return t}catch(e){throw console.error("Database Error:",e),Error("Failed to fetch all customers.")}}},38179:(e,t,r)=>{"use strict";r.d(t,{p9:()=>o,tk:()=>a,xG:()=>s});let s=e=>(e/100).toLocaleString("en-US",{style:"currency",currency:"USD"}),o=(e,t="en-US")=>{let r=new Date(e),s=new Intl.DateTimeFormat(t,{day:"numeric",month:"short",year:"numeric"});return s.format(r)},a=e=>{let t=[],r=Math.max(...e.map(e=>e.revenue)),s=1e3*Math.ceil(r/1e3);for(let e=s;e>=0;e-=1e3)t.push(`$${e/1e3}K`);return{yAxisLabels:t,topLabel:s}}},41191:(e,t,r)=>{"use strict";r.r(t),r.d(t,{$$ACTION_1:()=>E,default:()=>x});var s,o=r(4656),a=r(34600);r(99195);var n=r(10736),i=r(24353),c=r.n(i),l=r(95153);let d=(0,l.createProxy)(String.raw`/home/doriass/Público/next-course/nextjs-esthetic/app/[locale]/ui/dashboard/nav-links.tsx`),{__esModule:u,$$typeof:m}=d,h=d.default;var f=r(46712),v=r(42727);function x(){return(0,o.jsxs)("div",{className:"flex h-full flex-col px-3 py-4 md:px-2",children:[o.jsx(c(),{className:"mb-2 flex h-20 items-end justify-start rounded-md bg-blue-600 p-4 md:h-40",href:"/",children:o.jsx("div",{className:"w-32 text-white md:w-40",children:o.jsx(f.Z,{})})}),(0,o.jsxs)("div",{className:"flex grow flex-row justify-between space-x-2 md:flex-col md:space-x-0 md:space-y-2",children:[o.jsx(h,{}),o.jsx("div",{className:"hidden h-auto w-full grow rounded-md bg-gray-50 md:block"}),o.jsx("form",{action:(s=async(...e)=>E.apply(null,(s.$$bound||[]).concat(e)),(0,a.U)("763e777e550d45ca320ba8d0199a2ba213804ef1",null,s,E),s),children:(0,o.jsxs)("button",{className:"flex h-[48px] w-full grow items-center justify-center gap-2 rounded-md bg-gray-50 p-3 text-sm font-medium hover:bg-sky-100 hover:text-blue-600 md:flex-none md:justify-start md:p-2 md:px-3",children:[o.jsx(v.Z,{className:"w-6"}),o.jsx("div",{className:"hidden md:block",children:"Sign Out"})]})})]})]})}var E=async()=>{await (0,n.w7)()}},46712:(e,t,r)=>{"use strict";r.d(t,{Z:()=>i});var s=r(4656),o=r(5005),a=r.n(o),n=r(10464);function i(){return(0,s.jsxs)("div",{className:`${a().className} flex flex-row items-center leading-none text-white`,children:[s.jsx(n.Z,{className:"h-12 w-12 "}),s.jsx("p",{className:"text-[44px]",children:"Technology"})]})}},10736:(e,t,r)=>{"use strict";r.d(t,{zB:()=>u,w7:()=>m});var s=r(58802),o=r.n(s),a=r(79510),n=r(70851),i=r(11287),c=r(7590);async function l(e){try{let t=await c.i6`SELECT * FROM users WHERE email=${e}`;return t.rows[0]}catch(e){throw console.error("Failed to fetch user:",e),Error("Failed to fetch user.")}}let{auth:d,signIn:u,signOut:m}=(0,a.ZP)({pages:{signIn:"/login"},callbacks:{authorized({auth:e,request:{nextUrl:t}}){let r=!!e?.user,s=t.pathname.startsWith("/dashboard");return s?!!r:!r||Response.redirect(new URL("/dashboard",t))}},providers:[],providers:[(0,n.Z)({async authorize(e){let t=i.z.object({email:i.z.string().email(),password:i.z.string().min(6)}).safeParse(e);if(t.success){let{email:e,password:r}=t.data,s=await l(e);if(!s)return null;let a=await o().compare(r,s.password);if(a)return s}return console.log("Invalid credentials"),null}})]})},36824:()=>{}};