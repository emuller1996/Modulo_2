var traverseDomAndCollectElements = function(matchFunc, startEl) {
  var resultSet = [];

  if (typeof startEl === "undefined") {
    startEl = document.body;
  }

  // recorre el árbol del DOM y recolecta elementos que matchien en resultSet
  // usa matchFunc para identificar elementos que matchien

  // TU CÓDIGO AQUÍ
  

  
};

// Detecta y devuelve el tipo de selector
// devuelve uno de estos tipos: id, class, tag.class, tag


var selectorTypeMatcher = function(selector) {
  // tu código aquí
  
  let s = selector.split('');
  if (s[0] ==="#" ){
    return "id";
  }else if (s[0] ==="."){
    return "class";
  } else if (s.includes(".")){
    return "tag.class";
  }else{
    return "tag";
  }
};

// NOTA SOBRE LA FUNCIÓN MATCH
// recuerda, la función matchFunction devuelta toma un elemento como un
// parametro y devuelve true/false dependiendo si el elemento
// matchea el selector.

var matchFunctionMaker = function(selector) {
  var selectorType = selectorTypeMatcher(selector);
  var matchFunction;
  if (selectorType === "id") { 
    matchFunction = (el)=>{
      if( selector.slice(1) === el.id){
        return true;
      }else{
        return false;
      }
    }
   
  } else if (selectorType === "class") {

    matchFunction = (el)=>{
      let encontrado = 0;
      let arr = el.className.split(" ");

      arr.forEach(clas => {
        if(clas === selector.slice(1)){
          encontrado++;
        }
      });

      if (encontrado === 0) {
        return false;
      }else{
        return true;
      }
    }
    
  } else if (selectorType === "tag.class") {

    matchFunction = (el)=>{
      let encontrado = 0;
      el.className.split(" ").forEach(clas => {
        if(clas === selector.split(".")[1]){
          encontrado++;
        }
      });
      if( selector.split(".")[0] === el.tagName.toLowerCase() && encontrado !==0){
        return true;
      }else{
        return false;
      }
    }
    
    
  } else if (selectorType === "tag") {

    matchFunction = (el)=>{
      if( selector === el.tagName.toLowerCase() ){
        return true;
      }else{
        return false;
      }
    }
    
  }
  return matchFunction;
};

var $ = function(selector) {
  var elements;
  var selectorMatchFunc = matchFunctionMaker(selector);
  elements = traverseDomAndCollectElements(selectorMatchFunc);
  return elements;
};
