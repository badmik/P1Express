const taskStorage = require('./data.js');

const mongoose = require('mongoose');

const schema = new Schema({ name: String, description: String, date: String});

class TaskClass {
    constructor(name = "", description = "", date = "") {
        this.name = name;
        this.description = description;
        this.date = date;
        //this.priority = priority;
    }
    toJSON() {
        return {
            name: this.name,
            description: this.description,
            date: this.date,
        };
    }
    static fromJSON(id, obj) {
        return new Task(id, obj.name, obj.description, obj.date);
    }
}

class TaskManager {
    constructor(dataSink) {
        let taskFromStorage = taskStorage.getAll();
        this._tasks = [ ];
        this._dataSink = dataSink;
    }

    add(newTask) {
        this._tasks.push(newTask);
        this._dataSink.persist(this._tasks);
    }


    findByName(name) {
        return this._tasks.findByName(name);
    }

    save() {
        taskStorage.persist(this._tasks.map(t => t.toJSON()));
    }
}


schema.loadClass(TaskClass);
const Task = db.model('Task', schema);

class Controller {
    constructor() {
        this.taskManager = new TaskManager(new TaskManager());
    }
    bootstrap() {
        $("#btnSend").on("click", () => this.send());
    }

    send() {
        let newTask = new Task(
            document.getElementById("name").value,
            document.getElementById("description").value,
            document.getElementById("date").value);
        //document.getElementById("date").value;
        this.taskManager.add(newTask);
    }
}

;(function ($) {

    const uiController = new Controller();
    $(function () {
        uiController.bootstrap();
    });

})(jQuery);


module.exports = TaskManager(); Controller (); Task();



