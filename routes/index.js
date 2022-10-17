    const express = require("express");
    const router = express.Router();
    const productsController = require("../controllers/products-controller");
    const db = require('../connection');

    router.get("/", async(req, res) => {
        let data = await db.get().collection('products').find().toArray()
        res.render('index', { data })
    });

    // router.get("/", productsController.getAllProducts);
    router.get('/add', productsController.getProductAddform);
    router.post("/add", productsController.addProduct);
    router.get('/edit/:id', productsController.getProductEditform);
    router.post("/edit", productsController.editProduct);
    router.get('/:id', productsController.getProductById);
    router.get("/delete/:id", productsController.deleteProduct);

    module.exports = router;