# Plan de Desarrollo — Reto Técnico Instaleap

# 1. Objetivo del proyecto

Desarrollar una librería de componentes UI reutilizable en Angular y una aplicación demo que la consuma, cumpliendo los requisitos técnicos, funcionales y visuales establecidos en el documento de la prueba técnica de Instaleap.

El desarrollo se realizará de manera progresiva, priorizando la comprensión de las tecnologías, la calidad del código, la separación de responsabilidades y la capacidad de explicar las decisiones tomadas.

# 2. Alcance del proyecto

# Librería UI (`ui-lib`)

Desarrollar los siguientes componentes reutilizables:

- `ui-button`: botón configurable con variantes, tamaños, estados y eventos.
- `ui-card`: contenedor reutilizable con título, subtítulo, estilos y proyección de contenido.
- `ui-select`: selector configurable con opciones, estado de carga y selección bidireccional.
- `ui-table`: tabla genérica con columnas configurables, estados y emisión de acciones.

# Aplicación demo (`demo-app`)

Desarrollar una aplicación que permita explorar los recursos de Rick and Morty API:

- Characters.
- Episodes.
- Locations.

La aplicación debe integrar los componentes de la librería, permitir filtrar los recursos, visualizar registros y consultar sus detalles.

# 3. Tecnologías requeridas

| Tecnología | Uso |

| Angular 17+ | Framework principal |
| TypeScript | Lenguaje de programación |
| Tailwind CSS v3 | Estilos de la aplicación |
| Angular Signals | Gestión reactiva de estados |
| Standalone Components | Arquitectura de componentes |
| Git | Control de versiones |
| Rick and Morty API | Fuente de datos de la demo |

# 4. Plan de desarrollo

# Fase 0 — Análisis y planificación

- [x] Revisar el documento original del reto técnico.
- [x] Identificar los requisitos obligatorios.
- [x] Identificar los componentes requeridos.
- [x] Identificar las tecnologías y convenciones.
- [x] Organizar el desarrollo por fases.
- [x] Aprobar el plan de desarrollo.

**Resultado esperado:** Tener claridad sobre el alcance del proyecto, las prioridades y el orden de implementación.

# Fase 1 — Preparación del entorno

- [x] Verificar Node.js y npm.
- [x] Verificar Angular CLI.
- [x] Verificar Git.
- [x] Preparar Visual Studio Code.
- [x] Crear el Angular workspace.
- [x] Configurar los proyectos `ui-lib` y `demo-app`.
- [x] Configurar TypeScript strict.
- [x] Configurar Tailwind CSS v3.
- [x] Verificar que ambos proyectos puedan ejecutarse correctamente.

**Conceptos a comprender:**

- Node.js y npm.
- Angular CLI.
- Angular workspace.
- Angular projects.
- Configuración de Angular.
- TypeScript strict.
- Tailwind CSS.

**Resultado esperado:** Workspace funcional con los dos proyectos correctamente configurados.

# Fase 2 — Desarrollo de la librería UI

Los componentes se desarrollarán de manera progresiva. Cada componente tendrá una etapa de estudio, implementación, prueba y revisión.

# 2.1 — ui-button

- [x] Comprender los componentes standalone.
- [x] Comprender `input()` y `output()`.
- [x] Comprender `ChangeDetectionStrategy.OnPush`.
- [x] Definir los tipos necesarios.
- [x] Implementar el componente.
- [x] Implementar variantes y tamaños.
- [x] Implementar los estados disabled y loading.
- [x] Implementar el evento clicked.
- [x] Verificar su comportamiento.

**Resultado esperado:** Botón reutilizable, correctamente tipado y funcional.

# 2.2 — ui-card

- [x] Comprender la proyección de contenido mediante `ng-content`.
- [x] Comprender la estructura de un componente reutilizable.
- [x] Implementar title y subtitle.
- [x] Implementar los estilos de elevation.
- [x] Implementar headerClicked.
- [x] Verificar la proyección de contenido.

**Resultado esperado:** Card reutilizable con contenido dinámico y evento de encabezado.

# 2.3 — ui-select

- [x] Comprender el funcionamiento de `model()`.
- [x] Comprender el binding bidireccional.
- [x] Definir `SelectOption`.
- [x] Implementar las opciones.
- [x] Implementar label y placeholder.
- [x] Implementar loading y disabled.
- [x] Implementar selectionChange.
- [x] Verificar el comportamiento del selector.

**Resultado esperado:** Selector reutilizable que permita gestionar selección y emitir la opción elegida.

# 2.4 — ui-table

- [x] Comprender los tipos genéricos en TypeScript.
- [x] Definir `TableColumn`.
- [x] Definir `TableAction`.
- [x] Implementar una tabla genérica.
- [x] Implementar loading.
- [x] Implementar emptyMessage.
- [x] Implementar errorMessage.
- [x] Implementar las acciones view y delete.
- [x] Verificar el comportamiento con diferentes estructuras de datos.

**Resultado esperado:** Tabla genérica que no dependa de un recurso específico.

# 2.5 — Exportación de la librería

- [x] Revisar `public-api.ts`.
- [x] Exportar los componentes.
- [x] Exportar los tipos públicos.
- [x] Verificar que la demo pueda consumir la librería sin importaciones internas.

**Resultado esperado:** Librería organizada y consumible desde la aplicación demo.

# Fase 3 — Integración con Rick and Morty API

# 3.1 — Investigación de la API

- [x] Revisar la documentación oficial.
- [x] Comprender los endpoints de Characters, Episodes y Locations.
- [x] Comprender la estructura de las respuestas.
- [x] Identificar los parámetros de filtrado.
- [x] Identificar los tipos de datos necesarios.

# 3.2 — Modelos y tipado

