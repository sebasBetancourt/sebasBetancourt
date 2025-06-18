export const gsapScroll = ()=>{
    gsap.registerPlugin(ScrollTrigger);

    gsap.to(".projects-wrapper", {
      scrollTrigger: {
        trigger: ".Projects",
        start: "top center",
        end: "bottom top",
        scrub: 0.1,
        lazy: true, 
        markers: false,
      },
      rotate: 0,
      y: 0,
      opacity: 1,
      ease: "power3.out",
    });

    gsap.utils.toArray(".project").forEach((proj, i) => {
      gsap.to(proj, {
        scrollTrigger: {
          trigger: ".Projects",
          start: "top center",
          end: "bottom top",
          scrub: 0.1,
        },
        scale: 1,
        rotate: 0,
        delay: i * 0.05,
        ease: "power2.out"
      });
    });
}