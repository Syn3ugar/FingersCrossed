<template>
  <div id="home">
    <nav-bar class="home-nav">
      <div slot="center">主页</div>
    </nav-bar>
    <home-item v-for="item in users">
      <div slot="left">
        <img :src="httpRequestUrl + item.picture" alt="" slot="left">
      </div>
      <div slot="center">
        <p>{{item.username}}</p>
        <p>{{item.sex}}</p>
        <p>{{item.age}}岁</p>
      </div>
      <div slot="right">
        <p>{{item.id}}</p>
        <p>打卡情况：已打卡</p>
      </div>
    </home-item>
  </div>
</template>

<script>
  import NavBar from "components/common/navbar/NavBar"
  import HomeItem from "./HomeItem"

  import {request} from "network/request"

  export default {
    name: "Home",
    components: {
      NavBar,
      HomeItem
    },
    data () {
      return {
        users: {},
        httpRequestUrl: 'http://127.0.0.1:3000/'
      }
    },
    mounted() {
      request({
        url: '/users'
      }).then(res => {
        console.log(res)
        this.users = res
      }).catch(err => {
        // console.log(err)
      })
    }
  }
</script>

<style scoped>
  .home-nav {
    background-color: var(--color-tint);
    color: #FFF;
  }
</style>
