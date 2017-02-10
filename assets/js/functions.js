// sort csr list
var my_options = $("#csr_name option");
my_options.sort(function(a,b) {
    if (a.text > b.text) return 1;
    else if (a.text < b.text) return -1;
    else return 0
})
$("#csr_name").empty().append(my_options);
// run chosen plugin
$("#csr_name").chosen({no_results_text: "No results matched"});

//spinner appearance
$(function() {
    $('.package_type').spinner({
        min: 0,
        max: 20
    });
});

//checkbock appearance
$('.check').click(function (e) {
if ($(e.target).is('input')) {
    $(this).find('.glyphicon').toggleClass('glyphicon-check glyphicon-unchecked');
    console.log( $(this).find('input').is(':checked') );
}
});

/*
Block multiple form submission script- By JavaScriptKit.com
Visit http://www.javascriptkit.com for this script and more
This notice must stay intact for use
*/

//Enter error message to display if submit button has been pressed multiple times below.
//Delete below line if you don't want a message displayed:

var formerrormsg="You\'ve attempted to submit the form multiple times.\n Please reload page if you need to resubmit form."

function checksubmit(submitbtn){
submitbtn.form.submit()
checksubmit=blocksubmit
return false
}

function blocksubmit(){
if (typeof formerrormsg!="undefined")
alert(formerrormsg)
return false
}