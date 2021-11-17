function ContactCard({props}) {
  return (
    <>
      <img src={props.pictureUrl} alt="" srcset="" />
      <h2>{props.name}</h2>
      <h2>{props.popularity}</h2>
    </>
  )
}

export default ContactCard;