- [x] Definir la interfaz Character.
- [x] Definir la interfaz Episode.
- [x] Definir la interfaz Location.
- [x] Definir los tipos necesarios para las respuestas de la API.
- [x] Evitar el uso de any.

# 3.3 — Servicios

- [x] Comprender los servicios de Angular.
- [x] Comprender la inyección de dependencias.
- [x] Comprender HttpClient.
- [x] Implementar el servicio de consumo de API.
- [x] Implementar la gestión de recursos.
- [x] Implementar el filtrado por status.
- [x] Gestionar errores de las peticiones.

**Resultado esperado:** Servicios capaces de consultar los recursos de la API con tipado adecuado.

# Fase 4 — Gestión de estado e integración de la demo

- [x] Comprender Signals.
- [x] Comprender signal, computed y los patrones de actualización.
- [x] Crear el servicio de estado de la aplicación.
- [x] Gestionar el recurso activo.
- [x] Gestionar el filtro.
- [x] Gestionar los registros.
- [x] Gestionar loading.
- [x] Gestionar error.
- [x] Integrar ui-select.
- [x] Integrar ui-table.
- [x] Integrar ui-button.
- [x] Integrar ui-card.
- [x] Implementar el cambio de recurso.
- [x] Implementar el reinicio del filtro.
- [x] Implementar el filtrado por status.
- [x] Implementar la visualización de detalles.
- [x] Implementar la emisión de la acción delete.

**Resultado esperado:** Flujo principal de la aplicación funcionando con los componentes de la librería y la API.

# Fase 5 — Diseño visual y experiencia de usuario

- [x] Definir la identidad visual inspirada en Rick and Morty.
- [x] Definir paleta de colores.
- [x] Definir tipografía.
- [x] Definir espaciados.
- [x] Diseñar la distribución general de la aplicación.
- [x] Implementar responsive design.
- [x] Implementar estados hover.
- [x] Implementar estados focus.
- [x] Implementar estados disabled.
- [x] Implementar skeleton loading.
- [x] Implementar empty state.
- [x] Implementar error state.
- [x] Implementar modal de detalles.
- [x] Implementar feedback para las acciones.
- [x] Revisar la experiencia en mobile y desktop.

**Resultado esperado:** Aplicación visualmente coherente, responsive y con estados de interacción definidos.

# Fase 6 — Pruebas y validación

- [x] Verificar los cuatro componentes.
- [x] Verificar el tipado estricto.
- [x] Verificar que no exista uso de any.
- [x] Verificar la integración de la librería.
- [x] Verificar el consumo de la API.
- [x] Verificar el cambio de recursos.
- [x] Verificar el filtro.
- [x] Verificar el estado loading.
- [x] Verificar el estado error.
- [x] Verificar el estado empty.
- [x] Verificar el modal.
- [x] Verificar la emisión de delete.
- [x] Verificar el responsive design.
- [x] Revisar la consola.
- [x] Revisar posibles errores de compilación.

**Resultado esperado:** Aplicación funcional y validada frente a los requisitos del reto técnico.

# Fase 7 — Documentación y entrega

# Documentación

- [x] Crear README.md.
- [x] Documentar la arquitectura.
- [x] Documentar instalación y ejecución.
- [x] Documentar la API de los componentes.
- [x] Documentar ejemplos de uso.
- [x] Documentar decisiones de diseño.
- [x] Revisar JSDoc de los componentes.
- [x] Actualizar DEVELOPMENT_LOG.md.
- [x] Actualizar AI_USAGE.md.

# Git y repositorio

- [x] Revisar el historial de commits.
- [x] Revisar la estructura del repositorio.
- [x] Verificar que los archivos necesarios estén incluidos.
- [x] Verificar que no se suban archivos innecesarios.
- [x] Verificar que el repositorio pueda clonarse y ejecutarse.

# Entrega

- [x] Preparar el repositorio de GitHub.
- [x] Preparar el video explicativo.
- [x] Explicar la arquitectura.
- [x] Explicar los componentes.
- [x] Explicar las decisiones técnicas.
- [x] Verificar las instrucciones finales de entrega.

**Resultado esperado:** Proyecto documentado, funcional y listo para ser presentado.

# 5. Extras

Los siguientes elementos no son prioritarios y solo se implementarán si los requisitos obligatorios están completos y existe tiempo disponible.

- [ ] Pruebas unitarias con Jest o Vitest.
- [ ] Storybook.
- [ ] Publicación en npm o GitHub Packages.
- [x] Despliegue de la demo en Vercel, Netlify o GitHub Pages.

# 6. Metodología de trabajo

Cada etapa del desarrollo seguirá el siguiente proceso:

1. **Estudio:** Comprender los conceptos y tecnologías necesarios.
2. **Planificación:** Definir qué se va a implementar y cómo.
3. **Implementación:** Desarrollar la funcionalidad.
4. **Revisión:** Analizar el código y las decisiones tomadas.
5. **Validación:** Comprobar el comportamiento esperado.
6. **Documentación:** Registrar avances, decisiones y dificultades.
7. **Git:** Registrar los cambios mediante commits descriptivos.

No se avanzará a la siguiente etapa sin comprender y revisar los resultados de la etapa actual.

# 7. Criterios generales de cumplimiento

- Cumplir los requisitos obligatorios del documento original.
- Mantener la separación entre la librería y la aplicación demo.
- Utilizar las convenciones modernas de Angular requeridas.
- Mantener el tipado estricto.
- Evitar el uso de any.
- Mantener los componentes desacoplados y reutilizables.
- Mantener la lógica de API y estado fuera de los componentes visuales.
- Validar el código antes de incorporarlo.
- Poder explicar las decisiones y el funcionamiento del proyecto.
- Mantener la documentación actualizada durante el desarrollo.