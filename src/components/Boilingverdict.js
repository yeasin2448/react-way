function Boilingverdict ({celsius = 0}) {
  if (celsius >= 100) {
    return <p className="text-center">The water would boil.</p>
  }
  return <p className="text-center">The water wouldn's boil</p>
}

export default Boilingverdict;