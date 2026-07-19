<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="120" alt="Nest Logo" /></a>
</p>

# Remember Birthdate

El objetivo principal de este proyecto es un backend con una tarea programada para que toda fecha de cumpleaños con nombre en la base de datos sea notificada al usuario un dia anterior a la fecha especial del cumpleañero, este sera notificado por un bot de telegram para garantizar la notificación push por celular

## Dev

1. Clonar repositorio

2. Instalar dependencias `yarn` en caso de no tener yarn instalado correr el comando `npm install --global yarn`

3. copiar `.env.template` y renombrarlo a `.env` (Seguir instrucciones dadas en el `.env`)

4. Ejecutar `docker compose up -d`

5. Aplicar migraciones de prisma `npx prisma migrate dev --name init`

6. Generar el cliente de prisma `npx prisma generate`

7. Arrancar el proyecto `yarn start:dev`

## Consideraciones

En caso de cambiar la hora o CronJob del sistema deberá ir al archivo en la ruta `./src/cron/cron.service.ts` y cambiar la configuracion de la anotación `@Cron` la cual sigue la siguiente configuracion (segundos minutos horas diaDelMes mes diaDeSemana) en caso de querer mas información al respecto ir a la [documentación oficial](https://docs.nestjs.com/techniques/task-scheduling)

## Como crear las entidades con nombre y fecha de cumpleaños

para crear la entidad existe un método POST a la siguiente URL `/api/birthdate` que recibe el siguiente esquema JSON

```json
{
  "name": string,
  "day": number,
  "month": number
}
```

la actualización recibe lo mismo pero con campos opcionales, el resto de métodos a toda API Rest, métodos DELETE, PATCH, GET etc
