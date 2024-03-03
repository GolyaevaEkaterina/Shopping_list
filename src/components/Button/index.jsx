function Button({ onClick, children }){
   
    return(
        <button onClick={onClick} className="text-indigo-600 hover:text-fuchsia-600 text-2xl">{children}</button>
    )
}
export default Button;