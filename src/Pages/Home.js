import { useContext } from "react"
import { AppContext } from "../App"

export const Home = () => {
    const {username} = useContext(AppContext)
    return(
        <div>
            <h1>This is the Home Page- Welcome!{username} </h1>
        </div>
    )
}