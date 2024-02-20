const allSeats = document.getElementsByClassName("add-btn");

let seatCount = 0;
let seatLess = 40;
let totalPrice = 0;

for (const seat of allSeats) {
    seat.addEventListener("click", function (e) {


        if (seatCount > 3) {
            alert("Sorry You Can not select more than 4 seats");
            return seatCount;
        }
        seatCount = seatCount + 1;
        setInnerText("selected-seat", seatCount);
        seatLess = seatLess - 1;
        setInnerText("current-seat", seatLess);

        if (seatLess === 0) {
            alert("Seat is not available");
        }

        const seatName = e.target.innerText

        const seatInformation = document.getElementById("seat-info");

        const tr = document.createElement("tr");

        const td = document.createElement("td");
        td.innerText = seatName;

        const td2 = document.createElement("td");
        td2.innerText = "economy"

        const td3 = document.createElement("td");
        td3.innerText = "550"

        tr.appendChild(td);
        tr.appendChild(td2);
        tr.appendChild(td3);
        seatInformation.appendChild(tr);

        setBackgroundColorById(seatName);

        const ticketPrice = parseFloat(td3.innerText);
        totalPrice = totalPrice + ticketPrice;
        document.getElementById("total-price").innerText = totalPrice;


        document.getElementById("grand-total").innerText = totalPrice;
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


function hiddenElementById(elementId) {
    const element = document.getElementById(elementId)
    element.classList.add('hidden');
}


const applyBtn = document.getElementById("apply-btn");

applyBtn.addEventListener("click", function (e) {

    const couponElement = document.getElementById("input-field").value;

    const couponCode = couponElement;
    console.log(couponCode);

    if (totalPrice >= 2200) {
        if (couponCode === "NEW15") {

            const discountPrice = document.getElementById("discount-price");
            const discountAmount = totalPrice * 0.15;
            discountPrice.innerText = discountAmount.toFixed(2);

            const discountTotal = document.getElementById("grand-total");
            discountTotal.innerText = totalPrice - discountAmount.toFixed(2);
            document.getElementById("input-field").value = "";

            hiddenElementById("coupon-field");
        }
        else if (couponCode === "Couple 20") {

            const discountPrice = document.getElementById("discount-price");
            const discountAmount = totalPrice * 0.2;
            discountPrice.innerText = discountAmount.toFixed(2);

            const discountTotal = document.getElementById("grand-total");
            discountTotal.innerText = totalPrice - discountAmount.toFixed(2);
            document.getElementById("input-field").value = "";
            hiddenElementById("coupon-field");
        }
        else {
            alert("Invalid Coupon");
            document.getElementById("input-field").value = "";
        }

    }
    else {
        alert("Please Select 4 seats");
    }

})













