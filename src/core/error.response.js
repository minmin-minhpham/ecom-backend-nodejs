const httpStatusCode = require('../utils/httpStatusCode')

class ApplicationError extends Error {
  constructor(statusCode, message, ...args) {
    super(...args)

    this.statusCode = statusCode
    this.message = message
  }
}

class BadRequestError extends ApplicationError {
  constructor(message = httpStatusCode.ReasonPhrases.BAD_REQUEST, ...args) {
    super(httpStatusCode.StatusCodes.BAD_REQUEST, message, ...args)
  }
}

class UnauthorizedError extends ApplicationError {
  constructor(message = httpStatusCode.ReasonPhrases.UNAUTHORIZED, ...args) {
    super(httpStatusCode.StatusCodes.UNAUTHORIZED, message, ...args)
  }
}

class ForbiddenError extends ApplicationError {
  constructor(message = httpStatusCode.ReasonPhrases.FORBIDDEN, ...args) {
    super(httpStatusCode.StatusCodes.FORBIDDEN, message, ...args)
  }
}

class NotFoundError extends ApplicationError {
  constructor(message = httpStatusCode.ReasonPhrases.NOT_FOUND, ...args) {
    super(httpStatusCode.StatusCodes.NOT_FOUND, message, ...args)
  }
}

class InternalError extends ApplicationError {
  constructor(message = httpStatusCode.ReasonPhrases.INTERNAL_SERVER_ERROR, ...args) {
    super(httpStatusCode.StatusCodes.INTERNAL_SERVER_ERROR, message, ...args)
  }
}

class HTTPNotSupportedError extends ApplicationError {
  constructor(message = httpStatusCode.ReasonPhrases.HTTP_VERSION_NOT_SUPPORTED, ...args) {
    super(httpStatusCode.StatusCodes.HTTP_VERSION_NOT_SUPPORTED, message, ...args)
  }
}

module.exports = {
  ApplicationError,
  BadRequestError,
  UnauthorizedError,
  ForbiddenError,
  NotFoundError,
  InternalError,
  HTTPNotSupportedError,
}
