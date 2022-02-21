<template>
<section id="hero" class="pb-10">
    <div class="container">
      <div>
         <img class="hero-logo" src="../assets/imgs/hero/beyond-earth.png" > 
      </div>
       <div class="text-container">
         <h1 class="heading">MMORPG</h1>
         <h2>BLOCKCHAIN POWERED</h2>
         <p>BEO is a Top Down PvP focused Massively MultiPlayer Online  game, powered by NFT technology on <span class="bold-p">ETHEREUM BLOCKCHAIN</span></p>
          <button>
          <span class='image'></span>
          <span class='text'>PLAY FOR FREE</span>
          </button>

          <img id="marker" src="../assets/imgs/hero/marker.png" alt="" style="width:20px; ">
       </div>
      
    </div>
</section>
</template>

<script>
export default {
    name: 'Hero',
    
}
</script>

<style lang ="scss" scoped>
  
  #hero {
    background-image: url('../assets/imgs/hero/bg.png');
    background-repeat: no-repeat;
    background-size: cover;
    object-fit: contain;
    height: 100vh;
    background-color: #000;
    display: flex;
    justify-content: center;
    
    .container{
      max-width: 500px;
      display: flex;
      flex-direction:column;
      justify-content: center;
      align-items: center;
      padding-top:100px ;
     .hero-logo{
        margin: 20px auto;
      }
    .text-container{
       display: flex;
       flex-direction: column;
       justify-content: center;
      

        .image{
          display: block;
          position: absolute;
          background:url("../assets/imgs/hero/button.png") no-repeat top left;
          width: 500px;
          height: 50px;
          left: calc(50vw - 120px);
        } 

      @keyframes fadeIn {
  0% {opacity:0;}
  100% {opacity:1;}
}

        .text{ 
          position: relative;
          /* border: 1px solid red; */
          top: 13px;
          left: -5px;
          color: #FFF;
          font-family: Poppins;
          font-style: normal;
          font-weight: bold;
          font-size: 16px;
          /* line-height: 24px; */

/* identical to box height */
text-align: center;
        }
        .text:hover{
          text-shadow: 0.15em 0.15em 0.1em #2F4F4F;
          /* transition-delay: 0.25s; */
          transition-timing-function: ease;
          animation: fadeIn linear 0.25s;
          -webkit-animation: fadeIn linear 0.25s;
          -moz-animation: fadeIn linear 0.25s;
          -o-animation: fadeIn linear 0.25s;
          -ms-animation: fadeIn linear 0.25s;
          

        }

      img {
        width: 509px;
        margin: 0 auto;
      }
      h1{
        position: relative;
        color: #FFF;
        font-weight: Bold;
        font-size: 30px;
        line-height: 140%;
        text-align: center;
        
      }

      h1:hover{
        text-shadow: 0px 3px 5px 0px #0000003D;
      }
      h1::before{
              content:"";
                position: absolute;
                top:20px;
                left:8vh;
                width: 100px;
                background-image: url("../assets/imgs/hero/before.png") ;
                
                background-repeat: no-repeat;
                height: 50px;
               
      }
       h1::after{
              content:"";
                position: absolute;
                top:20px;
                right: 8vh;
                width: 100px;
                background-image: url("../assets/imgs/hero/after.png") ;
                background-repeat: no-repeat;
                height: 50px;
               
      }

      h2{
        color: #fff;
        font-weight: Bold;
        font-size: 30px;
        line-height: 140%;
        text-align: center;
      }
      p{
        font-family: 'Poppins',sans-serif;
        font-size: 16px;
        font-weight: 400;
        display:block;
        text-align: center;
        margin-top:25px ;
        margin-bottom: 30px;
        color:#fff;
        .bold-p{
          font-family: 'Poppins',sans-serif;
          font-size: 16;
          font-weight: bold;

        }

        
      }
    

    }
    }
  
}

@media only screen and (max-width: 600px) {
  #hero {
    background-position: 44% 50%;
    .container{

      
     
      img{
        width: 265px;
        
      }

       .image{
          display: block;
          position: absolute;
          background:url("../assets/imgs/hero/button.png") no-repeat top left;
          width: 60%!important;
          height: 50px;
          left: 22vw!important;
        } 
        .text{
          top: 0px!important;
        }

    }

    h1::before{
              content:"";
                position: absolute;
                top:20px;
                left: 2vh !important;;
                width: 100px;
                background-image: url("../assets/imgs/hero/before.png") ;
                background-repeat: no-repeat;
                height: 50px;
               
      }
       h1::after{
              content:"";
                position: absolute;
                top:20px;
                left: 32vh !important;;
                width: 100px;
                background-image: url("../assets/imgs/hero/after.png") ;
                background-repeat: no-repeat;
                height: 50px;
               
      }
     
  }

}
 

</style>