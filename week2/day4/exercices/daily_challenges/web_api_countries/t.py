import requests
import psycopg2
import random

# Fetch countries from REST Countries API
url = "https://restcountries.com/v3.1/all"
response = requests.get(url)
countries = response.json()  # This is a list of dicts

# Ensure it's actually a list
if isinstance(countries, dict):
    countries = [countries]

# Pick 10 random countries
random_countries = random.sample(countries, 10)

# Connect to PostgreSQL
conn = psycopg2.connect(
    dbname="countries",
    user="postgres",
    password="root",
    host="localhost",
    port="5432"
)
cur = conn.cursor()

# Create table if not exists
cur.execute("""
CREATE TABLE IF NOT EXISTS countries (
    id SERIAL PRIMARY KEY,
    name VARCHAR(255),
    capital VARCHAR(255),
    flag VARCHAR(255),
    subregion VARCHAR(255),
    population BIGINT
)
""")

# Insert random countries
for c in random_countries:
    name = c.get("name", {}).get("common", "Unknown")
    capital = c.get("capital", ["Unknown"])[0] if c.get("capital") else "Unknown"
    flag = c.get("flags", {}).get("png", "")
    subregion = c.get("subregion", "Unknown")
    population = c.get("population", 0)

    cur.execute("""
        INSERT INTO countries (name, capital, flag, subregion, population)
        VALUES (%s, %s, %s, %s, %s)
    """, (name, capital, flag, subregion, population))

conn.commit()
cur.close()
conn.close()
print("✅ 10 random countries inserted successfully!")
