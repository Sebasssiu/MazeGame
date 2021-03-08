const Winner = (props) =>{
    return(
        <div className="menu">
            <h1 className="title">Well done pal!</h1>
            <h2 className="movements"> Movements: {props.movements}</h2>
            <button 
                className="button" 
                onClick={() => location.reload()}
            >
                Play again
            </button>
        </div>
    )
}