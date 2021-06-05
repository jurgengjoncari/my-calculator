function calculate() {
    var x, y;
    var operator = "+";
    var result;

    function get_x() {
        x = document.getElementById("x").value;
        return Number(x);
    }

    function get_y() {
        y = document.getElementById("y").value;
        return Number(y);
    }

    function get_operator() {
        operator = document.getElementById("operator").value;
        return operator;
    }

    function set_result() {
        document.getElementById("result").value = result;
    }

    function do_calculation() {
        var x = get_x();
        var y = get_y();

        if (get_operator() == "+") {
            result = x + y;
        } else if (get_operator() == "-") {
            result = x - y;
        } else if (get_operator() == "*") {
            result = x * y;
        } else {
            result = x / y;
        }

        set_result();
    }

    do_calculation()
}