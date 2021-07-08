import "./App.css";
import Designer from "./designcard.js";
export default function App() {
  const sk = ['UI/UX', 'HTML', 'Front End', 'Node', 'React','Java']
  return (
    <div className="App">
      <Designer name="Rick Park" location="New York" desc="User Interface designer And Front end Devloper" skills={sk}/>
    </div>
  );
}
