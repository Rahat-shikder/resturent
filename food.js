// FoodieDB.java
import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;

public class FoodieDB {
    private static final String URL = "jdbc:mysql://localhost:3306/foodie";
    private static final String USERNAME = "root";
    private static final String PASSWORD = "password";

    public static Connection getConnection() throws SQLException {
        return DriverManager.getConnection(URL, USERNAME, PASSWORD);
    }

    public static void createTables() throws SQLException {
        Connection conn = getConnection();
        PreparedStatement stmt = conn.prepareStatement("CREATE TABLE IF NOT EXISTS restaurants (id INT PRIMARY KEY, name VARCHAR(255), address VARCHAR(255))");
        stmt.executeUpdate();
        stmt = conn.prepareStatement("CREATE TABLE IF NOT EXISTS menus (id INT PRIMARY KEY, restaurant_id INT, name VARCHAR(255), price DECIMAL(10, 2))");
        stmt.executeUpdate();
        stmt = conn.prepareStatement("CREATE TABLE IF NOT EXISTS orders (id INT PRIMARY KEY, restaurant_id INT, customer_name VARCHAR(255), order_date DATE)");
        stmt.executeUpdate();
        conn.close();
    }
}