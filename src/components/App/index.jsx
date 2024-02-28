import Header from "components/Header";
import Element from "components/Element";
import 'components/App/App.css';
import { useState } from "react";


function App() {
  const [elements, setElement] = useState([
    {
      id: 1,
      name: "Апельсины"
    },
    {
      id: 2,
      name: "Сыр"
    },
    {
      id: 3,
      name: "Вино"
    },
    {
      id: 4,
      name: "Порошок"
    },
    {
      id: 5,
      name: "Минералка"
    },
    {
      id: 6,
      name: "Зубная щетка"
    }
  ])

  function deleteElement(id){
     const filteredElements = elements.filter(element => element.id !== id)
     setElement(filteredElements)
  }
 
  return (
    <div className="app">
      <Header />
      <div className="text-center max-w-screen-md mt-16 mx-auto px-8 py-8 bg-white rounded-md shadow-xl border-fuchsia-600 border-solid border-2 flex flex-col gap-y-10">
        {elements.map((element) => {
          return(            
            <Element key={element.id} element={element} onClick={() => deleteElement(element.id)}/>  
          )
        })}
      </div>
    </div>
  )
}

export default App;