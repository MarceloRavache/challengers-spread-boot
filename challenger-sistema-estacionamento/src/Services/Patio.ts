import { Patio } from "../Models/Patio";
import { Veiculo } from "../Models/Veiculo";

export class PatioImpl implements Patio{

    private veiculos;

    constructor(veiculos: Veiculo[]){
        this.veiculos = veiculos;
    }

    addVeiculo(veiculo: Veiculo) {
        this.veiculos.push(veiculo);
    };
    removeVeiculo(veiculo: Veiculo){
        this.veiculos = this.veiculos.filter(veiculoStored => !(veiculoStored.nome === veiculo.nome && veiculoStored.placa === veiculo.placa));
    }
    getVeiculos(){
        return this.veiculos;
    }
}