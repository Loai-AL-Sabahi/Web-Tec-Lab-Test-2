<template>
  <div class="navbar">
    <div class="icon">
      <h1 class="logo">W.Tech.</h1>
    </div>
    <div class="menu">
      <ul>
        <li><router-link to="/">Home</router-link></li>
        <li><router-link to="/about">About</router-link></li>
        <li><router-link to="/profile">Profile</router-link></li>
        <li><router-link to="/photos">Photos</router-link></li>
      </ul>
    </div>
    <div class="search">
      <input class="srch" type="text" v-model="searchQuery" @input="emitSearch" placeholder="Search photos..." />
    </div>
  </div>
</template>

<script>
export default {
  name: 'AppNavbar',
  data() {
    return {
      searchQuery: ''
    }
  },
  methods: {
    emitSearch() {
      this.$emit('search', this.searchQuery)
    }
  }
}
</script>

<style scoped>
.navbar {
  width: 100%;
  height: 75px;
  margin: auto;
}

.icon {
  width: 200px;
  float: left;
  height: 70px;
}

.logo {
  color: #fc8d1e;
  font-size: 20px;
  font-family: Cambria;
  padding-left: 50px;
  float: left;
  padding-top: 10px;
  margin-top: 5px
}

.menu {
  width: 600px;
  float: left;
  height: 70px;
}

ul {
  float: left;
  display: flex;
  justify-content: center;
  align-items: center;
}

ul li {
  list-style: none;
  margin-left: 30px;
  margin-top: 27px;
  font-size: 14px;
}

ul li a {
  text-decoration: none;
  color: white;
  font-family: Arial, Helvetica, sans-serif;
  font-weight: bold;
  transition: 0.4s ease-in-out;
}

ul li a:hover {
  color: orange;
}

.search {
  width: 330px;
  float: left;
  margin-left: 20px;
}

.srch {
  font-family: 'Times New Roman', Times, serif;
  width: 150px;
  height: 30px;
  background: transparent;
  border: 1px solid orange;
  margin-top: 20px;
  color: white;
  font-size: 16px;
  float: left;
  padding: 10px;
  border-radius: 5px;
}

.btn {
  width: 80px;
  height: 30px;
  background: #ff7200;
  border: 2px solid #ff7200;
  margin-top: 20px;
  color: #fff;
  font-size: 15px;
  border-bottom-right-radius: 5px;
  transition: 1.2s ease;
  cursor: pointer;
}

.btn:hover {
  color: black;
}

.btn:focus {
  outline: none;
}

.srch:focus {
  outline: none;
}
</style>