// Meteor.startup(function(){
//   process.env.ROOT_UTIL = "http://localhost:3000";  //where tp put correct email 
// });

if(ServiceConfiguration.configurations.find({
    service: 'facebook'
  }).count() === 0) {
    ServiceConfiguration.configurations.insert({
      service: 'facebook',
      appId: process.env.METEOR_FACEBOOK_ID,
      secret: process.env.METEOR_FACEBOOK_SECRET,
      loginStyle: 'popup'      
    });
}  

Accounts.onCreateUser(function (options,user){
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
  if (user.services.facebook){
    user.profile.first_name = user.services.facebook.first_name;
    user.profile.last_name = user.services.facebook.last_name;
    user.profile.gender = user.services.facebook.gender;
  }
  return user;
});

