# 🚗 AI-Powered Dynamic Pricing Optimization System

## 📋 Project Overview

This project implements a comprehensive **Machine Learning-driven Dynamic Pricing System** that adjusts ride-sharing prices in real-time to maximize revenue while maintaining competitiveness. The system leverages historical sales data, demand-supply dynamics, and advanced ML techniques to predict optimal pricing strategies.

---

## 🎯 Project Objective

To design and implement a data-driven dynamic pricing system that:
- ✅ Adjusts prices in real-time based on demand, supply, and contextual factors
- ✅ Maximizes revenue through intelligent pricing strategies
- ✅ Maintains competitiveness and customer trust
- ✅ Provides transparency in pricing decisions
- ✅ Enables businesses to increase profitability sustainably

---

## 📊 Dataset Information

### Dataset Source
**Kaggle:** Dynamic Pricing Dataset  
**Link:** https://www.kaggle.com/datasets/arashnic/dynamic-pricing-dataset/data

### Dataset Details
- **Rows:** 1,000 ride records
- **Columns:** 10 features
- **Target:** Historical_Cost_of_Ride (pricing to predict)

### Features Description

#### Numerical Features:
1. **Number_of_Riders** (20-100): Current demand
2. **Number_of_Drivers** (5-89): Available supply
3. **Number_of_Past_Rides** (0-100): Customer engagement
4. **Average_Ratings** (3.5-5.0): Quality score
5. **Expected_Ride_Duration** (10-180 mins): Trip length
6. **Historical_Cost_of_Ride** (₹26-₹836): Target variable

#### Categorical Features:
1. **Location_Category:** Urban, Suburban, Rural
2. **Customer_Loyalty_Status:** Regular, Silver, Gold
3. **Time_of_Booking:** Morning, Evening, Night, Afternoon
4. **Vehicle_Type:** Economy, Premium

---

## 🏗️ Project Structure

```
AI-price-optima/
│
├── Data/
│   ├── raw/
│   │   ├── dynamic_pricing.csv              # Original dataset
│   │   └── medical_insurance.csv
│   │
│   └── clean/
│       ├── cleaned_csv_dataset.csv           # Preprocessed data
│       ├── dynamic_pricing_baseline.csv      # Baseline results
│       ├── pricing_engine_results.csv        # Rule-based results
│       ├── ml_pricing_results.csv            # ML predictions (baseline)
│       ├── ml_pricing_results_improved.csv   # ML predictions (improved)
│       ├── ml_model_summary.csv              # Model summary (baseline)
│       └── ml_model_summary_improved.csv     # Model summary (improved)
│
├── Milestone1_Requirement&DataPreparation.ipynb
├── Milestone2_Data_Ingestion_Pipeline.ipynb
├── Milestone3_EDA.ipynb
├── Milestone4_Baseline_Pricing_Engine.ipynb
├── Milestone5_Advanced_Model_Development.ipynb
│
├── README.md                                  # This file
```

---

## 📈 Milestones Breakdown

### **Milestone 1: Requirement & Data Preparation** ✅

**Objectives:**
- Project setup and environment configuration
- Dataset acquisition from Kaggle
- Initial data exploration and validation

**Key Achievements:**
- ✅ Dataset downloaded and validated
- ✅ Project environment configured
- ✅ Required libraries installed

**Notebook:** `Milestone1_Requirement&DataPreparation.ipynb`

---

### **Milestone 2: Data Ingestion Pipeline** ✅

**Objectives:**
- Design robust data ingestion pipeline
- Load and validate data quality
- Prepare data for downstream processing

**Key Achievements:**
- ✅ Data loading pipeline implemented
- ✅ Quality checks performed
- ✅ Data validation completed

**Notebook:** `Milestone2_Data_Ingestion_Pipeline.ipynb`

---

### **Milestone 3: Exploratory Data Analysis (EDA)** ✅

**Objectives:**
- Advanced data analysis and pattern discovery
- Outlier detection and handling
- Correlation analysis and feature relationships
- Data quality assessment

**Key Achievements:**
- ✅ Comprehensive EDA completed
- ✅ Zero missing values detected
- ✅ No duplicates found
- ✅ Outlier analysis performed (10 outliers in Number_of_Drivers)
- ✅ Correlation matrix generated
- ✅ Strong correlation found: Expected_Ride_Duration → Historical_Cost_of_Ride (0.927)
- ✅ Segment analysis by Vehicle Type, Location, Time
- ✅ Data visualization and insights generated

**Key Insights:**
- **Expected_Ride_Duration** is the strongest price predictor (92.7% correlation)
- Premium vehicles command higher prices (₹396 vs ₹347 average)
- Urban locations show pricing variations
- Peak hours (Morning/Evening) have higher demand

