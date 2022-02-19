<template>
    <header :class="{'scrolled-nav':scrolledNav}">
        <nav>
           <div class="branding">
                <img src="@/assets/imgs/nav/logo.png" alt="">
            </div> 
            <ul v-show="!mobile" class="navigation">
                <li><router-link class="link active" :to="{name:''}">Home</router-link></li>
                <li><router-link class="link" :to="{name:''}">Mint</router-link></li>
                <li><router-link class="link" :to="{name:''}">Learn</router-link></li>
                <li><router-link class="link" :to="{name:''}">Market</router-link></li>
                <li><router-link class="link" :to="{name:''}">Token</router-link></li>
                
            </ul>
            <div v-show="!mobile" class="valign">
                <router-link class="link valign" :to="{name:''}">SIGN IN</router-link>
            </div>
            
            <div class="mobile-icon">
                <i @click="toggleMobileNav" v-show="mobile" class="fa fa-bars" :class="{'icon-active':mobileNav}"></i>
            </div>
            <transition name="mobile-nav">
                <ul v-show="mobileNav" class="dropdown-nav">
                <li  class="active"><router-link class="link" :to="{name:'Home'}">Home</router-link></li>
                <li><router-link class="link" :to="{name:''}">Mint</router-link></li>
                <li><router-link class="link" :to="{name:''}">Learn</router-link></li>
                <li><router-link class="link" :to="{name:''}">Market</router-link></li>
                <li><router-link class="link" :to="{name:''}">Token</router-link></li>

            </ul>
            <a href=""><router-link class="link" :to="{name:''}">Sign In</router-link></a>
            </transition>
        </nav>
    </header>
</template>

<script>
export default {
    name:"navigation",
    data() {
        return{
            scrolledNav:null,
            mobile: null,
            mobileNav:null,
            windowWidth:null,
        };
    },
    mounted(){
        window.addEventListener("resize",this.checkScreen);
        this.checkScreen();
        window.addEventListener("scroll",this.updateScroll);

    },
    methods: {
        toggleMobileNav(){
            this.mobileNav = !this.mobileNav
        },
        checkScreen(){
            this.windowWidth = window.innerWidth;
            if(this.windowWidth <= 750){
                this.mobile = true;
                return;
            }
            this.mobile  = false;
            this.mobileNav = false;
            return;
        },
        updateScroll(){
            const scrollPosition = window.scrollY;
            if(scrollPosition > 50){
                this.scrolledNav =true;
                return;
            }
            this.scrolledNav = false;
        },
    },
    
}
</script>

<style lang="scss" scoped>
@import 'https://pro.fontawesome.com/releases/v5.10.0/css/all.css';
header{
    // background-color: rgba($color: #000000, $alpha: 0.8);
    z-index: 99;
    width: 100%;
    position: fixed;
    transition: 0.5s ease all;
    color: #fff;
     display: flex;
    
    nav{
       display: flex;
       flex-direction: row;
       align-content:space-between ;
       padding: 12px 0;
       transition: 0.5s ease all;
       width: 100%;
       margin:  0 auto;
       position: relative;
      
      
      @media (min-width: 1140px) {
           max-width: 1330px;
           
       }

      

      

       ul,
       .link{
        font-weight:700;
        color: #808080;
        list-style: none;
        text-decoration: none;
       }

        li{
            font-style: bold;
            text-transform: uppercase;
            padding: 16px;
            margin-left:16px;
        }

        li .active{
             color: #ffffff;
        }

        .link{
            font-size: 14px;
            transition: 0.5s ease all;
            padding-bottom: 4px;
            border-bottom: 1px solid transparent;
        
        
        &:hover{
            color: #ffffff;
            // border-color: #00afea;
        }
        }

        .branding{
            display: flex;
            align-items: center;
            margin-top: 20px;
            position: absolute;
            margin: 0 auto;
            
            img{
                width: 50px;
                transition: 0.5s ease all;
                margin-left: 20px;
            }
        }

        .navigation{
            display: flex;
            align-items: center;
            flex:1;
            justify-content: center;
        }
        .valign{
            display: flex;
            align-items: center;
            margin-right:50px ;
        }

        .mobile-icon{
            display: flex;
            align-items: center;
            position: absolute;
            top:-55px;
            right: 24px;
            height: 100%;
            margin-top: 50px;
            transition: 1s ease all; 

            i{
                cursor: pointer;
                font-size: 24px;
                transition: 0.8s ease all;
            }

        }

        .icon-active{
            transform: rotate(180deg);
        }

        .dropdown-nav{
            display: flex;
            flex-direction: column;
            position: fixed;
            width: 100%;
            max-width: 250px;
            height: 100%;
            background-color: #E99300;
            top:0;
            left: 0;

            li{
                margin-left:0;
                .link{
                    color:#000;
                }
            }
        }

        .mobile-nav-enter-active,
        .mobile-nav-leave-active{
            transition: 1s ease all;
        }

        .mobile-nav-enter-from,
        .mobile-nav-leave-to{
            transform: translateX(-250px);
        }

        .mobile-nav-enter-to{
            transform: translateX(0)
        }


    }   //nav 
} //header

.scrolled-nav{
    background-color: #000;

    box-shadow: 0 4px 6px -1px rgba(0,0,0,0.1), 0 2px 4px -1px rgba(0,0,0,0.06);
    nav{
        padding:8px 0;
    }
    .branding{
        img{
            margin-top: 10px;
            width: 40px;
            box-shadow: 0 4px 6px -1px rgba(0,0,0,0.1), 0 2px 4px -1px rgba(0,0,0,0.06);
        }
    }
}

@media (min-width:1200px){

}

 @media(max-width: 740px){
           .branding > img{
               margin-top: 10px;
           }
           header{
               min-height: 80px;
           }
           
       }
</style>