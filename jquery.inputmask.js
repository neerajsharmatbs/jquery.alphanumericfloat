(function ($) {
    $.fn.alphanumeric = function (p) {
        var input = $(this),
            az = "abcdefghijklmnopqrstuvwxyz",
            options = $.extend({
              ichars: '!@#$%^&*()+=[]\\\';,/{}|":<>?~`- _',
                nchars: '',
                allow: ''
            }, p),
            s = options.allow.split(''),
            i = 0,
            ch,
            regex;

        for (i; i < s.length; i++) {
            if (options.ichars.indexOf(s[i]) != -1) {
                s[i] = '\\' + s[i];
            }
        }

        if (options.nocaps) {
            options.nchars += az.toUpperCase();
        }
        if (options.allcaps) {
            options.nchars += az;
        }

        options.allow = s.join('|');

        regex = new RegExp(options.allow, 'gi');
        ch = (options.ichars + options.nchars).replace(regex, '');

        input.keypress(function (e) {
            var key = String.fromCharCode(!e.charCode ? e.which : e.charCode);
            if ((ch.indexOf(key) != -1 && !e.ctrlKey) || e.keyCode == 8364 || e.keyCode == 163 || e.keyCode == 165) { // keyCode added to restrict pound,euro and yen symbol
                e.preventDefault();
            }
            
        });

        input.blur(function () {
            var value = input.val(),
                j = 0;

            for (j; j < value.length; j++) {
                if (ch.indexOf(value[j]) != -1) {
                    input.val('');
                    return false;
                }
            }
            return false;
        });

        return input;
    };

//  method to mask input values to numeric.
    $.fn.numeric = function (p) {
        var az = 'abcdefghijklmnopqrstuvwxyz.', // only numbers are allowed. Restrict decimal as well.
            aZ = az.toUpperCase();

        return this.each(function () {
            $(this).alphanumeric($.extend({ nchars: az + aZ }, p));
        });
    };

//  method to mask input values to floating point numbers.
    $.fn.floating = function (p) {
        var pm = 'abcdefghijklmnopqrstuvwxyz',
            pM = pm.toUpperCase();

        return this.each(function () {
            $(this).alphanumeric($.extend({ nchars: pm + pM }, p));
        });
    }; // ends here

//  method to mask input values to allow only alphabets.
    $.fn.alpha = function (p) {
        var nm = '1234567890.';
        return this.each(function () {
            $(this).alphanumeric($.extend({ nchars: nm }, p));
        });
    };
})(jQuery);
