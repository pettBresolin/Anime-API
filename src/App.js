import { Home } from "./pages/home/home";
import "./index.css";
import { Card } from "./components/card/card"

export function App() {
  return (
    <>
    <div className="card-list">
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
    </div>
      <Home />
    </>
  );
}
