import './Beverage.css'

const Beverage = ({name, price, color, url}) => {
  return (
    <div className="card">
      <h2>{name}</h2>
      <h4>{price}</h4>
      <h4>{color}</h4>
      <img style={{height: '200px', width: 'auto'}} src={url} alt="" />
    </div>
  )
}

export default Beverage;