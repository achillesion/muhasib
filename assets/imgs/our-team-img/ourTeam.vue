<template>
    <section>
        <h1>Our Team</h1>

        <!--row-1-->
    <div class="player-section">
        <div class="player-details">
        <div class="player-img">
              <img src="../assets/imgs/our-team-img/player-img-1.png" alt="player-img-1">
              <img src="../assets/imgs/our-team-img/player-before-img.png" alt="player-before-img">
              </div>
              <div>
              <h3>CARLOS</h3>
              <p>FRONT END DEV</p>
              </div>
        </div>  
      
       <div class="player-details">
        <div class="player-img">
              <img src="../assets/imgs/our-team-img/player-img-2.png" alt="player-img-2">
              <img src="../assets/imgs/our-team-img/player-before-img.png" alt="player-before-img">
              </div>
              <div>
              <h3>CARLOS</h3>
              <p>FRONT END DEV</p>
              </div>
        </div> 

         <div class="player-details">
        <div class="player-img">
              <img src="../assets/imgs/our-team-img/player-img-3.png" alt="player-img-3">
              <img src="../assets/imgs/our-team-img/player-before-img.png" alt="player-before-img">
              </div>
              <div>
              <h3>CARLOS</h3>
              <p>FRONT END DEV</p>
              </div>
        </div> 

         <div class="player-details">
        <div class="player-img">
              <img src="../assets/imgs/our-team-img/player-img-4.png" alt="player-img-4">
              <img src="../assets/imgs/our-team-img/player-before-img.png" alt="player-before-img">
              </div>
              <div>
              <h3>CARLOS</h3>
              <p>FRONT END DEV</p>
              </div>
        </div> 
        
       
        </div>


      <!--row-1-->
    <div class="player-section">

       <div class="player-details">
        <div class="player-img">
              <img src="../assets/imgs/our-team-img/player-img-5.png" alt="player-img-5">
              <img src="../assets/imgs/our-team-img/player-before-img.png" alt="player-before-img">
              </div>
              <div>
              <h3>CARLOS</h3>
              <p>FRONT END DEV</p>
              </div>
        </div> 

         <div class="player-details">
        <div class="player-img">
              <img src="../assets/imgs/our-team-img/player-img-6.png" alt="player-img-6">
              <img src="../assets/imgs/our-team-img/player-before-img.png" alt="player-before-img">
              </div>
              <div>
              <h3>CARLOS</h3>
              <p>FRONT END DEV</p>
              </div>
        </div> 

         <div class="player-details">
        <div class="player-img">
              <img src="../assets/imgs/our-team-img/player-img-7.png" alt="player-img-7">
              <img src="../assets/imgs/our-team-img/player-before-img.png" alt="player-before-img">
              </div>
              <div>
              <h3>CARLOS</h3>
              <p>FRONT END DEV</p>
              </div>
        </div> 

         <div class="player-details">
        <div class="player-img">
              <img src="../assets/imgs/our-team-img/player-img-8.png" alt="player-img-8">
              <img src="../assets/imgs/our-team-img/player-before-img.png" alt="player-before-img">
              </div>
              <div>
              <h3>CARLOS</h3>
              <p>FRONT END DEV</p>
              </div>
        </div>   
        
       
        </div>
        
    </section>   
</template>

<script>
export default {
    name:'OurTeam'
}
</script>

<style lang="scss" scoped>

 section{
        //    display: flex;
        //    flex-direction: column;
        //    justify-content: center;
        //    align-items: center;
        padding: 70px 0px 0px;
          background: #081519 ;
          background-image: url("../assets/imgs/our-team-img/our-team-background.png") , linear-gradient(360deg, #000000 0%, rgba(0, 0, 0, 0) 100%);
        //   background-color: linear-gradient(360deg, #000000 0%, rgba(0, 0, 0, 0) 100%);
           background-size: cover;
           background-position: center;
          height:auto;
        //    min-height:90vh;

             h1{
                font-size: 60px;
                font-style: bold;
                color: rgba($color: #ffffff, $alpha: 1.0);
                position: relative;
                text-align: center;
                max-width: 18rem;
                margin: 0 auto;
            }
          
            h1::after{
                content:"";
                position: absolute;
                top: 100%;
                left: -30px;
                width: 100vw;
                background-image: url("../assets/imgs/coreFeatures/line.png") ;
                object-fit: cover;
                background-repeat: no-repeat;
                height: 20px;
                margin-bottom:20px;
                text-align: center;
               
            }
             
           }
          

.player-section{
    display:flex;
    justify-content:space-between;

}

.player-section:first-of-type{
    margin:100px 0;
}


.player-details {
        max-width: 273px;
    width: 100%;
//     margin: 0 20px;

//     :first-of-type {
//     margin: 0px;
// }

// :last-of-type {
//     margin: 0px;
// }

.player-img{
        position:relative;
        padding:0px;
    img{
    width:100%;

// background: linear-gradient(360deg, #E99300 -20%, rgba(0, 0, 0, 0) 92%);
}

img:last-of-type{
    position:absolute;
    bottom:-30px;
    left:0px;
}

}






 


div{
        background: #08040A;
    text-align:center;
    padding: 49px 0 49px;
        margin-top: -10px;

  h3 {
    color: #fff;
    margin-bottom: 20px;
    }

 p {
    color: #DE9635;
    font-size: 14px;
}
}



}

  
// @media only screen and (max-width: 600px) {
//   section {
//       h1{
//           font-size: 28px;
//       }

//       h1::after{
//                 content:"";
//                 position: absolute;
//                 top: 100%;
//                 left: 15%;
//                  width:188px;
//                 background-image: url("../assets/imgs/coreFeatures/line-mobile.png") ;
//                 object-fit: cover;
//                 background-repeat: no-repeat;
//                 height: 20px;
//                 margin-bottom:20px;
//                 text-align: center;
               
//             }
      
//     }
//   }





</style>