# *Bio* API Documentation
This API allows data about usernames and bios to be retrieved

## *Fill in Endpoint 1 (GET text/plain Example)*
**Request Type:** GET

**Returned Data Format**: Plain Text

**Description:** Returns a user's bio given their name

**Supported Parameters** the username

**Example Request:** res.send(user.bio);

**Example Response:**
*Fill in example response in the ticks*

```
I work at Dairy Queen.
```

**Error Handling:**
*Summarize any possible errors a client should know about*
*Fill in at least one example of the error handling*
If the username does not exist in the json, a 400 error will
be thrown specifying so

## *Fill in Endpoint 2 Title (GET json  Example)*
**Request Format:** GET

**Returned Data Format**: JSON

**Description:** returns the usernames and bios of everyone in the json

**Supported Parameters** *List any optional/required parameters and defaults*
* /:pathparam (optional/required)
  * pathparam description
* queryparam1 (optional/required)
  * queryparam1 description

**Example Request:** res.json(bioData.bios);

**Example Response:**
*Replace the {} with the example response*

```json
    "bios": [
        {
            "username": "Sean",
            "bio": "I am a Junior at Caltech"
        },
        {
            "username": "Bob",
            "bio": "I work at Dairy Queen."
        }
    ]
```

**Error Handling:**
*Summarize any possible errors a client should know about*
*Fill in at least one example request/response of the error handling*

## *Fill in Endpoint 3 Title (POST Example)*
**Request Format:** *Fill in example request format*

**Returned Data Format**: JSON

**Description:** *Fill in description*

**Supported Parameters** *List any optional/required parameters*
* POST body parameters:
    * param1 - (optional/required) param1 description
    * ...


**Example Request:** *Fill in example request(s)*

**Example Response:**
*Replace the {} with the example response*

```json
{

}
```

**Error Handling:**
*Summarize any possible errors a client should know about*
*Fill in at least one example request/response of the error handling*