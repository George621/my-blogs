<template>
  <div id="show-blogs" v-theme:column>
     <!-- v-theme:column="'narrow'" -->
    <h1>博客总览</h1>
    <input type="text" placeholder="search" v-model="search">
    <div class="single-blog" v-for="(blog, index) in filteredBlogs" :key="index">
     <router-link v-bind:to="'/blog/'+blog.id" >
       <h3 v-rainbow>{{blog.title | to-uppercase}}</h3>
       <article>{{blog.content | snippet}}</article>
     </router-link>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
export default {
  name:'show-blogs',
  data(){
    return {
      blogs:[],
      search:''
    }
  },
  created() {
    axios.get('https://my-blog-1f8f8.firebaseio.com/post.json')
    .then(function (data) {
      return data.data
    }).then( (data)=> {
      let blogsArray = []
      for( let key in data){
        data[key].id= key;
        blogsArray.push(data[key])
      }
      this.blogs = blogsArray
    })
  },
  computed: {
    filteredBlogs:function () {
      return this.blogs.filter((blog)=>{
        return blog.title.match(this.search);
      })
    }
  },
  filters:{
    // "to-uppercase":function (val) {
    //   return val.toUpperCase();
    // },
    toUppercase(val) {
      return val.toUpperCase();
    },
    snippet (val) {
      return val.slice(0,100) + '...'
    }
  },
  directives:{
    "rainbow":{
      bind(el,binding,vnode){
        el.style.color='#' + Math.random().toString().slice(2,8);
      }
    }
  }
}
</script>

<style scoped>
  #show-blogs{
    max-width: 800px;
    margin: 0 auto;
  }
  .single-blog{
    padding: 20px;
    margin: 20px 0;
    box-sizing: border-box;
    background-color: #EEE;
    border: 1px dotted #aaa;

  }
  #show-blogs a{
    color: #444;
    text-decoration: none;
  }
  input[type='text']{
    padding: 8px;
    width: 100%;
    box-sizing: border-box;
  }
</style>
