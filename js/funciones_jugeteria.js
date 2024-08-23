$(document).ready(function(){
    $('.sidenav').sidenav();

    $('.logo').hover(
        function() {
          $(this).addClass('zoom'); // Agrega la clase 'zoom' al pasar el ratón
        }, 
        function() {
          $(this).removeClass('zoom'); // Remueve la clase 'zoom' cuando el ratón se aleja
        }
    );

    $("#jugetes1").hover(function(){
    $("#jugetes1").addClass("circle");
    $("#jugete1").css("backgroundColor","#BB9AB1");
  });

    $("#jugetes1").mouseout(function(){
    	$("#jugetes1").removeClass("circle")
    	$("#jugete1").css("backgroundColor","#ffffff")

    });

    $("#jugetes2").hover(function(){
    $("#jugetes2").addClass("circle");
    $("#jugete2").css("backgroundColor","#BB9AB1");
  });

    $("#jugetes2").mouseout(function(){
    	$("#jugetes2").removeClass("circle")
    	$("#jugete2").css("backgroundColor","#ffffff")

    });

    $("#jugetes3").hover(function(){
    $("#jugetes3").addClass("circle");
    $("#jugete3").css("backgroundColor","#BB9AB1");
  });

    $("#jugetes3").mouseout(function(){
    	$("#jugetes3").removeClass("circle")
    	$("#jugete3").css("backgroundColor","#ffffff")

    });

    $("#jugetes4").hover(function(){
    $("#jugetes4").addClass("circle");
    $("#jugete4").css("backgroundColor","#BB9AB1");
  });

    $("#jugetes4").mouseout(function(){
    	$("#jugetes4").removeClass("circle")
    	$("#jugete4").css("backgroundColor","#ffffff")

    });

    $("#jugetes5").hover(function(){
    $("#jugetes5").addClass("circle");
    $("#jugete5").css("backgroundColor","#BB9AB1");
  });

    $("#jugetes5").mouseout(function(){
    	$("#jugetes5").removeClass("circle")
    	$("#jugete5").css("backgroundColor","#ffffff")

    });

    $("#jugetes6").hover(function(){
    $("#jugetes6").addClass("circle");
    $("#jugete6").css("backgroundColor","#BB9AB1");
  });

    $("#jugetes6").mouseout(function(){
    	$("#jugetes6").removeClass("circle")
    	$("#jugete6").css("backgroundColor","#ffffff")

    });


    const instance = new TypeIt("#pauseResume", 
        {
      strings:
        "Magical Toyland",
      waitUntilVisible: true,
    }).go();

document.querySelector("#freezeButton").addEventListener("click", function (e) {
  if (instance.is("frozen")) {
    instance.unfreeze();
    return;
  }

  instance.freeze();
});

});