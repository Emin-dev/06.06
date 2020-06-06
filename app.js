$(document).ready(function () {
    





$.ajax({
    type: "get",
    url: "http://kamranaeff1994-002-site3.ctempurl.com/api/Products",
    success: function (response) {


        $.each(response, function (i, e) { 
             
            let col4 = $('<div/>',{
                html:`<div class="card" style="width: 18rem;">
                <img class="card-img-top" src="http://kamranaeff1994-002-site3.ctempurl.com/images/${e.image}" alt="Card image cap">
                <div class="card-body">
                  <h5 class="card-title">Card title</h5>
                  <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                  <a href="#" class="btn btn-primary">Go somewhere</a>
                </div>
              </div>`,
                class:'col-4 mb-4',
            })

            $('#rowid').append(col4);








        });

        console.log(response)
    },
    error: function(response){
        console.log("bad:"+response)
    }
});








});