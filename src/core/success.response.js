class SuccessResponse {
  constructor(data = {}, message = 'Ok', statusCode = 200) {
    this.status = 'Success'

    this.statusCode = statusCode
    this.data = data
    this.message = message
  }

  send(res) {
    return res.status(this.statusCode).json({
      status: this.status,
      data: this.data,
      message: this.message,
    })
  }
}

module.exports = SuccessResponse
