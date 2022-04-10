import { createContext } from "react"

const FavoritesContext = createContext({
    favorties: [],
    totalFavorites: 0
})

const FavoritesContextProvider = ({children}) => {
    return (
        <FavoritesContext.Provider>
            {children}
        </FavoritesContext.Provider>
    );
}