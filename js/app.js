const loginForm  = document.getElementById("login-form"); // lay id của html có ten login-form
const rightUsername = "caohuyhoang179"; // taikhoan
const rightPassword = "caohuyhoang17"; // mat khau


loginForm.addEventListener("submit", function(){
    const username = document.getElementById("username").value; //lay id của html có ten là username 
    const password = document.getElementById("password").value;
    if  (username != rightUsername || password != rightPassword){
        alert("login Fail!");
    }else{
        alert("login success!");
        window.location.href = "hoang.html" //khi đăngnhaapj thành công thì chuyển đến trang khác.
    }

    
    alert( "username: " + username +    "\npassword" + password);
    
});





// submit là một sự kiện trong JavaScript được kích hoạt khi người dùng gửi một biểu mẫu HTML (form) bằng cách nhấn nút "Submit" hoặc nhấn phím "Enter" khi đang ở trong một ô nhập liệu. Khi sự kiện này được kích hoạt, trình duyệt sẽ gửi các giá trị trong các ô nhập liệu đến máy chủ
