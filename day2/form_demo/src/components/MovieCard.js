function MovieCard(annonymousObj) {
  console.log("AnnonymousObj => ", annonymousObj);

  return (
    <div style={{
        border: "1px solid lightgrey", 
        width: '400px', 
        margin: '20px auto', 
        boxShadow:'0px 10px 10px lightgrey' 
    }}>
      <h4>{annonymousObj.giraffe.title}</h4>
      <h4>{annonymousObj.giraffe.director}</h4>
      <h4>{annonymousObj.giraffe.rating}</h4>
      <h4>Oscars? :{annonymousObj.giraffe.hasOscar ? "YES" : "NO"}</h4>
    </div>
  );
}

export default MovieCard;
