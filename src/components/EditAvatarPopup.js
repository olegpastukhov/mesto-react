import React from 'react';
import PopupWithForm from "./PopupWithForm";

function EditAvatarPopup({ isOpen, onClose }) {

  return (
    <PopupWithForm
      name="avatar"
      title="Обновить аватар"
      isOpen={isOpen}
      onClose={onClose}
    >
      <fieldset className="form__set">
        <input type="url" name="avatar" id="avatar" placeholder="Ссылка на картинку" className="form__input" required />
        <span id="avatar-error" className="form__error-message"></span>
        <button type="submit" className="form__submit" disabled>Сохранить</button>
      </fieldset>

    </PopupWithForm>
  );
}


export default EditAvatarPopup;
