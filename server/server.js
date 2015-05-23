Meteor.startup(function(){
  process.env.ROOT_UTIL = "http://localhost:3000";  //where tp put correct email 
});

Accounts.onCreateUser(function(options,user){
  if(options.profile){
    user.profile = options.profile;
  }
  else{
    user.profile = {};
  }
  user.profile.rank = "White belt";
  if (options.email){
    Meteor.setTimeout(function(){
      Accounts.sendVerificationEmail(user._id);

    },2*1000);
  }
  return user;
});