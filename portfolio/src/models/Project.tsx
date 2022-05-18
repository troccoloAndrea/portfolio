export interface SEO {
    id:number,
    slug:string,
    metatitle: string,
    metadescription:string
}

export interface Technology{
    id:number,
    name:string
}

export interface Activity{
    id:number,
    name:string
}

export interface Partner{
    id:number,
    name:string
}

export interface SkillAttributes{
    name: string,
    image: any,
    homepage: boolean,
    createdAt:string ,
    updatedAt:string, 
    publishedAt: string
}

export interface Skill{
    id: number,
    attributes: SkillAttributes
}

export interface StrapiSkillRequest {
    data : Skill[]
       
}

export interface StrapiSkillSingleRequest {
    data : Skill
       
}


export interface Project {
    id:number,
    attributes: ProjectAttributes
}


export interface ProjectAttributes{
    title: string,
    image:any,
    description: string,
    category: string,
    skills: StrapiSkillRequest,
    activities: Activity[],
    role: string,
    partners?: Partner[],
    github?: string,
    demo?: string,
    applestore?: string,
    playstore?: string,
    SEO : SEO[]
}

export interface StrapiProjectRequest{
    data: Project[]
}

export interface StrapiSingleProjectRequest{
    data: Project
}
