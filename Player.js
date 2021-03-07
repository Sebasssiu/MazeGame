const Player = (props) => {
  const styles ={
    top: props.position.y,
    left: props.position.x,
  }
  return <div className="player" style={styles}/>
}