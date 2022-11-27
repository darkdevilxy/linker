import { collection, getFirestore } from "firebase/firestore";
import { useFirestoreCollectionData } from "reactfire";
import { useStorage, useStorageDownloadURL } from "reactfire";

import "./App.scss";

import Navbar from "./Components/Navbar/Navbar";
import Links from "./Components/Links/Links";
import Footer from "./Components/Footer/Footer";
import { useMemo } from "react";

function App() {
  const database = getFirestore();
  const docRef = collection(database, "Links");
  const storage = useStorage();

  const { status, data: links_data } = useFirestoreCollectionData(docRef, {
    idField: "id",
  });
  console.log(docRef);

  return (
    <div className="app_container">
      <div className="app">
        <div className="scrollabel_section">
          <Navbar />
          {links_data &&
            links_data.map((data) => (
              <Links
                key={data.id}
                title={data.Title}
                link={data.Link}
                picture={data.Image}
              />
            ))}
        </div>
      </div>
    </div>
  );
}

export default App;
