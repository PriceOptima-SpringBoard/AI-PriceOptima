Data Source: https://www.kaggle.com/datasets/arashnic/dynamic-pricing-dataset/data
#  **AI PriceOptima — Dynamic Pricing Analysis**

This project focuses on optimizing ride prices using **AI-driven models** to improve revenue, profit margin, and customer conversion rates.

---
Possible KPI's
- Revenue Lift (%) → ((New - Old) / Old) × 100
- Profit Margin (%) → ((Revenue - Cost) / Revenue) × 100
- Conversion Rate (%) → (Completed / Total) × 100

---
## 📊 Project Overview

**AI PriceOptima** is a complete AI-driven dynamic pricing system that:

-   Predicts ride prices using **LightGBM & XGBoost**
-   Evaluates performance using **time-split historical backtesting**
-   Increases **revenue** & reduces **pricing error**
-   Deploys a prediction service using **FastAPI + Docker**
-   Includes a **React dashboard** for real-time predictions &
    monitoring
  
------  
  
## 📘 **Milestones Completed**

Date: 15th Oct
*Uploads:*

### 🧹 **Milestone 1 — Data Cleaning & Visualization**
- Cleaned and explored ride pricing data  
- Identified outliers and feature correlations  
📁 *File:* `Requirements & Data Preparation.ipynb`

---

### ⚙️ **Milestone 2 — Data Ingestion & KPI Tracking**
- Built an automated **data ingestion pipeline** using Pandas  
- Computed key KPIs: **Revenue Lift**, **Profit Margin**, **Conversion Rate**  
📁 *Files:* `data ingestion pipeline.ipynb`

---

### 🔍 **Milestone 3 — EDA & Feature Engineering**
- Performed advanced **EDA** and **feature encoding**  
- Conducted segmentation analysis (Customer Loyalty × Seasonality)  
📁 *File:* `Exploratory Data Analysis.ipynb`

---
Date: 23th Oct
*Uploads:*

### 💰 **Milestone 4 — Baseline Pricing Engine**
- Developed a **rule-based pricing engine** using time & inventory adjustments  
- Compared baseline and dynamic **revenue lift** performance  
📁 *File:* `Baseline Pricing Engine.ipynb`

---
Date:19th nov
*uploads*
## 🤖 Milestone 5 --- Advanced Model Development

✔ Implemented **LightGBM + XGBoost optimized models**

✔ Performed **time-sorted historical backtesting**

✔ Added:

-   Calibration
-   Market uplift adjustments
-   Rolling windows
-   Smoothing layers

✔ Saved production-ready models:

-   `backtest_lgbm_model.joblib`
-   `backtest_xgb_model.joblib`

✔ Exported full prediction report CSVs\

✔ Achieved stable **backtest RMSE** & **positive revenue uplift**

📁 *File:* `advance model developement5.ipynb`

---
Date:19th nov
*uploads*
## 🖥️ Milestone 6 --- Full Deployment & Dashboard

### Backend --- FastAPI

-   Created **/predict** endpoint
-   Built reusable **input schema**
-   Loaded optimized model & feature columns
-   Containerized using **Docker**
-   Verified via **Swagger UI**

### Frontend --- React Dashboard

-   Built responsive prediction UI
-   Displays **predicted price** and **request status**
-   Includes form-based input for all model features
-   Connected backend using **Axios**
-   Fully tested end-to-end prediction flow

## Docker Deployment Status

✔ FastAPI running inside Docker

✔ React served via development server

✔ Both connected successfully

📁 *File:* `frontend.zip` (React App)

----
## 🛠️ **Tools Used**
- Languages & Libraries:Python · Pandas · NumPy · Matplotlib · Seaborn · Scikit-learn 
- Development Environment: Jupyter Notebook, VS Code
### Backend
-   FastAPI
-   Uvicorn
-   Docker
### Frontend
-   React.js
-   Axios
-   CSS


---

## 👩‍💻 **About Me**
**P.N.V.Sahithi**  
Branch: *AI-Price_Optima-Sahithi*  
