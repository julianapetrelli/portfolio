import { BrowserRouter, Route, Routes } from "react-router-dom";

import Home from "./screens/Home";

import GlobalStyles from "./assets/style/global";

function App() {
  return (
    <BrowserRouter>
      <GlobalStyles />

      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
