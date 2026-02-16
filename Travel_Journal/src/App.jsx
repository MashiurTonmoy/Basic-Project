import { Header } from "./header";
import Entry from "./entry";
import ton from "./data.js"
const elements = ton.map(item => {
    return(
        <Entry 
        id= {item.id}
        entry={item}
        />
    )
})

export function App() {
    return (
        <div>
            <Header />
            {elements}
        </div>
    )
}