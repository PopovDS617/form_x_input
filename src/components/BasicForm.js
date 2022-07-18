import React from "react";

import useInput from "../hooks/use-input";

const BasicForm = (props) => {
  const {
    value: enteredName,
    isValid: NameIsValid,
    hasError: nameInputHasError,
    valueChangeHandler: nameChangeHandler,
    inputBlurHandler: nameBlurHandler,
    reset: nameReset,
  } = useInput((value) => {
    return value.trim() !== "";
  });

  const nameClasses = nameInputHasError
    ? "form-control invalid"
    : "form-control ";

  const {
    value: enteredLastName,
    isValid: LastnameIsValid,
    hasError: lastNameInputHasError,
    valueChangeHandler: lastNameChangeHandler,
    inputBlurHandler: lastNameBlurHandler,
    reset: lastNameReset,
  } = useInput((value) => {
    return value.trim() !== "";
  });

  const lastNameClasses = lastNameInputHasError
    ? "form-control invalid"
    : "form-control ";

  const {
    value: enteredEmail,
    isValid: emailIsValid,
    hasError: emailInputHasError,
    valueChangeHandler: emailChangeHandler,
    inputBlurHandler: emailBlurHandler,
    reset: emailReset,
  } = useInput((value) => {
    return value.trim().includes("@");
  });

  const emailClasses = emailInputHasError
    ? "form-control invalid"
    : "form-control ";

  let formIsValid;

  if (!enteredName || !enteredLastName || !enteredEmail) {
    formIsValid = false;
  } else {
    formIsValid = true;
  }

  const submitHandler = (event) => {
    event.preventDefault();

    if (!enteredName || !enteredLastName || !enteredEmail) {
      return;
    }

    nameReset();
    lastNameReset();
    emailReset();
    formIsValid = null;
  };

  return (
    <form onSubmit={submitHandler}>
      <div>
        <div className={nameClasses}>
          <label htmlFor="name">First Name</label>
          <input
            type="text"
            id="name"
            onChange={nameChangeHandler}
            onBlur={nameBlurHandler}
            value={enteredName}
          />
          {nameInputHasError && <p>First Name must not be empty</p>}
        </div>
        <div className={lastNameClasses}>
          <label htmlFor="name">Last Name</label>
          <input
            type="text"
            id="name"
            onChange={lastNameChangeHandler}
            onBlur={lastNameBlurHandler}
            value={enteredLastName}
          />
          {lastNameInputHasError && <p>Last Name must not be empty</p>}
        </div>
      </div>
      <div className={emailClasses}>
        <label htmlFor="name">E-Mail Address</label>
        <input
          type="text"
          id="name"
          onChange={emailChangeHandler}
          onBlur={emailBlurHandler}
          value={enteredEmail}
        />
        {emailInputHasError && (
          <p>Email must not be empty and should include @</p>
        )}
      </div>
      <div className="form-actions">
        <button disabled={!formIsValid}>Submit</button>
      </div>
    </form>
  );
};

export default BasicForm;
