import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { FaPlusCircle } from 'react-icons/fa';

const InputTodo = ({ addTodoProps }) => {
  const [inputText, setInputText] = useState({
    title: '',
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (inputText.title.trim()) {
      addTodoProps(inputText.title);
      setInputText({
        title: '',
      });
    } else {
      alert('Please write a Todo'); // eslint-disable-line no-alert
    }
  };

  const onChange = (e) => {
    setInputText({
      ...inputText,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <form onSubmit={handleSubmit} className="form-container">
      <input
        type="text"
        className="input-text"
        placeholder="Add todo..."
        value={inputText.title}
        name="title"
        onChange={onChange}
      />
      <button type="submit" className="input-submit">
        <FaPlusCircle color="darkcyan" size="20px" className="submit-icon" />
      </button>
    </form>
  );
};

export default InputTodo;

InputTodo.propTypes = {
  addTodoProps: PropTypes.func.isRequired,
};
