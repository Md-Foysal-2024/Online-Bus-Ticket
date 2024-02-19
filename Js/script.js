const allBtn = document.getElementsByClassName("add-btn");
let count = 0;
let less = 8;

for (const btn of allBtn) {
    btn.addEventListener("click", function (e) {

        count = count + 1;
        setInnerText("selected-seat", count)
        if (count > 4) {
            alert("Sorry You Can not select more than 4 seats");
        }
        less = less - 1;
        setInnerText("current-seat", less)

        if (less === 0) {
            alert("Seat is not available");
        }

        const seatName = e.target.innerText
        // console.log(e.target.innerText);

        const seatInformation = document.getElementById("seat-info");

        const tr = document.createElement("tr")

        const td = document.createElement("td")
        td.innerText = seatName;

        const td2 = document.createElement("td")
        td2.innerText = "Economy"

        const td3 = document.createElement("td");
        td3.innerText = "550"

        tr.appendChild(td);
        tr.appendChild(td2);
        tr.appendChild(td3);
        seatInformation.appendChild(tr)

        const selectSeatNumber = document.getElementById("A1");
        selectSeatNumber.innerText = seatName;
        addBackgroundColorById(seatName);

    })

}


function setInnerText(elementId, value) {
    document.getElementById(elementId).innerText = value;

}

function addBackgroundColorById(elementId) {
    const element = document.getElementById(elementId);
    element.classList.add("bg-[#1DD100]");
    element.classList.add("text-white");

}