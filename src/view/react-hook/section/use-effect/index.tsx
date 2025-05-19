"use client";
import { useState,useEffect } from "react";

export default function UseEffect(){
    const [imgUrl, setImgUrl] = useState<string>();
    const [imgUrlUE, setImgUrlUE] = useState<string>();

    async function fetchImgUrl(): Promise<void>{
        try{
            const res = await fetch("https://dog.ceo/api/breeds/image/random");
            const parse = await res.json();
            setImgUrl(parse?.message);
        }catch (err){
            alert(err);
        }
    }

    async function fetchImgUrlUE(): Promise<void>{
        try{
            const res = await fetch("https://dog.ceo/api/breeds/image/random");
            const parse = await res.json();
            setImgUrlUE(parse?.message);
        }catch (err){
            alert(err);
        }
    }

    useEffect(()=>{
        fetchImgUrlUE();
    },[imgUrl]);
    return(
        <div>
            <div>
                <p>Tanpa Use Effect</p>
                <button onClick={fetchImgUrl}>Load Image</button>
                <img src={imgUrl} alt="gambar-anjing" />
            </div>
            <div>
                <p>Pakai Use Effect</p>
                <img src={imgUrlUE} alt="gambar-anjing" />
            </div>
        </div>
    );
}


