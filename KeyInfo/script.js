function showKeyInfo(e){
    //get the element id is 'insert'
    const insert = document.getElementById('insert');
    
    //clear everything before your start building the innerHTML.
    insert.innerHTML='';

    //We need 3 pieces of info.

    const keyInfo ={
        'key': e.key===' ' ? 'Space' : e.key,
        'keyCode' : e.keyCode,
        'code': e.code,
    };

    for(let key in keyInfo){
        const div = document.createElement('div');
        div.className='key';
        const small = document.createElement('small');

        const keyText = document.createTextNode(key);
        const keyValue = document.createTextNode(keyInfo[key]);

        small.appendChild(keyText);
        div.appendChild(small);
        div.appendChild(keyValue);
       
        insert.appendChild(div);
        console.log(keyText);
        console.log(keyValue)
    }

        
}

window.addEventListener('keydown',showKeyInfo);