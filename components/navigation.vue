<template>
  <header :class="{ 'scrolled-nav': scrolledNav }">
    <nav>
      <div class="branding">
        <img src="@/assets/imgs/nav/logo.png" alt="" />
      </div>
      <ul v-show="!mobile" class="navigation">
        <li><router-link class="link" :to="{ name: '' }">Home</router-link></li>
        <li><router-link class="link" :to="{ name: '' }">Mint</router-link></li>
        <li class="has-dropdown">
          <router-link class="link" :to="{ name: '' }">Learn</router-link>
          <ul class="sub-menu">
            <li><a href="#">Races</a></li>
            <li><a href="#">FAQ</a></li>
            <li><a href="#">Lore</a></li>
            <li><a href="#">Guide</a></li>
            <li><a href="#">Game Roadmap</a></li>
            <li><a href="#">Blog</a></li>
          </ul>
        </li>
        <li>
          <router-link class="link" :to="{ name: '' }">Market</router-link>
        </li>
        <li>
          <router-link class="link" :to="{ name: '' }">Token</router-link>
        </li>
      </ul>
      <div v-show="!mobile" class="valign">
        <router-link class="link valign" :to="{ name: '' }"
          >SIGN IN</router-link
        >
      </div>

      <div class="mobile-icon">
        <i
          @click="toggleMobileNav"
          v-show="mobile"
          class="fa fa-bars"
          :class="{ 'icon-active': mobileNav }"
        ></i>
      </div>
      <transition name="mobile-nav">
        <ul v-show="mobileNav" class="dropdown-nav">
          <li>
            <router-link class="link" :to="{ name: 'Home' }">Home</router-link>
          </li>
          <li>
            <router-link class="link" :to="{ name: '' }">Mint</router-link>
          </li>
          <li class="has-dropdown-mobile">
            <router-link class="link" :to="{ name: '' }">Learn</router-link>
            <ul class="sub-menu-mobile">
              <li><a href="#">Races</a></li>
              <li><a href="#">FAQ</a></li>
              <li><a href="#">Lore</a></li>
              <li><a href="#">Guide</a></li>
              <li><a href="#">Game Roadmap</a></li>
              <li><a href="#">Blog</a></li>
            </ul>
          </li>
          <li>
            <router-link class="link" :to="{ name: '' }">Market</router-link>
          </li>
          <li>
            <router-link class="link" :to="{ name: '' }">Token</router-link>
          </li>
        </ul>
        <a href=""
          ><router-link class="link" :to="{ name: '' }">Sign In</router-link></a
        >
      </transition>
    </nav>
  </header>
</template>
<script>
export default {
  name: "navigation",
  data() {
    return {
      scrolledNav: null,
      mobile: null,
      mobileNav: null,
      windowWidth: null,
    };
  },
  mounted() {
    window.addEventListener("resize", this.checkScreen);
    this.checkScreen();
    window.addEventListener("scroll", this.updateScroll);
  },
  methods: {
    toggleMobileNav() {
      this.mobileNav = !this.mobileNav;
    },
    checkScreen() {
      this.windowWidth = window.innerWidth;
      if (this.windowWidth <= 750) {
        this.mobile = true;
        return;
      }
      this.mobile = false;
      this.mobileNav = false;
      return;
    },
    updateScroll() {
      const scrollPosition = window.scrollY;
      if (scrollPosition > 50) {
        this.scrolledNav = true;
        return;
      }
      this.scrolledNav = false;
    },
  },
};
</script>

<style lang="css" scoped>
@import "https://pro.fontawesome.com/releases/v5.10.0/css/all.css";
header {
  z-index: 99;
  width: 100%;
  position: fixed;
  transition: 0.5s ease all;
  color: #fff;
  display: flex;
}
header nav ul,
header nav .link {
  font-weight: 700;
  color: #808080;
  list-style: none;
  text-decoration: none;
}

header nav .link:hover {
  color: #ffffff;
  /* border-color: #00afea; */
}
header nav .navigation {
  display: flex;
  align-items: center;
  flex: 1;
  justify-content: center;
}
header nav .valign {
  display: flex;
  align-items: center;
}

header nav .mobile-icon i {
  cursor: pointer;
  font-size: 24px;
  transition: 0.8s ease all;
}

header nav .icon-active {
  transform: rotate(180deg);
}

header nav .mobile-nav-enter-active,
header nav .mobile-nav-leave-active {
  transition: 1s ease all;
}

header nav .mobile-nav-enter-from,
header nav .mobile-nav-leave-to {
  transform: translateX(-250px);
}

header nav .mobile-nav-enter-to {
  transform: translateX(0);
}

