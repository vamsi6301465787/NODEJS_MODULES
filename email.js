var nodemailer=require('nodemailer');

var tran=nodemailer.createTransport({
    service : 'gmail',
    auth : {
        user : 'vamsi524@sasi.ac.in',
        pass:'vamsi524'
    }
})

var options={
    from :'vamsi524@sasi.ac.in',
    to:'deepakb9966@gmail.com',
    subject:'testing mail',
    text :'Iam vamsi'

}
tran.sendMail(options,(err,info)=>{
    if(err){
        console.log(err);
    }
    else{
        console.log('Email is send');
    }
})