require('datejs')
function combineUsers(...args){
  const combinedObject = {
    users: [],
    merge_date: ""
  }
  //Using loop to isolate each array then using spread to merge them 
  for(const array of args){
    combinedObject.users.push(...array)
  }
  // Adding an attribute to combined Object
  combinedObject.merge_date = Date.today().toString('M/d/yyyy')
 
  return combinedObject
}


module.exports = {
  ...(typeof combineUsers !== 'undefined' && { combineUsers })
};