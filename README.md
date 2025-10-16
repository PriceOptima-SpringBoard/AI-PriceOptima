# 💰 AI-PriceOptima: Dynamic Pricing Optimization using Machine Learning

### 📘 Project Overview
**AI-PriceOptima** is a data-driven dynamic pricing system developed as part of the **SpringBoard Internship Project**.  
The goal is to analyze customer, demand, and price-related data to recommend **optimal pricing strategies** that maximize revenue while maintaining customer satisfaction.

This project explores how data analytics and AI-based models can help businesses **adjust product prices dynamically** according to demand, seasonality, and customer segments.

---

### 🎯 Objectives
- Understand the relationship between **price and demand (riders/customers)**.
- Perform **data cleaning, EDA (Exploratory Data Analysis)**, and **visualization** on real-world pricing data.
- Build and test a basic **price optimization model** using machine learning principles.
- Develop business insights from key metrics like revenue, demand elasticity, and profitability.

---

### 🧩 Dataset Description
**File:** `cleaned_csv_data.csv`  
This dataset contains pricing and demand information used to perform exploratory analysis and predictive modeling.

**Sample Features:**
| Column Name | Description |
|--------------|-------------|
| `riders` | Number of customers/riders/demand units |
| `price` | Product or service price |
| *(Other columns)* | Additional attributes generated or derived during cleaning and feature engineering |

*(Note: Some columns such as `loyalty_status` or `location` were added temporarily to simulate business scenarios and test segmentation models.)*

---

### 🧠 Jupyter Notebook
**File:** `priceoptima_full_task.ipynb`

The notebook includes:
1. **Data Loading & Cleaning**  
   - Handled missing values  
   - Encoded categorical variables  
   - Normalized or scaled features (if required)

2. **Exploratory Data Analysis (EDA)**  
   - Scatter plots: `Price vs Riders`  
   - Correlation heatmaps  
   - Box plots for category-based analysis  

3. **Feature Engineering**  
   - Created synthetic columns (`loyalty_status`, `location`) for simulation  
   - Grouped analysis by segment to understand average price trends  

4. **Insights & Visualization**  
   - Observed demand-price relationships  
   - Identified possible outliers and pricing clusters  

5. **Modeling (Future Phase)**  
   - Regression models to predict optimal pricing  
   - Business rule-based decision layer  

---

### 📊 Tools & Technologies
| Category | Tools Used |
|-----------|-------------|
| **Programming Language** | Python 🐍 |
| **Libraries** | pandas, numpy, seaborn, matplotlib, scikit-learn |
| **Notebook Environment** | Jupyter Notebook (.ipynb) |
| **Version Control** | Git + GitHub (Branch: `PriceOptima-SpringBoard`) |

---


