function toggleMode(){
    const html = document.documentElement;

    if(html.classList.contains('light')){

    }
}


function getCurrentTheme(){
    let theme = window.matchMedia('(prefers-color-scheme:dark)').matches ? 'dark' : 'light';
    console.log(theme);
}
