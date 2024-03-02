import Button from "components/Button";

function Element(props){
    const { element, onClick, number, onClickAdd, add } = props
    return(
        <div className="flex justify-between border-b-fuchsia-200 border-b-solid border-b-2">
            <div className="flex gap-4 text-2xl text-indigo-700 ">
               <p>{number}.</p>
               <p>{element.name}</p>
            </div>
            <div className="flex gap-4">
                <Button onClick={onClickAdd} children={add}/>
                <Button onClick={onClick} children={<i class="fa-solid fa-trash"></i>}/>
               
            </div>
            
        </div>
    )
}

export default Element;