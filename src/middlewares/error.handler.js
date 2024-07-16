const { NotFoundError } = require('../core/error.response')

module.exports = app => {
  // Not Found
  app.use(() => {
    throw new NotFoundError('Not Found')
  })

  // Request error handle
  app.use((error, req, res, next) => {
    let errMessage = { message: error.message }

    if (error instanceof ApplicationError) {
      errMessage = process.env.NODE_ENV === 'development' ? { ...errMessage, stack: error.stack } : errMessage

      return res.status(error.statusCode).json(errMessage)
    }

    if (error instanceof mongoose.Error) {
      errMessage =
        process.env.NODE_ENV === 'development'
          ? { ...errMessage, stack: error.stack }
          : { errMessage: 'Service unavailable: Database operation timed out' }

      return res.status(error.statusCode).json(errMessage)
    }

    // if (error instanceof Error && error.statusCode) {
    //   return res.sendStatus(error.statusCode)
    // }

    next(error)
  })

  // Fallthrough error handle
  app.use((error, req, res, next) => {
    const errMessage =
      process.env.NODE_ENV === 'development'
        ? { message: error.message, stack: error.stack }
        : { message: 'Internal Server Error' }

    return res.status(500).json(errMessage)
  })
}
