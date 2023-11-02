const nav = document.querySelector('nav');

window.addEventListener('scroll', (evn) => {
    nav.classList.toggle('active', window.scrollY > 0);
})
const menuBtn = document.querySelector('.menuBtn');
const closeBtn = document.querySelector('.close');
const responsiveMenu = document.querySelector('.responsiveMenu');

menuBtn.addEventListener('click', () => {
    responsiveMenu.classList.add('active');
    document.body.style.overflowY = 'hidden';
    document.body.style.paddingRight = '17px';
})

function removeRespMenuActive() {
    responsiveMenu.classList.remove('active');
    document.body.style.overflowY = 'auto';
    document.body.style.paddingRight = '0px';
}


responsiveMenu.querySelectorAll('li a').forEach(link => link.addEventListener('click', removeRespMenuActive))
closeBtn.addEventListener('click', removeRespMenuActive);


const sliderData = [
    {
        title: `Ամբատաշեն պարիսպներ`,
        content: 'Սմբատաշեն, Սնբատյան կամ Սմբատի պարիսպներ, Անի քաղաքի հյուսիսային ամրությունները։ Կոչվել է նաև Սմբատյան պարիսպներ, Սմբատի պարիսպներ, Հյուսիսային պարիսպներ։ Կառուցել է Սմբատ Բ Տիեզերական Բագրատունին 986-988 թվականներին:  Պարիսպը ուներ 14 դարպաս և մուտք (անցում), որոնցից գլխավորներն էին Ավագ, Կարսի և Դվինի դարպասները։ Դարպասներից յուրաքանչյուրը գտնվել է երկու կիսաշրջանաձև աշտարակների միջև։ Ավագ դարպասի վերևում Անի քաղաքի զինանշանն էր՝ հովազի քանդակով։' ,
        img: '../images/a2.jpg'
    },
    {
        title: `Հոռոմոսի վանք`,
        content: 'Հոռոմոս, վանք Մեծ Հայքի Այրարատ նահանգի Շիրակ գավառում, Անիից հյուսիս-արևելք, Ախուրյան գետի աջ ափին (այժմ՝ Թուրքիայի սահմաններում)։ Հիմնադրվել է 10-րդ դարի 2-րդ քառորդում, Հայոց թագավոր Աբաս Բագրատունու (929–953) օրոք: Հոռոմոսի վանքը եղել է Բագրատունիների տոհմական հանգստարանը, թագավորների և իշխանների դամբարանավայրը։ Վանքում է ամփոփվել Սարգիս Ա Սևանցի կաթողիկոսը։ 1918 թվականից Հոռոմոսի վանքը լքվել է և այժմ կիսավեր է։' ,
        img: '../images/6923378_0_120_1023_699_1920x0_80_0_0_96d7aa13f57ec0b616acadb6f4895d40.jpg'
    },
    {
        title: `Անիի Մայր Տաճար`,
        content: 'Անիի Սուրբ Աստվածածին եկեղեցի կամ Անիի Մայր Տաճար, Անի քաղաքի գլխավոր եկեղեցին, կառուցվել է 989-1001 թվականներին, Տրդատ ճարտարապետի կողմից Հայոց թագավոր Սմբատ Բ Տիեզերակալի նախաձեռնությամբ։ Դասվում է հայ և համաշխարհային ճարտարապետական լավագույն նմուշների շարքին։ Քառամույթ գմբեթավոր հորինվածքով կառույց է՝ կոթողային ձևով և հարուստ հարդարանքով։ Ավագ խորանը զարդարված է եղել «Քրիստոսը գահի վրա» որմնանկարով։ Տաճարի միջին գմբեթակիր նավը շնորհիվ ներքին նավերի նեղացման գերիշխում է կառույցի ներքին ամբողջ տարածքի երկայնքով։ Տաճարի գմբեթին կանգնեցված է եղել համարյա մարդու հասակի չափ արծաթյա խաչ։',
        img: '../images/ani_cathedral_1.jpg'
    },
    {
        title: `Անիի կամուրջ`,
        content: 'Անիի կամուրջ, կառուցվել է X-XI դարերում, Ախուրյանի վրա։ Մանուչեի մզկիթի և Անիի Մայր տաճարի միջև ընկած հատվածում հին ճանապարհը տանում էր դեպի կամուրջ, որն ամենամեծն էր եղածներից։ Պահպանված մնացորդների (հենարանները գետի աջ և ձախ ափերին) հիման վրա Թորոս Թորամանյանի առաջարկած վերակազմության նախագծի համաձայն կամուրջը եռաչքանի էր։ Միջին՝ 31,.25 մ հենամիջային չափերով կամարը շինված էր երկկենտրոն աղեղների միացումով։' ,
        img: '../images/Ani-bridge-3.jpg'
    },
    {
        title: `Տիգրան Հոնենց`,
        content: 'Տիգրան Հոնենց (ծննդյան և մահվան թվականներն անհայտ են), 13-րդ դարի հայ խոշոր մեծատուն։ Չունենալով ազնվատոհմ ծագում՝ հարստացել է հարկերի կապալառությամբ, վաշխառությամբ և առևտրով։ Զաքարիա և Շահնշահ Զաքարյանների օրոք Անիում վարել է տնտական բնույթի բարձր պաշտոն (հավանաբար, հարկային վերակացու)։ Ձեռք է բերել խոշոր կալվածներ, գյուղեր, ձիթհաններ, ջրաղացներ, կրպակներ և այլն։ Ենթադրվում է, որ Տիգրան Հոնենցին են պատկանել Անիի որոշ թաղամասեր։ 1213 թվականին իր միջոցներով վերանորոգել է Անիի Մայր տաճարի աստիճանները, 1215 թվականին կառուցել Գրիգոր Լուսավորիչ եկեղեցին' ,
        img: '../images/brMUcZtHFWsVYjpgGfVL.jpg'
    },
    {
        title: `Գագիկ Ա արքայի արձանը`,
        content: 'Գագիկ Ա արքայի արձանը՝ եկեղեցու եռաստիճան մանրակերտը ձեռքին, տեղադրված է եղել տաճարի հյուսիսային ճակատին՝ դեմքով դեպի քաղաքի գլխավոր մուտքը։' ,
        img: '../images/Gagik-A-Bagratuni.jpg'
    },
    {
        title: `Գագկաշեն`,
        content: 'Գագկաշեն, Գագիկաշեն կամ Անիի Գրիգոր Լուսավորչի տաճար, հայկական ճարտարապետական հուշարձան Անիում։ 1001−10 թթ. կառուցել է ճարտարապետ Տրդատը, Գագիկ Ա Բագրատունի թագավորի պատվերով՝ մայրաքաղաքում վերակերտելով ավերակ Զվարթնոցի տիպարը։ Կառույցի ավերակները բացվել են 1905−06 թթ. պեղումներով։ Թորոս Թորամանյանը ուսումնասիրել և կազմել է Գագկաշենի վերակազմության նախագիծը, որը հիմնավորվել է հետագայում, պեղումներով Գագիկ Ա Բագրատունու՝ ձեռքին եկեղեցու մանրակերտը, արձանի հայտնաբերմամբ։' ,
        img: '../images/Movie_2015-05-15.jpg'
    },
    {
        title: `your slider's eighth page`,
        content: `Քաղաքատեղիի առաջին հատակագիծը կազմել է Աբիխը 1844 թվականին: 19-րդ դարի սկզբին հրատարակված աշխատություններում առաջին անգամ Մինաս Բժշկյանի գրքում է շարադրված քաղաքի պատմությունը: Ընդհանուր առմամբ, դրականորեն արտահայտվելով Անի այցելած ավելի քան 20 ճանապարհորդների մասին, որոնք ուղեգրություններ են հրատարակել Անիի վերաբերյալ, միաժամանակ Մառը նրանց մոտ նշում է իդեալականացման որոշ առկայություն և նկարագրությունների մակերեսայնություն, որը նրա կարծիքով արդյունք է այն արտաքին տպավորության, որ նրանք ստացել են համր ավերակներ այցելելուց:` ,
        img: '../images/Անի-Բագրատունյաց-թագավորության-մայրաքաղաքը.jpg'
    },
    {
        title: `Սուրբ Փրկիչ`,
        content: 'Կառուցվել է 1036 թ. Տրդատ ճարտարապետի ձեռքով: Ներսից ութախորան, իսկ դրսից 19-նիստանի շրջանաձեւ սրահի վրա բարձրանում է 1342 թ. վերակառուցված խոշոր գլանաձեւ թմբուկով գմբեթ, որը, ինչպես եւ հիմնական ծավալը, պատված է դեկորատիվ կամարաշարով: Եկեղեցու ներսում, խորանների վրա, պահպանվել են Ավետարանը ձեռքին Քրիստոսին, խորհրդավոր ընթրիքը եւ ավետարանիչներին պատկերող որմնանկարներ: Եկեղեցու արեւելյան կեսը փլվել է 1957 թ.:' ,
        img: '../images/scale_1200.jpg'
    },
    {
        title: `Բագրատունիների դրոշ`,
        content: `Բագրատունիների դրոշ, միջնադարյան Հայաստանի ազնվական տոմերից մեկի՝ Բագրատունիների դրոշը։ 
        Այն 10-րդ դարի 60-ական թվականների կեսին դառնում է համահայկական թագավորության խորհրդանիշ։`,
        img: '../images/Screenshot_3.jpg'
    },
    {
        title: 'Կուսանաց վանք',
        content: 'Վանքը կառուցված է Սուրբ Հռիփսիմեի զոհված կույսերի հիշատակին և ամենայն հավանականությամբ որպես ապաստան է ծառայել միանձնուհիների համար։ Բակի ներսում կան մի քանի շինությունների ավերակներ։ Դրանցից ամենանշանակալիցը ենթադրաբար 13-րդ դարում կառուցված փոքր եկեղեցին է։ Չնայած եկեղեցու վրա չկան արձանագրություններ, սակայն Սուրբ Գրիգոր եկեղեցու արձանագրություններից մեկում խոսվում է մոտակայքում գտնվող Բեխենց անունով մի վանքի մասին, որը վերանորոգվել է Տիգրան Հոնենցի կողմից։ Որոշ հետազոտողներ կարծիք են հայտնում, որ Բեխենցը հենց Կուսանաց վանքն է։',
        img: '../images/20110419_Monastery_of_Hripsimian_Virgins_Ani_Turkey.jpg'
    }
]

