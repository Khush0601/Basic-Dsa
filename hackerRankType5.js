/**
 * 
 * You are given an array of integers representing the colors of socks in a pile.
 *  Each integer represents a color. Your task is to determine how many pairs of socks with matching colors there are.
 * Function Description
   Write a function sockMerchant that calculates the number of pairs of socks that can be sold.
   Input:
An integer n, the number of socks in the pile.
An array of integers ar, where each integer represents the color of a sock.
 */


function soakMerchant(arr){
    let pairs=0;
    let newArr=arr.sort()
    for(let i=0;i<arr.length;i++){
      if(arr[i]===arr[i+1]){
          pairs++;
          i++
      }
    }
    return pairs
  }
  console.log(soakMerchant([1,2,1,2,1,2,1,1,2,2,3]))