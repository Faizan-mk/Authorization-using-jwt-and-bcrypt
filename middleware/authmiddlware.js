/**
 * Authentication Middleware
 * Verifies JWT token and attaches user information to request
 */

const jwt=require('jsonwebtoken')

/**
 * Verify JWT token middleware
 * Extracts token from Authorization header and validates it
 * @param {Object} req - Express request object
 * @param {Object} res - Express response object
 * @param {Function} next - Express next middleware function
 * @throws {Error} - If token is invalid or missing
 */
exports.verifytoken=(req,res,next)=>{
    try {
        // Extract token from Authorization header (Bearer <token>)
        const token=req.headers.authorization?.split(" ")[1];
        // Check if token exists
        if(!token) res.status(401).json({message:"token is required"})

        // Verify token signature and decode payload
        const decode=jwt.verify(token,"secretkey");
        // Attach decoded user information to request object
        req.user=decode;
        // Proceed to next middleware/route handler
        next();
    } catch (error) {
        console.error(error);
        res.status(500).json({message:"internal server error"})
    }


}
