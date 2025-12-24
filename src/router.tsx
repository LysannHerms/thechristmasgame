import { createHashRouter } from "react-router-dom";
import App from "./App";
import Index from "./pages/Index";
import Admin from "./pages/Admin";
import { START, ROUTES } from "./lib/routes";



// Papa imports
import PapaStart from "./game/Papa/PapaStart";
import Papa1 from "./game/Papa/Papa1";
import Papa1Wait from "./game/Papa/Papa1Wait";
import Papa2 from "./game/Papa/Papa2";
import Papa2Wait from "./game/Papa/Papa2Wait";
import Papa3 from "./game/Papa/Papa3";
import Papa3Wait from "./game/Papa/Papa3Wait";
import Papa4 from "./game/Papa/Papa4";
import Papa4Wait from "./game/Papa/Papa4Wait";
import Papa5 from "./game/Papa/Papa5";
import Papa5Wait from "./game/Papa/Papa5Wait";
import Papa6 from "./game/Papa/Papa6";
import Papa6Wait from "./game/Papa/Papa6Wait";
import Papa7 from "./game/Papa/Papa7";
import Papa7Wait from "./game/Papa/Papa7Wait";
import PapaFinale from "./game/Papa/PapaFinale";

// Soeren imports
import SoerenStart from "./game/Soeren/SoerenStart";
import Soeren1Wait from "./game/Soeren/Soeren1Wait";
import Soeren1 from "./game/Soeren/Soeren1";
import Soeren2 from "./game/Soeren/Soeren2";
import Soeren2Wait from "./game/Soeren/Soeren2Wait";
import Soeren3 from "./game/Soeren/Soeren3";
import Soeren3Wait from "./game/Soeren/Soeren3Wait";
import Soeren4 from "./game/Soeren/Soeren4";
import Soeren4Wait from "./game/Soeren/Soeren4Wait";
import Soeren5 from "./game/Soeren/Soeren5";
import Soeren5Wait from "./game/Soeren/Soeren5Wait";
import Soeren6 from "./game/Soeren/Soeren6";
import Soeren6Wait from "./game/Soeren/Soeren6Wait";
import Soeren7 from "./game/Soeren/Soeren7";
import Soeren7Wait from "./game/Soeren/Soeren7Wait";
import SoerenFinale from "./game/Soeren/SoerenFinale";

// Sina imports
import SinaStart from "./game/Sina/SinaStart";
import Sina1 from "./game/Sina/Sina1";
import Sina1Wait from "./game/Sina/Sina1Wait";
import Sina2 from "./game/Sina/Sina2";
import Sina2Wait from "./game/Sina/Sina2Wait";
import Sina3 from "./game/Sina/Sina3";
import Sina3Wait from "./game/Sina/Sina3Wait";
import Sina4 from "./game/Sina/Sina4";
import Sina4Wait from "./game/Sina/Sina4Wait";
import Sina5 from "./game/Sina/Sina5";
import Sina5Wait from "./game/Sina/Sina5Wait";
import Sina6 from "./game/Sina/Sina6";
import Sina6Wait from "./game/Sina/Sina6Wait";
import Sina7 from "./game/Sina/Sina7";
import Sina7Wait from "./game/Sina/Sina7Wait";
import SinaFinale from "./game/Sina/SinaFinale";

// Zsaklin imports
import ZsaklinStart from "./game/Zsaklin/ZsaklinStart";
import Zsaklin1Wait from "./game/Zsaklin/Zsaklin1Wait"; 
import Zsaklin1 from "./game/Zsaklin/Zsaklin1";
import Zsaklin2 from "./game/Zsaklin/Zsaklin2";
import Zsaklin2Wait from "./game/Zsaklin/Zsaklin2Wait";
import Zsaklin3 from "./game/Zsaklin/Zsaklin3";
import Zsaklin3Wait from "./game/Zsaklin/Zsaklin3Wait";
import Zsaklin4 from "./game/Zsaklin/Zsaklin4";
import Zsaklin4Wait from "./game/Zsaklin/Zsaklin4Wait";
import Zsaklin5 from "./game/Zsaklin/Zsaklin5";
import Zsaklin5Wait from "./game/Zsaklin/Zsaklin5Wait";
import Zsaklin6 from "./game/Zsaklin/Zsaklin6";
import Zsaklin6Wait from "./game/Zsaklin/Zsaklin6Wait";
import Zsaklin7 from "./game/Zsaklin/Zsaklin7";
import Zsaklin7Wait from "./game/Zsaklin/Zsaklin7Wait";
import ZsaklinFinale from "./game/Zsaklin/ZsaklinFinale";

