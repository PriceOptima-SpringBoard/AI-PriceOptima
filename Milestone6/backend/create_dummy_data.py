import pandas as pd
import numpy as np

# Create dummy data if original file is missing or corrupted
def create_dummy_data():
    data = {
        'Number_of_Riders': np.random.randint(20, 100, 1000),
        'Number_of_Drivers': np.random.randint(5, 89, 1000),
        'Location_Category': np.random.choice(['Urban', 'Suburban', 'Rural'], 1000),
        'Customer_Loyalty_Status': np.random.choice(['Regular', 'Silver', 'Gold'], 1000),
        'Number_of_Past_Rides': np.random.randint(0, 100, 1000),
        'Average_Ratings': np.random.uniform(3.5, 5.0, 1000),
        'Time_of_Booking': np.random.choice(['Morning', 'Evening', 'Night', 'Afternoon'], 1000),
        'Vehicle_Type': np.random.choice(['Economy', 'Premium'], 1000),
        'Expected_Ride_Duration': np.random.randint(10, 180, 1000),
        'Historical_Cost_of_Ride': np.random.uniform(26, 836, 1000)
    }
    
    df = pd.DataFrame(data)
    
    # Save to standard location
    import os
    os.makedirs('../../Data/raw', exist_ok=True)
    df.to_csv('../../Data/raw/dynamic_pricing.csv', index=False)
    print("Dummy data created at ../../Data/raw/dynamic_pricing.csv")

if __name__ == '__main__':
    create_dummy_data()
