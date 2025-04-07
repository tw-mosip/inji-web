# Download Custom Credential Templates

## Overview
This feature provides option to download a Verifiable Credential (VC) as a PDF using custom templates.
The templates is fetched from a configuration server. Code first tries to find a template using the pattern `issuerId-credentialType-template.html`.
If this specific template is not found, it will use `credential-template.html`.

## Sequence Diagram

```mermaid
sequenceDiagram
participant Client
participant CredentialsController
participant Utilities
participant ConfigServer

    Client->>+CredentialsController: POST /download
    CredentialsController->>+Utilities: getCredentialSupportedTemplateString(issuerId, credentialType)
    alt Template found in Config Server
        Utilities->>+ConfigServer: Fetch template (issuerId-credentialType-template.html)
        ConfigServer-->>-Utilities: Return custom template
    else Template not found
        Utilities->>+ConfigServer: Fetch default template (credential-template.html)
        ConfigServer-->>-Utilities: Return default template
    end
    Utilities-->>-CredentialsController: Return template
    CredentialsController->>CredentialsController: Generate PDF using template
    CredentialsController-->>Client: Return PDF (200 OK)
    CredentialsController->>+Utilities: handleExceptionWithErrorCode(exception, errorCode)
    Utilities-->>-CredentialsController: Return error details
    CredentialsController-->>-Client: ResponseEntity with error (400 Bad Request)
```