import axios from "axios";
import server from "../../config/server";


//import { preLoad } from "../before";

const myInterface = {
  name: "hook-error",
  count: 0,
  rows: [],
  message: "",
};

const paginate = {
  creator_id: server.creator_id , 
  p: 0,
  offset: 0,
  max: 20,
  is_deleted: 0,
  key: "",
  sort_by: "date_created",
  sort_type: "DESC", 
};

export default function doLoad (MODE = "", options = {}) {
  return new Promise((resolve, reject) => {
    if (MODE !== "") {
      const MyPaginate = {
        ...paginate,
        ...options,
      };

      let url = server.host+'/'+MODE+'/listAll/all'  //server.host +'/api/'+MODE;//server.base() + "/" + MODE + "/listAll/all";
      url +=
        "?" +
        Object.keys(MyPaginate)
          .map((key) => {
            if (MyPaginate[key] !== null) {
              return key + "=" + MyPaginate[key];
            }
          })
          .join("&");

          

      axios.get(url).then(
        (res) => {
          resolve(res.data);
        },
        (error) => {
          

          console.log(error) ; 


          //var status = error.response.status;
          //this.onError(error);
        }
      );
    } else {
      resolve(
        Object.assign(myInterface, {
          message: "Kiểm tra Model ",
        })
      );
    }
  });
}
