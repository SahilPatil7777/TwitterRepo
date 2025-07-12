import JWT from "passport-jwt";
import User from "../models/user.js";

// strategy object
const JWTStrategy = JWT.Strategy;
const ExtractJWT = JWT.ExtractJwt;

const opts = {
  jwtFromRequest: ExtractJWT.fromAuthHeaderAsBearerToken(),
  secretOrKey: "twitter_secret",
};

// login to validate the token
// passportAuth is way in which authentication using jwt
export const passportAuth = (passport) => {
  try {
    passport.use(
      new JWTStrategy(opts, async (jwt_payload, done) => {
        const user = await User.findById(jwt_payload.id);
        if (!user) {
          done(null, false);
        } else {
          done(null, user);
        }
      })
    );
  } catch (error) {
    console.log(error);
    throw error;
  }
};
