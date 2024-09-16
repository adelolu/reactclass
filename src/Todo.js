import React, { useState } from "react";

const AddTodo = () => {
  const [title, settitle] = useState("");
  const [content, setcontent] = useState("");
  // edit state

  const [edittitle, setEdittitle] = useState("");
  const [editindex, setEditindex] = useState(0);
  const [editcontent, setEditcontent] = useState("");

  // end edit state
  const [todo, settodo] = useState([]);

  const [login, setLogin] = useState(true);
  const AddTodo = (title, content) => {
    settodo([...todo, { title, content }]);
    settitle("");
    setcontent("");
  };

  const handleDelete = (index) => {
    console.log(index);
    todo.splice(index, 1);
    settodo([...todo]);
  };

  const handleEdit = (ele, index) => {
    console.log(index, ele.title, ele.content);
    setEditindex(index);
    setEdittitle(ele.title);
    setEditcontent(ele.content);
  };
  const saveEdit = () => {
    console.log(edittitle, editcontent, editindex);
    let edited = { title: edittitle, content: editcontent };
    todo[editindex] = edited;
    // console.log(todo);

    settodo([...todo]);
  };
  return (
    <>
      {/* <h1> {condition ? display if it is true :display if it is false}</h1> */}
      <h1>{login ? "Welcome User" : "Log in"}</h1>
      <label htmlFor="" className="formlabel">
        title
      </label>
      <input
        type="text"
        value={title}
        onChange={(e) => settitle(e.target.value)}
        className="formgroup"
      />
      <label htmlFor="" className="">
        content
      </label>
      <input
        type="text"
        value={content}
        onChange={(e) => setcontent(e.target.value)}
        className="formgroup"
      />
      <button
        className="btn btn-primary"
        onClick={() => AddTodo(title, content)}
      >
        Submit
      </button>
      {/* mapping array */}
      {todo.map((ele, index) => (
        <div className="d-flex" key={index}>
          <div className="m-1">{ele.title}</div>
          <div className="m-1">{ele.content}</div>
          <button
            className="btn btn-danger m-1"
            onClick={() => {
              handleDelete(index);
            }}
          >
            Delete
          </button>
          <button
            className="btn btn-warning m-1"
            onClick={() => handleEdit(ele, index)}
            data-bs-toggle="modal"
            data-bs-target="#exampleModal"
          >
            Edit
          </button>
        </div>
      ))}
      {/* end mapping array */}

      {/* modal */}
      <div
        class="modal fade"
        id="exampleModal"
        tabindex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div class="modal-body">
              {/* the form */}
              <label htmlFor="" className="formlabel">
                title
              </label>
              <input
                type="text"
                className="formgroup"
                value={edittitle}
                onChange={(e) => {
                  setEdittitle(e.target.value);
                }}
              />{" "}
              <br /> <br />
              <label htmlFor="" className="">
                content
              </label>
              <input
                type="text"
                className="formgroup"
                value={editcontent}
                onChange={(e) => {
                  setEditcontent(e.target.value);
                }}
              />
            </div>
            {/* end the form */}

            <div class="modal-footer">
              <button
                type="button"
                class="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Close
              </button>
              <button type="button" onClick={saveEdit}>
                Edit
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* end modal */}
    </>
  );
};

export default AddTodo;
