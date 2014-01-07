//    uses max-height for css transition
//    assumes structure with clickable div category name header, 
//    NEXT sibling div with class "accordionNav" (contains accordion-ized unordered list)

// bind with $("#element).on("click", maxHeightAccordion);

function maxHeightAccordionInit(elemObject) {       
         
    var listItems = $(elemObject).find("li"); 
        
    var liLength = listItems.length;
    
    var heights = [];
    listItems.each(function () {
        heights.push($(this).outerHeight(true));
    });
        
    var totalHeight = 0;
    $.each(heights,function() {
        totalHeight += this;
    });
    
    $(elemObject).addClass("accordionOpen");
    $(elemObject).children("ul").css("max-height",totalHeight);   
}

function maxHeightAccordion(e) {
    e.preventDefault();
    e.stopPropagation();
    
    var targetDiv = $(this).next(".accordionNav");
        
    if(!$(targetDiv).hasClass("accordionOpen")){ /* open accordion */
        console.log("accordion:: if - true");
         
        var listItems = $(targetDiv).find("li");
        
        var testLength = listItems.length;
        console.log("testLength=" + testLength);               
        
        var heights = [];
        listItems.each(function () {
            heights.push($(this).outerHeight(true));
        });
        
        console.log("heights=" + heights);
                
        var totalHeight = 0;
        $.each(heights,function() {
            totalHeight += this;
        });
        $(this).addClass("activeCategory");
        $(targetDiv).addClass("accordionOpen");
        $(targetDiv).children("ul").css("max-height",totalHeight);
    }
    
    else {
        console.log("accordion:: if - true");
        
        $(this).removeClass("activeCategory");
        $(targetDiv).removeClass("accordionOpen");
        $(targetDiv).children("ul").css("max-height","0");
    } 
}