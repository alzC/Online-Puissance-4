import { GridState } from "../types";

export function freePositionY(grid: GridState, x: number): number {
    for (let y = grid.length - 1; y > 0; y--) {
        if (grid[y][x] === 'E') {
            return y
        }
    }
    return -1
}