function getAge(x, y) {
    let dob = new Date(x); // string, month/day/year, example = '00/00/0000'
    let month_diff = Date.now() - dob.getTime();
    let age_dt = new Date(month_diff);
    let year = age_dt.getUTCFullYear();
    let age = Math.abs(year - 1970);
    let para = document.querySelector(y); // string, id, example = '#selakovic' 
    para.textContent += 'Starost: ' + age + 'let'
}

const tekme = [
    {
        home: "RD LL Grosist Slovan",
        away: "RD Urbanscape Loka",
        date: "09.09.2022 - 18:30",
        result: "24:27",
        liga: "Liga NLB",
        dvorana: "&Scaron;portna dvorana Kodeljevo"
    },
    {
        home: "RK Svi&scaron; Ivan&ccaron;na Gorica",
        away: "RD LL Grosist Slovan",
        date: "17.09.2022 - 19:00",
        result: "00:00",
        liga: "Liga NLB",
        dvorana: "Dvorana Osnovne &scaron;ole Sti&ccaron;na"
    },
    {
        home: "RD LL Grosist Slovan",
        away: "RD Riko Ribnica",
        date: "24.09.2022 - 18:30",
        result: "00:00",
        liga: "Liga NLB",
        dvorana: "&Scaron;portna dvorana Kodeljevo",
    },
    {
        home: "RK Maribor Branik",
        away: "RD LL Grosist Slovan",
        date: "01.10.2022 - 19:00",
        result: "00:00",
        liga: "Liga NLB",
        dvorana: "Dvorana Tabor",
    },
    {
        home: "RD LL Grosist Slovan",
        away: "RK Celje Pivovarna La&scaron;ko",
        date: "08.10.2022 - 18:30",
        result: "00:00",
        liga: "Liga NLB",
        dvorana: "&Scaron;portna Dvorana Kodeljevo",
    },
    {
        home: "RK Slovenj Gradec",
        away: "RD LL Grosist Slovan",
        date: "22.10.2022 - 19:00",
        result: "00:00",
        liga: "Liga NLB",
        dvorana: "&Scaron;portna Dvorana Slovenj Gradec",
    },
    {
        home: "RD LL Grosist Slovan",
        away: "MRK Krka",
        date: "05.11.2022 - 18:30",
        result: "00:00",
        liga: "Liga NLB",
        dvorana: "&Scaron;portna Dvorana Kodeljevo",
    },
    {
        home: "RK Jeruzalem Ormo&zcaron;",
        away: "RD LL Grosist Slovan",
        date: "12.11.2022 - 19:00",
        result: "00:00",
        liga: "Liga NLB",
        dvorana: "&Scaron;portna Dvorana Hardek",
    },
    {
        home: "RD LL Grosist Slovan",
        away: "RK Gorenje Velenje",
        date: "19.11.2022 - 18:30",
        result: "00:00",
        liga: "Liga NLB",
        dvorana: "&Scaron;portna Dvorana Kodeljevo",
    },
    {
        home: "RD Koper",
        away: "RD LL Grosist Slovan",
        date: "26.11.2022 - 19:00",
        result: "00:00",
        liga: "Liga NLB",
        dvorana: "Arena Bonifika",
    },
    {
        home: "RD LL Grosist Slovan",
        away: "RK Kr&scaron;ko",
        date: "03.12.2022 - 18:30",
        result: "00:00",
        liga: "Liga NLB",
        dvorana: "&Scaron;portna Dvorana Kodeljevo",
    },
    {
        home: "RD LL Grosist Slovan",
        away: "RK Dobova",
        date: "10.12.2022 - 18:30",
        result: "00:00",
        liga: "Liga NLB",
        dvorana: "&Scaron;portna Dvorana Kodeljevo",
    },
    {
        home: "RK Trimo Trebnje",
        away: "RD LL Grosist Slovan",
        date: "17.12.2022 - 19:00",
        result: "00:00",
        liga: "Liga NLB",
        dvorana: "Dvorana O&Scaron; Trebnje",
    },
    {
        home: "RD Urbanscape Loka",
        away: "RD LL Grosist Slovan",
        date: "04.02.2023 - 18:00",
        result: "00:00",
        liga: "Liga NLB",
        dvorana: "&Scaron;portna Dvorana Poden",
    },
    {
        home: "RD LL Grosist Slovan",
        away: "RK Svi&scaron; Ivan&ccaron;na Gorica",
        date: "11.02.2023 - 18:30",
        result: "00:00",
        liga: "Liga NLB",
        dvorana: "&Scaron;portna Dvorana Kodeljevo",
    },
    {
        home: "RD Riko Ribnica",
        away: "RD LL Grosist Slovan",
        date: "25.02.2023 - 19:00",
        result: "00:00",
        liga: "Liga NLB",
        dvorana: "&Scaron;RC Ribnica",
    },
    {
        home: "RD LL Grosist Slovan",
        away: "RK Maribor Branik",
        date: "04.03.2023 - 18:30",
        result: "00:00",
        liga: "Liga NLB",
        dvorana: "&Scaron;portna Dvorana Kodeljevo",
    },
    {
        home: "RK Celje Pivovarna La&scaron;ko",
        away: "RD LL Grosist Slovan",
        date: "18.03.2023 - 18:00",
        result: "00:00",
        liga: "Liga NLB",
        dvorana: "Dvorana Zlatorog",
    },
    {
        home: "RD LL Grosist Slovan",
        away: "RK Slovenj Gradec",
        date: "25.03.2023 - 18:30",
        result: "00:00",
        liga: "Liga NLB",
        dvorana: "&Scaron;portna Dvorana Kodeljevo",
    },
    {
        home: "MRK Krka",
        away: "RD LL Grosist Slovan",
        date: "01.04.2023 - 19:00",
        result: "00:00",
        liga: "Liga NLB",
        dvorana: "&Scaron;portna Dvorana Marof",
    },
    {
        home: "RD LL Grosist Slovan",
        away: "RK Jeruzalem Ormo&zcaron;",
        date: "08.04.2023 - 18:30",
        result: "00:00",
        liga: "Liga NLB",
        dvorana: "&Scaron;portna Dvorana Kodeljevo",
    },
    {
        home: "RK Gorenje Velenje",
        away: "RD LL Grosist Slovan",
        date: "15.04.2023 - 18:00",
        result: "00:00",
        liga: "Liga NLB",
        dvorana: "Rde&ccaron;a Dvorana",
    },
    {
        home: "RD LL Grosist Slovan",
        away: "RD Koper",
        date: "22.04.2023 - 18:30",
        result: "00:00",
        liga: "Liga NLB",
        dvorana: "&Scaron;portna Dvorana Kodeljevo",
    },
    {
        home: "RK Kr&scaron;ko",
        away: "RD LL Grosist Slovan",
        date: "13.05.2023 - 19:00",
        result: "00:00",
        liga: "Liga NLB",
        dvorana: "Dvorana &Scaron;C Kr&scaron;ko",
    },
    {
        home: "RK Dobova",
        away: "RD LL Grosist Slovan",
        date: "20.05.2023 - 19:00",
        result: "00:00",
        liga: "Liga NLB",
        dvorana: "&Scaron;portna Dvorana Dobova",
    },
    {
        home: "RD LL Grosist Slovan",
        away: "RK Trimo Trebnje",
        date: "27.05.2023 - 18:30",
        result: "00:00",
        liga: "Liga NLB",
        dvorana: "&Scaron;portna Dvorana Kodeljevo",
    }
]

