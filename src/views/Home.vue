<template lang="">
  <div>
    <h1>Welcome to TPC Information</h1>
  </div>
</template>
<script>
import gql from 'graphql-tag'
export default {
  name: 'Home',
  apollo: {
    getData: gql`query{
    getData {
        cookieData{
            domainTitle
            domain
            url
        }
        publisherData{
            publisher
            type
        }
      }
    }`
  },
  created(){
    console.log(this.getData)
  }
}
</script>
<style scoped>
  h1{
    text-align: center;
  }
</style>