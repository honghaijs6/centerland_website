//console.log(req.body) // The request body
//console.log(req.query) // The url query string
//console.log(req.cookies) // The passed cookies

import moCate from "../model/cates";
export default async (req, res) => {
  const { method, query } = req;

  switch (req.method) {
    case "GET":
      //...

      //const resData = await moPost.findOne();

      const { slug } = query ; 

      
      


      res.json({ data:slug });
      

      break;
    case "POST":
      //...

      const data = req.body;
      console.log(data);
      res.status(200).json({ method });

      break;
    default:
      //res.setHeader('Allow', ['GET', 'POST'])
      res.status(405).end(`Method ${method} Not Allowed`);
      break;
  }
};
