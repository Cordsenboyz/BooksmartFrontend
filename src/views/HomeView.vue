<script lang="jsx" setup>
import ItemComponent from "@/components/Home/ItemComponent.vue"
import ActionBar from "@/components/Nav/ActionBar.vue";
import axios from 'axios'
</script>

<template>
  <div class="homeMain-div">
    <div class="homeContent-div">
      <ActionBar>
        <div class="searchContainer-div">
            <select placeholder="Category">
                <option>Category</option>
            </select>
            <select></select>
            <select></select>
            <select></select>
            <input type="text" placeholder="Search..." v-model="searchValue"/>
      </div>
      </ActionBar>
      <div class="itemsContainer-div">
        <ItemComponent v-for="item in searchList" :item="item" />
      </div>
    </div>
  </div>
</template>

<script lang="jsx">
export default {
  data(){
    return{
      FakeData: [
        {
        id: "",
        name: "Test",
        barCode: "234987234198"
        },
        {
        id: "",
        name: "Test",
        barCode: "47031423892423"
        },
        {
        id: "",
        name: "Test",
        barCode: "34523412345432"
        },
        {
        id: "",
        name: "Test",
        barCode: "23412354322123"
        },
        {
        id: "",
        name: "Test",
        barCode: "08623741528769"
        },
        {
        id: "",
        name: "Test",
        barCode: "23423759412836"
        },
    ],
    Data: [],
    searchValue: ""
    }
  },
  async created(){
    await axios.get('https://booksmartapi.azurewebsites.net/api/Product/GetAll').then(async response => {
      console.log(response)
      this.Data = response.data
      console.log(this.Data)
    })
  },
  computed: {
    searchList() {
      return this.Data.filter(item => {
            if(!this.searchValue) return true;
            return this.searchValue && item.name.toLowerCase().includes(this.searchValue.toLowerCase())
      });
    }
  }
}
</script>

<style lang="scss" scoped>
.homeMain-div{
  display: flex;
  justify-content: center;
  width: 100%;
}

.homeContent-div{
  display: flex;
  flex-direction: column;
  width: 100%;
}
.itemsContainer-div{
  padding: 2em 10em 2em 10em;
  display: flex;
  gap: 2em;
  flex-direction: row;
  flex-wrap: wrap;
}
.item-div{
  width: calc(20% - 2em);
  background-color: rgb(35, 128, 209);
}
.searchContainer-div{
  height: 4vh;
  gap: 0.5em;
  width: 100%;
  display: flex;
  flex-direction: row;
  padding: 0.5em;
}
</style>