// Maman imports
import MamaStart from "./game/Mama/MamaStart";
import Mama1 from "./game/Mama/Mama1";
import Mama1Wait from "./game/Mama/Mama1Wait";
import Mama2 from "./game/Mama/Mama2";
import Mama2Wait from "./game/Mama/Mama2Wait";
import Mama3 from "./game/Mama/Mama3";
import Mama3Wait from "./game/Mama/Mama3Wait";
import Mama4 from "./game/Mama/Mama4";
import Mama4Wait from "./game/Mama/Mama4Wait";
import Mama5 from "./game/Mama/Mama5";
import Mama5Wait from "./game/Mama/Mama5Wait";
import Mama6 from "./game/Mama/Mama6";
import Mama6Wait from "./game/Mama/Mama6Wait";
import Mama7 from "./game/Mama/Mama7";
import Mama7Wait from "./game/Mama/Mama7Wait";
import MamaFinale from "./game/Mama/MamaFinale";

// Norman imports
import NormanStart from "./game/Norman/NormanStart";
import Norman1 from "./game/Norman/Norman1";
import Norman1Wait from "./game/Norman/Norman1Wait";
import Norman2 from "./game/Norman/Norman2";
import Norman2Wait from "./game/Norman/Norman2Wait";
import Norman3 from "./game/Norman/Norman3";
import Norman3Wait from "./game/Norman/Norman3Wait";
import Norman4 from "./game/Norman/Norman4";
import Norman4Wait from "./game/Norman/Norman4Wait";
import Norman5 from "./game/Norman/Norman5";
import Norman5Wait from "./game/Norman/Norman5Wait";
import Norman6 from "./game/Norman/Norman6";
import Norman6Wait from "./game/Norman/Norman6Wait";
import Norman7 from "./game/Norman/Norman7";
import Norman7Wait from "./game/Norman/Norman7Wait";
import NormanFinale from "./game/Norman/NormanFinale";



export const router = createHashRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { index: true, element: <Index /> },
      { path: "admin", element: <Admin /> },

      // Oma mit Slugs statt /oma/1
      { path: `papa/${START.papa}`, element: <PapaStart /> },
      { path: `soeren/${START.soeren}`, element: <SoerenStart /> },
      { path: `sina/${START.sina}`, element: <SinaStart /> },
      { path: `zsaklin/${START.zsaklin}`, element: <ZsaklinStart /> },
      { path: `mama/${START.mama}`, element: <MamaStart /> },
      { path: `norman/${START.norman}`, element: <NormanStart /> },

// Spielseiten:


// Papa
{ path: `papa/${ROUTES.papa[1].play}`, element: <Papa1 /> },
{ path: `papa/${ROUTES.papa[1].wait}`, element: <Papa1Wait /> },
{ path: `papa/${ROUTES.papa[2].play}`, element: <Papa2 /> },
{ path: `papa/${ROUTES.papa[2].wait}`, element: <Papa2Wait /> },
{ path: `papa/${ROUTES.papa[3].play}`, element: <Papa3 /> },
{ path: `papa/${ROUTES.papa[3].wait}`, element: <Papa3Wait /> },
{ path: `papa/${ROUTES.papa[4].play}`, element: <Papa4 /> },
{ path: `papa/${ROUTES.papa[4].wait}`, element: <Papa4Wait /> },
{ path: `papa/${ROUTES.papa[5].play}`, element: <Papa5 /> },
{ path: `papa/${ROUTES.papa[5].wait}`, element: <Papa5Wait /> },
{ path: `papa/${ROUTES.papa[6].play}`, element: <Papa6 /> },
{ path: `papa/${ROUTES.papa[6].wait}`, element: <Papa6Wait /> },
{ path: `papa/${ROUTES.papa[7].play}`, element: <Papa7 /> },
{ path: `papa/${ROUTES.papa[7].wait}`, element: <Papa7Wait /> },
{ path: `papa/${ROUTES.papa[8].play}`, element: <PapaFinale /> },

