//given arr of objects,where each objects represents a transaction with id,amount and type.
//write a fun. to calculate the net balance.

const transactions = [
    { id: 1, amount: 1000, type: "credit" },
    { id: 2, amount: 200, type: "debit" },
    { id: 3, amount: 500, type: "credit" },
    { id: 4, amount: 100, type: "debit" }
  ];

  function calculateNetBalance(arr){
   let currentAmount=0;
   for(let el of arr){
    if(el.type==='credit'){
        currentAmount+=el.amount;
    }
    else if (el.type === 'debit'){
        currentAmount -= el.amount;
      }
   }
   return currentAmount
  }
  console.log(calculateNetBalance(transactions))