class Project {
  constructor(
    id,
    title,
    description,
    technologies,
    image,
    linkGit,
    linkDeploy
  ) {
    ;(this.id = id),
      (this.title = title),
      (this.description = description),
      (this.technologies = technologies),
      (this.image = image),
      (this.linkGit = linkGit),
      (this.linkDeploy = linkDeploy)
  }

  getProject() {
    return (
      this.id,
      this.title,
      this.description,
      this.technologies,
      this.image,
      this.linkGit,
      this.linkDeploy
    )
  }
}

export default Project