// Soeren
{ path: `soeren/${ROUTES.soeren[1].play}`, element: <Soeren1 /> },
{ path: `soeren/${ROUTES.soeren[1].wait}`, element: <Soeren1Wait /> },
{ path: `soeren/${ROUTES.soeren[2].play}`, element: <Soeren2 /> },
{ path: `soeren/${ROUTES.soeren[2].wait}`, element: <Soeren2Wait /> },
{ path: `soeren/${ROUTES.soeren[3].play}`, element: <Soeren3 /> },
{ path: `soeren/${ROUTES.soeren[3].wait}`, element: <Soeren3Wait /> },
{ path: `soeren/${ROUTES.soeren[4].play}`, element: <Soeren4 /> },
{ path: `soeren/${ROUTES.soeren[4].wait}`, element: <Soeren4Wait /> },
{ path: `soeren/${ROUTES.soeren[5].play}`, element: <Soeren5 /> },
{ path: `soeren/${ROUTES.soeren[5].wait}`, element: <Soeren5Wait /> },
{ path: `soeren/${ROUTES.soeren[6].play}`, element: <Soeren6 /> },
{ path: `soeren/${ROUTES.soeren[6].wait}`, element: <Soeren6Wait /> },
{ path: `soeren/${ROUTES.soeren[7].play}`, element: <Soeren7 /> },
{ path: `soeren/${ROUTES.soeren[7].wait}`, element: <Soeren7Wait /> },
{ path: `soeren/${ROUTES.soeren[8].play}`, element: <SoerenFinale /> },

// Sina
{ path: `sina/${ROUTES.sina[1].play}`, element: <Sina1 /> },
{ path: `sina/${ROUTES.sina[1].wait}`, element: <Sina1Wait /> },
{ path: `sina/${ROUTES.sina[2].play}`, element: <Sina2 /> },
{ path: `sina/${ROUTES.sina[2].wait}`, element: <Sina2Wait /> },
{ path: `sina/${ROUTES.sina[3].play}`, element: <Sina3 /> },
{ path: `sina/${ROUTES.sina[3].wait}`, element: <Sina3Wait /> },
{ path: `sina/${ROUTES.sina[4].play}`, element: <Sina4 /> },
{ path: `sina/${ROUTES.sina[4].wait}`, element: <Sina4Wait /> },
{ path: `sina/${ROUTES.sina[5].play}`, element: <Sina5 /> },
{ path: `sina/${ROUTES.sina[5].wait}`, element: <Sina5Wait /> },
{ path: `sina/${ROUTES.sina[6].play}`, element: <Sina6 /> },
{ path: `sina/${ROUTES.sina[6].wait}`, element: <Sina6Wait /> },
{ path: `sina/${ROUTES.sina[7].play}`, element: <Sina7 /> },
{ path: `sina/${ROUTES.sina[7].wait}`, element: <Sina7Wait /> },
{ path: `sina/${ROUTES.sina[8].play}`, element: <SinaFinale /> },

