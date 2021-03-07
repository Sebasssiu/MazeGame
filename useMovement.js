const useMovement = (state, action) =>{
    if(rect1.right < rect2.left || 
        rect1.left > rect2.right || 
        rect1.bottom < rect2.top || 
        rect1.top > rect2.bottom)
        {
            return state
        }else{
            switch(action.type){
                case 'ArrowUp':
                    return {...state, y: state.y - action.pixels}
                case 'ArrowDown':
                    return {...state, y: state.y + action.pixels}
                case 'ArrowLeft':
                    return {...state, x: state.x - action.pixels}
                case 'ArrowRight':
                    return {...state, x: state.x + action.pixels}
                default:
                    return state
            }
        }
}