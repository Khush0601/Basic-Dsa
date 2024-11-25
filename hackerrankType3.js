/**
 * You are given an array of objects representing orders in a store. Each order contains the following details:
1.product (string): The name of the product.
2.category (string): The category to which the product belongs.
3.quantity (integer): The quantity of the product ordered.
Your task is to group the orders by category and calculate the total quantity for each category. Return the result as an array of objects, where each object contains:

category: The name of the category.
totalQuantity: The sum of all quantities for that category.
output:
[
    { "category": "Fruits", "totalQuantity": 8 },
    { "category": "Meat", "totalQuantity": 2 },
    { "category": "Vegetables", "totalQuantity": 11 }
]
 */

const arrOfObj=[
    { "product": "Apple", "category": "Fruits", "quantity": 5 },
    { "product": "Banana", "category": "Fruits", "quantity": 3 },
    { "product": "Carrot", "category": "Vegetables", "quantity": 7 },
    { "product": "Broccoli", "category": "Vegetables", "quantity": 4 },
    { "product": "Chicken", "category": "Meat", "quantity": 2 }
]
function grpOrders(arr){
   let categoryTotal={}
   for(let i=0;i<arr.length;i++){
    let order=arr[i]
    let category=order.category;
    // console.log(category)
    let quantity=order.quantity;

    if(categoryTotal[category]){
        categoryTotal[category]=categoryTotal[category]+quantity
    }
    else{
        categoryTotal[category]=quantity
    }
   }
   const result = [];
   for(let category in categoryTotal){
    result.push({category:category,totalquantity:categoryTotal[category]})
   }

return result
}
console.log(grpOrders(arrOfObj))