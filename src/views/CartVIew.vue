<script setup lang="jsx">
import ActionBar from '@/components/Nav/ActionBar.vue';
import CartItemComponent from '@/components/Cart/CartItemComponent.vue'
import axios from 'axios';
</script>

<template lang="">
    <div class="cartMain-div">
        <ActionBar>
            <font-awesome-icon :icon="['fas', 'arrow-left']" @click="this.$router.go(-1)"/>
        </ActionBar>
        <div class="cartContent-div">
            <div class="cartOrders-div">
                <p>Buy Orders:</p>
                <div>
                    <CartItemComponent v-for="item in cartBuyItems" :item="item"/>
                </div>
                <p>Rent Orders:</p>
                <div>
                    <CartItemComponent v-for="item in cartRentItems" :item="item"/>
                </div>
            </div>
            <div class="cartAction-div">
                <p></p>
                <button @click="Checkout()">Checkout</button>
            </div>
        </div>
    </div>
</template>

<script lang="jsx">
export default {
    data(){
        return{
            cartBuyItems: [],
            cartRentItems: [],
            orderObject: {
                productBarCodes: [],
                delivery: false
            }
        }
    },
    created(){
        var localBuyCartItems = JSON.parse(localStorage.getItem("buyCart"))
        var localRentCartItems = JSON.parse(localStorage.getItem("rentCart"))

        this.cartBuyItems.push(localBuyCartItems);
        this.cartRentItems.push(localRentCartItems);
    },
    methods:{
        async Checkout(){
            this.cartBuyItems.forEach(product => {
                console.log(product)
                this.orderObject.productBarCodes.push(product.barCode)
            });
            

            await axios.post('https://booksmartapi.azurewebsites.net/Order/Create', this.orderObject, {
                headers: { Authorization: `Bearer ${this.$cookies.get('token')}` }
            }).then(async response => {
                console.log(response)
                localStorage.clear();
            })
        }
    }
}
</script>

<style lang="scss" scoped>
.cartMain-div{
    width: 100%;
}

svg{
    width: 2rem;
    height: 2rem;
  }

.cartContent-div{
    display: flex;
    flex-direction: row;
    height: calc(100% - 4rem);
    width: 100%;
    padding: 0.5em;
    gap: 1em;
}

.cartAction-div{
    width: 30%;
    height: 50%;
    border: 1px solid black;
    border-radius: 0.5em;
    padding: 0.5em;
}

.cartOrders-div{
    width: 70%;
    height: 100%;
    border: 1px solid black;
    border-radius: 0.5em;
    padding: 0.5em;
}
</style>