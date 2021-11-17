function ExampleCard(obj) {

  console.log("HERE --> ", obj)

  return (
    <tr >
      <td>
        <img src={obj.actor.pictureUrl} />
      </td>
      <td>
        <h4>{obj.actor.name}</h4>
      </td>
      <td>
        <h4>{obj.actor.popularity}</h4>
      </td>
      <td>
        {obj.actor.wonOscar ? '🏆' : null}
      </td>
      <td>
        {obj.actor.wonEmmy ? '🏆' : null}
      </td>
      <td><button onClick={() => obj.callback() }>Delete</button></td>
    </tr>
  )
}

export default ExampleCard;