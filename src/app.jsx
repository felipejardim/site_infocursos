import React, {useState} from 'react'
import AsyncSelect from 'react-select/async'



const jason = require('../src/json/cursos.json')

//código para extrair as opções para o select (old)
let cursos = jason.map(obj=>obj.Curso).filter(function(elem, pos, self) {
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
window.jason = jason

let options = async(requerido, dados)=>{
    let filtro = jason

    if(requerido!=='campus' && dados.campus!==''){
        filtro = filtro.filter(item=>item.Campus===dados.campus?item:null);
    }

    if(requerido!=='curso' && dados.curso!==''){
        filtro = filtro.filter(item=>item.Curso===dados.curso?item:null);
    }

    if(requerido!=='turno' && dados.turno!==''){
        filtro = filtro.filter(item=>item.Turno===dados.turno?item:null);
    }

    if(requerido!=='ano' && dados.ano!==''){
        filtro = filtro.filter(item=>item.Ano===dados.ano?item:null);
    }

    console.log(filtro)

    switch (requerido) {
        case 'campus':
            return filtro.map(obj=>obj.Campus).filter((elem, pos, self)=>{return self.indexOf(elem) === pos;}).map((key)=>{return{value:key, label:key}})
        case 'curso':
            return filtro.map(obj=>obj.Curso).filter((elem, pos, self)=>{return self.indexOf(elem) === pos;}).map((key)=>{return{value:key, label:key}})
        case 'turno':
            return filtro.map(obj=>obj.Turno).filter((elem, pos, self)=>{return self.indexOf(elem) === pos;}).map((key)=>{return{value:key, label:key}})
        case 'ano':
            return filtro.map(obj=>obj.Ano).filter((elem, pos, self)=>{return self.indexOf(elem) === pos;}).map((key)=>{return{value:key, label:key}})
        default:
            break;
    }

    //metodo antigo, apenas pega o valor de cada item e não filtra
    //let arr = item.map((key)=>{return {value:key, label:key}})
    //return arr 
}

export default function App(){

    let [dados, setDados] = useState({campus:"", curso:"", turno:"", ano:""});

    return <>
        <label className="legenda">Campus:</label>
        <AsyncSelect  /*defaultOptions={options('campus', dados)}*/ loadOptions={options('campus', dados)} onChange={(e)=>{setDados(Object.assign(dados,{campus: e.value}))}} placeholder="" className="select"/>
        
        <label className="legenda">Curso:</label>
        <AsyncSelect defaultOptions={options('curso', dados)} onChange={(e)=>{setDados(Object.assign(dados,{curso: e.value}))}} placeholder="" className="select"/>
        
        <label className="legenda">Turno:</label>
        <AsyncSelect defaultOptions={options('turno', dados)} onChange={(e)=>{setDados(Object.assign(dados,{turno: e.value}))}} placeholder="" className="select"/>
        
        <label className="legenda">Ano:</label>
        <AsyncSelect defaultOptions={options('ano', dados)} onChange={(e)=>{setDados(Object.assign(dados,{ano: e.value}))}} placeholder="" className="select"/>

        <button type="button" className="btn btn-success">Pesquisar</button>
        <button type="button" className="btn btn-primary">Limpar Dados</button>
        </>
        
    
}