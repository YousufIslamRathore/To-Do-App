var listContainer = document.getElementById("listContainer")

function addTask() {
    var input = document.getElementById("input")

    if (input.value.length > 0) {
        
        var li = document.createElement("li")
        var liTxt = document.createTextNode(input.value)
        li.appendChild(liTxt)
        
        var editBtn = document.createElement("button")
        var editBtnTxt = document.createTextNode("Edit this Task")
        editBtn.appendChild(editBtnTxt)
        editBtn.setAttribute("onclick", "editTask(this)")
        editBtn.className = "btn"
        li.appendChild(editBtn)
        
        var delBtn = document.createElement("button")
        var delBtnTxt = document.createTextNode("Delete This Task")
        delBtn.appendChild(delBtnTxt)
        delBtn.setAttribute("onclick", "delTask(this)")
        delBtn.className = "btn"
        li.appendChild(delBtn)

        listContainer.appendChild(li)
        input.value = ""
    }
    else {
        alert("Empty Task cannot be ADDED !")
    }
}

function deleteAll() {
    listContainer.innerHTML = ""
}

function editTask(element) {
    var editValue = prompt("Edit Value", element.parentNode.firstChild.nodeValue)
    element.parentNode.firstChild.nodeValue = editValue
}

function delTask(element) {
    element.parentNode.remove()
}
