import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Graph from './Dejcsra.js'
import { statement } from '@babel/template';

import { createStore, applyMiddleware, compose } from 'redux'
import { connectRouter, routerMiddleware } from 'connected-react-router'
import thunk from 'redux-thunk'
import createHistory from 'history/createBrowserHistory'
import rootReducer from './modules'
import { type } from 'os';



//------------------------------------Здесь будем загружать данные для JSON------------------------------------------

//Это граф взятый для примера 
const gr = {
        "A": {"B": 7, "C": 9, "F": 14},
        "B": {"A": 7, "C": 10, "D": 15},
        "C": {"A": 9, "B": 10, "D": 11, "F": 2},
        "D": {"B": 15, "C": 11, "E": 6},
        "E": {"D": 6, "F": 9},
        "F": {"A": 14, "C": 2, "E": 9}
    };

//Здесь мы записываем данные в JSON
const toJS = JSON.stringify(gr);

//--------------------Здесь будем загружать данные из JSON-------------------------------------------------------------
const fromJSON = JSON.parse(toJS);
export let GR = new Graph(fromJSON);
console.log(GR);




//------------------Здесь мы задаем 2 кнопки (начальная точка маршрута и конечная точка маршрута------------------------
//Зададим выпадающий список (значения - номера графов)
let k = Object.keys(GR.vertices);

export let kays = k.map((l) => <option>{l}</option>)


export let startPoint = k[0]; // Стартовая точка
let endPoint = k[0]; // Финишная точка
export let shortestPath; // кртачайший путь
export let totalWeight; // общий вес маршрута

//Функция для вывода на экран кратчайшего пути и общего веса маршрута 
function calcShortPath() {
    // debugger;
    shortestPath = [startPoint, ...GR.shortestPath(startPoint, endPoint).reverse()];
    totalWeight = shortestPath.reduce((acc, node, index, arr) => {
        let to = arr[index + 1] ? arr[index + 1] : '';
        if (to) {
            return acc + GR.vertices[node][to];
        }
        return acc;
    }, 0);
    console.log(typeof(totalWeight));
    document.getElementById('shortestPath').innerText = `Shortest Path: ${shortestPath.join(' => ')}`;
    document.getElementById('totalWeight').innerText = `Total Weight: ${totalWeight}`;
}


//Классовый компонент выбора стартовой точи
class SetStartPoint extends React.Component {
  constructor(props) {
    super(props)
  }
//
render() {
  return(
  <div>
    <h3>Стартовая точка</h3>
    <select onChange={e => {startPoint = e.target.value; calcShortPath();}}>{kays}</select>
  </div>
  )
}
}
//Классовый компонент выбора финишной точки
class SetEndPoint extends React.Component {
  constructor(props) {
    super(props)
  }

render() {
  return(
  <div>
    <h3>Финишная точка</h3>
    <select onChange={e => {endPoint = e.target.value; calcShortPath();}}>{kays}</select>
  </div>
  )
}
}
//-----------------------------------Reduce----------------------------------------------//
//---------------------------КОНСТАНТЫ----------------------------------------------------//

const A = 'A';
const B = 'B';
const C = 'C';
const D = 'D';
const E = 'E';
const F = 'F';
//---------------------------ГЕНЕРАТОРЫ ДЕЙСТВИЙ-----------------------------------------------------//

//-------------------------РЕДЬЮСЕРЫ----------------------------------------------------//
const initialState = {startpoints: ['A']}

//Функция редюсер
function todoApp(state = initialState, action) {
  switch(action.type) {
  case 'A': {
  return state.push['A']
  }
  case 'B': {
  return state.push['B']
  }
  case 'C': {
  return state.push['C']
  }
  case 'D': {
    return state.push['D']
  }
  case 'E': {
    return state.push['E']
  }
  case 'F': {
    return statement.push['F']
  } 
  default: return state
  }
}
//---------------------------ХРАНИЛИЩЕ--------------------------------------------//
const store = createStore(todoApp)

//-----------------------------------Здесь будем писать код для рендеринга-----------------------------------------------
class Nodes extends Component {
  render() {
    return(
      <div className = 'Test'>
      <div className = "Noddes">
      <h1><strong>Здесь будет интерактивная картинка с графами</strong></h1>
      </div>
      <div className = "Panell">
      <h2>Интерфейс</h2>
      <SetStartPoint />
      <SetEndPoint />
      <h1><strong>Результаты Алгоритма</strong></h1>
      </div>
      </div>
      );
  }
}
export default Nodes;
