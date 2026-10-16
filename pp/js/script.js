"use strict";
const portfolioProjects = [

    /* WEB 4 */

    {
        id:"web-dev",
        category:"web",
        sub:"dev",
        title:"인터랙션 구현",
        subtitle:"개발 프로젝트",
        meta:"Web / Development",
        thumbnail:"https://ch1156ae-sketch.github.io/new/images/thumb_utbt.png",
        modalImage:"https://ch1156ae-sketch.github.io/new/utbt_prd.jpg",
        url:"https://ch1156ae-sketch.github.io/new/utbt_1/splash.html",
        description:"인터랙션 구현 개발 프로젝트의 기획 및 구현 내용을 소개합니다."
    },
    {
        id:"web-responsive",
        category:"web",
        sub:"responsive",
        title:"반응형 웹사이트",
        subtitle:"이벤트 페이지",
        meta:"Web / Responsive",
        thumbnail:"https://ch1156ae-sketch.github.io/new/images3/responsive.jpg",
        modalImage:"https://ch1156ae-sketch.github.io/new/images3/responsive-detail.jpg",
        url:"https://ch1156ae-sketch.github.io/new/event/index.html",
        prd:"./documents/responsive-prd.pdf",
        description:"다양한 화면 크기에 최적화한 반응형 웹사이트 프로젝트입니다."
    },
    {
        id:"web-landing-1",
        category:"web",
        sub:"landing",
        title:"AI 협업가이드",
        subtitle:"랜딩페이지",
        meta:"Web / Landing Page",
        thumbnail:"https://ch1156ae-sketch.github.io/new/images/thumb_ai.png",
        modalImage:"https://ch1156ae-sketch.github.io/new/images/thumb_ai.png",
        url:"https://ch1156ae-sketch.github.io/new/ai/html/index.html",
        prd:"./documents/aiprd.pdf",
        description:"AI 협업가이드 랜딩페이지의 기획 및 디자인과 구현 과정을 소개합니다."
    },
    {
        id:"web-landing-2",
        category:"web",
        sub:"landing",
        title:"이니베이커리",
        subtitle:"예약 페이지",
        meta:"Web / Landing Page",
        thumbnail:"https://ch1156ae-sketch.github.io/new/images/thumb_inni.png",
        modalImage:"https://ch1156ae-sketch.github.io/new/images/thumb_inni.png",
        url:"https://ch1156ae-sketch.github.io/new/bakery/index.html",
        prd:"./documents/inprd.docxf",
        description:"이니베이커리 예약페이지의 구성과 디자인 및 개발 작업입니다."
    },

    /* BRANDING 7 */

    {
        id:"brand-planning",
        category:"branding",
        title:"브랜드",
        subtitle:"기획",
        meta:"Branding / Brand Planning",
        thumbnail:"https://ch1156ae-sketch.github.io/new/images3/thumb_brand1.png",
        modalImage:"https://ch1156ae-sketch.github.io/new/concept_detail.png"
    },
    {
        id:"brand-logo",
        category:"branding",
        title:"브랜드",
        subtitle:"로고",
        meta:"Branding / Logo Design",
        thumbnail:"https://ch1156ae-sketch.github.io/new/images2/thumb_brand2.png",
        modalImage:"https://ch1156ae-sketch.github.io/new/logo_detail.png"
    },
    {
        id:"brand-product",
        category:"branding",
        title:"제품",
        subtitle:"디자인",
        meta:"Branding / Product Design",
        thumbnail:"https://ch1156ae-sketch.github.io/new/images2/thumb_brand3.png",
        modalImage:"https://ch1156ae-sketch.github.io/new/images2/thumb_brand3.png"
    },
    {
        id:"brand-mockup",
        category:"branding",
        title:"목업",
        subtitle:"디자인",
        meta:"Branding / Mockup Design",
        thumbnail:"https://ch1156ae-sketch.github.io/new/images2/thumb_brand4.png",
        modalImage:"https://ch1156ae-sketch.github.io/new/images2/thumb_brand4.png"
    },

    /* 브랜딩 카드뉴스 4페이지 */
    {
        id:"brand-instagram",
        category:"branding",
        title:"인스타그램",
        subtitle:"카드뉴스",
        meta:"Branding / Instagram Card News",
        thumbnail:"https://ch1156ae-sketch.github.io/new/images2/thumb_brand5.png",
        gallery:[
            "https://ch1156ae-sketch.github.io/new/images2/brandinstagram1.png",
            "https://ch1156ae-sketch.github.io/new/images2/brandinstagram2.png",
            "https://ch1156ae-sketch.github.io/new/images2/brandinstagram3.png",
            "https://ch1156ae-sketch.github.io/new/images2/brandinstagram4.png"
        ]
    },

    {
        id:"brand-youtube",
        category:"branding",
        title:"유튜브",
        subtitle:"썸네일",
        meta:"Branding / YouTube Thumbnail",
        thumbnail:"https://ch1156ae-sketch.github.io/new/images2/thumb_brand6.png",
        modalImage:"https://ch1156ae-sketch.github.io/new/images2/thumb_brand6.png"
    },
    {
        id:"brand-poster",
        category:"branding",
        title:"제품 홍보",
        subtitle:"포스터",
        meta:"Branding / Promotional Poster",
        thumbnail:"https://ch1156ae-sketch.github.io/new/images2/thumb_brand7.png",
        modalImage:"https://ch1156ae-sketch.github.io/new/poster_detail.png"
    },

    /* DETAIL PAGE 4 */

    {
        id:"detail-1",
        category:"detail",
        sub:"detailpage",
        title:"글레이즈 립",
        subtitle:"상세페이지",
        meta:"Detail Page / Beauty",
        thumbnail:"https://ch1156ae-sketch.github.io/new/images/thumb_lip.png",
        modalImage:"https://ch1156ae-sketch.github.io/new/images3/lip_detail.jpg"
    },
    {
        id:"detail-2",
        category:"detail",
        sub:"detailpage",
        title:"She;ar 트리트먼트",
        subtitle:"상세페이지",
        meta:"Detail Page / Hair",
        thumbnail:"https://ch1156ae-sketch.github.io/new/images/thumb_she;ar.jpg",
        modalImage:"https://ch1156ae-sketch.github.io/new/she';er_detail.jpg"
    },
    {
        id:"detail-3",
        category:"detail",
        sub:"detailpage",
        title:"2in1 사이드테이블",
        subtitle:"상세페이지",
        meta:"Detail Page / furniture",
        thumbnail:"https://ch1156ae-sketch.github.io/new/images/table.jpg",
        modalImage:"https://ch1156ae-sketch.github.io/new/images3/detail3-full.jpg"
    },
    {
        id:"detail-4",
        category:"detail",
        sub:"detailpage",
        title:"밀향 베이커리",
        subtitle:"상세페이지",
        meta:"Detail Page / Food",
        thumbnail:"https://ch1156ae-sketch.github.io/new/images/thumb_meal.png",
        modalImage:"https://ch1156ae-sketch.github.io/new/meal_detail.jpg"
    },

    /* BANNERS 4 */

    {
        id:"banner-1",
        category:"detail",
        sub:"banner",
        title:"원목 트레이",
        subtitle:"메인배너",
        meta:"Banner / Main",
        thumbnail:"https://ch1156ae-sketch.github.io/new/images/banner1.png",
        modalImage:"https://ch1156ae-sketch.github.io/new/images/bd1.jpg"
    },
    {
        id:"banner-2",
        category:"detail",
        sub:"banner",
        title:"할인 이벤트",
        subtitle:"배너",
        meta:"Banner / Event",
        thumbnail:"https://ch1156ae-sketch.github.io/new/images/banner2.png",
        modalImage:"https://ch1156ae-sketch.github.io/new/images/bd2.jpg"
    },
    {
        id:"banner-3",
        category:"detail",
        sub:"banner",
        title:"시즌 이벤트",
        subtitle:"배너",
        meta:"Banner / Season",
        thumbnail:"https://ch1156ae-sketch.github.io/new/images/banner3.png",
        modalImage:"https://ch1156ae-sketch.github.io/new/images/bd3.jpg"
    },
    {
        id:"banner-4",
        category:"detail",
        sub:"banner",
        title:"오거나이저",
        subtitle:"배너",
        meta:"Banner / Product",
        thumbnail:"https://ch1156ae-sketch.github.io/new/images/banner4.png",
        modalImage:"https://ch1156ae-sketch.github.io/new/images/bd4.jpg"
    },

    /* CARD NEWS 01 : 7페이지 */

    {
        id:"cardnews-1",
        category:"cardnews",
        title:"인스타그램",
        subtitle:"카드뉴스 01",
        meta:"Card News / Instagram Feed",
        thumbnail:"https://ch1156ae-sketch.github.io/new/images/thumb_cardnews1.jpg",
        gallery:[
            "https://ch1156ae-sketch.github.io/new/card/cardnews1.jpg",
            "https://ch1156ae-sketch.github.io/new/card//cardnews2.jpg",
            "https://ch1156ae-sketch.github.io/new/card//cardnews3.jpg",
            "https://ch1156ae-sketch.github.io/new/card//cardnews4.jpg",
            "https://ch1156ae-sketch.github.io/new/card/cardnews5.jpg",
            "https://ch1156ae-sketch.github.io/new/card//cardnews6.jpg",
            "https://ch1156ae-sketch.github.io/new/card//cardnews7.jpg"
        ]
    },

    /* CARD NEWS 02 : 10페이지 */

    {
        id:"cardnews-2",
        category:"cardnews",
        title:"인스타그램",
        subtitle:"카드뉴스 02",
        meta:"Card News / Instagram Feed",
        thumbnail:"https://ch1156ae-sketch.github.io/new/images/thumb_cardnews2.jpg",
        gallery:[
            "https://ch1156ae-sketch.github.io/new/card//cardnews8.jpg",
            "https://ch1156ae-sketch.github.io/new/card//cardnews9.jpg",
            "https://ch1156ae-sketch.github.io/new/card//cardnews10.jpg",
            "https://ch1156ae-sketch.github.io/new/card//cardnews11.jpg",
            "https://ch1156ae-sketch.github.io/new/card//cardnews12.jpg",
            "https://ch1156ae-sketch.github.io/new/card//cardnews13.jpg",
            "https://ch1156ae-sketch.github.io/new/card//cardnews14.jpg",
            "https://ch1156ae-sketch.github.io/new/card//cardnews15.jpg",
            "https://ch1156ae-sketch.github.io/new/card//cardnews16.jpg",
            "https://ch1156ae-sketch.github.io/new/card//cardnews17.jpg"
        ]
    },

    /* VIDEO 1 */

    {
        id:"video-1",
        category:"video",
        title:"넛스터",
        subtitle:"영상 프로젝트",
        meta:"Video / Brand Film",
        thumbnail:"https://ch1156ae-sketch.github.io/new/images3/nutster.png",
        video:"https://ch1156ae-sketch.github.io/new/nuts.mp4",
        description:"넛스터 영상 프로젝트입니다. 재생, 일시정지, 음량 조절 및 전체화면 기능을 사용할 수 있습니다."
    }

];

