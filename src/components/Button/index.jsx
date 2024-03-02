function Button(props){
    const { onClick, children } = props
   
    return(
        <button onClick={onClick} className="text-indigo-600 hover:text-fuchsia-600 text-2xl">{children}</button>
    )
}
export default Button;