// Zsaklin
{ path: `zsaklin/${ROUTES.zsaklin[1].play}`, element: <Zsaklin1 /> },
{ path: `zsaklin/${ROUTES.zsaklin[1].wait}`, element: <Zsaklin1Wait /> },
{ path: `zsaklin/${ROUTES.zsaklin[2].play}`, element: <Zsaklin2 /> },
{ path: `zsaklin/${ROUTES.zsaklin[2].wait}`, element: <Zsaklin2Wait /> },
{ path: `zsaklin/${ROUTES.zsaklin[3].play}`, element: <Zsaklin3 /> },
{ path: `zsaklin/${ROUTES.zsaklin[3].wait}`, element: <Zsaklin3Wait /> },
{ path: `zsaklin/${ROUTES.zsaklin[4].play}`, element: <Zsaklin4 /> },
{ path: `zsaklin/${ROUTES.zsaklin[4].wait}`, element: <Zsaklin4Wait /> },
{ path: `zsaklin/${ROUTES.zsaklin[5].play}`, element: <Zsaklin5 /> },
{ path: `zsaklin/${ROUTES.zsaklin[5].wait}`, element: <Zsaklin5Wait /> },
{ path: `zsaklin/${ROUTES.zsaklin[6].play}`, element: <Zsaklin6 /> },
{ path: `zsaklin/${ROUTES.zsaklin[6].wait}`, element: <Zsaklin6Wait /> },
{ path: `zsaklin/${ROUTES.zsaklin[7].play}`, element: <Zsaklin7 /> },
{ path: `zsaklin/${ROUTES.zsaklin[7].wait}`, element: <Zsaklin7Wait /> },
{ path: `zsaklin/${ROUTES.zsaklin[8].play}`, element: <ZsaklinFinale /> },

// Maman
{ path: `mama/${ROUTES.mama[1].play}`, element: <Mama1 /> },
{ path: `mama/${ROUTES.mama[1].wait}`, element: <Mama1Wait /> },
{ path: `mama/${ROUTES.mama[2].play}`, element: <Mama2 /> },
{ path: `mama/${ROUTES.mama[2].wait}`, element: <Mama2Wait /> },
{ path: `mama/${ROUTES.mama[3].play}`, element: <Mama3 /> },
{ path: `mama/${ROUTES.mama[3].wait}`, element: <Mama3Wait /> },
{ path: `mama/${ROUTES.mama[4].play}`, element: <Mama4 /> },
{ path: `mama/${ROUTES.mama[4].wait}`, element: <Mama4Wait /> },
{ path: `mama/${ROUTES.mama[5].play}`, element: <Mama5 /> },
{ path: `mama/${ROUTES.mama[5].wait}`, element: <Mama5Wait /> },
{ path: `mama/${ROUTES.mama[6].play}`, element: <Mama6 /> },
{ path: `mama/${ROUTES.mama[6].wait}`, element: <Mama6Wait /> },
{ path: `mama/${ROUTES.mama[7].play}`, element: <Mama7 /> },
{ path: `mama/${ROUTES.mama[7].wait}`, element: <Mama7Wait /> },
{ path: `mama/${ROUTES.mama[8].play}`, element: <MamaFinale /> },

// Norman
{ path: `norman/${ROUTES.norman[1].play}`, element: <Norman1 /> },
{ path: `norman/${ROUTES.norman[1].wait}`, element: <Norman1Wait /> },
{ path: `norman/${ROUTES.norman[2].play}`, element: <Norman2 /> },
{ path: `norman/${ROUTES.norman[2].wait}`, element: <Norman2Wait /> },
{ path: `norman/${ROUTES.norman[3].play}`, element: <Norman3 /> },
{ path: `norman/${ROUTES.norman[3].wait}`, element: <Norman3Wait /> },
{ path: `norman/${ROUTES.norman[4].play}`, element: <Norman4 /> },
{ path: `norman/${ROUTES.norman[4].wait}`, element: <Norman4Wait /> },
{ path: `norman/${ROUTES.norman[5].play}`, element: <Norman5 /> },
{ path: `norman/${ROUTES.norman[5].wait}`, element: <Norman5Wait /> },
{ path: `norman/${ROUTES.norman[6].play}`, element: <Norman6 /> },
{ path: `norman/${ROUTES.norman[6].wait}`, element: <Norman6Wait /> },
{ path: `norman/${ROUTES.norman[7].play}`, element: <Norman7 /> },
{ path: `norman/${ROUTES.norman[7].wait}`, element: <Norman7Wait /> },
{ path: `norman/${ROUTES.norman[8].play}`, element: <NormanFinale /> },

    ],
  },
]);
