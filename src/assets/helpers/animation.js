
export function getAnim(styleSheet, name){
    for(let rule of document.styleSheets[styleSheet].cssRules){
        if(rule.name == name) return rule;
    }
}
export const addRules = (animName, ...rules)=>{
    for(let rule in rules){
        let rulePorcent = parseInt((100/rules.length)*(parseInt(rule)+1))
        getAnim(1, animName).appendRule(`${rulePorcent}% {${rules[rule]}}`)
    }
}

export function focusTo(cr){
    const scale = Math.min(visualViewport.width/cr.width, visualViewport.height/cr.height);
    const origin = `${cr.x+cr.width/2}px ${cr.y+cr.height/2}px`;
    return {scale, origin}
}


export function centerIt(target, cr, mobj, scroll){

    const newCr = target.getBoundingClientRect()    

    const halfView = {
        x: visualViewport.width/2,
        y: visualViewport.height/2
    }
    const targetCenter = {
        x: cr.width/2 + cr.x, 
        y: cr.height/2 + cr.y        
    } 

    const Min = {
        x: Math.min(halfView.x, targetCenter.x),
        y: Math.min(halfView.y, targetCenter.y)
    }
    const Max ={
        x: Math.max(halfView.x, targetCenter.x),
        y: Math.max(halfView.y, targetCenter.y)
    }

    const cx = parseInt(Min.x-Max.x)
    const cy = parseInt(Min.y- Max.y)
    
    //Negative means is out of the visual viewport.
    const fix = {
        right: (visualViewport.width-newCr.right),
        bottom: (visualViewport.height-newCr.bottom),
        x: (visualViewport.width-newCr.right) - newCr.left,
        y: (visualViewport.height-newCr.bottom) - newCr.top,
    }
    
    const translate = {
        x: (cx+fix.x/2)*scroll,
        y: (cy+fix.y/2)*scroll
    }
    if(parseInt(fix.x/2)){
        mobj.style.translate = `${newCr.x*scroll*-1}px ${newCr.x*scroll*-1}px`
    }
}


export function randomReveal(target, text_, milisecs){

    let text = target.textContent;
    let alf = "=-~<>|][;:{}|\\'`";
    let space = 0;

    if(text.length>text_.length){
        space = (text.length-text_.length)/2;
        text_ = text_.padStart(text.length+((text.length-text_.length)/2), " ");
        text_ = text_.padEnd(text_.length+((text.length-text_.length)), " ");
    }

    let avail = text_.split("").map((l,i) => i);
    text = text.split("");

    setInterval(()=>{

      if(avail.length>0){
        for(let i in avail){
          text[avail[i]] = alf[random(alf.length-1)];
          target.textContent = text.join("");
        }
      }
    }, 200)

    setInterval(()=>{
      if(avail.length>0){
        
      let r = random(avail.length-1)
      text[avail[r]] = text_[avail[r]];
      avail.splice(r, 1)
      target.textContent = text.join("")
      }
    }, milisecs/text.length)
}
  function random(max, min = 0){
    return parseInt(Math.random() * (max-min) + min);
  }

export function reveal(target, text, time){

    let text_ = target.textContent.trim();
    let difference = text.length !=text_.length && Math.abs(text.length-text_.length);
    let avail = text.split("").map((o, i)=>  i);
    
    text_ = text_.split("");
    const rinterval = setInterval(()=>{
        let alf = "&#*+%?£@§$";
        for(let i in avail){
            if(text_[avail[i]] != " ") text_[avail[i]] = alf[random(alf.length-1)]
            target.textContent = text_.join('')
        }
    }, 150);
    
    const intt = setInterval(()=>{
        if(difference>0){
            text_.splice(0, 1)
            text_.splice(text_.length-1, 1);
        }
        difference-=2
        target.textContent = text_.join('')
    }, (time/text_.length)*difference/difference)

    setTimeout(()=>{
        clearInterval(intt)

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