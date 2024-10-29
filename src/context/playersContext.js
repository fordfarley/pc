import { createContext, useState, useContext, useEffect } from "react";

const PlayersContext = createContext();

export const PlayersProvider = ({ children }) => {
  const [players, setPlayers] = useState([]);
  const [couples, setCouples] = useState(1);
  const [active, setActive] = useState(null);

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
    setPlayers(newPlayers);
    localStorage.setItem('players',JSON.stringify(newPlayers));
  };

  useEffect(() => {
    recoverPlayers();
  }, []);

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
      setPlayers(newPlayers)
      localStorage.setItem('players',JSON.stringify(newPlayers));
    };
  };

  const deletePlayers = () => {
    setPlayers([]);
    localStorage.setItem('players',JSON.stringify([]));
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

    setPlayers(newPlayers);
    localStorage.setItem('players',JSON.stringify(newPlayers));
    setCouples(couples + 1);
  };

  const nextPlayer = () => {
    if (players.length === 0) return null;
    if (active === null) {
      setActive(0);
      return 0;
    } else if (active === players.length - 1) {
      setActive(0);
      return 0;
    } else {
      const newActive = active + 1;
      setActive(newActive);
      return newActive;
    }
  };

  const recoverPlayers = () =>{
    const savedPlayers = JSON.parse(localStorage.getItem('players'));
    if(savedPlayers) setPlayers(savedPlayers);
  }

  return (
    <PlayersContext.Provider
      value={{
        players,
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
