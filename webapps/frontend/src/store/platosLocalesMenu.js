import { create } from "zustand";

export const usePlatosLocalesMenu = create((set) => ({
  nombre: "",
  descripcion: "",
  fechaPublicacion: "",
  locales: [],
  platos: [],
  setNombre: (nombre) => set({ nombre }),
  setDescripcion: (descripcion) => set({ descripcion }),
  setFechaPublicacion: (fechaPublicacion) => set({ fechaPublicacion }),
  addLocal: (local) => set((state) => ({ locales: [...state.locales, local] })),
  addPlato: (plato) => set((state) => ({ platos: [...state.platos, plato] })),
  removeLocal: (id) => set((state) => ({ locales: state.locales.filter((local) => local.id !== id) })),
  removePlato: (id) => set((state) => ({ plato: state.platos.filter((plato) => plato.id !== id) })),
  reset: () => set({ nombre: "", descripcion: "", fechaPublicacion: "", locales: [], platos: [] }),
}));
