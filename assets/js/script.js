const addBtnEl = document.getElementById("addBtn")
const userListEl = document.getElementById("userlist")
const addToListEl = document.getElementById("addToList")
let username = ["admin01","admin02","admin03"]
document.title = "list"

// console.log(username)
// username.push("admin04")
// username.push("admin05")
// console.log(username)
// username.pop()
// console.log(username)
// username.unshift("admin00")
// console.log(username)
addBtnEl.addEventListener("click",function(){
    username = []
    let newinput = addToListEl.value
    username.push(newinput)

    for(let i in username){
        userListEl.innerHTML += `<li style="margin-left:20px">${username[i]}</li>`

    }
    addToListEl.value = ''
})
