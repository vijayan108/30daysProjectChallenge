const todoInput = document.getElementById("todoInput");
const todoList = document.getElementById("todoList");
const addBtn = document.getElementById("addBtn");



addBtn.addEventListener("click", function () {
    const todoInputValue = todoInput.value;
    if (todoInputValue) {
        const li = document.createElement("li");
        li.innerText = todoInputValue;
        const removeTodoButton = document.createElement('button');
        const i = document.createElement('i');
        removeTodoButton.classList.add('remove-todo');


        i.classList.add('fas','fa-trash-alt');
        removeTodoButton.appendChild(i);
        
        li.appendChild(removeTodoButton);
        todoList.appendChild(li);
        
        todoInput.value = "";
        const removeButtons = document.querySelectorAll('.remove-todo');

    removeButtons.forEach(button => {
    button.addEventListener('click', () => {
      const listItem = button.parentNode;
      console.log(listItem);
      todoList.removeChild(listItem);
    });
  });
    }
}   )

