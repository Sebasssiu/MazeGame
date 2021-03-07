const useApi = (width, height) =>{
    const [mazeData, setMazeData] = React.useState([])
    const [isLoading, setLoading] = React.useState(true)
    React.useEffect(() => {
        fetch(`http://ubeje.xyz:3001/?type=json&w=${width}&h=${height}`)
          .then(response => response.json())
          .then(response => setMazeData(response))
          .then(() => setLoading(false))
    }, [])
    console.log(mazeData)
    return {'maze': mazeData,'isLoading': isLoading}
}