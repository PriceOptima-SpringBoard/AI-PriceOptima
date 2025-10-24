# AI-PriceOptima

## Project Goal

AI-PriceOptima is a dynamic pricing system for ride-share platforms that analyzes historical ride data, customer behavior, and supply-demand ratios to optimize ride prices and maximize revenue.

---

## Project Structure

```
.
├── ai_priceoptima.ipynb         # Main notebook: KPIs, EDA, pricing engine
├── dataingestion_pipeline/       # Script for data ingestion
├── baseline_pricing/             # Rule-based pricing engine
├── runpipeline.py                # Main script to execute the pipeline
├── data/
│   ├── raw/                     # Original dataset
│   │   └── dynamic_pricing.csv
│   ├── cleaned/                 # Preprocessed dataset
│   │   └── cleaned_data.csv
│   └── final/                   # Output after pricing simulation
│       └── baseline_pricing_output.csv
```

---

## Milestones

1. **KPIs & Data Collection**

   * Define revenue targets and collect ride datasets.

2. **Data Ingestion Pipeline**

   * Automate daily import of ride and inventory data.

3. **Exploratory Data Analysis (EDA)**

   * Visualize demand, customer segments, and ride patterns.

4. **Baseline Pricing Engine**

   * Apply rule-based pricing using time-of-day and supply-demand factors.
   * Simulate revenue lift compared to static pricing.

---

## Key Features

1. **Dynamic Rule-Based Pricing**

   * Adjusts ride prices based on time of day and supply-demand ratio.
   * Ensures fair pricing while maximizing revenue.

2. **Revenue Simulation**

   * Estimates revenue impact compared to fixed baseline pricing.

3. **Customer Segmentation & Demand Analysis**

   * Analyzes rides by loyalty status, location, and booking time.
   * Identifies high-value customers and peak demand periods.

---

## Columns in `baseline_pricing_output.csv`

| Column Name                     | Description                                       |
| ------------------------------- | ------------------------------------------------- |
| Number_of_Riders                | Number of riders requesting a ride                |
| Number_of_Drivers               | Number of available drivers                       |
| Number_of_Past_Rides            | Historical rides by customer                      |
| Average_Ratings                 | Average driver/rider ratings                      |
| Expected_Ride_Duration          | Ride duration in minutes                          |
| Historical_Cost_of_Ride         | Actual price historically paid                    |
| Location_Category_Suburban      | One-hot encoded location feature                  |
| Location_Category_Urban         | One-hot encoded location feature                  |
| Customer_Loyalty_Status_Regular | One-hot encoded loyalty feature                   |
| Customer_Loyalty_Status_Silver  | One-hot encoded loyalty feature                   |
| Time_of_Booking_Evening         | One-hot encoded booking time                      |
| Time_of_Booking_Morning         | One-hot encoded booking time                      |
| Time_of_Booking_Night           | One-hot encoded booking time                      |
| Vehicle_Type_Premium            | One-hot encoded vehicle type                      |
| Demand_Ratio                    | Supply-demand ratio (riders/drivers)              |
| Baseline_Price                  | Average reference price for baseline              |
| Baseline_Revenue                | Baseline revenue = Baseline_Price × Demand_Ratio  |
| Revenue_Lift                    | Difference between simulated and baseline revenue |

---

## How to Run

1. Install required packages:

```bash
pip install pandas numpy matplotlib seaborn
```

2. Execute the pipeline:

```bash
python runpipeline.py
```

3. Output file:

```
data/final/baseline_pricing_output.csv
```

Contains all original ride features plus additional columns: `Demand_Ratio`, `Baseline_Price`, `Baseline_Revenue`, and `Revenue_Lift`.

---