nav {
  display: flex;
  flex-direction: row;
  align-items: center;
  align-content: space-between;
  padding: 30px 0;
  transition: 0.5s ease all;
  width: 90%;
  margin: 0 auto;
  position: relative;
}
.link {
  font-family: "Titillium Web";
  font-size: 18px;
  font-style: normal;
  line-height: 27px;
  letter-spacing: 0.1px;
  transition: 0.5s ease all;
}
li {
  padding: 20px;
  padding-left: 26px;
  padding-right: 26px;
}
.scrolled-nav nav {
  padding: 30px 0;
}
img {
  width: 53px;
  transition: 0.5s ease all;
}

.dropdown-nav {
  display: flex;
  flex-direction: column;
  position: fixed;
  width: 100%;
  z-index: 111;
  /* max-width: 250px; */
  height: 100%;
  background-color: #000;
  top: 0;
  padding-top: 100px;
  left: 0;
}

.scrolled-nav .branding img {
  width: 53px;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1),
    0 2px 4px -1px rgba(0, 0, 0, 0.06);
}
.has-dropdown > a:after {
  content: "";
  border-width: 6px 6px 0 6px;
  border-color: #808080 transparent transparent transparent;
  border-style: solid;
  display: inline-block;
  margin-top: 13px;
  margin-left: 15px;
  float: right;
}

.has-dropdown-mobile > a:after {
  content: "";
  border-width: 4px 4px 0 4px;
  border-color: #ffffff transparent transparent transparent;
  border-style: solid;
  display: inline-block;
  position: relative;
  bottom: 2px;
  margin-left: 15px;
}

.has-dropdown:hover > a:after {
  content: "";
  border-width: 0 6px 6px 6px;
  border-color: transparent transparent #ffffff transparent;
  border-style: solid;
  display: inline-block;
  margin-top: 13px;
  margin-left: 15px;
  float: right;
  transition: 0.5s ease all;
}
.has-dropdown-mobile:hover > a:after {
  content: "";
  border-width: 0 4px 4px 4px;
  border-color: transparent transparent #ffffff transparent;
  border-style: solid;
  display: inline-block;
  margin-left: 15px;
  position: relative;
  bottom: 2px;
  transition: 0.5s ease all;
}
.sub-menu {
  display: none;
  background: #222;
  padding: 12px 0px;
  min-width: 153px;
  position: absolute;
  margin-top: 14px;
  transition: height 0.5s ease all;
}
.sub-menu li {
  padding: 6px 18px;
}
.sub-menu li:hover {
  background: #e99300;
}
.sub-menu li a {
  font-family: "Titillium Web";
  font-size: 14px;
  font-style: normal;
  font-weight: 600;
  line-height: 21px;
  letter-spacing: 0em;
  text-align: left;
  color: #808080;
}
.sub-menu li:hover a {
  color: #ffffff;
}
.sub-menu-mobile {
  display: none;
  background: #000;
  padding: 12px 0px;
  min-width: 153px;
  margin: auto;
  margin-top: 14px;
  transition: height 0.5s ease all;
}
.sub-menu-mobile li {
  padding: 6px 18px;
}
.sub-menu-mobile li:hover {
  background: #e99300;
}
.sub-menu-mobile li a {
  font-family: "Titillium Web";
  font-size: 14px;
  font-style: normal;
  font-weight: 600;
  line-height: 21px;
  letter-spacing: 0em;
  text-align: left;
}
.sub-menu-mobile li:hover a {
  color: #ffffff;
}
.has-dropdown:hover > .sub-menu {
  display: block;
}
.has-dropdown-mobile:hover > .sub-menu-mobile {
  display: block;
}
.mobile-icon {
  display: flex;
  align-items: center;
  position: absolute;
  top: -55px;
  right: 24px;
  height: 100%;
  z-index: 11111;
  margin-top: 50px;
  color: #ffffff;
  transition: 1s ease all;
}
.dropdown-nav li {
  margin-left: 0;
  text-align: center;
  padding-top: 10px;
  padding-bottom: 10px;
}
.dropdown-nav li .link {
  color: #ffffff;
  font-size: 16px;
}
.dropdown-nav li .link:hover,
.dropdown-nav li .link:active {
  color: rgb(0, 153, 255);
}
.branding {
  display: flex;
  align-items: center;
  margin-top: 20px;
  z-index: 1111;
  position: absolute;
  margin: 0 auto;
}
header nav .mobile-icon i.icon-active:before {
  content: "\f00d";
}
.scrolled-nav {
  background-color: #000;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1),
    0 2px 4px -1px rgba(0, 0, 0, 0.06);
}
.scrolled-nav nav {
  padding: 8px 0;
}
@media (min-width: 1140px) {
  nav {
    max-width: 1240px;
  }
}
@media (max-width: 740px) {
  .branding > img {
    margin-top: 10px;
  }
  header {
    min-height: 80px;
  }
}
</style>
