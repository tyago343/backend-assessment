# RESTful api
This is a backend assesment


## Para correrlo: 

```
git clone https://github.com/tyago343/apiRest.git
```

```
npm install
```
```
npm start 
```


Se necesita tener instalado postman o algun software que permita hacer peticiones http.

Para loguearse, debe introducir un email de alguno de los clientes brindados en el endpoint 'http://www.mocky.io/v2/5808862710000087232b75ac'. 
Por ejemplo:
admin
```
{
	"email":"britneyblankenship@quotezart.com",
	"email":"britneyblankenship@quotezart.com"
}
```

no admin
```
{
	"email":"barnettblankenship@quotezart.com",
	"email":"barnettblankenship@quotezart.com"
}
```

Endpoints: 
## Usuarios no admin: 

para loguearse, necesita enviar un JSON con dos campos "email" y en ambos el mismo correo: 
```
(POST) http://localhost:8000/api/v1/clients/login
```

Sin enviar parámetros, se devolverá un json con todos los usuarios, que será de ayuda para filtrar por ID o nombre luego:
```
(GET) http://localhost:8000/api/v1/clients/ 
```

Enviando un ID de cliente o su nombre, le responderá con el cliente especificado:
```
(GET) http://localhost:8000/api/v1/clients/ID
```

## Para usuarios admin: 


Responde con la lista de politicas para ese usuario:
```
(GET) http://localhost:8000/api/v1/policies/client/ID_CLIENT 
```

Responde con la informacion de esa politica:
```
(GET) http://localhost:8000/api/v1/policies/ID 
```




