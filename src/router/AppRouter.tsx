import { Route, Routes } from "react-router-dom"
import { MyPokeStratAppRoutes } from '../pokemonApp/routes/MyPokeStratAppRoutes'
import { AuthRoutes } from "../auth/routes/AuthRoutes"
import { PublicRoutes } from "./PublicRoutes"
import { PrivateRoutes } from "./PrivateRoutes"

export const AppRouter = () => {
  return (
    
    <Routes>
        

          {/* Login y registro */}

          <Route 
            path="/auth/*" 
            element={ 
              <PublicRoutes>
                <AuthRoutes/> 
              </PublicRoutes>
            }
          />

          
        {/* MyPokeStrat App  */}
        
        <Route 
          path="/*" 
          element={ 
            
            <PrivateRoutes>
              <MyPokeStratAppRoutes/> 
            </PrivateRoutes>
          
          }
        />

        

    </Routes>

    )
}
