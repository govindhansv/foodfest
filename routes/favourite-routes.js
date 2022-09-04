    
    const express = require("express");
    const router = express.Router();
    const favouritesController = require("../controllers/favourites-controller");

    router.get("/", favouritesController.getAllFavourites);
    router.get('/add/:id', favouritesController.addFavourite);
    router.get('/:id', favouritesController.getFavouriteById);
    router.get("/delete/:id", favouritesController.deleteFavourite);

    module.exports = router;