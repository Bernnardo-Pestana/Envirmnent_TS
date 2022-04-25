<template>
  
    <div>
        
    <table class="table">
        
        <tr>
            <td> 
                <div class="select is-success is-normal">
                    <select name="Countries" id="" v-model="Selected_country">
                        <option selected >Country</option>
                        <option v-for= "(item, key) in List" :key="key" >
                            {{ item  }} - {{ key }}
                        </option>
                    </select>  
                </div>
        </td>


        <td>
            <div class="select is-success is-normal">
                <select name="Types" id="" v-model="ChoosedType">
                    <option selected >Type</option>
                    <option v-for= "item in Types" :key="item" >
                        {{ item  }}
                    </option>
                </select> 
            </div>
        </td>



    <td><input type="date" v-model="DatInit"  class="calendar" /></td>
    <td><input type="date" v-model="DatFinal"  class="calendar"  /></td>
    <td> <button @click="submit()" class="button is-primary is-rounded"> Select </button> </td>
 
     

    </tr>


    </table>

    <div class="content is-medium p-6 mx-6  " v-if="missing">
      <p class="has-text-justified is-family-sans-serif ">
           Please know that you forgot some crucial information to be send to the Chart, Please revise before sending again.
      </p>
  </div>
    </div>
 
   
</template>

<script lang="ts">
import { Selected } from 'types/Selected.interface';
import { defineComponent } from 'vue'

export default defineComponent({
    name:'SeachList',

    props:{
        List : {
            type :Object,
            required: true
        }
    },
     data: ()=> {
        return{
            Selected_country: '',
            ChoosedType: '',
            Types : ['nitrogendioxide','ozone','carbonmonoxide','methane'],
            DatInit:'',
            DatFinal:'',
            missing : false
            
        }
    },

    methods:{
        submit()
        {
  
           let nameinit = this.Name_Initial(this.Selected_country); 
           let aux = {} as Selected  ;
           aux.Name = nameinit.name
           aux.Initials = nameinit.initials
           aux.Type = this.ChoosedType;
           aux.DateInit = this.DatInit
           aux.DateFinal = this.DatFinal

            if(aux.Name === "" || aux.Type === "" || aux.DateInit === '' || aux.DateFinal === '')
            {
                this.missing = true 
            }else
            {
            console.log("Aux",aux);
            this.missing = false   
            this.$emit('SelectedCountry',aux);
            }
        }, 
        Name_Initial(Country : string)
        {
            var nameinit = {
                initials:'',
                name:''
            }

            var index = Country.indexOf(' ');

            nameinit.initials = Country.substring(index + 3);
            nameinit.name = Country.substring(0,index);


            return nameinit;
        }

    }

   
})
</script>


<style>
.table{
    background-color: azure; 
    border-collapse: collapse;
    margin: auto;
}
td, th {
  border: 1px solid #dddddd;
  text-align: left;
  padding: 8px;
}

.calendar{
    
    width: 130px;
    text-align: center;
    height: 40px;
    border-radius: 80px;
    font-family: 'serif';
    
}
</style>