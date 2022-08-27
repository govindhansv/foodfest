 
    const { ObjectId } = require('mongodb');
        const db = require('../connection');

        const getAllAuths = async function (req, res) {
        let data = await db.get().collection('auths').find().toArray()
        res.render('pages/allauths',{data});
        }

        const getAuthAddform = async function (req, res) {
        res.render('forms/addauth');
        }

        const addAuth = async function (req, res) {
        let data = req.body
        await db.get().collection('auths').insertOne(data)
        res.render('pages/auth', { data })
        }

        const getAuthEditform = async function (req, res) {
        let id = req.params.id
        let data = await db.get().collection('auths').findOne({ _id: ObjectId(id) })
        res.render('forms/editauth', { data });
        }

        const editAuth = async function (req, res) {
        let newdata = req.body
        let query = { _id: ObjectId(req.body.id) }
        var newvalues = { $set: { name: newdata.name,} };
        await db.get().collection('auths').updateOne(query, newvalues)
        res.redirect(`/auths/${req.body.id}`)
        }

        const deleteAuth = async function (req, res) {
        let id = req.params.id
        await db.get().collection('auths').deleteOne({ _id: ObjectId(id) })
        res.redirect('back')
        }

        const getAuthById = async function (req, res) {
        let id = req.params.id
        let data = await db.get().collection('auths').findOne({ _id: ObjectId(id) })
        res.render('pages/auth', { data });
        }

        exports.getAllAuths = getAllAuths;
        exports.getAuthAddform = getAuthAddform;
        exports.addAuth = addAuth;
        exports.getAuthEditform = getAuthEditform;
        exports.editAuth = editAuth;
        exports.deleteAuth = deleteAuth;
        exports.getAuthById = getAuthById;
    