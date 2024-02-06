import { create } from "zustand";

export const useAlimentosPlato = create((set) => ({
  nombre: "",
  descripcion: "",
  tipoPlato: "ENTRANTE",
  alimentos: [],

  setNombre: (nombre) => set({ nombre }),
  setDescripcion: (descripcion) => set({ descripcion }),
  setTipoPlato: (tipoPlato) => set({ tipoPlato }),
  reset: () => set({ nombre: "", descripcion: "", tipoPlato: "ENTRANTE", alimentos: [] }),
}));
