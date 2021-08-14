// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

//console.log(req.body) // The request body
//console.log(req.query) // The url query string
//console.log(req.cookies) // The passed cookies

import moPost from "../model/posts";

export default async (req, res) => {
  const { method, query, params } = req;

  switch (req.method) {
    case "GET":

      moPost.listAll('all', query).then((data)=>{
        res.json(data);
      });

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
