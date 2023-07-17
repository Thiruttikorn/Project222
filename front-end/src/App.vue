<template>
  <nav>
    <router-link to="/home">Home</router-link> |
    <router-link to="/">Login</router-link> |
    <router-link to="/about">About</router-link>
  </nav>
  <router-view />
</template>

<style>
body {
        background-color: skyblue !important;
    }
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: white;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: white;
}

nav a.router-link-exact-active {
  color: #121513;
}

@tailwind base;
@tailwind components;
@tailwind utilities;

</style>
