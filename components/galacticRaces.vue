<template>
    <section class="champions-section home-champions">
            <h1 class="ornate-races">Galactic Races</h1>
            <div class="champions-section__container">
               <div>
                  <div class="swiper-container swiper-container-horizontal">
                     <div class="swiper-wrapper">
                        <div class="swiper-slide" data-swiper-slide-index="0">
                           <div class="champion Drogoz">
                              <a class="active-link" href="/champions/drogoz"></a>
                              <div class="champion__image"><img alt="champion" src="../assets/imgs/galacticraces/1.png"></div>
                              <div class="about">
                                 <div class="role"><i class="role-icon icon-damage"></i></div>
                                 <div class="champion__name">Drogoz</div>
                              </div>
                           </div>
                        </div>
                        <div class="swiper-slide" data-swiper-slide-index="1">
                           <div class="champion Tyra">
                              <a class="active-link" href="/champions/tyra"></a>
                              <div class="champion__image"><img alt="champion" src="../assets/imgs/galacticraces/2.png"></div>
                              <div class="about">
                                 <div class="role"><i class="role-icon icon-damage"></i></div>
                                 <div class="champion__name">Tyra</div>
                              </div>
                           </div>
                        </div>
                        <div class="swiper-slide" data-swiper-slide-index="2">
                           <div class="champion Vora">
                              <a class="active-link" href="/champions/vora"></a>
                              <div class="champion__image"><img alt="champion" src="../assets/imgs/galacticraces/3.png"></div>
                              <div class="about">
                                 <div class="role"><i class="role-icon icon-flanker"></i></div>
                                 <div class="champion__name">Vora</div>
                              </div>
                           </div>
                        </div>
                        <div class="swiper-slide" data-swiper-slide-index="2">
                           <div class="champion Vora">
                              <a class="active-link" href="/champions/vora"></a>
                              <div class="champion__image"><img alt="champion" src="../assets/imgs/galacticraces/4.png"></div>
                              <div class="about">
                                 <div class="role"><i class="role-icon icon-flanker"></i></div>
                                 <div class="champion__name">Vora</div>
                              </div>
                           </div>
                        </div>
                        <div class="swiper-slide" data-swiper-slide-index="2">
                           <div class="champion Vora">
                              <a class="active-link" href="/champions/vora"></a>
                              <div class="champion__image"><img alt="champion" src="../assets/imgs/galacticraces/4.png"></div>
                              <div class="about">
                                 <div class="role"><i class="role-icon icon-flanker"></i></div>
                                 <div class="champion__name">Vora</div>
                              </div>
                           </div>
                        </div>
                        <div class="swiper-slide" data-swiper-slide-index="2">
                           <div class="champion Vora">
                              <a class="active-link" href="/champions/vora"></a>
                              <div class="champion__image"><img alt="champion" src="../assets/imgs/galacticraces/4.png"></div>
                              <div class="about">
                                 <div class="role"><i class="role-icon icon-flanker"></i></div>
                                 <div class="champion__name">Vora</div>
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </section>
</template>

<script>



export default {
    name:'PlayToWin',
    mounted(){
        const swiper = new Swiper('.swiper-container', {
    // Optional parameters
    slidesPerView:"auto",centeredSlides:!0,loop:!0,loopedSlides:40,autoplay:!1,speed:500,slideToClickedSlide:!0,pagination:!1,spaceBetween:0,navigation:!1,breakpoints:{600:{spaceBetween:0}}});

    },
}
</script>

<style lang="scss" scoped>



.home-champions {
    background: #081519;
    display: flex;
    flex-direction: column;
    height: 100vh;
    margin: 0 auto;
    overflow: hidden;
    padding-top: 50px;
}
h1.ornate-races {
    position: relative;
    color: #fff;
    font-family: 'poppins';
    font-size: 60px;
    font-weight: 700;
    line-height: 4.6rem;
    letter-spacing: .02rem;
    margin: 0px auto;
    // padding: 0 1rem;
    text-align: center;
    white-space: nowrap;
    
}
h1.ornate-races:after {
    top: 180%;
    -webkit-transform: translateY(-50%);
    transform: translateY(-50%);
}

h1.ornate-races:after {
    content: "";
    display: block;
    width: 350px;
    height:10px;
    position: absolute;
    margin-left: 75px;
    margin-top: -40px;
    background-image: url(../assets/imgs/galacticraces/line.png);
   background-repeat: no-repeat;
}

h1.ornate-races i {
    color: hsla(0,0%,100%,.1);
    font-size: 12rem;
    left: 50%;
    top: 50%;
    -webkit-transform: translate(-50%,-50%);
    transform: translate(-50%,-50%);
    position: absolute;
}

@media only screen and (max-width: 600px) {
  section {
      h1.ornate-races{
          font-size: 28px;
         top: 0!important;
      }

      h1.ornate-races::after{
                content:"";
                position: absolute;
                top: 120px;
                left: -17%;
                 width:183px;
                background-image: url("../assets/imgs/coreFeatures/line-mobile.png") ;
                object-fit: cover;
                background-repeat: no-repeat;
                height: 20px;
                margin-bottom:20px;
                text-align: center;
               
            }
      
    }
  }


