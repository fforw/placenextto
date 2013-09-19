(function($) {

    $.fn.placeNextTo = function($other, xOff, yOff) 
    {
        // wrap target in jQuery selection if it's just a string or DOMElement.
        if (typeof $other  == "string" || $other.nodeType)
        {
            $other = $(other);
        }
        
        xOff = xOff || 0;
        yOff = yOff || 0;

        var $treeParent = $other.parent();

        for (var i = 0, len = this.length; i < len; i++) 
        {
            var $cur = this.eq(i);
            var $parent = $other.offsetParent();

            var pos = $other.position();

            var x = pos.left + xOff;
            var y = pos.top + yOff;

            if (!$parent.is("html")) 
            {
                x += $parent.scrollLeft();
                y += $parent.scrollTop();
            }

            $cur.css({
                left : x,
                top : y
            });

            $cur.detach();           
            $treeParent.append($cur);
        }

        return this;
    };

})(jQuery);

