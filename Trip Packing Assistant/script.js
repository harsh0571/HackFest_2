document.getElementById('tripForm').addEventListener('submit', function(e) {
    e.preventDefault();
    generatePackingList();
});

function generatePackingList() {
    const destination = document.getElementById('destination').value;
    const duration = parseInt(document.getElementById('duration').value);
    const season = document.getElementById('season').value;
    
    let packingList = getBasePackingList();
    packingList = addSeasonalItems(packingList, season);
    packingList = adjustForDuration(packingList, duration);
    
    displayPackingList(packingList);
}

function getBasePackingList() {
    return [
        "Passport",
        "Phone and charger",
        "Wallet",
        "Toiletries",
        "Underwear",
        "Socks",
        "T-shirts",
        "Pants/shorts",
        "Comfortable walking shoes"
    ];
}

function addSeasonalItems(list, season) {
    if (season === 'summer') {
        list = list.concat(["Sunglasses", "Sunscreen", "Hat", "Swimwear"]);
    } else if (season === 'winter') {
        list = list.concat(["Warm jacket", "Gloves", "Scarf", "Boots"]);
    }
    return list;
}

function adjustForDuration(list, duration) {
    if (duration > 7) {
        list.push("Laundry detergent");
    }
    return list;
}

function displayPackingList(list) {
    const packingListDiv = document.getElementById('packingList');
    packingListDiv.innerHTML = '<h2>Your Packing List:</h2>';
    const ul = document.createElement('ul');
    list.forEach(item => {
        const li = document.createElement('li');
        li.textContent = item;
        ul.appendChild(li);
    });
    packingListDiv.appendChild(ul);
}

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        document.getElementById("back-to-top").style.display = "block";
    } else {
        document.getElementById("back-to-top").style.display = "none";
    }
}

document.getElementById("back-to-top").onclick = function() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}