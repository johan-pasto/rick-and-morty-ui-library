## bitacora 1 — Análisis y planificación

**Fecha:** 19/11/2026

# Actividades
- Revisión del reto técnico.
- Organización del plan de desarrollo.

# Decisiones
- Desarrollo dividido por fases.
- Documentación desde el inicio.

# Problemas y soluciones
- No se presentaron problemas técnicos.

# Resultado
- Plan de desarrollo aprobado.

---

## bitacora 2 — Preparación de espacio de trabajo

**Fecha:** 19/11/2026

# Actividades
- preparar el espacio del trabajo como visual y sus dependencias.
- verificar versiones de dependencias.
- creacion de angularWorkspace.

# Decisiones
- usar versiones de las dependencias instaladas previamente para anteriores proyectos.
- instalar dependecias faltantes.

# Problemas y soluciones
- Angular no se encontraba instalada previamente, la solucion fue instalar angular con el siguiente comando: npm install -g @angular/cli

# Resultado
- Se verifico e instalo dependencias faltantes, y el espacio de trabajo ya se encuentra listo para trabajar.
- Se creo el AngularWorkspace despues de confirmar que todas las dependencias estaban listas.
---

## bitacora 3 — Creacion de la libreria ui-lib

**Fecha:** 19/11/2026

# Actividades
- Iniciar con la creación de la libreria para los componentes.
- verificar versiones de dependencias.

# Decisiones
- Iniciar la creación de la libreria despues de haber verificado que todo este funcionando correctamente.


# Problemas y soluciones
- sin ningun problema.

# Resultado
- Se creo la libreria sin ningun problema o error en el codigo.

---

## bitacora 4 — Creacion de la aplicacion demo-app y primer commit

**Fecha:** 19/11/2026

# Actividades
- Iniciar con la creación de la aplicacion que utilizara los componentes de la libreria.
- crear el primer commit del proyecto.

# Decisiones
- Iniciar la creación de la aplicacion despues de haber verificado que todo este funcionando correctamente.
- La creacion del primer commit para llevar el control de las modificaciones realizadas a futuro.


# Problemas y soluciones
- sin ningun problema.

# Resultado
- Se creo la aplicación y el commit sin ningun problema.

---

## bitacora 5 — Compilacion de liberia y app, ademas de actualización de git

**Fecha:** 19/11/2026

# Actividades
- Ejecutar los comandos:ng build ui-lib , ng build demo-app para la compilacion y empaquetacion.
- actualizar el proyecto con un nuevo commit.

# Decisiones
- usar los comandos para verificar que la estructura de los proyectos sea compatible con el empaquetado de angular.
- Usar un nuevo commit para guardar cambios realizados y controlar versiones del codigo.


# Problemas y soluciones
- sin ningun problema.

# Resultado
- se uso los comandos, y se creo el commit sin ningun problema en su proceso.

---

## bitacora 6 — Finalizacion del componente ui-button

**Fecha:** 19/11/2026

# Actividades
- se creo el componente ui-button
- Se configuro la "categoria" el disable, loading y sus tamaños.

# Decisiones
- desarrollar los diferentes requisitos que necesita el componente ui-button.
- se agrego una funcion que evita el uso del boton si este se encuentra desabilitado o cargando.


# Problemas y soluciones
- sin ningun problema aunque se tuvo que realizar modificacion en el codigo y su documentacion mientras se construia.

# Resultado
- el componente ui-botton fue creado y los cambios actualizado en un commit.

---

## bitacora 7 — Finalizacion del resto de componentes

**Fecha:** 19/11/2026

# Actividades
- se creo el componente ui-card, ui-select, ui-table
- Se configuro los idependientemente cada componente.

# Decisiones
- desarrollar los diferentes componentes.
- reutilizar la "estructura" del ui-botton para crear el resto de componentes.


# Problemas y soluciones
- sin ningun problema.

# Resultado
- el resto de componentesfueron creados y los cambios actualizados en un commit.

