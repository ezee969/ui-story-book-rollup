"use strict";(self.webpackChunk_ezee969_story_book_rollup=self.webpackChunk_ezee969_story_book_rollup||[]).push([[317],{"./src/components/ContactInfoPopup/ContactInfoPopup.stories.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{default:()=>ContactInfoPopup_stories});var Card=__webpack_require__("./node_modules/@mui/material/Card/Card.js"),CardContent=__webpack_require__("./node_modules/@mui/material/CardContent/CardContent.js"),Box=__webpack_require__("./node_modules/@mui/material/Box/Box.js"),Typography=__webpack_require__("./node_modules/@mui/material/Typography/Typography.js"),Chip=__webpack_require__("./node_modules/@mui/material/Chip/Chip.js"),Divider=__webpack_require__("./node_modules/@mui/material/Divider/Divider.js"),Tag=__webpack_require__("./node_modules/@mui/icons-material/esm/Tag.js"),Phone=__webpack_require__("./node_modules/@mui/icons-material/esm/Phone.js"),Message=__webpack_require__("./node_modules/@mui/icons-material/esm/Message.js"),LocationOn=__webpack_require__("./node_modules/@mui/icons-material/esm/LocationOn.js"),Email=__webpack_require__("./node_modules/@mui/icons-material/esm/Email.js"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const mockData={etiquetas:["Agua","Sin Respuesta Llamada"],telefonos:["+4260444537311099","+4809040199161594","+5493584023801"],im:["WhatsApp","Telegram","Signal"],direccion:"Manco Capac 979, Ciudad XYZ",correos:["leandrofrancia@gmail.com","leandrofrancia@hotmail.com","leandro@franciatelefonia.com.ar","leandro@grupofrancia.ar","leandro@trii.com.ar"]},ContactInfoPopup=_ref=>{let{contactData}=_ref;return(0,jsx_runtime.jsx)(Card.A,{sx:{width:300,boxShadow:3,borderRadius:2},children:(0,jsx_runtime.jsxs)(CardContent.A,{children:[(0,jsx_runtime.jsxs)(Box.A,{display:"flex",alignItems:"center",mb:2,children:[(0,jsx_runtime.jsx)(Tag.A,{sx:{color:"orange",marginRight:1}}),(0,jsx_runtime.jsx)(Typography.A,{variant:"h6",fontWeight:"bold",children:"Francia Leandro A."})]}),(0,jsx_runtime.jsx)(Typography.A,{variant:"subtitle1",fontWeight:"bold",gutterBottom:!0,children:"Etiquetas"}),(0,jsx_runtime.jsx)(Box.A,{mb:2,children:mockData.etiquetas.map(((tag,index)=>(0,jsx_runtime.jsx)(Chip.A,{label:tag,color:"primary",size:"small",sx:{mr:1,mb:1}},index)))}),(0,jsx_runtime.jsx)(Divider.A,{}),(0,jsx_runtime.jsx)(Typography.A,{variant:"subtitle1",fontWeight:"bold",gutterBottom:!0,mt:2,children:"Teléfonos"}),(0,jsx_runtime.jsx)(Box.A,{mb:2,children:mockData.telefonos.map(((phone,index)=>(0,jsx_runtime.jsxs)(Typography.A,{variant:"body2",color:"text.secondary",children:[(0,jsx_runtime.jsx)(Phone.A,{fontSize:"small",sx:{mr:1}}),phone]},index)))}),(0,jsx_runtime.jsx)(Divider.A,{}),(0,jsx_runtime.jsx)(Typography.A,{variant:"subtitle1",fontWeight:"bold",gutterBottom:!0,mt:2,children:"IM"}),(0,jsx_runtime.jsx)(Box.A,{mb:2,children:mockData.im.map(((im,index)=>(0,jsx_runtime.jsxs)(Typography.A,{variant:"body2",color:"text.secondary",children:[(0,jsx_runtime.jsx)(Message.A,{fontSize:"small",sx:{mr:1}}),im]},index)))}),(0,jsx_runtime.jsx)(Divider.A,{}),(0,jsx_runtime.jsx)(Typography.A,{variant:"subtitle1",fontWeight:"bold",gutterBottom:!0,mt:2,children:"Dirección"}),(0,jsx_runtime.jsxs)(Typography.A,{variant:"body2",color:"text.secondary",mb:2,children:[(0,jsx_runtime.jsx)(LocationOn.A,{fontSize:"small",sx:{mr:1}}),mockData.direccion]}),(0,jsx_runtime.jsx)(Divider.A,{}),(0,jsx_runtime.jsx)(Typography.A,{variant:"subtitle1",fontWeight:"bold",gutterBottom:!0,mt:2,children:"Correo Electrónico"}),(0,jsx_runtime.jsx)(Box.A,{children:mockData.correos.map(((email,index)=>(0,jsx_runtime.jsxs)(Typography.A,{variant:"body2",color:"text.secondary",children:[(0,jsx_runtime.jsx)(Email.A,{fontSize:"small",sx:{mr:1}}),email]},index)))})]})})},ContactInfoPopup_ContactInfoPopup=ContactInfoPopup;ContactInfoPopup.__docgenInfo={description:"",methods:[],displayName:"ContactInfoPopup",props:{contactData:{required:!0,tsType:{name:"IContact"},description:"Data of the contact to be displayed"}}};const ContactInfoPopup_stories={title:"UI/ContactInfoPopup",component:ContactInfoPopup_ContactInfoPopup,tags:["autodocs"],parameters:{layout:"centered"}}}}]);