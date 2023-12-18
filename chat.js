const socket = io("http://127.0.0.1:8000/chat");
let btn = document.getElementById("btn");
let txtmsg = document.getElementById("txtmsg");

socket.on("connect",()=>{
    console.log(socket.connected)

    btn.addEventListener("click", () => {
        socket.emit("hello", txtmsg.value)
        txtmsg.value = " ";
})
})


socket.on("disconnect", (reason) => {
    if (reason === "io server disconnect") {
        socket.connect();
    } else if (reason === "io client disconnect") {
        socket.connect();
    }
})

socket.on("connect_error", () => {
    socket.connect();
})

socket.on("take", (msg) => {
    console.log(msg);
})