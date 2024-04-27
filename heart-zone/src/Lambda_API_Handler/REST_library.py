import base64
import boto3
import json
import uuid
import logging

# Set up basic configuration for logging
logging.basicConfig(level=logging.INFO)

# Define expected formats for each input type
EXPECTED_FORMATS = {
    "accounts": [{"name", "email", "password", "dob"}, # AccountCreation
                 {"email", "password"}], # Login
    "data": {"img", "gender", "profession", "school", "codinglanguage"} # ProfileCreation
}

s3 = boto3.client("s3")

def get(event):
    bucket_name = event["pathParameters"]["bucket"]
    file_name = event["queryStringParameters"]["file"]
    
    try:
        file = s3.get_object(Bucket = bucket_name, Key = file_name)
        data = file["Body"].read()
        encoded_data = base64.b64encode(data)
        headers = {
            "Content-Type": "DEFAULT",
            "Content-Disposition": "attachment; filename={}".format(file_name),#, "Keep-Alive": "timeout = 3, max = 100", "Connection": "keep-alive"
        }
        
        if ".txt" in file_name[-4:]:
            headers["Content-Type"] = "text/plain"
        elif ".jpg" in file_name[-4:]:
            headers["Content-Type"] = "application/jpg"
        elif ".png" in file_name[-4:]:
            headers["Content-Type"] = "application/png"
        elif ".svg" in file_name[-4:]:
            headers["Content-Type"] = "application/svg"
        
        return {
            "statusCode": 200,
            "headers": headers,
            "body": encoded_data,
            "isBase64Encoded": True
        }
    except Exception as e:
        print(e)
        raise(e)
        
        
def put(event):
    try:
        bucket_name = event["pathParameters"]["bucket"]
        
        # Determine what kind of data it is putting (could be register, login, images, text files, etc...)
            # TODO
            
        #logging.info(f"Received base64-encoded body: {body}")
        
        decoded_body = base64.b64decode(event["body"])
            
        user_info = json.loads(decoded_body)
        
        logging.info(f"Decoded body: {decoded_body}")
        
        keys = set(user_info.keys())

        # Check if the keys match the expected format for each input type
        for input_type, expected_combinations in EXPECTED_FORMATS.items():
            for expected_keys in expected_combinations :
                if keys == expected_keys:
                    file_name = f"{input_type}/{uuid.uuid4()}.json"
                    data_to_save = json.dumps(user_info)
                    
                    s3.put_object(Bucket = bucket_name, Key = file_name, Body = data_to_save)
                    
                    return {
                        "statusCode": 200,
                        "headers": {
                            "Access-Control-Allow-Origin": "*",
                            "Access-Control-Allow-Methods": "GET,POST,PUT,PATCH,DELETE,OPTIONS",
                            "Access-Control-Allow-Headers": "Content-Type,X-Amz-Date,Authorization,X-Api-Key,X-Amz-Security-Token,Accept",
                            "Access-Control-Allow-Credentials": True # Optional
                        },
                        "body": json.dumps({
                                "message": "Data processed and saved successfully!",
                                "File": file_name, 
                                "Data": event["body"]
                            })
                    }
        else: # Handle unexpected data structure
            return {
                'statusCode': 400,
                'body': json.dumps(f"Invalid data structure received: {keys}")
            }
    
    except KeyError as e:
        return {
            'statusCode': 400,
            'body': json.dumps(f"Missing key in request: {str(e)}")
        }
    
    except Exception as e:
        return {
            'statusCode': 500,
            'body': json.dumps(f"Internal server error: {str(e)}")
        }
    

def post(event):
    bucket_name = event["pathParameters"]["bucket"]
    file_name = event["queryStringParameters"]["file"]
    
    try:
        file = s3.get_object(Bucket = bucket_name, Key = file_name)
        data = file["Body"].read()
        encoded_data = base64.b64encode(data)
        
        return {
            "statusCode": 200,
            "headers": {
                "Content-Type": "text/plain"#, # could also be application/json, application/jpg, etc...
                #"Content-Disposition": "attachment; filename={}".format(file_name) Use this when it is an application file to be downloaded!
            },
            "body": encoded_data,
            "isBase64Encoded": True
        }
    except Exception as e:
        print(e)
        raise(e)

def option(response):
    headers = {
        **response["headers"],
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "GET,POST,PUT,PATCH,DELETE,OPTIONS",
        "Access-Control-Allow-Headers": "Content-Type,X-Amz-Date,Authorization,X-Api-Key,X-Amz-Security-Token,Accept",
        "Access-Control-Allow-Credentials": True # Optional
    }
    
    return response;