        function screenshot(selector) {
            var element = $(selector)[0];
            html2canvas(element, {
                onrendered: function(canvas) {
                    var imgData = canvas.toDataURL();
                     imgData = imgData.replace('data:image/png;base64,', '');  // 頭のいらない部分を落とす
                    $('#get_thumbnail').val(imgData);
                        $("#print").hide();
                       $('#form').show();

                }
            });
        }      

