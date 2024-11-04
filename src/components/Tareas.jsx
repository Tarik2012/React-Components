import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";

const Tareas = () => {
    const [task, setTask] = useState('')
    const [tasks, setTasks] = useState([])

    // funcion para agregar nuevas tareas 

    const addTask = () => {
        if (task.trim()) {
            setTasks([...tasks, { text: task, completed: false }]);
            setTask('')
        }
    }

    const deleteTask = (index) => {
        const newTasks = tasks.filter((_, i) => i !== index);
        setTasks(newTasks);
    };

    const toggleComplete = (index) => {
        const newTasks = tasks.map((task, i) =>
            i === index ? { ...task, completed: !task.completed } : task
        );
        setTasks(newTasks);
    };


    return (
        <>
            <Header />
            <h1>Lista de tareas</h1>
            <>
                <input
                    type="text"
                    value={task}
                    onChange={(e) => setTask(e.target.value)}
                    placeholder="Escribe Tu Tarea"
                />
                <button onClick={addTask}>Agregar Tarea</button>
            </>
            <ul>
                {tasks.map((task, index) => {
                    return (
                        <li key={index}>
                            <span style={{ marginRight: "10px" }}>{task.text}</span>

                            <button
                                onClick={() => toggleComplete(index)}
                                style={{
                                    backgroundColor: task.completed ? "green" : "red",
                                    color: "white",
                                    padding: "8px 12px",
                                    border: "none",
                                    borderRadius: "5px",
                                    cursor: "pointer"
                                }}
                            >
                                {task.completed ? "Completada" : "No completada"}
                            </button>



                            <button onClick={() => deleteTask(index)}>Eliminar</button>
                        </li>
                    );
                })}
            </ul>
            <Footer />
        </>
    );
}

export default Tareas;

// import React, { useState } from "react";
// import Header from "./Header";
// import Footer from "./Footer";

// const Tareas = () => {
//     const [task, setTask] = useState('')
//     const [tasks, setTasks] = useState([])

//     // Función para agregar nuevas tareas
//     const addTask = () => {
//         if (task.trim()) {
//             setTasks([...tasks, { text: task, completed: false }]);
//             setTask('') // Resetea el input después de agregar la tarea
//         }
//     };

//     // Función para eliminar una tarea
//     const deleteTask = (index) => {
//         const newTasks = tasks.filter((_, i) => i !== index);
//         setTasks(newTasks);
//     };

//     // Función para marcar una tarea como completada
//     const toggleComplete = (index) => {
//         const newTasks = tasks.map((task, i) =>
//             i === index ? { ...task, completed: !task.completed } : task
//         );
//         setTasks(newTasks);
//     };

//     return (
//         <>
//             <Header />
//             <h1>Lista de tareas</h1>
//             <>
//                 <input
//                     type="text" // Corrección de "test" a "text"
//                     value={task}
//                     onChange={(e) => setTask(e.target.value)} // Corrección del evento onChange
//                     placeholder="Escribe Tu Tarea"
//                 />
//                 <button onClick={addTask}>Agregar Tarea</button>
//             </>

//             <ul>
//                 {tasks.map((task, index) => (
//                     <li key={index}>
//                         <span
//                             style={{
//                                 textDecoration: task.completed ? "line-through" : "none",
//                             }}
//                         >
//                             {task.text}
//                         </span>
//                         <button onClick={() => toggleComplete(index)}>
//                             {task.completed ? "Desmarcar" : "Completar"}
//                         </button>
//                         <button onClick={() => deleteTask(index)}>Eliminar</button>
//                     </li>
//                 ))}
//             </ul>

//             <Footer />
//         </>
//     );
// }

// export default Tareas;
