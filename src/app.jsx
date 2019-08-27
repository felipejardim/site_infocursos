import React, {useState} from 'react'
import Select from 'react-select'


const jason = require('../src/json/cursos.json')

//código para extrair as opções para o select
let cursos = jason.map(obj=>obj.Curso)
cursos = cursos.filter(function(elem, pos, self) {
    return self.indexOf(elem) === pos;
})

let campi = jason.map(obj=>obj.Campus)
campi = campi.filter(function(elem, pos, self) {
    return self.indexOf(elem) === pos;
})

let turnos = jason.map(obj=>obj.Turno)
turnos = turnos.filter(function(elem, pos, self) {
    return self.indexOf(elem) === pos;
})

let anos = jason.map(obj=>obj.Ano)
anos = anos.filter(function(elem, pos, self) {
    return self.indexOf(elem) === pos;
})

window.dadoss = [campi,cursos,turnos,anos]


let options = function(item){
    let arr = item.map((key)=>{return {value:key, label:key}})
    return arr 
}

export default function App(){

    let [dados, setDados] = useState({campus:"", curso:"", turno:"", ano:""});

    return <>
        <label className="legenda">Campus:</label>
        <Select options={options(campi) } onChange={(e)=>{setDados(Object.assign(dados,{campus: e.value}))}} placeholder="" className="select"/>
        
        <label className="legenda">Curso:</label>
        <Select options={options(cursos)} onChange={(e)=>{setDados(Object.assign(dados,{curso: e.value}))}} placeholder="" className="select"/>
        
        <label className="legenda">Turno:</label>
        <Select options={options(turnos)} onChange={(e)=>{setDados(Object.assign(dados,{turno: e.value}))}} placeholder="" className="select"/>
        
        <label className="legenda">Ano:</label>
        <Select options={options(anos)} onChange={(e)=>{setDados(Object.assign(dados,{ano: e.value}))}} placeholder="" className="select"/>

        <button type="button" className="btn btn-success">Pesquisar</button>
        <button type="button" className="btn btn-primary">Limpar Dados</button>
        </>
        
    
}