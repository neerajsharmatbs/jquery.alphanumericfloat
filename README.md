jquery.inputmask.js
===================

This is a handy JQuery plugin for form inputs to allow/restrict the values one wants. JS offers three methods -

1. numeric()
2. float()
3. alpha()

User can use one of the three mentioned methods to restrict the input value.

Example: 

Let there be a input field in the html form with id 'input1'.

$('#input1').numeric() : It will allow only numeric values to be entered in the input field.
                          As key listeners are binded in js so user will not be able to even type in the field. This method will restrict decimal to be entered in the input.
                          
$('#input1').float() : It will allow floating i.e. decimal values to be entered in the input field.

$('#input1').alpha() : It will allow only alphabets to be entered in the input field.
