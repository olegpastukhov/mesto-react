import React from 'react';
import PopupWithForm from "./PopupWithForm";

function EditProfilePopup({ isOpen, onClose }) {

  return (
    <PopupWithForm
      name="edit"
      title="Редактировать профиль"
      isOpen={isOpen}
      onClose={onClose}
    >
      <fieldset className="form__set">
        <input type="text" name="username" id="username" placeholder="Имя" minLength="2" maxLength="40"
          className="form__input" required />
        <span id="username-error" className="form__error-message"></span>
        <input type="text" name="job" id="job" placeholder="Вид деятельности" minLength="2" maxLength="200"
          className="form__input" required />
        <span id="job-error" className="form__error-message"></span>
        <button type="submit" className="form__submit" disabled>Сохранить</button>
      </fieldset>
    </PopupWithForm>
  );
}


export default EditProfilePopup;
