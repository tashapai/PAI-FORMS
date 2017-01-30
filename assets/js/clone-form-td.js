/*
Author: Tristan Denyer (based on Charlie Griefer's original clone code, and some great help from Dan - see his comments in blog post)
Plugin repo: https://github.com/tristandenyer/Clone-section-of-form-using-jQuery
Demo at http://tristandenyer.com/using-jquery-to-duplicate-a-section-of-a-form-maintaining-accessibility/
Ver: 0.9.5.0
Last updated: Oct 23, 2015

The MIT License (MIT)

Copyright (c) 2011 Tristan Denyer

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.
*/
$(function () {
    $('#btnAddTape').click(function () {
        var num     = $('.clonedInput1').length, // Checks to see how many "duplicatable" input fields we currently have
            newNum  = new Number(num + 1),      // The numeric ID of the new input field being added, increasing by 1 each time
            newElem = $('#tape' + num).clone().attr('id', 'tape' + newNum).fadeIn('slow'); // create the new element via clone(), and manipulate it's ID using newNum value
    
    /*  This is where we manipulate the name/id values of the input inside the new, cloned element
        Below are examples of what forms elements you can clone, but not the only ones.
        There are 2 basic structures below: one for an H2, and one for form elements.
        To make more, you can copy the one for form elements and simply update the classes for its label and input.
        Keep in mind that the .val() method is what clears the element when it gets cloned. Radio and checkboxes need .val([]) instead of .val('').
    */
        // H2 - section
        newElem.find('.heading-reference').attr('id', 'ID' + newNum + '_reference').attr('name', 'ID' + newNum + '_reference').html('Tape Entry #' + newNum);

    // Insert the new element after the last "duplicatable" input field
        $('#tape' + num).after(newElem);
        $('#ID' + newNum + '_title').focus();

    // Enable the "remove" button. This only shows once you have a duplicated section.
        $('#btnDelTape').attr('disabled', false);

    // Right now you can only add 3 sections, for a total of 4. Change '4' below to the max number of sections you want to allow.
        if (newNum == 4)
        $('#btnAddTape').attr('disabled', true).prop('value', "You've reached the limit"); // value here updates the text in the 'add' button when the limit is reached 
    });

    $('#btnDelTape').click(function () {
    // Confirmation dialog box. Works on all desktop browsers and iPhone.
        if (confirm("Are you sure you wish to remove this section? This cannot be undone."))
            {
                var num = $('.clonedInput1').length;
                // how many "duplicatable" input fields we currently have
                $('#tape' + num).slideUp('slow', function () {$(this).remove();
                // if only one element remains, disable the "remove" button
                    if (num -1 === 1)
                $('#btnDelTape').attr('disabled', true);
                // enable the "add" button
                $('#btnAddTape').attr('disabled', false).prop('value', "add section");});
            }
        return false; // Removes the last section you added
    });
    // Enable the "add" button
    $('#btnAddTape').attr('disabled', false);
    // Disable the "remove" button
    $('#btnDelTape').attr('disabled', true);
});

$(function () {
    $('#btnAddSample').click(function () {
        var num     = $('.clonedInput2').length, // Checks to see how many "duplicatable" input fields we currently have
            newNum  = new Number(num + 1),      // The numeric ID of the new input field being added, increasing by 1 each time
            newElem = $('#sample' + num).clone().attr('id', 'sample' + newNum).fadeIn('slow'); // create the new element via clone(), and manipulate it's ID using newNum value
    
    /*  This is where we manipulate the name/id values of the input inside the new, cloned element
        Below are examples of what forms elements you can clone, but not the only ones.
        There are 2 basic structures below: one for an H2, and one for form elements.
        To make more, you can copy the one for form elements and simply update the classes for its label and input.
        Keep in mind that the .val() method is what clears the element when it gets cloned. Radio and checkboxes need .val([]) instead of .val('').
    */
        // H2 - section
        newElem.find('.heading-reference').attr('id', 'ID' + newNum + '_reference').attr('name', 'ID' + newNum + '_reference').html('Sample Entry #' + newNum);

    // Insert the new element after the last "duplicatable" input field
        $('#sample' + num).after(newElem);
        $('#ID' + newNum + '_title').focus();

    // Enable the "remove" button. This only shows once you have a duplicated section.
        $('#btnDelSample').attr('disabled', false);

    // Right now you can only add 5 sections, for a total of 6. Change '6' below to the max number of sections you want to allow.
        if (newNum == 6)
        $('#btnAddSample').attr('disabled', true).prop('value', "You've reached the limit"); // value here updates the text in the 'add' button when the limit is reached 
    });

    $('#btnDelSample').click(function () {
    // Confirmation dialog box. Works on all desktop browsers and iPhone.
        if (confirm("Are you sure you wish to remove this section? This cannot be undone."))
            {
                var num = $('.clonedInput2').length;
                // how many "duplicatable" input fields we currently have
                $('#sample' + num).slideUp('slow', function () {$(this).remove();
                // if only one element remains, disable the "remove" button
                    if (num -1 === 1)
                $('#btnDelSample').attr('disabled', true);
                // enable the "add" button
                $('#btnAddSample').attr('disabled', false).prop('value', "add section");});
            }
        return false; // Removes the last section you added
    });
    // Enable the "add" button
    $('#btnAddSample').attr('disabled', false);
    // Disable the "remove" button
    $('#btnDelSample').attr('disabled', true);
});

