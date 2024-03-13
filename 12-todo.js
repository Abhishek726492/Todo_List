let todoList= [];
todoList=JSON.parse(localStorage.getItem('data'))||[];
let html='';
updateHTML();
renderHTML();

    document.querySelector('.js-add-btn').addEventListener('click',()=>takeInput());

    function takeInput()
    {
      let todoValue='';
      let todoDate='';
      todoValue=document.querySelector('.js-input').value;
      todoDate=document.querySelector('.js-input-date').value;
      let todoObj={
        name: todoValue,
        date: todoDate
      };
      todoList.push(todoObj);
      document.querySelector('.js-input').value='';
      document.querySelector('.js-input-date').value='';
      updateHTML();
    }
    function updateHTML()
    {
      html='';

      todoList.forEach((value,index)=>
      {
        html+=`
          <div class="todo-info">
            <p class="todoName">
            ${todoList[index].name}
            </p>
            <p>${todoList[index].date}</p>
            <button class="delete-btn">Delete</button>
          </div>`;
      });
      localStorage.setItem('data',JSON.stringify(todoList));
      renderHTML();

      deleteBtn();
    }

    function deleteBtn() {
      document.querySelectorAll('.delete-btn').forEach((deleteButton,index)=>
      {
        deleteButton.addEventListener('click',()=>
        {
          if(todoList.length===1)
          todoList.splice(0,1);
          else
          todoList.splice(index,1);
          updateHTML();
        });
      });
    }

    function renderHTML()
    {
      document.querySelector('.js-div').innerHTML=html;
    }
    
    document.querySelector('.js-input').addEventListener('keydown',()=>checkEnter(event.key));

    document.querySelector('.js-input-date').addEventListener('keydown',()=>checkEnter(event.key));

    function checkEnter(eventKey)
    {
      if(eventKey==='Enter')
      takeInput();
    }

    if(document.querySelector('.js-div').innerHTML!==null)
    deleteBtn();