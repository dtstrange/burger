$(function () {
    $(".devour-btn").on("click", function (event) {
        var id = $(this).data("id")


        var burgerState = {
            devoured: 1
        };

        $.ajax("/api/burgers/" + id, {
            type: "PUT",
            data: burgerState
        }).then(function () {
            console.log("Burger is devoured");
            location.reload();
        })
        // .catch(function (err) {
        //         console.log(err);
        //     })
    });

    $(".newBurger").on("click", function (event) {
        event.preventDefault();

        var addBurger = {
            burger_name: $("#bgInput").val().trim(),
            devoured:0
        };

        $.ajax("/api/burgers/", {
            type: "POST",
            data: addBurger
        }).then(function () {
            console.log("New Burger Added");
            location.reload();
        })
        // .catch(function (err) {
        //     console.log(err);
        // })
    });

    
});