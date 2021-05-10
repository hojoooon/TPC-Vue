<template lang="">
  <div class="data-field">
    <div class="domain-inform">
      <h2 class="domain-title">{{ this.getCookieData[0].domainTitle }}</h2>
      <a v-bind:href="this.getCookieData[0].url">
        <h3 class="domain-url">{{ this.getCookieData[0].url }}</h3>
      </a>
    </div>
    <div class="cookie-inform">
      <div>
        <h3>Cookies (Total: {{ this.getCookieData[0].cookie.length }}, UpdatedDate: {{ this.getCookieData[0].updatedDate}})</h3>
      </div>
      <div class="table-field">
        <b-table 
          striped hover 
          :items="this.getCookieData[0].cookie" 
          :fields="fields"
          class="table table-bordered"
          id="my-table"
          :per-page="perPage"
          :current-page="currentPage"
          :small=true
        ></b-table>
        <b-pagination
          class="pagination"
          v-model="currentPage"
          :total-rows="rows"
          :per-page="perPage"
          aria-controls="my-table"
        ></b-pagination>
      </div>
    </div>
    
    <!-- <p>{{getCookieData[0].cookie}}</p> -->
  </div>
</template>
<script>
import gql from 'graphql-tag'
const getCookieDataQuery = gql`
  query($domain: String!){ 
    getCookieData(domain: $domain) {
      updatedDate
      domainTitle
      url
      cookie {
        name
        conn
        connTLD
        publisher
        value
        id
        type
    }
  }
}`
export default {
  name: 'cookies',
  props: {
    domain: String
  },
  apollo: {
    getCookieData: {
      query: getCookieDataQuery,
      variables(){
        return {
          domain: this.$props.domain
        }
      }
    }
  },
  data: () => ({
      perPage: 15,
      currentPage: 1,
      fields: [
        {
          key: 'id',
          sortable: false
        },
        {
          key: 'name',
          sortable: true
        },
        {
          key: 'conn',
          sortable: false
        },
        {
          key: 'connTLD',
          sortable: true
        },
        {
          key: 'publisher',
          sortable: true,
        },
        {
          key: 'type',
          sortable: true
        }
      ],
      getCookieData: [],
  }),
  computed: {
    rows(){
      // console.log(this.getCookieData[0].cookie.length)
      return this.getCookieData[0].cookie.length
    },
    // cookieData: function(){
    //   for(let i=0; i < this.getCookieData[0].cookie.length; i++){
    //     if(this.getCookieData[0].cookie[i].name !== null){
    //       this.getCookieData[0].cookie[i].name.slice(0,10)
    //     }
    //     if(this.getCookieData[0].cookie[i].conn !== null){
    //       console.log(typeof this.getCookieData[0].cookie[i].conn)
    //       this.getCookieData[0].cookie[i].conn.slice(0,20)
    //     }
    //   }
    //   console.log(this.getCookieData[0].cookie)
    //   return this.getCookieData
    // }
  },
  created(){
    for(let i=0; i < this.getCookieData[0].cookie.length; i++){
      if(this.getCookieData[0].cookie[i].name !== null){
        this.getCookieData[0].cookie[i]["name"] = this.getCookieData[0].cookie[i].name.slice(0,10)
      }
      if(this.getCookieData[0].cookie[i].conn !== null){
        console.log(typeof this.getCookieData[0].cookie[i].conn)
        this.getCookieData[0].cookie[i]["conn"] = this.getCookieData[0].cookie[i].conn.slice(0,35)
      }
    }
    console.log(this.$props.domain)
    console.log(this.getCookieData)
    return this.getCookieData
  }
}

</script>
<style scoped>
  .domain-inform {
    position: relative;
    display: flex;
    align-items: baseline;
    flex-direction: row;
    flex-wrap: nowrap;
    padding-left: 5%;
    padding-top: 3%;
  }
.domain-title {
  /* display: inline; */
  vertical-align: bottom;
  text-align: justify;
  font-weight: 700;
  font-size: 34px;
  color: #000080;
  /* width: 200px; */
}

.domain-url {
  color: #000080;
  /* width: 200px; */
  font-size: 18px;
  padding-left: 15px;
}

a{
  text-decoration: none;
}

.domain-url:hover{
  color: #ccccff;
}

.cookie-inform {
  padding-left: 5%;
  padding-top: 2%;
}

.cookie-inform h3{
  font-size: 28px;
  color: #000080;
}

.table-field{
  padding-top: 1%;
}

.table{
  text-align: center;
  width: 95%;
  font-size: 20px;
  border-collapse: collapse;
}

tr{
  height: 15px;
}

.pagination{
  top: 1.5%;
  margin-left: 40%;
}

</style>