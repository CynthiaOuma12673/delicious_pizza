let cost,costofcrust,costoftopping;
let total=0;

function Orderpizza(flavor,size,crust,toppings,total){
    this.flavor=flavor;
    this.size=size;
    this.crust=crust;
    this.toppings=toppings;
    this.total=total;
}

// validation of the next button
$(document).ready(function(){
    $('button.next').click(function(event){
        let pizzaFlavor=$('.flavor option:selected').val();
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
        let costoftopping=pizzaTopping.length*100;
        
        if ((pizzaSize=='0') && (pizzaCrust=='0')){
            $('button.next').show();
            $('#read').show();
            $('#orders').hide();
            alert('kindly choose the size and crust for your pizza');
        }
        else{
            $('button.next').hide();
            $('#read').hide();
            $('#orders').slideDown(1500);
        }

        // calculating the total cost
        total=cost + costofcrust + costoftopping;
        let checkTotal=0;
        checkTotal=checkTotal + total;
        
        
        // prizes on table
        $('#flavor-choice').html($('#flavor option:selected').val());
        $('#size-choice').html($('#size option:selected').val());
        $('#crust-choice').html($('#crust option:selected').val());
        $('#toppings-choice').html(pizzaTopping.join(''));
        $('#total-cost').html(total);

        // validating the button for adding another pizza
        $('button.addingPizza').click(function(){
            let pizzaFlavor=$('.flavor option:selected').val();
            let pizzaSize=$('#size option:selected').val();
            let pizzaCrust=$('#crust option:selected').val();
            let pizzaTopping=[];
            $.each($("input[name='toppings']:checked"),function(){
                pizzaTopping.push($(this).val());
            });
        });
            // console.log(pizzaTopping.join(''));
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
        $('button.addingPizza').click(function(){
        let orderNew = new Orderpizza(pizzaFlavor, pizzaSize,pizzaCrust,pizzaTopping,total);
        $("#orders").append('<tr><td id="flavor-choice">'+orderNew.flavor +'</td><td id="size-choice">' + orderNew.size + '</td><td id="crust-choice">'+orderNew.crust + '</td><td id="toppings-choice">'+orderNew.topping+'</td><td id="total-cost">'+orderNew.total+'</td></tr>');
        });
        });
        
        // button for checkout

        $('button#checkout').click(function(){
            $('button#checkout').hide();
            $('button.addingPizza').hide();
            $('button.delivery').slideDown(1200);
            $('#delivery-cost').slideDown(1000);
            $('#totals-cost').append('your cost is:'+ checkTotal);
        });
        
        // button for home delivery
        $('button.delivery').click(function(){
            $('#order-table').hide();
            $('.summary p').hide();
            $('.delivery-address').slideDown(1500);
            $('#delivery-cost').hide();
            $('button.delivery').hide();
            $('#totals-cost').hide();
            let amountOfDelivery=checkTotal+200;
            $('#bill').append('your total cost is:' + amountOfDelivery);
        });
        
        // place order btn
        $('button#complete-order').click(function(event){
            $('#totals-cost').hide();
            $('.delivery-address').hide();
            $('buttoon#complete-order').hide();

            // inputting location details
            let name=$('input#name').val();
            let mobileNumber=$('input#phone').val();
            let place=$('input#location').val();

            // for if inputs on delivery address
            if ($("input#name").val() && $("input#phone").val() && $("input#location").val()!=""){
                $("#text").append(name+", Your order has been received, wait for delivery to " + location + ". you should have ksh.200 for delivery ");
                $("#bill").hide();
                $("#text").slideDown(1000);  
            }
            else {
                alert("Kndly ensure your delivery details are correct");
                $(".deliver-address").show();
                $("button#complete-order").show();
            }
            event.preventDefault();
            });
        });
        