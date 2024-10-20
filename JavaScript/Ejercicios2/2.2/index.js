const allNazgul = document.querySelectorAll('.nazgul')

allNazgul.forEach(item =>{
    item.addEventListener('mouseover', function(){
        this.textContent = 'Nazgul'
        this.style.backgroundColor="black"
        this.style.color="white"
    })
    item.addEventListener('mouseout',function(){
        this.textContent=this.getAttribute('data-original-text')
        this.style.backgroundColor="white"
        this.style.color="black"
    })
    item.setAttribute('data-original-text',item.textContent)
    })