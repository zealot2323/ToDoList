export default class ProjectManager {
    constructor() {
        this.projects = this.loadProjects();
    }

    saveProjects() {
        localStorage.setItem("projects", JSON.stringify(this.projects.map(p => ({ name: p.name }))));
    }

    loadProjects() {
        const savedProjects = JSON.parse(localStorage.getItem("projects")) || [];
        return savedProjects.map(p => new Project(p.name));
    }

    createProject(name) {
        const project = new Project(name);
        const lengthProj = this.projects.push(project) - 1;
        this.saveProjects();
        return lengthProj
    }
    
    deleteProject(i) {
         this.projects.splice(i, i);
         this.saveProjects;
    }

    getProject(i)  {
        return this.projects[i];
    }
};

class Project {
    constructor(name) {
        this.name = name, 
        this.tasks = new TaskManager(name);
    }

    getTasks() {
        return this.tasks.tasks;
    }

    update(updates) {
        Object.assign(this, updates);
    }
};

class TaskManager {

    constructor(projectName) {
        this.projectName = projectName;
        this.tasks = this.loadTasks();
    }

    saveTasks() {
        localStorage.setItem(`tasks_${this.projectName}`, JSON.stringify(this.tasks));
    }

    loadTasks() {
        const savedTasks = JSON.parse(localStorage.getItem(`tasks_${this.projectName}`)) || [];
        return savedTasks.map(t => new Task(t));
    }

    createTask({title, desc, dueDate, priority, completed}) {
        const task = new Task ({title, desc, dueDate, priority, completed});
        this.tasks.push(task);
        this.saveTasks();
    }

    deleteTask(i) {
        this.tasks.splice(i, 1);
        this.saveTasks();
    }

    getTask(i) {
        return this.tasks[i];
    }
};

class Task {
    constructor({title, desc, dueDate, priority, completed = false}) {
        Object.assign(this, {title, desc, dueDate, priority, completed});
    }

    update(updates) {
        Object.assign(this, updates);
    }

    complete() {
        this.completed = true;
    }
};

//testing
