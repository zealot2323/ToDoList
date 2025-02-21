import ProjectManager from "./logic";

export default class UI {
    constructor(projectManager) {
        this.projectManager = new ProjectManager();
        this.taskList = document.querySelector('#taskList');
        this.projectList = document.querySelector('#projectList');
        this.taskDialogue = document.querySelector("#taskDetail");
        this.projectDialogue = document.querySelector("#projectAdd");
        if (this.projectManager.projects.length === 0) {
            this.projectManager.createProject("Default Project");
        }
        this.renderProjects();
        this.renderTasks();
        this.eventListeners();

    }

    eventListeners() {
 
        //open dialogue to create project
    const addProject = document.querySelector("#addProject");
    addProject.addEventListener("click", () => {
    this.projectDialogue.show();
    });

    //open dialogue to create task
    const addTask = document.querySelector("#addTask");
    addTask.addEventListener("click", () => {
    this.taskDialogue.show();
    });

    //handle creation of project when submit pressed in project dialogue
    document.querySelector("#submitProject").addEventListener("click", (event) => {
        event.preventDefault();
        const id = this.projectManager.createProject(document.getElementById("name").value);
        this.renderProjects(id);
    });

    //handle creation or update of task when submit pressed in task dialogue
    document.querySelector("#submitTask").addEventListener("click", (event) => {
        const active = document.querySelector(".project.active");
        const activeId = active.getAttribute('data-index');
        event.preventDefault();
        const newTask = {
            title: document.getElementById("title").value,
            desc: document.getElementById("desc").value,
            dueDate: document.getElementById("dueDate").value,
            priority: document.getElementById("priority").value,
            completed: document.getElementById("completed").checked
        };
        console.log(this.projectManager.getProject(activeId).tasks); 
        this.projectManager.getProject(activeId).tasks.createTask(newTask);
        this.renderTasks();
    });

    document.addEventListener("click", (e) => {
        const active = document.querySelector(".project.active");
        const activeId = active.getAttribute('data-index');
        if (e.target.classList.contains("complete")) {
            const index = e.target.dataset.index;
            this.projectManager.getProject(activeId).tasks.getTask(index).complete()
            this.renderTasks();
        } else if (e.target.classList.contains("remove")) {
            const index = e.target.dataset.index;
            this.projectManager.getProject(activeId).tasks.deleteTask(index);
            this.renderTasks();
    }
});
    }

    renderTasks(i = 0) {
        this.taskList.innerHTML = "";
        const tasks = this.projectManager.getProject(i).getTasks();
        console.log(tasks);
        tasks.forEach((task, index) => {
            const item = document.createElement('div');
            item.classList.add('task');
            item.innerHTML = `
                <h4>${task.title}</h4>
                <p>Due: ${task.dueDate}</p>
                <p>Priority: ${task.priority}</p>
                <p>Status: ${task.completed ? "Done" : "To Do"}</p>
                <button class="complete" data-index="${index}">✅</button>
                <button class="remove" data-index="${index}">❌</button>
            `
            item.addEventListener("click", (event) => {
                const clickedTask = event.currentTarget;
                clickedTask.classList.add('active');
                const activeId = clickedTask.getAttribute('data-index');
                this.taskDialogue.show(activeId);
            });
            this.taskList.appendChild(item);
        });
    }
     
    renderProjects(i = 0) {
        this.projectList.innerHTML = "";
        this.projectManager.projects.forEach((project, index) => {
            const proj = document.createElement('div');
            proj.classList.add('project');
            proj.setAttribute("data-index", index);
            proj.innerHTML = `
                <p>${project.name}</p>
                <p class=size'>${project.tasks.tasks.length}</p>
            `
            proj.addEventListener("click", (event) => {
                const clickedProject = event.currentTarget;
                clickedProject.classList.add('active');
                const activeId = clickedProject.getAttribute('data-index');
                this.renderTasks(activeId);
            });
            this.projectList.appendChild(proj);
        });
        const activeProject = document.querySelector(`[data-index="${i}"]`);
        activeProject.classList.add('active');
        this.renderTasks(i);
    }
}