import Header from "components/Header";
import Element from "components/Element";
import 'components/App/App.css';
import { useState } from "react";


function App() {
  const [elements, setElement] = useState([
    {
      id: 1,
      name: "Апельсины",
      added: false
    },
    {
      id: 2,
      name: "Сыр",
      added: false
    },
    {
      id: 3,
      name: "Вино",
      added: false
    },
    {
      id: 4,
      name: "Порошок",
      added: true
    },
    {
      id: 5,
      name: "Минералка",
      added: true
    },
    {
      id: 6,
      name: "Зубная щетка",
      added: true
    }
  ])

  function deleteElement(id){
     const filteredElements = elements.filter(element => element.id !== id)
     setElement(filteredElements)
  }

  function add(element){
    const newElements = [...elements]
    const indx = newElements.indexOf(element)
    if(element.added === true){
      const x={
        id: element.id,
        name: element.name,
        added: false
      }
      newElements.splice(indx, 1, x)     
    } else
    if(element.added === false){
      const x={
        id: element.id,
        name: element.name,
        added: true
      }
      newElements.splice(indx, 1, x)    
    }
    
    setElement(newElements) 
  }
 
  return (
    <div className="app">
      <Header />
      <div className="text-center max-w-screen-md mt-16 mx-auto px-8 py-8 bg-white rounded-md shadow-xl border-fuchsia-600 border-solid border-2 flex flex-col gap-y-10">
        {elements.map((element) => {
            let addTitle 
            if(element.added === false){
              addTitle = "Добавить"
            }else if(element.added === true){
              addTitle = "Добавлено"
            }            
              return(            
                <Element key={element.id} element={element} onClick={() => deleteElement(element.id)} number={elements.indexOf(element) + 1} add={addTitle} onClickAdd={()=>add(element)}/>  
              )            
        })}
      </div>
    </div>
  )
}

export default App;