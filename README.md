# 🌟 React Products Frontend

## 🛠️ Introduction

This is a **frontend system** built with **React** and **TypeScript** for product management and cash flow control.  
The system integrates seamlessly with the **backend system**, which can be found here:  
➡️ [FastAPI Products Backend](https://github.com/sabrinaksilva/fast-api-products)

---

## 📖 **Description**

In this context, a **Product** is composed of:
- **Name**
- **Description**
- **Quantity**
- **Cost price**
- **Selling price**

### **The system allows:**

#### **Product Management:**
- Create, edit, and view a product.
- View product listings with **filters**.
- **Inventory control** to track product quantities.

#### **Cash Flow Management:**
- Create, view, and edit product entries and exits.
- View a summary of cash flow movements by period, including:
  - **Product entries and exits**
  - **Associated monetary values**
- View **financial indicators** to support decision-making.

#### **Authentication Flow:**
- Secure user authentication for accessing system functionalities.

---

## 🚀 **Installation and Setup**

Ensure you have the following installed on your system:
- Node.js (version 16 or higher recommended)
- npm or yarn package manager
- Docker and Docker Compose (optional, if you wish to use Docker)

## Environment Variables
This project requires an environment variable `REACT_APP_API_URL` to be configured.

- If running **without Docker**:
  ```env
  REACT_APP_API_URL=http://localhost:8000
  ```

- If running **with Docker**:
  ```env
  REACT_APP_API_URL=http://products-api-flask-service:8000
  ```

Create a `.env` file in the root of the project and add the appropriate value for `REACT_APP_API_URL`.

---

## Running Without Docker

### Step 1: Install Dependencies
Run the following command to install project dependencies:
```bash
npm install
```

### Step 2: Start the Development Server
Run the following command to start the development server:
```bash
npm start
```
This will start the application on `http://localhost:3000`.

### Step 3: Build for Production (Optional)
To build the project for production, run:
```bash
npm run build
```
The production-ready files will be available in the `build` directory.

---

## Running With Docker

### Step 1: Build and Start the Containers
Use the following command to build and start the Docker containers:
```bash
docker-compose up --build
```
This will start the React application along with any required services defined in the `docker-compose.yml` file.

### Step 2: Access the Application
Once the containers are running, you can access the application at:
- **Frontend:** `http://localhost:3000`
- **Backend API (if configured):** `http://products-api-flask-service:8000`

---

## Additional Notes
- Ensure your backend API is running and accessible at the URL specified in the `REACT_APP_API_URL` variable.
- If you encounter any issues, ensure all required ports (e.g., `3000` for the frontend and `8000` for the backend) are free or properly configured.

---

## 👤 **Contact**

If you have any questions, suggestions, or feedback, feel free to reach out:  
💼 **Email**: [sabrinakappann@gmail.com](mailto:sabrinakappann@gmail.com)  
📧 **LinkedIn**: [https://www.linkedin.com/in/sabrina-kappann-da-silva-34665618a]