/* ELEMENTS */

const menuBtn=document.querySelector(".menu-btn");
const mobileNav=document.querySelector(".mobile-nav");
const heroSection=document.querySelector(".hero");
const topBtn=document.querySelector(".top-btn");
const grid=document.getElementById("portfolioGrid");

const filterWrap=document.querySelector(".portfolio-filter-wrap");
const mainBtns=document.querySelectorAll(".filter-main");
const webBtns=document.querySelectorAll(".web-sub-btn");
const detailBtns=document.querySelectorAll(".detail-sub-btn");
const navLinks=document.querySelectorAll(".nav a,.mobile-nav a");

const modal=document.querySelector(".project-modal");
const modalBox=document.querySelector(".project-modal-box");
const modalClose=document.querySelector(".project-modal-close");
const modalTitle=document.querySelector(".project-modal-title");
const modalCategory=document.querySelector(".project-modal-category");
const modalVisual=document.querySelector(".project-modal-visual");
const modalImage=document.querySelector(".project-modal-thumb");
const modalDesc=document.querySelector(".project-modal-desc");
const modalInfoCategory=document.querySelector(".modal-info-category");
const modalTool=document.querySelector(".modal-info-tool");
const modalLink=document.querySelector(".project-modal-link");
const modalPrd=document.querySelector(".project-modal-prd");

