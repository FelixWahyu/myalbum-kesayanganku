new Vue({
  el: "#app",
  data() {
    return {
      isOpenedTop: true,
      items: [
        {
          img1: "images/beautiful-1.jpg",
          img2: "images/cantik-3.jpg",
          img3: "images/gemoy-1.jpg",
          title: "LUCUU",
          isOpen: false,
        },
        {
          img1: "images/gemoy-3.jpg",
          img2: "images/cute-1.jpg",
          img3: "images/gemes-1.jpg",
          title: "CUTEE",
          isOpen: false,
        },
        {
          img1: "images/gemoy-2.jpg",
          img2: "images/cute-5.jpg",
          img3: "images/cantik-1.jpg",
          title: "GEMESS",
          isOpen: false,
        },
        {
          img1: "images/cantik-2.jpg",
          img2: "images/gemes-2.jpg",
          img3: "images/cute-2.jpg",
          title: "GEMOYY",
          isOpen: false,
        },
        {
          img1: "images/gemes-3.jpg",
          img2: "images/cute-3.jpg",
          img3: "images/cute-4.jpg",
          title: "CANTIKK",
          isOpen: false,
        },
      ],
    };
  },
  methods: {
    topOpen() {
      this.isOpenedTop = !this.isOpenedTop;
    },

    open(idx, isOpen) {
      if (this.isOpenedTop) {
        this.items[idx].isOpen = !isOpen;
      }
    },

    reset() {
      this.items.forEach((item) => (item.isOpen = false));
      this.isOpenedTop = false;
    },
  },
});
