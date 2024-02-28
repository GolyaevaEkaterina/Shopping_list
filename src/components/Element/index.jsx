import Button from "components/Button";

function Element(props){
    const { element, onClick } = props
    return(
        <div className="flex justify-between border-b-fuchsia-200 border-b-solid border-b-2">
            <div className="flex gap-4 text-2xl text-indigo-700 ">
               <p>{element.id}.</p>
               <p>{element.name}</p>
            </div>
            <Button onClick={onClick(element.id)}/>
        </div>
    )
}

export default Element;