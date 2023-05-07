import { Veiculo } from "./Veiculo";

export interface Patio {
    addVeiculo: (veiculo: Veiculo) => void;
    removeVeiculo: (veiculo: Veiculo) => void;
    getVeiculos: () => void;
}