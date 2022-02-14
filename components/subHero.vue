<template>
    <section id="subHero">
        <div class="container">
            <div class="box">
                <h1>500<span> +</span></h1>
                <p>Active Users</p>
            </div>
            <img src="../assets/imgs/subhero/yellow-box.svg" alt="Yellow Box">
            <div class="box">
                <h1>More than <span>1000</span></h1>
                <p>Collectible Characters</p>
            </div>
            <img src="../assets/imgs/subhero/yellow-box.svg" alt="Yellow Box">
            <div class="box">
                <h1>5000<span> +</span></h1>
                <p>More members</p>
            </div>
        </div>
    </section>
</template>

<script>
export default {
    name:'SubHero'
}
</script>

<style lang="scss" scoped>

#subHero{
    background-color: #222;
    background-image: url("../assets/imgs/subhero/particles.png");
    background-size: 2000px!important;
    background-repeat:no-repeat;
    color: #fff;
    min-height: 148px;
    display: flex;
    justify-content: center;
    // padding: 0px 100px;
    
     .container{
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        margin: 0px 230px;
       
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
            color: #E99300;

        }
    }

   
   
}

  @media only screen and (max-width: 600px) {
  #subHero {
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