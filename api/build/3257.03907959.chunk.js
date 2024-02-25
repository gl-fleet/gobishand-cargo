"use strict";(self.webpackChunkapi=self.webpackChunkapi||[]).push([[3257,6519],{33257:(F,R,e)=>{e.d(R,{ProtectedCreatePage:()=>k});var s=e(92132),u=e(80403),M=e(68886),L=e(97987),U=e(36519),B=e(15126),K=e(63299),O=e(67014),g=e(59080),o=e(79275),_=e(14718),D=e(21272),W=e(82437),S=e(61535),v=e(5790),b=e(12083),C=e(35223),H=e(5409),se=e(74930),te=e(2600),ne=e(48940),ae=e(41286),G=e(51187),oe=e(56336),re=e(39404),I=e(58692),ie=e(54257),Q=e(501),N=e(57646),Y=e(23120),de=e(44414),le=e(25962),_e=e(14664),Z=e(42588),Ee=e(90325),X=e(62785),ce=e(87443),he=e(41032),T=e(22957),p=e(93179),j=e(73055),ge=e(15747),V=e(85306),Me=e(77965),Pe=e(26509),J=e(84624),me=e(71210),ue=e(32058),De=e(81185),Oe=e(82261),ve=e(72810),fe=e(18022),w=e(264),Ae=e(39611);const k=()=>{const q=(0,M.j)(L.s);return(0,s.jsx)(u.kz,{permissions:q.settings?.webhooks.create,children:(0,s.jsx)(U.E,{})})}},36519:(F,R,e)=>{e.r(R),e.d(R,{E:()=>ee,a:()=>k,b:()=>Ke});var s=e(92132),u=e(21272),M=e(83997),L=e(8361),U=e(43064),B=e(46462),K=e(66809),O=e(84843),g=e(81621),o=e(98765),_=e(30893),D=e(379),W=e(4181),S=e(50215),v=e(94061),b=e(90151),C=e(68074),H=e(7537),se=e(18629),te=e(76517),ne=e(80782),ae=e(55356),G=e(85963),oe=e(4198),re=e(38413),I=e(80403),ie=e(71389),Q=e(17703),N=e(68886),Y=e(264),de=e(97987),le=e(21610),_e=e(5194),Z=e(68802),Ee=e(84795),X=e(54514),ce=e(98052),he=e(46270),T=e(61535),p=e(54894),j=e(12083),ge=e(95267),V=e(79793),Me=e(39611);const[Pe,J]=(0,ge.q)("WebhookEvent"),me=({children:t})=>{const{formatMessage:n}=(0,p.A)(),{collectionTypes:a,isLoading:c}=(0,Y.u)(),r=u.useMemo(()=>a.some(i=>i.options?.draftAndPublish===!0),[a]),E=n({id:"Settings.webhooks.form.events",defaultMessage:"Events"});return(0,s.jsx)(Pe,{isDraftAndPublish:r,children:(0,s.jsxs)(M.s,{direction:"column",alignItems:"stretch",gap:1,children:[(0,s.jsx)(L.d,{"aria-hidden":!0,children:E}),c&&(0,s.jsx)(U.a,{children:n({id:"Settings.webhooks.events.isLoading",defaultMessage:"Events loading"})}),(0,s.jsx)(ue,{"aria-label":E,children:t})]})})},ue=(0,V.Ay)(B.X)`
  tbody tr:nth-child(odd) {
    background: ${({theme:t})=>t.colors.neutral100};
  }

  thead th span {
    color: ${({theme:t})=>t.colors.neutral500};
  }

  td,
  th {
    padding-block-start: ${({theme:t})=>t.spaces[3]};
    padding-block-end: ${({theme:t})=>t.spaces[3]};
    width: 10%;
    vertical-align: middle;
    text-align: center;
  }

  tbody tr td:first-child {
    /**
     * Add padding to the start of the first column to avoid the checkbox appearing
     * too close to the edge of the table
     */
    padding-inline-start: ${({theme:t})=>t.spaces[2]};
  }
`,De=t=>{const n=[{id:"Settings.webhooks.events.create",defaultMessage:"Create"},{id:"Settings.webhooks.events.update",defaultMessage:"Update"},{id:"app.utils.delete",defaultMessage:"Delete"}];return t&&(n.push({id:"app.utils.publish",defaultMessage:"Publish"}),n.push({id:"app.utils.unpublish",defaultMessage:"Unpublish"})),n},Oe=({getHeaders:t=De})=>{const{isDraftAndPublish:n}=J("Headers"),{formatMessage:a}=(0,p.A)(),c=t(n);return(0,s.jsx)(K.r,{children:(0,s.jsxs)(O.N,{children:[(0,s.jsx)(g.e,{children:(0,s.jsx)(o.s,{children:a({id:"Settings.webhooks.event.select",defaultMessage:"Select event"})})}),c.map(r=>["app.utils.publish","app.utils.unpublish"].includes(r?.id??"")?(0,s.jsx)(g.e,{title:a({id:"Settings.webhooks.event.publish-tooltip",defaultMessage:"This event only exists for content with draft & publish enabled"}),children:(0,s.jsx)(_.o,{variant:"sigma",textColor:"neutral600",children:a(r)})},r.id):(0,s.jsx)(g.e,{children:(0,s.jsx)(_.o,{variant:"sigma",textColor:"neutral600",children:a(r)})},r.id))]})})},ve=({providedEvents:t})=>{const{isDraftAndPublish:n}=J("Body"),a=t||fe(n),{values:c,handleChange:r}=(0,T.j7)(),E="events",i=c.events,m=[],f=i.reduce((d,l)=>{const P=l.split(".")[0];return d[P]||(d[P]=[]),d[P].push(l),d},{}),h=({target:{name:d,value:l}})=>{const P=new Set(i);l?P.add(d):P.delete(d),r({target:{name:E,value:Array.from(P)}})},x=({target:{name:d,value:l}})=>{const P=new Set(i);l?a[d].forEach(y=>{m.includes(y)||P.add(y)}):a[d].forEach(y=>P.delete(y)),r({target:{name:E,value:Array.from(P)}})};return(0,s.jsx)(D.f,{children:Object.entries(a).map(([d,l])=>(0,s.jsx)(w,{disabledEvents:m,name:d,events:l,inputValue:f[d],handleSelect:h,handleSelectAll:x},d))})},fe=t=>{const n=["entry.create","entry.update","entry.delete"];return t&&n.push("entry.publish","entry.unpublish"),{entry:n,media:["media.create","media.update","media.delete"]}},w=({disabledEvents:t=[],name:n,events:a=[],inputValue:c=[],handleSelect:r,handleSelectAll:E})=>{const{formatMessage:i}=(0,p.A)(),m=a.filter(l=>!t.includes(l)),f=c.length>0,h=c.length===m.length,x=({target:{name:l}})=>{E({target:{name:l,value:!h}})},d=5;return(0,s.jsxs)(O.N,{children:[(0,s.jsx)(g.N,{children:(0,s.jsx)(W.S,{indeterminate:f&&!h,"aria-label":i({id:"global.select-all-entries",defaultMessage:"Select all entries"}),name:n,onChange:x,value:h,children:Ae(n)})}),a.map(l=>(0,s.jsx)(g.N,{children:(0,s.jsx)(S.J,{disabled:t.includes(l),"aria-label":l,name:l,value:c.includes(l),onValueChange:P=>r({target:{name:l,value:P}})})},l)),a.length<d&&(0,s.jsx)(g.N,{colSpan:d-a.length})]})},Ae=t=>t.replace(/-/g," ").split(" ").map(n=>n.charAt(0).toUpperCase()+n.slice(1).toLowerCase()).join(" "),k={Root:me,Headers:Oe,Body:ve,Row:w},q=()=>(0,s.jsxs)(k.Root,{children:[(0,s.jsx)(k.Headers,{}),(0,s.jsx)(k.Body,{})]}),We=()=>{const{formatMessage:t}=(0,p.A)(),{values:n,errors:a}=(0,T.j7)();return(0,s.jsxs)(M.s,{direction:"column",alignItems:"stretch",gap:1,children:[(0,s.jsx)(L.d,{children:t({id:"Settings.webhooks.form.headers",defaultMessage:"Headers"})}),(0,s.jsx)(v.a,{padding:8,background:"neutral100",hasRadius:!0,children:(0,s.jsx)(T.ED,{validateOnChange:!1,name:"headers",render:({push:c,remove:r})=>(0,s.jsxs)(b.x,{gap:4,children:[n.headers.map((E,i)=>{const m=a.headers?.[i],f=typeof m=="object"?m.key:void 0,h=typeof m=="object"?m.value:void 0;return(0,s.jsxs)(u.Fragment,{children:[(0,s.jsx)(C.E,{col:6,children:(0,s.jsx)(T.D0,{as:je,name:`headers.${i}.key`,"aria-label":`row ${i+1} key`,label:t({id:"Settings.webhooks.key",defaultMessage:"Key"}),error:f})}),(0,s.jsx)(C.E,{col:6,children:(0,s.jsxs)(M.s,{alignItems:"flex-end",children:[(0,s.jsx)(v.a,{style:{flex:1},children:(0,s.jsx)(T.D0,{as:H.k,name:`headers.${i}.value`,"aria-label":`row ${i+1} value`,label:t({id:"Settings.webhooks.value",defaultMessage:"Value"}),error:h})}),(0,s.jsx)(M.s,{paddingLeft:2,style:{alignSelf:"center"},paddingTop:h?0:5,children:(0,s.jsx)(I.yX,{disabled:n.headers.length===1,onClick:()=>r(i),label:t({id:"Settings.webhooks.headers.remove",defaultMessage:"Remove header row {number}"},{number:i+1})})})]})})]},`${i}.${E.key}`)}),(0,s.jsx)(C.E,{col:12,children:(0,s.jsx)(se.Q,{type:"button",onClick:()=>{c({key:"",value:""})},startIcon:(0,s.jsx)(_e.A,{}),children:t({id:"Settings.webhooks.create.header",defaultMessage:"Create new header"})})})]})})})]})},je=({name:t,onChange:n,value:a,...c})=>{const{values:{headers:r}}=(0,T.j7)(),[E,i]=u.useState([...Ce]);u.useEffect(()=>{const h=Ce.filter(x=>!r?.some(d=>d.key!==a&&d.key===x));i(h)},[r,a]);const m=h=>{n({target:{name:t,value:h}})},f=h=>{i(x=>[...x,h]),m(h)};return(0,s.jsx)(te.nP,{...c,onClear:()=>m(""),onChange:m,onCreateOption:f,placeholder:"",value:a,children:E.map(h=>(0,s.jsx)(ne.j,{value:h,children:h},h))})},Ce=["A-IM","Accept","Accept-Charset","Accept-Encoding","Accept-Language","Accept-Datetime","Access-Control-Request-Method","Access-Control-Request-Headers","Authorization","Cache-Control","Connection","Content-Length","Content-Type","Cookie","Date","Expect","Forwarded","From","Host","If-Match","If-Modified-Since","If-None-Match","If-Range","If-Unmodified-Since","Max-Forwards","Origin","Pragma","Proxy-Authorization","Range","Referer","TE","User-Agent","Upgrade","Via","Warning"],ye=({isPending:t,onCancel:n,response:a})=>{const{statusCode:c,message:r}=a??{},{formatMessage:E}=(0,p.A)();return(0,s.jsx)(v.a,{background:"neutral0",padding:5,shadow:"filterShadow",hasRadius:!0,children:(0,s.jsxs)(b.x,{gap:4,style:{alignItems:"center"},children:[(0,s.jsx)(C.E,{col:3,children:(0,s.jsx)(_.o,{children:E({id:"Settings.webhooks.trigger.test",defaultMessage:"Test-trigger"})})}),(0,s.jsx)(C.E,{col:3,children:(0,s.jsx)(Ie,{isPending:t,statusCode:c})}),(0,s.jsx)(C.E,{col:6,children:t?(0,s.jsx)(M.s,{justifyContent:"flex-end",children:(0,s.jsx)("button",{onClick:n,type:"button",children:(0,s.jsxs)(M.s,{gap:2,alignItems:"center",children:[(0,s.jsx)(_.o,{textColor:"neutral400",children:E({id:"Settings.webhooks.trigger.cancel",defaultMessage:"cancel"})}),(0,s.jsx)(z,{as:Z.A,color:"neutral400"})]})})}):(0,s.jsx)(pe,{statusCode:c,message:r})})]})})},z=V.Ay.svg(({theme:t,color:n})=>`
  width: ${12/16}rem;
  height: ${12/16}rem;


  ${n?(0,V.AH)`
          path {
            fill: ${t.colors[n]};
          }
        `:""}
`),Ie=({isPending:t,statusCode:n})=>{const{formatMessage:a}=(0,p.A)();return t||!n?(0,s.jsxs)(M.s,{gap:2,alignItems:"center",children:[(0,s.jsx)(z,{as:Ee.A}),(0,s.jsx)(_.o,{children:a({id:"Settings.webhooks.trigger.pending",defaultMessage:"pending"})})]}):n>=200&&n<300?(0,s.jsxs)(M.s,{gap:2,alignItems:"center",children:[(0,s.jsx)(z,{as:X.A,color:"success700"}),(0,s.jsx)(_.o,{children:a({id:"Settings.webhooks.trigger.success",defaultMessage:"success"})})]}):n>=300?(0,s.jsxs)(M.s,{gap:2,alignItems:"center",children:[(0,s.jsx)(z,{as:Z.A,color:"danger700"}),(0,s.jsxs)(_.o,{children:[a({id:"Settings.error",defaultMessage:"error"})," ",n]})]}):null},pe=({statusCode:t,message:n})=>{const{formatMessage:a}=(0,p.A)();return t?t>=200&&t<300?(0,s.jsx)(M.s,{justifyContent:"flex-end",children:(0,s.jsx)(_.o,{textColor:"neutral600",ellipsis:!0,children:a({id:"Settings.webhooks.trigger.success.label",defaultMessage:"Trigger succeeded"})})}):t>=300?(0,s.jsx)(M.s,{justifyContent:"flex-end",children:(0,s.jsx)(M.s,{maxWidth:(0,I.a8)(250),justifyContent:"flex-end",title:n,children:(0,s.jsx)(_.o,{ellipsis:!0,textColor:"neutral600",children:n})})}):null:null},Re=({handleSubmit:t,triggerWebhook:n,isCreating:a,isTriggering:c,triggerResponse:r,data:E})=>{const{formatMessage:i}=(0,p.A)(),[m,f]=u.useState(!1),h=(0,N.p)(q,async()=>(await e.e(7280).then(e.bind(e,57280))).EventsTableEE),x=l=>Object.keys(l).length?Object.entries(l).map(([P,y])=>({key:P,value:y})):[{key:"",value:""}],d=(0,T.Wx)({initialValues:{name:E?.name||"",url:E?.url||"",headers:x(E?.headers||{}),events:E?.events||[]},async onSubmit(l,P){await t(l,P),P.resetForm({values:l})},validationSchema:Be({formatMessage:i}),validateOnChange:!1,validateOnBlur:!1});return h?(0,s.jsx)(T.QI,{value:d,children:(0,s.jsxs)(I.lV,{children:[(0,s.jsx)(ae.Q,{primaryAction:(0,s.jsxs)(M.s,{gap:2,children:[(0,s.jsx)(G.$,{onClick:()=>{n(),f(!0)},variant:"tertiary",startIcon:(0,s.jsx)(ce.A,{}),disabled:a||c,size:"L",children:i({id:"Settings.webhooks.trigger",defaultMessage:"Trigger"})}),(0,s.jsx)(G.$,{startIcon:(0,s.jsx)(X.A,{}),type:"submit",size:"L",disabled:!d.dirty,loading:d.isSubmitting,children:i({id:"global.save",defaultMessage:"Save"})})]}),title:a?i({id:"Settings.webhooks.create",defaultMessage:"Create a webhook"}):E?.name,navigationAction:(0,s.jsx)(le.N,{as:ie.k2,startIcon:(0,s.jsx)(he.A,{}),to:"/settings/webhooks",children:i({id:"global.back",defaultMessage:"Back"})})}),(0,s.jsx)(oe.s,{children:(0,s.jsxs)(M.s,{direction:"column",alignItems:"stretch",gap:4,children:[m&&(0,s.jsx)(ye,{isPending:c,response:r,onCancel:()=>f(!1)}),(0,s.jsx)(v.a,{background:"neutral0",padding:8,shadow:"filterShadow",hasRadius:!0,children:(0,s.jsxs)(M.s,{direction:"column",alignItems:"stretch",gap:6,children:[(0,s.jsxs)(b.x,{gap:6,children:[(0,s.jsx)(C.E,{col:6,children:(0,s.jsx)(T.D0,{as:H.k,name:"name",error:d.errors.name,label:i({id:"global.name",defaultMessage:"Name"}),required:!0})}),(0,s.jsx)(C.E,{col:12,children:(0,s.jsx)(T.D0,{as:H.k,name:"url",error:d.errors.url,label:i({id:"Settings.roles.form.input.url",defaultMessage:"Url"}),required:!0})})]}),(0,s.jsx)(We,{}),(0,s.jsx)(h,{})]})})]})})]})}):null},Le=/(^$)|(^[A-Za-z][_0-9A-Za-z ]*$)/,Ue=/(^$)|((https?:\/\/.*)(d*)\/?(.*))/,Be=({formatMessage:t})=>j.Ik().shape({name:j.Yj().required(t({id:"Settings.webhooks.validation.name.required",defaultMessage:"Name is required"})).matches(Le,t({id:"Settings.webhooks.validation.name.regex",defaultMessage:"The name must start with a letter and only contain letters, numbers, spaces and underscores"})),url:j.Yj().required(t({id:"Settings.webhooks.validation.url.required",defaultMessage:"Url is required"})).matches(Ue,t({id:"Settings.webhooks.validation.url.regex",defaultMessage:"The value must be a valid Url"})),headers:j.RZ(n=>{const a=j.YO();if(n.length===1){const{key:c,value:r}=n[0];if(!c&&!r)return a}return a.of(j.Ik().shape({key:j.Yj().required(t({id:"Settings.webhooks.validation.key",defaultMessage:"Key is required"})),value:j.Yj().required(t({id:"Settings.webhooks.validation.value",defaultMessage:"Value is required"}))}))}),events:j.YO()}),Te=t=>({...t,headers:t.headers.reduce((n,{key:a,value:c})=>(a!==""&&(n[a]=c),n),{})}),ee=()=>{const n=(0,Q.W5)("/settings/webhooks/:id")?.params.id,a=n==="create",{replace:c}=(0,Q.W6)(),r=(0,I.hN)(),{_unstableFormatAPIError:E,_unstableFormatValidationErrors:i}=(0,I.wq)(),{isLoading:m}=(0,Y.u)(),[f,h]=u.useState(!1),[x,d]=u.useState(),{isLoading:l,webhooks:P,error:y,createWebhook:Se,updateWebhook:be,triggerWebhook:ke}=(0,Me.u)({id:n},{skip:a});u.useEffect(()=>{y&&r({type:"warning",message:E(y)})},[y,r,E]);const $e=async()=>{try{h(!0);const $=await ke(n);if("error"in $){r({type:"warning",message:E($.error)});return}d($.data)}catch{r({type:"warning",message:{id:"notification.error",defaultMessage:"An error occurred"}})}finally{h(!1)}},Ne=async($,xe)=>{try{if(a){const A=await Se(Te($));if("error"in A){(0,N.x)(A.error)&&A.error.name==="ValidationError"?xe.setErrors(i(A.error)):r({type:"warning",message:E(A.error)});return}r({type:"success",message:{id:"Settings.webhooks.created"}}),c(`/settings/webhooks/${A.data.id}`)}else{const A=await be({id:n,...Te($)});if("error"in A){(0,N.x)(A.error)&&A.error.name==="ValidationError"?xe.setErrors(i(A.error)):r({type:"warning",message:E(A.error)});return}r({type:"success",message:{id:"notification.form.success.fields"}})}}catch{r({type:"warning",message:{id:"notification.error",defaultMessage:"An error occurred"}})}};if(l||m)return(0,s.jsx)(I.Bl,{});const[He]=P??[];return(0,s.jsxs)(re.g,{children:[(0,s.jsx)(I.x7,{name:"Webhooks"}),(0,s.jsx)(Re,{data:He,handleSubmit:Ne,triggerWebhook:$e,isCreating:a,isTriggering:f,triggerResponse:x})]})},Ke=Object.freeze(Object.defineProperty({__proto__:null,EditPage:ee,ProtectedEditPage:()=>{const t=(0,N.j)(de.s);return(0,s.jsx)(I.kz,{permissions:t.settings?.webhooks.update,children:(0,s.jsx)(ee,{})})}},Symbol.toStringTag,{value:"Module"}))},264:(F,R,e)=>{e.d(R,{u:()=>K});var s=e(21272),u=e(80403),M=e(68886);const L=M.n.injectEndpoints({endpoints:O=>({getComponents:O.query({query:()=>({url:"/content-manager/components",method:"GET"}),transformResponse:g=>g.data}),getContentTypes:O.query({query:()=>({url:"/content-manager/content-types",method:"GET"}),transformResponse:g=>g.data})}),overrideExisting:!1}),{useGetComponentsQuery:U,useGetContentTypesQuery:B}=L;function K(){const{_unstableFormatAPIError:O}=(0,u.wq)(),g=(0,u.hN)(),o=U(),_=B();s.useEffect(()=>{_.error&&g({type:"warning",message:O(_.error)})},[_.error,O,g]),s.useEffect(()=>{o.error&&g({type:"warning",message:O(o.error)})},[o.error,O,g]);const D=o.isLoading||_.isLoading,W=s.useMemo(()=>(_?.data??[]).filter(v=>v.kind==="collectionType"&&v.isDisplayed),[_?.data]),S=s.useMemo(()=>(_?.data??[]).filter(v=>v.kind!=="collectionType"&&v.isDisplayed),[_?.data]);return{isLoading:D,components:s.useMemo(()=>o?.data??[],[o?.data]),collectionTypes:W,singleTypes:S}}},39611:(F,R,e)=>{e.d(R,{u:()=>O});var s=e(68886);const u=s.n.injectEndpoints({endpoints:g=>({getWebhooks:g.query({query:o=>({url:`/admin/webhooks/${o?.id??""}`,method:"GET"}),transformResponse:o=>Array.isArray(o.data)?o.data:[o.data],providesTags:(o,_,D)=>typeof D=="object"&&"id"in D?[{type:"Webhook",id:D.id}]:[...o?.map(({id:W})=>({type:"Webhook",id:W}))??[],{type:"Webhook",id:"LIST"}]}),createWebhook:g.mutation({query:o=>({url:"/admin/webhooks",method:"POST",data:o}),transformResponse:o=>o.data,invalidatesTags:[{type:"Webhook",id:"LIST"}]}),updateWebhook:g.mutation({query:({id:o,..._})=>({url:`/admin/webhooks/${o}`,method:"PUT",data:_}),transformResponse:o=>o.data,invalidatesTags:(o,_,{id:D})=>[{type:"Webhook",id:D}]}),triggerWebhook:g.mutation({query:o=>({url:`/admin/webhooks/${o}/trigger`,method:"POST"}),transformResponse:o=>o.data}),deleteManyWebhooks:g.mutation({query:o=>({url:"/admin/webhooks/batch-delete",method:"POST",data:o}),transformResponse:o=>o.data,invalidatesTags:(o,_,{ids:D})=>D.map(W=>({type:"Webhook",id:W}))})}),overrideExisting:!1}),{useGetWebhooksQuery:M,useCreateWebhookMutation:L,useUpdateWebhookMutation:U,useTriggerWebhookMutation:B,useDeleteManyWebhooksMutation:K}=u,O=(g=void 0,o)=>{const{data:_,isLoading:D,error:W}=M(g,o),[S]=L(),[v]=U(),[b]=B(),[C]=K();return{webhooks:_,isLoading:D,error:W,createWebhook:S,updateWebhook:v,triggerWebhook:b,deleteManyWebhooks:C}}}}]);
