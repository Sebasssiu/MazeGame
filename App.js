const App = () =>{
  const [isMenu, setMenu] = React.useState(0)
  const [movements, setMovents] = React.useState(0)
  const [dimensions, setDimensions] = React.useState({width: "", height: ""})
  if(isMenu === 0){
    return <Menu 
      setMenu={setMenu} 
      setDimensions={setDimensions} 
      dimensions={dimensions}
    />
  }else if(isMenu === 1){
    return <Maze 
      dimensions={dimensions}
      movements={movements}
      setMovents={setMovents}
      setMenu={setMenu}
    />
  }else if(isMenu === 2){
    return <Winner movements={movements}/>
  }else{
    console.log('Error loading...')
  }
}