    const nav = document.querySelector ('.nav-links');
    const openNavBtn = document.querySelector ('#toggle-open');
    const closeNavBtn = document.querySelector ('#toggle-close');


    const openNav = () => {

        nav.style.display = 'flex' ;
        openNavBtn.style.display = 'none';
        closeNavBtn.style.display = 'inline-block'
    }

     openNavBtn.addEventListener('click' , openNav)

    const closeNav = () => {

        nav.style.display = 'none' ;
        openNavBtn.style.display = 'inline-block';
        closeNavBtn.style.display = 'none'
    }

     closeNavBtn.addEventListener('click' , closeNav)