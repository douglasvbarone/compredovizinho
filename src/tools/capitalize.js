String.prototype.capitalize = function(lower = true) {
  return (lower ? this.toLowerCase() : this).replace(/(?:^|\s)\S/g, a =>
    a.toUpperCase()
  )
}
