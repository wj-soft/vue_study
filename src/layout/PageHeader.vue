<template>
  <header class="main-header">
    <h1 class="logo">
      Title
    </h1>
    <nav class="navigation">
      <ul>
        <li :class="{ 'active': v.name === $route.name }" v-for="(v, i) in menu" :key="i">
          <a :href="v.route"> {{v.name}} </a>
        </li>
      </ul>
    </nav>
  </header>
</template>

<script>
import menuApi from '@/mock/menu.json'

export default {
  data () {
    return {
      menu: null
    }
  },
  mounted () {
    this.menu = menuApi.result
  }
}
</script>

<style scoped>
body {
  margin: 0;
  height: 1000px;
  color: #a7a7a7;
  font-family: open sans, arial, sans-serif;
  font-weight: 300;
}
a {
  text-decoration: none;
}
*,
*:hover,
*:focus{
  outline: none;
}
ul {
  margin: 0;
  padding: 0;
  text-align: center;
}
li {
  display: inline;
}
p {
  margin-top: 5px;
  font-family: Old Standard TT;
  text-align: center;
  line-height: 1.5em;
}
ul {
  margin-bottom: 1.5em;
}
strong {
  color: #333;
}
button {
  padding: 1em 1.5em;
  display: inline-block;
  position: relative;
  background: #03A9F4;
  color: white;
  border: 0;
  color: white;
  font-size: 12px;
  text-transform: uppercase;
  letter-spacing: .05em;
  cursor: pointer;
}
button:hover,
button:focus{
  background: #333;
}

button:hover:after,
button:focus:after{
  margin: 0 auto;
  width: 8px;
  height: 8px;
  display: block;
  content:"";
  position: absolute;
  right: 0;
  bottom: -4px;
  left: 0;
  background: #333;
  transform: rotate(45deg);
}

/* main header */

.navigation ul li a {
  margin: 0 15px;
  display: inline-block;
  color: inherit;
  font-size: 14px;
  font-weight: normal;
  text-transform: capitalize;
  letter-spacing: .05em;
}

.navigation ul li a:hover,
.navigation ul li.active a {
  color: red;
}

/* page header */
.page-header {
  padding: 50px 0;
  position: relative;
  background-image: url(http://youngdigital.co/wp-content/uploads/2012/06/awhCbhLqRceCdjcPQUnn_IMG_0249.jpg);
  background-repeat: no-repeat;
  background-position: center top;
  background-size: cover;
  background-color: rgba(0,0,0,.05);
  background-attachment: fixed;
}

h1,h2,h3 {
  padding-bottom: 14px;
  position: relative;
  color: #333;
  font-weight: 300;
  text-align: center;
  letter-spacing: .025em;
}

h2 {
  padding-bottom: 0;
  margin: 0;
}
.page-header h1 {
  color: white;
}
h1:after {
  margin: 0 auto;
  width: 50px;
  height: 7px;
  display: block;
  content: "";
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  background: #03A9F4;
  transition: all .3s;
}

h1:hover:after {
  width: 100px;
}
.portfolio-grid {
  margin: 25px auto;
  width: 600px;
}

/* portfolio */
.portfolio {
  padding: 50px 0;
}
.portfolio-grid img {
  padding: 10px;
  width: 33.333%;
  float: left;
  box-sizing :border-box;
}

.portfolio-wrap {
  margin: 0 -10px;
  overflow: hidden;
}
</style>
