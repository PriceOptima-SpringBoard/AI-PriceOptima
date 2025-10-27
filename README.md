# 🧠 AI: PriceOptima

AI PriceOptima is a machine learning–driven dynamic pricing system designed to optimize product prices in real time or periodically. The goal is to maximize revenue, maintain competitiveness, and enhance customer trust through data-driven pricing decisions. The system uses historical sales and inventory data to predict optimal prices using advanced ML techniques, ensuring adaptability, transparency, and profitability.

The project workflow includes several key stages. Data ingestion involves collecting data from the Kaggle Dynamic Pricing Dataset and the Statso Case Study, along with integrating sales and inventory information. Feature engineering focuses on cleaning, aggregating, and generating features such as demand elasticity, seasonality, competitor price index, and inventory health. Model training and evaluation are conducted using algorithms like XGBoost, LightGBM, and optionally Reinforcement Learning, with performance assessed through metrics such as revenue lift, conversion rate, and profit margin. The pricing recommendation engine applies business rules like minimum and maximum thresholds and profit margins to predicted price ranges, ensuring compliance with competitiveness and profitability policies. The serving layer exposes FastAPI endpoints for delivering pricing recommendations, and Docker is used to ensure scalability and portability. Visualization and monitoring are managed through a React.js dashboard with Plotly.js for real-time KPI tracking and actionable insights.

The system architecture can be summarized as:  
Data Sources → Feature Engineering → Model Training → Pricing Engine → FastAPI Service → React Dashboard.  

The project uses a modern and scalable tech stack. Data is managed and processed using CSV files or PostgreSQL, along with Python libraries such as Pandas and Dask. Machine learning and analytics are implemented using scikit-learn, XGBoost, LightGBM, and optionally reinforcement learning models. APIs and backend services are powered by FastAPI and containerized using Docker. The frontend visualization is built with React.js and Plotly.js, while logging and monitoring are handled through FastAPI logs and PostgreSQL metrics.

The development process is organized into milestones. The first milestone, Requirements and Data Preparation, focuses on defining KPIs, collecting datasets, and validating data availability. The second milestone, Data Ingestion Pipeline, involves building a daily ingestion workflow for sales and inventory data. The third milestone, Exploratory Data Analysis (EDA), identifies demand elasticity and customer segmentation through detailed reports and visualizations. The fourth milestone, Baseline Pricing Engine, implements time- and inventory-based pricing rules for initial comparisons. The fifth milestone, Advanced Model Development, trains and evaluates ML models like XGBoost and LightGBM, validating simulated revenue lift. The final milestone, Deployment and Dashboard Delivery, includes containerizing FastAPI endpoints with Docker, building a React.js dashboard for real-time strategy monitoring, and completing final evaluations with user acceptance testing.

To deploy the project, clone the repository using:
```bash
git clone https://github.com/yourusername/AI-PriceOptima.git
cd AI-PriceOptima
