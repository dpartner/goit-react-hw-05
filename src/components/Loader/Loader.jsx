import { FallingLines } from "react-loader-spinner"
import s from './Loader.module.css'

const Loader = () => {
  return (
    <div className={s.loaderWrap}>
        <FallingLines
        color="#800080"
        width="50"
        visible={true}
        ariaLabel="falling-circles-loading"
        />
    </div>
  )
}

export default Loader