import ProjectManager from "./logic";

export default class UI {
    constructor(projectManager) {
        this.projectManager = new ProjectManager();
        this.taskList = document.querySelector('#taskList');
        this.projectList = document.querySelector('#projectList');
        this.taskForm = document.querySelector("#taskDetail");
        this.projectForm = document.querySelector("#projectAdd");
        if (this.projectManager.projects.length === 0) {
            this.projectManager.createProject("Default Project");
        }
        this.renderProjects();
        this.renderTasks();
        this.eventListeners();

    }

    eventListeners() {
 
    //open dialogue to create project
    document.querySelector("#addProject").addEventListener("click", (event) => {
        this.projectForm.classList.add('open');
    });

    //open dialogue to create task
    document.querySelector("#addTask").addEventListener("click", (event) => {
        this.taskForm.classList.add('open');
    });

    //handle creation of project when submit pressed in project dialogue
    document.querySelector("#submitProject").addEventListener("click", (event) => {
        event.preventDefault(); 
        let field = document.getElementById("name").value;
        if (field) {
            const id = this.projectManager.createProject(field);
            setTimeout(() => {
                document.getElementById("name").value = "";
                this.projectForm.classList.remove('open');
            }, 0);
            this.renderProjects(id);
        };
    });

    //handle creation or update of task when submit pressed in task dialogue
    document.querySelector("#submitTask").addEventListener("click", (event) => {
        event.preventDefault(); 
        const active = document.querySelector(".project.active");
        const activeId = active.getAttribute('data-index');
        
        const newTask = {
            title: document.getElementById("title").value,
            desc: document.getElementById("desc").value,
            dueDate: document.getElementById("dueDate").value,
            priority: document.getElementById("priority").value,
            completed: document.getElementById("completed").checked
        };
        const taskActive = document.querySelector(".task.active");
        if (taskActive) {
            const taskId = taskActive.getAttribute('data-index');
            console.log("update")
            this.projectManager.getProject(activeId).tasks.getTask(taskId).update(newTask);
        } else {
            console.log("new");
            this.projectManager.getProject(activeId).tasks.createTask(newTask);
        }
        
        setTimeout(() => {
            this.taskForm.classList.remove('open');
            document.querySelector("#taskForm").reset();
        }, 0);
        this.renderTasks(activeId);
    });

    //events for completed and deleted
    document.addEventListener("click", (e) => {
        const active = document.querySelector(".project.active");
        const activeId = active.getAttribute('data-index');
        if (e.target.classList.contains("complete")) {
            const index = e.target.dataset.index;
            this.projectManager.getProject(activeId).tasks.getTask(index).complete()
            this.renderTasks(activeId);
        } else if (e.target.classList.contains("remove")) {
            const index = e.target.dataset.index;
            this.projectManager.getProject(activeId).tasks.deleteTask(index);
            this.renderTasks(activeId);
        }
    });

    //close events
    document.querySelector('#closeTask').addEventListener("click", () => {
        const form = document.querySelector('#taskDetail');
        setTimeout(() => {
            form.classList.remove('open');
        }, 0);
    });

    document.querySelector('#closeProject').addEventListener("click", () => {
        const form = document.querySelector('#projectAdd');
        setTimeout(() => {
            form.classList.remove('open');
        }, 0);
        
    });

    }

    renderTasks(i = 0) {
        this.taskList.innerHTML = "";
        const header = document.createElement('div');
        header.classList.add('taskHeader');
        header.innerHTML = `
                <h4>Title</h4>
                <h4>Due Date</h4>
                <h4>Priority</h4>
                <h4>Status</h4>
                <h4>Complete</h4>
                <h4>Delete</h4>`
        this.taskList.appendChild(header);
        const tasks = this.projectManager.getProject(i).getTasks();
        tasks.forEach((task, index) => {
            const item = document.createElement('div');
            item.classList.add('task');
            item.setAttribute("data-index", index);
            item.innerHTML = `
                <h4>${task.title}</h4>
                <p>${task.dueDate}</p>
                <p>${task.priority}</p>
                <p>${task.completed ? "Done" : "To Do"}</p>
                <button class="complete" data-index="${index}">✅</button>
                <button class="remove" data-index="${index}">❌</button>
            `
            item.addEventListener("click", (event) => {
                const clickedTask = event.currentTarget;
                document.querySelectorAll(".task").forEach(project => {
                    project.classList.remove("active");
                });
                clickedTask.classList.add('active');
                const taskId = clickedTask.getAttribute('data-index');
                const task = this.projectManager.getProject(i).tasks.getTask(taskId);
                this.taskForm.classList.add('open');
                document.querySelector('#title').value = task.title;
                document.querySelector('#desc').value = task.desc;
                document.querySelector('#dueDate').value = task.dueDate;
                document.querySelector('#priority').value = task.priority;
                document.querySelector('#completed').checked = task.completed;
            });
            this.taskList.appendChild(item);
        });
        const taskSize = this.projectManager.getProject(i).getTasks().length;
        const sizeCounter = document.querySelector(`.project[data-index="${i}"] .size`);
        sizeCounter.textContent = taskSize;
    }
   
    renderProjects(i = 0) {
        this.projectList.innerHTML = "";
        this.projectManager.projects.forEach((project, index) => {
            const proj = document.createElement('div');
            proj.classList.add('project');
            proj.setAttribute("data-index", index);
            proj.innerHTML = `
                <p>${project.name}</p>
                <p class=size>${project.tasks.tasks.length}</p>
            `
            proj.addEventListener("click", (event) => {
                const clickedProject = event.currentTarget;
                document.querySelectorAll(".project").forEach(project => {
                    project.classList.remove("active");
                });
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