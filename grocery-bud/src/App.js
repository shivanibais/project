import React, { useState, useEffect } from "react";
import { FaEdit, FaTrash } from "react-icons/fa";
import Alert from "./Alert";

const getLocalStorage = () => {
  // Get items from local storage
  let list = localStorage.getItem("items");
  // If list exists, convert to javascript object and set that to our items
  if (list) {
    return JSON.parse(list);
  } else {
    return [];
  }
};

function App() {
  const [item, setItem] = useState({ itemName: "" });
  const [items, setItems] = useState(getLocalStorage());
  const [isEditing, setIsEditing] = useState(false);
  const [editID, setEditID] = useState(null);
  const [alert, setAlert] = useState({
    status: false,
    msg: "",
    type: "",
  });

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    // console.log(name, value);
    setItem({ ...item, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (item.itemName === "") {
      showAlert(true, "danger", "Please enter a value");
    } else if (item.itemName && isEditing) {
      setItems(
        items.map((i) => {
          if (i.id === editID) {
            return { ...i, itemName: item.itemName };
          }
          return i;
        })
      );

      // Make everything back to normal
      setItem({ itemName: "" });
      setEditID(null);
      setIsEditing(false);
      showAlert(true, "success", "Item updated successfully");
    } else {
      const newItem = { ...item, id: new Date().getTime().toString() };
      setItems([...items, newItem]);
      setItem({ itemName: "" });
      showAlert(true, "success", "Item added to the list");
      // console.log(newItem);
    }
  };

  const showAlert = (status = false, type = "", msg = "") => {
    setAlert({ status, type, msg });
  };

  const removeItem = (id) => {
    const filteredItems = items.filter((i) => i.id !== id);
    setItems(filteredItems);
    showAlert(true, "danger", "Item removed");
  };

  const removeItems = () => {
    setItems([]);
    showAlert(true, "danger", "Empty List");
  };

  const editItem = (id) => {
    const singleItem = items.find((i) => i.id === id);
    setIsEditing(true);
    setEditID(singleItem.id);
    setItem({ itemName: singleItem.itemName });
  };

  // Using local storage to maintain state of our items - set the items
  // stringify serializes a JavaScript object into a JSON string
  useEffect(() => {
    localStorage.setItem("items", JSON.stringify(items));
  }, [items]);

  return (
    <section className="container">
      {alert.status && (
        <Alert {...alert} removeAlert={showAlert} items={items} />
      )}
      <h2 id="heading">Grocery Bud</h2>
      <form className="form-items" onSubmit={handleSubmit}>
        <input
          type="text"
          name="itemName"
          value={item.itemName}
          id="text"
          placeholder="e.g. eggs"
          onChange={handleChange}
        />
        <button type="submit" id="submit-btn">
          {isEditing ? "Edit" : "Submit"}
        </button>
      </form>

      <section className="list-items">
        {items.map((singleItem, index) => {
          return (
            <div className="list-item">
              <p key={index} className="single-item">
                {singleItem.itemName}
              </p>
              <div className="icons">
                <button
                  className="edit-btn"
                  onClick={() => editItem(singleItem.id)}
                >
                  <FaEdit className="edit-icon" />
                </button>
                <button
                  className="trash-btn"
                  onClick={() => removeItem(singleItem.id)}
                >
                  <FaTrash className="trash-icon" />
                </button>
              </div>
            </div>
          );
        })}
      </section>

      {items.length > 0 ? (
        <button className="clear-btn" onClick={() => removeItems()}>
          Clear items
        </button>
      ) : (
        ""
      )}
    </section>
  );
}

export default App;
