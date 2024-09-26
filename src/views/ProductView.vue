<script lang="jsx" setup>
import ActionBar from "@/components/Nav/ActionBar.vue";
import { auth } from '@/store.js'
import axios from 'axios'
</script>

<template>
  <div class="productMain-div">
    <ActionBar>
      <font-awesome-icon :icon="['fas', 'arrow-left']" @click="this.$router.go(-1)"/>
    </ActionBar>
    <div class="itemMain-div">
      <div class="itemDisplay-div">
        <div class="bookImages-div">
          <img
            v-for="(image, index) in bookimages"
            :key="index"
            :src="image"
            :class="{'active-thumbnail': image === selectedImage}"
            @click="selectImage(image)"
          />
        </div>
        <div class="selectedImage-div">
          <img :src="selectedImage"/>
        </div>
      </div>
      <div class="itemAction-div">
        <div class="itemContainer-div">
          <div>
            <p class="itemHeader">{{ book.name }}</p>
            <p class="itemHeader">{{ book.count }}</p>
          </div>
          <div>
            <p class="itemAuthor">{{ book.author }}</p>
            <p class="itemCategory">{{ book.category }}</p>
            <p class="itemPages">{{ book.pages }}</p>
            <p v-for="genre in book.genres" class="itemGenre">{{ genre }}</p>
          </div>
          <div>
            <p class="itemDescription">{{ book.description }}</p>
          </div>
          <div class="itemButtonContainer-div">
            <p v-if="!auth.IsAuthenticated">Login to buy</p>
            <button :disabled="!auth.IsAuthenticated" @click="BuyOrder()">Buy {{ book.price }}$</button>
            <button :disabled="!auth.IsAuthenticated" @click="RentOrder()">Rent {{ book.rentPrice }}$ Weekly</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="jsx">
export default {
  data() {
    return {
      book: {},
      bookimages: [        
        "../Book.jpeg",
        "../Book.jpeg",
        "../Book.jpeg",
        "../Book.jpeg",
      ],
      selectedImage: "../Book.jpeg",
    }
  },
  async created(){
    await axios.get(`https://booksmartapi.azurewebsites.net/api/Product/Get?barcode=${this.$route.params.barcode}`)
      .then(async response => {
        this.book = response.data
      }
    )
  },
  methods: {
    BuyOrder(){
      localStorage.setItem("buyCart", JSON.stringify(this.book))
    },
    RentOrder(){
      localStorage.setItem("rentCart", JSON.stringify(this.book))
    }
  }
}
</script>

<style lang="scss" scoped>
.productMain-div{
  display: flex;
  flex-direction: column;
  width: 100%;
}
.itemDisplay-div{
  width: 55%;
  height: 100%;
}
.itemAction-div{
  width: 30%;
  background-color: var(--surface-color);
  height: 100%;
  padding: 1em;
  border: 1px solid black;
  border-radius: 0.5em;
}
.itemDisplay-div{
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 2rem;
  padding: 0.5em;
}

.selectedImage-div img {
  width: 80%;
  height: 100%;
  object-fit: cover;
  border: 1px solid black;
  border-radius: 0.5em;
}
.bookImages-div {
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.bookImages-div img {
  width: 8rem;
  height: 100%;
  object-fit: cover;
  cursor: pointer;
  transition: border 0.3s ease;
  border-radius: 0.5em;
}

.bookImages-div img.active-thumbnail {
  border: 2px solid #42b983;
}

.bookImages-div img:hover {
  border: 2px solid #aaa;
}
.itemMain-div{
  padding: 1em;
  display: flex;
  flex-direction: row;
  justify-content: center;
  gap: 2em;
  height: 100%;
}
.itemButtonContainer-div{
  padding: 0.5em;
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 0.5em;
  margin-top: auto;

  p{
    font-size: 3ch;
    color: var(--deal-color)
  }

  button{
    width: 100%;
    padding: 0.5em;
    text-align: start;
    border: 1px solid black;
    background-color: transparent;
    font-size: 3ch;
    border-radius: 0.5em;
  }
}
.itemContainer-div{
  height: 100%;
}
svg{
    width: 2rem;
    height: 2rem;
  }
</style>