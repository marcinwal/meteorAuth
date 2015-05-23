Accounts.emailTemplates.siteName = "MeteorTest";
Accounts.emailTemplates.from = "Marcin";
Accounts.emailTemplates.verifyEmail.subject = function(user){
  return 'Confirm your email address,' + user.username;
};

Accounts.emailTemplates.verifyEmail.text = function(user,url){
  return "Welcome to the App" + "to verify your email follow the link" + url;
};

Accounts.emailTemplates.verifyEmail.html = function(user,url){
  return "<h1>Welcome to Test app</h1>"
         + "<p><strong>verify your email address go ahead and follow the link below:</p>"
         + url;
};

Meteor.startup(function(){
  smtp = {
    username: process.env.GMAIL_LOGIN,
    password: process.env.GMAIL_PASSWORD,
    server: "smtp.gmail.com",
    port: 587
  };
  process.env.MAIL_URL = 'smtp://' + 
    encodeURIComponent(smtp.username) + ':' +
    encodeURIComponent(smtp.password) + '@' +
    encodeURIComponent(smtp.server) + ':' +
    smtp.port;
});