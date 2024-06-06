import { db } from "./db.js"
import bcrypt from "bcrypt"
import jwt from 'jsonwebtoken'

export const register = (req, res) => {

    // Check if the user already exists
    db.query("SELECT * FROM users WHERE email = ? OR username = ?", [req.body.email, req.body.username], (err, data) => {
        if (err) return res.json(err);
        if (data.length) return res.status(409).json("User already exists");

        // Hash password and create user
        const salt = bcrypt.genSaltSync(10);
        const hash = bcrypt.hashSync(req.body.password, salt);

        // Correct the SQL query to use placeholders properly
        db.query("INSERT INTO users (`username`, `email`, `password`) VALUES (?, ?, ?)", [req.body.username, req.body.email, hash], (err, data) => {
            if (err) return res.json(err);
            return res.status(200).json("User has been created");
        });
    });
};
 
export const login = (req, res) => {
    // Vérifier si l'utilisateur existe
    db.query("SELECT * FROM users WHERE username = ?", [req.body.username], (err, data) => {
        if (err) return res.json(err); // Correction ici pour utiliser `res.json`
        
        // Si l'utilisateur n'existe pas
        if (data.length === 0) return res.status(404).json("user not found");

        // Si l'utilisateur existe, vérifier le mot de passe
        const isPasswordCorrect = bcrypt.compareSync(req.body.password, data[0].password);
        if (!isPasswordCorrect) return res.status(401).json("wrong password"); // Utiliser 401 pour les erreurs d'authentification

        // Si tout est correct, utiliser JWT pour assurer que les mises à jour ne peuvent être faites que sur ses propres posts
        const token = jwt.sign({ id: data[0].id }, "jwtkey");

        // Exclure le mot de passe du retour
        const { password, ...other } = data[0];

        // Configurer le cookie avec plus d'options de sécurité
        res.cookie("access_token", token, {
            httpOnly: true,
            secure: true, // Activer en production si vous utilisez HTTPS
            sameSite: 'strict' // Option de sécurité supplémentaire
        }).status(200).json(other);
    });
}

export const logout = (req, res) =>{
    res.clearCookie("access_token", {
        sameSite: "none",
        secure: true
    }).status(200).json("user has been logged out")
}

//post 


export const getAllPost = (req,res)=>{
    
const q = req.query.php ? "SELECT * FROM posts WHERE php=?" : "SELECT * FROM posts"

db.query(q, [req.query.php], (err,data)=>{
    if(err) return res.send(err)

        return res.status(200).json(data)
})


}