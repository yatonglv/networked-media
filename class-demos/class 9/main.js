// window.onload is shorthand for this
window.addEventListener("load",()=>{
    //documen.body is the selector to retrieve the body html element
    // e is the parameter in the anonymuos arrow function 
    // it si automatically populated by js and contains 
    // all of the 
    document.body.addEventListener("click",(e)=>{
        console.log('document.body was clicked')
        console.log(${e.clientX}, ${e.clientY})
    
    })
    // using ids are good for js!
    // any time we have interaction, use id
    let textDIv = document.getElementById('text')

    document.addEventListener('keydown',(e)=> {
        // 
        console.log('key pressed!')
        console.log(e.key)
        textDIv.textcontent += e.key
        // adding the key that was typed to the div on my page 

        if(e.key == " "){
            textDIv.textContent += ''
        }

    })
})