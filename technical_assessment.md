# 💼 Prueba Técnica: Backend Senior / Arquitecto de Software

**Compañía:** FinWallet (Startup Fintech)
**Rol:** Ingeniero Backend Senior
**Tiempo estimado:** A tu ritmo (Para propósitos de esta prueba, debes presentar tu diseño y estrategia paso a paso).

---

## 🏢 Contexto del Negocio

**FinWallet** es una billetera virtual que permite a los usuarios depositar dinero y transferirlo entre sí de forma inmediata. Debido a una reciente campaña de marketing masiva, nuestra base de usuarios ha crecido exponencialmente. 

Actualmente procesamos **10,000 transacciones por minuto** en horas pico. Nuestro sistema monolítico actual está colapsando, presentando inconsistencias en los saldos (dinero fantasma) y caídas constantes.

Tu objetivo como Arquitecto de Software es diseñar e implementar (a nivel teórico o código base) la nueva versión de nuestro motor transaccional.

---

## 🎯 Requerimientos Core (Funcionalidades)

### 1. Transferencias Peer-to-Peer (P2P)
Los usuarios deben poder enviar dinero a otros usuarios de la plataforma usando su correo electrónico.
*   **Regla de Negocio A:** Un usuario no puede transferir más saldo del que tiene disponible.
*   **Regla de Negocio B:** El saldo nunca debe quedar en números negativos, incluso si el usuario hace clic en "Transferir" 50 veces en el mismo milisegundo (Concurrencia extrema).
*   **Regla de Negocio C:** El dinero descontado de un usuario debe llegar exactamente al destinatario. No se puede crear ni destruir dinero durante fallos del sistema (Consistencia estricta).

### 2. Recargas (Depósitos mediante Banco Externo)
Los usuarios pueden recargar su saldo conectando su tarjeta de débito.
*   **Regla de Negocio A:** Utilizamos una pasarela de pagos de terceros (Ej: "BankAPI").
*   **Problema de la Vida Real:** BankAPI es un sistema Legacy; responde muy lento (a veces tarda hasta 25 segundos en confirmar un depósito) y tiene un 20% de probabilidad de fallar por "Error de Conexión".
*   **Requisito:** Nuestro sistema debe ser capaz de procesar recargas sin que nuestra API quede bloqueada esperando al banco y sin cobrarle dos veces al usuario si este refresca la página desesperadamente.

### 3. Historial de Transacciones (Feed)
Los usuarios quieren ver su historial de movimientos.
*   **Regla de Negocio:** Es la pantalla más visitada. El 90% del tráfico de la app es lectura del historial, y los usuarios esperan que cargue en menos de `50ms`.

---

## 🛠️ Restricciones y Entregables

No hay restricciones estrictas sobre qué arquitectura, patrones o bases de datos usar. Tienes libertad absoluta para elegir las tecnologías y el diseño. 

**Como evaluador de esta prueba (Tech Lead), calificaré tu propuesta con base en los siguientes puntos:**

1.  **Diseño del Sistema (Arquitectura):**
    *   ¿Cómo vas a estructurar los servicios? (Monolito modular, Microservicios, Serverless, etc).
    *   ¿Cómo fluyen los datos en el caso de las recargas con el banco externo lento?
2.  **Modelado de Base de Datos:**
    *   Estructura general para asegurar que las transacciones financieras sean seguras y el historial cargue rápido.
3.  **Manejo de Concurrencia y Resiliencia:**
    *   ¿Qué estrategias / tecnologías específicas aplicarás para el problema del doble-clic y el banco lento?
4.  **Elección Tecnológica:**
    *   ¿Qué herramientas usarías en el ecosistema (Ej. NestJS, Postgres, Redis, Kafka, RabbitMQ, etc.) y **por qué**?

---

### 📝 Instrucciones para el Candidato

Inicia analizando los problemas uno por uno. Cuéntame tu enfoque arquitectónico, qué patrones vas a implementar, qué herramientas vas a utilizar y cómo solucionarías los cuellos de botella mencionados en el negocio.

¡Mucho éxito, Arquitecto! Quedo a la espera de tu propuesta.