function displayNextMatch(arr) {

    let dateStr
    let d
    let m
    let y
    let h
    let min
    const today = new Date()
    let matchDate

    for (let i = 0; i < arr.length; i++) {
        dateStr = arr[i].date
        d = Number(dateStr.substr(0, 2))
        m = Number(dateStr.substr(3, 2))
        y = Number(dateStr.substr(6, 4))
        h = Number(dateStr.substr(13, 2))
        min = Number(dateStr.substr(16, 2))
        matchDate = new Date(y, m - 1, d, h, min)
        console.log(`tekma ${i + 1}: ${m}/${d}/${y}`)
        console.log(matchDate)

        if (today < matchDate) {
            let datePara = document.querySelector('.tekma-date')
            datePara.textContent = arr[i].date
            let kindPara = document.querySelector('.tekma-kind')
            kindPara.textContent = arr[i].liga
            document.querySelector('#home').src = getTeamImgs(arr[i].home);
            document.querySelector('#away').src = getTeamImgs(arr[i].away);
            break
        }
    }

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
    else if (team == "RK Celje Pivovarna La&scaron;ko") {
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
        $(`<div id="a${i}" class="koledar-piece" />`).appendTo(`.koledar-cont`);
        $(`<div id="b${i}" class="koledar-piece-upper" />`).appendTo(`#a${i}.koledar-piece`);
        $(`<p />`).text(arr[i].liga).appendTo(`#b${i}.koledar-piece-upper`);
        $(`<div class="koledar-middle" />`).text(arr[i].date).appendTo(`#b${i}.koledar-piece-upper`);
        $(`<p>${arr[i].dvorana}</p>`).appendTo(`#b${i}.koledar-piece-upper`);
        $(`<div id="b${i}" class="koledar-piece-lower" />`).appendTo(`#a${i}.koledar-piece`);
        $(`<div id="c${i}" class="koledar-team" />`).appendTo(`#b${i}.koledar-piece-lower`);
        $(`<img src="` + getTeamImgs(arr[i].home) + `" >`).appendTo(`#c${i}.koledar-team`);
        $(`<p>${arr[i].home}</p>`).appendTo(`#c${i}.koledar-team`);
        $(`<div id="d${i}" class="koledar-rez koledar-middle" />`).text(arr[i].result).appendTo(`#b${i}.koledar-piece-lower`);
        $(`<div id="e${i}" class="koledar-team" />`).appendTo(`#b${i}.koledar-piece-lower`);
        $(`<p>${arr[i].away}</p>`).appendTo(`#e${i}.koledar-team`);
        $('<img src="' + getTeamImgs(arr[i].away) + '" >').appendTo(`#e${i}.koledar-team`);
    }
}
