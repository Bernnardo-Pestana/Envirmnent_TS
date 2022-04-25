import axios from "axios"
import { Countyface } from "../types/country.interface";
import { DataInterface } from "../types/Data.interface";
import {Selected} from '../types/Selected.interface'


class DataSet
{

    async ListCountry():Promise<Countyface>
    {
        return await axios.get('https://api.v2.emissions-api.org/api/v2/countries.json') ;
         
    }

    async getData(select:Selected) :Promise<DataInterface>{

        return await axios.get('https://api.v2.emissions-api.org/api/v2/'+select.Type+'/average.json?country='+select.Initials+'&begin='+select.DateInit+'&end='+select.DateFinal);
    }
}

export  default  new DataSet();

 