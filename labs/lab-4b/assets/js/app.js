$('.item').click(function() {

    //is the item already in the car? 
    //has the user already clicked this item
    
    //increment the cart number
    //find current value of cart of .item-count
    //add 1 to current value of .item-count
    //represent new cart number in HTML of .item count

    var current_count = $('.item-count').html(),
        current_value = Math.abs(current_count),   
        new_count     = current_value + 1;

    $('.item-count').html(new_count);
});