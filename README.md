📌 Overview

AI Price Optima is a machine learning–driven dynamic pricing system that adjusts ride fares in real-time based on demand, supply, and customer behavior. It helps businesses maximize revenue while maintaining fairness and transparency.

🧩 Milestone 1 — Data Preparation

Dataset: Dynamic Pricing Dataset (Kaggle)

Imported libraries, loaded dataset, checked structure, and defined KPIs:

Revenue Lift (%) = ((New − Old) / Old) × 100

Profit Margin (%) = ((Revenue − Cost) / Revenue) × 100

Conversion Rate (%) = (Completed / Total) × 100

🔁 Milestone 2 — Data Ingestion Pipeline

Automated loading, cleaning, encoding, and saving of data.
Steps include:

Remove nulls & outliers

Drop duplicates

Encode categorical columns

Save as cleaned_csv_data.csv

📊 Milestone 3 — Exploratory Data Analysis (EDA)

Analyzed demand elasticity and customer segmentation using:

Histograms, boxplots, heatmaps, scatterplots

Average ride cost by Location, Loyalty, and Time of Booking

⚙️ Milestone 4 — Baseline Pricing Engine

Built a rule-based engine for comparison before ML models.

Rules Applied:

Time-Based: Morning +20%, Evening +15%, Night +10%

Inventory-Based: Rider/Driver ratio > 1.5 → +25%, < 0.8 → −10%

Output:

Generated Baseline_Price and computed Total Baseline Revenue
