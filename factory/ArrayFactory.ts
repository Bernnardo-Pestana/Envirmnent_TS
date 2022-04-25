
import { DataByMonth } from '../types/DataByMonth.interface';
import {DataInfo} from '../types/DataInfo.interface'

class ArrayData {

    Build( Data : DataInfo[])
    {
        const array:DataByMonth[] = [];
        
        let aux = {} as DataByMonth;

        let count = 0

         //Need to be a:any because with this I can sort by String
        Data.sort((a:any, b:any) =>{ return a.Date - b.Date });

        console.log(Data)

         Data.forEach( (e : DataInfo , index:number, arrayInfo:any)   => {
      
            if( aux.Date  === "")
            {
              aux.Date = e.Date;
            }
            if(aux.Date === e.Date)
            {
              aux.Average = aux.Average + e.Average;
      
              if(Object.is(arrayInfo.length - 1 , index))
              {
               
                
                array[count] = aux;
      
              }
            }
            else
            {
              array[count] = aux;
                
                count ++;
      
                aux  = {} as DataByMonth ;
      
                aux.Date = e.Date;
      
             
                aux.Average = 0; 
      
             
            } 
          })
           //Need to be a:any because with this I can sort by String
          array.sort((a:any, b:any) =>{ return a.Date - b.Date });

          array.shift();
          console.log("Array",array);
          
          return array
    }

}

export  default  new ArrayData();


