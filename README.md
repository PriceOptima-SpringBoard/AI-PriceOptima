# AI-PriceOptima-SpringBoard

# Project Objective:
To design and implement a machine learning–driven dynamic pricing system that adjusts prices in real-time or periodically to maximize revenue and maintain competitiveness. The system will use historical sales and inventory data to predict optimal prices using advanced ML techniques. By ensuring adaptability and transparency, the platform aims to help businesses increase profitability while preserving customer trust.

# Milestone 1: Requirements & Data Preparation

# Data Set
https://www.kaggle.com/datasets/arashnic/dynamic-pricing-dataset/data
   # Objective: Define KPIs and collect datasets.

🔁 kpis
# KPI: https://pub.towardsai.net/key-performance-indicators-kpis-in-machine-learning-69d8a59ec8c1
In ML, KPIs are metrics that tell us how well the model or project is performing — both technically and from a business point of view.

🔹🔹🔹why we need to use kpis for this project?
“In this project, we use KPIs to understand both the data and the business performance. Technical KPIs, like missing values or duplicate rows, ensure the data is clean and reliable. Business KPIs, like average ride cost, ride duration, and customer ratings, show how the ride service is performing and help identify patterns in customer behavior. Overall, KPIs provide clear, measurable insights that guide decisions and make it easier to track improvements over time.”

🔹🔹KPIs:
🔹Revenue Lift (%) = ((New – Old) / Old) × 100

🔹Profit Margin (%) = ((Revenue – Cost) / Revenue) × 100

🔹Conversion Rate (%) = (Completed / Total) × 100

🔹Required Python Libraries: numpy, pandas, scikit-learn, matplotlib, seaborn, scipy, xgboost, lightgbm,  joblib

## Milestone 2: Data Ingestion Pipeline

Objective: Build daily data ingestion workflow.

 Deliverables:

o Sales history and inventory ingestion pipeline.

 Evaluation:

o Daily ingestion runs successfully without errors.


🔹 What is a Pipeline?
A pipeline means a series of steps or stages that data passes through —
from raw input → cleaned data → processed data → final output (like a trained ML model or report).
It’s called a “pipeline” because data flows through it step by step —
just like water flows through connected pipes 🚰.

🔹 Where Pipelines Are Used?
Pipelines are used wherever data or machine learning processes need to be automated, repeated, or handled step by step.

🔹🔹🔹Data Ingestion Pipeline:

A data ingestion pipeline is a specific type of pipeline that focuses on collecting, transforming, and loading data from various sources into a target system, such as a data warehouse, database, or data lake. The primary goal of a data ingestion pipeline is to move data from its source to a destination, often in a format that's suitable for analysis or processing.

- load_data is the data ingestion component, which loads the data into a pandas DataFrame.
- clean_data is the data cleaning component, which removes rows with missing values.
- transform_data is the data transformation component, which adds a new column 'Cost_Category' based on the 'Historical_Cost_of_Ride' column.
- filter_data is the data filtering component, which filters rows where 'Number_of_Riders' is greater than 50.
- output_data is the data output component, which prints the final transformed data.
- The pipeline function runs the entire pipeline, from data ingestion to data output.

# Milestone 3: Exploratory Data Analysis (EDA)

Objective: Identify demand elasticity and customer segmentation.

 Deliverables:

o Detailed EDA report with visualizations.

 Evaluation:

o Insights approved before moving to feature engineering.

  
 
-Check data quality (nulls, duplicates, types)

-Generate summary statistics (.describe())

-Visualize distributions and detect outliers (IQR method, boxplots)

-Analyze correlations using a heatmap

-Explore feature relationships using scatter plots

-Handle categorical variables encoding


# Milestone 4: Baseline Pricing Engine

Objective: Create a rule-based engine for initial comparison.

 Deliverables:

o Time-based and inventory-based pricing rules.

 Evaluation:

o Demonstrated simulated revenue lift over static pricing.


# Baseline Pricing Engine
A Baseline Pricing Engine is a fundamental component in pricing systems that determines the initial price of a product or service based on predefined rules, algorithms, or data. It serves as a starting point for further pricing adjustments, discounts, or optimizations.

🔹🔹🔹Baseline pricing is a pricing strategy that establishes a standard price for a product or service based on certain criteria, such as costs, market conditions, or target profit margins. This baseline price serves as a reference point for future pricing decisions and can be adjusted based on various factors like demand, competition, or inventory levels.

