import { useEffect } from "react";
import { API } from "../utils/links";
import { useDispatch } from "react-redux";
import { addData } from "../utils/dataSlice";

const useFetchData = ()=>{
    const dispatch = useDispatch();

    const getData = async() =>{
        const data = await fetch(API);
        const json = await data.json();
        dispatch(addData(json));
    };

    useEffect(()=>{
        getData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[]);

};

export default useFetchData;