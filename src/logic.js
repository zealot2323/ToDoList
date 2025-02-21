export default class ProjectManager {
    constructor() {
        this.projects = [];
    }

    createProject(name) {
        const project = new Project(name);
        return this.projects.push(project) - 1; 
    }
    
    deleteProject(i) {
        return this.projects.splice(i, i);
    }

    getProject(i)  {
        return this.projects[i];
    }
};

class Project {
    constructor(name) {
        this.name = name, 
        this.tasks = new TaskManager();
    }

    getTasks() {
        return this.tasks.tasks;
    }

    update(updates) {
        Object.assign(this, updates);
    }
};

class TaskManager {

    constructor() {
        this.tasks = [];
    }

    createTask({title, desc, dueDate, priority, completed}) {
        const task = new Task ({title, desc, dueDate, priority, completed});
        this.tasks.push(task);
    }

    deleteTask(i) {
        return this.tasks.splice(i, 1);
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
