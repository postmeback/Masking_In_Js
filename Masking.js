  $('.driverLicense').bind('mouseout blur focusout', function () {
                var _this = this;
                delay(function () {
                    var _val = $(_this).val(),
                        _valLength = _val.length,
                        _finalVal = "";

                    for (i = 0; i < _valLength; i++) {
                        _finalVal = _finalVal + 'x';
                    }

                    setTimeout(function () {
                        $(_this).val(_finalVal);
                    }, 200);
                }, 100);
            });
