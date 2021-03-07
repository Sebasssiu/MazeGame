const Menu = (props) =>{
    return(
        <div className="menu">
          <h1 className="title">Welcome to Maze</h1>
          <form className="form">
            <input 
              className="input" 
              type="number" 
              placeHolder="Enter width"
              value={props.dimensions.width}
              onChange={e => props.setDimensions({...props.dimensions, width: e.target.value})}
            />
            <input 
              className="input" 
              type="number" 
              placeHolder="Enter height"
              value={props.dimensions.height}
              onChange={e => props.setDimensions({...props.dimensions, height: e.target.value})}
            />
          </form>
          <button 
            className="button" 
            onClick={() => props.setMenu(1)}
          >
            Play
          </button>
        </div>
    )
}