---

## bitacora 8 — Pruebas

**Fecha:** 20/11/2026

# Actividades
- Se verifico el estado de los componentes con el comando: ng test ui-lib --watch=false


# Decisiones
- validar el estado de los componentes antes de continuar con el proyecto.



# Problemas y soluciones
- Error en el archivo de pruebas por no especificar el tipo, se agrego: <Record<string, unknown>>> en let component y let fixture

# Resultado
- Se comprobo el estado de los componente y se corrigio un error presente en el archivo de pruebas de ui-table.spect.ts

---

## bitacora 9 — Pruebas mas extensas

**Fecha:** 20/11/2026

# Actividades
- Como la anterior bitocora se hicieron pruebas en los demas componentes con pruebas mas extensas


# Decisiones
- validar el estado de los componentes antes de continuar con el proyecto.
- Extender pruebas para probar otros comportamientos de los componentes.



# Problemas y soluciones
- Error en la logica de construcción, se cambio expect(emitted).ToBeTrue() por expect(emitted).ToBe(true)

# Resultado
- Se comprobo el estado de los componente y se corrigio un error presente en el archivo de pruebas de ui-button.spect.ts

---

## bitacora 10 — Creacion de modelos

**Fecha:** 20/11/2026

# Actividades
- En demo-app se creo los modelos para la estructuracion de los datos: character.ts , episode.ts , location.ts
- ademas de api-response.ts para definir la estructura de la respuesta que da la api


# Decisiones
- Crear los modelos.
- Empezar con pequeños cambios para despues ir ampliando el contenido de cada archivo.



# Problemas y soluciones
- no hubo problemas

# Resultado
- Se crearon distintos archivos en la carpeta projects/demo-app/src/app/models

---

## bitacora 11 — Comienzo de la creacion de la parte visual

**Fecha:** 20/11/2026

# Actividades
- Creacion de los primeros elementos visuales
- Iniciar las primeras conexiones con la libreria


# Decisiones
- Empezar con elementos sencillos para ver su funcionamiento.
- Ir agregando contenido progresivamente mientras se observa su comportamiento.



# Problemas y soluciones
- Mal citiado en la exportacion de ui-table, se corrigio la linea de codigo en la que se presentaba el error

# Resultado
- En el servidor local ya se muestra los inicios de la aplicacion  

---

## bitacora 12 — Registros actualizados

**Fecha:** 20/11/2026

# Actividades
- Implementar las accions de ver, eliminar y filtrar personajes
- Hacer pruebas en el despliegue local

# Decisiones
- Avanzar en la implementacion de mas elementos de la aplicacion


# Problemas y soluciones
- Error de sintaxis en un evento, se uso [] lo que ocaciono un error ya que se debia esperar un evento y estos se usan para una propiedad

# Resultado
- Una version mas avanzada de la aplicacion

---

## bitacora 13 — Problema con los datos de la tabla

**Fecha:** 20/11/2026

# Actividades
- Implementar un color que cambie segun el estado del personaje: alive, dead, unknown


# Decisiones
- Descartar la idea del decorado por estado del personaje


# Problemas y soluciones
- Error el color del boton de eliminar se al fondo de cada celda haciendo que todas se vieran en rojo, ademas de un problema al volver al codigo anterior, se descarto el uso de este caracteristica para la aplicacion, y el error al volver a un estado anterior se debio a no hacer la compilacion de la libreria despues de revertir los cambios

# Resultado
- Se implemente y descarto el uso de colores en las celdas por el estado de personaje

---

## RETOS Y SOLUCIONES

Mi mayor reto en este proyecto fue que era la primera vez que usaba angular asi que tenia que aprenderlo, y me quede estancado en ciertas partes del codigo para entender mejor lo que queria hacer, tambien un error con el color de un fondo que me tomo unas horas corregir sin darme cuenta que era porque olvide compilar la libreria despues de un cambio, aunque ha sido algo dificil tambien es una buena oportunidad para aprender.