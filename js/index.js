let cost,costofcrust,costoftopping;
let total=0;

function Orderpizza(flavor,size,crust,topping,total){
    this.flavor=flavor;
    this.size=size;
    this.crust=crust;
    this.topping=topping;
    this.tital=total;
}

// validation of the next button
$(document).ready(function(){
    $('button.next').click(function(event){
        let pizzaFlavor=$('#flavor option:selected').val();
        let pizzaSize=$('#size option:selected').val();
        let pizzaCrust=$('#crust option:selected').val();
        let pizzaTopping=[];
        $.each($("input[name='toppings']:checked"),function(){
            pizzaTopping.push($(this).val());
        });

        // selecting pizza sizes
        switch(pizzaSize){
            case'0':
            cost=0;

            break;
            case'small':
            cost=500;
            console.log(cost);

            break;
            case'medium':
            cost=900;
            console.log(cost);

            break;
            case'large':
            cost=1300;
            console.log(cost);

            break;
            default:
                console.log(error)
            }
        // selecting the crust cost
        switch(pizzaCrust){
            case'0':
            costofcrust=0;

            break;
            case'stuffed':
            costofcrust=150;

            break;
            case'Flat Bread':
            costofcrust=160;

            break;
            case'Thin Crust':
            costofcrust=140;

            break;
            case'Cheese':
            costofcrust=170;

            break;
            default:
                console.log('No cost');
        }
        
        // calculating the topping cost
        let costoftopping=pizzaTopping.length*50;
        
        if ((pizzaSize=='0') && (pizzaCrust=='0')){
            $('button.next').show();
            $('#read').show();
            $('div#summary').hide();
            alert('kindly choose the size and crust for your pizza');
        }
        else{
            $('button.next').hide();
            $('#read').hide();
            $('div#summary').slideDown(1500);
        }

        // calculating the total cost
        total=cost + costofcrust + costoftopping;
        console.log(total);
        let checkTotal=0;
        checkTotal=checkTotal + total;
        
        
        // prizes on table
        $('#flavor-choice').html($('#flavor option:selected').val());
        $('#size-choice').html($('#size option:selected').val());
        $('#crust-choice').html($('#crust option:selected').val());
        $('#toppings-choice').html(pizzaTopping.join(''));
        $('#total-cost').html(total);

        // validating the button for adding another pizza
        $('button.addingPizza').click(function(event){
            let pizzaFlavor=$('#flavor option:selected').val();
            let pizzaSize=$('#size option:selected').val();
            let pizzaCrust=$('#crust option:selected').val();
            let pizzaTopping=[];
            $.each($("input[name='toppings']:checked"),function(){
                pizzaTopping.push($(this).val());
            });
        });
            console.log(pizzaTopping.join(''));
            // selecting pizza sizes
        switch(pizzaSize){
            case'0':
            cost=0;

            break;
            case'small':
            cost=500;
            console.log(cost);

            break;
            case'medium':
            cost=900;
            console.log(cost);

            break;
            case'large':
            cost=1300;
            console.log(cost);

            break;
            default:
                console.log(error)
            }
        // selecting the crust cost
        switch(pizzaCrust){
            case'0':
            costofcrust=0;

            break;
            case'stuffed':
            costofcrust=150;

            break;
            case'Flat Bread':
            costofcrust=160;

            break;
            case'Thin Crust':
            costofcrust=140;

            break;
            case'Cheese':
            costofcrust=170;

            break;
            default:
                console.log('No cost');
        }
        
        // calculating the total cost
        total=cost + costofcrust + costoftopping;

        // for check total
        checkTotal=checkTotal + total;

        // constructor functions to add new orders
        let orderNew = new Orderpizza(pizzaFlavor, pizzaSize,pizzaCrust,pizzaTopping,total);
        $("#orders").append('<tr><td id="flavor-choice">'+orderNew.flavor +'</td><td id="size-choice">' + orderNew.size + '</td><td id="crust-choice">'+orderNew.crust + '</td><td id="toppings-choice">'+orderNew.topping+'</td><td id="total-cost">'+orderNew.total+'</td></tr>');
        });
        
        // button for checkout

        $('button#checkout').click(function(){
            $('button#checkout').hide();
            $('button.addingPizza').hide();
            $('button.delivery').slideDown(1200);
            $('#')
        });



});