

const server = {
    host: process.env.NODE_ENV === 'production' ? "https://centerland.herokuapp.com" : "http://localhost:3333",  //"https://kcland.herokuapp.com"//https://kimcuong-backend.et.r.appspot.com,//"http://27.74.250.26",//"http://localhost",//"http://115.78.5.75",
    port:443,
  
    creator_id:2, // bdskimcuong
    url:'',
    paginate:{
      p:0,
      offset:0,
      max:20,
      is_deleted:0,
      key:'',
      sort_by:'date_created',
      sort_type:'DESC'
    },
  
    base(){
      return this.host+':'+this.port
    },
  
    setHeader(){
  
      return  {
        headers:{
          "Content-Type": "application/json",
          "Authorization": this.token(),
          "cache-control": "no-cache"
        }
      }
    },
    token:function(){
      return localStorage.getItem('feathers-jwt');
    }
  
  
  
  }
  
  export default server;
  