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
          <a href="#" class="button ribbon-outset borderr">Play for Free</a>
          <img src="../assets/imgs/hero/marker.png" alt="" style="width:20px; ">
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
      
     img{
        width: 509px;
        /* border: 1px solid red; */
        margin: 73px auto;
      }
    .text-container{
       display: flex;
       flex-direction: column;
       justify-content: center;
      
      img{
        width: 509px;
        margin: 0 auto;
      }
      h1{
        color: #FFF;
        font-weight: Bold;
        font-size: 30px;
        line-height: 140%;
        text-align: center;
        
      }

      h1::before{
              content:"";
                position: absolute;
                top:480px;
                left: 20px;
                width: 100px;
                background-image: url("../assets/imgs/hero/before.png") ;
                
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

        color:#fff;
        .bold-p{
          font-family: 'Poppins',sans-serif;
          font-size: 16;
          font-weight: bold;

        }
      }
      /* Custom Button */
          .button {
            position: relative;
            display: block;
            background: transparent;
            z-index: 1;
            width: 300px;
            height: 80px;
            line-height: 65px;
            text-align: center;
            font-size: 16px;
            font-style: bold;
            text-decoration: none;
            text-transform: uppercase;
            color: #ffffff;
            margin: 40px auto;
            font-family: Poppins;
            box-sizing: border-box;
            box-shadow: 0 4px 6px -1px rgba(0,0,0,0.1), 0 2px 4px -1px rgba(0,0,0,0.06);
          }
          .button:hover{
            text-shadow: 2px 2px 5px #ffffff;
          }
          .button:before,
          .button:after {
            position: absolute;
            content: '';
            width: 300px;
            left: 0px;
            height: 27px;
            z-index: 99;
          }

          .button:before {
            transform: perspective(15px) rotateX(3deg);
          }
          .button:after {
            top: 35px;
            transform: perspective(15px) rotateX(-3deg);
          }

          /* Button Border Style */

          .button.borderr:before,
          .button.borderr:after {
            background-color: #E99300;
            z-index: -1;
            border: 4px solid #ffffff;
          }
          .button.borderr:before {
            border-bottom: none; /* to prevent the border-line showing up in the middle of the shape */
          }
          .button.borderr:after {
            border-top: none; /* to prevent the border-line showing up in the middle of the shape */
          }

          /* Button hover styles */

          .button.borderr:hover:before,
          .button.borderr:hover:after {
            background: #E99300;

          }
          .button.borderr:hover {
            color: rgb(0, 0, 0);
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

    }
     
  }
}


 

</style>