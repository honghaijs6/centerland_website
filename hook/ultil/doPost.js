
import axios from "axios";
import server from "../../config/server";


const doPost = (strModel='',data={})=>{


    return new Promise((resolve)=>{

        if(strModel!==''){

            const url = server.host+ '/' + strModel;

           
            axios.post(url,data)
                  .then((res)=>{
        
                    resolve(res.data);
        
        
                  },(error)=>{
          
                
                    console.log(error) ; 
                
            });


        }else{
            console.log(error) ; 
        }
    });

}

export default doPost ; 

