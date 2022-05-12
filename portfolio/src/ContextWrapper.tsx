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
        console.log(process.env.REACT_APP_API_LINK);
        await axios.get<any>(`${process.env.REACT_APP_API_LINK}`, {
            headers: { 'X-Master-Key' : `${process.env.REACT_APP_MASTER_KEY}` }
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