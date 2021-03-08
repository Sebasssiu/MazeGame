const useMovement = (state, action) =>{
    const validator = (y, x) =>{
        if(state.maze[y][x]!=="-" && state.maze[y][x]!=="|" && state.maze[y][x]!=="+"){
            return true
        }
        return false
    }
    switch(action.action){
        case 'MOVEMENT':
            switch(action.type){
                case 'ArrowUp':
                    if(validator(state.y-1,state.x)) return {...state, y: state.y - 1, movements: state.movements + 1, sprite: 'https://findicons.com/files/icons/1681/siena/256/wall_green.png'}
                    return state
                case 'ArrowDown':
                    if(validator(state.y+1,state.x)) return {...state, y: state.y + 1, movements: state.movements + 1, sprite: 'https://findicons.com/files/icons/1681/siena/256/wall_green.png'}
                    return state
                case 'ArrowLeft':
                    if(validator(state.y, state.x-1)) return {...state, x: state.x - 1, movements: state.movements + 1, sprite: 'https://findicons.com/files/icons/1681/siena/256/wall_red.png'}
                    return state
                case 'ArrowRight':
                    if(validator(state.y,state.x+1)) return {...state, x: state.x + 1, movements: state.movements + 1, sprite: 'https://findicons.com/files/icons/1681/siena/256/wall_red.png'}
                    return state
                default:
                    return state
            }
        case 'LOADED':
            return {...state, maze: action.maze}
        default:
            return state
    }
}