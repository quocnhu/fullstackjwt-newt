import {testApi,handleRegister} from '../controller/apiController.js'
// import express from 'express';
import express from 'express';
const router = express.Router();

const initApiRoutes = (app) => {
    //GRUD
    router.get("/test-api",testApi)
    router.post("/register",handleRegister)

    return (app.use("/api/v1/", router))
}
// export default initWebRoutes;
export default initApiRoutes;


// router-v1
// router-v2