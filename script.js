
$(document).ready(function(){
    $('header button').click(function(){
        $('form').slideDown();
    })
    $('form').on('submit', function(e){
        e.preventDefault();
        const novaData = $('#novaData').val();
        const novaTarefa = $('#inserirNovadata').val();
        const novoItem = $('<li></li>');
    
        const tarefaText = document.createTextNode(novaTarefa);
        novoItem.append(tarefaText);
        novoItem.text(`When:${novaData} - Task: ${novaTarefa}`);
    
        $('ul').append(novoItem);
    
        $(document).ready(function(){
            $('li').click(function(){
                $(this).css('text-decoration', 'line-through');
                $(this).css('background-color', '#6ee24a')
            });
        });
    });
});

