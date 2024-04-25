# Postman Test Documentation

##  Verify Response Body

#### Verify Account File Type

###### Test
```javascript
pm.test("File type is JSON", function () {
const response = pm.response.json();
});
```
###### Expected
```json
{"name": "GLOB GRON", "email": "globgron@gmail.com", "password": "GLOBGRONRULES", "dob": "1000-10-10"}
```

###### Result
```json
{"name": "GLOB GRON", "email": "globgron@gmail.com", "password": "GLOBGRONRULES", "dob": "1000-10-10"}
```
#### Verify Existing Account Content
###### Test
```javascript
pm.test("Verify response body", function () {
    var jsonData = pm.response.json();
    pm.expect(jsonData).to.have.property("name");
    pm.expect(jsonData).to.have.property("email");
    pm.expect(jsonData).to.have.property("password");
    pm.expect(jsonData).to.have.property("dob");
});
```

###### Expected
```json
{"name": "John Doe", "email": "john.doe@example.com", "password": "SecurePassword123!", "dob": "1990-01-01"}
```

###### Result
```json
{"name": "John Doe", "email": "john.doe@example.com", "password": "SecurePassword123!", "dob": "1990-01-01"}
```

## PUT

#### Account Creation

###### Body
```json
{
    "name": "John Doe",
    "email": "john.doe@example.com",
    "password": "SecurePassword123!",
    "dob": "1990-01-01"
}
```
###### Test
```javascript
pm.test("Account created successfully", function () {
	pm.expect(pm.response.code).to.be.oneOf([200, 201, 202]);
});
```

###### Message
```JSON
{
    "message": "Data processed and saved successfully!",
    "File": "accounts/5d01f1e6-cdf7-435c-af03-94f2cd6a1fed.json",
    "Data": "ew0KICAgICJuYW1lIjogIkpvaG4gRG9lIiwNCiAgICAiZW1haWwiOiAiam9obi5kb2VAZXhhbXBsZS5jb20iLA0KICAgICJwYXNzd29yZCI6ICJTZWN1cmVQYXNzd29yZDEyMyEiLA0KICAgICJkb2IiOiAiMTk5MC0wMS0wMSINCn0g"
}
```
#### Verify PUT Content

###### Body
```json
{
    "name": "John Doe",
    "email": "john.doe@example.com",
    "password": "SecurePassword123!",
    "dob": "1990-01-01"
}
```
###### Test

```javascript
pm.test("Verify request body contains required headers", function () {
    const requestData = pm.request.body;

   
    const jsonData = JSON.parse(requestData);

    pm.expect(jsonData).to.have.property("name");
    pm.expect(jsonData).to.have.property("email");
    pm.expect(jsonData).to.have.property("password");
    pm.expect(jsonData).to.have.property("dob");

		const expectedHeaders = ["name", "email", "password", "dob"];
    const actualHeaders = Object.keys(jsonData);
    const extraProperties = actualHeaders.filter(header => !expectedHeaders.includes(header));

    pm.expect(extraProperties).to.eql([], `Extra properties found: ${extraProperties.join(', ')}`);

});
```
###### Message
```JSON
{
    "message": "Data processed and saved successfully!",
    "File": "accounts/2541f719-b53d-429f-8fa1-4071c9eb8852.json",
    "Data": "ew0KICAgICJuYW1lIjogIkpvaG4gRG9lIiwNCiAgICAiZW1haWwiOiAiam9obi5kb2VAZXhhbXBsZS5jb20iLA0KICAgICJwYXNzd29yZCI6ICJTZWN1cmVQYXNzd29yZDEyMyEiLA0KICAgICJkb2IiOiAiMTk5MC0wMS0wMSINCn0g"
}
```
## Invalid Request Handling

#### Bad Request
###### Test
```javascript
pm.test("Verify response status code is 400 for GET request", function () {
    pm.sendRequest({
        url: 'https://heartzonedb.s3.us-east-2.amazonaws.com/accounts/3b2f5905-9a31-410d-ae98-05fe10e7c6ed.json/%',
        method: 'GET',
        header: {
            'Content-Type': 'application/json'
        }
    }, function (err, res) {
        pm.expect(res).to.have.status(400);
    });
});
```

#### Account Not Found
###### Test
```javascript
pm.test("Status code is 404", function () {
    pm.response.to.have.status(404);
});
```
###### Message
```json
<?xml version="1.0" encoding="UTF-8"?>
<Error><Code>NoSuchKey</Code><Message>The specified key does not exist.</Message><Key>accounts/noaccount.json</Key><RequestId>EPPV62Q404XVYM84</RequestId><HostId>o9pUdUaV/aWg7AAObHUerEKojlrkdrb5r8imM1w07exYXsHoNarHS39jJe32e+T6CWfhV18KZqiiq6Y1jzLg2w==</HostId></Error>
```

## Verify API Response Status

#### Account Found
###### Test
```javascript
pm.test("Status code is 200", function () {
    pm.response.to.have.status(200);
});
```
###### Expected
```json
{"name": "John Doe", "email": "john.doe@example.com", "password": "securepassword123", "dob": "1990-01-01"}
```
###### Result
```json
{"name": "John Doe", "email": "john.doe@example.com", "password": "securepassword123", "dob": "1990-01-01"}
```
#### Accounts Request Ping
###### Test
```javascript
pm.test("Status code is 200", function () {
    pm.response.to.have.status(200);
});
```

#### Data Request Ping
###### Test
```javascript
pm.test("Status code is 200", function () {
    pm.response.to.have.status(200);
});
```

#### Public Request Ping
###### Test
```javascript
pm.test("Status code is 200", function () {
    pm.response.to.have.status(200);
});
```

#### Test Request Ping
###### Test
```javascript
pm.test("Status code is 200", function () {
    pm.response.to.have.status(200);
});
```