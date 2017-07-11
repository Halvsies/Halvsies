// Load necessary packages
var passport = require('passport');
var GoogleStrategy = require('passport-google-oauth2').OAuth2Strategy;
// var localStrategy = require('passport-local').Strategy;

// Load auth variables
var configAuth = require('./auth.js');

module.exports = function(passport) {

	// serialize user for the session
	passport.serializeUser(function(user, done) {
		console.log("serializing");
		done(null, user.id);
	});

	// deserialize user for the session
	passport.deserializeUser(function(id, done) {
		console.log("deserializing");
		User.findById(id, function(err, user) {
			done(err, user);
		});
	});

	// Google OAuth2
	passport.use(new GoogleStrategy({

		clientID: configAuth.googleOAuth.clientID,
		clientSecret: configAuth.googleOAuth.clientSecret,
		callbackURL: configAuth.googleOAuth.callbackURL,
		passReqToCallback: true

	},
	function(token, refreshToken, profile, done) {
		// make the code asynchronous
		// User.findOne won't execute until we have all our data back from Google
		process.nextTick(function() {
			// Find the user based on their Google ID
			User.findOne({ 'google.id': profile.id }, function(err, user) {
				if (err)
					return done(err);

				if (user) {
					// if the user is found, log them in
					return done(null, user);
				}
				else {
					// if the user is not in our database, create a new user
					var newUser = new User();
					// set relevant info
					newUser.google.id = profile.id;
					newUser.google.token = token;
					newUser.google.name = profile.displayName;
					newUser.google.email = profile.emails[0].value // grab first email

					// save user info
					newUser.save(function(err) {
						if (err)
							throw err;
						return done(null, newUser);
					});
				}
			});
		});
	}));

};