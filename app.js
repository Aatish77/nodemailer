
// importing nodemailer and put into a variable  'nodemailer'

var nodemailer = require('nodemailer')

// media and user details(username and passwords)



var transport = nodemailer.createTransport(
    {
        service:'gmail',
        auth:{
            user:'aatishskumar25@gmail.com',

            //  here password will be changed before the submission in github

            pass:'nctkdasdahsdgahs'
        }
    }
);

// senders informations

var mailOptions = {
    from:'aatishskumar25@gmail.com',
    to:'aatishkumars2000@gmail.com',
    sub:'Test messege',
    text:"Hi Aatish ,It is a test messege and this is a nodemailer package"

};

// sending email

transport.sendMail(mailOptions,function(error,info){
    if(error){
        console.log(error)
    }
    else{
        console.log("Email has been sent Successfully" + info.response)
    }

});