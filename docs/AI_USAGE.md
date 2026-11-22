# Registro de uso de Inteligencia Artificial

## Interacción 1: Análisis inicial del reto técnico

- **Fecha:** 19/11/2026
- **Hora:** 12:00 p. m.
- **Herramienta:** ChatGPT
- **Contexto:** Análisis inicial del reto técnico de Instaleap para la vacante de Aprendiz / Practicante Frontend Developer.

# Objetivo

Analizar el documento del reto técnico para comprender sus requerimientos, identificar los conocimientos necesarios, establecer una arquitectura inicial y organizar un plan de desarrollo.

# Prompt utilizado

> Entonces empecemos contigo como el primer promp.

Como contexto adicional, se proporcionó el documento PDF original del reto técnico y se solicitó seguir una ruta de trabajo, dando inicio al proyecto con este prompt, además de crear la estructura de la documentación de uso de IA.

# Qué se aceptó y por qué

- La organización de los requisitos técnicos, funcionales y visuales, ya que permite comprender el alcance del reto antes de comenzar a desarrollar.
- La identificación de los componentes que deben desarrollarse, facilitando la división del trabajo.
- El análisis de la integración con la API de Rick and Morty, necesario para comprender el origen y manejo de los datos.
- La identificación de los conocimientos necesarios de Angular, TypeScript y Tailwind CSS, permitiendo establecer una ruta de aprendizaje y preparación.
- La propuesta de separar la librería de componentes UI y la aplicación demo, con el propósito de mantener una estructura organizada y facilitar la reutilización.
- La organización del desarrollo por fases, permitiendo avanzar de manera ordenada y revisar los resultados progresivamente.
- La propuesta de documentar el desarrollo y el uso de IA, para mantener un registro transparente de las decisiones tomadas.

# Qué se rechazó o modificó

- No se descartaron explícitamente propuestas durante esta interacción.

---

## Interacción 2: Creación de una estructura para las bitácoras

- **Fecha:** 19/11/2026
- **Hora:** 12:30 p. m.
- **Herramienta:** ChatGPT

# Objetivo

Crear una estructura de documentación sencilla, comprensible y reutilizable para registrar el proceso de desarrollo, incluyendo decisiones, dificultades y soluciones.

# Prompt utilizado

> crea una estructura visualmente facil de entender para la documentación del proceso de desarrollo siguiendo estas directrices: Este archivo documenta el proceso de desarrollo. Documentar brevemente las decisiones tomadas, los retos encontrados y cómo se resolvieron.

### Qué se aceptó y por qué

- La propuesta de una estructura para las bitácoras, ya que permite registrar de manera organizada los avances del proyecto.
- La inclusión de ejemplos para comprender cómo diligenciar la documentación.
- La separación de la información en apartados, facilitando su lectura y seguimiento durante el desarrollo.

### Qué se rechazó o modificó

- Se decidió simplificar la estructura propuesta, debido a que algunos apartados podían resultar demasiado complejos o innecesarios para el propósito de la documentación.
- Se planteó reemplazar los datos de ejemplo por información real del desarrollo, evitando conservar contenido que no correspondiera al proyecto.


---

## Interacción 3: Configuración de archivos en el proyecto

- **Fecha:** 19/11/2026
- **Hora:** 1:20 p. m.
- **Herramienta:** ChatGPT

### Objetivo

Comprender cómo configurar los archivos esenciales del proyecto, siguiendo la planificación establecida, e identificar la finalidad de cada configuración y su impacto en el desarrollo.

### Prompt utilizado

> Explicame como configurar los diferentes archivos en nuestro plan de trabajo.

### Qué se aceptó y por qué

- La explicación de las configuraciones propuestas para los archivos del proyecto, con el propósito de comprender su funcionamiento y utilidad.
- La explicación del impacto de cada configuración, permitiendo identificar cómo afecta la organización y el desarrollo del proyecto.
- La orientación para realizar los cambios de manera progresiva, facilitando la revisión de cada archivo antes de modificarlo.

