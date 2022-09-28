



const todo_list = document.getElementsByClassName("container")[0]


let add_btn = document.getElementsByClassName("addButton")[0]
add_btn.addEventListener("click", () =>{


    let text = document.getElementsByClassName("input")[0].value 
    // console.log(text)
    if(text == ""){
        alert("Please write something inside the box")
    }

    const section = document.createElement("section")
    const section_input = document.createElement("input")
    section_input.classList.add("input_section")
    section_input.setAttribute("readonly" , "readonly")
    section.appendChild(section_input)
    section_input.value = text
    todo_list.appendChild(section)

    const edit_btn = document.createElement("button")
    edit_btn.classList.add("edit")
    edit_btn.innerText = "EDIT"
    const delete_btn = document.createElement("button")
    delete_btn.classList.add("delete_btn")
    delete_btn.innerText  = "DELETE"
   
    section.appendChild(edit_btn)
    section.appendChild(delete_btn)

    // code for edit button
    edit_btn.addEventListener("click" , ()=>{
        if(edit_btn.innerText == "EDIT"){
            section_input.removeAttribute("readonly")
        edit_btn.innerText = "SAVE"
        section_input.focus() // it is not nessesary , this is used to blink the cursor at the end of text....
        }
        else{
            section_input.setAttribute("readonly" , "readonly")
            edit_btn.innerText = "EDIT"
        }
    })

// code for delete button
delete_btn.addEventListener("click" , ()=>{
    let user_choise = confirm("Are You Want To delete")
    if(user_choise){
        todo_list.removeChild(section)
    }
   
})
    document.getElementsByClassName("input")[0].value = ""
})