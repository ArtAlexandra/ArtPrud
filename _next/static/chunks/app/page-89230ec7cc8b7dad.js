(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[931],{6742:function(e,t,s){Promise.resolve().then(s.t.bind(s,1749,23)),Promise.resolve().then(s.bind(s,4362)),Promise.resolve().then(s.bind(s,1415)),Promise.resolve().then(s.bind(s,3862)),Promise.resolve().then(s.bind(s,513)),Promise.resolve().then(s.bind(s,1500)),Promise.resolve().then(s.bind(s,4913)),Promise.resolve().then(s.bind(s,9434)),Promise.resolve().then(s.bind(s,3901)),Promise.resolve().then(s.bind(s,1966)),Promise.resolve().then(s.bind(s,9404)),Promise.resolve().then(s.bind(s,8512)),Promise.resolve().then(s.bind(s,420)),Promise.resolve().then(s.bind(s,4945))},4913:function(e,t,s){"use strict";s.r(t);var l=s(3827);s(4090);var a=s(7908),i=s(8693),r=s(7993),n=s(7437);s(8062);var x=s(1991),c=s(6602),d=s.n(c),h=s(6203),m=s.n(h);let o=()=>{n.Am.success("Форма отправлена  !",{position:n.Am.POSITION.TOP_RIGHT})},p=()=>{n.Am.error("Произошла ошибка",{position:"top-right",autoClose:5e3,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0,theme:"light"})},f=x.Ry().shape({name:x.Z_().required("Укажите имя"),nameCompany:x.Z_().required("Укажите название кампании"),job:x.Z_().required("Укажите вашу должность"),email:x.Z_().email("Некорретный адрес почты").required("Укажите свой email"),phoneNumber:x.Z_().required("Укажите свой номер телефона"),questions:x.Z_()}),u=async e=>{try{let t=e.phoneNumber?e.phoneNumber.replace(/\D/g,""):"",s={...e,phoneNumber:t},l=await a.Z.post("http://localhost:4444/feedback",s);return o(),l.data}catch(e){console.error(e.toJSON()),p()}};t.default=()=>(0,l.jsx)("div",{className:"",children:(0,l.jsx)(i.J9,{initialValues:{legalEntity:!0,name:"",nameCompany:"",email:"",phoneNumber:"",questions:"",job:""},validationSchema:f,onSubmit:(e,t)=>{let{setSubmitting:s}=t;setTimeout(()=>{u(e),console.log(e),s(!1)},400)},validateOnChange:!0,validateOnBlur:!0,className:"pb-[120px]",children:e=>{let{isSubmitting:t}=e;return(0,l.jsx)("div",{className:m().forms,children:(0,l.jsxs)(i.l0,{className:m().formsik,children:[(0,l.jsx)("h1",{className:"!text-black text-[40px] text-center",children:"Обратная связь"}),(0,l.jsx)(n.Ix,{}),(0,l.jsxs)(r.mQ,{defaultValue:"phis",className:"w-full",children:[(0,l.jsxs)(r.dr,{className:"grid w-full gap-[10px] grid-cols-2 bg-white",children:[(0,l.jsx)(r.SP,{className:" !bg-white",value:"phis",children:"Физическое лицо"}),(0,l.jsx)(r.SP,{className:" !bg-white",value:"ur",children:"Юридическое лицо"})]}),(0,l.jsxs)(r.nU,{value:"phis",className:"flex flex-col gap-[15px]",children:[(0,l.jsx)(i.gN,{className:" text-[#5a5959]",type:"name",name:"name",placeholder:"Как к Вам обращаться?",inputProps:{style:{color:"#5a5959"}}}),(0,l.jsx)(i.Bc,{className:"text-[#e05e37]",name:"name",component:"div"}),(0,l.jsx)(i.gN,{className:" text-[#5a5959]",type:"email",name:"email",placeholder:"Почта"}),(0,l.jsx)(i.Bc,{className:"text-[#e05e37]",name:"email",component:"div"}),(0,l.jsx)(i.gN,{className:" text-[#5a5959]",type:"tel",name:"phoneNumber",placeholder:"Телефон",as:d(),mask:"+7(999)999-99-99",maskChar:""}),(0,l.jsx)(i.Bc,{className:"text-[#e05e37]",name:"phoneNumber",component:"div"}),(0,l.jsx)(i.gN,{className:" text-[#5a5959]",type:"questions",name:"questions",placeholder:"Вопрос"}),(0,l.jsx)(i.Bc,{className:"text-[#e05e37]",name:"questions",component:"div"})]}),(0,l.jsxs)(r.nU,{value:"ur",className:"flex flex-col gap-[15px]",children:[" ",(0,l.jsx)(i.gN,{className:" text-[#5a5959] ",type:"name",name:"name",placeholder:"Как к Вам обращаться?",inputProps:{style:{color:"#5a5959"}}}),(0,l.jsx)(i.Bc,{className:"text-[#e05e37]",name:"name",component:"div"}),(0,l.jsx)(i.gN,{className:" text-[#5a5959]",type:"nameCompany",name:"nameCompany",placeholder:"Название компании"}),(0,l.jsx)(i.Bc,{className:"text-[#e05e37]",name:"nameCompany",component:"div"}),(0,l.jsx)(i.gN,{className:" text-[#5a5959]",type:"job",name:"job",placeholder:"Должность"}),(0,l.jsx)(i.Bc,{className:"text-[#e05e37]",name:"job",component:"div"}),(0,l.jsx)(i.gN,{className:" text-[#5a5959]",type:"email",name:"email",placeholder:"Почта"}),(0,l.jsx)(i.Bc,{className:"text-[#e05e37]",name:"email",component:"div"}),(0,l.jsx)(i.gN,{className:" text-[#5a5959]",type:"tel",name:"phoneNumber",placeholder:"Телефон",as:d(),mask:"+7(999)999-99-99",maskChar:""}),(0,l.jsx)(i.Bc,{className:"text-[#e05e37]",name:"phoneNumber",component:"div"}),(0,l.jsx)(i.gN,{className:" text-[#5a5959]",type:"questions",name:"questions",placeholder:"Вопрос"}),(0,l.jsx)(i.Bc,{className:"text-[#e05e37]",name:"questions",component:"div"})]})]}),(0,l.jsx)("button",{className:m().button,type:"submit",disabled:t,children:"Отправить"})]})})}})})},9434:function(e,t,s){"use strict";s.r(t),s.d(t,{default:function(){return p}});var l=s(3827);s(4090),s(8512),s(7993);var a=s(703),i={src:"/_next/static/media/art_life 1.6f89ce43.svg",height:80,width:151,blurWidth:0,blurHeight:0},r={src:"/_next/static/media/bananas 1.27a0d5f8.svg",height:163,width:150,blurWidth:0,blurHeight:0},n={src:"/_next/static/media/image 9.091376ed.svg",height:80,width:143,blurWidth:0,blurHeight:0},x={src:"/_next/static/media/logoictis 1.0ca4628f.svg",height:166,width:90,blurWidth:0,blurHeight:0},c={src:"/_next/static/media/logosfedurus 1.3bff1731.svg",height:100,width:108,blurWidth:0,blurHeight:0},d={src:"/_next/static/media/safety-kfc 1.e72d0d87.svg",height:65,width:183,blurWidth:0,blurHeight:0},h=s(9359);s(5768),s(8694);var m=s(5981);let o={dots:!0,infinite:!0,speed:1e3,slidesToShow:1,slidesToScroll:1,arrows:!0};var p=()=>(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)("div",{class:"container mx-auto my-8",children:(0,l.jsx)("hr",{class:"border-t-2 border-black w-full"})}),(0,l.jsxs)("div",{className:"pt-[60px] pb-[60px] px-[60px] lg:px-[120px] bg-white",children:[(0,l.jsx)("h2",{className:"text-[32px] lg:text-[64px] text-black",children:"О компании"}),(0,l.jsx)(l.Fragment,{children:(0,l.jsx)("div",{className:"flex relative justify-center",children:(0,l.jsxs)(h.Z,{...o,className:" !flex !items-center !gap-3 mx-[100px] my-[40px] max-w-[220px] sm:max-w-[450px] lg:max-w-[500px] xl:max-w-[835px] 2xl:max-w-[1200px] ",children:[(0,l.jsxs)("div",{className:"bg-transparent text-black  p-[0px] lg:p-[45px] rounded-lg",children:['ООО "ПРУВАД-ТЕХ" была основана в 2023 году в результате победы проекта "Мобильный модуль шифрования для систем квантового распределения ключей" в конкурсе "Студенческий Стартап" Фонда содействия развитию малых форм предприятий в научно-технической сфере (Фонд содействия инновациям).',(0,l.jsx)("br",{}),(0,l.jsx)("br",{}),'Проект берёт своё начало в 2020 году, его прототип "Разработка программно-аппаратного модуля шифрования для систем квантового распределения ключей", так же одержал победу в конкурсе Фонда содействия инновациям — УМНИК-20 (ЦЭ-1), что позволило ему получить существенное развитие. На текущий момент ПРУВАД-ТЕХ занимается исследованиями и разработками в перспективном направлении "Квантовые технологии".']}),(0,l.jsxs)("div",{className:"bg-transparent text-black p-[0px] lg:p-[45px] rounded-lg",children:['Полное наименование: ОБЩЕСТВО С ОГРАНИЧЕННОЙ ОТВЕТСТВЕННОСТЬЮ "ПРУВАД-ТЕХ"',(0,l.jsx)("br",{}),'Сокращенное наименование: ООО "ПРУВАД-ТЕХ"',(0,l.jsx)("br",{}),"ИНН/КПП: 6154165885/615401001",(0,l.jsx)("br",{}),"ОГРН: 1236100025809",(0,l.jsx)("br",{}),"Юридический адрес: 347916, Ростовская обл, г Таганрог, ул Циолковского, д 30-3, кв 68",(0,l.jsx)("br",{}),"Фактический адрес: 347916, Ростовская обл, г Таганрог, ул Циолковского, д 30-3, кв 68",(0,l.jsx)("br",{}),"Телефон:+7 (919) 896-14-27",(0,l.jsx)("br",{}),"Электронная почта: pruvad-tech@yandex.ru Сайт: pruvad-tech.ru"]}),(0,l.jsxs)("div",{className:"bg-transparent flex-wrap lg:flex-nowrap  p-[0px] lg:p-[45px] justify-center text-black rounded-lg !flex gap-3",children:[(0,l.jsxs)("div",{className:" rounded-lg bg-[#ffffff10] px-3  text-center flex flex-col justify-center items-center min-w-[124px] max-w-[124px] min-h-[124px] gap-3 ",children:[(0,l.jsx)(a.default,{src:i,width:80,height:80,style:{height:"80px"}}),(0,l.jsx)("p",{className:" text-xs text-black",children:'ООО "АРТ Лайф"'})]}),(0,l.jsxs)("div",{className:" rounded-lg text-xs bg-[#ffffff10] px-3 text-center flex flex-col justify-center items-center min-w-[124px] max-w-[124px] min-h-[124px] gap-3 ",children:[(0,l.jsx)(a.default,{src:r,width:80,height:80,style:{height:"80px"}}),(0,l.jsx)("p",{className:" text-xs text-black",children:'ООО "БАНАНАС СОЛЮШН"'})]}),(0,l.jsxs)("div",{className:" rounded-lg bg-[#ffffff10] px-3 text-center flex flex-col justify-center items-center min-w-[124px] max-w-[124px] min-h-[124px] gap-3 ",children:[(0,l.jsx)(a.default,{src:n,width:80,height:80,style:{height:"80px"}}),(0,l.jsx)("p",{className:" text-xs text-black",children:'"ФОНД СОДЕЙСТВИЕ ИННОВАЦИЯМ"'})]}),(0,l.jsxs)("div",{className:" rounded-lg bg-[#ffffff10] px-3 text-center flex flex-col justify-center items-center min-w-[124px] max-w-[124px] min-h-[124px] gap-3",children:[(0,l.jsx)(a.default,{src:x,width:80,height:80,style:{height:"80px"}}),(0,l.jsx)("p",{className:" text-xs text-black",children:'"Институт Компьютерных Технологий и Безопасности"'})]}),(0,l.jsxs)("div",{className:" rounded-lg bg-[#ffffff10] px-3 text-center flex flex-col justify-center items-center min-w-[124px] max-w-[124px] min-h-[124px]  gap-3",children:[(0,l.jsx)(a.default,{className:"!h-[80px]",src:c,width:80,height:80,style:{height:"80px"}}),(0,l.jsx)("p",{className:" text-xs text-black",children:'"Южный Федеральный Университет"'})]}),(0,l.jsxs)("div",{className:" rounded-lg bg-[#ffffff10] px-3 text-center flex flex-col justify-center items-center min-w-[124px] max-w-[124px] min-h-[124px] gap-3 ",children:[(0,l.jsx)(a.default,{src:d,width:80,height:80,style:{height:"80px"}}),(0,l.jsx)("p",{className:" text-xs text-black",children:'ООО "БЕЗОПАСНЫЕ ИНФОРМАЦИОННЫЕ СИСТЕМЫ"'})]})]}),(0,l.jsxs)("div",{className:"bg-transparent p-[45px] text-black rounded-lg   max-h-[298px] overflow-y-auto !flex flex-col-reverse 2xl:!flex-row !items-center justify-between",children:[(0,l.jsxs)("div",{className:"",children:[(0,l.jsx)("br",{}),"Банковские реквизиты:",(0,l.jsx)("br",{}),"Счет получателя: 40702810900500002689",(0,l.jsx)("br",{}),'Получатель: ООО"ПРУВАД-ТЕХ" ИНН получателя: 6154165885',(0,l.jsx)("br",{}),"КПП получателя: 615401001",(0,l.jsx)("br",{}),'Банк получателя: ПАО КБ "ЦЕНТР-ИНВЕСТ"',(0,l.jsx)("br",{}),"БИК банк получателя: 046015762",(0,l.jsx)("br",{}),"Корр. счет банка получателя: 30101810100000000762",(0,l.jsx)("br",{}),"Генеральный директор: Прудников Вадим Александрович"]}),(0,l.jsx)("div",{children:(0,l.jsx)(a.default,{src:m.Z,width:635,style:{height:"80px"},alt:"logo"})})]})]})})})]}),(0,l.jsx)("div",{class:"container mx-auto my-8",children:(0,l.jsx)("hr",{class:"border-t-2 border-black w-full"})})]})},3901:function(e,t,s){"use strict";s.r(t),s.d(t,{default:function(){return h}});var l=s(3827);s(4090);var a=s(703),i={src:"/_next/static/media/DSC_2346 1.947b09c4.svg",height:875,width:700,blurWidth:0,blurHeight:0},r={src:"/_next/static/media/Rectangle 49.4fedef40.png",height:700,width:964,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAGCAIAAABxZ0isAAAAoUlEQVR42gGWAGn/AMivmLWgkLWiksClkLGWf72tnb6ikYhrVwCwnoydiX6EeXKVhXyJenJ2bWOQfnVlYlwAQkRCWmVWiH18raapopygYlJLW1VPZF1VAHNvZ1xaUGxdT1dFO2dRSoNsYYB2cVpCIQC1t7evlIaXioCEfneNgn2Tioavn5WlnpkA1tbWvaebS0E6PEhNUVVQSlBKrY9x1dDLl4BHwp+nqV0AAAAASUVORK5CYII=",blurWidth:8,blurHeight:6},n={src:"/_next/static/media/Rectangle 48.867f98b6.png",height:589,width:943,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAFCAIAAAD38zoCAAAAiElEQVR42gF9AIL/AIiHgY6Xj5WhnJqipKWxtI2VlJiVkbS6vwCHgHaYkKelpamQmpmpubqMkIequMTK2+cAm5OCjpKih4+XgYODmKajdXx2Yl9saoKeAH12Zm90bGBoZGNfUo9vNqiWeJiPh3NVCABtZltSU09NU1CZhGO/ml2+onW3vs2dmaDIYEE/RKP5QgAAAABJRU5ErkJggg==",blurWidth:8,blurHeight:5},x={src:"/_next/static/media/fond.65cc31c6.svg",height:108,width:230,blurWidth:0,blurHeight:0},c=s(9359);s(5768),s(8694);let d={dots:!0,infinite:!0,speed:1e3,slidesToShow:1,slidesToScroll:1,arrows:!0,nextArrow:(0,l.jsx)(function(e){let{className:t,style:s,onClick:a}=e;return(0,l.jsx)("div",{})},{}),prevArrow:(0,l.jsx)(function(e){let{className:t,style:s,onClick:a}=e;return(0,l.jsx)("div",{})},{})};var h=()=>(0,l.jsxs)("div",{className:"",children:[(0,l.jsxs)("div",{className:" flex flex-row px-[60px] lg:px-[120px] bg-[#FFFFFF] pt-[25px] pb-[25px] justify-center ",children:[(0,l.jsx)("div",{className:"flex flex-row justify-between items-center pb-[55px]"}),(0,l.jsxs)("div",{className:"flex flex-col xl:flex-row items-center gap-[12px] xl:gap-[35px] mt-[100px]",children:[(0,l.jsxs)("div",{className:"flex flex-col gap-[44px] xl:gap-[96px]",children:[(0,l.jsx)("p",{className:"shrink-0 text-[#000000] text-[24px] sm:text-[54px] lg:text-8xl not-italic font-[500] leading-[24px] sm:leading-[50px] xl:leading-[136px] w-full xl:w-[200px] ",children:"Отечественное мобильное устройство"}),(0,l.jsxs)("div",{className:"w-[60%]",children:[(0,l.jsxs)("p",{className:" text-[#000000] text-xs lg:text-base not-italic font-[400] leading-[150%]",children:["*Не является средством криптографической защиты информации, максимальный размер ключа — не более 56 бит ",(0,l.jsx)("br",{})," (Согласно постановлению Правительства РФ от 16 апреля 2012 г. N 313)"]}),(0,l.jsx)("p",{className:" text-[#000000] text-xs lg:text-base not-italic font-[400] leading-[150%]",children:"**Для функционирования требуются работоспособные и подготовленные системы квантового распределения ключей"})]})]}),(0,l.jsx)("div",{className:" z-[10] w-[350px] xl:w-[700px] ",children:(0,l.jsx)(a.default,{className:"",src:i,alt:"pink"})})]})]}),(0,l.jsxs)("div",{className:"flex flex-col justify-center text-center px-[60px] lg:px-[120px]",children:[(0,l.jsx)("div",{class:"container mx-auto my-8",children:(0,l.jsx)("hr",{class:"border-t-2 border-black w-full"})}),(0,l.jsxs)("div",{className:"flex justify-center flex-col lg:flex-row items-center gap-[64px]",children:[(0,l.jsx)(a.default,{className:"",src:x,alt:"pink"}),(0,l.jsx)("p",{className:"text-[18px] max-w-[800px] leading-[32px] gap-[68px]",children:"Проект поддержан Фондом содействия развитию малых форм предприятий в научно-технической сфере (Фонд содействия инновациям)"})]}),(0,l.jsx)("div",{class:"container mx-auto my-8",children:(0,l.jsx)("hr",{class:"border-t-2 border-black w-full"})}),(0,l.jsxs)("div",{className:"flex relative justify-center",children:[(0,l.jsx)("div",{id:"description"}),(0,l.jsxs)(c.Z,{...d,className:" !flex !items-center !gap-3 mx-[100px] my-[40px] max-w-[420px] sm:max-w-[640px] lg:max-w-[835px] 2xl:max-w-[1200px]  ",children:[(0,l.jsxs)("div",{className:"bg-transparent !flex !flex-col lg:!flex-row items-center gap-[18px] text-black p-[20px] rounded-lg",children:[(0,l.jsx)("div",{className:"w-[360px]",children:(0,l.jsx)("p",{children:"Мобильный модуль шифрования для систем квантового распределения ключей — система из двух устройств, предназначенная для создания защищённого канала связи между удалёнными пользователями в рамках открытой сети."})}),(0,l.jsx)("div",{className:" z-[10] !w-[350px] xl:!w-[536px] ",children:(0,l.jsx)(a.default,{className:"",src:i,alt:"pink"})}),(0,l.jsx)("div",{className:"w-[360px]",children:(0,l.jsx)("p",{children:"Для работы устройства требуется функционирующая система квантового распределения ключей, например ID Quantique Clavis 2."})})]}),(0,l.jsx)("div",{className:"bg-transparent p-[45px] justify-center text-black rounded-lg !flex gap-3",children:(0,l.jsxs)("div",{className:" flex flex-col lg:flex-row gap-[12px] items-center ",children:[(0,l.jsx)(a.default,{className:"",width:400,src:r,alt:"q1"}),(0,l.jsx)("p",{children:"Система извлекает из СКРК квантовые ключи и использует их для создания защищённого соединения. Безопасность канала связи обеспечена принципами квантовой механики — любая попытка компрометации ключа будет обнаружена, что позволит избежать утечек данных."})]})}),(0,l.jsx)("div",{className:"bg-transparent p-[45px] justify-center text-black rounded-lg !flex gap-3",children:(0,l.jsxs)("div",{className:" flex flex-col lg:flex-row gap-[12px] items-center ",children:[(0,l.jsx)(a.default,{className:"",width:500,src:n,alt:"q2"}),(0,l.jsx)("p",{children:"Стоит отметить, что устройство не является средством криптографической защиты информации, согласно постановлению Правительства РФ от 16 апреля 2012 г. N 313, так как длина используемых ключей не превышает 56 бит. Настоящее Положение не распространяется на деятельность с использованием: а) шифровальных (криптографических) средств, предназначенных для защиты информации, содержащей сведения, составляющие государственную тайну;"})]})}),(0,l.jsx)("div",{className:"bg-transparent p-[45px] text-black rounded-lg   max-h-[298px] overflow-y-auto",children:(0,l.jsx)("p",{children:"б) шифровальных (криптографических) средств, а также товаров, содержащих шифровальные (криптографические) средства, реализующих либо симметричный криптографический алгоритм, использующий криптографический ключ длиной, не превышающей 56 бит, либо ассиметричный криптографический алгоритм, основанный либо на методе разложения на множители целых чисел, размер которых не превышает 512 бит, либо на методе вычисления дискретных логарифмов в мультипликативной группе конечного поля размера, не превышающего 512 бит, либо на методе вычисления дискретных логарифмов в иной группе размера, не превышающего 112 бит."})})]})]}),(0,l.jsx)("div",{class:"container mx-auto my-8",children:(0,l.jsx)("hr",{class:"border-t-2 border-black w-full"})})]})]})},1966:function(e,t,s){"use strict";s.r(t),s.d(t,{default:function(){return c}});var l=s(3827),a=s(4090),i=s(703),r=s(5981),n=s(8792);let x=()=>(0,l.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"21",height:"21",viewBox:"0 0 21 21",fill:"none",children:(0,l.jsx)("path",{d:"M19.3338 9.8673C19.1125 9.86599 18.9013 9.77627 18.7466 9.61787C18.592 9.45948 18.5066 9.24539 18.5092 9.02271C18.5284 7.24175 17.8445 5.53007 16.6077 4.26332C15.3708 2.99656 13.6821 2.27821 11.912 2.2659C11.6906 2.26459 11.4794 2.17487 11.3247 2.01647C11.1701 1.85808 11.0847 1.64399 11.0873 1.4213C11.0899 1.19862 11.1804 0.985575 11.3387 0.829043C11.4971 0.67251 11.7104 0.58531 11.9317 0.586626C14.1443 0.602223 16.2551 1.50024 17.8011 3.08364C19.3471 4.66704 20.202 6.8065 20.1782 9.03263C20.1756 9.25531 20.0852 9.46836 19.9268 9.62489C19.7685 9.78142 19.5552 9.86862 19.3338 9.8673ZM16.8401 9.01278C16.8558 7.67667 16.3434 6.39214 15.4155 5.44178C14.4875 4.49142 13.2202 3.95308 11.8922 3.94518C11.6709 3.94387 11.4576 4.03107 11.2992 4.1876C11.1408 4.34413 11.0504 4.55718 11.0478 4.77986C11.0452 5.00255 11.1306 5.21664 11.2852 5.37503C11.4399 5.53342 11.6511 5.62315 11.8724 5.62446C12.7578 5.62972 13.6027 5.98862 14.2213 6.62219C14.8399 7.25576 15.1815 8.11212 15.171 9.00286C15.1684 9.22555 15.2538 9.43964 15.4085 9.59803C15.5631 9.75642 15.7744 9.84615 15.9957 9.84746C16.217 9.84878 16.4303 9.76158 16.5887 9.60505C16.747 9.44851 16.8375 9.23547 16.8401 9.01278ZM18.5417 19.237L19.3115 18.3607C19.8006 17.8757 20.0798 17.2165 20.0879 16.5277C20.096 15.8388 19.8324 15.1764 19.3547 14.6856C19.3292 14.6594 17.3396 13.0933 17.3396 13.0933C16.8631 12.6289 16.226 12.3681 15.5607 12.3651C14.8954 12.3621 14.2529 12.6171 13.7669 13.0771L12.1604 14.4161C10.8683 13.8678 9.69824 13.0674 8.71726 12.0609C7.73627 11.0544 6.96373 9.86173 6.444 8.55129L7.79803 6.96391C8.26415 6.48316 8.52925 5.84128 8.53822 5.17169C8.54718 4.50211 8.29934 3.85634 7.84619 3.36861C7.84619 3.36861 6.32355 1.34176 6.29798 1.31558C5.82752 0.830587 5.18517 0.552418 4.50974 0.541175C3.83431 0.529933 3.18002 0.78652 2.68824 1.2555L1.71864 2.08943C-4.02908 8.67376 8.0367 20.9354 14.8341 20.7566C15.5202 20.7647 16.2017 20.6344 16.8385 20.3734C17.4753 20.1124 18.0544 19.726 18.5417 19.237Z",fill:"black"})});var c=()=>{let[e,t]=(0,a.useState)(!1);return(0,l.jsx)("div",{children:(0,l.jsxs)("div",{className:"fixed w-full transition-all duration-200 ease-linear z-[100]",children:[(0,l.jsxs)("div",{className:"bg-[#ffff] px-[39px] py-[29px] hidden lg:flex flex-row justify-center lg:justify-between shadow-md",children:[(0,l.jsx)("span",{className:"hidden xl:block",children:(0,l.jsx)(i.default,{src:r.Z,alt:"img"})}),(0,l.jsxs)("div",{className:"flex flex-row gap-[30px] items-center",children:[(0,l.jsx)(n.default,{href:"#description",className:"text-[#000000] text-base not-italic font-medium leading-[normal]",children:(0,l.jsx)("span",{children:"ОПИСАНИЕ"})}),(0,l.jsx)(n.default,{href:"#schema",className:"text-[#000000] text-base not-italic font-medium leading-[normal]",children:(0,l.jsx)("span",{children:"СХЕМА"})}),(0,l.jsx)(n.default,{href:"#howWork",className:"text-[#000000] text-base not-italic font-medium leading-[normal]",children:(0,l.jsx)("span",{children:"ПРИМЕНЕНИЕ"})}),(0,l.jsx)(n.default,{href:"#company",className:"text-[#000000] text-base not-italic font-medium leading-[normal]",children:(0,l.jsx)("span",{children:"КОМПАНИЯ"})}),(0,l.jsx)(n.default,{href:"#form",className:"text-[#000000] text-base not-italic font-medium leading-[normal]",children:(0,l.jsx)("span",{children:"СВЯЗАТЬСЯ"})}),(0,l.jsx)(n.default,{href:"#contact",className:"text-[#000000] text-base not-italic font-medium leading-[normal]",children:(0,l.jsx)("span",{children:"КОНТАКТЫ"})})]}),(0,l.jsxs)("div",{className:"hidden lg:flex flex-row items-center gap-[4px]",children:[(0,l.jsx)(x,{}),(0,l.jsxs)("div",{className:"flex flex-col",children:[(0,l.jsx)("span",{className:"text-[#000000]",children:"+7 (919) 896-14-27"}),(0,l.jsx)("div",{className:" flex flex-row gap-[12px] px-[12px]  text-[#000000] lg:px-[20px]",children:"Заказать звонок"})]})]})]}),(0,l.jsxs)("div",{className:"bg-[#ffff] px-[39px] py-[29px] flex lg:hidden flex-row justify-end shadow-md",children:[(0,l.jsx)("button",{onClick:()=>t(!e),className:"text-lg",children:e?(0,l.jsx)("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:(0,l.jsx)("path",{d:"M6.2253 4.81108C5.83477 4.42056 5.20161 4.42056 4.81108 4.81108C4.42056 5.20161 4.42056 5.83477 4.81108 6.2253L10.5858 12L4.81114 17.7747C4.42062 18.1652 4.42062 18.7984 4.81114 19.1889C5.20167 19.5794 5.83483 19.5794 6.22535 19.1889L12 13.4142L17.7747 19.1889C18.1652 19.5794 18.7984 19.5794 19.1889 19.1889C19.5794 18.7984 19.5794 18.1652 19.1889 17.7747L13.4142 12L19.189 6.2253C19.5795 5.83477 19.5795 5.20161 19.189 4.81108C18.7985 4.42056 18.1653 4.42056 17.7748 4.81108L12 10.5858L6.2253 4.81108Z",fill:"currentColor"})}):(0,l.jsxs)("svg",{viewBox:"0 0 100 80",width:"40",height:"40",children:[(0,l.jsx)("rect",{width:"100",height:"20",rx:"10"}),(0,l.jsx)("rect",{y:"30",width:"100",height:"20",rx:"10"}),(0,l.jsx)("rect",{y:"60",width:"100",height:"20",rx:"10"})]})}),e&&(0,l.jsxs)("div",{className:"absolute right-0 top-full mt-2 w-56 bg-white shadow-lg p-4",children:[(0,l.jsx)(n.default,{href:"#description",className:"block text-black my-2",children:"ОПИСАНИЕ"}),(0,l.jsx)(n.default,{href:"#schema",className:"block text-black my-2",children:"СХЕМА"}),(0,l.jsx)(n.default,{href:"#howWork",className:"block text-black my-2",children:"ПРИМЕНЕНИЕ"}),(0,l.jsx)(n.default,{href:"#company",className:"block text-black my-2",children:"КОМПАНИЯ"}),(0,l.jsx)(n.default,{href:"#form",className:"block text-black my-2",children:"СВЯЗАТЬСЯ"}),(0,l.jsx)(n.default,{href:"#contact",className:"block text-black my-2",children:"КОНТАКТЫ"})]})]})]})})}},7993:function(e,t,s){"use strict";s.d(t,{mQ:function(){return c},nU:function(){return m},dr:function(){return d},SP:function(){return h}});var l=s(3827),a=s(4090),i=s(6664),r=s(3167),n=s(1367);function x(){for(var e=arguments.length,t=Array(e),s=0;s<e;s++)t[s]=arguments[s];return(0,n.m6)((0,r.W)(t))}let c=i.fC,d=a.forwardRef((e,t)=>{let{className:s,...a}=e;return(0,l.jsx)(i.aV,{ref:t,className:x("inline-flex h-10 items-center justify-center rounded-md bg-muted p-1 text-muted-foreground",s),...a})});d.displayName=i.aV.displayName;let h=a.forwardRef((e,t)=>{let{className:s,...a}=e;return(0,l.jsx)(i.xz,{ref:t,className:x("inline-flex items-center justify-center whitespace-nowrap rounded-sm px-3 py-1.5 text-sm font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:bg-background data-[state=active]:text-foreground data-[state=active]:shadow-sm",s),...a})});h.displayName=i.xz.displayName;let m=a.forwardRef((e,t)=>{let{className:s,...a}=e;return(0,l.jsx)(i.VY,{ref:t,className:x("mt-2 ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",s),...a})});m.displayName=i.VY.displayName},6203:function(e){e.exports={forms:"forms_forms__OD_O2",formsik:"forms_formsik__3e_Tc",button:"forms_button__pP2PA"}},4362:function(e,t,s){"use strict";s.r(t),t.default={src:"/_next/static/media/4.a7325b17.svg",height:265,width:265,blurWidth:0,blurHeight:0}},1415:function(e,t,s){"use strict";s.r(t),t.default={src:"/_next/static/media/6.699bb8a5.svg",height:265,width:265,blurWidth:0,blurHeight:0}},3862:function(e,t,s){"use strict";s.r(t),t.default={src:"/_next/static/media/88.58f76572.svg",height:265,width:265,blurWidth:0,blurHeight:0}},513:function(e,t,s){"use strict";s.r(t),t.default={src:"/_next/static/media/Голубая штука.36502ce6.svg",height:173,width:1627,blurWidth:0,blurHeight:0}},1500:function(e,t,s){"use strict";s.r(t),t.default={src:"/_next/static/media/схема (3).710dfba5.svg",height:476,width:616,blurWidth:0,blurHeight:0}},4945:function(e,t,s){"use strict";s.r(t),t.default={src:"/_next/static/media/Platform.b5ad5daf.svg",height:251,width:588,blurWidth:0,blurHeight:0}},420:function(e,t,s){"use strict";s.r(t),t.default={src:"/_next/static/media/image 4.3c171bd8.svg",height:294,width:483,blurWidth:0,blurHeight:0}},5981:function(e,t){"use strict";t.Z={src:"/_next/static/media/pruvad-tech 1.1ca5ea5c.svg",height:50,width:236,blurWidth:0,blurHeight:0}},9404:function(e,t,s){"use strict";s.r(t),t.default={src:"/_next/static/media/карта.32981937.svg",height:371,width:324,blurWidth:0,blurHeight:0}},8512:function(e,t,s){"use strict";s.r(t),t.default={src:"/_next/static/media/схема.f62a55f7.svg",height:258,width:941,blurWidth:0,blurHeight:0}}},function(e){e.O(0,[907,971,69,744],function(){return e(e.s=6742)}),_N_E=e.O()}]);