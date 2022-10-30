import React from 'react';
import PopupWithForm from "./PopupWithForm";

function AddPlacePopup({ isOpen, onClose, onAddPlace, onLoading }) {

  const [title, setTitle] = React.useState('');
  const [link, setLink] = React.useState('');

  function handleSubmit(e) {
    e.preventDefault();

    onAddPlace({
      title,
      link
    });
  };

  function handleTitleChange(e) {
    setTitle(e.target.value);
  }

  function handleLinkChange(e) {
    setLink(e.target.value);
  }

  return (
    <PopupWithForm
      name="add-card"
      title="Новое место"
      isOpen={isOpen}
      onClose={onClose}
      onSubmit={handleSubmit}
    >
      <fieldset className="form__set">
        <input type="text" name="title" id="title" placeholder="Название" minLength="2" maxLength="30"
          className="form__input" onChange={handleTitleChange} required />
        <span id="title-error" className="form__error-message"></span>
        <input type="url" name="link" id="link" placeholder="Ссылка на картинку"
          className="form__input" onChange={handleLinkChange} required />
        <span id="link-error" className="form__error-message"></span>
        <button type="submit" className="form__submit">{onLoading ? "Сохранение..." : "Создать"}</button>
      </fieldset>

    </PopupWithForm>
  );
}


export default AddPlacePopup;
