import { create } from "zustand";

export const useAlimentosPlato = create((set) => ({
  nombre: "",
  descripcion: "",
  tipoPlato: "ENTRANTE",

  setNombre: (nombre) => set({ nombre }),
  setDescripcion: (descripcion) => set({ descripcion }),
  setTipoPlato: (tipoPlato) => set({ tipoPlato }),
}));
