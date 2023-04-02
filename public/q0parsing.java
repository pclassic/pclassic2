import java.io.BufferedReader;
import java.io.InputStreamReader;
import java.util.Scanner;

public class q0 {
    // Buffered Reader -- read a string on a line
    public static void read_string() throws Exception {
        // declare a reader
        BufferedReader reader = new BufferedReader(new InputStreamReader(System.in));
        // read the string
        String str = reader.readLine();
        System.out.println(str);
    }
    // Scanner -- read a string on a line
    public static void scanner_read_string() {
        // declare a scanner
        Scanner scan = new Scanner(System.in);
        // read the string
        String str = scan.nextLine();
        System.out.println(str);
    }
    
    // Buffered Reader -- read a single integer
    public static void read_single_integer() throws Exception {
        BufferedReader reader = new BufferedReader(new InputStreamReader(System.in));
        int num = Integer.parseInt(reader.readLine());
        System.out.println(num);
    }
    // Scanner -- read a single integer
    public static void scanner_read_single_integer() {
        Scanner scan = new Scanner(System.in);
        int num = scan.nextInt();
        System.out.println(num);
    }
    // Buffered Reader -- read multiple integers on a line
    public static void read_multiple_integers() throws Exception {
        // declare a reader
        BufferedReader reader = new BufferedReader(new InputStreamReader(System.in));
        // we'll read in three integers here
        String ints = reader.readLine();
        int a = Integer.parseInt(ints.split(" ")[0]);
        int b = Integer.parseInt(ints.split(" ")[1]);
        int c = Integer.parseInt(ints.split(" ")[2]);
        System.out.println(a + " " + b + " " + c);
    }
    // Scanner -- read multiple integers on a line
    public static void scanner_read_multiple_integers() {
        Scanner scan = new Scanner(System.in);
        // we'll read in three integers
        int a = scan.nextInt();
        int b = scan.nextInt();
        int c = scan.nextInt();
        System.out.println(a + " " + b + " " + c);
    }

    // Buffered Reader -- read multiple integers into an array
    public static void read_integers_into_array() throws Exception {
        BufferedReader reader = new BufferedReader(new InputStreamReader(System.in));
        // first, we read in the length of the array
        int length = Integer.parseInt(reader.readLine());
        // declare an array to store the ints
        int[] array = new int[length];
        // read in the integers, and loop through to store them in the array
        String ints = reader.readLine();
        for (int i = 0; i < length; i++) {
            array[i] = Integer.parseInt(ints.split(" ")[i]);
        }
        // print out the array
        for (int i = 0; i < length; i++) {
            System.out.print(array[i] + " ");
        }
        System.out.println();
        
    }

    // Scanner -- read multiple integers into an array
    public static void scanner_read_integers_into_array() {
        // declare a scanner
        Scanner scan = new Scanner(System.in);
        // first, we read in the length of the array
        int length = scan.nextInt();
        // declare an array to store the ints
        int[] array = new int[length];
        // loop, and read each integer one by one
        for (int i = 0; i < length; i++) {
            array[i] = scan.nextInt();
        }
        // print out the array
        for (int i = 0; i < length; i++) {
            System.out.print(array[i] + " ");
        }
        System.out.println();
    }
    // Buffered Reader -- read a 2D array
    public static void read_into_2D_array() throws Exception {
        // first declare a reader
        BufferedReader reader = new BufferedReader(new InputStreamReader(System.in));
        // we are reading in an m x n array (m rows, n columns)
        // first, we read in the dimensions of the array (m, n) on one line
        String[] dimensions = reader.readLine().split(" ");
        int m = Integer.parseInt(dimensions[0]);
        int n = Integer.parseInt(dimensions[1]);
        // declare the array
        int[][] array = new int[m][n];
        // loop through the rows, and read in the integers on each row
        for (int i = 0; i < m; i++) {
            String[] row = reader.readLine().split(" ");
            for (int j = 0; j < n; j++) {
                array[i][j] = Integer.parseInt(row[j]);
            }
        }
        // print out the array
        for (int i = 0; i < m; i++) {
            for (int j = 0; j < n; j++) {
                System.out.print(array[i][j] + " ");
            }
            System.out.println();
        }

    }
    // Scanner -- read a 2D array
    public static void scanner_read_into_2D_array() {
        // declare a scanner
        Scanner scan = new Scanner(System.in);
        // we are reading in an m x n array (m rows, n columns)
        // first, we read in the dimensions of the array (m, n) on one line
        int m = scan.nextInt();
        int n = scan.nextInt();
        // declare the array
        int[][] array = new int[m][n];
        // loop through the rows, and read in the integers on each row
        for (int i = 0; i < m; i++) {
            for (int j = 0; j < n; j++) {
                array[i][j] = scan.nextInt();
            }
        }
        // print out the array
        for (int i = 0; i < m; i++) {
            for (int j = 0; j < n; j++) {
                System.out.print(array[i][j] + " ");
            }
            System.out.println();
        }
    }
    // Buffered Reader -- multitest
    public static void read_multitest() throws Exception {  
        // declare a reader
        BufferedReader reader = new BufferedReader(new InputStreamReader(System.in));
        // we have t test cases and in each test case we get 1 integer
        int test = Integer.parseInt(reader.readLine());
        // loop through the test cases and get data per test case
        for (int i = 0; i < test; i++) {
            int num = Integer.parseInt(reader.readLine());
            System.out.println(num);
        }

    }
    // Scanner -- multitest
    public static void scanner_read_multitest() {
        // declare a scanner
        Scanner scan = new Scanner(System.in);
        // we have t test cases and in each test case we get 1 integer
        int test = scan.nextInt();
        // loop through the test cases and get data per test case
        for (int i = 0; i < test; i++) {
            int num = scan.nextInt();
            System.out.println(num);
        }
    }
    
    public static void main(String[] args) throws Exception {
        // you do not have to worry about this
        // this is just an "interactive" part of running the code
        // it allows you to test different parsers
        BufferedReader reader = new BufferedReader(new InputStreamReader(System.in));
        System.out.println("A: Buffered Reader \n B: Scanner");
        String selection = reader.readLine();
        System.out.println("1: read string \n 2: read single integer \n" +  
                            "3 : read multiple (3) integers \n 4: read integers into array \n" + 
                            "5: read into 2D array \n 6: multitest");
        int choice = Integer.parseInt(reader.readLine());
        if (selection.toUpperCase().equals("A")) {
            switch (choice) {
                case 1:
                    read_string();
                    break;
                case 2:
                    read_single_integer();
                    break;
                case 3:
                    read_multiple_integers();
                    break;
                case 4:
                    read_integers_into_array();
                    break;
                case 5:
                    read_into_2D_array();
                    break;
                case 6:
                    read_multitest();
                    break;
                default:
                    System.out.println("Invalid choice");
                    break;
            }
        } else {
            switch (choice) {
                case 1:
                    scanner_read_string();
                    break;
                case 2:
                    scanner_read_single_integer();
                    break;
                case 3:
                    scanner_read_multiple_integers();
                    break;
                case 4:
                    scanner_read_integers_into_array();
                    break;
                case 5:
                    scanner_read_into_2D_array();
                    break;
                case 6:
                    scanner_read_multitest();
                    break;
                default:
                    System.out.println("Invalid choice");
                    break;
            }
        }
       
    }
}