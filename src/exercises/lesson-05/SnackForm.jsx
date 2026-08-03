import { useState, useEffect } from 'react';
import styles from './SnackForm.module.css';

export default function SnackForm({
  addSnack,
  editingSnack,
  cancelEdit,
  updateSnack,
  className,
}) {
  const isEditing = Boolean(editingSnack);

  //Step 1: Create State Variables
  const [name, setName] = useState('');
  const [rating, setRating] = useState('');
  const [touched, setTouched] = useState({
    name: false,
    rating: false,
  });

  useEffect(() => {
    if (isEditing) {
      setName(editingSnack.name);
      setRating(editingSnack.rating);
    } else {
      setName('');
      setRating('');
    }

    setTouched({
      name: false,
      rating: false,
    });
  }, [editingSnack, isEditing]);

  //Create `validateName()` function that returns `true` if name is not empty after trimming
  function validateName() {
    return name.trim() !== '';
  }

  //Create `validateRating()` function that returns `true` if rating is selected (not empty)
  function validateRating() {
    return rating !== '';
  }

  //Create `getNameError()` function that returns error message if name is invalid AND touched
  function getNameError() {
    return !validateName() && touched.name ? 'Snack name is required' : '';
  }

  //Create `getRatingError()` function that returns error message if rating is invalid AND touched
  function getRatingError() {
    return !validateRating() && touched.rating ? 'Please select a rating' : '';
  }

  const nameError = getNameError();
  const ratingError = getRatingError();

  function handleSubmit(e) {
    e.preventDefault();
    //const formData = new FormData(e.target);
    //const name = formData.get('name');
    //const rating = formData.get('rating');

    //Step 1: Modify handleSubmit Function
    const isNameValid = validateName();
    const isRatingValid = validateRating();

    // Prevent submission if invalid
    if (!isNameValid || !isRatingValid) {
      setTouched({
        name: true,
        rating: true,
      });
      return;
    }

    if (isEditing) {
      updateSnack(editingSnack.id, name, rating);
    } else {
      addSnack(name, rating);

      // e.target.reset();
      setName('');
      setRating('');
    }

    setTouched({
      name: false,
      rating: false,
    });
  }

  return (
    <form
      onSubmit={handleSubmit}
      className={`${styles.form} ${className || ''}`}
    >
      <h3 className={styles['form-title']}>
        {isEditing ? '✏️ Edit Snack' : '➕ Add Snack'}
      </h3>

      <div className={styles['field-container']}>
        <label className={styles['field-label']}>Name:</label>
        <input
          type="text"
          name="name"
          //defaultValue={isEditing ? editingSnack.name : ''}
          //Replace `defaultValue` with `value` prop for both inputs
          value={name}
          //Add `onChange` handlers for both inputs that update the corresponding state variable
          onChange={(e) => setName(e.target.value)}
          //Add `onFocus` handlers for both inputs that mark the field as touched when user clicks/focuses on it
          onFocus={() =>
            setTouched((prev) => ({
              ...prev,
              name: true,
            }))
          }
          //required
          className={styles['field-input']}
          placeholder="Enter snack name"
        />

        {nameError && <div className={styles.error}>{nameError}</div>}
      </div>

      <div className={styles['field-container']}>
        <label className={styles['field-label']}>Rating:</label>
        <input
          type="number"
          name="rating"
          //defaultValue={isEditing ? editingSnack.rating : ''}
          //Replace `defaultValue` with `value` prop for both inputs
          value={rating}
          //Add `onChange` handlers for both inputs that update the corresponding state variable
          onChange={(e) => setRating(e.target.value)}
          //Add `onFocus` handlers for both inputs that mark the field as touched when user clicks/focuses on it
          onFocus={() =>
            setTouched((prev) => ({
              ...prev,
              rating: true,
            }))
          }
          //required
          min="1"
          max="5"
          className={styles['field-input']}
          placeholder="Rate 1-5"
        />

        {ratingError && <div className={styles.error}>{ratingError}</div>}
      </div>

      <div className={styles['button-container']}>
        <button
          type="submit"
          className={`${styles.button} ${styles['submit-button']}`}
        >
          {isEditing ? 'Save' : 'Add'}
        </button>

        {isEditing && (
          <button
            type="button"
            onClick={cancelEdit}
            className={`${styles.button} ${styles['cancel-button']}`}
          >
            Cancel
          </button>
        )}
      </div>
    </form>
  );
}
