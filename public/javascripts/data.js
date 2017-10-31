let storage = readFromStorage();
writeToStorage(storage);

function getAll() {
    return storage;
}

function persist(toPersist) {
    storage = toPersist;
    writeToStorage(storage);
}

function readFromStorage(toPersist) {
    //return JSON.parse(localStorage.getItem("taskStorage") || "[ ]");
    let tasks = Tasks.find();
    return tasks;
}

function writeToStorage(toPersist) {
    const t = new Task({title: req.params.title, description: req.params.description, date: req.params.date});
    Tasks.create(t);
}




// class TaskDataSinkServer {
//     constructor() {
//         // Server usage
//     }
//     persist(tasks) {
//         // fetch() AJAX all => Promise
//     }
// }




module.exports = getAll(); persist();
