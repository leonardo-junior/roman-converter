import { useState, useRef } from 'react';
import Card from '../components/card';

function DecToRoman () {
  const [number, setNumber] = useState();
  const valueToConvert = useRef(0);

  function handleDecToRoman () {
    let num = valueToConvert.current;
    let resp = '';

    while (num > 0) {
      if (num <= 3999 && num >= 1000) {
        num -= 1000;
        resp += 'M';
      } else if (num <= 999 && num >= 900) {
        num -= 900;
        resp += 'CM';
      } else if (num <= 899 && num >= 500) {
        num -= 500;
        resp += 'D';
      } else if (num <= 499 && num >= 400) {
        num -= 400;
        resp += 'CD';
      } else if (num <= 399 && num >= 100) {
        num -= 100;
        resp += 'C';
      } else if (num <= 99 && num >= 90) {
        num -= 90;
        resp += 'XC';
      } else if (num <= 89 && num >= 50) {
        num -= 50;
        resp += 'L';
      } else if (num <= 49 && num >= 40) {
        num -= 40;
        resp += 'XL';
      } else if (num <= 39 && num >= 10) {
        num -= 10;
        resp += 'X';
      } else if (num === 9) {
        num -= 9;
        resp += 'IX';
      } else if (num < 9 && num >= 5) {
        num -= 5;
        resp += 'V';
      } else if (num === 4) {
        num -= 4;
        resp += 'IV';
      } else if (num < 3 || num > 0) {
        num -= 1;
        resp += 'I';
      }
    }
    setNumber(resp);
  };

  function handleChange (event) {
    valueToConvert.current = (event.target.value);
  }

  return (
    <div>
      <section className="cards-locale">
        <Card
          header="Decimal para Romano"
          typeInput="number"
          placeholder="Insira número decimal"
          handleChange={handleChange}
          onClick={handleDecToRoman}
          response={number}
        />
      </section>
    </div>

  );
}

export default DecToRoman;