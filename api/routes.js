import express from "express"
import { login, register } from "./controllers.js"

const router = express.Router()

router.get('/api/auth', (req, res)=>{
    res.send('auth')
})


router.post("/api/register", register)
router.post("/api/login", login)


export default router