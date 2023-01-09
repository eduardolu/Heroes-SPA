import { useState } from "react"

 
export const useFrom = ( iniciarForm={}) => {
    const [FromState, setFromState] = useState( iniciarForm )

    const onInputChange =({target})=>{
        const {name,value}= target
        setFromState({
            ...FromState,
            [name]:value
        })
    }
    
    const onResertFrom =()=>{
        setFromState(iniciarForm)
    }

    return {
        ...FromState,
        FromState,
        onInputChange,
        onResertFrom,
    }
}