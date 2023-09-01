

const arr = [1,0,4,6,0,5,6,0,7]

const prr = arr.filter((item)=>item!=0)

const prr1 = arr.filter((item)=>item==0)

const prr2 = [...arr.filter((item)=>item!=0),...arr.filter((item)=>item==0)]
console.log(prr2);

prr2.map(item=>console.log(item));

