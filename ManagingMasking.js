// Managing the maksing        

    $('#ctl00_ContentPlaceHolder1_drvrLicense').bind('keypress keyup',function(e)
            {
                var keycode = (e.keycode | e.which);

                var value = $('#ctl00_ContentPlaceHolder1_drvrLicense').val();
                
                var value2 = $('#ctl00_ContentPlaceHolder1_lbldriverLicense').val();
                if(!value.startsWith("xxx"))
                {
                    $('#ctl00_ContentPlaceHolder1_lbldriverLicense').val(value);
                }
                
                else if(keycode == 8)
                {
                    var nval = $('#ctl00_ContentPlaceHolder1_lbldriverLicense').val();
                    nval = nval.slice(0,-1);
                    $('#ctl00_ContentPlaceHolder1_lbldriverLicense').val(nval);
                }
                else if(keycode==46)
                {
                    var nval = $('#ctl00_ContentPlaceHolder1_lbldriverLicense').val();
                    nval = nval.substring(1,nval.length);
                    $('#ctl00_ContentPlaceHolder1_lbldriverLicense').val(nval);
                }
                else
                {
                    var b = value.charAt(value.length-1);
                    //console.log(b);
                    value2  = value2 + b;
                    //console.log(value2);
                    $('#ctl00_ContentPlaceHolder1_lbldriverLicense').val(value2);
                    //console.log(value2);

                }
                
            });
