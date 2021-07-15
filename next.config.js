module.exports = {
    images: {
      domains: ['localhost', "res.cloudinary.com"],
    },
    env: {
      STRAPI_API_URL: process.env.STRAPI_API_URL,
      STRAPI_API_URL_LOCAL: process.env.STRAPI_API_URL_LOCAL,
    }
  }
  