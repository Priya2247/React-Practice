const IsVeg = ({veg}) => {
    return(
            <div className="flex items-center gap-2">
                <span>{veg?'Veg':'Non-veg'}</span>
                <div className={`w-5 h-5 flex items-center border-2 ${veg?' border-green-600':' border-red-600'}`}>
                    <div className={`w-3/4 h-3/4 rounded-full mx-auto  ${veg? 'bg-green-600':'bg-red-600'}`}></div>
                </div>
           </div>
    )
}

export default IsVeg;