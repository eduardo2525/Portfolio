class Project {
  constructor(id, title, technologies, image, linkGit, linkDeploy) {
    this.id = id
    ;(this.title = title),
      (this.technologies = technologies),
      (this.image = image),
      (this.linkGit = linkGit),
      (this.linkDeploy = linkDeploy)
  }

  getProject() {
    return (
      this.id,
      this.title,
      this.technologies,
      this.image,
      this.linkGit,
      this.linkDeploy
    )
  }
}

export default Project
