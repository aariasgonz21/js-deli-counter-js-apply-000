function takeANumber(katzDeliLine, name){
  katzDeliLine.push(name);
  return `Welcome, ${name}. You are number ${katzDeliLine.length} in line.`;
}

function nowServing(katzDeliLine){
  if(katzDeliLine.length === 0){
    return "There is nobody waiting to be served!";
  }
  else{
    return `Currently serving ${katzDeliLine.shift()}.`;
  }
}

function currentLine(katzDeliLine){
  if(katzDeliLine.length === 0){
    return "The line is currently empty."
  }
  else{
    let message = ``;
    for(var i = 0; i < katzDeliLine.length; i++){
      
    }
  }
}

/*
 Try #1: 
  else{
    for(var i = 0; i < katzDeliLine.length; i++){
      return `The line is currently ${i + 1}. ${katzDeliLine[i]}`;
    }
    ***Only returned one name not the name in a row***
    
    Try #2:
    else{
    for(var i = 0; i < katzDeliLine.length; i++){
      list += `${i + 1}. ${katzDeliLine[i]}, `
    }
    return `The line is currently: ${list}`
  }
  ***Returned list but added ',' to the last name
*/
