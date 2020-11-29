var productName = document.getElementById("productNameInput");
var productPrice = document.getElementById("productPriceInput");
var productcategory = document.getElementById("productCategoryInput");
var productDesc = document.getElementById("productDescInput");

var listOfProduct ;

if(localStorage.getItem("product") == null){
    listOfProduct = [];
}
else{
    listOfProduct = JSON.parse(localStorage.getItem("product"));
    displayProduct();
}

function addProduct(){

    var product = {
        name:productName.value,
        price:productPrice.value,
        category:productcategory.value,
        descreption:productDesc.value
    }
    listOfProduct.push(product);
    // json.strinify b7wlha mn array of obj le string 3lshan localstorage bta5od value 3la enha str
    localStorage.setItem("product",JSON.stringify(listOfProduct));
    clearForm();
    displayProduct()
    //console.log(listOfProduct);
}


function clearForm(){
    productName.value = "";
    productPrice.value ="";
    productcategory.value = "";
    productDesc.value = ""
}

function displayProduct(){
   var rowOfProduct = "";

   for(var i=0; i<listOfProduct.length ; i++){
        rowOfProduct+=`<tr>
       <td>`+i+`</td>
       <td>`+listOfProduct[i].name+`</td>
       <td>`+listOfProduct[i].price+`</td>
       <td>`+listOfProduct[i].category+`</td>
       <td>`+listOfProduct[i].descreption+`</td>
       <td><button class="btn btn-outline-warning">Update</button></td>
       <td><button class="btn btn-outline-danger">Delete</button></td> </tr>`
   }

   document.getElementById("InsideTable").innerHTML = rowOfProduct ; 
}