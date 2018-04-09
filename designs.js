/**
 * Created by Matan Zittoun on 4/8/2018.
 */
// Select size input
var height, width;

// Select color input
var color;


// When size is submitted by the user, call makeGrid()
$('#sizePicker').submit(function(event){
    event.preventDefault();
    height = $('#inputHeight').val();
    width = $('#inputWeight').val();
    //alert(height);
    makeGrid(height, width);
})

//Painting Canvas
$('#pixelCanvas').on('click','td',function() {
    color = $('#colorPicker').val();
    $(this).attr('style', 'background-color:' + color);
})


function makeGrid(N, M) {
    $('tr').remove(); //resetting grid
    for(var i = 1; i<= N; i++) {
        $('#pixelCanvas').append('<tr id=table' + i + '></tr>');
        for (var j = 1; j <= M; j++) {
            $('#table' + i).append('<td></td>');
        }
    }
}

// Your code goes here!
