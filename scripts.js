var tl = new TimelineMax()
const controller = new ScrollMagic.Controller()

tl.from('.odd',.5,{y:100, opacity:0})
tl.from('.even',.5,{y:100, opacity:0})

const scene = new ScrollMagic.Scene({
  triggerElement:"#services-title"
})
.setTween(tl)
  .addTo(controller)
  .reverse(false)