const carousel=document.querySelector(".project-modal-carousel");
const carouselTrack=document.querySelector(".project-modal-carousel-track");
const carouselPrev=document.querySelector(".project-carousel-prev");
const carouselNext=document.querySelector(".project-carousel-next");
const carouselDots=document.querySelector(".project-carousel-dots");
const carouselCount=document.querySelector(".project-carousel-count");

const videoWrap=document.querySelector(".project-modal-video-wrap");
const videoEl=document.querySelector(".project-modal-video");
const videoError=document.querySelector(".video-error");

let mainFilter="all";
let webFilter="all";
let detailFilter="all";
let previewFilter=null;
let currentSlides=[];
let slideIndex=0;
let dragStart=null;
let lastFocused=null;

/* PROJECT CARD GENERATOR */

function createElement(tag,className,text){
    const element=document.createElement(tag);
    if(className)element.className=className;
    if(text!==undefined)element.textContent=text;
    return element;
}

function isValidSiteUrl(url){
    if(!url)return false;
    try{
        const parsed=new URL(url);
        return ["https:","http:"].includes(parsed.protocol);
    }catch{
        return false;
    }
}

function openSite(project){
    if(isValidSiteUrl(project.url)){
        window.open(project.url,"_blank","noopener,noreferrer");
    }else{
        alert("이 프로젝트의 실제 사이트 주소를 아직 등록하지 않았습니다.");
    }
}

