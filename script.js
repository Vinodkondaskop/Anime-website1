gsap.to("#nav",{
    backgroundColor : "black",
    duration:0.5,
    height:"80px",
    scrollTrigger:{
        trigger:"#nav",
        scroller:"body",
        //markers:true,
        start:"top -10%",
        end:"top -10%",
        scrub:2
    }
})
gsap.to("#main",{
    backgroundColor:"black",
    scrollTrigger:{
        trigger:"#main",
        scroller:"body",
        //markers:true,
        start:"top -30%",
        end:"top -80%",
        scrub:2
    }
})
var crsr = document.querySelector("#cursor")
document.addEventListener("mousemove",function(dets){
  crsr.style.left=dets.x+"px"
  crsr.style.top=dets.y+"px"
})
var blur = document.querySelector("#cursor-blur")
document.addEventListener("mousemove",function(dets){
  blur.style.left=dets.x-100+"px"
  blur.style.top=dets.y-100+"px"
})

