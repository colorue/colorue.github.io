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
        <a href="/ios" target="_blank" class="app-store-btn">
          <img alt="App Store Logo" src="./assets/app-store-badge.png" width="180">
        </a>
      </div>
    </div>
    <br>
    <img alt="Screenshots" src="./assets/screenshots.png" class="screenshot-img">
    <img alt="Screenshots" src="./assets/screenshots-mobile.png" class="screenshot-img-mobile">
    <ul class="social-links">
      <li>
        <a href="https://www.facebook.com/colorueApp" target="_blank" class="social-link">
          <font-awesome-icon :icon="['fab', 'facebook']"/>
        </a>
      </li>
      <li>
        <a href="https://www.instagram.com/colorue/" target="_blank" class="social-link">
          <font-awesome-icon :icon="['fab', 'instagram']"/>
        </a>
      </li>
      <li>
        <a href="https://www.icloud.com/sharedalbum/#B0V532ODWbzUyI" target="_blank" class="social-link">
          <font-awesome-icon icon="images"/>
        </a>
      </li>
      <li>
        <a href="https://github.com/colorue/ios" target="_blank" class="social-link">
          <font-awesome-icon :icon="['fab', 'github']"/>
        </a>
      </li>
      <li>
        <a href="https://discord.gg/mntPxavfTZ" target="_blank" class="social-link">
          <font-awesome-icon :icon="['fab', 'discord']"/>
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
  }

  .screenshot-img-mobile {
    max-width: 100%;
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
    cursor: pointer;
  }

  .social-link:hover {
    opacity: 0.7;
  }

  .social-links {
    margin-bottom: 60px;
  }
</style>
