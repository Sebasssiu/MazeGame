const Maze = (props) =>{
  const container={
    gridTemplateColumns: `repeat(${props.dimensions.width * 3 + 1},auto)`,
    gridTemplateRows: `repeat(${props.dimensions.height *2},auto)`
  }
  let data = useApi(props.dimensions.width, props.dimensions.height)
  const pos = {
    x:1,
    y:1, 
    maze: [],
    movements: props.movements,
    sprite: 'https://findicons.com/files/icons/1681/siena/256/wall_red.png'
  }
  const [position, dispatcher] = React.useReducer(useMovement, pos)
  const handleKeyDown = (event) =>{
    dispatcher({type: event.key, action: "MOVEMENT"})
  }
  React.useEffect(()=>{
    //WINNER
    if(position.x===props.dimensions.width*3-1 && position.y===props.dimensions.height*2-1){
      props.setMovents(position.movements)
      props.setMenu(2)
    }
  
  },[position])
  React.useEffect(()=>{
    dispatcher({action: "LOADED", maze: data.maze})
    //Focus div which has the onKeyDown listener
    if(document.getElementById('focus')) document.getElementById('focus').focus()
  },[data])
  if(data.isLoading){
    return(
      <div className="loading">
        {data.error ? (
          <h1 className="title">Something went wrong :(</h1>
        ): (
          <div className="loadingImage"/>
        )}
      </div>
    )
  }else{
    return(
      <div className="background">
        <div style={container} className="maze">
          {data.maze.map((row) =>
            row.map((cell) => {
              switch(cell) {
                case 'p':
                  return <Empty />
                case 'g':
                  return <Goal />
                case ' ':
                  return <Empty />
                default:
                  return <Wall />
                }
              })
            )}
        </div>
        <div tabIndex="-1" id="focus" style={container} className="maze" onKeyDown={handleKeyDown}>
          {data.maze.map((row) =>
            row.map((cell) => {
              if(cell === 'p') return <Player position={position}/>
              else return <Empty />
            })
          )}
        </div>
      </div>
    )
  }
}
