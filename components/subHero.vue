<template>
    <section>
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
section{
    background-color: #222;
    background-image: url("../assets/imgs/subhero/particles.png");
    background-size: 2000px!important;
    background-repeat:no-repeat;
    color: #fff;
    min-height: 135px;
    display: flex;
    justify-content: center;
    
    h1{
        text-align: center;
        font-size: 30px;
        font-style: 700;
    }
    p{
        font-family: 'poppins';
        font-style: medium;
        font-size: 16px;
        color: #808080;
    }
    span{
        color: #E99300;

    }
    .container{
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        padding: 10px 70px;
        .box{
            padding: 20px;
        }
    }
}

  @media only screen and (max-width: 600px) {
  section {
      background-size: 1500px;
    .container{
      flex-direction: column;
    }
     
  }
}

</style>