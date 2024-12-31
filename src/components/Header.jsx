import { PROFILE_PIC } from "../utils/links"
import Mode from "./Mode"

const Header = () => {
  return (
    <div>
      <div className="flex justify-between h-28 p-4 bg-gradient-to-r from-blue-200 to-cyan-200 dark:from-slate-900 dark:to-slate-700">
        <img className="size-20" alt="Dp" src={PROFILE_PIC}/>
        <Mode/>
      </div>
    </div>
  )
}

export default Header