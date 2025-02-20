class ProjectManager {
    constructor() {
        this.projects = [];
    }

    createProject(name) {
        const project = new Project(name);
        this.projects.push(project); 
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
const instance = new ProjectManager();
console.log(instance);

instance.createProject("My Tasks");
console.log(instance);

const myTasks = instance.getProject(0);

myTasks.tasks.createTask({title: "Test task", desc: "blah blah blah", dueDate: "10/1/2025", priority: "1", completed: false});
console.log(myTasks.tasks);

myTasks.tasks.getTask(0).complete();
console.log(myTasks.tasks);

myTasks.tasks.getTask(0).update({ title: "Updated Task" });
console.log(myTasks.tasks);

myTasks.tasks.deleteTask(0);
console.log(myTasks.tasks);