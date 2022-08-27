    
    const express = require("express");
    const router = express.Router();
    const ordersController = require("../controllers/orders-controller");

    router.get("/", ordersController.getAllOrders);
    router.get('/add', ordersController.getOrderAddform);
    router.post("/add", ordersController.addOrder);
    router.get('/edit/:id',ordersController.getOrderEditform);
    router.post("/edit", ordersController.editOrder);
    router.get('/:id', ordersController.getOrderById);
    router.get("/delete/:id", ordersController.deleteOrder);

    module.exports = router;