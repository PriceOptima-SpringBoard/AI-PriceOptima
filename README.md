# 🌟 **AI-PriceOptima – Intelligent Dynamic Pricing System**

### *A Real-World Internship Project by **Sumit***

📌 *SpringBoard Price Optimization Internship — 2025*

---

<p align="center">
  <img src="https://img.shields.io/badge/Python-3.10-blue?style=for-the-badge">
  <img src="https://img.shields.io/badge/Jupyter-Notebook-orange?style=for-the-badge">
  <img src="https://img.shields.io/badge/Machine%20Learning-Pricing%20Engine-green?style=for-the-badge">
  <img src="https://img.shields.io/badge/Status-Active-brightgreen?style=for-the-badge">
</p>

---

## 📘 **Project Overview**

**AI-PriceOptima** is a smart **Dynamic Pricing Engine** that uses data-driven logic to optimize prices based on:

✔ Demand
✔ Time of Booking
✔ Inventory / Ratio
✔ Customer Behaviour

This system simulates how global companies like **Uber, Amazon, Airlines & Hotels** adjust their prices dynamically to maximize **revenue, demand conversion, and profitability**.

---

## 🎯 **Key Objectives**

* Analyze price-demand behavior
* Understand price elasticity 📉💸
* Build baseline and advanced pricing engines
* Perform extensive EDA on cleaned data
* Implement revenue lift calculations (KPI)
* Develop industry-ready pricing logic
* Structure project files like a real ML system

---

# 📂 **Project Folder Structure**

```
AI-PriceOptima-Sumit/
│
├── cleaned_csv_data.csv
├── priceoptima_full_task.ipynb
├── dynamic_pricing_engine.py     ← NEW Advanced Code File
└── README.md
```

---

# 🧩 **Dataset Description**

### 📄 File: `cleaned_csv_data.csv`

This dataset contains the core variables required to simulate and analyze real-time price optimization.

### 🔑 Key Columns

| Column Name       | Meaning                                               |
| ----------------- | ----------------------------------------------------- |
| `riders`          | Number of customers / demand                          |
| `price`           | Base product/service price                            |
| `booking_ratio`   | Demand strength indicator                             |
| `Time_of_Booking` | Time category (Morning / Afternoon / Evening / Night) |
| `location`        | Simulated region segmentation                         |
| `loyalty_status`  | Simulated customer segmentation                       |

📌 *These fields help test different pricing strategies like time-based, ratio-based, and segment-based pricing.*

---

# 📒 **Main Notebook**

### 📘 `priceoptima_full_task.ipynb`

This notebook contains the full analysis pipeline:

### **1️⃣ Data Cleaning**

* Removed missing data
* Encoded categorical fields
* Ensured correct formats

### **2️⃣ EDA & Visualization**

* Price vs Riders scatter
* Heatmaps
* Peak/off-peak trend analysis
* Segment-wise behavior

### **3️⃣ Business Insights**

* Evening/Night have highest demand
* Demand is price-sensitive
* Inventory (available units/demand ratio) impacts conversion

### **4️⃣ Static vs Dynamic Comparison**

* KPI: **Simulated Revenue Lift (%)**
* Visualized revenue improvement using graphs

---

# 🧮 **Milestone 4 – Baseline Pricing Engine**

### 🧠 **Rule Logic**

* If **booking_ratio > 0.5** → Increase price by **+15%**
* Else → Reduce price by **−10%**

📈 **Simulated Revenue Lift:** **8.47%**

This baseline is used as a benchmark to compare future models.

---

# ⚙️ **Milestone 5 – Advanced Dynamic Pricing Engine**

Enhanced logic that combines:

✔ Time-based pricing
✔ Demand-based pricing
✔ Inventory-level analysis

### ⏳ **Time-Based Logic**

| Time                | Action               |
| ------------------- | -------------------- |
| Evening / Night     | +10% (peak hours)    |
| Morning / Afternoon | −5% (off-peak hours) |

### 📈 **Final Result**

📌 **Simulated Dynamic Pricing Revenue Lift:** **14.62%**

This shows significant improvement over static & baseline methods.

---

# 🆕 **NEW – `dynamic_pricing_engine.py`**

This new code file makes your project more powerful and professional.

---

## 🚀 **What this file contains**

* Complete dynamic pricing engine function
* Time-of-day adjustment
* Booking ratio logic
* Revenue calculation module
* Helper utilities for reuse in apps/APIs

### ⭐ **Why this file is important**

✔ Makes your logic reusable
✔ Helps integrate the engine into production apps
✔ Demonstrates real development practices
✔ Makes the GitHub repository structured & professional

---

# ⚒️ Tech Stack

### 🔹 Programming & Analytics

* Python
* Jupyter Notebook

### 🔹 Libraries

* Pandas
* NumPy
* Matplotlib
* Seaborn
* Scikit-learn (for future ML integration)

### 🔹 Tools

* Git & GitHub
* VS Code / Jupyter

---

# 📊 **Visual Results**

*(Add screenshots here later — placeholders included)*

📌 **EDA Plots**
`/screenshots/eda_plot_1.png`
`/screenshots/price_vs_riders.png`

📌 **Revenue Comparison Chart**
`/screenshots/revenue_lift_baseline.png`

📌 **Dynamic Model Chart**
`/screenshots/revenue_lift_dynamic.png`

---

# 🏁 **Conclusion**

AI-PriceOptima demonstrates how data science and pricing strategies can:

✔ Improve revenue
✔ Respond to demand fluctuations
✔ Optimize prices in real time
✔ Prepare a system suitable for ML deployment

Your project is now **industry-ready**, cleanly structured, and attractive for:

* Hiring Managers
* Mentors
* Internship Evaluators
* Recruiter portfolio review



Just tell me!
