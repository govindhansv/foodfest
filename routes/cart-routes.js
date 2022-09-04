    const express = require("express");
    const router = express.Router();
    const cartsController = require("../controllers/carts-controller");


    router.get("/", cartsController.getAllCarts);
    router.get('/add/:id/', cartsController.addToCart);
    // router.post("/add", cartsController.addCart);
    // router.get('/edit/:id',cartsController.getCartEditform);
    // router.post("/edit", cartsController.editCart);
    router.get('/:id', cartsController.getCartById);
    router.get("/delete/:id", cartsController.deleteCart);

    module.exports = router;