import { FallingLines } from "react-loader-spinner"

const Loader = () => {
  return (
    <FallingLines
  color="#800080"
  width="50"
  visible={true}
  ariaLabel="falling-circles-loading"
  />
  )
}

export default Loader