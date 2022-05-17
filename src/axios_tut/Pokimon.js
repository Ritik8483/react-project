import React, { useEffect, useState } from 'react'
import axios from 'axios';

export const Pokimon = () => {
    const[num,setnum]=useState();
    const[names,setnames]=useState();
    const[moves,setmoves]=useState();

    const getpoki= async ()=>{
    const respose =await axios.get(` https://pokeapi.co/api/v2/pokemon/${num}`);
    console.log("PokimonName",respose.data.name);
    setnames(respose.data.name);
    setmoves(respose.data.moves.length);
    }
    useEffect(()=>{
        getpoki();
    });
  return (
    <div>
        <h3>You choose {num} value</h3>
        <h2>My name is {names} </h2>
        <h3>I have {moves} moves</h3>

        <select value={num} onChange={(e)=>{setnum(e.target.value)}}>Select
            <option value="1">1</option>
            <option value="25">25</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="6">6</option>
        </select>
    </div>
  )
}
