// Next.js API route support: https://nextjs.org/docs/api-routes/introduction



import moPost from '../model/posts';



export default async (req, res) => {

    

    const { method } = req ; 
    

    //console.log(req.body) // The request body
    //console.log(req.query) // The url query string
    //console.log(req.cookies) // The passed cookies

    const { slug } = req.query ;
    

      console.log(slug)




    switch (req.method) {
        case 'GET':
          //...

          moPost.getInfo(slug).then((data)=>{
            res.json(data)
          
          })
          
          break
        case 'POST':
          //...
          res.status(200).json({ method})

          break
        default:
          res.setHeader('Allow', ['GET', 'POST'])
            res.status(405).end(`Method ${method} Not Allowed`)

          break
      }


    
    

  }
  