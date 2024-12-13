let ipath = `M 10 80 Q 95 80 180 80`;
let finalPath = `M 10 80 Q 95 80 180 80`;

let string =document.querySelector("#string");
/*string.addEventListener("mouseenter", function(){
  console.log("entered");
})
string.addEventListener("mouseleave", function(){
  console.log("left");
})*/
string.addEventListener("mousemove",function(dets){
  ipath = `M 10 80 Q ${dets.x} ${dets.y} 180 80`;
  gsap.to("svg path",{
    attr:{d: ipath},
    duration:0.2,
    ease:'power3.out',
  });
});
string.addEventListener("mouseleave",function(){
  gsap.to("svg path",{
    attr:{d:finalPath},
    ease:"elastic.out",
    duration:1.5,
  });
});