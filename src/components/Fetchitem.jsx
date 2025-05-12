// it is for Back-end Logic like when data is loaded what to do 
// and after data loaded then what to do 

import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux"
import { fetchStatusActions } from "../store/fetchStatusSlice";
import {itemAction} from "../store/itemSlice";

const Fetchitem = () => {

  const fetchStatus=  useSelector((store)=> store.fetchStatus);
  const dispatch = useDispatch();

  useEffect(() => {
    if (fetchStatus.fetchDone) return;

    const controller = new AbortController();
    const signal = controller.signal;

    fetch("http://localhost:8080/items", { signal })
      .then((res) => res.json())
      .then(({ items }) => {
        dispatch(fetchStatusActions.markFetchDone());
        dispatch(fetchStatusActions.markFetchingFinished());
        dispatch(itemAction.addInitialItems(items));
      });
    },[fetchStatus])

  return(
    <>
    </>
);

};

export default Fetchitem