### Qué se rechazó o modificó

- No se rechazaron explícitamente propuestas durante esta interacción.
- Las configuraciones se revisaron antes de incorporarse, con el propósito de verificar que correspondieran al plan de trabajo y a las necesidades del proyecto.

## Interacción 4: Configuración de autenticación y sincronización con GitHub

- **Fecha:** 19/11/2026
- **Hora:** 8:50 p. m. 
- **Herramienta:** ChatGPT

### Objetivo

Solucionar el problema de autenticación presentado al intentar subir los commits locales del proyecto al repositorio remoto de GitHub, configurando el acceso necesario para permitir la sincronización y verificar que los cambios se publicaran correctamente.

### Prompt utilizado

Ayúdame a solucionar el problema de autenticación al intentar subir el proyecto a github mediante git push.

### Qué se aceptó y por qué

- La orientación para realizar el proceso de autenticación de GitHub mediante el navegador, permitiendo autorizar el acceso al repositorio.
- La solución que permitió sincronizar la rama local `main` con la rama remota `main`, estableciendo el seguimiento (`tracking`) entre ambas.
- La validación de la sincronización mediante un segundo `git push`, que confirmó que no había cambios pendientes de subir.

### Qué se rechazó o modificó

- Se rechazo una primera idea de verificar las credenciasles de windows ya que en estas no se encontraba el problema.
- Se solucionó el problema de autenticación que inicialmente impedía realizar el `git push`, permitiendo publicar los commits existentes en el repositorio remoto.

## Interacción 5: Reorganizacion y mejora de la interfaz en el archivo app.html

- **Fecha:** 20/11/2026
- **Hora:** 6:40 p. m. 
- **Herramienta:** ChatGPT

### Objetivo

El objetivo es transformar la interfaz actual en una aplicación más profesional, intuitiva y coherente 

### Prompt utilizado

Reorganiza el codigo para que quede mejor estructurado, limpio y agradable a la vista.

### Qué se aceptó y por qué

- La propuesta de reorganizar la interfaz para mejorar su estructura y apariencia.
- Mantener los componentes de ui-lib y las funcionalidades existentes.
- Mejorar la distribución, espaciado y diseño responsive sin alterar la lógica.

### Qué se rechazó o modificó

- No modificar la lógica de negocio ni la gestión de estado mediante Signals.
- No alterar los bindings, eventos, outputs ni inputs existentes.
- No eliminar ni modificar las funcionalidades de selección de recursos, filtros, carga de datos, visualización de registros o eliminación.
- No modificar otros archivos o componentes sin que sea necesario y justificado.
- No reemplazar la biblioteca de componentes existente por elementos que dupliquen su funcionalidad.

---

## Interacción 6: Corrección del fondo rojo inesperado en las filas de ui-table

- **Fecha:** 20/11/2026
- **Hora:** 9:56 p. m. (aprox.)
- **Herramienta:** ChatGPT

### Objetivo

Identificar y solucionar el problema visual que provocaba que todas las filas de la tabla de `ui-table` aparecieran con un fondo rojo, a pesar de que el código fuente ya había sido modificado para eliminar dicho estilo.

### Prompt utilizado

"siguen saliendo todas los datos de color rojo"

### Qué se aceptó y por qué

- Revisar el HTML de `ui-table` para identificar si el color rojo estaba aplicado directamente a las filas.
- Comprobar los estilos globales y la configuración de Tailwind para descartar posibles conflictos.
- Utilizar las herramientas de búsqueda de VS Code y PowerShell para localizar la clase `bg-[#E85D75]` en los archivos del proyecto.
- Inspeccionar el HTML renderizado desde el navegador mediante DevTools para comprobar qué clases estaba utilizando realmente la fila.
- Reconstruir la librería `ui-lib` mediante `ng build ui-lib`, ya que la aplicación estaba utilizando una versión compilada desactualizada.
- Conservar el color rojo del botón Eliminar, puesto que este color corresponde a su variante visual y no debía eliminarse.

