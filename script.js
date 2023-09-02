$(document).ready(function(){

    $('form').on('submit',(e)=>{
        e.preventDefault();
        const tarefa = $('form input').val();
        $(`<li class="tarefas">${tarefa}</li>`).appendTo('ul');
        $('form input').val("");
    });


    $('#lista').on('click', "li",function(){
        $(this).css("text-decoration", "line-through");
        $(this).css("color", "rgba(250,250,250,0.8)");
    });
});