const wrapper = document.querySelector(".swiper-wrapper");


 const resData = [
  {
    id: 1,
    resImage: "/images/ovqat-page/burger.png",
    imgbottom: "/images/ovqat-page/burger-2.png",
  },
  {
    id: 2,
    resImage: "/images/ovqat-page/palov.png",
    imgbottom: "/images/ovqat-page/palov-2.png",
  },

  {
    id: 3,
    resImage: "/images/ovqat-page/shorva.png",
    imgbottom: "/images/ovqat-page/shorva-2.png",
  },

  {
    id: 4,
    resImage: "/images/ovqat-page/card.png",
    imgbottom: "/images/ovqat-page/card-2.png",
  },

  {
    id: 5,
    resImage: "/images/ovqat-page/palov.png",
    imgbottom: "/images/ovqat-page/palov-2.png",
  },

  {
    id: 6,
    resImage: "/images/ovqat-page/shorva.png",
    imgbottom: "/images/ovqat-page/shorva-2.png",
  },
];




const resSlider = resData.map((resItem) => `
    <div class="swiper-slide flex-slide" data-id="${resItem.id}">
            <div><img src=${resItem.resImage} alt="res-images" class="slide-img-top"></div>
            <div><img src=${resItem.imgbottom} alt="res-images" class="slide-img-bottom"></div>
    </div>

`,
  )
  .join("");

wrapper.innerHTML = resSlider;