🔹🔹🔹Rule-Based Engine Steps:

1. Define Rules: Identify the conditions and actions for each rule. For example:
    - Rule 1: If time is peak hour (7-9 am), then increase price by 10%.
    - Rule 2: If inventory level is low (< 20), then increase price by 5%.
2. Implement Rules: Write code to represent each rule. This can be done using if-else statements, dictionaries, or even a rules engine library.
3. Evaluate Rules: Create a function that takes in input data (e.g., time, inventory level) and applies the rules to determine the output (e.g., price adjustment).

# dynamic pricing 
Dynamic pricing means adjusting the price of a product or service in real time (or frequently) based on factors like demand, supply, time, competition, or customer behavior.
The price changes automatically depending on the situation.

 # Time-Based Pricing Rules:
 
Time-based pricing rules involve adjusting prices based on the time of day, day of the week, or other temporal factors. This approach recognizes that demand for ride-hailing services varies over time and that prices can be optimized to reflect these fluctuations.
Examples:
1. Peak Hour Pricing: Increase prices during rush hour or peak travel times when demand is high.
2. Off-Peak Pricing: Decrease prices during off-peak hours when demand is low.
3. Surge Pricing: Temporarily increase prices during extreme demand periods, such as holidays or special events.

# Inventory-Based Pricing Rules:

Inventory-based pricing rules involve adjusting prices based on the availability of drivers or vehicles. This approach recognizes that the supply of drivers and vehicles can impact the quality and speed of service.
Examples:
1. Low Inventory Pricing: Increase prices when there are few available drivers or vehicles, indicating high demand and limited supply.
2. High Inventory Pricing: Decrease prices when there are many available drivers or vehicles, indicating low demand and excess supply.

-Compute dynamic price (dyn_price) using multipliers

-Simulate revenue and quantity changes (price elasticity)

-Compare base_revenue vs dyn_revenue

-Calculate revenue_lift_pct overall and by Time_of_Booking


## Milestone 5: Advanced Model Development

Objective: Train ML models for dynamic pricing.

 Deliverables:

o XGBoost and LightGBM models trained and evaluated.

o Backtesting with historical data.

 Evaluation:

o Simulated revenue lift achieved and validated.

   # KEY FEATURES :
   
1. Train XGBoost and LightGBM models:
    - You'll need to prepare your data for training, including feature engineering and splitting into training and testing sets.
    - Train XGBoost and LightGBM models on your training data, tuning hyperparameters as needed.
2. Evaluate model performance:
    - Use metrics such as mean absolute error (MAE) or mean squared error (MSE) to evaluate the performance of both models.
    - Compare the performance of the two models and select the best one.
3. Backtesting with historical data:
    - Use historical data to simulate the performance of your model over time.
    - Evaluate the model's performance on unseen data and calculate the simulated revenue lift.
4. Simulated revenue lift:
    - Calculate the revenue lift achieved by using your dynamic pricing model compared to a baseline (e.g., fixed pricing).
    - Validate the results to ensure they are statistically significant.

    ## Objective: Train ML models for dynamic pricing.
 
 XG Boost: https://xgboost.readthedocs.io/en/stable/tutorials/model.html 

 # XGBoost (Extreme Gradient Boosting)

XGBoost is a popular, open-source machine learning algorithm that uses gradient boosting to build predictive models. It's particularly effective for:

1. Handling complex relationships: XGBoost can capture non-linear relationships between features, making it suitable for dynamic pricing.
2. Handling large datasets: XGBoost is designed to handle large datasets efficiently.
3. Interpretability: XGBoost provides feature importance scores, helping you understand which factors drive pricing decisions.

# LightGBM (Light Gradient Boosting Machine)

LightGBM is another popular gradient boosting algorithm that's known for its:

1. Speed: LightGBM is optimized for speed and can handle large datasets quickly.
2. Efficiency: LightGBM uses novel techniques like Gradient-based One-Side Sampling (GOSS) and Exclusive Feature Bundling (EFB) to reduce computational complexity.
3. Handling categorical features: LightGBM has built-in support for categorical features.

 # why we need to use XGBoost and LightGBM in your dynamic pricing project because they:

1. Handle complex relationships between features.
2. Provide high accuracy and efficiency.
3. Offer feature importance insights.

# Step 1: Data Preprocessing

