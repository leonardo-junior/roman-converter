import { useState, useRef } from 'react';
import Card from '../components/card';

function RomanToDec () {
  const [number, setNumber] = useState();
  const roman = useRef('');

  function handleChange (event) {
    roman.current = event.target.value;
  }

  function handleRomanToDec () {
    let romanToDec = roman.current.toUpperCase();
    let decimalFinal = 0;
    let numCount = '';
    for (let i = 0; i < romanToDec.length; i++) {
      if (romanToDec[i] === "I") {
        numCount = romanToDec[i] + romanToDec[i + 1];
        if (numCount === "IV") {
          decimalFinal -= 1;
        } else if (numCount === "IX") {
          decimalFinal -= 1;
        } else {
          decimalFinal += 1;
        }

      } else if (romanToDec[i] === "V") {
        decimalFinal += 5;

      } else if (romanToDec[i] === "X") {
        numCount = romanToDec[i] + romanToDec[i + 1];
        if (numCount === "XL") {
          decimalFinal -= 10;
        } else if (numCount === "XC") {
          decimalFinal -= 10;
        } else {
          decimalFinal += 10;
        }
      } else if (romanToDec[i] === "L") {
        decimalFinal += 50;

      } else if (romanToDec[i] === "C") {
        numCount = romanToDec[i] + romanToDec[i + 1];
        if (numCount === "CD") {
          decimalFinal -= 100;
        } else if (numCount === "CM") {
          decimalFinal -= 100;
        } else {
          decimalFinal += 100;
        }
      } else if (romanToDec[i] === "D") {
        decimalFinal += 500;

      } else if (romanToDec[i] === "M") {
        decimalFinal += 1000;
      }
    }
    setNumber(decimalFinal);
  };
  return (
    <section className="cards-locale">
      <Card
        header="Romano para Decimal"
        typeInput="text"
        placeholder="Insira número romano"
        handleChange={handleChange}
        onClick={handleRomanToDec}
        response={number}
      />
    </section>
  );
}

export default RomanToDec;