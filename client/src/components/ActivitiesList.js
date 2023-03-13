import React,{useEffect} from 'react';
import {useSelector,useDispatch} from "react-redux";
import {ActivitiesCard} from "./ActivitiesCard";
import {getAllActivities} from "../redux/actions";



export const ActivitiesList = () => {
const activities = useSelector(state => state.activities)
const dispatch = useDispatch();  

useEffect(() => {
  dispatch(getAllActivities());
}, [dispatch]);
  return (
    <div className = "container-country">
    {activities.map(actividad => <ActivitiesCard key={actividad.id} actividad={actividad} />)}
  </div>
  )
}
