# Flight_booking_backend
## 
### [Live Site]()


## About
* 👋 Hi, I’m Chidike Henry 
* 😎 I’m a MERN fullstack engineer
* 💻 This is a backend code for a flight booking app
* 💞️ I’m looking to collaborate on JS projects 
* 📫 How to reach me chidike.henry@gmail.com


## Introduction
The purpose of this assessment is to evaluate my abilities in creating a backend application for a conversational bot that confirms flight bookings.
This project will allow you to assess my proficiency in backend development, API integration, and my problem-solving approach.

## Technologies Used
* NodeJS
* ExpressJS
* Javascript
* Jest
* Postman

## Project Description: Conversational Bot Flight Booking App

In this assessment, you will be responsible for building a backend application that will be integrated with a conversational bot to facilitate flight ticket bookings. The main functionalities of the backend application should include:

 

1. Retrieving available flights based on the user's input (departure city, destination city, and date).

2. Presenting the user with a list of available flight options.

3. Handling user selection of a specific flight and confirming the booking.

4. Storing the booking information in a mock database or a data file.

5. Integrating with a mock payment system for booking confirmation (no actual payment processing required).

6. Providing appropriate error handling for invalid inputs or unexpected scenarios.

 

## Technical Requirements:

1. The backend application should be developed using your preferred programming language and framework.

2. Use RESTful APIs to handle communication between the frontend (conversational bot) and the backend.

3. You are encouraged to use any libraries or packages that you deem necessary to complete the task efficiently.

4. Include comprehensive unit tests to demonstrate the reliability and functionality of your code.

 

## Submission Details:

1. Please submit your completed assessment on or before 12th August 2023.

2. Upload the project to a code repository (GitHub, GitLab, or any other platform) and share the link with us.

3. Provide clear instructions on how to set up and run the application locally for testing purposes.

 

## Evaluation Criteria:

1. Code Quality: We'll assess the readability, maintainability, and efficiency of your code.

2. Functionality: Your backend application should fulfill all the specified requirements.

3. Integration: The application should communicate effectively with the conversational bot and handle user inputs gracefully.

4. Error Handling: Appropriate measures should be taken to handle errors and edge cases.

5. Testing: The presence of comprehensive unit tests will be a significant plus.

6. Documentation: Clear and concise instructions on setting up and running the app will be appreciated.


## Getting Started
## Flight Booking Backend App Setup Guide
Follow these steps to set up and run the Flight Booking Backend App:

## Prerequisites
1. Ensure you have Node.js installed on your machine. You can download it from nodejs.org.
## Installation
1. Clone the repository: `git clone <repository-url>`
2. Navigate to the project directory: `cd flight_booking_backend`
3. Install dependencies: `npm install`
4. note: flights.json and bookings.json are the mock databases for this project

## Running the App from your terminal
1. From the root directory change to the src folder by running the following command `cd src`
2. From the src folder run the following command to start the backend server: `node app.js`
3. The backend server will be running at http://localhost:3000.
   
## Endpoints
1. GET /flights: Retrieve available flights based on user input.
2. POST /confirm-booking: Confirm flight booking.
3. POST /confirm-payment: Confirm flight booking and payment.
   
## Usage
To retrieve available flights, make a GET request to http://localhost:3000/flights with query parameters departure, destination, and date.

To confirm a flight booking, make a POST request to http://localhost:3000/confirm-booking with a JSON payload containing flightId.

To simulate confirmed payment and booking, make a POST request to http://localhost:3000/confirm-payment with a JSON payload containing flightId. 

Please use postman to test endpoints

## Documentation
Access documentation here - https://documenter.getpostman.com/view/25014777/2s9Xy5LVxR

## Error Handling
The application provides appropriate error handling for invalid inputs and unexpected scenarios.

## Testing
The application includes comprehensive unit tests to ensure reliability and functionality. Run tests using the following command: `npm test`

With these instructions, developers and users will be able to quickly set up and run the Flight Booking Backend App for testing and development purposes.

## Author

#### 👤 Author1
- GitHub: [@lacegiovanni17]https://github.com/lacegiovanni17
- Twitter: [@ChidikeC] https://twitter.com/ChidikeC
- LinkedIn: [LinkedIn]https://www.linkedin.com/in/chidike-chizoba-25628a40/

## Contributing 
Contributions, issues, critics and feature requests are welcome!

## Show your support
Please give a ⭐️ if you like this project! 

## Acknowledgments
- Hat tip to Clan Africa
- Inspiration
- etc
