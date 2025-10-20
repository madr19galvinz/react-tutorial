import Profile from "./Profile";
import "./App.css";

export default function App() {
  return (
    <div className="gallery">
      <Profile
        name="Katherine Johnson"
        image="https://i.imgur.com/MK3eW3Am.jpg"
        profession="Mathematician"
      />
      <Profile
        name="Albert Einstein"
        image="https://upload.wikimedia.org/wikipedia/commons/d/d3/Albert_Einstein_Head.jpg"
        profession="Physicist"
      />
      <Profile
        name="Isaac Newton"
        image="https://upload.wikimedia.org/wikipedia/commons/3/39/GodfreyKneller-IsaacNewton-1689.jpg"
        profession="Physicist and Mathematician"
      />
    </div>
  );
}
