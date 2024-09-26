<script setup lang="jsx">
import { RouterLink, RouterView } from 'vue-router';
import { auth, userName } from '@/store.js'
import NavComponent from '@/components/Nav/NavComponent.vue';
import NavDealComponent from '@/components/Nav/NavDealsComponent.vue';
import AddComponent from '@/components/Adds/AddComponent.vue';
import { HubConnectionBuilder } from "@microsoft/signalr";
</script>

<template>
  <header>
    <NavDealComponent /> 
    <NavComponent />
  </header>

  <main>
    <AddComponent class="addComponent"/>
    <RouterView class="routerView"/>
    <AddComponent class="addComponent"/>
  </main>
</template>

<script lang="jsx">
export default {
  created(){
    var token = this.$cookies.get("token")
    if(token){
      auth.IsAuthenticated = true;
      var base64Url = token.split('.')[1];
      var base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
      var jsonPayload = decodeURIComponent(atob(base64).split('').map(function(c) {
          return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
      }).join(''));

      var tokenValues = JSON.parse(jsonPayload)
      userName.value = tokenValues.name
    }

    /*const connection = new HubConnectionBuilder()
        .withUrl("https://booksmartapi.azurewebsites.net/Store")
        .build();

    connection.start();
    
    connection.on("Test", data => {
      console.log(data);
    })*/
  }
}
</script>

<style scoped>
main{
  width: 100%;
  min-height: calc(100vh - 5.5rem);
  display: flex;
}

.addComponent{
  width: 10%;
}

.routerView{
  width: 80%;
}


</style>