### Qué se rechazó o modificó

- No eliminar ni modificar el color rojo del botón Eliminar.
- No modificar la lógica de negocio, la gestión de estado mediante Signals ni los eventos de la tabla.
- No alterar los estilos de los demás componentes de la librería sin justificación.
- No continuar modificando clases CSS o Tailwind una vez identificado que el problema estaba relacionado con la versión compilada de la librería.
- Se descartaron las modificaciones innecesarias a la configuración global de estilos y Tailwind.

### Resultado

El problema se solucionó al reconstruir la librería `ui-lib` con `ng build ui-lib`, actualizando así la versión compilada que estaba utilizando la aplicación. Las filas recuperaron su apariencia original y el botón Eliminar conservó su estilo rojo.

Esta interacción permitió identificar la importancia de reconstruir una librería Angular cuando se realizan cambios en sus archivos fuente y la aplicación consume su versión compilada.

## Interacción 7: Documentación del proyecto mediante la actualización del README

- **Fecha:** 21/11/2026
- **Hora:**  Aproximadamente 4:05 p. m.
- **Herramienta:** ChatGPT

### Objetivo

Reemplazar el README generado inicialmente por Angular CLI por una documentación profesional y estructurada que describiera el proyecto Rick and Morty Explorer, su arquitectura, los componentes de la librería UI, las funcionalidades implementadas, las tecnologías utilizadas y las instrucciones necesarias para instalar, ejecutar, compilar y probar el proyecto.

### Prompt utilizado

"ayudame, a actualizar el readme.md con todo lo trabajado en este proyecto"

### Qué se aceptó y por qué

- Elaborar un README en inglés, con una estructura profesional adecuada para la presentación del reto técnico de Instaleap.
- Documentar la arquitectura del workspace, diferenciando `ui-lib` y `demo-app`.
- Describir los cuatro componentes reutilizables implementados: `ui-button`, `ui-card`, `ui-select` y `ui-table`.
- Documentar las funcionalidades de la aplicación, incluyendo exploración de personajes, episodios y ubicaciones, filtrado por estado, paginación, estados de carga, error y vacío, modal de detalles y eliminación local de registros.
- Explicar las decisiones técnicas relacionadas con Angular Standalone Components, `ChangeDetectionStrategy.OnPush`, Signals, tipado estricto y separación de responsabilidades.
- Incluir instrucciones de instalación, ejecución de la aplicación, compilación de la librería y la aplicación demo, y ejecución de pruebas.
- Incorporar enlaces a Angular, Angular CLI, Rick and Morty API y Tailwind CSS como recursos de referencia.

### Qué se rechazó o modificó

- Se descartó conservar el README predeterminado generado por Angular CLI, debido a que contenía información genérica que no describía el proyecto desarrollado.
- Se evitó documentar funcionalidades que no estuvieran implementadas o verificadas en el proyecto.
- No se modificó el código fuente, la lógica de negocio, los componentes ni la configuración del workspace durante la elaboración de la documentación.
- Las instrucciones y descripciones se adaptaron a la estructura real del repositorio y a las funcionalidades desarrolladas.

### Resultado

Se elaboró una nueva propuesta de README en inglés, orientada a documentar de manera clara y profesional el proyecto Rick and Morty Explorer. El documento describe su arquitectura, los componentes de la librería UI, las funcionalidades de la aplicación demo, las decisiones técnicas y los comandos para instalar, ejecutar, compilar y probar el proyecto.

La propuesta quedó preparada para reemplazar el contenido genérico existente en `README.md`, mejorando la presentación del repositorio y facilitando su comprensión por parte de otros desarrolladores o evaluadores del reto técnico.