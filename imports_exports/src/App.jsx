import {ViewMessages, greetings, takeleave} from "./components/Messages"
import {Media} from "./components/ImagesVideos"
const App = () =>{
    console.log(takeleave())
    return <>
    <h1>hello</h1>
    <ViewMessages/>
    <p>{greetings}</p>
    <Media/>
    </>
}
export default App;

export const Child = () =>{
    return <>
    <p>child component</p></>
}
