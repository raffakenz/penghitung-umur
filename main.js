const month = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]

function hitungUmur () {
    let today = new Date()
    let tanggalLahir = new Date(document.getElementById('input-tanggal-lahir').value)
    let birthMonth, birthDate, birthYear

    let birthDetail = {
        date: tanggalLahir.getDate(),
        month: tanggalLahir.getMonth() + 1,
        year: tanggalLahir.getFullYear()
    }

    let currentYear = today.getFullYear()
    let currentMonth = today.getMonth() + 1
    let currentDate = today.getDate()

    function leapChecker (year) {
        if (year % 4 == 0 || (year % 100 == 0 && year % 400 == 0)) {
            month[1] = 29
        } else {
            month[1] = 28
        }
    }
    
    leapChecker(currentYear)

    if (
        birthDetail.year > currentYear || 
        (birthDetail.month > currentMonth && birthDetail.year == currentYear) ||
        (birthDetail.date > currentDate && birthDetail.month == currentMonth && birthDetail.year == currentYear)
    ) {
        alert('Belum ada yang lahir di tanggal itu!');
        displayResult("-", "-", "-")
        return
    }
    
    birthYear = currentYear - birthDetail.year

    if (currentMonth >= birthDetail.month) {
        birthMonth = currentMonth - birthDetail.month
    } else {
        birthYear--
        birthMonth = 12 + currentMonth - birthDetail.month
    }

    if (currentDate >= birthDetail.date) {
        birthDate = currentDate - birthDetail.date
    } else {
        birthMonth--
        let days = month[currentMonth - 1]
        birthDate = days + currentDate - birthDetail.date
        if (birthMonth < 0) {
            birthMonth = 11
            birthYear--
        }
        displayResult(birthDate, birthMonth, birthYear)
    }

    function displayResult (Bdate, Bmonth, Byear) {
        document.getElementById("tahun").textContent = Byear
        document.getElementById("bulan").textContent = Bmonth
        document.getElementById("hari").textContent = Bdate
    }

}