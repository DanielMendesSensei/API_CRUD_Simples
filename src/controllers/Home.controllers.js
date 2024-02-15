const statusCode = {
    "statusCode200":200,
    "statusCode201":201,
    "statusCode404":404
}
const homeController = {
    home: (req, res)=>{
    res.send("I'm Alive!")
    },
};
// (req, res)=>{
//     res.json(statusCode.statusCode200)
// })

export { homeController }