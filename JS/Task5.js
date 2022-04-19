let login = prompt ('Enter your login');
if (login === 'Admin') {
    let pass = prompt ('Enter your password');
    if (pass === 'Я главний') {
        alert ('Welcome');
    } else if (pass === null) {
        alert ('Cancel');
    } else {
    alert ('wrong password');
    }
} else if (login === "" || login === null) {
    alert ('Отменено');
} else { 
    alert ('Я вас не знаю')
}
