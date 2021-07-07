<template>
<div class="body-wrapper">

  <div class="py-4 bg-white shadow-sm text-center">
    <span @click="goto('no1')" class="me-4 list">No 1</span>
    <span @click="goto('no2')" class="me-4 list">No 2</span>
    <span @click="goto('no3')" class=" list">No 3</span>
  </div>
  
    <router-view/>

  <div class="footer bg-white shadow text-center position-absolute bottom-0 py-4">
    Created by Arieafn
  </div>

</div>
  
</template>

<script>
export default {
  methods:{
    goto (name) {
      if (this.$route.name !== name) {
        this.$router.push(
          {
            name: name
          }
        )
      }
  }
}
}
</script>


<style>
body{
  background-color: #42b983 !important;
}

#nav a.router-link-exact-active {
  color: #42b983;
}

.wrapper{
  background-color: #42b983;
}

.footer{
  width: 100%;
}

.list:hover{
  color: #42b983;
}

.list{
  transition: all 0.3s;
  cursor: pointer;
}

</style>
