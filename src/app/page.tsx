'use client'
import Link from "next/link";

import { useEffect, useState } from "react";

export default function HomePage() {
  const [weight, setWeight] = useState(0);
  const [price,setPrice]=useState(0);
  const [gross,setGross]=useState(0);
  const [net,setNet]=useState(0);
  const [expense,setExpense]=useState(0);

  function calculate(){
    const net1 = Math.round(((weight * price) + Number.EPSILON) * 100) / 100
    setNet(net1)
    console.log(net1)
    const expense1 = Math.round(((weight *  1.53) + Number.EPSILON) * 100) / 100
    setExpense(expense1)
    const gross1 = Math.round(((net1-expense1) + Number.EPSILON) * 100) / 100
    setGross(gross1)
  }
  useEffect(()=>{
    calculate()
  },[weight,price])
 
  return (
    <main className="flex min-h-screen flex-col items-center  gap-y-4">
       
      <div className="flex flex-row gap-4">
        kilo
        <input name="myInput" type="number" onChange={(event)=>{
        setWeight(+event.target.value)
      }}className="text-black"/>
      </div>
      <div className="flex flex-row gap-4">
        qiymet/kilo
        <input name="myInput" type="number" onChange={(event)=>{
        setPrice(+event.target.value)
      }}className="text-black"/>
      </div>
      <div>{`
        umumi: ${net}
        xerc: ${expense}
        xeyir: ${gross}
        `}
      </div>
  
      
    </main>
  );
}
