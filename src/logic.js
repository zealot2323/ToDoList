class Instance {
    constructor(projects) {
        this.projects = projects;
    }
}

class Project {
    constructor(name, tasks) {
        this.name = name;
        this.tasks = tasks; //does this need to be an array?
    }
}