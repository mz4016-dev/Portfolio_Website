
function setDayTheme() {
    const day = new Date();
    const dayofWeek = day.getDay();
    const headerElement = document.getElementById('main-title');

    if (dayofWeek === 0){
        document.body.style.border = "5px solid #660000";
        document.body.style.boxShadow = "0 0 20px #660000";
        document.documentElement.style.setProperty('--current-bg-image', "url('./images/Sunday.jpg')");
        document.body.classList.add('faded-bg-enabled');
        headerElement.style.color = "#660000";
    } else if (dayofWeek === 1){
        document.body.style.border = "5px solid #026C3D";
        document.body.style.boxShadow = "0 0 20px #026C3D";
        document.documentElement.style.setProperty('--current-bg-image', "url('./images/Monday.jpg')");
        document.body.classList.add('faded-bg-enabled');
        headerElement.style.color = "#026C3D";
    } else if (dayofWeek === 2){
        document.body.style.border = "5px solid #583759";
        document.body.style.boxShadow = "0 0 20px #583759";
        document.documentElement.style.setProperty('--current-bg-image', "url('./images/Tuesday.jpg')");
        document.body.classList.add('faded-bg-enabled');
        headerElement.style.color = "#583759";	
    } else if (dayofWeek === 3){
        document.body.style.border = "5px solid #348781";
        document.body.style.boxShadow = "0 0 20px #348781";
        document.documentElement.style.setProperty('--current-bg-image', "url('./images/Wednesday.jpg')");
        document.body.classList.add('faded-bg-enabled');
		headerElement.style.color = "#348781";
    } else if (dayofWeek === 4){
        document.body.style.border = "5px solid #357EC7";
        document.body.style.boxShadow = "0 0 20px #357EC7";
        document.documentElement.style.setProperty('--current-bg-image', "url('./images/Thursday.jpg')");
        document.body.classList.add('faded-bg-enabled');
        headerElement.style.color = "#357EC7";	
    } else if (dayofWeek === 5){
        document.body.style.border = "5px solid #4E5180";
        document.body.style.boxShadow = "0 0 20px #4E5180";
        document.documentElement.style.setProperty('--current-bg-image', "url('./images/Friday.jpg')");
        document.body.classList.add('faded-bg-enabled');
        headerElement.style.color = "#4E5180";
    } else if (dayofWeek === 6){
        document.body.style.border = "5px solid #045D5D";
        document.body.style.boxShadow = "0 0 20px #045D5D"; 
        document.documentElement.style.setProperty('--current-bg-image', "url('./images/Saturday.jpg')");
        document.body.classList.add('faded-bg-enabled');
        headerElement.style.color = "#045D5D";	
    }
}

window.addEventListener('load', setDayTheme);

const logos = document.querySelectorAll('.image-row img');
logos.forEach(logo => {
    logo.addEventListener('click', function(event) {
        event.target.style.border = '2px solid #4a148c';
        setTimeout(() => {
            event.target.style.border = 'none';
        }, 300);
    });
});