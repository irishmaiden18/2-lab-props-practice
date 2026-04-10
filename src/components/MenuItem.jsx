
const MenuItem = ({food, handleAdd}) => {
  return (
    <>
        <h2>{food.name}</h2>
        <h3>${food.price}</h3>
        {food.available ? <p>This food is available!</p> : <p>This food is unfortunately NOT available!</p>}
        {food.onSale && <p>This Food is ON SALE NOW!</p>}
        {food.available && <button onClick={handleAdd}>Add to Order</button>}
    </>
  )
}

export default MenuItem