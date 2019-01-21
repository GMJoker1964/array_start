var x = 0;
var array = Array();

function add_element_to_Array() {
    array[x] = document.getElementById("txtValue").value;
    alert("Element: " + array[x] + " Added at index " + x);
    x++;
    document.getElementById("txtValue ").value = " ";
}

function display_Array() {
    var e = "<hr/>";
    for (var i = 0; i < array.length; i++) {
        e += "Element " + i + " = " + array[i] + "<br/>";
    }
    document.getElementById("result").innerHTML = e;
}