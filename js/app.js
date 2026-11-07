import { resData } from "../data/data";

const resSlider = resData.map(
  (resItem) => `
    <div class="swiper-slide ${resItem.id}">
            <div><img src=${resItem.resImage} alt="res-images"></div>
            <div><img src=${resItem.imgbottom} alt="res-images"></div>
          </div>

`,
);
