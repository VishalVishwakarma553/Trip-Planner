import jwt from "jsonwebtoken"
export const protectedRoute = (req, res, next) => {
    try{
        const token = req.cookies.token;
            if (!token) {
              return res.status(401).json({
                message: "User not authenticated",
              });
            }
            //verify the token is correct by providing secret key
            const decoded = jwt.verify(token, process.env.JWT_SECRET);
            if (!decoded) {
              return res.status(401).json({
                message: "Token is invalid",
              });
            }
            req.id = decoded.userId;
            next();
    }catch(error){
        console.log("Error in protectedRoute", error)
    }
}