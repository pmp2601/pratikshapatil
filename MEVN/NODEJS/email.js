var nodemailer = require ('nodemailer');

var transporter = nodemailer.createTransport({
    service:'gmail',
    auth:{
        user:'1903049@ritindia.edu',
        pass:'Mahavir@2602'
    }
});

var mailOption={
    from:'1903049@ritindia.edu',
    to:'patilpratikshamahavir@gmail.com',
    subject:'Hello',
    text:'Hi'
};


transporter.sendMail(mailOption,function(error,info){
    if(error){
        console.log(error);
    }
    else{
        console.log('Email send'+info.response);
    }
    
});