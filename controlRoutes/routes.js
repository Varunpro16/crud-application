const express = require('express')
const router = express.Router()
const {
    GetAllUsers,
    CreateUsers,
    UpdateUsers,
    DeleteUsers
} = require('../routerfunctions/functionRoutes')


router.route('/').get(GetAllUsers)
router.route('/users').post(CreateUsers)
router.route('/users/:id').put(UpdateUsers).delete(DeleteUsers)

// router.route('/').get(GetAllUsers)
// router.route('/users').post(CreateUsers)
// router.route('/users/:id').put(UpdateUsers)
// router.route('/users/:id').delete(DeleteUsers)


// router.route('/').get((req,res)=>{
//     res.send('router get url')
// })
// router.route('/users').post((req,res)=>{
//     res.send('router post url')
// })
// router.route('/users/:id').put((req,res)=>{
//     res.send('router put url')
// })
// router.route('/users/:id').delete((req,res)=>{
//     res.send('router delete url')
// })

module.exports = router