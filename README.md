# backend
Login endpoint

POST - /api/auth/login

| Name     | Type   | Required | Unique | Notes |
|----------|--------|----------|--------|-------|
| username | string | yes      | yes    |       |
| password | string | yes      | no     |       |
Returns a token to be stored for authentication


Register endpoint

POST - /api/auth/register

| Name      | Type    | Required | Unique | Notes                      |
|-----------|---------|----------|--------|----------------------------|
| username  | string  | yes      | yes    |                            |
| password  | string  | yes      | no     |                            |
| role      | integer | yes      | no     | 1 for owners, 2 for diners |
| latitude  | string  | yes      | no     |                            |
| longitude | string  | yes      | no     |                            |
Returns a token to be stored for authentication

Get current user endpoint

GET - /api/users/user
Returns JSON of username, role, city, id, and array of trucks (either trucks owned if operator or favorited trucks if diner)

POST - /api/trucks

| Name       | Type    | Required | Unique | Notes                      |
|------------|---------|----------|--------|----------------------------|
| name       | string  | yes      | yes    |Name of foodtruck           |
| description| string  | no       | no     |                            |
| cuisine    | string  | yes      | no     |type of food served         |
| imageURL   | string  | no       | no     |                            |
| city       | string  | no       | no     |                            |

On success returns list of all trucks

GET - /api/trucks

Returns array of all trucks in JSON format: {id, operator_id, name, description, cuisine, imageURL, city}

DELETE - /api/trucks/:id

Specify which truck to delete by truck ID, returns new list of trucks

PUT - /api/trucks/:id

Specify which truck to edit by truck ID, new JSON object updates all previous values

| Name       | Type    | Required | Unique | Notes                      |
|------------|---------|----------|--------|----------------------------|
| name       | string  | yes      | yes    |Name of foodtruck           |
| description| string  | no       | no     |                            |
| cuisine    | string  | yes      | no     |type of food served         |
| imageURL   | string  | no       | no     |                            |
| city       | string  | no       | no     |                            |

POST - /api/trucks/:id/menu

Requires ID of truck to be supplied so it knows which truck to add it to

| Name       | Type    | Required | Unique | Notes                      |
|------------|---------|----------|--------|----------------------------|
| name       | string  | yes      | no     |Name of dish                |
| price      | float   | yes      | no     |Price in dollars(no sign)   |
| imageUrl   | string  | no       | no     |Image of dish               |

DELETE - /api/trucks/:id/menu/:itemid

Must supply truck ID and menu Item ID

Returns success message and updated list of menu items