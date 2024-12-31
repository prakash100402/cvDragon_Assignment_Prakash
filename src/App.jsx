import { useSelector } from "react-redux";
import Body from "./components/Body"

const App = () => {
  const mode = useSelector((store)=>store.mode);
  return (
    <div className={mode}>
        <Body/>
    </div>
    
  );
};

export default App;
