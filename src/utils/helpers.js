export function getPercentage(part, total){
  if(!part || !total || total===0){
    return
  }
  return ((part/total)*100).toFixed(2);
};