import { collection, getFirestore } from "firebase/firestore";
import { useFirestoreCollectionData } from "reactfire";

import "./App.scss";

import Navbar from "./Components/Navbar/Navbar";
import Links from "./Components/Links/Links";

function App() {
  const docRef = collection(getFirestore(), "Links");
  const { status, data: links_data } = useFirestoreCollectionData(docRef, {
    idField: "id",
  });
  console.log(links_data);

  return (
    <div className="app_container">
      <div className="app">
        <Navbar />
        <div className="scrollabel_section">
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