**Notebook:** `Milestone3_EDA.ipynb`

---

### **Milestone 4: Baseline Pricing Engine** ✅

**Objectives:**
- Build rule-based pricing baseline
- Time-based and inventory-based pricing rules
- Evaluate revenue lift vs static pricing

**Key Achievements:**
- ✅ Rule-based pricing engine implemented
- ✅ Time adjustments: Morning (1.20x), Evening (1.15x), Night (1.10x)
- ✅ Inventory adjustments based on demand-supply ratio
- ✅ Revenue lift achieved: **+33.88%** over static pricing
- ✅ Total baseline revenue: ₹499,359.02

**Results:**
| Metric | Static Pricing | Dynamic Baseline | Improvement |
|--------|---------------|------------------|-------------|
| Avg Price | ₹372.50 | ₹499.36 | +34% |
| Total Revenue | ₹372,503 | ₹499,359 | +33.88% |

**Notebook:** `Milestone4_Baseline_Pricing_Engine.ipynb`

---

### **Milestone 5: Advanced Model Development** ✅

**Objectives:**
- Train ML models (XGBoost & LightGBM) for dynamic pricing
- Advanced feature engineering
- Hyperparameter optimization
- Comprehensive backtesting
- Revenue lift validation

**Key Achievements:**
- ✅ Two ML models trained and evaluated
- ✅ Advanced feature engineering (6 new features added)
- ✅ Hyperparameter optimization implemented
- ✅ Significant model improvements achieved
- ✅ Comprehensive backtesting completed
- ✅ Revenue lift validation performed

#### **Model Performance (Improved):**

| Model | R² Score | RMSE | MAE | Status |
|-------|----------|------|-----|--------|
| **IMPROVED LightGBM** ⭐ | **0.8432** | **72.83** | **54.74** | **Best** |
| Improved XGBoost | 0.8426 | 72.97 | 54.85 | Good |
| Baseline LightGBM | 0.8386 | 73.89 | 57.87 | - |
| Baseline XGBoost | 0.8277 | 76.35 | 57.93 | - |

#### **Improvements Achieved:**
- **MAE Reduction:** 5.4% (from 57.87 to 54.74)
- **R² Score Increase:** 0.55% (from 0.8386 to 0.8432)
- **RMSE Reduction:** 1.4% (from 73.89 to 72.83)

#### **Advanced Features Engineered:**
1. **Market_Saturation:** Ratio of drivers to riders (supply perspective)
2. **Rider_Loyalty_Score:** Combined past rides and ratings
3. **Duration_Per_Rider:** Efficiency metric
4. **Capacity_Utilization:** Normalized demand level
5. **Premium_Factor:** Vehicle quality × ratings interaction
6. **Surge_Indicator:** Extreme demand detection

**Notebook:** `Milestone5_Advanced_Model_Development.ipynb`

---

## Milestone 6: Model Deployment & Interactive Dashboard ✅

**Objectives:**
- Develop a full-stack web application for the pricing system
- Build a Flask REST API to serve model predictions
- Create an interactive React Frontend for visualization
- Implement real-time pricing simulation

**Key Achievements:**
- ✅ **Backend API:** Built robust Flask API (`app.py`) with endpoints for predictions and KPIs
- ✅ **Frontend Dashboard:** Developed modern React UI with Tailwind CSS
- ✅ **Interactive Simulator:** Created a tool for users to test pricing scenarios
- ✅ **Data Visualization:** Integrated Recharts for Revenue Trends, Demand Heatmaps, and Feature Importance
- ✅ **UI Overhaul:** Implemented a premium Dark Theme (Slate/Emerald)
- ✅ **Responsive Design:** Ensured full mobile and tablet compatibility

**Tech Stack Added:**
- **Backend:** Flask, Flask-CORS, Joblib
- **Frontend:** React, Vite, Tailwind CSS, Recharts

**Key Components:**
- `app.py`: Main API entry point
- `routes.py`: API route definitions
- `frontend/`: Complete React application source

---

## 📊 Final Results Summary

### **Best Model: IMPROVED LightGBM** 🏆

**Performance Metrics:**
- **R² Score:** 0.8432 (84.32% variance explained) ⭐ 
- **MAE:** 54.74 (Average error of ₹54.74 per ride)
- **RMSE:** 72.83 (Root mean squared error)

**Business Metrics:**
- **Total Rides Analyzed:** 1,000
- **Static Revenue:** ₹372,502.62
- **ML Predicted Revenue:** ₹373,230.30
- **Revenue Lift:** ₹727.68 (+0.20%)
- **Avg Price/Ride:** ₹373.23

