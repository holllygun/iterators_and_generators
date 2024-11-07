import GameSavingLoader from "./current game/loader";

(async () => {
  try{
    const saving  = await GameSavingLoader.load();
    console.log(saving);
  } catch (error) {
    console.log (error);
  }
}) ();