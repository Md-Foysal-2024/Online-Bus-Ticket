const allSeats = document.getElementsByClassName("add-btn");

let seatCount = 0;
let seatLess = 40;
let totalPrice = 0;

for (const seat of allSeats) {
    seat.addEventListener("click", function (e) {

        seatCount = seatCount + 1;
        setInnerText("selected-seat", seatCount);
        if (seatCount > 4) {
            alert("Sorry You Can not select more than 4 seats");
        }
        seatLess = seatLess - 1;
        setInnerText("current-seat", seatLess);

        if (seatLess === 0) {
            alert("Seat is not available");
        }

        const seatName = e.target.innerText
        // console.log(e.target.innerText);

        const seatInformation = document.getElementById("seat-info");

        const tr = document.createElement("tr");

        const td = document.createElement("td");
        td.innerText = seatName;

        const td2 = document.createElement("td");
        td2.innerText = "economy"

        const td3 = document.createElement("td");
        td3.innerText = "550"
        // console.log(typeof  td3.innerText);

        tr.appendChild(td);
        tr.appendChild(td2);
        tr.appendChild(td3);
        seatInformation.appendChild(tr);

        setBackgroundColorById(seatName);


        const ticketPrice = parseFloat(td3.innerText);
        // console.log(typeof ticketPrice);

        totalPrice = totalPrice + ticketPrice;
        console.log(totalPrice);

        document.getElementById("total-price").innerText = totalPrice;
    })

}


function setInnerText(elementId, value) {
    document.getElementById(elementId).innerText = value;

}

function setBackgroundColorById(elementId) {
    const element = document.getElementById(elementId);
    element.classList.add("bg-[#1DD100]");
    element.classList.add("text-white");

}