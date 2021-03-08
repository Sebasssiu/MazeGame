const Empty = () => {
    return <div className="empty" />
}
const Player = ({position}) => {
    const styles = {
      gridColumnStart: `${position.x+1}`,
      gridRowStart: `${position.y+1}`,
      backgroundImage: `url(${position.sprite})`
    }
    return <div style={styles} className="player"/>
}
const Goal = () => {
    return <div className="goal"/>
}
const Wall = () => {
    return <div className="wall"/>
}