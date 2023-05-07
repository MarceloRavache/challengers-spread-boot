import { Veiculo } from "./Models/Veiculo";
import { PatioImpl } from "./Services/Patio";

const patio1 = new PatioImpl([])
const patio2 = new PatioImpl([{
    nome: "Carro do Dono",
    placa: "00000"
}])

console.log(patio1);
console.log(patio2);

patio1.addVeiculo({
    nome: "Carro do Dono",
    placa: "00000"
})

patio2.removeVeiculo({
    nome: "Carro do Dono",
    placa: "00000"
})

console.log(patio1);
console.log(patio2);