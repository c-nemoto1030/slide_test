new Vue({
  el: "#app",
  components: {
    'carousel': VueCarousel.Carousel,
    'slide': VueCarousel.Slide
  },
  methods: {
    next(slide) {
      window.alert(`現在${slide + 1}枚目のスライドです`);
    },
  }
});
