import { useRef } from "react";
import Input from "./Input";
import Modal from "./Modal";

function NewProject({ onAdd, onCancelAddProject }) {
  const modal = useRef();

  const title = useRef();
  const description = useRef();
  const dueDate = useRef();

  function handleSave() {
    const enteredTitle = title.current.value;
    const enteredDesciption = description.current.value;
    const enteredDueDate = dueDate.current.value;

    // Validation ...
    if (
      enteredTitle.trim() === "" ||
      enteredDesciption.trim() === "" ||
      enteredDueDate.trim() === ""
    ) {
      // Show the modeal
      modal.current.open();
      return;
    }

    onAdd({
      title: enteredTitle,
      description: enteredDesciption,
      dueDate: enteredDueDate,
    });
  }

  return (
    <>
      <Modal ref={modal} buttonCaption="Close">
        <h2 className="text-xl font-bold text-stone-700 my-4">Invalid Input</h2>
        <p className="text-stone-600 mb-4">
          Oops ... looks like you forget to enter a value.
        </p>
        <p className="text-stone-600 mb-4">Please check your inputs.</p>
      </Modal>
      <div className="w-[35rem] mt-16">
        <menu className="flex my-4 items-center justify-end gap-4">
          <li>
            <button
              className="text-stone-800 hover:text-stone-950"
              onClick={onCancelAddProject}
            >
              Cancel
            </button>
          </li>
          <li>
            <button
              className="bg-stone-800 hover:bg-stone-950 text-stone-50 px-6 py-2 rounded-md"
              onClick={handleSave}
            >
              Save
            </button>
          </li>
        </menu>

        <div>
          <Input type="text" ref={title} label="Title" />
          <Input ref={description} textarea label="Description" />
          <Input type="date" ref={dueDate} label="Due Date" />
        </div>
      </div>
    </>
  );
}

export default NewProject;
