var $ = function (id) {
    return document.getElementById(id);
}
var CalculateMPG = function () {
    var miles = $("miles_driven").value;
    var gallons = $("gallons_used").value;
    var isValid = true;

    if(miles <= 0)
    {
        $("miles_error").firstChild.nodeValue = "This value cannot be less the 1";
        isValid = false;
    }
    else
    {
        $("miles_error").firstChild.nodeValue = "";
    }

    if (gallons <= 0) {
        $("gallons_error").firstChild.nodeValue = "This value cannot be less the 1";
        isValid = false;
    }
    else {
        $("gallons_error").firstChild.nodeValue = "";
    }

    if(isValid)
    {
        $("miles_gallons_form").submit();
        alert("Your miles per gallon is " + (miles / gallons));
    }

}

window.onload = function () {
    $("calculate").onclick = CalculateMPG;
    $("miles_driven").focus();
}