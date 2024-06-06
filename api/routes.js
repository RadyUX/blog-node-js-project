import express from "express"
import { getAllPost, login, logout, register } from "./controllers.js"

const router = express.Router()

router.get('/api/auth', (req, res)=>{
    res.send('auth')
})


router.post("/api/register", register)
router.post("/api/login", login)
router.post("/api/logout", logout)

router.get("/api/posts", getAllPost)


export default router