<template>
    <section id="stats">
        <div class="container-stats">
            <div class="row-1">
                <div class="col-1">
                    <article>
                        <h2>Total Stacked</h2>
                    <h1>11,76,00 BEO</h1>
                    <p>$23B</p>
                        <img src="../assets/imgs/stats/coin-logo.png" alt="" width="200px">
                    </article>
                    
                </div>
                <div class="col-2">
                    <article>
                         <h2>Total Holders</h2>
                    <h1>200%</h1>
                    <p>BEO</p>
                         <img src="../assets/imgs/stats/coin-logo-white.png" alt="" width="200px">
                    </article>
                   
                </div>   
            </div>
        </div>
    </section>
</template>

<script>
export default {
    name:'Stats'
}
</script>

<style lang="scss" scoped>

#stats{
    display: flex;
    flex-direction: column;
    
    .container-stats{
        display: flex;
        flex-direction: column;
        background-color: #000;

        article{
                min-height: 221px;
                padding-top: 40px;
                padding-left:150px ;
            }

        .row-1{
            display: flex;
            justify-content: space-around;

            

            .col-1{
                flex: 1;
                background-color:#222222 ;
                color: #fff;
                position: relative;
                overflow: hidden;
              
                img{
                    float: right;
                    position: absolute;
                    top:25px;
                    right: 0;
                }
               
               
            }
            .col-2{

                flex: 1;
                color: #fff;
                background-color:hsl(0, 0%, 13%) ;
                margin-left: 25px;
                position: relative;
                overflow: hidden;

           
                img{
                    position: absolute;
                    top: 25px;
                    right: 0;
                }
                
            }
            
        }

        .row-2{
             
                background-color:#222222 ;
                color: #fff;
                position: relative;
                overflow: hidden;
                margin-top: 25px;



        }

         h2{
                   font-family: Titillium Web;
                    font-style: normal;
                    font-weight: bold;
                    font-size: 30px;
                    line-height: 46px;
                    /* identical to box height */

                    text-align: left;

                    color: #FFFFFF;


               }

               h1{
                   font-family: Titillium Web;
                    font-style: normal;
                    font-weight: bold;
                    font-size: 48px;
                    line-height: 73px;
                    /* identical to box height */

                    text-align: left;

                    color: #FFFFFF;

               }
               
               p{
                    font-family: Poppins;
                    font-style: normal;
                    font-weight: 500;
                    font-size: 18px;
                    line-height: 140%;
                    text-align: left;
                    color: #32A071;
            }
    }
}



@media only screen and (max-width: 600px) {


h1{
    font-size: 24px!important;
    font-family: Titillium Web;
    font-style: normal;
    font-weight: bold;
    line-height: 37px;
}

h2{
    font-size: 18px!important;
}

p{

}

article{
    padding-left: 10px!important;
    padding-top: 20px!important;
}

        .col-1,.col-2{
            img{
                width: 70px;
                position: absolute;
                top: 105px!important;
                right: -20px!important;
    }

        }

        .col-2{
    }
    
}

</style>