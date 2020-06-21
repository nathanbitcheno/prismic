<template>
  <div id="app">
    <Header />
    <router-view />
    <footer-prismic />
  </div>
</template>

<script>
import FooterPrismic from './components/FooterPrismic.vue'
import Header from './components/Header.vue'

export default {
  name: 'App',
  components: {
    FooterPrismic,
    Header
  }
}
</script>

<style>
@import "./assets/css/resetr.css";
@import "./assets/css/prismic-edit-button.css";

#app {
  line-height: 1.8;
  color: #333;
  font-family: -apple-system,BlinkMacSystemFont,Hind Vadodara,Segoe UI,Roboto,Oxygen-Sans,Ubuntu,Cantarell,Helvetica Neue,sans-serif;
  font-size: 1.1em;
  max-width: 1000px;
  margin: auto;
}

#app p {font-family: -apple-system,BlinkMacSystemFont,Hind Vadodara,Segoe UI,Roboto,Oxygen-Sans,Ubuntu,Cantarell,Helvetica Neue,sans-serif;
}

h1,
h2,
h3,
h4,
h5,
h6 {font-family: -apple-system,BlinkMacSystemFont,Hind Vadodara,Segoe UI,Roboto,Oxygen-Sans,Ubuntu,Cantarell,Helvetica Neue,sans-serif; }
h1 {
  color: #484d52;
  font-size: 36px;
  font-weight: 400;
  line-height: 52px;
  letter-spacing: 1.14px;
}
h2 {
  color: #484d52;
  font-size: 26px;
  font-weight: 400;
  line-height: 42px;
  letter-spacing: 1.14px;
  margin-top: 30px;
}
h3 {
  font-size: 1.1em;
  font-weight: 600;
  margin-top: 20px;
}

p {
  margin: 20px 0 20px 0;
}

.wrapper {
  width: 100%;
  margin-left: auto;
  margin-right: auto;
  margin-top: 260px;
  display: flex;
  flex-wrap: wrap;
}
.article-wrapper {
  display: flex;
  flex-wrap: wrap;
  flex: 70%;
  padding-right: 20px;
}
.side-bar {
  flex: 30%;
  background-color: #eee;
  padding: 20px;
}
.postLink {
    margin: 0px 25px 50px 25px;
    flex: 30%;
    max-width: 275px;
}
@media screen and (max-width: 768px) {
  .article-wrapper {
    flex: none;
    display: block;
    width: 100%;
  }
  .side-bar {
    flex: none;
    display: block;
    width: 100%;
  }
  .postLink {
    width: 100%;
    flex: none;
  }
}
</style>
