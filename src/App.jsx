/**
 * My Todo App
 *
 * This React application manages a list of todo items. Users can add new items
 * with due dates and delete existing items. The app displays the list of items
 * along with a welcome message if no items are present.
 *
 * Components:
 * - `AppName`: Renders the app name.
 * - `AddTodo`: Allows users to input new todo items.
 * - `TodoItems`: Displays the list of todo items.
 * - `TodoItem`: Structure of the list.
 * - `WelcomeMessage`: Message when no task remaining.
 * - `WelcomeMessage`: Shown when there are no items in the list.
 *
 * Styling:
 * - Bootstrap CSS and CSS Modules are used for styling.
 *
 * @version 1.0.0
 * @author Mohammed Anas
 */
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import AddTodo from "./components/AddTodo";
import AppName from "./components/AppName";
import { TodoItems } from "./components/TodoItems";
import { useState } from "react";
import WelcomeMessage from "./components/WelcomeMessage";

export default function App() {
  const [todoItems, setTodoItems] = useState([]);

  const handleNewItem = (itemName, itemDueDate) => {
    console.log(`New Item Added: ${itemName} Date:${itemDueDate}`);
    const newTodoItems = [
      ...todoItems,
      { name: itemName, dueDate: itemDueDate },
    ];
    setTodoItems(newTodoItems);
  };

  const handleDeleteItem = (todoItemName) => {
    const newTodoItems = todoItems.filter((item) => item.name !== todoItemName);
    setTodoItems(newTodoItems);
  };
  return (
    // makes the things inside a container in the center
    <center className="todo-container">
      <AppName />
      <AddTodo onNewItem={handleNewItem} />
      {todoItems.length === 0 && <WelcomeMessage />}
      <TodoItems todoItems={todoItems} onDeleteClick={handleDeleteItem} />
    </center>
  );
}
