import { GameAction } from "../types";

export const joinGameAction: GameAction<'join'> =  (context, event) => ({
    players: [...context.players, { id: event.playerId, name: event.name }],
    currentPlayer: event.playerId
})

export const leaveGameAction: GameAction<'leave'> =  (context, event) => ({
    players: context.players.filter(p => p.id!== event.playerId),
    currentPlayer: context.currentPlayer === event.playerId? null : context.currentPlayer
})