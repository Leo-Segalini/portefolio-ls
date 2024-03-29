import { BrowserRouter, Routes, Route } from "react-router-dom";
import Router from "./Pages/Router";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path="/*" element={<Router />} />
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
