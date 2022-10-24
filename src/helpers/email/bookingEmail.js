var axios = require("axios");
const BookingEmail = (email, subject, Mydata, that, callback) => {
    Mydata["sendTo"] = email
    var data = JSON.stringify(Mydata);
    var config = {
        method: 'post',
        url: `${process.env.React_App_EMAIL_BASE_URL}template-email/`,

        headers: {
            'Content-Type': 'application/json'
        },
        data: data
    };

    axios(config)
        .then(function (response) {
            if (response.status) {
                callback(response.status, that)
            }
            else {
                callback(400, that)
            }
        })
        .catch(function (error) {
            console.log(error)
            callback(400, that)
        });

};

module.exports = BookingEmail;

