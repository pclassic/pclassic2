import java.io.BufferedReader;
import java.io.InputStreamReader;
import java.util.Scanner;

public class q0 {
    public static void read_string() throws Exception {
        BufferedReader reader = new BufferedReader(new InputStreamReader(System.in));
        String str = reader.readLine();
        System.out.println(str);
    }

    public static void scanner_read_string() {
        Scanner scan = new Scanner(System.in);
        String str = scan.nextLine();
        System.out.println(str);
    }
    
    public static void read_single_integer() throws Exception {
        BufferedReader reader = new BufferedReader(new InputStreamReader(System.in));
        int num = Integer.parseInt(reader.readLine());
        System.out.println(num);
    }

    public static void scanner_read_single_integer() {
        Scanner scan = new Scanner(System.in);
        int num = scan.nextInt();
        System.out.println(num);
    }
    
    public static void read_multiple_integers() throws Exception {
        BufferedReader reader = new BufferedReader(new InputStreamReader(System.in));
        String ints = reader.readLine();
        int a = Integer.parseInt(ints.split(" ")[0]);
        int b = Integer.parseInt(ints.split(" ")[1]);
        int c = Integer.parseInt(ints.split(" ")[2]);
        System.out.println(a + " " + b + " " + c);
    }

    public static void scanner_read_multiple_integers() {
        Scanner scan = new Scanner(System.in);
        int a = scan.nextInt();
        int b = scan.nextInt();
        int c = scan.nextInt();
        System.out.println(a + " " + b + " " + c);
    }

    public static void read_integers_into_array() throws Exception {
        BufferedReader reader = new BufferedReader(new InputStreamReader(System.in));
        int length = Integer.parseInt(reader.readLine());
        int[] array = new int[length];
        String ints = reader.readLine();
        for (int i = 0; i < length; i++) {
            array[i] = Integer.parseInt(ints.split(" ")[i]);
        }
        for (int i = 0; i < length; i++) {
            System.out.print(array[i] + " ");
        }
        System.out.println();
        
    }

    public static void scanner_read_integers_into_array() {
        Scanner scan = new Scanner(System.in);
        int length = scan.nextInt();
        int[] array = new int[length];
        for (int i = 0; i < length; i++) {
            array[i] = scan.nextInt();
        }
        for (int i = 0; i < length; i++) {
            System.out.print(array[i] + " ");
        }
        System.out.println();
    }

    public static void read_into_2D_array() throws Exception {
        BufferedReader reader = new BufferedReader(new InputStreamReader(System.in));
        String[] dimensions = reader.readLine().split(" ");
        int m = Integer.parseInt(dimensions[0]);
        int n = Integer.parseInt(dimensions[1]);
        int[][] array = new int[m][n];
        for (int i = 0; i < m; i++) {
            String[] row = reader.readLine().split(" ");
            for (int j = 0; j < n; j++) {
                array[i][j] = Integer.parseInt(row[j]);
            }
        }
        for (int i = 0; i < m; i++) {
            for (int j = 0; j < n; j++) {
                System.out.print(array[i][j] + " ");
            }
            System.out.println();
        }

    }

    public static void scanner_read_into_2D_array() {
        Scanner scan = new Scanner(System.in);
        int m = scan.nextInt();
        int n = scan.nextInt();
        int[][] array = new int[m][n];
        for (int i = 0; i < m; i++) {
            for (int j = 0; j < n; j++) {
                array[i][j] = scan.nextInt();
            }
        }
        for (int i = 0; i < m; i++) {
            for (int j = 0; j < n; j++) {
                System.out.print(array[i][j] + " ");
            }
            System.out.println();
        }
    }

    public static void read_multitest() throws Exception {
        BufferedReader reader = new BufferedReader(new InputStreamReader(System.in));
        int test = Integer.parseInt(reader.readLine());
        for (int i = 0; i < test; i++) {
            int num = Integer.parseInt(reader.readLine());
            System.out.println(num);
        }

    }

    public static void scanner_read_multitest() {
        Scanner scan = new Scanner(System.in);
        int test = scan.nextInt();
        for (int i = 0; i < test; i++) {
            int num = scan.nextInt();
            System.out.println(num);
        }
    }
    
    public static void main(String[] args) throws Exception {
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