<script>
  export default {
    name: 'App'
  }
</script>

<template>
  <div class="hello">
    <div>
      <div style="display: block">
        <h1 class="title">drawing is fun.</h1>
        <p class="subtitle">
          Colorue is a free, open source, drawing app for iOS
        </p>
        <a href="https://apps.apple.com/us/app/colorue/id1621782369?itsct=apps_box_badge&amp;itscg=30200" style="display: inline-block; overflow: hidden; border-radius: 13px; width: 250px; height: 83px;"><img src="https://tools.applemediaservices.com/api/badges/download-on-the-app-store/white/en-us?size=250x83&amp;releaseDate=1651363200&h=c5ba75a29d99223b00fd73cafdea2b90" alt="Download on the App Store" style="border-radius: 13px; width: 250px; height: 83px;"></a>
      </div>
    </div>
    <br>
    <img alt="Screenshots" src="./assets/screenshots.png" class="screenshot-img">
    <img alt="Screenshots" src="./assets/screenshots-mobile.png" class="screenshot-img-mobile">
    <ul class="social-links">
      <li>
        <a href="https://www.instagram.com/colorue/" target="_blank" class="social-link">
          <font-awesome-icon :icon="['fab', 'instagram']" size="2x"/>
        </a>
      </li>
      <li>
        <a href="https://github.com/colorue/ios" target="_blank" class="social-link">
          <font-awesome-icon :icon="['fab', 'github']" size="2x"/>
        </a>
      </li>
    </ul>
  </div>
</template>

<style>
  @import url('https://fonts.googleapis.com/css2?family=Gochi+Hand&display=swap');

  #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    margin-top: 60px;
  }

  .app-store-btn {
    cursor: pointer;
  }

  .title {
    font-size: 80px;
    margin-bottom: 0;
    font-weight: normal;
    font-family: 'Gochi Hand', cursive;
  }

  .subtitle {
    margin-top: -4px;
    font-size: 20px;
    opacity: 0.7;
  }

  .screenshot-img {
    max-width: 100%;
    display: none;
    margin: auto;
  }

  .screenshot-img-mobile {
    max-width: 100%;
    margin: auto;
  }

  @media (min-width: 768px) {
    h1 {
      font-size: 100px;
    }

    .subtitle {
      font-size: 24px;
    }

    .screenshot-img-mobile {
      display: none;
    }

    .screenshot-img {
      display: block;
    }
  }


  h3 {
    margin: 40px 0 0;
  }

  ul {
    list-style-type: none;
    padding: 0;
  }

  li {
    display: inline-block;
    margin: 0 10px;
  }

  a {
    color: black;
  }

  .social-link {
    color: blue;
    cursor: pointer;
    opacity: 1.0;
  }

  .social-link:hover {
    opacity: 0.7;
  }

  .social-links {
    margin-top: 32px;
    margin-bottom: 64px;
  }
</style>
