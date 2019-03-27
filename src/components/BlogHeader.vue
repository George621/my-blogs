<template>
  <nav>
    <ul>
      <li>
        <router-link to='/' exact>博客</router-link>
        <router-link to='/add' exact>写博客</router-link>
      </li>
    </ul>
  </nav>
</template>

<script>
export default {
  name:'blogheader'
}
</script>

<style scoped>
  ul{
    list-style: none;
    text-align: center;
    margin: 0;
  }
  li{
    display: inline-block;
    margin: 0 10px;
  }
  a{
    display:inline-block;
    color: FFF;
    padding: 12px;
    border-radius: 5px;
    text-decoration: none;
  }
  nav{
    background: crimson;
    padding: 30px 0;
    margin-bottom: 40px;
  }
  .router-link-active{
    background: rgba(255,255,255,0.8);
    color: #444;
  }
</style>
