import { useState} from "react";

const Girokonto = () => {

    const [saldo, setSaldo] = useState(2000)
    const [geldbetrag, setGeldbetrag] = useState(0)

    function handleEinzahlen() {
        
        setSaldo(saldo + Number(geldbetrag))
        setGeldbetrag(0)
    }
    function handleAuszahlen() {
        setSaldo(saldo - Number(geldbetrag))
        setGeldbetrag(0)

    }

    function onChangeInputHandler (event) {
        setGeldbetrag(event.target.value)
    }
    return ( 
        <section className="konto">
            <h2>Dein Girokonto</h2>
            <h2 className="saldo">{saldo}€</h2>
            <input type="number" className="geldbetrag" value={geldbetrag} onChange={onChangeInputHandler}/>
            <button className="auszahlen" onClick={handleAuszahlen}>auszahlen</button>
            <button className="einzahlen" onClick={handleEinzahlen}>einzahlen</button>
        </section>

     );
}
 
export default Girokonto;