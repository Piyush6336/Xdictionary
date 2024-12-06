import { useState } from "react";

function App() {
  const [word,setWord]=useState('');
  const [definition, setDefinition] = useState("");
    const words=
    [
    
        { word: "React", meaning: "A JavaScript library for building user interfaces." },
    
        { word: "Component", meaning: "A reusable building block in React." },
    
        { word: "State", meaning: "An object that stores data for a component." }
    
    ]
    function search(){
      const foundWord=words.find((w)=>(w.word.toLowerCase()===word.toLowerCase()));
      if(foundWord){
        setDefinition(foundWord.meaning);
      }else {
        setDefinition("Word not found in the dictionary.");
      
    }
  }
    
  
  return (
    <>
    <div>
      <h1>Dictionary App</h1>
    </div>
    <div>
      <input placeholder="Search for a word..." value={word} onChange={(e)=>setWord(e.target.value)}/>
      <button onClick={search}>Search</button>
      <h3>Definition:</h3>
      <p>{definition}</p>
    </div>
    </>
  );
}

export default App;
