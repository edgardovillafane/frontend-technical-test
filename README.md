# InAtlas Frontend test 

**La prueba técnica  consta de:** 
* resolución de 3 consultas técnicas.
* implementación de la prueba técnica.
    
    
# Consultas técnicas

0. Cuál  es tu película favorita?
Star Wars (jajajajajaja)

1. Como mejorarías la siguiente sintaxis ().
    
```javascript 
    const responseApi = await this.apiService.get();

    if (responseApi) {
      if (responseApi.data && responseApi.data.name) {
        return responseApi.data.name';
      } else {
        return 'success';
      }
    } else {
      return 'error';
    }
```

```javascript
    try {
      const responseApi = await this.apiService.get();
      return (responseApi.data && responseApi.data.name)?responseApi.data.name:'success'
    }catch (error) {
      return 'error';
    }
```
2. Como eliminar los siguientes statements (IFs).

```javascript
    if (value === 'Vader') {
       return 'vader';
     } else if (value === 'Luke') {
       return 'luke';
     } else if (value === 'Yoda') {
       return 'yoda';
     } else if (value === 'Kylo') {
       return 'kylo';
     } else {
       return 'chewee';
     }
```

```javascript

switch(value) {
  case 'Vader':
    return 'vader';
    break;
  case 'Luke':
    return 'luke';
    break;
  case 'Yoda':
    return 'yoda';
    break;
  case 'Kylo':
    return 'kylo';
    break;
  default:
    return 'chewee';
}
```
3. Que prefieres: mar | montaña | crucero | resort
Prefiero el mar

# Prueba técnica
En este proyecto base, debes realizar un fork sobre él, para que al finalizar lances una pull-request para la revisión de la prueba.

La prueba consiste en:
Bajo el consumo de la api: https://swapi.dev , tener una aplicación SPA donde se pueda ver de una forma ordenada y simple los siguientes datos:
* Listado de naves.
* Listado de pilotos.
* Bío de la nave
* Bío del piloto
* Relación de Pilotos / Nave
* Relación de Nave / Piloto
* Recomendación de películas por aparición del piloto en ella
* Recomendación de películas por aparición de la nave en ella


**Nota**
Se valorará activamente performance, uso y práctica de clean code, UX/UI. 
