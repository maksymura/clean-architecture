This is example project with implementation of clean architecture without frameworks

There are three distinct layers:
1. Domain: holds domain business logic that does not depend on anything out of itself
2. Application: holds application logic and consists of use-cases that communicate both with infrastructure elements and domain
3. Infrastructure: holds implementations for external dependencies: http client, data access layer

Entire application gets assembled in main function of main.ts file
