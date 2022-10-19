import React from 'react';
import api from '../utils/api';
import preloaderPath from '../images/preloader.gif';
import Card from './Card';

function Main({ onEditAvatar, onEditProfile, onAddPlace, onCardClick }) {

  const [userName, setUserName] = React.useState('');
  const [userDescription, setUserDescription] = React.useState('');
  const [userAvatar, setUserAvatar] = React.useState(preloaderPath);
  const [cards, setCards] = React.useState([]);

  React.useEffect(() => {
    Promise.all([api.getInitialCards(), api.getUserInfo()])
      .then(([initialCards, userData]) => {
        setUserName(userData.name);
        setUserDescription(userData.about);
        setUserAvatar(userData.avatar);
        setCards(initialCards.reverse());
      })
      .catch((err) => {
        console.log(`Ошибка: ${err}`);
      });
  }, []);

  return (
    <main className="content">
      <section className="profile page__profile">
        <div className="profile__card">
          <img className="profile__avatar" src={userAvatar} alt="Аватар пользователя" />
          <button className="profile__avatar-button" onClick={onEditAvatar} aria-label="Обновить аватар" />
          <div className="profile__info">
            <h1 className="profile__title">{userName}</h1>
            <button type="button" className="profile__edit-button" onClick={onEditProfile} aria-label="Редактировать профиль" />
            <p className="profile__description">{userDescription}</p>
          </div>
        </div>
        <button type="button" className="profile__add-button" onClick={onAddPlace} aria-label="Добавить карточку" />
      </section>
      <section aria-label="Карточки" className="elements">
        {cards.map((card) => {
          return (
            <Card
              key={card._id}
              card={card}
              onCardClick={onCardClick}
            />
          );
        })}
      </section>
    </main>
  )
}


export default Main;
