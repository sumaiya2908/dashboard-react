# dashboard-react

A dashbaord to display the usage by each services on a particular day. The chart displays download and upload usage by a particular service. The card diplays the total consumption in a day by the service.

## Stack
- ReactJs
- ExpressJs
- NodeJs
- MongoDB
- ChartJS

## Preview

### Homepage
![home](/images/home.png)

### Dropdown
![home](/images/dropdown.png)

## Steps to Install

- Run the command to cole the repository
```sh
  git clone https://github.com/sumaiya2908/dashboard-react
  
```
- Navigate to the project directory
```sh
  cd dashboard-react
```

- Install the dependencies
  - For Frontend
  ```sh
  cd frontend
  npm install
  
  ```
  - For backend
  ```sh
  cd backend
  npm install
  ```
  
- Add MongoDB URI in the env file
    - Create a .env file in the backend folder
    - Add URI as MONGODB_URI
    
- Run developement servers for both backend and frontend
  ```sh
  cd frontend
  npm run dev
  
  cd backend
  npm run dev
 ```
