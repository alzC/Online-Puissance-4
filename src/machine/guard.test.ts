import { beforeEach, describe, expect, it } from "vitest"
import { InterpreterFrom, interpret } from "xstate"
import { GameMachine, GameModel } from "./GameMachine"

describe("machine/guards", () => {
    describe("canJoinGame", () => { 
        let machine: InterpreterFrom<typeof GameMachine>

        beforeEach(() => {
            machine = interpret(GameMachine).start()
        })
        
        it("should let a player join", () => {
            expect(machine.send(GameModel.events.join('1','1')).changed).toBe(true)
        })
    })
    
})