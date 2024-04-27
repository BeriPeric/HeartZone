import json
import REST_library as REST

def lambda_handler(event, context):
    method = event["queryStringParameters"]["method"]
    
    if method == "GET":
        return REST.get(event)
    elif method == "PUT": # New obj
        return REST.put(event)
    elif method == "POST": # New data to existing obj
        return REST.post(event)
    elif method == "PATCH": # Update existing data
        return REST.patch(event)
    elif method == "DELETE":
        return REST.delete(event)
    elif method == "OPTIONS":
        return REST.options(event)
    else:
        return {
            "statusCode": 400,
            "body": "Invalid method"
        }