<template lang="">
  <div class="inputField">
    <div class="inputGroup">
      <b-input-group>
        <template #prepend>
          <b-dropdown text="Dropdown" variant="outline-info">
            <b-dropdown-item>Action A</b-dropdown-item>
            <b-dropdown-item>Action B</b-dropdown-item>
          </b-dropdown>
        </template>
        <b-form-input 
          class="searchBar" 
          v-model="inputVal" 
          value="" 
          type="text"
          placeholder="Search Domain"
          @keyup.enter="enter"
        >
        </b-form-input>
        <b-button variant="outline-info" v-on:click="enter">
          <b-icon icon="search" aria-hidden="true"></b-icon>
        </b-button>
      </b-input-group>
    </div>
  </div>
</template>
<script>
import gql from 'graphql-tag'
export default {
  name: 'Search',
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
  data: () => ({
    inputVal: ''
  }),
  methods: {
    enter(){
      console.log(this.$props)
      this.$router.push({name: 'cookies', params: {domain: this.inputVal}})
    }
  },
  created(){
    console.log(this.getData)
  }
}
</script>
<style scoped>
  .inputField{
    justify-content: center;
    margin-top: 20%;
    margin-left: 25%;
    width: 50%;
  }
  .searchBar{
    width: 400px;
  }
</style>