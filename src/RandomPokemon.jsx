import "./RandomPokemon.css";
export default function RandomPokemon() {
  let randNum = Math.floor(Math.random() * 100) + 1;
  let linkPokemon = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${randNum}.png`;
  return (
    <div className="random-pokemon">
      <h1>Pokemon #{randNum}</h1>
      <img src={linkPokemon} alt="a pokemon" />
    </div>
  );
}
