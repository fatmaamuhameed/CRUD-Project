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
    displayProduct(listOfProduct);
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
    displayProduct(listOfProduct)
    //console.log(listOfProduct);
}


function clearForm(){
    productName.value = "";
    productPrice.value ="";
    productcategory.value = "";
    productDesc.value = ""
}

function displayProduct(products){
   var rowOfProduct = "";

   for(var i=0; i<products.length ; i++){
        rowOfProduct+=`<tr>
       <td>`+i+`</td>
       <td>`+products[i].name+`</td>
       <td>`+products[i].price+`</td>
       <td>`+products[i].category+`</td>
       <td>`+products[i].descreption+`</td>
       <td><button onclick="deleteProduct(${i})" class="btn btn-outline-danger">Delete</button></td> </tr>`
   }

   document.getElementById("InsideTable").innerHTML = rowOfProduct ; 
}

function searchProduct(searchTerm){
    var searchResults = []
 
    for(var i=0; i<listOfProduct.length ; i++){
        if(listOfProduct[i].name.toLowerCase().includes(searchTerm.toLowerCase())==true || listOfProduct[i].category.toLowerCase().includes(searchTerm.toLowerCase())==true 
        || listOfProduct[i].price.toLowerCase().includes(searchTerm.toLowerCase())==true || listOfProduct[i].descreption.toLowerCase().includes(searchTerm.toLowerCase())==true  ){

            searchResults.push(listOfProduct[i]);
        }
      
    }
    displayProduct(searchResults);
 }

 function deleteProduct(indexProduct){
    listOfProduct.splice(indexProduct,1);
    localStorage.setItem("product",JSON.stringify(listOfProduct));
    displayProduct(listOfProduct);
 }

