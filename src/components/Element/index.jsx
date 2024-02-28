

function Element(props){
    const { element, onClick, number, add, onClickAdd} = props
    return(
        <div className="flex justify-between border-b-fuchsia-200 border-b-solid border-b-2">
            <div className="flex gap-4 text-2xl text-indigo-700 ">
               <p>{number}.</p>
               <p>{element.name}</p>
            </div>
            <div className="flex gap-4">
               <button onClick={onClickAdd} className="bg-fuchsia-400 text-white text-xl rounded-md p-2 hover:bg-fuchsia-600">{add}</button>
               <button onClick={onClick} className="text-indigo-600 hover:text-fuchsia-600 text-2xl"><i class="fa-solid fa-trash"></i></button>
            </div>
            
        </div>
    )
}

export default Element;