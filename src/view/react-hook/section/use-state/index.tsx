"use client";
import { useState } from "react";

export default function UseState(){
   const [tdlCount, setTDLCount] = useState({
    toDoList:"",
    toDoListCount:0,
    savedToDoList:[],
    toDoListDone:0
   });
   const handleTDLstring =(event)=>{
    setTDLCount({...tdlCount,toDoList:event.target.value});};

   const saveToDoList =()=>{
    if (tdlCount.toDoList.trim()!==''){
        setTDLCount(prevList => ({...prevList,savedToDoList:
            [...prevList.savedToDoList, tdlCount.toDoList], 
            toDoList:''
        }));
        
    }
   };

   const handleTDLcount =()=>{
        setTDLCount(prevCount=>({
            ...prevCount,toDoListCount:prevCount.toDoListCount+1
        }));};

    const handleDonecount =()=>{
        setTDLCount(prevDoneCount=>({
            ...prevDoneCount,toDoListDone:prevDoneCount.toDoListDone+1
        }));};
    
    const handleDonelist =()=>{
        setTDLCount(prevDoneList=>({...prevDoneList,savedToDoList:prevDoneList.savedToDoList.slice(0,prevDoneList.savedToDoList.length-1)}));
    }
   const resetAll=()=>{
        setTDLCount(resetCount=>({
            ...resetCount,toDoListCount:0
        }));
        setTDLCount(resetTDLSave=>({
            ...resetTDLSave,savedToDoList:[]
        }));
        setTDLCount(resetTDLDone=>({
            ...resetTDLDone,toDoListDone:0
        }));
    };
   
    
    return (
        <div>
            <div>
                <button onClick={resetAll}>Reset all</button>
                <br />
                <input type="text" value={tdlCount.toDoList} onChange=
                {handleTDLstring} placeholder="Enter what to do" />
                <button onClick={()=>{handleTDLcount();saveToDoList();}}>Submit TDL</button>
                <p>To Do List: {tdlCount.toDoList}</p>
                <ul>
                    {tdlCount.savedToDoList.map((value, index)=> 
                    (<li key={index}>{value}</li>))}
                    {tdlCount.savedToDoList.length > 0 &&
                    (<button onClick={()=>{handleDonecount(); handleDonelist();}}>Done</button>)}
                </ul>
                <p>To-Do-List:{tdlCount.toDoListCount}</p>
                <p>To-Do-List Done: {tdlCount.toDoListDone}</p>
            </div>
        </div>
    );

}