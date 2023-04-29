import { useQuery } from '@tanstack/react-query'
import  Axios  from 'axios'
export const Home = () => {
    const {data: cat, isLoading, isError, refetch} = useQuery(["cat"], () => {
        return Axios.get("https://catfact.ninja/fact").then((res) => {
            return res.data
        })
    })
    if (isLoading){
        return <h1>Loading...</h1>
    }
    if (isError){
        return <h1>Sorry There Was AN Error!!!</h1>
    }
    
    return( 
    <h1>
        Check out Cat Facts! 
        <p>{cat?.fact}</p>
        <button onClick={refetch}>Update Facts</button>
    </h1>
)}