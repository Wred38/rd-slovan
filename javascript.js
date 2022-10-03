
function hamburgerFunc() {
    let x = document.querySelector(".drop-links");
    if (getComputedStyle(x).display === "flex") {
        x.style.display = "none";
    }
    else {
        x.style.display = "flex";
    }
}

function getAge(x, y) {
    let dob = new Date(x); // string, month/day/year, example = '00/00/0000'
    let month_diff = Date.now() - dob.getTime();
    let age_dt = new Date(month_diff);
    let year = age_dt.getUTCFullYear();
    let age = Math.abs(year - 1970);
    let para = document.querySelector(y); // string, id, example = '#selakovic' 
    para.textContent += 'Starost: ' + age + 'let'
}

function getNextMatchDate(array, index) {
    let dateStr
    let d
    let m
    let y
    let h
    let min
    let matchDate
    dateStr = array[index].date
    d = Number(dateStr.substr(0, 2))
    m = Number(dateStr.substr(3, 2))
    y = Number(dateStr.substr(6, 4))
    h = Number(dateStr.substr(13, 2))
    min = Number(dateStr.substr(16, 2))
    matchDate = new Date(y, m - 1, d, h, min)
    return matchDate
}

function displayNextMatch(arr) {
    const today = new Date()
    let day
    for (let i = 0; i < arr.length; i++) {
        if (today.getTime() < (getNextMatchDate(arr, i).getTime() + 7200000)) {
            day = getNextMatchDate(arr, i).toString().substr(0, 3)
            let datePara = document.querySelector('.tekma-date')
            datePara.textContent = dayToSlovene(day).toLowerCase() + ' ' + arr[i].date
            let kindPara = document.querySelector('.tekma-kind')
            if (arr[i].liga == "Liga NLB") {
                kindPara.textContent = ""
                $(`<img src="./images/ekipe/NLB_liga.png" />`).appendTo(kindPara)
            }
            else {
                kindPara.textContent = arr[i].liga
            };
            document.querySelector('#home').src = getTeamImgs(arr[i].home);
            document.querySelector('#away').src = getTeamImgs(arr[i].away);
            break
        }
    }
}

function displayMatchCountdown(arr) {
    const today = new Date()
    for (let i = 0; i < arr.length; i++) {
        if (today.getTime() < (getNextMatchDate(arr, i).getTime() + 7200000)) {
            matchTime = getNextMatchDate(arr, i)
            break
        }
    }
    let x = setInterval(function () {
        let now = new Date();
        let distance = matchTime - now.getTime();

        let days = Math.floor(distance / (1000 * 60 * 60 * 24));
        let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        let seconds = Math.floor((distance % (1000 * 60)) / 1000);

        hours = hours.toLocaleString(undefined, {minimumIntegerDigits: 2});
        minutes = minutes.toLocaleString(undefined, {minimumIntegerDigits: 2});
        seconds = seconds.toLocaleString(undefined, {minimumIntegerDigits: 2});

        let d = "dni "
        let h = "ur "
        let m = "min "
        let s = "sek "

        if (days == 1) {
            d = "dan "
        }
        if (hours < 5) {
            if (hours == 2) {
                h = "uri "
            }
            else if (hours == 1) {
                h = "ura "
            }
            else if (hours == 0){
                h = "ur "
            }
            else {
                h = "ure "
            }
        }


        if (days + hours + minutes == 0) {
            document.querySelector(".tekma-countdown").innerText = seconds + s;
        }
        else if (days + hours == 0) {
            console.log("d"+days)
            console.log('h'+hours)
            document.querySelector(".tekma-countdown").innerText = minutes + m + seconds + s;
        }
        else if (days == 0) {
            document.querySelector(".tekma-countdown").innerText = hours + h
                + minutes + m + seconds + s;
        }
        else {
            document.querySelector(".tekma-countdown").innerText = days + d + hours + h
                + minutes + m + seconds + s;
        }

        // If the count down is finished, write some text 
        if (distance < 0) {
            clearInterval(x);
            document.querySelector(".tekma-countdown").innerText = "LIVE!";
        }

    }, 1000);
}

function dayToSlovene(day) {
    let matchDay

    if (day == 'Mon') {
        matchDay = 'Ponedeljek'
    }
    else if (day == 'Tue') {
        matchDay = 'Torek'
    }
    else if (day == 'Wed') {
        matchDay = 'Sreda'
    }
    else if (day == 'Thu') {
        matchDay = 'Četrtek'
    }
    else if (day == 'Fri') {
        matchDay = 'Petek'
    }
    else if (day == 'Sat') {
        matchDay = 'Sobota'
    }
    else if (day == 'Sun') {
        matchDay = 'Nedelja'
    }

    return matchDay
}

