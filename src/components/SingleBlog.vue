<template>
  <div id="single-blog">
    <h1>{{blog.title}}</h1>
    <article>{{blog.content}}</article>
    <p>作者： {{blog.author}}</p>
    <p>分类：</p>
    <ul>
      <li v-for="(category, index) in blog.categries" :key ="index">{{category}}</li>
    </ul>
    <button v-on:click="delSingleBlog">删除</button>
    <router-link :to="'/edit/'+ id">编辑</router-link>
    <!-- <button v-on:click="editSingleBlog">编辑</button> -->

  </div>
</template>

<script>

export default {
  name: 'single-blog',
  data() {
    return {
      id: this.$route.params.id,
      blog:{}
    }
  },
  created() {
    this.$http.get('https://my-blog-1f8f8.firebaseio.com/post/'+ this.id + '.json')
    .then(function (data) {
      return data.json();
    }).then(function (data) {
      this.blog = data;
    })
  },
  methods: {
    delSingleBlog(){
      this.$http.delete('https://my-blog-1f8f8.firebaseio.com/post/'+ this.id + '.json').
      then(respones=>{
        this.$router.push({path:'/'})
      })
    },
    editSingleBlog(){
      // this.$http.
    }
  },
}
</script>

<style>
  #single-blog{
    max-width: 960px;
    margin: 0 auto;
    padding: 20px;
    background: #eee;
    border: 1px dotted #aaa;
  }
</style>
