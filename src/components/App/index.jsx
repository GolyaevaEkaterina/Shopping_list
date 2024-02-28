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
      added: false
    },
    {
      id: 5,
      name: "Минералка",
      added: false
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

  



  // function add(element){
  //    if(element.added === false){
  //      element.added = true
  //      setElement(elements)
  //    } 
  //     element.added = false
  //      setElement(elements)
     
  //    console.log(elements)
  // }

 
  return (
    <div className="app">
      <Header />
      <div className="text-center max-w-screen-md mt-16 mx-auto px-8 py-8 bg-white rounded-md shadow-xl border-fuchsia-600 border-solid border-2 flex flex-col gap-y-10">
        {elements.map((element) => {
          if(element.added === false){
            return(            
              <Element key={element.id} element={element} onClick={() => deleteElement(element.id)} number={elements.indexOf(element) + 1} add={"Добавлено"} />  
            )
          }
          if(element.added === true){
            return(            
              <Element key={element.id} element={element} onClick={() => deleteElement(element.id)} number={elements.indexOf(element) + 1} add={"Добавить"} />  
            )
          }
          // return(            
          //   <Element key={element.id} element={element} onClick={() => deleteElement(element.id)} number={elements.indexOf(element) + 1} add={title}/>  
          // )
        })}
      </div>
    </div>
  )
}

export default App;