- The code loads the dataset from a CSV file.
- It drops the Unnamed: 10 column, which is likely an empty column.
- It encodes categorical variables (Location_Category, Customer_Loyalty_Status, Time_of_Booking, and Vehicle_Type) using LabelEncoder, which converts categorical values into numerical values.


# Encode categorical variables 
-- It encodes categorical variables (Location_Category, Customer_Loyalty_Status, Time_of_Booking, and Vehicle_Type) using LabelEncoder, which converts categorical values into numerical values.

--if the Location_Category column has values "Rural", "Suburban", and "Urban", the encoding would be:

- Rural: 0
- Suburban: 1
- Urban: 2

# Define features and target

In machine learning, we need to define two main components:

1. Features (X): These are the input variables that we use to predict the target variable. Features are also known as independent variables or predictors.
2. Target (y): This is the variable that we're trying to predict. The target is also known as the dependent variable or response variable.

# Split data into training and testing sets
# 1. Training Dataset (Train Set): 
-This is the portion of the dataset used to train a machine learning model. The model learns patterns and relationships between the features and target variable from this data.
# 2. Testing Dataset (Test Set):
-This is the portion of the dataset used to evaluate the performance of a trained machine learning model. The model is tested on this data to see how well it generalizes to new, unseen data.
# How to split data?
The typical split ratio is:
- 80% for training (Train Set)
- 20% for testing (Test Set)
# The parameters used in the code
- X: The feature dataset.
- y: The target dataset.
- test_size=0.2: The proportion of the dataset to be used for testing. In this case, 20% of the data will be used for testing, and the remaining 80% will be used for training.
- random_state=42: A seed used to ensure that the split is reproducible. This means that if you run the code again with the same random state, you'll get the same split.

# StandardScaler?

StandardScaler is a technique used to scale numerical data to have a mean of 0 and a standard deviation of 1.

-This can help improve the performance and stability of machine learning models.

# Scale Data?
-By scaling the data, the model can treat all features equally, which can lead to better performance and more accurate predictions.



#  step-2 Train XGBoost model
- xgb_model.fit(X_train, y_train): The model is trained on the training data X_train and y_train.
- The XGBoost model learns patterns in the training data to predict continuous values.
- It combines multiple decision trees to improve prediction accuracy and robustness.

# XGBoost Hyperparameter Tuning
- Hyperparameter tuning is the process of adjusting the parameters of a machine learning model that are set before training the model. These parameters, known as hyperparameters, control the behavior of the model and can significantly impact its performance.

 # example=
 - Learning rate
- Number of hidden layers in a neural network
- Number of trees in a random forest
- Regularization strength
- Batch size

# Make predictions

-Prediction (in Machine Learning):

- A prediction is the output generated by a trained machine learning model when it is given new, unseen input data. It represents the model’s estimate or forecast of the target variable based on patterns it learned from the training data.

# step-4  Evaluate the  models 

- This code evaluates the performance of two machine learning models, XGBoost and LightGBM, using the Mean Squared Error (MSE) metric.

1. xgb_mse = mean_squared_error(y_test, xgb_pred):
    - This line calculates the MSE between the actual values y_test and the predicted values xgb_pred from the XGBoost model.
    - The mean_squared_error function from scikit-learn's metrics module is used to calculate the MSE.

2. lgb_mse = mean_squared_error(y_test, lgb_pred):
    - This line calculates the MSE between the actual values y_test and the predicted values lgb_pred from the LightGBM model.

What is Mean Squared Error (MSE)?

- MSE measures the average squared difference between predicted and actual values.
- Lower MSE values indicate better model performance.



# Evaluate the models by MSE, MAE, R2
1. Mean Squared Error (MSE): Measures the average squared difference between predicted and actual values. Lower values are better.
2. Mean Absolute Error (MAE): Measures the average absolute difference between predicted and actual values. Lower values are better.
3. R-squared (R2): Measures the proportion of variance in the actual values that's explained by the model. Higher values (closer to 1) are better.



# step-5

# Backtesting with historical data.

-Backtesting is a process used to evaluate the performance of a predictive model or a trading strategy using historical data. 

-It involves simulating the model's predictions or the strategy's trades on past data to assess its potential performance in real-world scenarios.



#  Evaluation:

# o Simulated revenue lift achieved and validated.

-The simulated_revenue_lift function calculates the difference between the total predicted revenue and the total actual revenue.

- The revenue lift is calculated as the sum of the predicted values minus the sum of the actual values.

-Revenue Lift (%)=PredictedRevenue−Historical Revenue/Historical Revenue​×100