### **Revenue Lift by Segment:**

**By Vehicle Type:**
- **Premium:** Higher revenue potential
- **Economy:** Different pricing strategy

**By Location:**
- **Urban, Suburban, Rural:** Each optimized differently

**By Time:**
- **Morning, Evening, Afternoon, Night:** Time-based pricing variations

---

## 🛠️ Technology Stack

### **Languages & Frameworks:**
- **Python 3.12:** Core programming language
- **Jupyter Notebooks:** Interactive development environment

### **Key Libraries:**
- **Data Processing:**
  - pandas 2.3.2
  - numpy 2.3.3
  
- **Machine Learning:**
  - scikit-learn 1.7.2
  - XGBoost 3.0.5
  - LightGBM 4.6.0
  
- **Visualization:**
  - matplotlib 3.10.6
  - seaborn 0.13.2
  
- **Statistical Analysis:**
  - scipy 1.16.2

---

## 🚀 Getting Started

### **Prerequisites:**
- Python 3.12 or higher
- pip package manager
- Git (optional)

### **Installation Steps:**

1. **Clone the repository:**
   ```bash
   git clone <repository-url>
   cd AI-price-optima
   ```

2. **Create virtual environment:**
   ```bash
   python -m venv env
   
   # On Windows:
   env\Scripts\activate
   
   # On Mac/Linux:
   source env/bin/activate
   ```

3. **Install dependencies:**
   ```bash
   pip install pandas numpy scikit-learn matplotlib seaborn scipy xgboost lightgbm jupyter
   ```

4. **Launch Jupyter Notebook:**
   ```bash
   jupyter notebook
   ```

5. **Run notebooks in order:**
   - Milestone1_Requirement&DataPreparation.ipynb
   - Milestone2_Data_Ingestion_Pipeline.ipynb
   - Milestone3_EDA.ipynb
   - Milestone4_Baseline_Pricing_Engine.ipynb
   - Milestone5_Advanced_Model_Development.ipynb

---

## 📁 Key Output Files

### **Cleaned Datasets:**
- `Data/clean/cleaned_csv_dataset.csv` - Preprocessed data ready for modeling

### **Baseline Results:**
- `Data/clean/dynamic_pricing_baseline.csv` - Rule-based baseline pricing
- `Data/clean/pricing_engine_results.csv` - Pricing engine evaluation

### **ML Model Results:**
- `Data/clean/ml_pricing_results.csv` - Baseline ML predictions
- `Data/clean/ml_pricing_results_improved.csv` - **Improved ML predictions** ⭐
- `Data/clean/ml_model_summary.csv` - Baseline model summary
- `Data/clean/ml_model_summary_improved.csv` - **Improved model summary** ⭐

---

## 📈 Key Insights & Findings

### **1. Pricing Drivers Identified:**
- **Primary:** Expected_Ride_Duration (92.7% correlation)
- **Secondary:** Vehicle Type, Demand Ratio, Time of Booking
- **Contextual:** Location, Customer Loyalty, Market Saturation

### **2. Model Performance:**
- **Accuracy:** 84.32% (Excellent for regression tasks)
- **Error:** Average ₹54.74 per ride prediction
- **Reliability:** Consistent across all segments

### **3. Revenue Impact:**
- Dynamic pricing shows measurable revenue improvement
- Model adapts to demand-supply dynamics
- Time and location-based optimization validated

### **4. Business Value:**
- Production-ready ML model
- Real-time pricing recommendations
- Scalable and maintainable system
- Data-driven decision support

---

## 🎯 Model Comparison

| Aspect | Baseline | Improved | Winner |
|--------|----------|----------|--------|
| **Features** | 11 basic | 17 advanced | ✅ Improved |
| **R² Score** | 0.8386 | **0.8432** | ✅ Improved |
| **MAE** | 57.87 | **54.74** | ✅ Improved |
| **RMSE** | 73.89 | **72.83** | ✅ Improved |
| **Training Time** | Faster | Slower | Baseline |
| **Complexity** | Simple | Advanced | Both |

---

## 📊 Visualizations Generated

1. **Model Performance:**
   - Before/After comparison charts
   - RMSE, MAE, R² comparisons
   - Feature importance analysis

2. **Business Analytics:**
   - Revenue comparison (Static vs ML)
   - Revenue lift by Vehicle Type
   - Revenue lift by Location
   - Revenue lift by Time of Booking

3. **Predictions:**
   - Actual vs Predicted scatter plots
   - Price distribution comparison
   - Revenue lift distribution

4. **EDA:**
   - Correlation heatmaps
   - Outlier detection boxplots
   - Segment analysis charts

---

## 👥 Author

**Ayush Rokade**  


