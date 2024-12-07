let ok = document.getElementById("ok");
let err = document.getElementById("err");
let inv = document.getElementById("invalid");
let box = document.getElementById("toastbox")

ok.addEventListener("click", () => {
    let toast = document.createElement("div");
    toast.classList.add("oktoast");
    toast.innerHTML = "Success";
    box.appendChild(toast);
    
    setTimeout(() => {
        toast.remove();
    }, 5000);
})

err.addEventListener("click", () => {
    let toast = document.createElement("div");
    toast.classList.add("errtoast");
    toast.innerHTML = "Error";
    box.appendChild(toast);
    
    setTimeout(() => {
        toast.remove();
    }, 5000);
})

inv.addEventListener("click", () => {
    let toast = document.createElement("div");
    toast.classList.add("invtoast");
    toast.innerHTML = "Invalid";
    box.appendChild(toast);
    
    setTimeout(() => {
        toast.remove();
    }, 5000);
})

