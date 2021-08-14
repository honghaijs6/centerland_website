// THIS FUNCTION CALL FROM PRE-RENDER BUILD TIME 
import { doLoad } from "../ultil";



/*  
{
    webcate : []
}
*/
function loadAllRequireData(ctx) {

  return [];
  
  /*return new Promise((resolve) => {



    // LOAD WEBCATE = 
    doLoad("cates", { 
      sort_by: "sort",
      sort_type: "asc",
      parent_id: null,
      max: "all",
    }).then((res) => {
      
      const data = res.rows;

      resolve({
        webcate: data,
      });
    });
  });*/
}

export default loadAllRequireData;
