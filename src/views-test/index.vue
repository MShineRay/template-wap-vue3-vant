<template>
  <div class='container'>
    <h1>test page</h1>
    <van-button type="primary" @click="testMock">axios</van-button>
    <p>response get:{{responseGet}}</p>
    <p>response post:{{responsePost}}</p>
  </div>
</template>

<script>
import { Button } from 'vant';
import { testMock, testMockGet } from '@/helper/apis'
export default {
  name: 'index.vue',
  components:{
    [Button.name]: Button
  },
  data(){
    return{
      responseGet: '',
      responsePost: ''
    }
  },
  methods:{
    testMock(){
      testMockGet({data:'get'}).then((rep)=>{
        this.responseGet = rep
      })
      testMock({data:'post'}).then((rep)=>{
        this.responsePost = rep
      })
    }
  }
}
</script>

<style scoped>

</style>
