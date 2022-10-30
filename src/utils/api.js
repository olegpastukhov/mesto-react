class Api {
  constructor(config) {
    this._url = config.url;
    this._headers = config.headers;
  };

  getInitialCards() {
    return fetch(`${this._url}/cards`, {
      method: 'GET',
      headers: this._headers
    })
      .then(this._parseResponse);
  };

  getUserInfo() {
    return fetch(`${this._url}/users/me`, {
      headers: this._headers
    })
      .then(this._parseResponse);
  };

  _parseResponse(res) {
    if (res.ok) {
      return res.json();
    }
    return Promise.reject(`Ошибка: ${res.status}`)
  };

  addCard(data) {
    return fetch(`${this._url}/cards`, {
      method: 'POST',
      headers: this._headers,
      body: JSON.stringify({
        name: data.title,
        link: data.link
      })
    })
      .then(res => this._parseResponse(res));
  };

  deleteCard(cardId) {
    return fetch(`${this._url}/cards/${cardId}`, {
      method: 'DELETE',
      headers: this._headers
    })
      .then(res => this._parseResponse(res));
  };

  changeLikeCardStatus(cardId, isLiked) {
    return fetch(`${this._url}/cards/${cardId}/likes`, {
      method: `${!isLiked ? 'DELETE' : 'PUT'}`,
      headers: this._headers
    })
      .then(res => this._parseResponse(res));
  };

  setUserInfo(data) {
    return fetch(`${this._url}/users/me`, {
      method: 'PATCH',
      headers: this._headers,
      body: JSON.stringify({
        name: data.username,
        about: data.job
      })
    })
      .then(res => this._parseResponse(res));
  }

  setAvatar(data) {
    return fetch(`${this._url}/users/me/avatar`, {
      method: 'PATCH',
      headers: this._headers,
      body: JSON.stringify(data)
    })
      .then(res => this._parseResponse(res));
  }
}

const api = new Api({
  url: "https://mesto.nomoreparties.co/v1/cohort-50",
  headers: {
    'Content-type': 'application/json',
    authorization: 'b1b1fe0a-a2f0-4479-8407-51b1f97bcc74'
  }
});

export default api;
