# RESTful api
This is a backend assesment


##Para correrlo: 

```
git clone https://github.com/tyago343/apiRest.git
```

```
npm install
```

Se necesita tener instalado postman o algun software que permita hacer peticiones http.

Para loguearse, debe introducir un email de alguno de los clientes brindados en el endpoint 'http://www.mocky.io/v2/5808862710000087232b75ac'. 
Por ejemplo:
admin
- usuario: britneyblankenship@quotezart.com
- password: britneyblankenship@quotezart.com

no admin
- usuario: barnettblankenship@quotezart.com
- password: barnettblankenship@quotezart.com

Endpoints: 

```
(POST) http://localhost:8000/api/v1/clients/login para loguearse, necesita enviar un JSON con dos campos "email" y en ambos el mismo correo.
```
```
(GET) http://localhost:8000/api/v1/clients/ID Enviando un ID de cliente o su nombre, le responderá con el cliente especificado.  
```

```
(GET) http://localhost:8000/api/v1/policies/client/ID_CLIENT Responde con la lista de politicas para ese usuario. (Solo para admins)
```

```(
(GET) http://localhost:8000/api/v1/policies/ID Responde con la informacion de esa politica. (Solo para admins)
```




