let totalSeats = 40;
let selectedSeats = 0;
let seatPrice = 550; 
let discountPercentage = 0; 

const seatContainer = document.getElementById('seatContainer');
const selectedSeatsDisplay = document.getElementById('selectedSeats');
const totalSeatsDisplay = document.getElementById('totalSeats');
const totalPriceDisplay = document.getElementById('totalPrice');
const finalPriceElement = document.getElementById('finalPrice');

for (let row = 0; row < 10; row++) {
    for (let seatNumber = 1; seatNumber <= 4; seatNumber++) {
        const seat = document.createElement('div');
        seat.className = 'seat';
        seat.textContent = String.fromCharCode(65 + row) + seatNumber;
        seat.addEventListener('click', () => selectSeat(seat));
        seatContainer.appendChild(seat);
    }
}

function selectSeat(seat) {
    if (!seat.classList.contains('selected')) {
        seat.classList.add('selected');
        selectedSeats++;
    } else {
        seat.classList.remove('selected');
        selectedSeats--;
    }

    updateSelectedSeats();
    updateTotalPrice();
}

function updateSelectedSeats() {
    selectedSeatsDisplay.textContent = selectedSeats;
}

function applyCoupon() {
    updateTotalPrice();
}

function calculateDiscount(price) {
    const couponInput = document.getElementById('coupon').value.toUpperCase();

    if (couponInput === 'NEW15') {
        discountPercentage = 15;
    } else if (couponInput === 'COUPLE20') {
        discountPercentage = 20;
    } else {
        discountPercentage = 0;
    }

    return price - (price * (discountPercentage / 100));
}

function updateTotalPrice() {
    const totalSeatsDisplay = document.getElementById('totalSeats');
    totalSeatsDisplay.textContent = totalSeats;
    const totalPrice = selectedSeats * seatPrice;
    const discountedPrice = calculateDiscount(totalPrice);
    totalPriceDisplay.textContent = discountedPrice.toFixed(2);
    finalPriceElement.textContent = discountedPrice.toFixed(2);
}