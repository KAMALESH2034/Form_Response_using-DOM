   
   
   document.getElementById('form').addEventListener('submit', function(event) {
    event.preventDefault();

    
    let firstName = document.getElementById("first-name").value;
    var lastName = document.getElementById("last-name").value;
    var email = document.getElementById('email').value;
    var address = document.getElementById('address').value;
    //var pincode = document.getElementById('pincode').value;
    var gender = document.getElementById('gender').value;
    var foods = document.getElementsByName('food');
    var FoodList = [];
    foods.forEach(function(food) {
        if (food.checked) {
            FoodList.push(food.value);
        }
       
    });

    if (FoodList.length<2){
        alert("Choose atleat 2 options out of 5 in food");
        return;
    }

  

    var state = document.getElementById('state').value;
    var country = document.getElementById('country').value;

   // table
    var table = document.getElementById('userTable').getElementsByTagName('tbody')[0];
    var newRow = table.insertRow();
    var cells = [
        newRow.insertCell(),
        newRow.insertCell(),
        newRow.insertCell(),
        newRow.insertCell(),
        newRow.insertCell(),
        newRow.insertCell(),
        newRow.insertCell(),
        newRow.insertCell()
    ];
    cells[0].appendChild(document.createTextNode(firstName));
    cells[1].appendChild(document.createTextNode(lastName));
    cells[2].appendChild(document.createTextNode(email));
    cells[3].appendChild(document.createTextNode(address));
    cells[4].appendChild(document.createTextNode(state));
    cells[5].appendChild(document.createTextNode(country));
    cells[6].appendChild(document.createTextNode(gender));
    cells[7].appendChild(document.createTextNode(FoodList.join(',')));

    // Clear form fields
    document.getElementById('form').reset();
});