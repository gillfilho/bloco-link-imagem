const display = document.getElementById('display-content')
const links = Array.from(document.getElementsByClassName('link-image'))

const img0 = "url('https://images.unsplash.com/photo-1554415707-6e8cfc93fe23?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80')"
const img1 = "url('https://images.unsplash.com/photo-1515378960530-7c0da6231fb1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80')"
const img2 = "url('https://images.unsplash.com/photo-1544006659-f0b21884ce1d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80')"
const img3 = "url('https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1172&q=80')"
const img4 = "url('https://images.unsplash.com/photo-1587614382346-4ec70e388b28?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80')"

display.style.backgroundImage = img0

links.forEach(el => { 
    el.addEventListener('click', (el) => {
        let alvo = el.target.innerText
        
        if (alvo === 'Link Imagem 01')
        display.style.backgroundImage = img1
        else if (alvo === 'Link Imagem 02')
        display.style.backgroundImage = img2
        else if (alvo === 'Link Imagem 03')
        display.style.backgroundImage = img3
        else if (alvo === 'Link Imagem 04')
        display.style.backgroundImage = img4
        else display.style.backgroundImage = img0
     
    })
});