# GEPlavoro

CONNESSIONE AL SERVER:
request:
{
  "protocol": "HTTPS",
  "action": "stabilire_connessione_sicura",
  "data_encryption": "TLS",
  "headers": {
    "Authorization": "Bearer <token>",
    "Content-Type": "application/json"
  },
  "body": {
    "client_id": "unique_client_id",
    "client_secret": "secure_client_secret"
  }
}

response:
{
  "status_code": 200,
  "message": "Connessione stabilita con successo",
  "session_id": "generated_session_id"
}


RICERCA FILTRATA:
request:
{
  "endpoint": "/search/restaurants",
  "method": "POST",
  "headers": {
    "Authorization": "Bearer <token>",
    "Content-Type": "application/json"
  },
  "body": {
    "filters": {
      "cuisine_type": "italian",
      "rating_min": 4,
      "availability": "weekend"
    },
    "pagination": {
      "page": 1,
      "limit": 20
    }
  }
}

response:
{
  "status_code": 200,
  "restaurants": [
    {
      "id": "restaurant_123",
      "name": "Ristorante Bella Italia",
      "rating": 4.5,
      "availability": "weekend"
    },
    {
      "id": "restaurant_456",
      "name": "La Trattoria",
      "rating": 4.2,
      "availability": "weekend"
    }
  ],
  "pagination": {
    "current_page": 1,
    "total_pages": 5
  }
}


METODO RECENSIONI:
request:
{
  "endpoint": "/reviews/add",
  "method": "POST",
  "headers": {
    "Authorization": "Bearer <token>",
    "Content-Type": "application/json"
  },
  "body": {
    "restaurant_id": "restaurant_123",
    "user_id": "user_789",
    "rating": 5,
    "comment": "Ottimo cibo e servizio!"
  }
}
response:
{
  "status_code": 201,
  "message": "Recensione aggiunta con successo",
  "review_id": "review_001"
}


CHAT:
request:
{
  "endpoint": "/chat/send",
  "method": "POST",
  "headers": {
    "Authorization": "Bearer <token>",
    "Content-Type": "application/json"
  },
  "body": {
    "restaurant_id": "restaurant_123",
    "user_id": "user_789",
    "message": "È possibile prenotare un tavolo per 2 persone?"
  }
}

response:
{
  "status_code": 200,
  "message": "Messaggio inviato con successo",
  "chat_id": "chat_001"
}


SEZIONE FAQ:
request:
{
      "endpoint": "/faq",
      "method": "GET",
      "headers": {
        "Authorization": "Bearer <token>",
        "Content-Type": "application/json"
    }
}

response:   
{
      "status_code": 200,
      "faq": [
        {
          "question": "Come posso aggiungere una recensione?",
          "answer": "Accedi al ristorante che hai visitato e clicca su 'Aggiungi Recensione'."
        },
        {
          "question": "Come modifico una prenotazione?",
          "answer": "Accedi alla tua prenotazione e clicca su 'Modifica'."
        }
      ]
}

FEEDBACK RISTORATORE:
request:
{
      "endpoint": "/reviews/respond",
      "method": "POST",
      "headers": {
        "Authorization": "Bearer <token>",
        "Content-Type": "application/json"
      },
      "body": {
        "review_id": "review_001",
        "restaurant_id": "restaurant_123",
        "response": "Grazie per il tuo feedback, siamo lieti che ti sia piaciuto!"
      }
}

response:
{
  "status_code": 200,
  "message": "Risposta alla recensione inviata con successo"
}



ANALISI DATI:
request:
{
      "endpoint": "/analytics/performance",
      "method": "GET",
      "headers": {
        "Authorization": "Bearer <token>",
        "Content-Type": "application/json"
      },
      "query_parameters": {
        "restaurant_id": "restaurant_123",
        "time_range": "last_month"
    }
}

response:
{
      "status_code": 200,
      "analytics": {
        "total_reviews": 50,
        "average_rating": 4.5,
        "positive_reviews": 40,
        "negative_reviews": 10,
        "trends": {
          "increased_positive_reviews": 10,
          "decreased_negative_reviews": 2
      }
   }
}


LOGIN:
request:
{
  "username": "user123",
  "password": "P@ssw0rd!"
}

response:
{
  "status": "success",
  "message": "Login successful.",
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9",
  "user": {
    "id": 12345,
    "username": "user123",
    "email": "user123@example.com"
  }
}

REGISTRAZIONE:
request:
{
  "username": "newUser123",
  "password": "Str0ngP@ssword!",
  "email": "newuser123@example.com",
  "first_name": "John",
  "last_name": "Doe"
}


response:
{
  "status": "success",
  "message": "Registration successful.",
  "user": {
    "id": 54321,
    "username": "newUser123",
    "email": "newuser123@example.com",
    "first_name": "John",
    "last_name": "Doe",
    "created_at": "2024-09-27T10:30:00Z",
    "is_verified": false
  },
  "verification": {
    "method": "email",
    "message": "Please verify your email to activate your account.",
    "email_sent": true
  }
}

















