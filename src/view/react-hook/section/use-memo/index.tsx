"use client";
import { useMemo, useState } from "react";

export default function UseMemo(){
    const [number,setNumber] = useState<number>(0);
    const [count,setCount] = useState<number>(0);

    const isEven = useMemo(()=>{

        let i= 0;
        while (i<300000000){
            i++;
        } return number %2===0;
    },[number]);

    /*
    function isEven(){
        let i = 0;
        while(i<3000000000){
            i++;
        }
        return number % 2===0;
    }*/
    return (
        <div className="flex flex-col w-[400px] bg-white">
            number is {useMemo()?"Even" :"Odd"}
        <div>
            number:{number}
            <button onClick={()=> setNumber(number+1)}>Increment Number</button>
        </div>
        <div>
            count:{count}
            <button onClick={()=> setCount(count+1)}>Increment Count</button>
        </div>
         </div>
    );
}

