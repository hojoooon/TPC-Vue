<template lang="">
  <div class="top-nav">
    <h4>TPC Information</h4>
    <b-nav tabs align="right">
      <b-nav-item href="/">Home</b-nav-item>
      <b-nav-item href="/search">Search</b-nav-item>
      <b-nav-item href="/regist">Regist</b-nav-item>
      <b-nav-item href="/about">About</b-nav-item>
    </b-nav>
  </div>
</template>
<script>
export default {
  name: "topNav"
}
</script>
<style scoped>
  .top-nav{
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-content: center;
    border-bottom: 1px solid gray;
  }
  .top-nav h4{
    text-align: center;
    margin-left: 1%;
    color: #000080;
  }
</style>