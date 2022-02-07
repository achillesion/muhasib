<template>
    <section>
        <div class="container">
        <div class="video">
            <iframe src="https://www.youtube.com/embed/5L3wKniOnro?autoplay=1" width="600" height="400" allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </div>
        <div class="text-container">
            <h1>Game Stories</h1>
            <p>BEO is set in t he near future, 2035 to be exact. The nefarious group called Illuminati took over the world with their agenda 2030. The New World Order as it was called, ushered an alien invasion with the help of a neighboring race. This invasion helped their plan to take over and decimate most of the human race.
                5 years after the take down, there were barely any humans left. Most have been genetically modified for more than a decade through nano tech, and now are almost bionic in nature. Some of these bred humans disconnect from their programming and the hive mind, going rogue.</p>
        </div>
    </div>
    </section>
</template>

<script>
export default {
    name:'GameStories'
}
</script>

<style lang="scss" scoped>
section{
     background-color: #000;
        background-image: url("../assets/imgs/gamestories/bg.png");
        background-size: cover;
        background-repeat:no-repeat;
        background-position: center center;
        width:100%;
        display: flex;
        justify-content: center;
        padding-top: 100px;
    .container{
       
       
        color: #fff;
        min-height: 135px;
        display: flex;
        padding: 10px 100px;
            
        
        .text-container{
            padding: 20px 50px;
            color: #fff;
            h1{
                font-size: 60px;
                font-style: bold;
                font-family: 'Poppins';
                color: rgba($color: #ffffff, $alpha: 1.0);
                position: relative;
            }
          
            h1::after{
                content:"";
                position: absolute;
                top: 100%;
                left: 0%;
                width: 100%;
                background-image: url("../assets/imgs/gamestories/line.png") ;
                object-fit: cover;
                background-repeat: no-repeat;
                height: 20px;
                margin-bottom:20px;
               
            }
            p{  
                margin-top: 30px ;
                font-size: 16px;
                font-family: 'poppins';
                line-height: 180%;
                font-weight: 400;
            }
        }
    }
}

 @media only screen and (max-width: 600px) {
  section {
      
    .container{
      flex-direction: column;
      padding: 10px 10px;
      .video{
          
          iframe{
                   width: 100%;
          }
       
      }
      .text-container{
          padding: 10px 10px;
          h1{
              font-size: 28px;
          }
          h1::after{
                content:"";
                position: absolute;
                top: 100%;
                left: 0%;
                width: 100%;
                background-image: url("../assets/imgs/gamestories/line-mobile.png") ;
                object-fit: cover;
                background-repeat: no-repeat;
                height: 20px;
                margin-bottom:20px;
               
            }
      }
    }
     
  }}
</style>