function sizeof (object) {
  if (Buffer.isBuffer(object)) {
    return object.length
  }

  var objectType = typeof (object)
  switch (objectType) {
    case 'string':
      return object.length * ECMA_SIZES.STRING
    case 'boolean': 
      return ECMA_SIZES.BOOLEAN // 4
    case 'number':
      return ECMA_SIZES.NUMBER //8
    case 'object':
      if (Array.isArray(object)) {
        return object.map(sizeof).reduce((acc, curr) => acc + curr, 0)
      } else {
        return sizeOfObject(object)
      }
    default:
      return 0
  }
}