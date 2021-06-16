import React, { useState, useEffect } from 'react';
import { Route, Switch, withRouter, useHistory } from 'react-router-dom'
import ProtectedRoute from './ProtectedRoute';
import Header from "./Header";
import Login from './Login';
import Register from './Register';
import * as auth from '../utils/auth';
import Main from "./Main";
import Footer from "./Footer";
import ImagePopup from './ImagePopup';
import api from "../utils/api";
import { CurrentUserContext } from "../contexts/CurrentUserContext";
import EditProfilePopup from "./EditProfilePopup";
import EditAvatarPopup from "./EditAvatarPopup";
import AddPlacePopup from "./AddPlacePopup";
import ConfirmPopup from './ConfirmPopup';

function App() {
  const [currentUser, setCurrentUser] = useState({});
  const [isEditProfileModalOpen, setEditProfileModalOpen] = useState(false);
  const [isAddPlaceModalOpen, setAddPlaceModalOpen] = useState(false);
  const [isEditAvatarModalOpen, setEditAvatarModalOpen] = useState(false);
  const [selectedCard, setSelectedCard] = useState({});
  const [confirmDeletePopup, setConfirmDeletePopup] = useState({ isOpen: false, id: '' });
  const [cards, setCards] = useState([]);
  const [loggedIn, setLoggedIn] = useState(false);
  const [userData, setUserData] = useState({});
  const history = useHistory();

  useEffect(() => {
    handleTokenCheck();
  }, []);

  useEffect(() => {
    api.getUserInfo().then((res) => {
      setCurrentUser(res);
    }).catch((err) => {
      console.log(err);
    });
  }, []);

  useEffect(() => {
    api.getInitialCards().then((res) => {
      setCards(res);
    }).catch((err) => {
      console.log(err);
    });
  }, []);

  function handleCardLike(card) {
    const isLiked = card.likes.some(i => i._id === currentUser._id);
    if (isLiked) {
      api.removeLike(card._id).then((newCard) => {
        setCards(cards.map((c) => {
          return c._id === newCard._id ? newCard : c
        }))
      }).catch((err) => {
        console.log(err);
      });
    } else {
      api.addLike(card._id).then((newCard) => {
        setCards(cards.map((c) => {
          return c._id === newCard._id ? newCard : c
        }))
      }).catch((err) => {
        console.log(err);
      });
    }
  }

  function handleEditAvatarClick() {
    setEditAvatarModalOpen(true);
  }

  function handleEditProfileClick() {
    setEditProfileModalOpen(true);
  }

  function handleAddPlaceClick() {
    setAddPlaceModalOpen(true);
  }

  function handleCloseAllModals() {
    setEditAvatarModalOpen(false);
    setEditProfileModalOpen(false);
    setAddPlaceModalOpen(false);
    setConfirmDeletePopup({ isOpen: false, id: null })
    setSelectedCard({});
  }

  function handleCardClick({ name, link }) {
    setSelectedCard({ name, link });
  }

  function handleUpdateUser({ name, about }) {
    api.updateUserInfo({ name, about }).then((res) => {
      setCurrentUser(res);
      handleCloseAllModals();
    }).catch((err) => {
      console.log(err);
    });
  }

  function handleUpdateUserAvatar(avatar) {
    api.updateUserAvatar(avatar).then((res) => {
      setCurrentUser(res);
      handleCloseAllModals();
    }).catch((err) => {
      console.log(err);
    });
  }

  function handleCardDelete(card) {
    setConfirmDeletePopup({ isOpen: true, id: card._id });
  }

  function handleCardDeleteConfirm() {
    if (confirmDeletePopup.isOpen && confirmDeletePopup.id) {
      api.deleteCard(confirmDeletePopup.id).then(() => {
        setCards(cards.filter((c) => {
          return c._id !== confirmDeletePopup.id;
        }));
        handleCloseAllModals();
      }).catch((err) => {
        console.log(err);
      });
    } else {
      return
    }
  }

  function handleAddPlace(card) {
    api.postCard(card).then((newCard) => {
      setCards([newCard, ...cards]);
      handleCloseAllModals();
    }).catch((err) => {
      console.log(err);
    });
  }

  function handleSignOut() {
    localStorage.removeItem('token');
    setLoggedIn(false);
    history.push('/signin');
  }

  function handleLogin() {
    setLoggedIn(true);
  }

  function handleTokenCheck() {
    if (localStorage.getItem('token')) {
      const token = localStorage.getItem('token');
      auth.checkToken(token).then((res) => {
        setLoggedIn(true);
        setUserData({ password: res.password, email: res.email })
      }).then(() => {
        history.push('/')
      });
    }
  }

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <div className="page">
        <Header handleSignOut={handleSignOut} />
        <Switch>
          <Route path="/signup">
            <Register />
          </Route>
          <Route path="/signin">
            <Login handleLogin={handleLogin} handleTokenCheck={() => handleTokenCheck()} />
          </Route>
          <ProtectedRoute path="/" loggedIn={loggedIn}
            onEditProfile={handleEditProfileClick}
            onAddPlace={handleAddPlaceClick}
            onEditAvatar={handleEditAvatarClick}
            onCardClick={handleCardClick}
            cards={cards}
            handleCardLike={handleCardLike}
            handleCardDelete={handleCardDelete} component={Main} />

        </Switch>

        <Footer />

        <EditProfilePopup isOpen={isEditProfileModalOpen} onClose={handleCloseAllModals} onUpdateUser={handleUpdateUser} />
        <EditAvatarPopup isOpen={isEditAvatarModalOpen} onClose={handleCloseAllModals} onUpdateUserAvatar={handleUpdateUserAvatar} />
        <AddPlacePopup isOpen={isAddPlaceModalOpen} onClose={handleCloseAllModals} onAddPlace={handleAddPlace} />
        <ImagePopup card={selectedCard} onClose={handleCloseAllModals} />
        <ConfirmPopup isOpen={confirmDeletePopup.isOpen} onClose={handleCloseAllModals} handleCardDeleteConfirm={handleCardDeleteConfirm} />
      </div>
    </CurrentUserContext.Provider>
  );
}

export default withRouter(App);
