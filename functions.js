const bcrypt = require('bcrypt')
var db = require('./connection')
const Razorpay = require('razorpay');


module.exports = {
    doSignup: (userdata) => {
        return new Promise(async(resolve, reject) => {
            let user = await db.get().collection('users').findOne({ gmail: userdata.gmail })
            if (user) {
                let response = {}
                response.signupstatus = false
                resolve(response)
            } else {
                console.log(userdata);
                userdata.password = await bcrypt.hash(userdata.password, 10)
                userdata.img = 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3c/IMG_logo_%282017%29.svg/220px-IMG_logo_%282017%29.svg.png'
                db.get().collection('users').insertOne(userdata).then((response) => {
                    response.signupstatus = true
                    response.user = userdata
                    resolve(response)
                })
            }
        })
    },
    doLogin: (userdata) => {
        return new Promise(async(resolve, reject) => {
            let user = await db.get().collection('users').findOne({ gmail: userdata.gmail })

            let response = {}
            if (user) {

                let validPassword = await bcrypt.compare(userdata.password, user.password)
                if (!validPassword) {
                    console.log('login failed wrong password');
                    response.loginstatus = false
                    resolve(response)
                } else {
                    console.log('login success');
                    response.loginstatus = true
                    response.user = user
                    resolve(response)
                }
            } else {
                console.log('login failed');
                response.loginstatus = false
                resolve(response)
            }
        })
    },

    createOrder: (data, total, user) => {
        return new Promise(async(resolve, reject) => {
            var datetime = new Date().toLocaleString();
            console.log(datetime);
            let order = { products: data, total: total, user: user, status: 'recieved', datetime: datetime }
            db.get().collection('carts').deleteMany({ "user": user })
            db.get().collection('orders').insertOne(order).then((response) => {
                resolve(response.insertedId)
            })

        })
    },

    generateRazorpay: (ordId, amount) => {
        return new Promise(async(resolve, reject) => {

            console.log(ordId, amount);

            var instance = new Razorpay({
                key_id: 'rzp_test_KoTMpAP5FOl5Ss',
                key_secret: '0MZIr38iYS7ETPUfYzf9DvKU',
            });

            var options = {
                amount: amount, // amount in the smallest currency unit
                currency: "INR",
                receipt: ordId
            };
            instance.orders.create(options, function(err, order) {
                if (err) {
                    console.log(err);
                }
                console.log('gen rz', order);
                resolve(order)

            });
        })
    },

    imgUpload: (data) => {
        return new Promise(async(resolve, reject) => {

            console.log(data);
            let img = data.imgurl
            let id = data.userid
            console.log(img, id);
            cloudinary.v2.uploader.upload("https://media.istockphoto.com/photos/the-girl-standing-on-the-rocks-near-the-beach-with-beautiful-million-picture-id1142366551?b=1&k=20&m=1142366551&s=170667a&w=0&h=UI08guBTkXyI_C7R2pITkP6UB8qjk_YrFOfUTQ17mBM=", { public_id: "olympic_flagfgd" },
                function(error, result) { console.log(result); })

        })
    },

}