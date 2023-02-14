module.exports = ({ env }) => ({
  apiToken: {
    salt: env("API_TOKEN_SALT", "U31fpYyKI9p/c67CYedDbA=="),
  },
  auth: {
    secret: env("ADMIN_JWT_SECRET", "341d2f233a19dc6ebcd87f1f0a8878bf"),
  },
});
