const firebaseConfig = {
    apiKey: "AIzaSyCx3RlgP1v7ZpSHh9Y9w1gJXxUVxCKTR_0",
    authDomain: "mwfdatabase.firebaseapp.com",
    databaseURL: "https://todo-app-24437-default-rtdb.firebaseio.com/",
    projectId: "todo-app-24437",
    storageBucket: "todo-app-24437.appspot.com",
    messagingSenderId: "528131022246",
    appId: "1:528131022246:web:e0cad20ad7eea3a38f0367"
};
const app = firebase.initializeApp(firebaseConfig);

console.log(app.database());

var database = app.database()

var listContainer = document.getElementById("listContainer")

function addTask() {
    var input = document.getElementById("input")

    if (input.value.length > 2) {

        var key = database.ref("/").push().key

        var todoObj = {
            key : key,
            todo : input.value
        }

        database.ref("todos").child(key).set(todoObj)
        
        var li = document.createElement("li")
        var span = document.createElement("span")
        var liTxt = document.createTextNode(todoObj.todo)
        span.appendChild(liTxt)
        li.appendChild(span)
        
        var divBtn = document.createElement("div")
        var editBtn = document.createElement("button")
        var editBtnTxt = document.createTextNode("Edit this Task")
        editBtn.appendChild(editBtnTxt)
        editBtn.setAttribute("onclick", "editTask(this)")
        editBtn.className = "btn"
        divBtn.appendChild(editBtn)
        
        var delBtn = document.createElement("button")
        var delBtnTxt = document.createTextNode("Delete This Task")
        delBtn.appendChild(delBtnTxt)
        delBtn.setAttribute("onclick", "delTask(this)")
        delBtn.className = "btn red"
        divBtn.appendChild(delBtn)
        li.appendChild(divBtn)

        listContainer.appendChild(li)
        input.value = ""

    }
    else {
        alert("Empty Task cannot be ADDED !")
    }
}

function deleteAll() {
    listContainer.innerHTML = ""
    app.database().ref("todos").remove()
}

function editTask(element) {
    var editValue = prompt("Edit Value", element.parentNode.previousSibling.firstChild.nodeValue)
    element.parentNode.previousSibling.firstChild.nodeValue = editValue
}

function delTask(element) {
    element.parentNode.parentNode.remove()
}