.icon-champions:before {
    content: "\E905";
}
.champions-section__container {
    margin: 14rem 0;
    overflow: visible;
}
.swiper-container {
    margin-left: auto;
    margin-right: auto;
    position: relative;
    overflow: hidden;
    z-index: 1;
}
.home-champions .swiper-container {
    overflow: visible;
    margin-left: -1.2rem;
}
.home-champions .swiper-slide-active, .home-champions .swiper-slide-duplicate-active {
    box-shadow: 0 0 60px 1px rgb(0 0 0 / 75%);
    margin-right: 0!important;
    margin-top: -5rem!important;
    z-index: 111;
    position: relative;
}
.home-champions .swiper-slide {
    width: 30.6rem!important;
    margin: 0 1.2rem;
}
.home-champions .champion {
    background: #081519;
    overflow: hidden;
    border: 1px solid #e99300;
    cursor: pointer;
    height: 30rem; // Side walay saray boxes ki height
    opacity: .4;
    transition: all 0.3s ease-in-out;
}
.home-champions .swiper-slide-active .champion, .home-champions .swiper-slide-duplicate-active .champion {
    background: #111111;
    height: 40rem;
    opacity: 1;
    overflow: initial;
    pointer-events: none;
    transition: all 0.5s ease;
}
.home-champions .swiper-slide-active a, .home-champions .swiper-slide-duplicate-active a {
    pointer-events: auto;
}
.home-champions a {
    pointer-events: none;
}
.home-champions .swiper-slide-active .champion .active-link, .home-champions .swiper-slide-duplicate-active .champion .active-link {
    display: block;
}
.home-champions .champion .active-link {
    display: none;
    height: 100%;
    position: absolute;
    width: 100%;
}
.home-champions .swiper-slide-active .champion .active-link, .home-champions .swiper-slide-duplicate-active .champion .active-link {
    display: block;
}
.home-champions .champion__image {
    display: flex;
    height: 75rem;
    justify-content: center;
    position: relative;
    top: 5rem;
    transition: top .2s ease;
    width: auto;
    z-index: -1;
}
.home-champions .swiper-slide-active .champion__image, .home-champions .swiper-slide-duplicate-active .champion__image {
    top: -5rem;
    z-index: 999;
}
.home-champions .champion__image img {
    height: 50%;
    width: auto;
    max-width: none;
}
.home-champions .champion .about {
    align-items: center;
    display: flex;
    justify-content: center;
    position: relative;
    top: -1rem;
}
.home-champions .champion .about .role {
    border-right: 1px solid hsla(0,0%,100%,.35);
    font-size: 3.5rem;
    padding-right: 2rem;
}
.home-champions .champion__name {
    display: none;
}
.home-champions .swiper-slide-active .champion__name, .home-champions .swiper-slide-duplicate-active .champion__name {
    display: block;
    text-align: center;
    text-transform: uppercase;
}
.home-champions .champion .about .champion__name {
    font-size: 2rem;
    padding-left: 2rem;
    letter-spacing: 2px;
   
}
.home-champions .swiper-slide {
    width: 30.6rem!important;
    margin: 0 1.2rem;
}


/*********** icons *************/

.icon-cosplay:before {
	content: "\E907"
}

.icon-blimp:before {
	content: "\E906"
}

.icon-support:before {
	content: "\E90B"
}

.icon-modes:before {
	content: "\E902"
}

.icon-gem:before {
	content: "\E903"
}

.icon-community:before {
	content: "\E904"
}

.icon-champions:before {
	content: "\E905"
}

.icon-flanker:before {
	content: "\E908"
}

.icon-front-line:before {
	content: "\E909"
}

.icon-damage:before {
	content: "\E90A"
}

.icon-xbox:before {
	content: "\E900"
}

.icon-playstation:before {
	content: "\E901"
}

.icon-news:before {
	content: "\E90C"
}

.icon-lore:before {
	content: "\E91F"
}

.icon-notes:before {
	content: "\E922"
}

.icon-star:before {
	content: "\E9D9"
}

.icon-cross:before {
	content: "\EA0F"
}

.icon-checkmark:before {
	content: "\EA10"
}

.icon-play-round:before {
	content: "\EA15"
}

.icon-play:before {
	content: "\EA1C"
}

.icon-google:before {
	content: "\EA88"
}

.icon-facebook:before {
	content: "\EA90"
}

.icon-instagram:before {
	content: "\EA92"
}

.icon-twitter:before {
	content: "\EA96"
}

.icon-youtube:before {
	content: "\EA9D"
}

.icon-twitch:before {
	content: "\EA9F"
}

.icon-steam:before {
	content: "\EAAC"
}

.icon-apple:before {
	content: "\EABE"
}

.icon-android:before {
	content: "\EAC0"
}

.icon-windows:before {
	content: "\EAC1"
}
</style>