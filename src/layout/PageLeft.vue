<template>
 <nav class="left-nav">
  <ul>
    <a href="#!"><i class="fa fa-facebook fa-2x"></i></a>
    <a href="#!"><i class="fa fa-twitter fa-2x"></i></a>
    <a href="#!">
      <li><i class="fa fa-linkedin fa-2x"></i></li>
    </a>
    <a href="#!">
      <li><i class="fa fa-dribbble fa-2x"></i></li>
    </a>
    <a href="#!">
      <li><i class="fa fa-codepen fa-2x"></i></li>
    </a>
    <a href="#!">
      <li><i class="fa fa-twitch fa-2x"></i></li>
    </a>
  </ul>
</nav>
</template>

<style scoped>
.left-nav {
  position: absolute;
}
nav {
  align-items: stretch;
  display: flex;
  flex-direction: column;
  height: 100vh;
  width: 10%;
}

nav ul a {
  width: 100%;
  height: 16.667vh;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  text-decoration: none;
  color: #fff;
  -webkit-transition: 0.2s;
  transition: 0.2s;
  transition-timing-function: linear;
  -webkit-transition-timing-function: linear;
}

nav ul a:nth-child(1) {
  background: #3B5998;
}

nav ul a:nth-child(2) {
  background: #5EA9DD;
}

nav ul a:nth-child(3) {
  background: #0177B5;
}

nav ul a:nth-child(4) {
  background: #F26798;
}

nav ul a:nth-child(5) {
  background: #444444;
}

nav ul a:nth-child(6) {
  background: #6441A5;
}

nav ul a:nth-child(1):hover {
  border-right: 20px solid rgba(0, 0, 0, 0.3);
  width: 110%;
  opacity: 0.9;
}

nav ul a:nth-child(2):hover {
  border-right: 20px solid rgba(0, 0, 0, 0.3);
  width: 110%;
  opacity: 0.9;
}

nav ul a:nth-child(3):hover {
  border-right: 20px solid rgba(0, 0, 0, 0.3);
  width: 110%;
  opacity: 0.9;
}

nav ul a:nth-child(4):hover {
  border-right: 20px solid rgba(0, 0, 0, 0.3);
  width: 110%;
  opacity: 0.9;
}

nav ul a:nth-child(5):hover {
  border-right: 20px solid rgba(0, 0, 0, 0.3);
  width: 110%;
  opacity: 0.9;
}

nav ul a:nth-child(6):hover {
  border-right: 20px solid rgba(0, 0, 0, 0.3);
  width: 110%;
  opacity: 0.9;
}

@media screen and (max-width: 800px) {
  nav {
    width: 20%;
  }
}
</style>
