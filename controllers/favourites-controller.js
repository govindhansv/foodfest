 
    const { ObjectId } = require('mongodb');
        const db = require('../connection');

        const getAllFavourites = async function (req, res) {
        let data = await db.get().collection('favourites').find().toArray()
        res.render('pages/allfavourites',{data});
        }

        const getFavouriteAddform = async function (req, res) {
        res.render('forms/addfavourite');
        }

        const addFavourite = async function (req, res) {
        let data = req.body
        await db.get().collection('favourites').insertOne(data)
        res.render('pages/favourite', { data })
        }

        const getFavouriteEditform = async function (req, res) {
        let id = req.params.id
        let data = await db.get().collection('favourites').findOne({ _id: ObjectId(id) })
        res.render('forms/editfavourite', { data });
        }

        const editFavourite = async function (req, res) {
        let newdata = req.body
        let query = { _id: ObjectId(req.body.id) }
        var newvalues = { $set: { name: newdata.name,} };
        await db.get().collection('favourites').updateOne(query, newvalues)
        res.redirect(`/favourites/${req.body.id}`)
        }

        const deleteFavourite = async function (req, res) {
        let id = req.params.id
        await db.get().collection('favourites').deleteOne({ _id: ObjectId(id) })
        res.redirect('back')
        }

        const getFavouriteById = async function (req, res) {
        let id = req.params.id
        let data = await db.get().collection('favourites').findOne({ _id: ObjectId(id) })
        res.render('pages/favourite', { data });
        }

        exports.getAllFavourites = getAllFavourites;
        exports.getFavouriteAddform = getFavouriteAddform;
        exports.addFavourite = addFavourite;
        exports.getFavouriteEditform = getFavouriteEditform;
        exports.editFavourite = editFavourite;
        exports.deleteFavourite = deleteFavourite;
        exports.getFavouriteById = getFavouriteById;
    