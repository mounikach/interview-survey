// Using classes of product url    
    var resourceTile= $("div.homepageResources div.resource-tiles").addClass( "col-lg-6" );
    $(".resource-tiles div.col-md-3").addClass("col-lg-6");
    $(".product-selector.jumbotron-overlay").css("cssText","display:inline !important;");
    var setWidthHomeEntrySelection = $(".product-selector.jumbotron-overlay div.container div.divHomeEntrySelection").css("cssText","margin-left : 0px !important;");
    $(setWidthHomeEntrySelection).removeClass("col-lg-8");
    $(setWidthHomeEntrySelection).addClass("col-lg-6");
    $(setWidthHomeEntrySelection).css(
        {
            "float": "right",
            "clear":"both"
        }
        );
        $(resourceTile).css({"position":"relative","bottom":"11rem"})
      
