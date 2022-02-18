import React, { useEffect, useState } from "react"
import ProjectTile from "./ProjectTile"
import NewProjectForm from "./NewProjectForm"
import translateServerErrors from "../../../services/translateServerErrors"

const ProjectsIndex = props => {
  
  const [projects, setProjects] = useState([])
  const [errors, setErrors] = useState([])

  const userId = props.user.id
  const fetchProjects = async () => {
    try {
      const response = await fetch(`/api/v1/projects/users/${userId}`)
      if (!response) {
        throw new Error(`${response.status} (${response.statusText})`)
      }
      const body = await response.json()
      setProjects(body.projects)
    } catch(error) {
      return console.error(`Error in fetch: ${error.message}`)
    } 
  }

  useEffect(() => {
    fetchProjects()
  }, [])

  const postNewProject = async newProjectData => {
    try {
      const response = await fetch(`/api/v1/projects/new-project/${userId}`, {
        method: "POST",
        headers: new Headers ({
          "Content-Type": "application/json"
        }),
        body: JSON.stringify(newProjectData)
      })
      if (!response.ok) {
        if (response.status === 422) {
          const body = await response.json()
          const newErrors = translateServerErrors(body.errors)
          setErrors(newErrors)
        }
        const errorMessage = `${response.status} (${response.statusText})`
        const error = new Error(errorMessage)
        throw error
      } else {
        const body = await response.json()
        setErrors([])
        setProjects([...projects, body.project])
        return body.project
      }
    } catch (error) {
      console.error(`Error in fetch: ${error.message}`)
    }
  }

  const projectTiles = projects.map((project) => {
    return <ProjectTile key={project.id} project={project} />
  })
  

  return (
    <div className="projects-list-container">
      <div className="projects-index-container">
        {projectTiles}
      </div>
      <div className="projects-form-container">
        <NewProjectForm 
          postNewProject={postNewProject} 
          userId={userId}
        />
      </div>
    </div>
  )
}

export default ProjectsIndex