function createProjectCard(project){

    const article=createElement(
        "article",
        "case-card reveal" + (project.category==="video"?" video-card":"")
    );

    article.dataset.category=project.category;
    article.dataset.sub=project.sub||"";

    const visual=createElement("div","case-visual");

    let thumbnailAction;

    if(project.category==="web" && isValidSiteUrl(project.url)){
        thumbnailAction=createElement("a","case-thumb-action");
        thumbnailAction.href=project.url;
        thumbnailAction.target="_blank";
        thumbnailAction.rel="noopener noreferrer";
    }else{
        thumbnailAction=createElement("button","case-thumb-action");
        thumbnailAction.type="button";
        thumbnailAction.addEventListener("click",()=>{
            if(project.category==="web"){
                openSite(project);
            }else{
                openProjectModal(project);
            }
        });
    }

    thumbnailAction.setAttribute(
        "aria-label",
        project.category==="web"
            ? `${project.title} ${project.subtitle} 사이트 열기`
            : `${project.title} ${project.subtitle} 상세 보기`
    );

    const image=createElement("img","case-thumb-image");
    image.src=project.thumbnail;
    image.alt=`${project.title} ${project.subtitle} 썸네일`;
    image.loading="lazy";

    thumbnailAction.appendChild(image);
    visual.appendChild(thumbnailAction);

    const moreButton=createElement(
        "button",
        "case-more-btn",
        project.category==="video"?"영상 재생":"자세히 보기"
    );
    moreButton.type="button";
    moreButton.addEventListener("click",()=>openProjectModal(project));

    visual.appendChild(moreButton);

    const infoButton=createElement("button","case-info-action");
    infoButton.type="button";
    infoButton.addEventListener("click",()=>openProjectModal(project));

    const title=createElement("h3","case-title",project.title+" ");
    const subtitle=createElement("span","",project.subtitle);
    title.appendChild(subtitle);

    const meta=createElement("p","case-meta",project.meta);

    infoButton.appendChild(title);
    infoButton.appendChild(meta);

    article.appendChild(visual);
    article.appendChild(infoButton);

    return article;
}

portfolioProjects.forEach(project=>{
    grid.appendChild(createProjectCard(project));
});

/* HERO MOUSE MOVEMENT */

if(heroSection&&!matchMedia("(prefers-reduced-motion: reduce)").matches){
    let tx=0,ty=0,cx=0,cy=0,frame=null;

    function animateHero(){
        cx+=(tx-cx)*.08;
        cy+=(ty-cy)*.08;

        heroSection.style.setProperty("--mouse-x",cx.toFixed(3));
        heroSection.style.setProperty("--mouse-y",cy.toFixed(3));

        if(Math.abs(tx-cx)<.001&&Math.abs(ty-cy)<.001){
            cx=tx;cy=ty;
            heroSection.style.setProperty("--mouse-x",cx);
            heroSection.style.setProperty("--mouse-y",cy);
            frame=null;
            return;
        }
        frame=requestAnimationFrame(animateHero);
    }

    function requestMotion(){
        if(frame===null)frame=requestAnimationFrame(animateHero);
    }

    heroSection.addEventListener("pointermove",event=>{
        if(event.pointerType==="touch")return;
        const r=heroSection.getBoundingClientRect();
        tx=((event.clientX-r.left)/r.width-.5)*2;
        ty=((event.clientY-r.top)/r.height-.5)*2;
        requestMotion();
    });

    heroSection.addEventListener("pointerleave",()=>{
        tx=0;ty=0;requestMotion();
    });
}

