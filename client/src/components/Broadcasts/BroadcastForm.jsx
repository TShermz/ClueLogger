import classes from "./BroadcastForm.module.css";
import { useState } from "react";
import BroadcastImagePicker from './BroadcastImagePicker';

export default function BroadcastForm({inputData, onSubmit, children}) {
  const [selectedImage, setSelectedImage] = useState(inputData?.image);

  async function handleSubmit(e) {
    e.preventDefault();

    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData);

    console.log(data);

    // errorData = await onSubmit(data, mode);
    //exit modal
  }

  return (
    <>
      <form onSubmit={handleSubmit} className={classes.form}>
        {/* Casket images to select */}
        <p>
          <label htmlFor="tier">Clue Tier</label>
          <input id="tier" type="text" name="tier" required />
        </p>
        {/* Broadcast images based on tier selected */}
        <BroadcastImagePicker images={broadcasts} onSelect={}/>
        <p>
          <label htmlFor="tier">Clue Count</label>
          <input id="tier" type="text" name="tier" required />
        </p>
        <p>
          <label htmlFor="dateReceived">Clue Tier</label>
          <input id="dateReceived" type="date" name="dateReceived" required />
        </p>
        <button
          className={classes.submitButton}
          // disabled={isSubmitting}
          type="submit"
        >
          {/* {isSubmitting ? "Submitting..." : "Login"} */}
        </button>
      </form>
    </>
  );
}
