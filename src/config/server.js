module.exports = module.exports.default = Object.freeze({
  port: '' || '',
  environment: '' || 'development',
  corsOptions: {
    origin: '*',
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    credentials: true,
  },
  //   // Cấu hình bảo vệ khổi tấn công DDos
  //   rateLimit: {
  //     windowMs: 15 * 60 * 1000,
  //     max: 100,
  //   },
  //   helmetConfig: {
  //     contentSecurityPolicy: false, // Vô hiệu hoá CSP
  //   },
})
