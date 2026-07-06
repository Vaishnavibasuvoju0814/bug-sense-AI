# 🔌 BugSense AI API Documentation

## Base URL

```
http://127.0.0.1:8000/api/
```

---

# Authentication

JWT Authentication is used for protected endpoints.

Include the access token:

```
Authorization: Bearer <access_token>
```

---

# POST /signup/

Creates a new user.

## Request

```json
{
  "username": "john",
  "email": "john@gmail.com",
  "password": "Password@123"
}
```

## Success Response

```json
{
  "message": "User created successfully!",
  "username": "john",
  "email": "john@gmail.com"
}
```

## Possible Errors

- Username already exists
- Email already exists
- Invalid email
- Weak password

---

# POST /login/

Authenticates a user.

## Request

```json
{
  "username": "john",
  "password": "Password@123"
}
```

## Success Response

```json
{
  "message": "Login successful!",
  "access": "<jwt_access_token>",
  "refresh": "<jwt_refresh_token>",
  "username": "john",
  "email": "john@gmail.com"
}
```

---

# POST /analyze/

Analyzes a programming error using Retrieval-Augmented Generation.

## Headers

```
Authorization: Bearer <token>
```

## Request

```
multipart/form-data
```

Fields

- language
- framework
- error
- log_file (optional)

## Response

```json
{
  "message": "Analysis completed successfully!",
  "report": {
    "...": "..."
  },
  "analysis_id": 1
}
```

---

# GET /history/

Returns previously analyzed reports.

## Headers

```
Authorization: Bearer <token>
```

## Response

```json
[
  {
    "id": 1,
    "language": "Python",
    "framework": "Django",
    "created_at": "2026-07-06"
  }
]
```

---

# Status Codes

| Code | Meaning |
|------|---------|
|200|Success|
|201|Created|
|400|Bad Request|
|401|Unauthorized|
|500|Internal Server Error|