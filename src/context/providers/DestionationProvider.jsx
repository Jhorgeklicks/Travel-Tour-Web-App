import { useEffect, useReducer } from "react";
import DesitinationReducer from "../reducers/DesitinationReducer";
import destinationContext from "../DestinationContext";
import { destinations } from "../../data/destinations";
import Cities from "../../data/cities";

const DestionationProvider = (props) => {
  const [destinationState, dispatch] = useReducer(DesitinationReducer, {
    destinations, 
    details : {},
    cities : Cities,
    filteredCity : [] 
  })

  return (
    <destinationContext.Provider value={{destinationState, dispatch}}>
        {props.children}
    </destinationContext.Provider>
  )
}

export default DestionationProvider;