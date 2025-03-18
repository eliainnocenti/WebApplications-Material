# FilmLibrary API

## Get all films
* `GET /api/films`
* Description: Get the full list of films
* Request body: _None_
* Response: `200 OK` (success)
* Response body: Array of objects, each describing one film. Note that absence of values is represented as null value in json.
```json
[
  { "id": 1, "title": "Pulp Fiction", "favorite": 1, "watchDate": "2023-03-11", "rating": null },
  ...
]
```
* Error responses: `500 Internal Server Error` (generic error)

## Get a film by id
* `GET /api/films/:id`
* Description: Get a film by its id
* Request body: _None_
* Response: `200 OK` (success)
* Response body: Object describing the film
```json
{ "id": 1, "title": "Pulp Fiction", "favorite": 1, "watchDate": "2023-03-11", "rating": null }
```
* Error responses: `500 Internal Server Error` (generic error)

## Create a new film
* `POST /api/films`
* Description: Create a new film
* Request body: JSON object with film details (title, favorite, watchDate, rating)
```json
{ "title": "Pulp Fiction", "favorite": 1, "watchDate": "2023-03-11", "rating": null }
```
* Response: `200 OK` (success)
* Response body: Object with the id of the created film
```json
{ "id": 1 }
```
* Error responses: `500 Internal Server Error` (generic error)

## Mark a film as favorite/unfavorite
* `PUT /api/films/:id/favorite`
* Description: Mark a film as favorite/unfavorite
* Request body: JSON object with favorite status
```json
{ "favorite": 1 }
```
* Response: `200 OK` (success)
* Response body: Object with the number of changes
```json
{ "changes": 1 }
```
* Error responses: `500 Internal Server Error` (generic error)

## Change the rating of a film
* `PUT /api/films/:id/rating`
* Description: Change the rating of a film
* Request body: JSON object with delta value
```json
{ "delta": 1 }
```
* Response: `200 OK` (success)
* Response body: Object with the number of changes
```json
{ "changes": 1 }
```
* Error responses: `500 Internal Server Error` (generic error)

## Delete a film
* `DELETE /api/films/:id`
* Description: Delete a film by its id
* Request body: _None_
* Response: `200 OK` (success)
* Response body: Object with the number of changes
```json
{ "changes": 1 }
```
* Error responses: `500 Internal Server Error` (generic error)

## Update a film
* `PUT /api/films/:id`
* Description: Update a film by its id
* Request body: JSON object with film details (title, favorite, watchDate, rating)
```json
{ "title": "Pulp Fiction", "favorite": 1, "watchDate": "2023-03-11", "rating": null }
```
* Response: `200 OK` (success)
* Response body: Object with the number of changes
```json
{ "changes": 1 }
```
* Error responses: `500 Internal Server Error` (generic error)
