import "./App.css";
import React, { useEffect } from "react";

import firebase from "./firebase";
import "firebase/messaging";

function App() {
  useEffect(() => {
    const messaging = firebase.messaging();

    messaging
      .getToken({
        vapidKey:
          "BJuvDbZwzb6oZeMGMpG3c2fKEpcbZdbQ7GkQIa0FNBw8E8JFTe6igxIKA9MZKglCFeOTV-T480gyvP7M-gppX8c",
      })
      .then((currentToken) => {
        if (currentToken) {
          // Send the token to your server and update the UI if necessary
          // ...

          console.log(currentToken);
        } else {
          // Show permission request UI
          console.log(
            "No registration token available. Request permission to generate one."
          );
          // ...
        }
      })
      .catch((err) => {
        console.log("An error occurred while retrieving token. ", err);
        // ...
      });
  }, []);
  return (
    <div>
      <form>
        <textarea rows="4" cols="50" />
        <br />
        <input id="submit" type="Submit" />
      </form>
    </div>
  );
}

export default App;
