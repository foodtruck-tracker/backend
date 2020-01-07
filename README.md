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