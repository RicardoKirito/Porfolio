
  function random(max, min = 0){
    return parseInt(Math.random() * (max-min) + min);
  }

export function reveal(target, text, time){
   
    let text_ = target.textContent.trim();
    let difference = text.length !=text_.length && Math.abs(text.length-text_.length); //calculate the length differences between the new text and the old one.
    let avail = text.split("").map((o, i)=>  i);  //Create a list of numbers base on the new text characters.
    
    text_ = text_.split(""); 
    //Create an interval to change letters for a random symbol.
    const rinterval = setInterval(()=>{
        let alf = "&#*+%?£@§$";
        for(let i in avail){
            if(text_[i] != " ") text_[avail[i]] = alf[random(alf.length-1)]
            target.textContent = text_.join('')
        }
    }, 150);
    
    const intt = setInterval(()=>{
        //If there is any difference in size we remove the 1st and last element
        if(difference>0){
            text_.splice(0, 1)
            text_.splice(text_.length-1, 1);
        }
        //Here we delete the extra letters from the original text
        difference-=2
        target.textContent = text_.join('')
    }, time/text_.length)
    //when the extra space is removed from the original text
    setTimeout(()=>{
        clearInterval(intt)
        //Reveal the letters ramdomly 
        const intt2 = setInterval(()=>{
            let rn = random(avail.length);
            let index = avail[rn];
            text_[index] = text[index];
            avail.splice(rn, 1);
            target.textContent = text_.join('')
        
        
        }, time/text_.length)
    
        setTimeout(()=>{
            clearInterval(intt2)
            clearInterval(rinterval)
        }, time)

    }, (time/text_.length)*difference)
    

}

export function revealOnScroll(target, text, time){
   
    let text_ = target.textContent.trim();
    let difference = text.length !=text_.length && Math.abs(text.length-text_.length); //provide the amount in length between the old & new one.
    let avail = text.split("").map((o, i)=>  i);  //Create a list of numbers base on the text length.
    
    text_ = text_.split(""); 
    //Create an interval to change letters for a random symbol.
    const rinterval = setInterval(()=>{
        let alf = "&#*+%?£@§$";
        for(let i in avail){
            if(text_[avail[i]] != " ") text_[avail[i]] = alf[random(alf.length-1)]
            target.textContent = text_.join('')
        }
    }, 150);
    
    const intt = setInterval(()=>{
        //If there is any difference in size we remove the 1st and last element
        if(difference>0){
            text_.splice(0, 1)
            text_.splice(text_.length-1, 1);
        }
        //Here we delete the extra letters from the original text
        difference-=2
        target.textContent = text_.join('')
    }, time/text_.length)
    //when the extra space is removed from the original text
    setTimeout(()=>{
        clearInterval(intt)
        //Reveal the letters ramdomly 
        const intt2 = setInterval(()=>{
            let rn = random(avail.length);
            let index = avail[rn];
            text_[index] = text[index];
            avail.splice(rn, 1);
            target.textContent = text_.join('')
        
        
        }, time/text_.length)
    
        setTimeout(()=>{
            clearInterval(intt2)
            clearInterval(rinterval)
        }, time)

    }, (time/text_.length)*difference)
    

}
