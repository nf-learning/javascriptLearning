
function alphabetPosition(text) {
    const letterMap = new Map();
    letterMap.set('a', 1); letterMap.set('b',2); letterMap.set('c', 3); letterMap.set('d',4); letterMap.set('e', 5); letterMap.set('f',6); letterMap.set('g', 7); letterMap.set('h',8); 
    letterMap.set('i',9); letterMap.set('j', 10); letterMap.set('k',11); letterMap.set('l', 12); letterMap.set('m',13); letterMap.set('n', 14); letterMap.set('o',15); 
    letterMap.set('p', 16); letterMap.set('q',17); letterMap.set('r', 18); letterMap.set('s',19); letterMap.set('t', 20); letterMap.set('u',21); letterMap.set('v', 22); letterMap.set('w',23); 
    letterMap.set('x', 24); letterMap.set('y',25); letterMap.set('z', 26); 
    
      text = text.toLowerCase();
      console.log(text);
      console.log(letterMap);
      console.log(letterMap.has('a'));

      retText ="";
      for (let i=0 ; i < text.length; i++){
        if(letterMap.has(text[i])){
          retText += letterMap.get(text[i]) +" "
        }else {
            console.log(text[i]);
        }
      }
      console.log(retText);
      
      return retText;
    }
    
    
alphabetPosition("test");    