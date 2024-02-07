import { create } from "zustand";

export const useAlimentosPlato = create((set) => ({
  nombre: "",
  descripcion: "",
  tipoPlato: "ENTRANTE",
  alimentos: [],
  setNombre: (nombre) => set({ nombre }),
  setDescripcion: (descripcion) => set({ descripcion }),
  setTipoPlato: (tipoPlato) => set({ tipoPlato }),
  addAlimento: (alimento) => set((state) => ({ alimentos: [...state.alimentos, alimento] })),
  updateCantidad: (id, nuevaCantidad) =>
    set((state) => ({
      alimentos: state.alimentos.map((alimento) =>
        alimento.id === id ? { ...alimento, cantidad: nuevaCantidad } : alimento,
      ),
    })),
  removeAlimento: (id) => set((state) => ({ alimentos: state.alimentos.filter((alimento) => alimento.id !== id) })),
  reset: () => set({ nombre: "", descripcion: "", tipoPlato: "ENTRANTE", alimentos: [] }),
}));
