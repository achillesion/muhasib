<template>
    <section id="playToEarn">
        <div class="container">
             <div class="text-container">
                <h1>Play To Earn</h1>
                <p>BEO is set in t he near future, 2035 to be exact. The nefarious group called Illuminati took over the world with their agenda 2030. The New World Order as it was called, ushered an alien invasion with the help of a neighboring race. This invasion helped their plan to take over and decimate most of the human race.
                    5 years after the take down, there were barely any humans left. Most have been genetically modified for more than a decade through nano tech, and now are almost bionic in nature. Some of these bred humans disconnect from their programming and the hive mind, going rogue.
                </p>
                <div class="game-logo">
                   <img src="../assets/imgs/playtoearn/coin-logo.png"  width="50px" alt="">
                   <h2>Galactic Travel Token ($GTT)</h2>
                </div>
            </div>
            <div class="image">
                <img src="../assets/imgs/playtoearn/characters.png" alt="">
                
            </div>
        </div>
    </section>
</template>

<script>
export default {
    name:'PlayToEarn'
}
</script>

<style lang="scss" scoped>
#playToEarn{
        background-color: #000;
        background-image: url("../assets/imgs/playtoearn/bg.png");
        width: 100%;
        background-size: cover;
        background-repeat:no-repeat;
        background-position: center center;
        padding-top: 100px;
        color: #fff;
        min-height: 70vh;
        
        
    .container{
        margin: auto auto !important; 
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
          .image{
              flex: 1;
               margin-right:200px ;
            
            img{
                // border: 1px solid red;
                width:400px;
                display: flex;
                margin-left: 100px;
               
            }
          }
        .text-container{
            flex: 1;
            margin-left: 50px;
            color: #fff;
            h1{
                font-size: 60px;
                font-weight: 700;
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
                font-family: Poppins;
                font-style: normal;
                font-weight: normal;
                font-size: 16px;
                line-height: 180%;
                color: #FFFFFF;
                margin-top: 30px ;
                font-size: 16px;
                font-family: 'poppins';
                line-height: 180%;
                font-weight: 400;
            }

            .game-logo{
                margin-top: 30px;
                display: flex;
                h2{
                    font-family: 'poppins';
                    font-weight: 400;
                    font-size: 18px;
                    margin-top: 10px;
                    margin-left: 20px;                }
            }
        }
    }
}


//Mobile QUesries
 @media only screen and (max-width: 600px) {
  section {
      
    .container{
      flex-direction: column !important;
      .image{
          
          img{
              margin-left: 0px!important;
              margin-right:50px ;
          }
       
      }
      .text-container{
          margin-top: 20px;
          margin-left: 20px!important;
          padding: 10px 10px;
          h1{
              font-size: 28px!important;
          }
          h1::after{
                content:"";
                position: absolute;
                top: 100%;
                left: 0%;
                width: 100%;
                background-image: url("../assets/imgs/gamestories/line-mobile.png")!important ;
                object-fit: cover;
                background-repeat: no-repeat;
                height: 20px;
                margin-bottom:20px;
               
            }

        p{
            font-family: Poppins;
            font-style: normal;
            font-weight: normal;
            font-size: 16px;
            line-height: 180%;
            color: #FFFFFF;
        }
      }
    }
     
  }}
</style>