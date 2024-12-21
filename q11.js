  let prod1={name:"trimmer",price:110,inventorylevel:48,Demand:100,sales:[4,8,9,11,5],comp1:100,comp2:110};
  let prod2={name:"headphone",price:200,inventorylevel:60,Demand:150,sales:[10,14,12,20,15],comp1:220,comp2:250};
  let prod3={name:"charger",price:150,inventorylevel:48,Demand:60,sales:[1,2,3,4,5],comp1:160,comp2:140};
 function calculateDemand(id){
  const salesdata=id;
  const totalsales=salesdata.reduce((acc,val)=>acc+val,0);
  return totalsales/salesdata.length;
}
let demand1=(calculateDemand(prod1.sales)*30);
console.log(demand1)
let demand2=(calculateDemand(prod2.sales)*30);
console.log(demand2);
let demand3=(calculateDemand(prod3.sales)*30);
console.log(demand3)
function adjustprice(id,dem){
  let newprice=0;
  let product=id;
  let demand=dem;
  let inventory=id.inventorylevel;
  if(demand>100&&inventory<50){
   newprice=Math.floor(id.price*1.10);
  }else if(demand<100&&inventory>40){
    newprice=Math.floor(id.price*0.90);
  }else{
    newprice=id.price;
  }
  console.log(`old price for product ${id.name} is ${id.price} `)
  console.log(`New Price for product ${id.name} is ${newprice}`)
  return newprice;
}
let newp1=adjustprice(prod1,demand1);
let newp2=adjustprice(prod2,demand2);
let newp3=adjustprice(prod3,demand3);
console.log(newp1);
console.log(newp2);
console.log(newp3);
function adjustpricecompetitor(id){
  let newprice=0;
  let product=id;
  let competitor1=id.comp1;
  let competitor2=id.comp2;
  let avg=(competitor1+competitor2)/2;
  if(id.price>avg){
   newprice=Math.floor(id.price*0.95);
  }else{
    newprice=id.price;
  }
  console.log(`old price for product ${id.name} is ${id.price} `)
  console.log(`New Price for product ${id.name} is ${newprice}`)
}
adjustpricecompetitor(prod1);
adjustpricecompetitor(prod2);
adjustpricecompetitor(prod3);
