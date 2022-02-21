<template>
  <section id="gameStories">
    <div class="container">
      <div class="video">
        <span class="frame"></span>
        <iframe
          src="https://www.youtube.com/embed/5L3wKniOnro?autoplay=1"
          width="608"
          height="100%"
          allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
      </div>
      <div class="text-container">
        <h1>Game Stories</h1>
        <p>
          BEO is set in t he near future, 2035 to be exact. The nefarious group
          called Illuminati took over the world with their agenda 2030. The New
          World Order as it was called, ushered an alien invasion with the help
          of a neighboring race. This invasion helped their plan to take over
          and decimate most of the human race. 5 years after the take down,
          there were barely any humans left. Most have been genetically modified
          for more than a decade through nano tech, and now are almost bionic in
          nature. Some of these bred humans disconnect from their programming
          and the hive mind, going rogue.
        </p>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "GameStories",
};
</script>

<style lang="scss" scoped>
#gameStories {
  background-color: #000;
  background-image: url("../assets/imgs/gamestories/bg.png");
  width: 100%;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center center;
  padding-top: 100px;
  color: #fff;
  min-height: 575px;

  .container {
    margin: 20px auto !important;
    padding-bottom: 100px;
    display: flex;
    flex-direction: row;
    iframe {
      z-index: -1;
      padding-top: 20px;
      padding-left: 10px;
      height: 328px;
    }
    .frame {
      display: block;
      background: url("../assets/imgs/gamestories/frame.png");
      background-repeat: no-repeat;
      position: absolute;
      width: 675px;
      height: 500px;
      z-index: 10;
    }

    .text-container {
      margin-left: 50px;
      color: #fff;
      h1 {
        font-size: 60px;
        font-weight: 700;
        font-family: "Poppins";
        color: rgba($color: #ffffff, $alpha: 1);
        position: relative;
      }

      h1::after {
        content: "";
        position: absolute;
        top: 100%;
        left: 0%;
        width: 100%;
        background-image: url("../assets/imgs/gamestories/line.png");
        object-fit: cover;
        background-repeat: no-repeat;
        height: 20px;
        margin-bottom: 20px;
      }
      p {
        font-family: Poppins;
        font-style: normal;
        font-weight: normal;
        font-size: 16px;
        line-height: 180%;
        color: #ffffff;
        margin-top: 30px;
        font-size: 16px;
        font-family: "poppins";
        line-height: 180%;
        font-weight: 400;
      }
    }
  }
}

@media only screen and (max-width: 600px) {
  section {
    .container {
      flex-direction: column !important;
      .video {
        //   flex: 1;
        iframe {
          padding-top: 5px !important;
          margin-left: 12px !important;
          width: 340px;
          height: 186px !important;
        }
        .frame {
          margin-left: 12px !important;
          background-image: url("../assets/imgs/gamestories/mobile-frame.png") !important;
          display: block;
          background-repeat: no-repeat;
          position: absolute;
          width: 340px !important;
          height: 100% !important;
          z-index: 100;
        }
      }
      .text-container {
        margin-top: 20px;
        margin-left: 12px !important;
        padding: 10px 10px;
        h1 {
          font-size: 28px !important;
        }
        h1::after {
          content: "";
          position: absolute;
          top: 100%;
          left: 0%;
          width: 100%;
          background-image: url("~/assets/imgs/gamestories/line-mobile.png") !important ;
          object-fit: cover;
          background-repeat: no-repeat;
          height: 20px;
          margin-bottom: 20px;
        }

        p {
          font-family: Poppins;
          font-style: normal;
          font-weight: normal;
          font-size: 16px;
          line-height: 180%;
          color: #ffffff;
        }
      }
    }
  }
}
</style>
