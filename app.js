// $(document).on("click", ".searchButton",function(){
//     var submit =    $("#search-term").val().trim();
//                     $("#numberRecords").val().trim();
//                     $("#startYear").val().trim();
//                     $("#endYear").val().trim();
//     console.log(submit)
// })

$("button").on("click", function () {
    var searchTerm = "Football"; //$(this).attr("");
    var queryURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json?q=" +
        searchTerm + "&api-key=nCENpRwrPzKjfXAEofPWBC11InknUlGf";

    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function (response) {
        console.log(response);

        var results = response.data;
        for (var i = 0; i < results.length; i++) {
            


        }






    })
})