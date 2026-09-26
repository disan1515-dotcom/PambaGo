const STORAGE_MENU = "pambago_menu_del_dia";
const STORAGE_PEDIDOS = "pambago_pedidos";

const menuPorDefecto = {
  restaurante: "La Cocina de María",
  fecha: new Date().toISOString().slice(0, 10),
  precio: 4.5,
  sopa: "Locro de papa",
  fuertes: [
    { nombre: "Seco de pollo", porciones: 20 },
    { nombre: "Encebollado", porciones: 15 },
    { nombre: "Menestrón vegetariano", porciones: 10 },
  ],
  bebida: "Jugo de naranja o agua",
};

function leerMenu() {
  try {
    const raw = localStorage.getItem(STORAGE_MENU);
    return raw ? JSON.parse(raw) : { ...menuPorDefecto };
  } catch {
    return { ...menuPorDefecto };
  }
}

function guardarMenu(menu) {
  localStorage.setItem(STORAGE_MENU, JSON.stringify(menu));
}

function leerPedidos() {
  try {
    return JSON.parse(localStorage.getItem(STORAGE_PEDIDOS) || "[]");
  } catch {
    return [];
  }
}

function guardarPedidos(pedidos) {
  localStorage.setItem(STORAGE_PEDIDOS, JSON.stringify(pedidos));
}

function pedidosDeHoy() {
  const hoy = new Date().toISOString().slice(0, 10);
  return leerPedidos().filter((p) => p.fecha === hoy);
}
