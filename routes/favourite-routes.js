    
    const express = require("express");
    const router = express.Router();
    const favouritesController = require("../controllers/favourites-controller");

    router.get("/", favouritesController.getAllFavourites);
    router.get('/add', favouritesController.getFavouriteAddform);
    router.post("/add", favouritesController.addFavourite);
    router.get('/edit/:id',favouritesController.getFavouriteEditform);
    router.post("/edit", favouritesController.editFavourite);
    router.get('/:id', favouritesController.getFavouriteById);
    router.get("/delete/:id", favouritesController.deleteFavourite);

    module.exports = router;