### Data Source: https://www.kaggle.com/datasets/arashnic/dynamic-pricing-dataset/data
# AI: PriceOptima

## Project Objective
To design and implement a machine learning–driven dynamic pricing system that adjusts prices in real-time or periodically to maximize revenue and maintain competitiveness. The system will leverage historical sales, inventory to predict optimal prices using advanced ML techniques. By ensuring adaptability and transparency, the platform will help businesses increase profitability while preserving customer trust.

---

## Milestone 1: Requirements & Data Preparation

This milestone covers the initial setup, defining key metrics, and installing necessary dependencies.

### Possible KPI's
* `Revenue Lift (%) → ((New - Old) / Old) × 100`
* `Profit Margin (%) → ((Revenue - Cost) / Revenue) × 100`
* `Conversion Rate (%) → (Completed / Total) × 100`

### Installation Of Required Libraries
The project requires the following Python libraries:
* `numpy`
* `pandas`
* `scikit-learn`
* `matplotlib`
* `seaborn`
* `scipy`
* `xgboost`
* `lightgbm`
* `catboost`
* `flask`
* `fastapi`
* `uvicorn`
* `joblib`

---

## Milestone 2: Data Ingestion Pipeline

This milestone focuses on creating a robust pipeline (`data_ingestion_pipeline`) to load, clean, and prepare the `dynamic_pricing.csv` dataset.

The pipeline performs the following steps:
1.  **Load Data:** Reads the raw CSV file.
2.  **Drop Duplicates:** Removes any duplicate rows.
3.  **Handle Missing Values:** Fills null numeric values with the mean and categorical values with the mode.
4.  **Reset Index:** Resets the DataFrame index after cleaning.
5.  **Save Cleaned Data:** Outputs the processed data to `cleaned_dynamic_pricing.csv`.

---

## Milestone 3: Exploratory Data Analysis (EDA)

This milestone involves analyzing the cleaned data to understand distributions, detect outliers, and find correlations between features.

Key analysis steps include:
* **Data Quality Check:** Analyzing nulls, duplicates, and data types (using `.info()`, `.isnull().sum()`).
* **Statistical Summary:** Generating summary statistics for both numerical and categorical columns (using `.describe()`).
* **Distribution Analysis:** Visualizing the distribution of all numeric features using histograms.
* **Outlier Detection:** Using Boxplots and the IQR method to identify potential outliers (e.g., found in 'Number_of_Drivers').
* **Correlation Analysis:** Creating a heatmap to visualize the correlation between numeric features.
* **Relationship Analysis:** Using scatter plots to explore linear relationships.

---

## **Milestone 4: Baseline Pricing Engine**

This milestone establishes a rule-based dynamic pricing model to serve as a baseline.

* **Rule Definition:** Implements two multiplier rules:
    * `time_multiplier_map`: Adjusts price based on `Time_of_Booking` (e.g., Night, Evening).
    * `inventory_multiplier`: Adjusts price based on the demand-supply ratio (Riders vs. Drivers).
* **Price Calculation:**
    * Applies the time and inventory multipliers to the `base_price` (`Historical_Cost_of_Ride`) to create a `dyn_price`.
* **Revenue Simulation:**
    * Simulates the new `dyn_qty` (dynamic quantity) using the `dyn_price` and a price `elasticity` parameter.
    * Calculates `base_revenue` (from static price) and `dyn_revenue` (from dynamic price).
* **Performance Metric:**
    * Calculates the overall `revenue_lift_pct` achieved by the rule-based model.
    * Provides a breakdown of revenue lift by `Time_of_Booking`.





  ## **By Himasish Ghosal**