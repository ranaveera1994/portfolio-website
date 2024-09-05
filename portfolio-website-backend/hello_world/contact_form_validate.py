import json


def contact_form_validate(event, context):
    
    print(json.dumps(event))

    return {
        "statusCode": 200,
        'headers': {
            'Access-Control-Allow-Origin': '*',
        },
        "body": json.dumps({
            "message": "Message from Contact Form Validation",
        }),
    }
