let taskList = [];
let selectList =[];



const handleOnSubmit = (e) => {
    const frmData = new FormData(e);
     const task = frmData.get("task");
     const hr = frmData.get("hr");
     const title = frmData.get("title");
     const referee = frmData.get("referee");

const obj ={
    task,
    hr,
    title,
    referee,
    type: "",
};

taskList.push(obj);
display();

};

const display = () => {
    let str = "";
  
    taskList.map((item, i) => {
      str +=
        item.type === ""
          ? `
          <tr>
          <th scope="row">${i + 1}</th>
          <td>${item.task}</td>
          <td>${item.hr}</td>
          <td>${item.title}</td>
          <td>${item.referee}</td>
          <td>
            <button onclick ="deleteItem(${i})" class="btn btn-danger">
              <i class="fa-solid fa-trash"></i>
            </button>
            <button onclick ="seltectedItem(${i})" class="btn btn-success">
            <i class="fa-solid fa-check"></i>
            </button>
            
          </td>
        </tr>`
          : "";
    });
  
    document.getElementById("task-list").innerHTML=str;
  };



  const displaySlectForm = () => {
    let str = "";
  
    selectList.map((item, i) => {
      str +=
        item.type === ""
          ? `
          <tr>
          <th scope="row">${i + 1}</th>
          <td>${item.task}</td>
          <td>${item.hr}</td>
          <td>${item.title}</td>
          <td>${item.referee}</td>
          <td>
            <button onclick ="deleteItem(${i})" class="btn btn-danger">
              <i class="fa-solid fa-trash"></i>
            </button>
            <button onclick ="seltectedItem(${i})"
             class="btn btn-success">
            <i class="fa-solid fa-check"></i>
            </button>
            
          </td>
        </tr>`
          : "";
    });
  
    document.getElementById("select-form").innerHTML=str;
  };
//  
  
  const deleteItem = (i) => {
    if (window.confirm("Are you sure you want to delete this?")) {
      taskList.splice(i, 1);
      display();
  
    }
};


const seltectedItem = (i) => {
  const itm = taskList.splice(i, 1);
  selectList.push(itm[0]);

  display();
  displaySlectForm();
};



const handleOnSearch = (e) => {
  console.log(e.value);
  const str = e.value;

  const filteredUser = taskList.filter((item) => {
    const userName = task;

    return userName.task;
  });

  console.log(filteredUser);
};