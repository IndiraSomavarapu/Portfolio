var carousel = new Vue({
  el: "#carousel",
  data: function () {
    return {
      slides: [
        {
          id: 1,
          imgSrc: "media/art/India.jpeg",
          altText: "Char Minar(four minarets)",
          caption: "'Char Minar'-A monument and mosque located in Hyderabad,India"
        },
        {
          id: 2,
          imgSrc: "media/art/farmhouse.jpeg",
          altText: "Sweet Home",
          caption: "Home sweet Home, there's no other place like it"
        },
        {
          id: 3,
          imgSrc: "media/art/macbeth.jpeg",
          altText: "Lady MacBeth",
          caption: "'Lady MacBeth' - Atoning for my sins and crimes"
        },
        {
          id: 4,
          imgSrc: "media/art/brad.jpeg",
          altText: "Brad Pitt",
          caption: "I am looking for my Jolie - 'Brad Pitt'"
        },
        {
          id: 5,
          imgSrc: "media/art/winebread.jpeg",
          altText: "Wine & Bread",
          caption: "Wine & Bread"
        },
        {
          id: 6,
          imgSrc: "media/art/lakehouse.jpeg",
          altText: "Adventure in the boat",
          caption: "Awaiting adventure in a boat"
        },
        {
          id: 7,
          imgSrc: "media/art/fruitcorn.jpeg",
          altText: "Fruit Basket",
          caption: "Boasting in warm pastel hues of yellow, green, brown & rainbow of colors in the corn"
        },
        {
          id: 8,
          imgSrc: "media/art/puddle.jpeg",
          altText: "Puddles in the rain",
          caption: "Jump in the Puddles"
        },
        {
          id: 9,
          imgSrc: "media/art/jarfruits.jpeg",
          altText: "Fruits and things",
          caption: "Still life of fruits and things"
        },
        {
          id: 10,
          imgSrc: "media/art/creek.jpeg",
          altText: "Journey & Destination",
          caption: "Focus more on the journey and less on the destination"
        },
        {
          id: 11,
          imgSrc: "media/art/treehouse.jpeg",
          altText: "Old world charm",
          caption: "Old world charm that comes alive through this painting"
        }
      ]
    };
  },

  methods: {
    next() {
      const first = this.slides.shift();
      this.slides = this.slides.concat(first);
    },
    previous() {
      const last = this.slides.pop();
      this.slides = [last].concat(this.slides);
    }
  }
})

const mytitle = new Vue({
  el: '#title',
  data: {
    title: "Somavarapu's Portfolio",
    initialsImage: "./media/initials.JPG",
    altText: "Indira"
  }
})
const myfooter = new Vue({
  el: '#footermenu',
  data: {
      github: "https://github.com/IndiraSomavarapu",
      facebook:"https://www.facebook.com/indira.somavarapu",
      linkedin:"https://www.linkedin.com/in/indirasomavarapu/"
  }
})
