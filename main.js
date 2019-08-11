window.onload = function () {
    document.querySelector("#convert").addEventListener("click", Convert);
}

function Convert() {
    let input = document.querySelector("#input").value;

    if (input === "") {
        document.querySelector("#result").innerHTML = "Enter a $$ amount..";
    } else {
        let result = document.querySelector("#result");
        const num = 2.2046;

        CalcAndDisplay(input, result, num);
    }
}

function CalcAndDisplay(input, result, num) {
    if (lbs.checked === true) {
        let res = input * num;
        res = res.toFixed(2);
        result.innerHTML = `$${input}/lb > $${res}/kg`;
    } else {
        let res = input / num;
        res = res.toFixed(2);
        result.innerHTML = `$${input}/kg > $${res}/lb`;
    }
}