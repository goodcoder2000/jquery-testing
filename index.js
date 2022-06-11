$(document).ready(() =>{

    let url = "https://fakestoreapi.com/products/";
    let products;

    $("#req").click(() =>{
        $.get(url, (result, status) =>{
            products = result;
            for(let i=0; i<products.length; i++){
                $("#container").append(
                `<div id=${products[i].id}p class="child">
                    ${products[i].title}
                    <div>
                        <button id=${products[i].id} >remove</button>
                    </div>
                </div>`);
                $(`#${products[i].id}`).click(() =>{
                    console.log("remove");
                    $(`#${products[i].id}p`).fadeOut();
                })
            }
        })
    })

    $("#remove").click(() =>{
        $("#container").fadeToggle();
    })
})