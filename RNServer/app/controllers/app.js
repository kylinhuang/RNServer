'use strick'


exports.signature = function *(next) {
  this.body  = {
    success : true
  }
}
