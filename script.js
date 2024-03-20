//your JS code here. If required.
    const input = document.querySelector('#fname')
    input.addEventListener('blur',()=>{
      const value = input.value.toUpperCase()
      if(value){
        input.value = value;
      }
      else{
        alert('please enter something')
      }
    })
