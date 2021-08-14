
/* detech form */

export default  function detectForm (fields=[],data={}){

    let ret = '' ;
  
    if(fields.length>0){
  
      fields = fields.reverse();
      
      Object.keys(data).map((item)=>{
        fields.map((item2)=>{
          if(data[item2] === '' ||  data[item2] === 0 || data[item2]==='[]' || data[item2]==='{}'){
  
            try{
              ret = 'vui lòng kiểm tra thông tin '+item2 ;
              document.getElementById(item2).focus();
    
            }catch(err){}
  
            
          }
  
        });
      });
    }
    
    let el = document.querySelector("#form-err");
    el.innerHTML = '<span class="text-danger">'+ret+'</span>';
  
    if(ret!==''){
      window.setTimeout(()=>{
        ret = '';
        el.innerHTML = '<span class="text-danger">'+ret+'</span>';
      },3000) ; 
    }
  
    return ret ;
  }
  