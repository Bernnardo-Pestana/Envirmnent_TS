<template>
  <div>
    <NavBar  @goto="scroll($event)" />
    <div class="container" >
      <SearchList  @SelectedCountry="selectedCountry($event)"  :List="CountryList" />

      <LoadingPage v-if="Loading"  class="align"/>
      <BarChart :Data_chart="DataMonth" :Country_Name="Selected.Name"  :Type="Selected.Type" v-if="also"  :key="ChartPagekey"/>
      <hr>
      <AboutProject class="project" id="About" />
       
    </div>
  
 <FooterComp/>
  </div>




</template>

<script lang="ts">
import { defineComponent } from 'vue';

//Components
import BarChart from './components/BarChart.vue'
import NavBar from './components/NavBar.vue'
import LoadingPage from './components/LoadingPage.vue'
import SearchList from './components/SearchList.vue';
import AboutProject from './components/AboutProject.vue'
import FooterComp from './components/FooterComp.vue'

//Interfaces
import { Countyface } from 'types/country.interface';
import { DataInterface } from 'types/Data.interface';
import {DataInfo} from 'types/DataInfo.interface';
import { DataRaw } from 'types/DataRaw.interface';
import {DataByMonth} from 'types/DataByMonth.interface'
import {Selected} from 'types/Selected.interface'

//Services
import DataSet  from '../services/DataSet'

//Factory
import DataFactory  from '../factory/Data.factory';
import ArrayFactory from '../factory/ArrayFactory'




export default defineComponent({
  name: 'App',
  data: () => {
    return{
      
      Selected:{} as Selected,
      also:false,
      Loading: false,
      ChartPagekey:0,
      CountryList : {} as Countyface["data"],
      CountryData : {} as DataInterface["data"],
      FormatedData : [] as DataInfo[] ,
      DataMonth : [] as DataByMonth[]
    }
  },
  components: {
    SearchList,
    BarChart,
    NavBar,
    LoadingPage,
    AboutProject,
    FooterComp
  },

  async mounted(){
 
    const values = await DataSet.ListCountry();

    this.CountryList= values.data;   

   // console.log(this.CountryList)
  },

  methods:{

    selectedCountry(e: Selected)
    { 
      this.Selected = e

      this.Loading = true;
   
      this.also = false;

      this.getData().then( () => {
       
        this.formatData();
   
        this.SendData();
        this.Loading = false;

      }) 
    },

   async getData()
    {
     try {

      this.CountryData = [];


      console.log("Esperando Dados")
      
      const data = await DataSet.getData(this.Selected);     

      this.CountryData = data.data;

      console.log( this.CountryData)      
     } catch (error) {
       console.log(error)
     }
    },

    formatData(){

      this.FormatedData.length = 0;

      this.CountryData?.sort(this.compare)
      
      this.CountryData?.forEach( ( e : DataRaw)  =>{

        this.FormatedData.push(DataFactory.Build(e) );
      
      })

      //this.FormatedData.sort( this.sortByDate);
      
      //Need to be a:any because with this I can sort by String
      
      this.FormatedData.sort( function(a:any,b:any){
        return a.Date - b.Date
      });

      console.log("FormatedData",this.FormatedData);


    },

    SendData()
    {
      this.DataMonth = [];
      if(this.FormatedData.length >= 31){

        this.DataMonth = ArrayFactory.Build(this.FormatedData)
        this.also = true;
        this.ChartPagekey++

        console.log("DataMonth",this.DataMonth);

        return  this.DataMonth
      
      }else
      {
        console.log("Passando FormatedData")
        this.also = true;
        this.ChartPagekey++
        return this.FormatedData

      }
    },
     //Need to be a:any because with this I can sort by String
    compare(a:any,b:any)
      {
      if ( a.end < b.end ){
        return -1;
      }
      if ( a.end > b.end ){
        return 1;
      }
      return 0;
      },
    scroll(e:string)
    {
        document.getElementById(e)?.scrollIntoView({
        behavior: "smooth"
      });
    }


  }
});
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 0px;
}
.project{
margin-top: 350px;
}
</style>
