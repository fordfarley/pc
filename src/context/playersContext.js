import { createContext, useState, useContext, useEffect } from "react";

const PlayersContext = createContext();

export const PlayersProvider = ({ children }) => {
  const [players, setPlayers] = useState([]);
  const [couples, setCouples] = useState(1);
  const [active, setActive] = useState(0);
  const [cardIndex, setCardIndex] = useState(0);

  const editPlayers = (newPlayers) =>{
    setPlayers(newPlayers);
    localStorage.setItem('players',JSON.stringify(newPlayers));
  }

  const recoverPlayers = () =>{
    const savedPlayers = JSON.parse(localStorage.getItem('players'));
    const activeSavedPlayer = localStorage.getItem('activePlayer');
    if(savedPlayers) setPlayers(savedPlayers);
    if(activeSavedPlayer) setActive(parseInt(activeSavedPlayer));
  }

  const editActive = (newActive) =>{
    setActive(newActive);
    localStorage.setItem('activePlayer', newActive);
  }

  useEffect(() => {
    recoverPlayers();
  }, []);

  const addPlayer = ({
    id,
    name,
    image,
    gender,
    isAdmin = false,
    chips = [],
  }) => {
    const newPlayers = [
      ...players,
      {
        id,
        name,
        image,
        gender,
        isAdmin,
        chips,
        couple: null,
        coupleNumber: null,
      },
    ];
    editPlayers(newPlayers);
  };

  const deletePlayer = (deleteId) => {
    const index = players.findIndex((elem) => elem.id === deleteId);
    const newPlayers = [...players];
    newPlayers.forEach((elem) => {
      if (elem.couple === deleteId) {
        elem.couple = null;
        elem.coupleNumber = null;
      }
    });
    newPlayers.splice(index, 1);

    if (index !== -1){
      editPlayers(newPlayers);
    };
  };

  const deletePlayers = () => {
    editPlayers([]);
    setCouples(1);
  };

  const createCouple = (clickedId, coupleId) => {
    console.log('Creando pareja', clickedId, coupleId);
    const newPlayers = [...players];
    newPlayers.forEach((elem) => {
      if (elem.id === clickedId) {
        elem.couple = coupleId;
        elem.coupleNumber = couples;
      }
      if (elem.id === coupleId) {
        elem.couple = clickedId;
        elem.coupleNumber = couples;
      } else if (
        elem.id !== clickedId &&
        elem.id !== coupleId &&
        (elem.couple === clickedId || elem.couple === coupleId)
      ) {
        elem.couple = null;
        elem.coupleNumber = null;
      }
    });

    editPlayers(newPlayers);
    setCouples(couples + 1);
  };

  const nextCardIndex = () =>{
    setCardIndex(cardIndex+1)
  }

  const nextPlayer = () => {
    if (players.length === 0) return null;
    if (active === null) {
      editActive(0);
      return 0;
    } else if (active === players.length - 1) {
      editActive(0);
      return 0;
    } else {
      const newActive = active + 1;
      editActive(newActive);
      return newActive;
    }
  };


  return (
    <PlayersContext.Provider
      value={{
        players,
        activePlayer: active,
        cardIndex,
        nextCardIndex,
        addPlayer,
        deletePlayer,
        deletePlayers,
        createCouple,
        nextPlayer,
        recoverPlayers
      }}
    >
      {children}
    </PlayersContext.Provider>
  );
};

export const usePlayers = () => useContext(PlayersContext);
