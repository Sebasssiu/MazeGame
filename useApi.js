const useApi = (width, height) =>{
    const [data, setData] = React.useState({maze: {},isLoading: true})
    React.useEffect(() => {
        fetch(`http://ubeje.xyz:3001/?type=json&w=${width}&h=${height}`)
          .then(response => response.json())
          .then(response => setData({maze: response, isLoading: false}))
    }, [])
    return data
}