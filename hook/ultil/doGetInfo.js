import axios from "axios";
import server from "../../config/server";
 

export default function doGetInfo (MODE = "", slug='' ) {
  return new Promise((resolve, reject) => {
    if (MODE !== "") {
      
      
      const url = `${server.host}/posts/getInfo/${slug}` ;


      
      axios.get(url).then(
        (res) => {
          
          resolve(res.data);

        },
        (error) => {
          
          console.log(error);

          

        }
      );
    } else {
      resolve({});
    }
  });
}
