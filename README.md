# **Careerly**

Careerly offers three essential tools in one platform to help job seekers advance their careers with ease and confidence. Users can build their resume effortlessly, practice interviews with AI feedback, or find job matches tailored to them.


<p align="center">
    <img src="https://i.imgur.com/S0BWA4l.png" alt="Careerly Banner" style="width: 100%; height: auto;">
</p>

---

## **🧭 Navigation**

- [📋 Project Information](#seven)
- [❓ The Problem](#one)
- [🏛️ Technical Architecture](#two)
- [🌟 Key Features](#three)
- [🚩 API Endpoints](#four)
- [⚙️ Installation & Setup](#five)
- [🛠️ Technologies Used](#six)
- [🔮️ Future Plans](#eight)

---

## <a name="seven"></a>📋 Project Information

### **Links**

- **Private Source Code (Original)**: https://gitlab.com/uplift-code-camp/students/batch-22/grouping/projects/group-4
- **Official Site**: https://try-careerly.vercel.app/
- **Public Source Code**: https://github.com/seanverano/careerly
- **Demo Video & Preview**: https://www.youtube.com/watch?v=UxlkN8WpmL8

**Disclaimer:**  
The original repository, made by our team, is hosted as a private repository on GitLab. As it poses a security risk, I decided to clone the repository to showcase the source code here.

Careerly was our final bootcamp project at Uplift Code Camp, built collaboratively as a team between November and December 2024.

### **Our Team**

- **Sean Dustin Verano** (*Full Stack Developer*) | [LinkedIn](https://www.linkedin.com/in/sdverano/) 
<br>Team Leader, overseeing the project; Lead development of AI Interview Prep, overall UI Designer, and manages the database

- **Ivan Patrick Prejoles** (*Full Stack Developer*) | [LinkedIn](https://www.linkedin.com/in/ivan-patrick-prejoles/)
<br>Lead development of Tailored Job Matches and implemented both frontend and backend for two APIs related to the feature

- **Patrick Dilen Reyes** (*Backend Developer*) 
<br>Lead development of User Authentication, implemented backend
  
- **Einon Cris Alcantara** (*Frontend Developer*) | [LinkedIn](https://www.linkedin.com/in/einon-cris-alcantara-6623b52bb/) 
<br>Lead development of Resume Builder
  
---

## <a name="one"></a>❓ The Problem

Preparing for a job search is overall time-consuming, and traditional methods often overwhelm job seekers, leaving them unsure where to focus. 

A streamlined solution is needed to help job seekers spend more time focusing on improving their skills rather than spending it on tasks such as creating a resume or searching for job listings.

---

## <a name="two"></a>🏛️ Technical Architecture

### **Frontend (React)**

- **`/`**: Homepage, platform overview with its features, and a section with our team's information.
- **`/login`**: Login page for users to access their account.
- **`/register`**: Registration page to create a new account.
- **`/main-menu`**: Menu where users can choose between the three features.
- **`/resume-builder`**: Feature 1 Page where users can build their resume.
- **`/interview-dashboard`**: Feature 2 Page where users can manage questions and start a mock interview session with AI.
- **`/job-finder`**: Feature 3 Page where users can search for jobs by inputting data and information.


### **Backend (Express/Node.js)**

- Authentication middleware to secure API access.
- RESTful API for both feature 2 and feature 3.
- Integration with Google's Gemini API for AI-powered answer feedback and rating.
- Integration with TomTom API for location-based job search using geolocation data.
- Integration with Serper API for enhanced job search functionality, providing results based on location and other relevant criteria.

---

## <a name="three"></a>🌟 Key Features

### **Resume Builder**

- **Instant Preview**: Instantly view changes made to the resume as you input details.
- **Downloadable PDF**: Easily export the resume in a professional PDF format.
- **User-Friendly Template**: Access to intuitive UI template and forms for smooth data input.
- **Fully Mobile Responsive**: Seamlessly use this feature on any device, with a responsive layout that adapts to all screen sizes.

### **AI Interview Prep**

- **Real-Time Voice-to-Text Conversion**: Seamlessly transcribe spoken answers for evaluation.
- **AI-Powered Evaluation**: Analyze answers for quality and relevance using Google's Gemini API.
- **Flexible Input Methods**: Support for both voice and text responses.
- **Detailed Feedback Generation**: Actionable insights (rating and feedback) for better preparation.
- **Fully Mobile Responsive**: Seamlessly use this feature on any device, with a responsive layout that adapts to all screen sizes.

### **Tailored Job Matches**

- **Custom Job Preferences**: Set job title, skills, experience level, salary range, and preferred locations to refine job search results.
- **Job Search Results**: View job listings based on your personalized preferences with the click of a button.
- **Direct Access to Job Boards**: Easily access job listings on platforms like Glassdoor, LinkedIn, and Indeed with a simple click.
- **Fully Mobile Responsive**: Seamlessly use this feature on any device, with a responsive layout that adapts to all screen sizes.

---

## <a name="four"></a>🚩 API Endpoints

### **User Authentication**

| Method | Endpoint                | Description           |
| ------ | ----------------------- | --------------------- |
| POST    | `/api/v1/auth/register`     | Register a new user     |
| POST   | `/api/v1/questions/login`     | Sign in the user |
| GET  | `/api/v1/auth/profile` | Get the authenticated user’s profile     |
| POST | `/api/v1/auth/logout` | Log out the user     |

### **Feature 2: AI Interview Prep**

| Method | Endpoint                | Description           |
| ------ | ----------------------- | --------------------- |
| GET    | `/api/v1/questions`     | Get all questions     |
| POST   | `/api/v1/questions`     | Create a new question |
| PATCH  | `/api/v1/questions/:id` | Update a question     |
| DELETE | `/api/v1/questions/:id` | Delete a question     |
| POST   | `/api/v1/interviews`            | Create a new interview      |
| GET    | `/api/v1/interviews/:id`        | Get interview details       |
| POST   | `/api/v1/interviews/:id/answer` | Submit an answer for review |

### **Feature 3: Tailored Job Matches**

| Method | Endpoint                        | Description                 |
| ------ | ------------------------------- | --------------------------- |
| POST   | `/api/v1/jobs/search-locations`            | Search for job locations      |
| POST    | `/api/v1/jobs/search-jobs`        | Search for jobs based on user inputs       |


---

## <a name="five"></a>⚙️ Installation & Setup

### **1. Clone the repository:**
   ```bash
   git clone https://github.com/seanverano/careerly.git
   ```

### **2. Install dependencies:**
**Backend**
   ```bash
   cd backend/auth
   npm install
   
   cd backend/api
   npm install
   ```
**Frontend**
   ```bash
   cd frontend
   npm install
   ```
### **3. Set up environment variables:**
**API (Backend)**
 ```bash
PORT=1017
MONGO_URI=your_mongodb_uri_api_db
ACCESS_TOKEN_SECRET_KEY=your_jwt_secret_access
ACCESS_TOKEN_EXPIRATION=1d
GEMINI_API_KEY=your_gemini_api_key
TOMTOM_API_KEY=your_tomtom_api_key
SERPER_API_KEY=your_serper_api_key

   ```
**Auth (Backend)**
 ```bash
PORT=1016
MONGO_URI=your_mongodb_uri_auth_db
ACCESS_TOKEN_SECRET_KEY=your_jwt_secret_access
REFRESH_TOKEN_SECRET_KEY=your_jwt_secret_refresh
ACCESS_TOKEN_EXPIRATION=1d
REFRESH_TOKEN_EXPIRATION=7d

   ```
### **Frontend**
 ```bash
VITE_AUTH_BACKEND_URL=http://localhost:1016
VITE_API_BACKEND_URL=http://localhost:1017
   ```

### **4. Start the application:**
**Backend**
   ```bash
   cd backend/auth
   npm run dev
   
   cd backend/api
   npm run dev
   ```
**Frontend**
   ```bash
   cd frontend
   npm run dev
   ```
   
---

## <a name="six"></a>🛠️ Technologies Used

### **Frontend:**
- React
- React Router
- Tailwind CSS
- Lucide Icons
- jsPDF
- html2canvas
- Web Speech API

### **Backend:**
- Node.js
- Express
- MongoDB/Mongoose
- JSON Web Tokens
- Google Gemini API
- TomTom API
- Serper API

---

## <a name="eight"></a>🔮 Future Plans

- **Expand Sign-In Options**: Adding OAuth, Google, and social media logins for easier and more secure access.
  
- **Transition to SaaS**: Shifting Careerly to a subscription-based SaaS platform, offering premium features and personalized services.

- **Analytics Dashboard**: Introducing a dashboard to track job search, resume, and interview progress.

- **Mobile App Development**: While Careerly is fully mobile-responsive and scalable on smaller screens, a dedicated mobile app would be great.





