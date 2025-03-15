# JavascriptPelegrina-75790
🛒 Simulador de Tienda Online

Este es un simulador de tienda online desarrollado en **HTML, CSS y JavaScript**. Permite visualizar una lista de productos, agregar productos al carrito y ver el total de la compra. La interacción se realiza principalmente a través de la **consola del navegador y cuadros de diálogo (`prompt`, `alert`, `confirm`)**, cumpliendo con las consignas del proyecto.

---

## 📌 **Estructura del Proyecto**
El proyecto consta de los siguientes archivos:

- **index.html** → Contiene la estructura de la página.
- **js/simulador.js** → Contiene la lógica del simulador.
- **README.md** → Explica el funcionamiento del simulador.

---

## 🎯 **Objetivo del Simulador**
El objetivo del simulador es permitir al usuario:

1. **Ver la lista de productos** disponibles en la tienda.
2. **Seleccionar productos** por su ID utilizando `prompt()`.
3. **Agregar productos al carrito**, con validaciones para evitar entradas incorrectas.
4. **Mostrar el contenido del carrito** en la consola y en la interfaz.
5. **Calcular y mostrar el total** de la compra.

---

## 🔹 **Cómo Funciona**
### **1️⃣ Mostrar Productos**
Al cargar la página, la lista de productos se muestra en:
- La **consola del navegador** (`console.log`).
- La **interfaz del usuario** dentro de la sección *Lista de Productos*.

### **2️⃣ Agregar Productos al Carrito**
- Se solicita al usuario el ID de un producto mediante `prompt()`.
- Si la entrada no es válida (`vacío`, `texto`, `ID inexistente`), se muestra una **alerta de error**.
- Si el ID es correcto, el producto se agrega al carrito y se muestra un mensaje de confirmación con `alert()`.

### **3️⃣ Confirmar Continuación**
Después de cada compra:
- Se pregunta con `confirm()` si el usuario desea agregar otro producto.
- Si elige *Aceptar*, el proceso se repite.
- Si elige *Cancelar*, se muestra el carrito final.

### **4️⃣ Mostrar Carrito**
- Si el carrito está vacío, se muestra un mensaje en la consola y la interfaz.
- Si hay productos, se listan en la **consola** y en la **interfaz**, junto con el **total a pagar**.