/* MOBILE NAV */

menuBtn.addEventListener("click",()=>{
    const open=menuBtn.classList.toggle("open");
    mobileNav.classList.toggle("open",open);
    menuBtn.setAttribute("aria-expanded",String(open));
});

mobileNav.querySelectorAll("a").forEach(link=>{
    link.addEventListener("click",()=>{
        menuBtn.classList.remove("open");
        mobileNav.classList.remove("open");
        menuBtn.setAttribute("aria-expanded","false");
    });
});

/* TOP */

window.addEventListener("scroll",()=>{
    topBtn.classList.toggle("show",window.scrollY>400);
},{passive:true});

topBtn.addEventListener("click",()=>{
    window.scrollTo({top:0,behavior:"smooth"});
});

/* REVEAL */

const revealEls=document.querySelectorAll(".reveal");

if("IntersectionObserver" in window){
    const observer=new IntersectionObserver(entries=>{
        entries.forEach(entry=>{
            if(!entry.isIntersecting)return;
            entry.target.classList.add("show");

            if(entry.target.classList.contains("skill-row")){
                entry.target.querySelector(".skill-bar span").style.width=
                    entry.target.dataset.percent+"%";
            }
            observer.unobserve(entry.target);
        });
    },{threshold:.1});

    revealEls.forEach(el=>observer.observe(el));
}else{
    revealEls.forEach(el=>{
        el.classList.add("show");
        if(el.classList.contains("skill-row")){
            el.querySelector(".skill-bar span").style.width=
                el.dataset.percent+"%";
        }
    });
}

/* FILTER */

function updateFilterUI(){
    mainBtns.forEach(btn=>{
        const active=btn.dataset.filter===mainFilter;
        btn.classList.toggle("active",active);
        btn.setAttribute("aria-pressed",String(active));
    });
    webBtns.forEach(btn=>{
        btn.classList.toggle("active",btn.dataset.webFilter===webFilter);
    });
    detailBtns.forEach(btn=>{
        btn.classList.toggle("active",btn.dataset.detailFilter===detailFilter);
    });
    const visible=previewFilter||mainFilter;
    filterWrap.dataset.visibleSub=
        visible==="web"||visible==="detail"?visible:"none";
}

function filterCards(){
    const cards=grid.querySelectorAll(".case-card");

    cards.forEach((card,index)=>{
        const project=portfolioProjects[index];
        let visible=false;

        if(mainFilter==="all"){
            visible=true;
        }else if(mainFilter==="web"){
            visible=project.category==="web"&&
                (webFilter==="all"||project.sub===webFilter);
        }else if(mainFilter==="detail"){
            visible=project.category==="detail"&&
                (detailFilter==="all"||project.sub===detailFilter);
        }else{
            visible=project.category===mainFilter;
        }

        card.classList.toggle("is-hidden",!visible);
    });
}

mainBtns.forEach(btn=>{
    btn.addEventListener("mouseenter",()=>{
        const type=btn.dataset.filter;
        previewFilter=(type==="web"||type==="detail")?type:null;
        updateFilterUI();
    });

    btn.addEventListener("click",()=>{
        mainFilter=btn.dataset.filter;
        webFilter="all";
        detailFilter="all";
        previewFilter=null;
        updateFilterUI();
        filterCards();
    });
});

webBtns.forEach(btn=>{
    btn.addEventListener("click",()=>{
        mainFilter="web";
        webFilter=btn.dataset.webFilter;
        detailFilter="all";
        previewFilter=null;
        updateFilterUI();
        filterCards();
    });
});

detailBtns.forEach(btn=>{
    btn.addEventListener("click",()=>{
        mainFilter="detail";
        detailFilter=btn.dataset.detailFilter;
        webFilter="all";
        previewFilter=null;
        updateFilterUI();
        filterCards();
    });
});

filterWrap.addEventListener("mouseleave",()=>{
    previewFilter=null;
    updateFilterUI();
});

updateFilterUI();
filterCards();

/* CAROUSEL */

function resetCarousel(){
    currentSlides=[];
    slideIndex=0;
    dragStart=null;
    carouselTrack.innerHTML="";
    carouselDots.innerHTML="";
    carouselCount.textContent="";
    carouselTrack.style.transition="none";
    carouselTrack.style.transform="translateX(0)";
    carousel.classList.add("is-hidden");
}

