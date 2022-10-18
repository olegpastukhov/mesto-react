import React from 'react';
import PopupWithForm from "./PopupWithForm";

function AddPlacePopup({ isOpen, onClose }) {
  return (
    <PopupWithForm
      name="add-card"
      title="Новое место"
      isOpen={isOpen}
      onClose={onClose}
    >
      <fieldset className="form__set">
        <input type="text" name="title" id="title" placeholder="Название" minLength="2" maxLength="30"
          className="form__input" required />
        <span id="title-error" className="form__error-message"></span>
        <input type="url" name="link" id="link" placeholder="Ссылка на картинку" className="form__input" required />
        <span id="link-error" className="form__error-message"></span>
        <button type="submit" className="form__submit" disabled>Создать</button>
      </fieldset>

    </PopupWithForm>
  );
}


export default AddPlacePopup;
