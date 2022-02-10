<template>
    <section>
         <h1 class="ornate">Our Team</h1>

        <div v-show="!mobile">
            <div  v-show="!mobile" class="player-section">
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
                        <h3>BASIL MOUNTIAN</h3>
                        <p>MARKETING</p>
                        </div>
                    </div> 

                    <div class="player-details">
                    <div class="player-img">
                        <img src="../assets/imgs/our-team-img/player-img-3.png" alt="player-img-3">
                        <img src="../assets/imgs/our-team-img/player-before-img.png" alt="player-before-img">
                        </div>
                        <div>
                        <h3>ANDIRUTZ</h3>
                        <p>UX DESIGNER</p>
                        </div>
                    </div> 

                    <div class="player-details">
                    <div class="player-img">
                        <img src="../assets/imgs/our-team-img/player-img-4.png" alt="player-img-4">
                        <img src="../assets/imgs/our-team-img/player-before-img.png" alt="player-before-img">
                        </div>
                        <div>
                        <h3>GHOSTRUNNER</h3>
                        <p>UI DESIGNER</p>
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
                        <h3>GRACE</h3>
                        <p>UI DESIGNER</p>
                        </div>
                    </div> 

                    <div class="player-details">
                    <div class="player-img">
                        <img src="../assets/imgs/our-team-img/player-img-6.png" alt="player-img-6">
                        <img src="../assets/imgs/our-team-img/player-before-img.png" alt="player-before-img">
                        </div>
                        <div>
                        <h3>NICK LEODEON</h3>
                        <p>UX RESEARCH</p>
                        </div>
                    </div> 

                    <div class="player-details">
                    <div class="player-img">
                        <img src="../assets/imgs/our-team-img/player-img-7.png" alt="player-img-7">
                        <img src="../assets/imgs/our-team-img/player-before-img.png" alt="player-before-img">
                        </div>
                        <div>
                        <h3>LEONA CHRIST</h3>
                        <p>PROJECT MANAGER</p>
                        </div>
                    </div> 

                    <div class="player-details">
                    <div class="player-img">
                        <img src="../assets/imgs/our-team-img/player-img-8.png" alt="player-img-8">
                        <img src="../assets/imgs/our-team-img/player-before-img.png" alt="player-before-img">
                        </div>
                        <div>
                        <h3>MADRUNNERZ</h3>
                        <p>CEO OF BEYOND EARTH</p>
                        </div>
                    </div>   
        
       
        </div>

        </div>
    
        
    </section>   
</template>

<script>
export default {
    name:'OurTeam',
     data() {
        return{
            
            mobile: null,
            
        };
    },
    mounted(){
        window.addEventListener("resize",this.checkScreen);
        this.checkScreen();

    },
    methods: {
       
        checkScreen(){
            this.windowWidth = window.innerWidth;
            if(this.windowWidth <= 750){
                this.mobile = true;
                return;
            }
            this.mobile  = false;
            return;
        },
}}
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

        h1.ornate {
    position: relative;
    color: #fff;
    font-family: 'poppins';
    font-size: 60px;
    font-weight: 700;
    line-height: 4.6rem;
    letter-spacing: .02rem;
    margin: 0 auto ;
    text-align: center;
    
}
h1.ornate:after {
    top: 180%;
    -webkit-transform: translateY(-50%);
    transform: translateY(-50%);
}

h1.ornate:after {
    content: "";
    display: block;
    width: 57.8rem;
    height: 5rem;
    position: absolute;
    background-image: url(../assets/imgs/galacticraces/line.png);
   background-repeat: no-repeat;
    right: 11rem;
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
    font-weight: 700;
    font-size: 16px;
    }

 p {
    color: #DE9635;
    font-size: 14px;
}
}



}

  
@media only screen and (max-width: 600px) {
  section {
      h1.ornate{
          font-size: 28px;
      }

      h1.ornate::after{
                content:"";
                position: absolute;
                top: 100%;
                left: 30%;
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





</style>