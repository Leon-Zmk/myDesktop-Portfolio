function onReady(callback) {
    var intervalId = window.setInterval(function() {
        if (document.getElementsByTagName('body')[0] !== undefined) {
        window.clearInterval(intervalId);
        callback.call(this);
        }
    },4000);
    }

function setVisible(selector, visible) {
    
document.querySelector(selector).style.display = visible ? 'block' : 'none';
document.querySelector(".background").play()


}



onReady(function() {
if(document.querySelector(".page")){
  setVisible('.page', true);
}
if(document.querySelector(".spage")){
  setVisible('.spage', true);

}
setVisible(".background",true);
if(document.querySelector(".hcurtain")){
    setVisible(".hcurtain",false);
}
if(document.querySelector(".screen-loading")){
    setVisible(".screen-loading",false);
}
if(document.querySelector(".menu")){
    window.setTimeout(function(){
        setVisible(".menu",true)
        
    },5000)
}
});

if(document.querySelector(".menu")){
    document.querySelector(".menu").addEventListener("click",function(e){

        document.querySelector(".curtain").style.display = 'flex'
        document.querySelector(".c1").classList.add("animate__animated", "animate__slideInLeft")
        document.querySelector(".c2").classList.add("animate__animated", "animate__slideInRight")

        window.setTimeout(() => {
            window.location.href="home.html";
        }, 1500); 

        window.setTimeout(function(){
            setVisible(".navbar",false)
        },2000)
    
    })
}


if(document.querySelector("#skill")){
    document.querySelector("#skill").addEventListener("click",function(e){

        window.setTimeout(()=>{
            document.querySelector(".navbar").classList.remove("animate__animated", "animate__slideInDown")
            document.querySelector(".navbar").classList.add("animate__animated", "animate__slideOutUp")
            
        },0)

        window.setTimeout(()=>{
            setVisible(".navbar",false);
        },500)

        window.setTimeout(()=>{

          
            document.querySelector(".hcurtain").style.display = 'flex';

            document.querySelector(".c1").classList.remove("animate__animated","animate__slideOutLeft") 
            document.querySelector(".c2").classList.remove("animate__animated","animate__slideOutRight")

            document.querySelector(".c1").classList.add("animate__animated", "animate__slideInDown")
            document.querySelector(".c2").classList.add("animate__animated", "animate__slideInDown")
        },1000)

        window.setTimeout(() => {
            window.location.href="skill.html";
            document.querySelector(".hcurtain").style.display = 'flex';

        }, 1500); 

      


    
    })
}




if(document.querySelector(".slick")){
  
$('.slick').slick({
  arrows:false,
  dots:true,
  infinite: false,
  speed: 300,
  slidesToShow: 3,
  slidesToScroll: 3,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
});




}


function detectMob() {
  const toMatch = [
      /Android/i,
      /webOS/i,
      /iPhone/i,
      /iPad/i,
      /iPod/i,
      /BlackBerry/i,
      /Windows Phone/i
  ];
  
  return toMatch.some((toMatchItem) => {
      return navigator.userAgent.match(toMatchItem);
  });
}

if(detectMob()){
  
  document.body.style.height="100vh";
  document.body.style.padding="100px";
  document.body.style.textAlign="center"
  document.body.style.backgroundColor="white";
  document.body.innerText="Website not supported on andriod devices.If its not working on desktop try refreshing the page";
  
}


function setActive(){
  let navs=document.querySelectorAll(".nav-link");
  let location=document.location.href;
  console.log(navs);
  console.log(location);
  
  for (const x  of navs) {
    let nav=x;
    nav.classList.remove("active");
    let nlocation=nav.getAttribute("href");
    if(nlocation==location){
      console.log('yes');
      nav.classList.add("active");
    }
  }
} 

setActive();

