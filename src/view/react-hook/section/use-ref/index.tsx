"use client";

import { useRef,useEffect } from "react";

export default function UseRef(){
    const inputRef=useRef<null |HTMLInputElement>(null);
    return (
    <div>
        <input type className="border-2 border-black rounded-md p-2" type="text" ref={inputRef} />
        <button onClick={()=> {inputRef.current?.focus(); console.log(inputRef.current); }} className="border-2 border-black"> Focus</button>
    </div>
    

    );
}