
Para poder levantar el proyecto de forma local seguir los siquietes pasos

//Descargar el proyecto
$ git clone git@github.com:jacashira/backend.git

//Entrar al poryecto 
$ cd backend/

//instalacion de modulos node
$ npm i
found 0 vulnerabilities

Desarrollo@DESKTOP-0QM8SK5 MINGW64 ~/Documents/Proyectos/Pruebas/cliente (main)
$ npm run dev

//se comparte archivo de coleccion de postman
https://mega.nz/file/V0sCgZaR#58uIwfWPWC5sMjP3SN1t8ktAtkoewNBDHIpLFAA2FnY

//una vesz descargamos el poryecto procedemos a instlaar docker-desktop
// que se puede descargar de aqui

https://www.docker.com/products/docker-desktop/

// una vez instalado y listo docker
// se levantan los contenedores

docker-compose up -d postgres
docker-compose  up -d pgadmin

npm run migrations:run

npm run dev

backend listo!

