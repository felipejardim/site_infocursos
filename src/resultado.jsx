import React, {useEffect} from 'react'

export default function Resultados(){

    let teste

    useEffect(()=>{
        try{teste = window.dados.value}catch(e){console.log(e)}
    },[window.dados])

    return <>
    <h1>{teste}</h1>
    </>
}