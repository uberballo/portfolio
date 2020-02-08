
const modifyLength = (object, field, max_length = 150) =>{
  if (!object[field]){
    return object
  }
    const toModify = object[field]
    const newValue =
      toModify.length > max_length 
      ? toModify.substring(0, max_length) + '...'
      : toModify;
      const newObject = {...object, [field]:newValue}
    return newObject
}

export default modifyLength