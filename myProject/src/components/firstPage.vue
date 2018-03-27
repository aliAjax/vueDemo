<template>
    <div>
      <input type="text" v-model="msg">
      <h1>{{msg}}</h1>
      <!-- v-on===@ 事件 -->
      <button v-on:click="doBtn" value="doBtn">doBtn</button>
      <!-- v-html 模板 -->
      <div v-html="rawHtml"></div>
      <!-- v-bind===:bind 属性 -->
      <span v-bind:title="message">
              Hover show time
      </span>
      <!-- v-if和v-else用法 -->
      <div v-bind:class="{active:isActive}">
          <p v-if="seen">Now you see me</p>
       <p v-else>look at me</p>
      </div>
       
      <!-- v-for迭代 -->
      <div>
          <ol>
            <li v-for="(item, index) in todos" v-bind:key="index">
              {{ item.text }}
            </li>
          </ol>
      </div>
      <componentDemo />
    </div>
</template>

<script>
import componentDemo from "./app/componentDemo";
export default {
  name: 'FirstPage',
  data () {
    return {
      msg: '',
      rawHtml:"<h1>hello world</h1>",
      message:new Date(),
      seen:true,
      todos:[
        {text:"A"},
        {text:"B"},
        {text:"C"},
      ],
      isActive:true
    }
  },
  methods:{
    doBtn:function(){
      this.seen=!this.seen
      this.isActive=!this.isActives
    },   
},
components: {
       componentDemo
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
button{
  width: 80px;
  height: 80px;
}
.active{
  color: yellow
}
</style>