function updateCarousel(){
    if(!currentSlides.length)return;

    carouselTrack.style.transition="";
    carouselTrack.style.transform=`translateX(-${slideIndex*100}%)`;
    carouselCount.textContent=`${slideIndex+1} / ${currentSlides.length}`;

    carouselDots.querySelectorAll(".project-carousel-dot")
        .forEach((dot,index)=>{
            dot.classList.toggle("active",index===slideIndex);
        });

    carouselPrev.disabled=slideIndex===0;
    carouselNext.disabled=slideIndex===currentSlides.length-1;
}

function goToSlide(index){
    if(!currentSlides.length)return;
    slideIndex=Math.max(0,Math.min(index,currentSlides.length-1));
    updateCarousel();
}

function showGallery(project){
    currentSlides=project.gallery.slice();
    slideIndex=0;

    currentSlides.forEach((src,index)=>{
        const slide=createElement("div","project-modal-carousel-slide");
        const image=createElement("img");
        image.src=src;
        image.alt=`${project.title} ${project.subtitle} ${index+1}페이지`;
        image.draggable=false;
        slide.appendChild(image);
        carouselTrack.appendChild(slide);

        const dot=createElement("span","project-carousel-dot");
        carouselDots.appendChild(dot);
    });

    carousel.classList.remove("is-hidden");
    updateCarousel();
}

carouselPrev.addEventListener("click",()=>goToSlide(slideIndex-1));
carouselNext.addEventListener("click",()=>goToSlide(slideIndex+1));

carousel.addEventListener("pointerdown",event=>{
    if(event.target.closest("button"))return;
    dragStart={x:event.clientX,y:event.clientY};
    if(event.pointerType==="mouse"){
        carousel.setPointerCapture(event.pointerId);
    }
});

carousel.addEventListener("pointerup",event=>{
    if(!dragStart)return;

    const dx=event.clientX-dragStart.x;
    const dy=event.clientY-dragStart.y;

    if(Math.abs(dx)>45&&Math.abs(dx)>Math.abs(dy)){
        goToSlide(slideIndex+(dx<0?1:-1));
    }
    dragStart=null;

    if(carousel.hasPointerCapture(event.pointerId)){
        carousel.releasePointerCapture(event.pointerId);
    }
});

carousel.addEventListener("pointercancel",()=>{
    dragStart=null;
});

/* VIDEO */

function stopVideo(){
    videoEl.pause();
    videoEl.removeAttribute("src");
    videoEl.removeAttribute("poster");
    videoEl.load();
    videoWrap.classList.add("is-hidden");
    videoError.classList.add("is-hidden");
}

function showVideo(project){
    videoWrap.classList.remove("is-hidden");
    videoError.classList.add("is-hidden");

    videoEl.src=project.video;
    videoEl.poster=project.thumbnail;
    videoEl.load();

    const playPromise=videoEl.play();
    if(playPromise&&playPromise.catch){
        playPromise.catch(()=>{});
    }
}

videoEl.addEventListener("error",()=>{
    if(!videoWrap.classList.contains("is-hidden")){
        videoError.classList.remove("is-hidden");
    }
});

videoEl.addEventListener("loadeddata",()=>{
    videoError.classList.add("is-hidden");
});

/* MODAL — 썸네일 이미지와 다른 이미지 사용 */

const defaultDescriptions={
    web:"웹 프로젝트의 기획, 디자인 및 프론트엔드 구현 내용을 정리한 프로젝트입니다.",
    branding:"브랜드의 방향성과 아이덴티티를 기반으로 제작한 브랜딩 디자인 프로젝트입니다.",
    detail:"제품 정보와 비주얼을 구성한 상세페이지 및 배너 디자인 프로젝트입니다.",
    cardnews:"인스타그램 피드처럼 좌우로 넘겨볼 수 있는 카드뉴스 프로젝트입니다.",
    video:"브랜드 영상 프로젝트입니다. 재생 및 전체화면으로 감상할 수 있습니다."
};

