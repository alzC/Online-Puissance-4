import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import {interpret} from 'xstate'
import { GameMachine, GameModel } from './machine/GameMachine.ts'

const machine = interpret(GameMachine).start()
console.log(machine.send(GameModel.events.join('1', '1')).changed)
console.log(machine.send(GameModel.events.join('1', '1')).changed)
console.log(machine.send(GameModel.events.join('2', '2')).changed)
console.log(machine.send(GameModel.events.join('2','2')).changed)
/*
ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
*/