import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Project } from './pages/components/portfolio/HomePortfolio';

type Props = {
    children: React.ReactNode
    
}

export const AppContext = React.createContext<Project[]>([]);

const ContextWrapper:React.FC<Props> = ({ children }) => {
    
    const [projects, setProjects] = useState<Project[]>([])

    const GetProjects = async () => {
        await axios.get<any>('https://api.jsonbin.io/b/627cf18c38be296761028814', {
            headers: { 'X-Master-Key' : '$2b$10$vXMWhcKR9uVgiwf/7GD3lO/3kf5OsS9YsFvTkh23DFB5bUseQ6kjK' }
        })
            .then(res => {
                setProjects(res.data)
            })
            .catch(err => alert("Server Error (500) :("))
    }

    useEffect(() => {
        GetProjects();
    },[])



  return (
        <AppContext.Provider value={projects}>
            {children}
        </AppContext.Provider>
  )
}

export default ContextWrapper