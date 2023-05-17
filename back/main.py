from flask import Flask, jsonify
from flask_cors import CORS
from google.cloud import compute_v1
from google.api_core.extended_operation import ExtendedOperation
import os 
import sys 

app = Flask(__name__)
app.config["CORS_HEADERS"] = "Content-Type"

cors = CORS(app, resources={"*": {"origins": "http://localhost:port"}})

instance_client = compute_v1.InstancesClient()
instance_name = "minecraft-server"
project = os.getenv("PROJECT_ID")
region = os.getenv("REGION")

@app.route("/online-server", methods=["GET"])
def start_server():
    """ Starts a stopped Google Compute Engine instance """
    try:
        operation = instance_client.start(
            project=project, zone=region, instance=instance_name
        )

        print(f"Starting instance {instance_name}", flush=True)
        wait_for_extended_operation(operation, "instance start")
        print(f"Instance {instance_name} started", flush=True)

        return jsonify({"message": "Minecraft Server are starting"}), 200
    except:
        pass 
    
@app.route("/offline-server", methods=["GET"])
def stop_server():
    """ Stops a running Google Compute Engine instance """
    try:
        operation = instance_client.stop(
            project=project, zone=region, instance=instance_name
        )

        print(f"Stopping instance {instance_name}", flush=True)
        wait_for_extended_operation(operation, "instance stopping")
        print(f"Instance {instance_name} stopped", flush=True)

        return jsonify({"message": "Minecraft Server are stopping"}), 200
    except:
        pass 

def wait_for_extended_operation(operation: ExtendedOperation, verbose_name: str = "operation", timeout: int = 300):

    result = operation.result(timeout=timeout)

    if operation.error_code:
        print(
            f"Error during {verbose_name}: [Code: {operation.error_code}]: {operation.error_message}",
            file=sys.stderr,
            flush=True,
        )
        print(f"Operation ID: {operation.name}", file=sys.stderr, flush=True)
        raise operation.exception() or RuntimeError(operation.error_message)

    if operation.warnings:
        print(f"Warnings during {verbose_name}:\n", file=sys.stderr, flush=True)
        for warning in operation.warnings:
            print(f" - {warning.code}: {warning.message}", file=sys.stderr, flush=True)

    return result

@app.route("/get-status", methods=["GET"])
def get_status_server():
    instance = instance_client.get(
        project=project,
        zone=region,
        instance=instance_name
    )

    print(f"Status of Minecraft Server: {instance.status}")

    return jsonify({"message": f"{str(instance.status)}"}), 200

@app.after_request
def after_request(response):
    response.headers["Access-Control-Allow-Origin"] = "*"
    response.headers["Access-Control-Allow-Credentials"] = "true"
    response.headers["Access-Control-Allow-Methods"] = "POST, GET, OPTIONS, PUT, DELETE"
    response.headers[
        "Access-Control-Allow-Headers"] = "Accept, Content-Type, Content-Length, Accept-Encoding, X-CSRF-Token, " \
                                          "Authorization"
    return response

if __name__ == "__main__":
    app.run(debug=True)