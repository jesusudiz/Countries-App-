import React, { useEffect } from 'react';
import { useSelector, useDispatch } from "react-redux";
import { ActivitiesCard } from "./ActivitiesCard";
import { getAllActivities } from "../redux/actions";
import "./ActivitiesList.css"


export const ActivitiesList = () => {
  const activities = useSelector(state => state.activities)
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllActivities());
  }, [dispatch]);
  return (



    <div className="container-activities ">
   
      {activities.length === 0 ? ( <div className="mensaje">
            <h2>Aún no se han agregado actividades</h2>
            </div>) :activities.map(actividad => <ActivitiesCard key={actividad.id} actividad={actividad} />)}
    </div>
  )
}
