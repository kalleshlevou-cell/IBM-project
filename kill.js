let menuicon = document.querySelector('#menuicon');
let navbar = document.querySelector('.navbar');

menuicon.onclick = () =>{
    menuicon.classList.toggle('bx-x')
    navbar.classList.toggle('active')
}


let section = document.querySelector('section');
let navlinks = document.querySelector('header nav a')

window.onscroll = () =>{
    section.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height =sec.offsetHeight;
        let id =sec.getAttribute('id');

        if(top >= offset && top < offset + height ){
            navlinks.forEach(links =>{
                links.classlist.remove('active');
                document.querySelector('header nav a[href*='+ id +']').classList.add('active');
            })
        }
        
    });
    let header = document.querySelector('header');
    header.classList.toggle('sticky',window.scrollY > 100);

    menuicon.classList.remove('bx-x')
    navbar.classList.remove('active')
}
ScrollReveal({
     reset: true,
    distance:'80px',
    duration:2000,
    delay:200
});
ScrollReveal().reveal(`.home-content, .heading`,{origin:'top'});
ScrollReveal().reveal(`.home-img, .services-continer , .portfolio-box ,.contact form `,{origin:'bottom'});
ScrollReveal().reveal(`.home-content h1, .about-img`,{origin:'left'});
ScrollReveal().reveal(`.home-content p, .about-content`,{origin:'right'});

const typed = new typed(`.multiple-text`,{
    String: ['Frontend Developer' ,'engineer','Frontend Developer'],
    typeSpeed: 100,
    backSpeed:100,
    backdelay:1000,
    loop:true
});   