function getTeamImgs(team) {
    let teamImg = "./images/ekipe/"

    if (team == "RD LL Grosist Slovan") {
        teamImg += "Slovan-logo-new.svg"
    }
    else if (team == "RD Urbanscape Loka") {
        teamImg += "Urbanscape_logo_2019.png"
    }
    else if (team == "RK Svi&scaron; Ivan&ccaron;na Gorica") {
        teamImg += "RK_Svis_IG_2.png"
    }
    else if (team == "RD Riko Ribnica") {
        teamImg += "RD_Riko_Ribnica.png"
    }
    else if (team == "RK Maribor Branik") {
        teamImg += "rk_branik_maribor.png"
    }
    else if (team == "RK Celje Pivoletna La&scaron;ko") {
        teamImg += "RK_CPL.png"
    }
    else if (team == "RK Slovenj Gradec") {
        teamImg += "RK Slovenj Gradec.png"
    }
    else if (team == "MRK Krka") {
        teamImg += "MRK_Krka.png"
    }
    else if (team == "RK Jeruzalem Ormo&zcaron;") {
        teamImg += "RK_Jeruzalem_Ormoz.png"
    }
    else if (team == "RK Gorenje Velenje") {
        teamImg += "RKGV_logotip.png"
    }
    else if (team == "RD Koper") {
        teamImg += "RD_Koper.png"
    }
    else if (team == "RK Kr&scaron;ko") {
        teamImg += "RK_Krsko.png"
    }
    else if (team == "RK Dobova") {
        teamImg += "RK_Dobova.png"
    }
    else if (team == "RK Trimo Trebnje") {
        teamImg += "RK_Trimo_Trebnje.png"
    }
    else {
        teamImg += "Slovan-logo-new.svg"
    }

    return teamImg
}

function createCalendar(arr) {
    for (let i = 0; i < arr.length; i++) {
        $(`<div id="${i}" class="koledar-piece" />`).appendTo(`.koledar-cont`);
        $(`<div id="${i}" class="koledar-piece-upper" />`).appendTo(`#${i}.koledar-piece`);
        $(`<p />`).text(arr[i].liga).appendTo(`#${i}.koledar-piece-upper`);
        $(`<div class="koledar-middle" />`).text(arr[i].date).appendTo(`#${i}.koledar-piece-upper`);
        $(`<p>${arr[i].dvorana}</p>`).appendTo(`#${i}.koledar-piece-upper`);
        $(`<div id="${i}" class="koledar-piece-lower" />`).appendTo(`#${i}.koledar-piece`);
        $(`<div id="a${i}" class="koledar-team" />`).appendTo(`#${i}.koledar-piece-lower`);
        $(`<img src="` + getTeamImgs(arr[i].home) + `" >`).appendTo(`#a${i}.koledar-team`);
        $(`<p>${arr[i].home}</p>`).appendTo(`#a${i}.koledar-team`);
        $(`<div id="${i}" class="koledar-rez koledar-middle" />`).text(arr[i].result).appendTo(`#${i}.koledar-piece-lower`);
        $(`<div id="b${i}" class="koledar-team" />`).appendTo(`#${i}.koledar-piece-lower`);
        $(`<p>${arr[i].away}</p>`).appendTo(`#b${i}.koledar-team`);
        $('<img src="' + getTeamImgs(arr[i].away) + '" >').appendTo(`#b${i}.koledar-team`);
    }
}

function createMiniRokomet(arr) {
    for (let i = 0; i < arr.length; i++) {
        $(`<div id="${i}" class="sola" />`).appendTo(`.sole`);
        $(`<div id="${i}" class="sola-up" />`).appendTo(`#${i}.sola`);
        $(`<p id="${i}" class="sola-ime" >${arr[i].sola}</p>`).appendTo(`#${i}.sola-up`);
        $(`<p id="${i}" class="more-btn-inactive"><i class="fas fa-chevron-right"></i></p>`).appendTo(`#${i}.sola-up`);
        $(`<div id="${i}" class="sola-podatki sola-podatki-hide" />`).appendTo(`#${i}.sola`);
        $(`<p class="termin" />${arr[i].termin1}</p>`).appendTo(`#${i}.sola-podatki`);
        $(`<p class="termin" />${arr[i].termin2}</p>`).appendTo(`#${i}.sola-podatki`);
        $(`<p class="trener" />${arr[i].trener}</p>`).appendTo(`#${i}.sola-podatki`);
    }
}



