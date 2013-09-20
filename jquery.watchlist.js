(function($, window, undefined) {
    $.fn.watchList = function(){
        /**
        * This function handles a dom tree update and determines whether to show the
        * clones or the data-empty div
        **/
        var fnUpdate = function(evt){
            var o = $(evt.target);
            var elementCount = o.children(":not([data-clone],[data-empty])").length;
            if(elementCount){
                o.children('[data-empty]').hide();
            } else {
                o.children('[data-empty]').show();
            }
        };

        var doWatchList = function(o){
            // START - Verify the element conforms
            if(!o.children("[data-clone]").length){
                console.log("This list must contain at least one data-clone element");
            }
            if(o.children("[data-empty]").length != 1){
                console.log("This list must contain exactly one data-empty element");
            }
            // END - Verify the element conforms

            o.bind("DOMSubtreeModified", fnUpdate);
            o.trigger("DOMSubtreeModified");
        }

        return this.each(function(i, e){
            doWatchList($(e));
        });
    }
})(jQuery, window);