function openProjectModal(project){
    lastFocused=document.activeElement;

    resetCarousel();
    stopVideo();

    modalImage.classList.add("is-hidden");
    modalImage.removeAttribute("src");
    modalVisual.classList.remove("is-detail-page");

    modalTitle.textContent=`${project.title} ${project.subtitle}`;
    modalCategory.textContent=project.meta;
    modalInfoCategory.textContent=project.meta;

    modalTool.textContent=
        project.category==="video"
            ?"Video Editing · Motion"
            :project.category==="cardnews"
                ?"Photoshop · Illustrator"
                :project.category==="web"
                    ?"HTML · CSS · JS"
                    :"Figma · Photoshop · Illustrator";

    if(project.gallery&&project.gallery.length){

        modalDesc.textContent=
            `총 ${project.gallery.length}페이지로 구성된 카드뉴스 프로젝트입니다. 좌우 화살표 또는 스와이프로 넘겨볼 수 있습니다.`;

        showGallery(project);

    }else if(project.category==="video"){

        modalDesc.textContent=
            project.description||defaultDescriptions.video;

        showVideo(project);

    }else{

        modalDesc.textContent=
            project.description||
            defaultDescriptions[project.category]||
            "프로젝트 소개입니다.";

        /*
         핵심 변경:
         project.thumbnail 사용하지 않음.
         project.modalImage 경로만 모달에 사용.
        */
        if(project.modalImage){
            modalImage.src=project.modalImage;
            modalImage.alt=
                `${project.title} ${project.subtitle} 상세 이미지`;
            modalImage.classList.remove("is-hidden");
        }

        if(project.category==="detail"&&project.sub==="detailpage"){
            modalVisual.classList.add("is-detail-page");
        }
    }

    if(isValidSiteUrl(project.url)){
        modalLink.href=project.url;
        modalLink.classList.remove("is-hidden");
    }else{
        modalLink.removeAttribute("href");
        modalLink.classList.add("is-hidden");
    }

    if(project.prd){
        modalPrd.href=project.prd;
        modalPrd.download=project.prd.split("/").pop();
        modalPrd.classList.remove("is-hidden");
    }else{
        modalPrd.removeAttribute("href");
        modalPrd.classList.add("is-hidden");
    }

    modal.classList.add("show");
    modal.setAttribute("aria-hidden","false");
    modalBox.scrollTop=0;
    document.body.style.overflow="hidden";
    modalClose.focus();
}

function closeProjectModal(){
    if(!modal.classList.contains("show"))return;

    stopVideo();
    resetCarousel();

    modal.classList.remove("show");
    modal.setAttribute("aria-hidden","true");

    document.body.style.overflow="";

    if(lastFocused&&typeof lastFocused.focus==="function"){
        lastFocused.focus();
    }
}

modalClose.addEventListener("click",closeProjectModal);

modal.addEventListener("click",event=>{
    if(event.target===modal){
        closeProjectModal();
    }
});

window.addEventListener("keydown",event=>{
    if(!modal.classList.contains("show"))return;

    if(event.key==="Escape"){
        closeProjectModal();
        return;
    }

    if(!carousel.classList.contains("is-hidden")){
        if(event.key==="ArrowLeft"){
            event.preventDefault();
            goToSlide(slideIndex-1);
        }
        if(event.key==="ArrowRight"){
            event.preventDefault();
            goToSlide(slideIndex+1);
        }
    }

    if(event.key==="Tab"){
        const controls=Array.from(
            modalBox.querySelectorAll(
                "a[href],button:not(:disabled),video[controls]"
            )
        ).filter(el=>el.getClientRects().length);

        if(controls.length){
            const first=controls[0];
            const last=controls[controls.length-1];
            if(event.shiftKey&&document.activeElement===first){
                event.preventDefault();
                last.focus();
            }else if(!event.shiftKey&&document.activeElement===last){
                event.preventDefault();
                first.focus();
            }
        }
    }
});

/* NAVIGATION */

const sections=[
    "home","about","skills","works","services","contact"
].map(id=>document.getElementById(id)).filter(Boolean);

function updateActiveNav(){
    const y=window.scrollY+
        document.querySelector(".site-header").offsetHeight+40;
    let currentId="home";

    sections.forEach(section=>{
        if(section.offsetTop<=y)currentId=section.id;
    });

    navLinks.forEach(link=>{
        link.classList.toggle(
            "active",
            link.getAttribute("href")==="#"+currentId
        );
    });
}

window.addEventListener("scroll",updateActiveNav,{passive:true});
window.addEventListener("load",updateActiveNav);
updateActiveNav();