const formDataRouter=require("express").Router();
const {findData}=require("../Controllers/formdata.controller");

(()=>{
    getRequest()
})();



function getRequest(){
    formDataRouter.get("/findData",findData)

}





module.exports=formDataRouter;