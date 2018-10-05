export function getPercentage(part, tot){
  const partial = parseFloat(part);
  const total = parseFloat(tot);
  if(!partial || !total){    
    return 0;
  }
  return parseFloat(((partial/total)*100).toFixed(2));
};