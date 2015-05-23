Meteor.startup(function(){
  smtp = {
    username: process.env.GMAIL_LOGIN,
    password: process.emv.GMAIL_PASSWORD,
    server: "smtp.gmail.com",
    port: 587
  };
  process.env.MAIL_URL = 'smtp://' + 
    encodeURIComponent(smtp.username) + ':' +
    encodeURIComponent(smtp.password) + '@' +
    encodeURIComponent(smtp.server) + ':' +
    smtp.port;
});