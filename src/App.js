import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import RequireAuth from "./AdminAuth";
import AdminRoutes from "./Admin/admin";
import ModalContext from "./Admin/Contexts/ModalContext";
import GamesContext from "./Admin/Contexts/GamesContext";

function App() {
  return (
    <GamesContext>
      <ModalContext>
        <BrowserRouter>
          <div className="App dark">
            {/* <Routes>
          <Route path="/test" component={HomePage}>
            <Route path="/test/admin/:username" component={HomePage} />
          </Route>
        </Routes> */}
            <Routes>
              <Route path="/admin/:username" Component={RequireAuth} key={3}>
                {AdminRoutes}
                {/* <Route path="*" Component={Header} /> */}
              </Route>
            </Routes>

            {/* <Route path="/coins/:id" component={CoinPage} /> */}
          </div>
        </BrowserRouter>
      </ModalContext>
    </GamesContext>
  );
}

export default App;
