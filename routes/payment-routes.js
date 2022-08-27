    
    const express = require("express");
    const router = express.Router();
    const paymentsController = require("../controllers/payments-controller");

    router.get("/", paymentsController.getAllPayments);
    router.get('/add', paymentsController.getPaymentAddform);
    router.post("/add", paymentsController.addPayment);
    router.get('/edit/:id',paymentsController.getPaymentEditform);
    router.post("/edit", paymentsController.editPayment);
    router.get('/:id', paymentsController.getPaymentById);
    router.get("/delete/:id", paymentsController.deletePayment);

    module.exports = router;