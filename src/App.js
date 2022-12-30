import Spline from "@splinetool/react-spline";
import Header from "./Header";

export default function App() {
  return (
    <div className="container">
      <Header />
      <Spline scene="https://prod.spline.design/0GhFXsHuCTPlaUWG/scene.splinecode" />
      <div className="HeroText"></div>
    </div>
  );
}
