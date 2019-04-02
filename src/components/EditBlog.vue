<template>
  <div id="edit-blog">
    <h2>编辑博客</h2>
    <form v-if="!submmited">
      <label>博客标题</label>
      <input type="text" v-model="blog.title" required>

      <label>博客内容</label>
      <textarea v-model="blog.content"></textarea>
      <div id="checkboxes">
        <label>vue.js</label>
        <input type="checkbox" value='vue.js' v-model="blog.categries">
        <label>node.js</label>
        <input type="checkbox" value='node.js' v-model="blog.categries">
        <label>react.js</label>
        <input type="checkbox" value='react.js' v-model="blog.categries">
        <label>anglular4.js</label>
        <input type="checkbox" value='anglular4.js' v-model="blog.categries">
      </div>
      <label>作者</label>
      <select name="author" id="" v-model="blog.author">
        <option v-for="(author, index) in authors" v-bind:key="index">{{author}}</option>
      </select>
      <button v-on:click.prevent="post">编辑博客</button>
    </form>

    <div v-if="submmited">
      <h3>您的编辑博客发布成功</h3>
    </div>
      <hr>
    <div id="preview">
      <h3>博客纵览</h3>
      <p>博客标题：{{blog.title}}</p>
      <p>博客内容：</p>
      <p>{{blog.content}}</p>
      <p>博客分类：</p>
      <ul>
        <li v-for="(category, index) in blog.categries" v-bind:key="index">{{category}}</li>
      </ul>
    </div>
    <p>作者：{{blog.author}}</p>
  </div>

</template>

<script>
import axios from 'axios';
export default {
  name:'add-blog',
  data(){
    return {
      id:this.$route.params.id,
      blog:{},
      authors:['george','ada','alice'],
      submmited: false,
    }
  },
  methods:{
    post:function (event) {
      axios.put('https://my-blog-1f8f8.firebaseio.com/post/'+this.id+'.json',this.blog).
        then( (data)=> {
          // console.log(data)
          this.submmited = true
      })
    },
    fetchDate() {
      axios.get('https://my-blog-1f8f8.firebaseio.com/post/'+this.id+'.json').
      then( (response)=> {
        // console.log(response)
        this.blog = response.data
      })
    }
  },
  created() {
    this.fetchDate();
  },
}
</script>

<style scoped>
  #edit-blog *{
    box-sizing: border-box
  }
  #edit-blog{
    max-width: 600px;
    margin: 20px auto;
    padding: 20px;
  }
  label{
    display: block;
    margin: 20px 0 10px;
  }
  input[type='text'],textarea,select{
    display: block;
    width: 100%;
    padding: 8px;
  }
  textarea{
    height: 200px;
  }
  #checkboxes label{
    display: inline-block;
    margin-top: 0;
  }
   #checkboxes input{
     display: inline-block;
     margin-right: 10px;
   }
   select[name='author']{
     height: 30px;
     border: 1px solid #CCC;
   }
   button{
     display: block;
     margin: 20px 0;
     background-color: crimson;
     color: #FFF;
     border: 0;
     padding: 14px;
     border-radius: 4px;
     font-size: 18px;
     cursor: pointer;
   }
   #preview{
     padding: 10px 20px;
     border: 1px dotted #ccc;
     margin: 30px 0;
   }
   h3{
     margin-top: 10px;
   }
</style>
