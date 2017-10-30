import {default as model} from "./model.js";

;(function($) {

    let tasksTemplateProcessor = null;
    const taskManager = new model.Taskmanager();

    function showTasks() {
        $("#containerTasks").html(tasksTemplateProcessor({ tasks: taskManager.tasks }));
    }

    function updateUI() {
        showTasks();
    }


    $(function () {
        tasksTemplateProcessor = Handlebars.compile($("#tasks-list-template").html());
        $(document).on("click", "input[send]", function() { send() });
        //$("#btnEdit").on()
        $("#createTask").click(
            function () {
                Taskmanager.add($("#name").val());
                showTasks();
            });
        updateUI();
    });

})(jQuery);
