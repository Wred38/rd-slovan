function getAge(x, y) {
    let dob = new Date(x); // string, month/day/year, example = '00/00/0000'
    let month_diff = Date.now() - dob.getTime();
    let age_dt = new Date(month_diff);
    let year = age_dt.getUTCFullYear();
    let age = Math.abs(year - 1970);
    let para = document.querySelector(y); // string, id, example = '#selakovic' 
    para.textContent += 'Starost: ' + age + 'let'
}
