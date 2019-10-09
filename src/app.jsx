import React, {useState, useEffect, useRef} from 'react'
import Select from 'react-select'


const jason = require('../src/json/cursos.json')

window.jason = jason

let options = (dados)=>{
    let filtro = jason


    //método para filtro dos dados
    filtro = dados.campus!==''? filtro = filtro.filter(e=>e.Campus===dados.campus):filtro;
    filtro = dados.curso!==''? filtro = filtro.filter(e=>e.Curso===dados.curso):filtro;   
    filtro = dados.turno!==''? filtro = filtro.filter(e=>e.Turno===dados.turno):filtro;
    filtro = dados.ano!==''? filtro = filtro.filter(e=>e.Ano===dados.ano):filtro;

    //método para troca de estrutura, passa os valores de filtro para a estrutura abaixo 
    let algo = {campi:[],cursos:[],turnos:[],anos:[]}
    algo.campi = filtro.map(e=>e.Campus)
    algo.cursos = filtro.map(e=>e.Curso)
    algo.turnos = filtro.map(e=>e.Turno)
    algo.anos = filtro.map(e=>e.Ano)

    //método para remover repetições e formatar os dados para o React-Select (um array de '{value,label}')
    algo.campi = algo.campi.filter((elem, pos, self)=>{return self.indexOf(elem) === pos;}).map((key)=>{return{value:key, label:key}})
    algo.cursos = algo.cursos.filter((elem, pos, self)=>{return self.indexOf(elem) === pos;}).map((key)=>{return{value:key, label:key}})
    algo.turnos = algo.turnos.filter((elem, pos, self)=>{return self.indexOf(elem) === pos;}).map((key)=>{return{value:key, label:key}})
    algo.anos = algo.anos.filter((elem, pos, self)=>{return self.indexOf(elem) === pos;}).map((key)=>{return{value:key, label:key}})

    console.log(algo)

    return algo
}

function limpacampo(obj){
    obj.campus.current.state.value = {label:'', value:''}
    obj.curso.current.state.value = {label:'', value:''}
    obj.turno.current.state.value = {label:'', value:''}
    obj.ano.current.state.value = {label:'', value:''}
}


export default function App(){

    let [dados, setDados] = useState({campus:"", curso:"", turno:"", ano:""});
    let [lista, setLista] = useState(options(dados));
    let [teste, setteste] = useState(1)
    console.log(lista)

    let ref ={campus: useRef(), curso: useRef(), turno: useRef(), ano: useRef()}
    window.ref=ref


    useEffect(()=>{setLista(options(dados));console.log('oi')}, [teste])

    return <>
        <label className="legenda">Campus:</label>
        <Select ref={ref.campus} options={lista.campi} onChange={(e)=>{setDados(Object.assign(dados,{campus: e.value}));setteste(++teste)}} placeholder="" className="select"/>
        
        <label className="legenda">Curso:</label>
        <Select ref={ref.curso} options={lista.cursos} onChange={(e)=>{setDados(Object.assign(dados,{curso: e.value}));setteste(++teste)}} placeholder="" className="select"/>
        
        <label className="legenda">Turno:</label>
        <Select ref={ref.turno} options={lista.turnos} onChange={(e)=>{setDados(Object.assign(dados,{turno: e.value}));setteste(++teste)}} placeholder="" className="select"/>
        
        <label className="legenda">Ano:</label>
        <Select ref={ref.ano}  options={lista.anos} onChange={(e)=>{setDados(Object.assign(dados,{ano: e.value}));setteste(++teste)}} placeholder="" className="select"/>

        <button type="button" onClick={()=>{console.log(dados);window.dados = dados}} className="btn btn-success">Pesquisar</button>
        <button type="button" onClick={()=>{setDados({campus:'',curso:'',turno:'',ano:''}); setteste(++teste); limpacampo(ref)}} className="btn btn-primary">Limpar Dados</button>
        </>
        
    
}