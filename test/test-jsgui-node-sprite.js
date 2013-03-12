if (typeof define !== 'function') {
    var define = require('amdefine')(module);
}

define(['jsgui-lang-essentials', 'fs', 'path', '../jsgui-node-sprite', 'jsgui-node-png'], 
    function(jsgui, fs, path, jsgui_node_sprite, jsgui_node_png) {
        var tof = jsgui.tof, each = jsgui.each;
        var stringify = jsgui.stringify;
        
        
        // does not return anything. just makes a sprite.
        
        var stringify = jsgui.stringify;
        var source_images = ['./png/axe.png', './png/bike.png', './png/dice.png', './png/knife.png', './png/pliers.png'];
        
        // want to get the sprite rgba buffer.
        
        
        //var stringify = jsgui.stringify;
        //var source_images = ['./png/axe.png', './png/bike.png', './png/dice.png', './png/knife.png', './png/pliers.png'];
        
        // want to get the sprite rgba buffer.
        
        
        
        jsgui_node_sprite.rgba_buffer_from_files(source_images, function(err, res) {
            if (err) {
            
            } else {
                //console.log('res ' + stringify(res));
                // can't stringify a large image.
                console.log('test callback');
                // save 
                
                var dest_path = 'sprite.png';
                
                // use image to save it?
                //  can use PNG to save it.
                
                console.log('pre save');
                
                // var save_rgba_pixel_buffer_to_disk = function(rbga_buffer, dest_path, callback)
                
                jsgui_node_png.save_rgba_pixel_buffer_to_disk(res, dest_path, function(err, res) {
                    console.log('done save');
                })
                
                
            }
        });
        
    }
);
