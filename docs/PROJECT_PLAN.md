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

- [ ] Comprender los componentes standalone.
- [ ] Comprender `input()` y `output()`.
- [ ] Comprender `ChangeDetectionStrategy.OnPush`.
- [ ] Definir los tipos necesarios.
- [ ] Implementar el componente.
- [ ] Implementar variantes y tamaños.
- [ ] Implementar los estados disabled y loading.
- [ ] Implementar el evento clicked.
- [ ] Verificar su comportamiento.

**Resultado esperado:** Botón reutilizable, correctamente tipado y funcional.

# 2.2 — ui-card

- [ ] Comprender la proyección de contenido mediante `ng-content`.
- [ ] Comprender la estructura de un componente reutilizable.
- [ ] Implementar title y subtitle.
- [ ] Implementar los estilos de elevation.
- [ ] Implementar headerClicked.
- [ ] Verificar la proyección de contenido.

**Resultado esperado:** Card reutilizable con contenido dinámico y evento de encabezado.

# 2.3 — ui-select

- [ ] Comprender el funcionamiento de `model()`.
- [ ] Comprender el binding bidireccional.
- [ ] Definir `SelectOption`.
- [ ] Implementar las opciones.
- [ ] Implementar label y placeholder.
- [ ] Implementar loading y disabled.
- [ ] Implementar selectionChange.
- [ ] Verificar el comportamiento del selector.

**Resultado esperado:** Selector reutilizable que permita gestionar selección y emitir la opción elegida.

# 2.4 — ui-table

- [ ] Comprender los tipos genéricos en TypeScript.
- [ ] Definir `TableColumn`.
- [ ] Definir `TableAction`.
- [ ] Implementar una tabla genérica.
- [ ] Implementar loading.
- [ ] Implementar emptyMessage.
- [ ] Implementar errorMessage.
- [ ] Implementar las acciones view y delete.
- [ ] Verificar el comportamiento con diferentes estructuras de datos.

**Resultado esperado:** Tabla genérica que no dependa de un recurso específico.

# 2.5 — Exportación de la librería

- [ ] Revisar `public-api.ts`.
- [ ] Exportar los componentes.
- [ ] Exportar los tipos públicos.
- [ ] Verificar que la demo pueda consumir la librería sin importaciones internas.

**Resultado esperado:** Librería organizada y consumible desde la aplicación demo.

# Fase 3 — Integración con Rick and Morty API

# 3.1 — Investigación de la API

- [ ] Revisar la documentación oficial.
- [ ] Comprender los endpoints de Characters, Episodes y Locations.
- [ ] Comprender la estructura de las respuestas.
- [ ] Identificar los parámetros de filtrado.
- [ ] Identificar los tipos de datos necesarios.

# 3.2 — Modelos y tipado

- [ ] Definir la interfaz Character.
- [ ] Definir la interfaz Episode.
- [ ] Definir la interfaz Location.
- [ ] Definir los tipos necesarios para las respuestas de la API.
- [ ] Evitar el uso de any.

# 3.3 — Servicios

- [ ] Comprender los servicios de Angular.
- [ ] Comprender la inyección de dependencias.
- [ ] Comprender HttpClient.
- [ ] Implementar el servicio de consumo de API.
- [ ] Implementar la gestión de recursos.
- [ ] Implementar el filtrado por status.
- [ ] Gestionar errores de las peticiones.

**Resultado esperado:** Servicios capaces de consultar los recursos de la API con tipado adecuado.

# Fase 4 — Gestión de estado e integración de la demo

- [ ] Comprender Signals.
- [ ] Comprender signal, computed y los patrones de actualización.
- [ ] Crear el servicio de estado de la aplicación.
- [ ] Gestionar el recurso activo.
- [ ] Gestionar el filtro.
- [ ] Gestionar los registros.
- [ ] Gestionar loading.
- [ ] Gestionar error.
- [ ] Integrar ui-select.
- [ ] Integrar ui-table.
- [ ] Integrar ui-button.
- [ ] Integrar ui-card.
- [ ] Implementar el cambio de recurso.
- [ ] Implementar el reinicio del filtro.
- [ ] Implementar el filtrado por status.
- [ ] Implementar la visualización de detalles.
- [ ] Implementar la emisión de la acción delete.

**Resultado esperado:** Flujo principal de la aplicación funcionando con los componentes de la librería y la API.

# Fase 5 — Diseño visual y experiencia de usuario

- [ ] Definir la identidad visual inspirada en Rick and Morty.
- [ ] Definir paleta de colores.
- [ ] Definir tipografía.
- [ ] Definir espaciados.
- [ ] Diseñar la distribución general de la aplicación.
- [ ] Implementar responsive design.
- [ ] Implementar estados hover.
- [ ] Implementar estados focus.
- [ ] Implementar estados disabled.
- [ ] Implementar skeleton loading.
- [ ] Implementar empty state.
- [ ] Implementar error state.
- [ ] Implementar modal de detalles.
- [ ] Implementar feedback para las acciones.
- [ ] Revisar la experiencia en mobile y desktop.

**Resultado esperado:** Aplicación visualmente coherente, responsive y con estados de interacción definidos.

# Fase 6 — Pruebas y validación

- [ ] Verificar los cuatro componentes.
- [ ] Verificar el tipado estricto.
- [ ] Verificar que no exista uso de any.
- [ ] Verificar la integración de la librería.
- [ ] Verificar el consumo de la API.
- [ ] Verificar el cambio de recursos.
- [ ] Verificar el filtro.
- [ ] Verificar el estado loading.
- [ ] Verificar el estado error.
- [ ] Verificar el estado empty.
- [ ] Verificar el modal.
- [ ] Verificar la emisión de delete.
- [ ] Verificar el responsive design.
- [ ] Revisar la consola.
- [ ] Revisar posibles errores de compilación.

**Resultado esperado:** Aplicación funcional y validada frente a los requisitos del reto técnico.

# Fase 7 — Documentación y entrega

# Documentación

- [ ] Crear README.md.
- [ ] Documentar la arquitectura.
- [ ] Documentar instalación y ejecución.
- [ ] Documentar la API de los componentes.
- [ ] Documentar ejemplos de uso.
- [ ] Documentar decisiones de diseño.
- [ ] Revisar JSDoc de los componentes.
- [ ] Actualizar DEVELOPMENT_LOG.md.
- [ ] Actualizar AI_USAGE.md.

# Git y repositorio

- [ ] Revisar el historial de commits.
- [ ] Revisar la estructura del repositorio.
- [ ] Verificar que los archivos necesarios estén incluidos.
- [ ] Verificar que no se suban archivos innecesarios.
- [ ] Verificar que el repositorio pueda clonarse y ejecutarse.

# Entrega

- [ ] Preparar el repositorio de GitHub.
- [ ] Preparar el video explicativo.
- [ ] Explicar la arquitectura.
- [ ] Explicar los componentes.
- [ ] Explicar las decisiones técnicas.
- [ ] Verificar las instrucciones finales de entrega.

**Resultado esperado:** Proyecto documentado, funcional y listo para ser presentado.

# 5. Extras

Los siguientes elementos no son prioritarios y solo se implementarán si los requisitos obligatorios están completos y existe tiempo disponible.

- [ ] Pruebas unitarias con Jest o Vitest.
- [ ] Storybook.
- [ ] Publicación en npm o GitHub Packages.
- [ ] Despliegue de la demo en Vercel, Netlify o GitHub Pages.

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