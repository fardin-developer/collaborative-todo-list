import React from 'react'
import { useState, useEffect } from 'react'


function Todo() {

  const [dropdownState, setDropdownState] = useState({});
  const [userData, setUserData] = useState({
    users: [
      {
        name: 'Himanata',
        tasks: ['Task 1', 'Task 2', 'Task 3'],
      },
      {
        name: 'Anis',
        tasks: ['Task 1', 'Task 2', 'Task 3'],
      },
    
    ],
  });
  const [newTask, setNewTask] = useState('');


  const toggleDropdown = (name) => {
    setDropdownState((prevState) => ({
      ...prevState,
      [name]: !prevState[name] || false,
    }));

    // Close other dropdowns when a dropdown is opened
    Object.keys(dropdownState).forEach((dropdown) => {
      if (dropdown !== name) {
        setDropdownState((prevState) => ({
          ...prevState,
          [dropdown]: false,
        }));
      }
    });
  };


  const initialTasks = JSON.parse(localStorage.getItem('tasks')) || [];
  const [tasks, setTasks] = useState(initialTasks);

  const text = "Mere Bhaiyo aur behno.... "

  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks]);

  const deleteTask = (id) => {
    const newArray = tasks.filter((task) => task.id !== id);

    // Update the IDs to be sequential
    newArray.forEach((task, index) => {
      task.id = index + 1;
    });

    setTasks(newArray);
  };


  const addTask = (task) => {
 
          const newId = tasks.length + 1;
          const newTaskObj = { id: newId, text: newTask, important: false };
          setTasks([...tasks, newTaskObj]);
          setNewTask('');


  
  };
  const addTask2 = (task) => {
    if (!newTask) {
      const newId = tasks.length + 1;
      const newTaskObj = { id: newId, text: task, important: false };
      setTasks([...tasks, newTaskObj]);
      setNewTask('');
        }else{
          const newId = tasks.length + 1;
          const newTaskObj = { id: newId, text: newTask, important: false };
          setTasks([...tasks, newTaskObj]);
          setNewTask('');

        }

  
  };

  const handleNewTask = (task) => {
    setNewTask(task);
    addTask2(task);
  };
  


  return (
    <>
      <div className="main">
        <div className="left">
          <input style={{"width":"100%","padding":"20px",border:"3px solid black"}} type="search" name="Search" id="" placeholder='Search here' />
          {userData.users.map((user) => (
            < div key = { user.name } >
            <div className="toggle" onClick={() => toggleDropdown(user.name)}>
              <img src="" alt="" srcSet="https://cdn.siasat.com/wp-content/uploads/2023/11/Himanta-Biswa-Sarma-780x470.jpg" />
              <h3 style={{ textDecoration: 'none','cursor':"pointer"}}>{user.name}</h3>
            </div>
              {
              dropdownState[user.name] && (
                <div className="active">
                  {user.tasks.map((task, index) => (
                    <li style={{'cursor':"pointer"}} value={task} onClick={()=>{handleNewTask(task)}} key={index}>{task}
                    <button>add</button>
                    </li>
                  ))}
                </div>
              )
            }
            </div>
          ))}




      </div>

      <div className="right">
        <div className="profile">
          <div className="img">
            <img src="https://c.ndtvimg.com/2019-12/5hf2349g_pm-modi-solar-eclipse-tweet-_625x300_26_December_19.jpg" alt="" />
          </div>
          <div className="content">
            <h2>My Tasks</h2>
            <p>{text}</p>
            <hr style={{ "marginBottom": "20px", backgroundColor: "black", height: '2px' }} />

          </div>
        </div>
        <div className='addTask' style={{"marginBottom":"2rem"}}>
          <input
            type="text"
            value={newTask}
            onChange={(e) => setNewTask(e.target.value)}
            placeholder="Enter new task"
            required
          />
          <button type='button' onClick={addTask}>Add Task</button>
        </div>

        <div className="task">
          <div className="container">
            {tasks.map((task) => (
              < >

                {/* Task ID */}
                <div className={`box box${task.id}`}>{task.id}</div>
                {/* Task Text */}
                <div className={`box box${task.id}`}>
                  {task.text}
                  <button onClick={() => deleteTask(task.id)}>Delete</button>
                </div>                  {/* Task Importance */}
                <div className={`box box${task.id} ${task.important ? 'important' : ''}`}>
                  {task.important ? 'important' : ''}
                </div>

              </>
            ))}
          </div>
        </div>

     



      </div>




    </div >
    </>
  )
}

export default Todo