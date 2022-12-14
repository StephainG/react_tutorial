import { useState, useEffect} from 'react';
import './App.css';
import Reuse from './reuse';


function Attendance() {
    const [name_of_steward, setName_of_steward] = useState([
        {name: 'Asamu FolaSade', id: 1},
        {name: 'Paul John', id: 2},
        {name: 'Olagoke Mary', id: 3}
    ]);

    const [name, setName] = useState("Kikelomo")

    useEffect(() => {
        console.log('name_of_steward');
        console.log(name);
    }, [name]); 

    return (
        <div className="App">
            <Reuse name_of_steward = {name_of_steward} title="Attendance"/>
            <button onClick={() => setName('Luigi')}>Click me</button>
            <h1>{ name }</h1>
        </div>
    );
}

export default Attendance;
