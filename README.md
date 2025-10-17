## AI-PriceOptima — Dynamic Pricing with Machine Learning

AI-PriceOptima is a hands-on project to design a machine learning–driven dynamic pricing system that adjusts prices in real-time or on a schedule to maximize revenue while maintaining competitiveness and customer trust.

The project currently focuses on data ingestion, cleaning, exploratory analysis, and foundations for model development.

---

### Repository Contents
- `AI_priceoptima.ipynb`: Main project notebook with goals, setup, and EDA scaffolding.
- `ingestion_pipeline1.ipynb`: Reusable data ingestion and cleaning pipeline (pandas-based).
- `dynamic_pricing.csv`: Raw sample dataset used for exploration.
- `cleaned_dynamic_pricing.csv`: Cleaned dataset produced by the pipeline.

---

### Data
- Source: Kaggle Dynamic Pricing dataset — `https://www.kaggle.com/datasets/arashnic/dynamic-pricing-dataset/data`
- Place the downloaded CSV(s) at the project root (or update paths in the notebooks).

---

### Environment and Requirements
The notebooks utilize Python with typical data-science packages.

Core libraries already used:
- pandas, numpy, scikit-learn, matplotlib, seaborn, scipy
- xgboost, lightgbm, catboost (for tree-based modeling; planned/optional)
- joblib (model persistence)
- flask, fastapi, uvicorn (for serving APIs; planned)

Create a virtual environment (Windows PowerShell):
```powershell
python -m venv env
./env/Scripts/Activate.ps1
python -m pip install --upgrade pip
pip install pandas numpy scikit-learn matplotlib seaborn scipy xgboost lightgbm catboost joblib fastapi uvicorn flask
```

If you prefer a minimal install initially:
```powershell
pip install pandas numpy scikit-learn matplotlib seaborn scipy
```

---

### Quickstart
1) Activate your environment and install dependencies (see above).
2) Open the notebooks:
   - `AI_priceoptima.ipynb` for objectives, setup, and EDA steps.
   - `ingestion_pipeline1.ipynb` to run the ingestion/cleaning pipeline.
3) Ensure `dynamic_pricing.csv` exists at the project root, or update the file path in the notebook.

Run Jupyter:
```powershell
python -m pip install jupyter
jupyter notebook
```

---

### Ingestion Pipeline
The ingestion notebook demonstrates a generic pandas-based pipeline that:
- Loads CSV data
- Reports basic info (schema, dtypes)
- Handles missing values (median for numeric, mode for categorical)
- One-hot encodes categorical features (drop_first=True)
- Removes duplicates
- Saves a cleaned CSV as `cleaned_<original>.csv`

You can adapt it by changing column-handling rules or extending transformations.

---

### Exploratory Data Analysis (EDA)
EDA tasks noted in `p1.txt` and scaffolded in `AI_priceoptima.ipynb`:
- Null/duplicate checks and data consistency
- Basic visualizations
- Outlier detection (with/without boxplots)
- Correlation heatmaps and linearity checks
- Brief dataset summary

---

### Modeling (Planned)
- Baseline models (e.g., linear models, tree-based regressors)
- Advanced models (XGBoost/LightGBM/CatBoost)
- Feature engineering for pricing signals (demand, seasonality, inventory)
- Model selection, validation, and calibration
- Export models with `joblib`

---

### Serving (Planned)
- REST API with FastAPI or Flask to expose price recommendations
- Local dev with `uvicorn` for FastAPI
- Simple request/response schema for inference

---

### Milestones and Status
- Project Objective and Milestone 1 are documented in `AI_priceoptima.ipynb`.
- Libraries are installed and EDA scaffold is in place.
- Ingestion pipeline implemented as a notebook and produces `cleaned_dynamic_pricing.csv`.

Upcoming work:
- Complete EDA and feature engineering
- Train/evaluate pricing models
- Package an inference API

---

### How to Contribute / Extend
- Convert the ingestion pipeline into a Python module or script for automation
- Add unit tests for data validation
- Create a `requirements.txt` and/or `environment.yml`
- Add CI linting/tests and a simple serving demo

---

### Acknowledgments
- Dataset: Kaggle — `https://www.kaggle.com/datasets/arashnic/dynamic-pricing-dataset/data`

---




