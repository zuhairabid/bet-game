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
            {/* <a href="/admin/abid/bet-control" className="hover:underline">
              Bet Control
            </a> */}

            <Routes>
              <Route path="/admin/:username" Component={RequireAuth} key={3}>
                {AdminRoutes}
              </Route>
            </Routes>
          </div>
        </BrowserRouter>
      </ModalContext>
    </GamesContext>
  );
}

export default App;
