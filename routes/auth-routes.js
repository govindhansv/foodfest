    
    const express = require("express");
    const router = express.Router();
    const authsController = require("../controllers/auths-controller");

    router.get("/", authsController.getAllAuths);
    router.get('/add', authsController.getAuthAddform);
    router.post("/add", authsController.addAuth);
    router.get('/edit/:id',authsController.getAuthEditform);
    router.post("/edit", authsController.editAuth);
    router.get('/:id', authsController.getAuthById);
    router.get("/delete/:id", authsController.deleteAuth);

    module.exports = router;