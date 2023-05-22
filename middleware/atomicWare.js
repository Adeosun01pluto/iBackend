import jwt  from "jsonwebtoken";

export const verifyToken = (req, res, next) => {
    const authHeader = req.headers.authorization;
    // console.log(authHeader)
    if (authHeader) {
      jwt.verify(authHeader, "secret", (err, decoded) => {
        if (err) {
          return res.sendStatus(403);
        }
        next();
      });
    } else {
      res.sendStatus(401);
    }
  };


// export const requireAuth = (req, res ,next)=>{
//     const token = req.cookies.jwt

//     if(token){
//         jwt.verify(token, 'secret', (err, decodedToken)=>{
//             if(err){
//                 console.log(err)
//                 res.json({msg:"Invalid token"})
//             }else{
//                 console.log(decodedToken)
//                 next()
//             }
//         })
//     }
//     else{
//         res.json({msg:'No Token'})
//     }
// }


// // check current user
// const checkUser = (req, res ,next)=>{
//     const token = req.cookies.jwt
//     if(token){
//         jwt.verify(token, 'secret', async (err, decodedToken)=>{
//             if(err){
//                 console.log(err)
//                 res.locals.user = null
//                 next()
//             }else{
//                 console.log(decodedToken)
//                 let user = await User.findById(decodedToken.id)
//                 res.locals.user = user
//                 next()
//             }
//         })
//     }else{
//         res.locals.user = null
//         next()
//     }
// }


