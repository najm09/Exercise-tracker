const style = {
  display:'flex', 
  flexDirection : 'column',
  justifyContent : 'space-around',
  widht : '100%',
  height : '100%',
  margin : '10em',
  alignItems: "center",
  textAlign : "center"
}

const ErrorPage = () => {
  return(
    <div style={style}>
      <h1>Not Found !</h1>
    </div>
  )
}

export default ErrorPage