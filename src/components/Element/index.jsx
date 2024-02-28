

function Element(props){
    const { element, onClick, number, add, onClickAdd} = props
    return(
        <div className="flex justify-between border-b-fuchsia-200 border-b-solid border-b-2">
            <div className="flex gap-4 text-2xl text-indigo-700 ">
               <p>{number}.</p>
               <p>{element.name}</p>
            </div>
            <button className="bg-fuchsia-600 text-white text-xl">{add}</button>
            <button onClick={onClick} className="text-indigo-600 hover:text-fuchsia-600 text-2xl"><i class="fa-solid fa-trash"></i></button>
        </div>
    )
}

export default Element;