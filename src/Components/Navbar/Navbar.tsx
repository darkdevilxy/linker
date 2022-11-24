import "./navbar.scss";

export default function (): JSX.Element {
  return (
    <nav className="navbar">
      <h1 className="title">@darkdevilxy</h1>
      <svg
        className="left_wave"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1440 320"
        preserveAspectRatio="none"
      >
        <path d="M0,128L16,117.3C32,107,64,85,96,69.3C128,53,160,43,192,80C224,117,256,203,288,218.7C320,235,352,181,384,181.3C416,181,448,235,480,234.7C512,235,544,181,576,176C608,171,640,213,672,208C704,203,736,149,768,106.7C800,64,832,32,864,48C896,64,928,128,960,181.3C992,235,1024,277,1056,266.7C1088,256,1120,192,1152,186.7C1184,181,1216,235,1248,218.7C1280,203,1312,117,1344,117.3C1376,117,1408,203,1424,245.3L1440,288L1440,320L1424,320C1408,320,1376,320,1344,320C1312,320,1280,320,1248,320C1216,320,1184,320,1152,320C1120,320,1088,320,1056,320C1024,320,992,320,960,320C928,320,896,320,864,320C832,320,800,320,768,320C736,320,704,320,672,320C640,320,608,320,576,320C544,320,512,320,480,320C448,320,416,320,384,320C352,320,320,320,288,320C256,320,224,320,192,320C160,320,128,320,96,320C64,320,32,320,16,320L0,320Z"></path>
      </svg>
      <svg
        className="right_wave"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1440 320"
        preserveAspectRatio="none"
      >
        <path d="M0,128L16,106.7C32,85,64,43,96,74.7C128,107,160,213,192,261.3C224,309,256,299,288,282.7C320,267,352,245,384,208C416,171,448,117,480,101.3C512,85,544,107,576,112C608,117,640,107,672,138.7C704,171,736,245,768,256C800,267,832,213,864,165.3C896,117,928,75,960,85.3C992,96,1024,160,1056,160C1088,160,1120,96,1152,80C1184,64,1216,96,1248,122.7C1280,149,1312,171,1344,149.3C1376,128,1408,64,1424,32L1440,0L1440,320L1424,320C1408,320,1376,320,1344,320C1312,320,1280,320,1248,320C1216,320,1184,320,1152,320C1120,320,1088,320,1056,320C1024,320,992,320,960,320C928,320,896,320,864,320C832,320,800,320,768,320C736,320,704,320,672,320C640,320,608,320,576,320C544,320,512,320,480,320C448,320,416,320,384,320C352,320,320,320,288,320C256,320,224,320,192,320C160,320,128,320,96,320C64,320,32,320,16,320L0,320Z"></path>
      </svg>
    </nav>
  );
}
