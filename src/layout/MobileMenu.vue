<template>
  <ul class="nav nav-mobile-menu">

    <li class="nav-item">
      <li class="nav-link">
          <button @click="onLogout" class="btn btn-danger">
                Logout
            </button>
      </li>
    </li>
  </ul>
</template>
<script>
import {
    mapState,
    mapActions
} from 'vuex'
import router from '../routes/router'

  export default {
    name: 'mobile-menu',
    methods:{
      ...mapActions('account', ['logout']),
      onLogout(){
        this.logout();
        router.push({path: 'login'})
      }
    }
  }
</script>
<style>
</style>
