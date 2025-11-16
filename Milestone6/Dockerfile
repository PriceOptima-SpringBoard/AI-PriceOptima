# Use official Python image
FROM python:3.12-slim

# Set working directory
WORKDIR /app

# Install libgomp for LightGBM
RUN apt-get update && apt-get install -y --no-install-recommends \
    libgomp1 \
 && rm -rf /var/lib/apt/lists/*

# Copy project files
COPY . .

# Install dependencies
RUN pip install --no-cache-dir -r requirements.txt

COPY main.py /app/
COPY xgb_pricing_model.pkl /app/
COPY lgb_pricing_model.pkl /app/
COPY model_columns.pkl /app/

# Expose FastAPI default port
EXPOSE 8000

# Run FastAPI app using uvicorn
CMD ["uvicorn", "main:app", "--host", "0.0.0.0", "--port", "8000"]











