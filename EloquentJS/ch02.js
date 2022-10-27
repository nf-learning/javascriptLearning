function _7loop(){
    let output = "#"
    for(let i=0;i<7;i++ )
    {
        console.log(output)
        output +="#"
    }
}

//_7loop();

function fizzBuzz(){
    
    for (let i=1; i<=100; i++){
        output=""
        if(i%3==0){output +="Fizz"}
        if(i%5==0){output +="Buzz"}
        if(output!=""){console.log(output + " " +i)}
    }
}

//fizzBuzz()

function board(size){
    output=""
    for (let i=1; i<=size;i++){
        for(let j=1; j<=size; j++){
            if(i%2==0){
                if(j%2==0){output+=" "}
                else{output+="#"}
            }else{
                if(j%2==1){output+=" "}
                else{output+="#"}
            }
        }
        output+="\n";
    }
    return output;
}

//console.log(board(8));