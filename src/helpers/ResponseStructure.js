class ResponseStructure {

  constructor(status, message, data) {
    this.status = status || 200;
    this.message = message || "";
    this.data = data || {};
  }

}

module.exports = ResponseStructure;