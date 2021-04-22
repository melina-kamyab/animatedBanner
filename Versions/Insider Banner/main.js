window.onload = function (){
    var tl = gsap.timeline();


    tl.set("#magic-wand", {rotation: 30});
    tl.to("#magic-wand", {rotation:50, duration: 1, ease:Power3.out, yoyo:true, repeat:1});
    tl.from("#magic-dust", {autoAlpha:0,duration:3}, "-=2");
    tl.from("#logo", {autoAlpha:0, duration:6}, "-=1");
    tl.from("#slogan", {autoAlpha:0, duration:6}, "-=6");
};
