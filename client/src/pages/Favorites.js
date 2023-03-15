import {FavoritesList} from "../components/FavoritesList"
import { useSelector } from "react-redux";
import { Loader } from "../components/Loader"

export const Favorites = () => {
  const favorites = useSelector(state => state.favorites);
  const isLoading = useSelector(state => state.isLoading);

  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
        <>
          {favorites.length === 0 ? (
            <div className="mensaje">
            <h2>Aún no se han seleccionado favoritos</h2>
            </div>
          ) : (
            <FavoritesList />
          )}
        </>
      )}
    </>
  )
}
