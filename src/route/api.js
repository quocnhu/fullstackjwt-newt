import {testApi,handleRegister,handleLogin} from '../controller/apiController.js'
// import express from 'express';
import express from 'express';
const router = express.Router();

const initApiRoutes = (app) => {
    //====handling route=======
    router.get("/test-api",testApi)
    router.post("/register",handleRegister)
    router.post("/login",handleLogin)

    return (app.use("/api/v1/", router))
}

export default initApiRoutes;

