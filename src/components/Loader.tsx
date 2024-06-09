interface Loader {
    open:boolean
}
const Loader = ({open}:Loader) => {
  return (
    open ? <div className='loader'><div className="spinner"></div></div> : null
  )
}

export default Loader