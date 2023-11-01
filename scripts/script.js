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
        title: `your slider's first page`,
        content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus sed dolor tellus. Nunc eu sodales sapien, nec interdum velit. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus consequat nec elit eget euismod. Aenean accumsan sem ac velit viverra dignissim. Donec fermentum mi eros, vitae pharetra ligula scelerisque sit amet. Donec eu vestibulum ante. Donec eu ligula fringilla, rhoncus nunc non, maximus tortor. Aliquam lacinia sit amet dolor quis ullamcorper. Donec fringilla mauris at justo congue, sit amet eleifend massa elementum. Nulla dignissim auctor finibus. Etiam mollis, metus a blandit tristique, dolor libero tincidunt augue, ac.' ,
        img: '../images/a2.jpg'
    },
    {
        title: `your slider's secons page`,
        content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus sed dolor tellus. Nunc eu sodales sapien, nec interdum velit. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus consequat nec elit eget euismod. Aenean accumsan sem ac velit viverra dignissim. Donec fermentum mi eros, vitae pharetra ligula scelerisque sit amet. Donec eu vestibulum ante. Donec eu ligula fringilla, rhoncus nunc non, maximus tortor. Aliquam lacinia sit amet dolor quis ullamcorper. Donec fringilla mauris at justo congue, sit amet eleifend massa elementum. Nulla dignissim auctor finibus. Etiam mollis, metus a blandit tristique, dolor libero tincidunt augue, ac.' ,
        img: '../images/6923378_0_120_1023_699_1920x0_80_0_0_96d7aa13f57ec0b616acadb6f4895d40.jpg'
    },
    {
        title: `your slider's thried page`,
        content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus sed dolor tellus. Nunc eu sodales sapien, nec interdum velit. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus consequat nec elit eget euismod. Aenean accumsan sem ac velit viverra dignissim. Donec fermentum mi eros, vitae pharetra ligula scelerisque sit amet. Donec eu vestibulum ante. Donec eu ligula fringilla, rhoncus nunc non, maximus tortor. Aliquam lacinia sit amet dolor quis ullamcorper. Donec fringilla mauris at justo congue, sit amet eleifend massa elementum. Nulla dignissim auctor finibus. Etiam mollis, metus a blandit tristique, dolor libero tincidunt augue, ac.' ,
        img: '../images/ani_cathedral_1.jpg'
    },
    {
        title: `your slider's fourth page`,
        content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus sed dolor tellus. Nunc eu sodales sapien, nec interdum velit. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus consequat nec elit eget euismod. Aenean accumsan sem ac velit viverra dignissim. Donec fermentum mi eros, vitae pharetra ligula scelerisque sit amet. Donec eu vestibulum ante. Donec eu ligula fringilla, rhoncus nunc non, maximus tortor. Aliquam lacinia sit amet dolor quis ullamcorper. Donec fringilla mauris at justo congue, sit amet eleifend massa elementum. Nulla dignissim auctor finibus. Etiam mollis, metus a blandit tristique, dolor libero tincidunt augue, ac.' ,
        img: '../images/Ani-bridge-3.jpg'
    },
    {
        title: `your slider's five page`,
        content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus sed dolor tellus. Nunc eu sodales sapien, nec interdum velit. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus consequat nec elit eget euismod. Aenean accumsan sem ac velit viverra dignissim. Donec fermentum mi eros, vitae pharetra ligula scelerisque sit amet. Donec eu vestibulum ante. Donec eu ligula fringilla, rhoncus nunc non, maximus tortor. Aliquam lacinia sit amet dolor quis ullamcorper. Donec fringilla mauris at justo congue, sit amet eleifend massa elementum. Nulla dignissim auctor finibus. Etiam mollis, metus a blandit tristique, dolor libero tincidunt augue, ac.' ,
        img: '../images/brMUcZtHFWsVYjpgGfVL.jpg'
    },
    {
        title: `your slider's sixth page`,
        content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus sed dolor tellus. Nunc eu sodales sapien, nec interdum velit. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus consequat nec elit eget euismod. Aenean accumsan sem ac velit viverra dignissim. Donec fermentum mi eros, vitae pharetra ligula scelerisque sit amet. Donec eu vestibulum ante. Donec eu ligula fringilla, rhoncus nunc non, maximus tortor. Aliquam lacinia sit amet dolor quis ullamcorper. Donec fringilla mauris at justo congue, sit amet eleifend massa elementum. Nulla dignissim auctor finibus. Etiam mollis, metus a blandit tristique, dolor libero tincidunt augue, ac.' ,
        img: '../images/Gagik-A-Bagratuni.jpg'
    },
    {
        title: `your slider's seventh page`,
        content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus sed dolor tellus. Nunc eu sodales sapien, nec interdum velit. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus consequat nec elit eget euismod. Aenean accumsan sem ac velit viverra dignissim. Donec fermentum mi eros, vitae pharetra ligula scelerisque sit amet. Donec eu vestibulum ante. Donec eu ligula fringilla, rhoncus nunc non, maximus tortor. Aliquam lacinia sit amet dolor quis ullamcorper. Donec fringilla mauris at justo congue, sit amet eleifend massa elementum. Nulla dignissim auctor finibus. Etiam mollis, metus a blandit tristique, dolor libero tincidunt augue, ac.' ,
        img: '../images/Movie_2015-05-15.jpg'
    },
    {
        title: `your slider's eighth page`,
        content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus sed dolor tellus. Nunc eu sodales sapien, nec interdum velit. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus consequat nec elit eget euismod. Aenean accumsan sem ac velit viverra dignissim. Donec fermentum mi eros, vitae pharetra ligula scelerisque sit amet. Donec eu vestibulum ante. Donec eu ligula fringilla, rhoncus nunc non, maximus tortor. Aliquam lacinia sit amet dolor quis ullamcorper. Donec fringilla mauris at justo congue, sit amet eleifend massa elementum. Nulla dignissim auctor finibus. Etiam mollis, metus a blandit tristique, dolor libero tincidunt augue, ac.' ,
        img: '../images/Անի-Բագրատունյաց-թագավորության-մայրաքաղաքը.jpg'
    },
    {
        title: `your slider's nineth page`,
        content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus sed dolor tellus. Nunc eu sodales sapien, nec interdum velit. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus consequat nec elit eget euismod. Aenean accumsan sem ac velit viverra dignissim. Donec fermentum mi eros, vitae pharetra ligula scelerisque sit amet. Donec eu vestibulum ante. Donec eu ligula fringilla, rhoncus nunc non, maximus tortor. Aliquam lacinia sit amet dolor quis ullamcorper. Donec fringilla mauris at justo congue, sit amet eleifend massa elementum. Nulla dignissim auctor finibus. Etiam mollis, metus a blandit tristique, dolor libero tincidunt augue, ac.' ,
        img: '../images/scale_1200.jpg'
    },
    {
        title: `your slider's tenth page`,
        content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus sed dolor tellus. Nunc eu sodales sapien, nec interdum velit. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus consequat nec elit eget euismod. Aenean accumsan sem ac velit viverra dignissim. Donec fermentum mi eros, vitae pharetra ligula scelerisque sit amet. Donec eu vestibulum ante. Donec eu ligula fringilla, rhoncus nunc non, maximus tortor. Aliquam lacinia sit amet dolor quis ullamcorper. Donec fringilla mauris at justo congue, sit amet eleifend massa elementum. Nulla dignissim auctor finibus. Etiam mollis, metus a blandit tristique, dolor libero tincidunt augue, ac.' ,
        img: '../images/Screenshot_3.jpg'
    },
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