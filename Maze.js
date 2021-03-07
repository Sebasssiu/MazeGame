const Maze = (props) =>{
    const data = useApi(props.dimensions.width, props.dimensions.height)
    const pos = {x:50,y:0}
    const [position, dispatcher] = React.useReducer(useMovement, pos)
    const rowStyles = {
      display: 'flex',
      position: 'relative'
    }
    const onCollide = (changes) =>{
      console.log(changes)
    }
    React.useEffect(()=>{
      if(document.querySelector('.player') && document.querySelector('.wall')){
        const observer = new IntersectionObserver(onCollide, {
          root: document.querySelector('.empty'),
          threshold: [0.1],
        })
        console.log(document.querySelector('.player'))
        observer.observe(document.querySelector('.player'))
      
      }
    }, [data])
    const handleKeyDown = (event) =>{
      dispatcher({type: event.key, pixels: 20})
    }

    if(data.isLoading){
      return(
        <div className="loading">
          <div className="loadingImage"/>
        </div>
      )
    }else{
      return(
        <div tabIndex="1" className="background" onKeyDown={handleKeyDown}>
          {data.maze.map((row) => {
            return (
              <div style={rowStyles}>
                {row.map((cell) => {
                  switch(cell) {
                    case 'p':
                      return (
                        <>
                          <Empty />
                          <Player position={position}/>
                        </>
                      )
                    case 'g':
                      return <Goal />
                    case ' ':
                      return <Empty />
                    default:
                      return <Wall />
                  }
                })}
              </div>
            )
          })}
        </div>
      )
    }
}