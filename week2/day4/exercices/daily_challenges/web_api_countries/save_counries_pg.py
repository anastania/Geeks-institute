import psycopg2
import requests
from psycopg2 import sql

# 🔧 Database configuration
DB_NAME = "countries"   
DB_USER = "postgres"    
DB_PASS = "root"  
DB_HOST = "localhost"
DB_PORT = "5432"

# 🌍 API URL
API_URL = "https://restcountries.com/v3.1/all?fields=name,capital,flags,subregion,population"


def connect_db():
    """Connect to PostgreSQL database."""
    try:
        conn = psycopg2.connect(
            dbname=DB_NAME,
            user=DB_USER,
            password=DB_PASS,
            host=DB_HOST,
            port=DB_PORT
        )
        print("✅ Database connection successful")
        return conn
    except Exception as e:
        print(f"❌ Database connection failed: {e}")
        return None


def create_table(conn):
    """Create table if it doesn't exist."""
    try:
        cur = conn.cursor()
        cur.execute("""
            CREATE TABLE IF NOT EXISTS countries (
                id SERIAL PRIMARY KEY,
                name VARCHAR(255),
                capital VARCHAR(255),
                subregion VARCHAR(100),
                population BIGINT
            );
        """)
        conn.commit()
        cur.close()
        print("✅ Table 'countries' is ready")
    except Exception as e:
        print(f"❌ Failed to create table: {e}")


def fetch_countries():
    """Fetch countries from API."""
    try:
        response = requests.get(API_URL)
        response.raise_for_status()  # raise error for bad status
        countries = response.json()
        print(f"✅ Fetched {len(countries)} countries from API")
        return countries
    except Exception as e:
        print(f"❌ Failed to fetch countries from API: {e}")
        return []


def save_countries(conn, countries):
    """Save countries into database."""
    try:
        cur = conn.cursor()
        for country in countries:
            name = country.get("name", {}).get("common", "Unknown")
            capital = country.get("capital", ["Unknown"])[0] if country.get("capital") else "Unknown"
            subregion = country.get("subregion", "Unknown")
            population = country.get("population", 0)

            cur.execute("""
                INSERT INTO countries (name, capital, subregion, population)
                VALUES (%s, %s, %s, %s)
                ON CONFLICT DO NOTHING;
            """, (name, capital, subregion, population))

        conn.commit()
        cur.close()
        print("✅ Countries saved into database")
    except Exception as e:
        print(f"❌ Failed to save countries: {e}")


def main():
    conn = connect_db()
    if not conn:
        return

    create_table(conn)
    countries = fetch_countries()
    if countries:
        save_countries(conn, countries)

    conn.close()


if __name__ == "__main__":
    main()
