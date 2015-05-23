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