function Card (props) {
  return (
    <div className="card">
      <header>{props.header}</header>
      <span>Como usar:</span>
      <p>Insira o valor desejado para a conversão é pressione o botão.</p>
      <input
        type={props.typeInput}
        placeholder={props.placeholder}
        onChange={props.handleChange}
      />
      <button onClick={props.onClick}>Converter</button>
      <h1>{props.response}</h1>
    </div>
  );
}
export default Card;