const leftRightButttons = document.querySelectorAll('.btnLF');
const sliderCont = document.querySelector('.sliderCont');
let sliderIndex = 0;

function chnageSlider(index) {
    const { title, content, img } = sliderData[index];
    sliderCont.querySelector('img').src = img;
    sliderCont.querySelector('.sliderContTitle').innerText = title;
    sliderCont.querySelector('.sliderContParagrafh').innerText = content;
}

chnageSlider(0);

leftRightButttons.forEach(btn => {
    btn.addEventListener('click', (evn) => {

        sliderCont.classList.remove('active');
        setTimeout(() => {
            sliderCont.classList.add('active');
        }, 200)

        if(evn.target.className.search('left') !== -1) {
            if(sliderIndex >= 0) {
                document.querySelector('.right').classList.remove('active');
                sliderIndex--;
                if(sliderIndex === 0) {
                    btn.classList.add('active');
                }
                chnageSlider(sliderIndex);
            } 
        } else {
            if(sliderIndex < sliderData.length-1) {
                document.querySelector('.left').classList.remove('active');
                sliderIndex++;
                if(sliderIndex === sliderData.length-1) {
                    btn.classList.add('active');
                }
                chnageSlider(sliderIndex);
            }
        }
    })
})

const videoBox = document.querySelectorAll('.videoBox');
const bigVideo = document.querySelector('.bigVideo');

videoBox.forEach(box => {
    box.addEventListener('click', () => {
        document.body.style.overflowY = 'hidden';
        document.body.style.paddingRight = '18px';
        bigVideo.classList.add('active');
        bigVideo.querySelector('video').setAttribute('src', box.querySelector('video').getAttribute('src'))
    })
})

bigVideo.addEventListener('click', (evn) => {
    bigVideo.querySelector('video').pause();
    evn.target.localName !== 'video' ? bigVideo.classList.remove('active') : '';
    document.body.style.overflowY = 'auto';
    document.body.style.paddingRight = '0px';
})