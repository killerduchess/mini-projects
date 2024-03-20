//function to set a given theme /color-scheme
function setTheme(themeName){
    localStorage.setItem('theme', themeName);
    document.documentElement.className = themeName;
}

//function to toggle between light and dark theme
function toggleTheme(){
    if(localStorage.getItem('theme')=='theme-dark'){
        setTheme('theme-light');
    }
    else{
        setTheme('theme-dark');
    }
}

//immediately invoked function to set inital theme on inital load of the oage
(function(){
    if(localStorage.getItem('theme')==='theme-dark'){
        setTheme('theme-dark');
        document.getElementById('slider').checked - false;
    }
    else{
        setTheme('theme-light');
        document.getElementById('slider').checked = true;
    }
})();