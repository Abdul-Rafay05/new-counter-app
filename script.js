let all_btn1 = document.getElementById("all_btn1");
let all_btn2 = document.getElementById("all_btn2");
let all_btn3 = document.getElementById("all_btn3");
let input_value = document.getElementById("input_data");
let sub_inner_btn = document.getElementById("sub_inner_btn");
let counter = 0;
// input_value.style.color = "gray"

all_btn1.addEventListener("click", () => {
    if (counter >= 0) {
        input_value.style.color = "green"
        counter++;
        input_value.value = counter;
    }
})
all_btn3.addEventListener("click", () => {
    if (counter > 0) {
        counter--;
        input_value.value = counter;
        input_value.style.color = "red"
    } else if (counter > 0 && counter <= 10) {
        counter--;
        input_value.value = counter;
        input_value.style.color = "gray"
    }
})
all_btn2.addEventListener("click", () => {
    counter *= 0;
    input_value.value = counter;
    input_value.style.color = "black"

})

let subcount = 0
sub_inner_btn.addEventListener('click', () => {
    if (subcount == "0") {
        sub_inner_btn.style.transform = ` translateX(2.2rem)`;
        input_value.value = counter;
        sub_inner_btn.innerHTML = "OFF"
        sub_inner_btn.style.backgroundColor = "white"
        sub_inner_btn.style.color = "black"
        subcount = 1;
    } else {
        sub_inner_btn.style.transform = ` translateX(0)`;
        document.body.style.backgroundColor = "white"
        input_value.value = "";
        subcount = 0;
        sub_inner_btn.innerHTML = "ON"
        sub_inner_btn.style.backgroundColor = "green"
        sub_inner_btn.style.color = "white"
    }

})