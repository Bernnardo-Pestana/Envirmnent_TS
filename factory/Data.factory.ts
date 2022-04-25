import { DataInfo } from '../types/DataInfo.interface';
import { DataRaw } from '../types/DataRaw.interface';

class DataFactory
{
    Build( data : DataRaw ) : DataInfo  { 
        
        const Information ={
            Average: 0,
            Date: ''
        }

        Information.Average = data.average;
        
        const dateaux =  new Date(data.end);

        const month = dateaux.getMonth()+1;
        const year = dateaux.getFullYear();

        Information.Date = ""+ year + "/" + month 


        return Information;
    }
    
}

export  default  new DataFactory();