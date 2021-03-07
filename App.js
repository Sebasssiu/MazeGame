const Maze = () =>{
  const [isMenu, setMenu] = React.useState(1)
  const [dimensions, setDimensions] = React.useState()
  const [data, setData] = React.useState("")

  const play = () =>{
    setData(useApi(dimensions.,5))
  }
  const rowStyles = {
    display: 'flex'
  }

  if(isMenu === 0){
    return(
      <div className="menu">Login</div>
    )

  }else if(isMenu === 1){
    if(data.isLoading){
      return <div className="loading">
        <div className="loadingImage"></div>
      </div>
    }else{
      return(
        <div className="background">
          {data.maze.map((row) => {
            return (
              <div style={rowStyles}>
                {row.map((cell) => {
                  switch(cell) {
                    case 'p':
                      return <Player />
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
  }else{
    console.log('Error loading...')
  }
}