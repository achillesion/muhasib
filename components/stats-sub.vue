<template>
    <section id="stats-Sub">
        <div class="container">
            <h2 class="heading">BEO Stats</h2>
        </div>
        <div class="container">
            
            <div class="price">
                <h4>BEO Price <span> +1.5%</span></h4>
                <h1>$2,522,90</h1>
            </div>

            
            <img src="../assets/imgs/subhero/yellow-box.svg" alt="Yellow Box">

            <div class="rewards">
                 <h4>Daily Rewards </h4>
                <h1>65.816 BEO</h1>
            </div>
           
             <img src="../assets/imgs/subhero/yellow-box.svg" alt="Yellow Box">

            <div class="supply">
                 <h4>CIRCULATING SUPPLY</h4>
                <h1>78,231,5433 BEO</h1>
            </div>
        </div>
    </section>
</template>

<script>
export default {
    name:'StatsSub'
}
</script>

<style lang="scss" scoped>
section{
    background-color: #222;
}
#stats-Sub{
    background-color: #222;
    color: #fff;
    min-height: 222px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin-top:25px ;

    h4{
                font-family: Poppins;
                font-style: normal;
                font-weight: 500;
                font-size: 16px;
                line-height: 140%;
                /* or 22px */


                color: #808080;
    }
    
    .container .heading{
        font-family: Titillium Web;
        font-style: normal;
        font-weight: bold;
        font-size: 30px;
        line-height: 46px;
        /* identical to box height */

        text-align: center;

        color: #FFFFFF;
    }
     .container{
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        margin: 0px auto;
        .price{
            
        }

        }
        .box{
            padding: 20px;
        }

        h1{
            text-align: center;
            font-size: 30px;
            font-weight: 700;
        }
        p{
            font-family: 'poppins';
            font-weight: 400;
            font-size: 16px;
            line-height: 140%;
            color: #808080;
            text-align: center;
        }
        span{
            color: #32A071;


        }
    }

   
   

  @media only screen and (max-width: 600px) {
  #stats-Sub {
      background-size: 1500px;
    .container{
      flex-direction: column;
      margin: 20px 0px 20px 0px;
      h1{
          font-size: 24px;
      }
    }
     
  }
}

</style>